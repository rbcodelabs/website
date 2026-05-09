"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string }

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim()
  const email = formData.get("email")?.toString().trim()
  const message = formData.get("message")?.toString().trim()
  const subject = formData.get("subject")?.toString().trim() || "Contact from rbcodelabs.com"

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields." }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  try {
    const { error } = await resend.emails.send({
      from: "RB Code Labs <noreply@updates.yourhiptrip.com>",
      to: "rick@rbcodelabs.com",
      replyTo: email,
      subject: `[rbcodelabs.com] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 24px;">
          <p style="color: #666; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em;">New message from rbcodelabs.com</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { status: "error", message: "Something went wrong. Please try again or email rick@rbcodelabs.com directly." }
    }

    return { status: "success" }
  } catch (err) {
    console.error("Resend error:", err)
    return { status: "error", message: "Something went wrong. Please try again or email rick@rbcodelabs.com directly." }
  }
}
