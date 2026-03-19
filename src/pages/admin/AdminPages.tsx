import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Save, Trash2, Upload, Image, RefreshCw } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

type PageContent = Tables<"page_content">;

const AdminPages = () => {
  const { user } = useAuth();
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ page_slug: "", section_key: "", content: "{}" });
  const [confirmAction, setConfirmAction] = useState<{ type: "save" | "delete"; id?: string } | null>(null);
  const [uploading, setUploading] = useState(false);
  const [replacingKey, setReplacingKey] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);

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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const ext = file.name.split(".").pop();
    const path = `${form.page_slug}/${form.section_key}/${Date.now()}.${ext}`;

    const { error } = await supabase.storage.from("cms-images").upload(path, file, { upsert: true });
    if (error) {
      toast.error("Upload failed: " + error.message);
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage.from("cms-images").getPublicUrl(path);
    const imageUrl = urlData.publicUrl;

    // Insert image URL into current JSON content
    try {
      const currentContent = JSON.parse(form.content);
      currentContent.image = imageUrl;
      setForm({ ...form, content: JSON.stringify(currentContent, null, 2) });
      toast.success("Image uploaded! URL added to content.");
    } catch {
      // If content isn't valid JSON, create new object
      setForm({ ...form, content: JSON.stringify({ image: imageUrl }, null, 2) });
      toast.success("Image uploaded!");
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleConfirm = () => {
    if (!confirmAction) return;
    if (confirmAction.type === "save") handleSave();
    if (confirmAction.type === "delete" && confirmAction.id) handleDelete(confirmAction.id);
    setConfirmAction(null);
  };

  // Extract unique page slugs for grouping
  const groupedPages = pages.reduce<Record<string, PageContent[]>>((acc, p) => {
    if (!acc[p.page_slug]) acc[p.page_slug] = [];
    acc[p.page_slug].push(p);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <ConfirmDialog
        open={!!confirmAction}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={confirmAction?.type === "delete" ? "Delete this section?" : "Save changes?"}
        description={
          confirmAction?.type === "delete"
            ? "This action cannot be undone. The section content will be permanently removed from the CMS."
            : editingId
            ? "Do you really want to update this page section? The changes will be reflected on the live website."
            : "Do you really want to create this new page section? It will be available on the live website."
        }
        onConfirm={handleConfirm}
        confirmLabel={confirmAction?.type === "delete" ? "Yes, delete" : "Yes, proceed"}
        variant={confirmAction?.type === "delete" ? "destructive" : "default"}
      />

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

          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Image className="h-4 w-4" /> Upload Image
            </Label>
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={uploading || (!form.page_slug && !editingId)}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="h-4 w-4 mr-2" />
                {uploading ? "Uploading..." : "Choose Image"}
              </Button>
              <span className="text-xs text-muted-foreground">
                Image URL will be added to content JSON automatically
              </span>
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
          <Button onClick={() => setConfirmAction({ type: "save" })}>
            <Save className="h-4 w-4 mr-2" /> {editingId ? "Update" : "Create"}
          </Button>
        </CardContent>
      </Card>

      {/* List grouped by page_slug */}
      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : Object.keys(groupedPages).length === 0 ? (
        <p className="text-muted-foreground">No page content yet.</p>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedPages).map(([slug, sections]) => (
            <div key={slug}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                📄 {slug}
              </h3>
              <div className="grid gap-2">
                {sections.map((p) => (
                  <Card key={p.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleEdit(p)}>
                    <CardContent className="flex items-center justify-between py-3 px-4">
                      <div>
                        <p className="font-medium text-sm text-foreground">{p.section_key}</p>
                        <p className="text-xs text-muted-foreground">Updated: {new Date(p.updated_at).toLocaleDateString()}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); setConfirmAction({ type: "delete", id: p.id }); }}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPages;
