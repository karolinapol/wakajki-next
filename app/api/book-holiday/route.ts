import { verifyAuth } from "@/lib/auth";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require("better-sqlite3");
const db = sql("holidays.db");

export async function POST(req, res) {
  const body = await req.json();
  const auth = await verifyAuth();

  const {
    holiday_id,
    booking_name,
    booking_surname,
    booking_email,
    booking_phone,
    holiday_members,
    total_price,
  } = body;

  const result = db
    .prepare(
      "INSERT INTO booked_holidays (user_id, holiday_id, booking_name, booking_surname, booking_email, booking_phone, holiday_members, total_price) VALUES (?,?,?,?,?,?,?,?)"
    )
    .run(
      auth.user!.id,
      holiday_id,
      booking_name,
      booking_surname,
      booking_email,
      booking_phone,
      holiday_members,
      total_price
    );

  return NextResponse.json({
    message: "Form data submitted successfully!",
  });
}
