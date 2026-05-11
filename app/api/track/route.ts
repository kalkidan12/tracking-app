import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { lat, lon, userAgent } = body;

    // Get IP from Vercel headers
    const ip =
      req.headers.get("x-real-ip") ||
      req.headers.get("x-forwarded-for") ||
      "127.0.0.1";

    const client = await db.connect();
    try {
      await client.query(
        `INSERT INTO tracking_data (ip_address, latitude, longitude, user_agent) 
         VALUES ($1, $2, $3, $4)`,
        [ip, lat, lon, userAgent],
      );
    } finally {
      client.release();
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to track" }, { status: 500 });
  }
}
