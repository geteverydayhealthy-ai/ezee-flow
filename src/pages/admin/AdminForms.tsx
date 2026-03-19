import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Plus, Save, Trash2, Copy } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

type Form = Tables<"forms">;

const AdminForms = () => {
  const { user } = useAuth();
  const [forms, setForms] = useState<Form[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmAction, setConfirmAction] = useState<{ type: "save" | "delete"; id?: string } | null>(null);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    fields: "[]",
    is_active: true,
  });

  const fetchForms = async () => {
    const { data } = await supabase.from("forms").select("*").order("created_at", { ascending: false });
    setForms(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchForms(); }, []);

  const handleSave = async () => {
    try {
      const fieldsJson = JSON.parse(form.fields);
      if (editingId) {
        const { error } = await supabase.from("forms").update({
          name: form.name,
          description: form.description,
          fields: fieldsJson,
          is_active: form.is_active,
        }).eq("id", editingId);
        if (error) throw error;
        toast.success("Form updated!");
      } else {
        const { error } = await supabase.from("forms").insert({
          name: form.name,
          slug: form.slug,
          description: form.description,
          fields: fieldsJson,
          is_active: form.is_active,
          created_by: user?.id,
        });
        if (error) throw error;
        toast.success("Form created!");
      }
      resetForm();
      fetchForms();
    } catch (e: any) {
      toast.error(e.message || "Error saving form");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({ name: "", slug: "", description: "", fields: "[]", is_active: true });
  };

  const handleEdit = (f: Form) => {
    setEditingId(f.id);
    setForm({
      name: f.name,
      slug: f.slug,
      description: f.description ?? "",
      fields: JSON.stringify(f.fields, null, 2),
      is_active: f.is_active,
    });
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("forms").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); fetchForms(); }
  };

  const handleConfirm = () => {
    if (!confirmAction) return;
    if (confirmAction.type === "save") handleSave();
    if (confirmAction.type === "delete" && confirmAction.id) handleDelete(confirmAction.id);
    setConfirmAction(null);
  };

  return (
    <div className="space-y-6">
      <ConfirmDialog
        open={!!confirmAction}
        onOpenChange={(open) => !open && setConfirmAction(null)}
        title={confirmAction?.type === "delete" ? "Delete this form?" : "Save this form?"}
        description={
          confirmAction?.type === "delete"
            ? "This action cannot be undone. The form and all its configuration will be permanently deleted."
            : editingId
            ? "Do you really want to update this form? Changes will affect the live website."
            : "Do you really want to create this new form?"
        }
        onConfirm={handleConfirm}
        confirmLabel={confirmAction?.type === "delete" ? "Yes, delete" : "Yes, proceed"}
        variant={confirmAction?.type === "delete" ? "destructive" : "default"}
      />

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-bold text-foreground">Form Builder</h2>
        <Button onClick={resetForm}>
          <Plus className="h-4 w-4 mr-2" /> New Form
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{editingId ? "Edit Form" : "Create Form"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Form Name</Label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Contact Form" />
            </div>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="contact-form" disabled={!!editingId} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Description</Label>
            <Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Main contact form for website" />
          </div>
          <div className="space-y-2">
            <Label>Fields (JSON Array)</Label>
            <Textarea rows={6} className="font-mono text-sm" value={form.fields} onChange={(e) => setForm({ ...form, fields: e.target.value })} placeholder='[{"name":"email","type":"email","label":"Email","required":true}]' />
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={form.is_active} onCheckedChange={(v) => setForm({ ...form, is_active: v })} />
            <Label>Active</Label>
          </div>
          <Button onClick={() => setConfirmAction({ type: "save" })}>
            <Save className="h-4 w-4 mr-2" /> {editingId ? "Update" : "Create"}
          </Button>
        </CardContent>
      </Card>

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : forms.length === 0 ? (
        <p className="text-muted-foreground">No forms yet.</p>
      ) : (
        <div className="grid gap-3">
          {forms.map((f) => (
            <Card key={f.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleEdit(f)}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold text-foreground">{f.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Slug: {f.slug} · {f.is_active ? "Active" : "Inactive"} · {Array.isArray(f.fields) ? (f.fields as any[]).length : 0} fields
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(f.id); toast.success("Form ID copied!"); }}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); setConfirmAction({ type: "delete", id: f.id }); }}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminForms;
