import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { service, date, time, name, email, phone, age, concern } = body;

    if (!name || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const serviceLabel =
      service === "initial" ? "Initial Consultation" : "Follow-up Consultation";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL || "briellejohns1804@gmail.com",
        pass: process.env.SMTP_PASSWORD || "",
      },
    });

    // Email to doctor
    const doctorHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #fafaf7; border-radius: 16px; overflow: hidden;">
        <div style="background: #2d6a4f; padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">New Booking Request</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">The Siddha Scholar - Online Consultation</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #5c6b5c; font-size: 14px; width: 140px;">Service</td><td style="padding: 10px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${serviceLabel}</td></tr>
            <tr><td style="padding: 10px 0; color: #5c6b5c; font-size: 14px;">Date</td><td style="padding: 10px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${date}</td></tr>
            <tr><td style="padding: 10px 0; color: #5c6b5c; font-size: 14px;">Time</td><td style="padding: 10px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${time}</td></tr>
            <tr style="border-top: 1px solid #e0ddd5;"><td style="padding: 10px 0; color: #5c6b5c; font-size: 14px;">Patient Name</td><td style="padding: 10px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #5c6b5c; font-size: 14px;">Email</td><td style="padding: 10px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${email}</td></tr>
            <tr><td style="padding: 10px 0; color: #5c6b5c; font-size: 14px;">Phone</td><td style="padding: 10px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${phone}</td></tr>
            ${age ? `<tr><td style="padding: 10px 0; color: #5c6b5c; font-size: 14px;">Age</td><td style="padding: 10px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${age}</td></tr>` : ""}
            ${concern ? `<tr style="border-top: 1px solid #e0ddd5;"><td style="padding: 10px 0; color: #5c6b5c; font-size: 14px; vertical-align: top;">Concern</td><td style="padding: 10px 0; color: #1a2e1a; font-size: 14px;">${concern}</td></tr>` : ""}
          </table>
        </div>
        <div style="padding: 16px 32px; background: #f0f5f0; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #5c6b5c;">The Siddha Scholar &bull; Online Consultation Platform</p>
        </div>
      </div>
    `;

    // Email to patient
    const patientHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #fafaf7; border-radius: 16px; overflow: hidden;">
        <div style="background: #2d6a4f; padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">Booking Confirmation</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">The Siddha Scholar - Dr. Amirtha</p>
        </div>
        <div style="padding: 32px;">
          <p style="color: #1a2e1a; font-size: 16px; margin: 0 0 16px;">Dear ${name},</p>
          <p style="color: #5c6b5c; font-size: 14px; line-height: 1.7; margin: 0 0 20px;">
            Thank you for booking your consultation with Dr. Amirtha. Here are your appointment details:
          </p>
          <div style="background: white; border-radius: 12px; padding: 20px; border: 1px solid #e0ddd5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #5c6b5c; font-size: 14px; width: 120px;">Service</td><td style="padding: 8px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${serviceLabel}</td></tr>
              <tr><td style="padding: 8px 0; color: #5c6b5c; font-size: 14px;">Date</td><td style="padding: 8px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${date}</td></tr>
              <tr><td style="padding: 8px 0; color: #5c6b5c; font-size: 14px;">Time</td><td style="padding: 8px 0; font-weight: 600; color: #1a2e1a; font-size: 14px;">${time}</td></tr>
            </table>
          </div>
          <div style="margin-top: 20px; padding: 16px; background: #f5f0eb; border-radius: 10px;">
            <p style="margin: 0; font-size: 13px; color: #5c6b5c; line-height: 1.6;">
              <strong style="color: #1a2e1a;">What's next?</strong><br/>
              Dr. Amirtha will reach out to confirm your appointment and share consultation details. Please keep your phone accessible during your scheduled time.
            </p>
          </div>
          <p style="margin-top: 20px; font-size: 13px; color: #5c6b5c;">
            For any queries, reach us at:<br/>
            Phone: +91 90254 66491<br/>
            Email: briellejohns1804@gmail.com
          </p>
        </div>
        <div style="padding: 16px 32px; background: #f0f5f0; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #5c6b5c;">The Siddha Scholar &bull; Dr. Amirtha, BSMS Gold Medalist</p>
        </div>
      </div>
    `;

    // Send to doctor
    await transporter.sendMail({
      from: `"The Siddha Scholar" <${process.env.SMTP_EMAIL || "briellejohns1804@gmail.com"}>`,
      to: "briellejohns1804@gmail.com",
      subject: `New Booking: ${name} - ${serviceLabel} on ${date}`,
      html: doctorHtml,
    });

    // Send confirmation to patient
    await transporter.sendMail({
      from: `"The Siddha Scholar - Dr. Amirtha" <${process.env.SMTP_EMAIL || "briellejohns1804@gmail.com"}>`,
      to: email,
      subject: `Your Consultation Booking Confirmed - The Siddha Scholar`,
      html: patientHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to process booking. Please try again." },
      { status: 500 }
    );
  }
}
