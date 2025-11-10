import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const allowedOrigins = [
  "http://localhost:3000",
  "https://global-connect-gold.vercel.app",
];

console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_PASS:", process.env.GMAIL_PASS);

// Helper: get allowed origin for CORS
function getAllowedOrigin(req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  return allowedOrigins.includes(origin) ? origin : "";
}

// POST handler
export async function POST(req: NextRequest) {
  const allowedOrigin = getAllowedOrigin(req);

  try {
    // ✅ Explicitly cast the result to FormData (TypeScript fix)
    const formData = (await req.formData()) as unknown as FormData;

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const country = formData.get("country")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const file = formData.get("file") as File | null;

    // ✅ Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // ✅ Attachments if file exists
    const attachments =
      file && file instanceof File
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            },
          ]
        : [];

    // ✅ Send email
    await transporter.sendMail({
      from: `"The Global Connect" <${process.env.GMAIL_USER}>`,
      to: "cconuglobal@gmail.com",
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

    // ✅ Success response
    const response = new NextResponse(
      JSON.stringify({ success: true, message: "Intake email sent!" }),
      { status: 200 }
    );
    if (allowedOrigin)
      response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  } catch (err: any) {
    // ❌ Error response
    const response = new NextResponse(
      JSON.stringify({ success: false, message: err.message }),
      { status: 500 }
    );
    if (allowedOrigin)
      response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
    return response;
  }
}

// ✅ OPTIONS handler for preflight CORS requests
export async function OPTIONS(req: NextRequest) {
  const allowedOrigin = getAllowedOrigin(req);

  const response = new NextResponse(null, { status: 204 });
  if (allowedOrigin)
    response.headers.set("Access-Control-Allow-Origin", allowedOrigin);
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
