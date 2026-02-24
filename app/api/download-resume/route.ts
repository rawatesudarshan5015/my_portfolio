import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
  const headers = request.headers;

  const ip =
    headers.get("x-forwarded-for") ||
    headers.get("x-real-ip") ||
    "Unknown";

  const referer = headers.get("referer") || "Direct / Unknown";

  const userAgent = headers.get("user-agent") || "Unknown";

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "rawatesudarshan5015@gmail.com",
    subject: "Resume Downloaded",
    html: `
      <h2>Resume Download Notification</h2>
      <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      <p><strong>IP:</strong> ${ip}</p>
      <p><strong>Referrer:</strong> ${referer}</p>
      <p><strong>Device:</strong> ${userAgent}</p>
    `,
  });

  return NextResponse.redirect(
    "https://drive.google.com/uc?export=download&id=1wBJeTw6jgQQiL4pT1gSsPMzxf-jlFGI0"
  );
}