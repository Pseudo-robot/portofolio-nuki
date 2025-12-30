INSERT INTO roles (name, description)
VALUES
  ('admin', 'Administrator sistem'),
  ('operator', 'Operator data'),
  ('viewer', 'Read-only user')
ON CONFLICT (name) DO NOTHING;
