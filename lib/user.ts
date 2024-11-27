// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require("better-sqlite3");
const db = sql("holidays.db");

export default function createUser(email: string, password: string) {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?,?)")
    .run(email, password);

  return result.lastInsertRowid;
}

export function getUserByEmail(email: string) {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}
