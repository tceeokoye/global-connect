import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const allowedOrigins = ["http://localhost:8080","https://global-connect-gold.vercel.app"];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"The Global Connect" <${process.env.GMAIL_USER}>`,
      to: "cconuglobal@gmail.com",
      replyTo: email,
      subject: `Contact Us - ${subject}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    const response = NextResponse.json({ success: true, message: "Email sent!" });
    response.headers.set("Access-Control-Allow-Origin", allowedOrigins[0]);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  } catch (err: any) {
    const response = NextResponse.json({ success: false, message: err.message });
    response.headers.set("Access-Control-Allow-Origin", allowedOrigins[0]);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }
}

// Handle preflight CORS requests
export function OPTIONS() {
  const response = NextResponse.json({});
  response.headers.set("Access-Control-Allow-Origin", allowedOrigins[0]);
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
