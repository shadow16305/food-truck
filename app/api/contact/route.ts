import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_TO,
    pass: process.env.EMAIL_APP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, number, address, size, message } = await req.json();

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New email from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${number}
        Address: ${address}
        Event Size: ${size}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
