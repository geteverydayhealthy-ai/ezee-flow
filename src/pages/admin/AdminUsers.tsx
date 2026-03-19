import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { UserPlus, Trash2 } from "lucide-react";
import type { Tables, Database } from "@/integrations/supabase/types";

type UserRole = Tables<"user_roles">;
type AppRole = Database["public"]["Enums"]["app_role"];
type Profile = Tables<"profiles">;

type UserWithRole = UserRole & { profiles?: Profile | null };

const AdminUsers = () => {
  const { isAdmin } = useAuth();
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [newUserId, setNewUserId] = useState("");
  const [newRole, setNewRole] = useState<AppRole>("editor");

  const fetchUsers = async () => {
    const { data } = await supabase
      .from("user_roles")
      .select("*, profiles(display_name, avatar_url)")
      .order("created_at", { ascending: false });
    setUsers((data as UserWithRole[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleAddRole = async () => {
    if (!newUserId.trim()) {
      toast.error("User ID required");
      return;
    }
    const { error } = await supabase.from("user_roles").insert({
      user_id: newUserId,
      role: newRole,
    });
    if (error) toast.error(error.message);
    else {
      toast.success("Role assigned!");
      setNewUserId("");
      fetchUsers();
    }
  };

  const handleRemoveRole = async (id: string) => {
    const { error } = await supabase.from("user_roles").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Role removed!"); fetchUsers(); }
  };

  if (!isAdmin) {
    return <p className="text-muted-foreground">Only admins can manage users.</p>;
  }

  const roleColor = (r: AppRole) => {
    if (r === "admin") return "destructive" as const;
    if (r === "editor") return "default" as const;
    return "secondary" as const;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-heading font-bold text-foreground">User Management</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Assign Role</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2 sm:col-span-1">
              <Label>User ID</Label>
              <Input value={newUserId} onChange={(e) => setNewUserId(e.target.value)} placeholder="UUID of user" />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={newRole} onValueChange={(v) => setNewRole(v as AppRole)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button onClick={handleAddRole}>
                <UserPlus className="h-4 w-4 mr-2" /> Assign
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : users.length === 0 ? (
        <p className="text-muted-foreground">No users with roles yet.</p>
      ) : (
        <div className="grid gap-3">
          {users.map((u) => (
            <Card key={u.id}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <p className="font-semibold text-foreground">
                    {u.profiles?.display_name ?? u.user_id}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant={roleColor(u.role)}>{u.role}</Badge>
                    <span className="text-xs text-muted-foreground font-mono">{u.user_id.slice(0, 8)}...</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => handleRemoveRole(u.id)}>
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

export default AdminUsers;
