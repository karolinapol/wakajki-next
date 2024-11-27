import { Holiday } from "@/app/holidays/page";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require("better-sqlite3");
const db = sql("holidays.db");

export async function getHolidays(): Promise<Holiday[]> {
  return db.prepare("SELECT * FROM holidays").all() as Holiday[];
}

export async function getHoliday(slug: string): Promise<Holiday> {
  return db
    .prepare("SELECT * FROM holidays WHERE slug = ?")
    .get(slug) as Holiday;
}
