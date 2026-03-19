import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Plus, Save, Trash2, Upload, Image, RefreshCw, Undo2, Redo2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { useUndoRedo } from "@/hooks/useUndoRedo";

type PageContent = Tables<"page_content">;

// All available page slugs in the project
const PAGE_SLUGS = [
  { value: "home", label: "Home" },
  { value: "about", label: "About" },
  { value: "contact", label: "Contact" },
  { value: "solutions", label: "Solutions Overview" },
  { value: "creative-office", label: "Creative Office" },
  { value: "performance-marketing", label: "Performance Marketing" },
  { value: "app-tech-development", label: "App & Tech Development" },
  { value: "agentic-ai", label: "Agentic AI" },
  { value: "backoffice", label: "Backoffice" },
  { value: "products", label: "Products Overview" },
  { value: "digital-operating-layer", label: "Digital Operating Layer" },
  { value: "digital-spine", label: "Digital Spine" },
  { value: "insurance-crm-erp", label: "Insurance CRM & ERP" },
  { value: "lead-opportunity-engine", label: "Lead & Opportunity Engine" },
  { value: "claims-movement-system", label: "Claims Movement System" },
  { value: "agency-dashboard", label: "Agency Dashboard" },
  { value: "ai-business-intelligence", label: "AI Business Intelligence" },
  { value: "playbooks", label: "Playbooks Overview" },
  { value: "blueprint-strategy", label: "Blueprint Strategy" },
  { value: "embedded-insurance", label: "Embedded Insurance" },
];

const SECTION_KEYS = [
  { value: "hero", label: "Hero Section" },
  { value: "content", label: "Content" },
  { value: "images", label: "Images" },
  { value: "cta", label: "CTA Section" },
  { value: "features", label: "Features" },
  { value: "outcomeLine", label: "Outcome Line" },
];

