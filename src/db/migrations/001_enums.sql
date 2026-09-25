-- Star Shajara architectural scaffold.
-- This is the first migration pattern only; the historical 49-migration GA set
-- is not present and must not be represented as implemented.

CREATE TYPE relationship_visibility AS ENUM (
  'private',
  'public',
  'living_private'
);
