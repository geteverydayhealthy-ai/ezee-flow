import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FormInput, Inbox, BookOpen } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    pages: 0,
    forms: 0,
    submissions: 0,
    posts: 0,
    unread: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [pages, forms, submissions, posts, unread] = await Promise.all([
        supabase.from("page_content").select("id", { count: "exact", head: true }),
        supabase.from("forms").select("id", { count: "exact", head: true }),
        supabase.from("form_submissions").select("id", { count: "exact", head: true }),
        supabase.from("blog_posts").select("id", { count: "exact", head: true }),
        supabase.from("form_submissions").select("id", { count: "exact", head: true }).eq("is_read", false),
      ]);
      setStats({
        pages: pages.count ?? 0,
        forms: forms.count ?? 0,
        submissions: submissions.count ?? 0,
        posts: posts.count ?? 0,
        unread: unread.count ?? 0,
      });
    };
    fetchStats();
  }, []);

  const cards = [
    { label: "Page Sections", value: stats.pages, icon: FileText, color: "text-primary" },
    { label: "Forms", value: stats.forms, icon: FormInput, color: "text-primary" },
    { label: "Submissions", value: stats.submissions, icon: Inbox, color: "text-primary", badge: stats.unread },
    { label: "Blog Posts", value: stats.posts, icon: BookOpen, color: "text-primary" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground mt-1">Welcome to your CMS overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Card key={card.label}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.label}
              </CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{card.value}</div>
              {card.badge ? (
                <p className="text-xs text-destructive mt-1">{card.badge} unread</p>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
