# Next.js Email Sending API with Nodemailer

This project implements an email-sending API using **Next.js API Routes** and **Nodemailer**. It allows users to send messages from a contact form, which are delivered to a specified email address.

## 🚀 Features

- Sends emails using **Nodemailer**
- Uses **Next.js API Routes** for backend processing
- Loads sensitive credentials from an `.env` file
- Secure email authentication using **App Passwords** (Gmail)
- Fast and easy integration with your existing Next.js projects

---

## 📌 Setup Guide

### 1️⃣ Install Dependencies

Ensure you have Node.js and npm installed. Then, install the required packages:

```bash
npm install nodemailer dotenv
```

### 2️⃣ Create Environment Variables

Create a `.env` file in the root directory and add the following:

```dotenv
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

> **Note:** Use an **App Password** instead of your actual email password for security. This is required if you are using Gmail for sending emails.

### 3️⃣ Implement the Email Sending Function

Inside your Next.js API route (`/pages/api/sendEmail.ts`):

```typescript
import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables

const sendEmail = async (email: string, username: string, message: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${username} <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Get-In-Touch",
      text: `Message from: ${username} (${email})

${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
};

export async function POST(req: Request) {
  const { email, username, message } = await req.json();
  return sendEmail(email, username, message);
}
```

### 4️⃣ Handling the Frontend (Example)

Your frontend should make a POST request to `/api/sendEmail` with the necessary data:

```typescript
const handleSendMail = async () => {
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, message }),
    });
    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
```

---

## 🛠️ Tech Stack

- **Next.js**: For building fast, SEO-friendly pages with server-side rendering.
- **Tailwind CSS**: For rapid styling with utility-first classes.
- **Framer Motion**: For adding smooth animations to your project.
- **Chakra UI**: Optional for using pre-built components for the UI.
- **Nodemailer**: Used to send emails.
- **React Icons**: For displaying icons like social media and tech icons.

---

## 📦 Dependencies Used

| Package    | Version |
| ---------- | ------- |
| nodemailer | Latest  |
| dotenv     | Latest  |
| next       | Latest  |
| react      | Latest  |

---

## ❗ Troubleshooting

### 1️⃣ "Method Not Allowed (405)"

- Ensure your API route is a `POST` request.
- Check if `/api/sendEmail` is correctly configured in Next.js.

### 2️⃣ "getaddrinfo ENOTFOUND smtp.gmail.com"

- Check your **internet connection**.
- Ensure the **correct email settings** are used.

### 3️⃣ Email Sent But Appears as "From Me to Me"

- In your `mailOptions`, make sure to use `from: "User Name <user@example.com>"` instead of just `email`.

---

## 🛠️ Future Improvements

- Add **email validation** before sending to ensure valid inputs.
- Implement **Rate Limiting** to prevent spam and abuse.
- Use a **custom SMTP server** for more flexibility and better deliverability.

---

## 📜 License

This project is licensed under a **Proprietary License**. All rights reserved.

---

**Happy Coding! 🚀**
