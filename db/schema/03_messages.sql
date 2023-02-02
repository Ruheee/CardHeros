-- Drop and recreate messages table

DROP TABLE IF EXISTS messages CASCADE;
CREATE TABLE messages (
  sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  card_id INTEGER REFERENCES cards(id) ON DELETE CASCADE,
  timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  message TEXT NOT NULL
)
