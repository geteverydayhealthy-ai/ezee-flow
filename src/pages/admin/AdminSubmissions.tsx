import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Eye, Trash2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";
import ConfirmDialog from "@/components/admin/ConfirmDialog";

type Submission = Tables<"form_submissions"> & { forms?: { name: string } | null };

const AdminSubmissions = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Submission | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    const { data } = await supabase
      .from("form_submissions")
      .select("*, forms(name)")
      .order("created_at", { ascending: false });
    setSubmissions((data as Submission[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchSubmissions(); }, []);

  const markRead = async (id: string) => {
    await supabase.from("form_submissions").update({ is_read: true }).eq("id", id);
    fetchSubmissions();
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("form_submissions").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); setSelected(null); fetchSubmissions(); }
  };

  return (
    <div className="space-y-6">
      <ConfirmDialog
        open={!!deleteId}
        onOpenChange={(open) => !open && setDeleteId(null)}
        title="Delete this submission?"
        description="This action cannot be undone. The form submission data will be permanently deleted."
        onConfirm={() => { if (deleteId) handleDelete(deleteId); setDeleteId(null); }}
        confirmLabel="Yes, delete"
        variant="destructive"
      />

      <h2 className="text-2xl font-heading font-bold text-foreground">Form Submissions</h2>

      {selected ? (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Submission Detail</CardTitle>
            <Button variant="ghost" size="sm" onClick={() => setSelected(null)}>← Back</Button>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Form: {selected.forms?.name ?? "Unknown"} · {new Date(selected.created_at).toLocaleString()}
            </p>
            <pre className="bg-muted p-4 rounded-lg text-sm font-mono overflow-auto max-h-96">
              {JSON.stringify(selected.data, null, 2)}
            </pre>
            <Button variant="destructive" size="sm" onClick={() => setDeleteId(selected.id)}>
              <Trash2 className="h-4 w-4 mr-2" /> Delete
            </Button>
          </CardContent>
        </Card>
      ) : loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : submissions.length === 0 ? (
        <p className="text-muted-foreground">No submissions yet.</p>
      ) : (
        <div className="grid gap-3">
          {submissions.map((s) => (
            <Card
              key={s.id}
              className={`cursor-pointer hover:shadow-md transition-shadow ${!s.is_read ? "border-primary/50" : ""}`}
              onClick={() => { setSelected(s); if (!s.is_read) markRead(s.id); }}
            >
              <CardContent className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  {!s.is_read && <Badge variant="default" className="text-xs">New</Badge>}
                  <div>
                    <p className="font-semibold text-foreground">{s.forms?.name ?? "Unknown Form"}</p>
                    <p className="text-xs text-muted-foreground">{new Date(s.created_at).toLocaleString()}</p>
                  </div>
                </div>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminSubmissions;
