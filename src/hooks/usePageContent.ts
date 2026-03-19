import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type ContentMap = Record<string, Record<string, any>>;

/**
 * Fetches CMS content for a given page_slug.
 * Returns a map of section_key → content JSON.
 * Components should always provide fallback values.
 */
export const usePageContent = (pageSlug: string) => {
  const [content, setContent] = useState<ContentMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("page_content")
        .select("section_key, content")
        .eq("page_slug", pageSlug);

      if (data) {
        const map: ContentMap = {};
        data.forEach((row) => {
          map[row.section_key] = row.content as Record<string, any>;
        });
        setContent(map);
      }
      setLoading(false);
    };
    fetch();
  }, [pageSlug]);

  /** Get a value from CMS or return fallback */
  const get = (sectionKey: string, field: string, fallback: string): string => {
    return content[sectionKey]?.[field] ?? fallback;
  };

  /** Get full section object or return fallback */
  const getSection = <T>(sectionKey: string, fallback: T): T => {
    return (content[sectionKey] as T) ?? fallback;
  };

  return { content, loading, get, getSection };
};
