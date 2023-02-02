-- Drop and recreate user_favourites table

DROP TABLE IF EXISTS user_favourites CASCADE;
CREATE TABLE user_favourites (
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  card_id INTEGER REFERENCES cards(id) ON DELETE CASCADE
)
