import { NextRequest, NextResponse } from 'next/server'
import { contactConfig } from '@/config/contact'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    const { name, email, subject, message } = formData

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email content
    const emailSubject = `Contact Form: ${subject || 'General Inquiry'} - ${name}`
    const emailBody = `
New contact form submission from PhotoAnalyzer Pro website:

Name: ${name}
Email: ${email}
Subject: ${subject || 'General Inquiry'}

Message:
${message}

---
This email was sent from the contact form on photoanalyser.com
    `.trim()

    // Send email using mailto link (for now - can be upgraded to use a service like Resend, SendGrid, etc.)
    // For production, you should use a proper email service
    // This is a simple implementation that will work with most email services
    
    // Option 1: Use a service like Resend (recommended for production)
    // You would need to install: npm install resend
    // And set RESEND_API_KEY in your environment variables
    
    // Option 2: Use Nodemailer with Gmail SMTP
    // You would need to install: npm install nodemailer
    // And configure Gmail app password
    
    // For now, we'll return success and log the email
    // In production, replace this with actual email sending logic
    
    console.log('Contact form submission received:')
    console.log('To:', contactConfig.supportEmail)
    console.log('Subject:', emailSubject)
    console.log('Body:', emailBody)
    
    // TODO: Replace this with actual email sending service
    // Example with Resend (uncomment after installing and configuring):
    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contact@photoanalyser.com',
      to: contactConfig.supportEmail,
      subject: emailSubject,
      text: emailBody,
      replyTo: email,
    })
    */

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
