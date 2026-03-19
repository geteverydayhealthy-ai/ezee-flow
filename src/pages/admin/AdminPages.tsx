import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Save, Trash2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type PageContent = Tables<"page_content">;

const AdminPages = () => {
  const { user } = useAuth();
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ page_slug: "", section_key: "", content: "{}" });

  const fetchPages = async () => {
    const { data } = await supabase.from("page_content").select("*").order("page_slug");
    setPages(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPages(); }, []);

  const handleSave = async () => {
    try {
      const contentJson = JSON.parse(form.content);
      if (editingId) {
        const { error } = await supabase
          .from("page_content")
          .update({ content: contentJson, updated_by: user?.id })
          .eq("id", editingId);
        if (error) throw error;
        toast.success("Page section updated!");
      } else {
        const { error } = await supabase.from("page_content").insert({
          page_slug: form.page_slug,
          section_key: form.section_key,
          content: contentJson,
          updated_by: user?.id,
        });
        if (error) throw error;
        toast.success("Page section created!");
      }
      setEditingId(null);
      setForm({ page_slug: "", section_key: "", content: "{}" });
      fetchPages();
    } catch (e: any) {
      toast.error(e.message || "Error saving");
    }
  };

  const handleEdit = (page: PageContent) => {
    setEditingId(page.id);
    setForm({
      page_slug: page.page_slug,
      section_key: page.section_key,
      content: JSON.stringify(page.content, null, 2),
    });
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("page_content").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); fetchPages(); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-bold text-foreground">Page Content</h2>
        <Button onClick={() => { setEditingId(null); setForm({ page_slug: "", section_key: "", content: "{}" }); }}>
          <Plus className="h-4 w-4 mr-2" /> Add Section
        </Button>
      </div>

      {/* Editor */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{editingId ? "Edit Section" : "New Section"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Page Slug</Label>
              <Input
                placeholder="e.g. home, about, contact"
                value={form.page_slug}
                onChange={(e) => setForm({ ...form, page_slug: e.target.value })}
                disabled={!!editingId}
              />
            </div>
            <div className="space-y-2">
              <Label>Section Key</Label>
              <Input
                placeholder="e.g. hero, features, cta"
                value={form.section_key}
                onChange={(e) => setForm({ ...form, section_key: e.target.value })}
                disabled={!!editingId}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Content (JSON)</Label>
            <Textarea
              rows={8}
              className="font-mono text-sm"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </div>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" /> {editingId ? "Update" : "Create"}
          </Button>
        </CardContent>
      </Card>

      {/* List */}
      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : pages.length === 0 ? (
        <p className="text-muted-foreground">No page content yet.</p>
      ) : (
        <div className="grid gap-3">
          {pages.map((p) => (
            <Card key={p.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleEdit(p)}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold text-foreground">{p.page_slug} / {p.section_key}</p>
                  <p className="text-xs text-muted-foreground">Updated: {new Date(p.updated_at).toLocaleDateString()}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPages;
