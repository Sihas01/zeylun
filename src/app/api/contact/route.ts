import { NextResponse } from 'next/server';
// You'll need to install: npm install resend
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Logic for sending via Resend (Recommended)
    /*
    const { data, error } = await resend.emails.send({
      from: 'Zeylun <onboarding@resend.dev>', // Update to your verified domain later
      to: ['info@zeylun.com'],
      reply_to: email,
      subject: `[Zeylun Contact] ${subject}: From ${name}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }
    */

    // 2. Logic for sending via Nodemailer (Alternate)
    /*
    import nodemailer from 'nodemailer';
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "info@zeylun.com",
      subject: `[New Inquiry] ${subject}`,
      text: message,
    });
    */

    console.log('Simulated email sent to info@zeylun.com:', { name, email, subject, message });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
