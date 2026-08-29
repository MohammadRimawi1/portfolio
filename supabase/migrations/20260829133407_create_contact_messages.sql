/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email for replies
  - `subject` (text, not null) — message subject line
  - `message` (text, not null) — the body of the message
  - `created_at` (timestamptz, default now) — when the message was submitted
2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated to INSERT (so the public contact form can submit messages).
- No SELECT/UPDATE/DELETE policies: only the service-role key (server-side) can read messages, keeping submitted messages private from the public.
3. Notes
- This is a no-auth portfolio site. The contact form is public, so INSERT must be open to anon.
- Messages are intentionally not publicly readable — only the project owner with the service role key can view them.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