const AdminPages = () => {
  const { user } = useAuth();
  const [pages, setPages] = useState<PageContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pageSlug, setPageSlug] = useState("");
  const [sectionKey, setSectionKey] = useState("");
  const contentHistory = useUndoRedo("{}");
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

  const resetForm = () => {
    setEditingId(null);
    setPageSlug("");
    setSectionKey("");
    contentHistory.reset("{}");
  };

  const handleSave = async () => {
    try {
      const contentJson = JSON.parse(contentHistory.current);
      if (editingId) {
        const { error } = await supabase
          .from("page_content")
          .update({ content: contentJson, updated_by: user?.id })
          .eq("id", editingId);
        if (error) throw error;
        toast.success("Page section updated!");
      } else {
        const { error } = await supabase.from("page_content").insert({
          page_slug: pageSlug,
          section_key: sectionKey,
          content: contentJson,
          updated_by: user?.id,
        });
        if (error) throw error;
        toast.success("Page section created!");
      }
      resetForm();
      fetchPages();
    } catch (e: any) {
      toast.error(e.message || "Error saving");
    }
  };

  const handleEdit = (page: PageContent) => {
    setEditingId(page.id);
    setPageSlug(page.page_slug);
    setSectionKey(page.section_key);
    contentHistory.reset(JSON.stringify(page.content, null, 2));
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("page_content").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); fetchPages(); }
  };

  const uploadToStorage = async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const path = `${pageSlug}/${sectionKey}/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("cms-images").upload(path, file, { upsert: true });
    if (error) {
      toast.error("Upload failed: " + error.message);
      return null;
    }
    const { data: urlData } = supabase.storage.from("cms-images").getPublicUrl(path);
    return urlData.publicUrl;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const imageUrl = await uploadToStorage(file);
    if (imageUrl) {
      try {
        const currentContent = JSON.parse(contentHistory.current);
        currentContent.image = imageUrl;
        contentHistory.set(JSON.stringify(currentContent, null, 2));
        toast.success("Image uploaded! URL added to content.");
      } catch {
        contentHistory.set(JSON.stringify({ image: imageUrl }, null, 2));
        toast.success("Image uploaded!");
      }
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleReplaceImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !replacingKey) return;
    setUploading(true);
    const imageUrl = await uploadToStorage(file);
    if (imageUrl) {
      try {
        const currentContent = JSON.parse(contentHistory.current);
        currentContent[replacingKey] = imageUrl;
        contentHistory.set(JSON.stringify(currentContent, null, 2));
        toast.success(`Image "${replacingKey}" replaced!`);
      } catch {
        toast.error("Invalid JSON content");
      }
    }
    setUploading(false);
    setReplacingKey(null);
    if (replaceInputRef.current) replaceInputRef.current.value = "";
  };

  const getImageKeysFromContent = (): { key: string; url: string }[] => {
    try {
      const parsed = JSON.parse(contentHistory.current);
      return Object.entries(parsed)
        .filter(([, v]) => typeof v === "string" && (v as string).match(/\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i))
        .map(([key, url]) => ({ key, url: url as string }));
    } catch {
      return [];
    }
  };

  const handleConfirm = () => {
    if (!confirmAction) return;
    if (confirmAction.type === "save") handleSave();
    if (confirmAction.type === "delete" && confirmAction.id) handleDelete(confirmAction.id);
    setConfirmAction(null);
  };

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
        <Button onClick={resetForm}>
          <Plus className="h-4 w-4 mr-2" /> Add Section
        </Button>
      </div>

      {/* Editor */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{editingId ? "Edit Section" : "New Section"}</CardTitle>
            {/* Undo / Redo */}
            <div className="flex items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={!contentHistory.canUndo}
                onClick={() => { contentHistory.undo(); toast.info("Undo applied"); }}
                title="Undo"
              >
                <Undo2 className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                disabled={!contentHistory.canRedo}
                onClick={() => { contentHistory.redo(); toast.info("Redo applied"); }}
                title="Redo"
              >
                <Redo2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Page Slug</Label>
              {editingId ? (
                <Input value={pageSlug} disabled />
              ) : (
                <Select value={pageSlug} onValueChange={setPageSlug}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a page..." />
                  </SelectTrigger>
                  <SelectContent>
                    {PAGE_SLUGS.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        {p.label} <span className="text-muted-foreground ml-1 text-xs">({p.value})</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            <div className="space-y-2">
              <Label>Section Key</Label>
              {editingId ? (
                <Input value={sectionKey} disabled />
              ) : (
                <Select value={sectionKey} onValueChange={setSectionKey}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a section..." />
                  </SelectTrigger>
                  <SelectContent>
                    {SECTION_KEYS.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label} <span className="text-muted-foreground ml-1 text-xs">({s.value})</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Image className="h-4 w-4" /> Upload Image
            </Label>
            <div className="flex items-center gap-3">
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={uploading || (!pageSlug && !editingId)}
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

          {/* Image Previews with Replace */}
          {getImageKeysFromContent().length > 0 && (
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Image className="h-4 w-4" /> Current Images
              </Label>
              <input ref={replaceInputRef} type="file" accept="image/*" onChange={handleReplaceImage} className="hidden" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {getImageKeysFromContent().map(({ key, url }) => (
                  <div key={key} className="border border-border rounded-lg p-2 space-y-2">
                    <img src={url} alt={key} className="w-full h-32 object-cover rounded-md bg-muted" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground truncate">{key}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        disabled={uploading}
                        onClick={() => { setReplacingKey(key); replaceInputRef.current?.click(); }}
                      >
                        <RefreshCw className="h-3 w-3 mr-1" /> Replace
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>Content (JSON)</Label>
            <Textarea
              rows={8}
              className="font-mono text-sm"
              value={contentHistory.current}
              onChange={(e) => contentHistory.set(e.target.value)}
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
          {Object.entries(groupedPages).map(([slug, sections]) => {
            const pageLabel = PAGE_SLUGS.find((p) => p.value === slug)?.label || slug;
            return (
              <div key={slug}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  📄 {pageLabel} <span className="text-xs font-normal">({slug})</span>
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminPages;
