
-- The "Anyone can submit forms" policy with WITH CHECK (true) is intentional
-- since public website visitors need to submit contact/lead forms without auth.
-- Adding a check that form_id must reference an active form for safety.
DROP POLICY "Anyone can submit forms" ON public.form_submissions;
CREATE POLICY "Anyone can submit to active forms" ON public.form_submissions
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.forms WHERE id = form_id AND is_active = true)
  );
