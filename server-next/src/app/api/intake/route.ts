// app/api/intake/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const allowedOrigins = [
  "http://localhost:8080",
  "https://global-connect-gold.vercel.app",
];

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : "";

  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const country = formData.get("country")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const file = formData.get("file") as File | null;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const attachments = file
      ? [
          {
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
          },
        ]
      : [];

    await transporter.sendMail({
      from: `"The Global Connect" <${process.env.GMAIL_USER}>`,
      to: "tceeservices@gmail.com",
      replyTo: email,
      subject: `Client Intake Form - ${service || "General Inquiry"}`,
      html: `
        <h2>New Client Intake Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
      attachments,
    });

    const response = NextResponse.json({ success: true, message: "Intake email sent!" });
    if (allowedOrigin) response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  } catch (err: any) {
    const response = NextResponse.json({ success: false, message: err.message });
    if (allowedOrigin) response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }
}

export function OPTIONS(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = allowedOrigins.includes(origin) ? origin : "";

  const response = NextResponse.json({});
  if (allowedOrigin) response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
