import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASS, // Your app-specific password
  },
})

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
  }

  try {
    const {
      name,
      email,
      company,
      mobile,
      details,
    } = await request.json()

    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.QUOTATION_RECEIVER,
      subject: 'New Quotation Request',
      html: `
        <h2>New Quotation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Details:</strong><br>${details.replace(/\n/g, '<br>')}</p>
      `,
    }

    const userAckMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We have received your quotation request!',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We received your quotation request and our team will contact you soon.</p>
        <hr>
        <b>Your request details:</b>
        <ul>
          <li><b>Company:</b> ${company || 'N/A'}</li>
          <li><b>Email:</b> ${email}</li>
          <li><b>Mobile:</b> ${mobile}</li>
          <li><b>Details:</b> ${details.replace(/\n/g, '<br>')}</li>
        </ul>
        <p>If you have any questions, reply to this email or contact us directly.</p>
        <p><b>Caja y Empaques Arely</b></p>
      `,
    }

    const adminInfo = await transporter.sendMail(adminMailOptions)
    const userInfo = await transporter.sendMail(userAckMailOptions)

    return NextResponse.json({
      success: true,
      adminMessageId: adminInfo.messageId,
      userMessageId: userInfo.messageId,
    })
  } catch (error) {
    console.error('Error sending emails:', error)
    return NextResponse.json({ success: false, error: 'Failed to send emails' }, { status: 500 })
  }
}
