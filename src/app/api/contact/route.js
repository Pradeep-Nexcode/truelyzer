import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields required" }), {
        status: 400,
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Trulyzer Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL, // Receiver
      replyTo: email,
      subject: `New Message From ${name}`,
      text: message,
     html: `
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${body.phone || "Not provided"}</p>
  <p><strong>Service:</strong> ${body.service || "Not specified"}</p>
  <p><strong>Message:</strong><br/>${message}</p>
`,

    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Message Sent Successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
     console.error("EMAIL ERROR:", error);
    return new Response(
      JSON.stringify({ error: "Error sending email" }),
      { status: 500 }
    );
  }
}
