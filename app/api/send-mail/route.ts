import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export function escapeHTML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const safeName = escapeHTML(name || '')
    const safeEmail = escapeHTML(email || '')
    const safeMessage = escapeHTML(message || '')

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'rawatesudarshan5015@gmail.com', // your email
      subject: `New message from ${safeName}`,
      html: `
        <h2>📩 New Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email sending failed:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
