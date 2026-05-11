import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { lat, lon, userAgent } = body;
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";

    await db.query(
      `INSERT INTO tracking_data (ip_address, latitude, longitude, user_agent) 
       VALUES ($1, $2, $3, $4)`,
      [ip, lat, lon, userAgent],
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to track" }, { status: 500 });
  }
}

export async function GET() {
  const { rows } = await db.query(
    "SELECT * FROM tracking_data ORDER BY created_at DESC",
  );
  return NextResponse.json(rows);
}
