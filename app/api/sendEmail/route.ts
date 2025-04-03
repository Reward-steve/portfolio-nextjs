import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// Define a function that takes dynamic parameters from a form
const sendEmail = async (Name: string, Email: string, Message: string) => {
  try {
    // Create a transporter using your email credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email from .env
        pass: process.env.EMAIL_PASS, // Your App Password from .env
      },
    });

    const mailOptions = {
      from: `${Name} <${process.env.EMAIL_USER}>`, // Use your authenticated email
      replyTo: Email, // This makes "Reply" go to the user
      to: process.env.EMAIL_USER, // Your receiving email
      subject: "Get in touch",
      text: `Message from: ${Name} (${Email})\n\n${Message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email:", error },
      { status: 500 }
    );
  }
};

export async function POST(req: Request) {
  const { Name, Email, Message } = await req.json();

  try {
    await sendEmail(Name, Email, Message);
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200, statusText: "success" }
    );
  } catch (err) {
    return new NextResponse(JSON.stringify({ err: "Error sending email" }), {
      status: 500,
      statusText: "failed",
    });
  }
}
