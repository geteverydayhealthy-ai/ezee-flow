import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Save, Trash2 } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";
import type { Database } from "@/integrations/supabase/types";

type BlogPost = Tables<"blog_posts">;
type PostStatus = Database["public"]["Enums"]["post_status"];

const AdminBlog = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image: "",
    status: "draft" as PostStatus,
  });

  const fetchPosts = async () => {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });
    setPosts(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleSave = async () => {
    try {
      if (editingId) {
        const { error } = await supabase.from("blog_posts").update({
          title: form.title,
          excerpt: form.excerpt || null,
          content: form.content || null,
          cover_image: form.cover_image || null,
          status: form.status,
          published_at: form.status === "published" ? new Date().toISOString() : null,
        }).eq("id", editingId);
        if (error) throw error;
        toast.success("Post updated!");
      } else {
        const { error } = await supabase.from("blog_posts").insert({
          title: form.title,
          slug: form.slug,
          excerpt: form.excerpt || null,
          content: form.content || null,
          cover_image: form.cover_image || null,
          status: form.status,
          author_id: user?.id,
          published_at: form.status === "published" ? new Date().toISOString() : null,
        });
        if (error) throw error;
        toast.success("Post created!");
      }
      resetForm();
      fetchPosts();
    } catch (e: any) {
      toast.error(e.message || "Error saving");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({ title: "", slug: "", excerpt: "", content: "", cover_image: "", status: "draft" });
  };

  const handleEdit = (p: BlogPost) => {
    setEditingId(p.id);
    setForm({
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt ?? "",
      content: p.content ?? "",
      cover_image: p.cover_image ?? "",
      status: p.status,
    });
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) toast.error(error.message);
    else { toast.success("Deleted!"); fetchPosts(); }
  };

  const statusColor = (s: PostStatus) => {
    if (s === "published") return "default";
    if (s === "draft") return "secondary";
    return "outline";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-heading font-bold text-foreground">Blog Posts</h2>
        <Button onClick={resetForm}>
          <Plus className="h-4 w-4 mr-2" /> New Post
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{editingId ? "Edit Post" : "New Post"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Post title" />
            </div>
            <div className="space-y-2">
              <Label>Slug</Label>
              <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="post-slug" disabled={!!editingId} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Excerpt</Label>
            <Input value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} placeholder="Short description" />
          </div>
          <div className="space-y-2">
            <Label>Cover Image URL</Label>
            <Input value={form.cover_image} onChange={(e) => setForm({ ...form, cover_image: e.target.value })} placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <Label>Content</Label>
            <Textarea
              rows={12}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Write your blog post content here..."
            />
          </div>
          <div className="space-y-2 max-w-xs">
            <Label>Status</Label>
            <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v as PostStatus })}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" /> {editingId ? "Update" : "Create"}
          </Button>
        </CardContent>
      </Card>

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet.</p>
      ) : (
        <div className="grid gap-3">
          {posts.map((p) => (
            <Card key={p.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleEdit(p)}>
              <CardContent className="flex items-center justify-between py-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground">{p.title}</p>
                    <Badge variant={statusColor(p.status)}>{p.status}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">/{p.slug} · {new Date(p.created_at).toLocaleDateString()}</p>
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

export default AdminBlog;
