
-- Create storage bucket for CMS images
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-images', 'cms-images', true);

-- Allow anyone to view CMS images (public bucket)
CREATE POLICY "Anyone can view cms images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'cms-images');

-- Allow admin/editor to upload images
CREATE POLICY "Admin/Editor can upload cms images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'cms-images' 
  AND public.is_admin_or_editor(auth.uid())
);

-- Allow admin/editor to update images
CREATE POLICY "Admin/Editor can update cms images"
ON storage.objects FOR UPDATE
TO authenticated
USING (
  bucket_id = 'cms-images' 
  AND public.is_admin_or_editor(auth.uid())
);

-- Allow admin to delete images
CREATE POLICY "Admin can delete cms images"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'cms-images' 
  AND public.has_role(auth.uid(), 'admin')
);
