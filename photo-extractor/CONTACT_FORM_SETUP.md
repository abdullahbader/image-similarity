# Contact Form Email Setup Guide

## Current Status
✅ Email address configured: **abdallah.b.b96@gmail.com**
✅ API route created: `/app/api/contact/route.ts`

## Option 1: Use Resend (Recommended - Easy Setup)

Resend is a modern email API service with a generous free tier (3,000 emails/month).

### Setup Steps:

1. **Sign up for Resend:**
   - Go to https://resend.com
   - Create a free account
   - Verify your email

2. **Get your API key:**
   - Go to API Keys section
   - Create a new API key
   - Copy the key

3. **Add domain (optional but recommended):**
   - Add your domain (photoanalyser.com) to Resend
   - Verify DNS records
   - This allows you to send from your domain

4. **Install Resend package:**
   ```bash
   npm install resend
   ```

5. **Create environment file:**
   Create `.env.local` in your project root:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

6. **Update the API route:**
   Uncomment the Resend code in `app/api/contact/route.ts` and remove the console.log section.

## Option 2: Use Formspree (No Backend Code Needed)

Formspree is the easiest option - no code changes needed!

### Setup Steps:

1. **Sign up for Formspree:**
   - Go to https://formspree.io
   - Create a free account (50 submissions/month free)

2. **Create a new form:**
   - Click "New Form"
   - Set email to: **abdallah.b.b96@gmail.com**
   - Copy the form endpoint URL (looks like: `https://formspree.io/f/xxxxx`)

3. **Update config:**
   In `config/contact.ts`, change:
   ```typescript
   method: 'formspree',
   formspree: {
     endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
   },
   ```

4. **That's it!** No code changes needed.

## Option 3: Use Nodemailer with Gmail

If you want to use your Gmail account directly.

### Setup Steps:

1. **Enable Gmail App Password:**
   - Go to Google Account settings
   - Enable 2-Step Verification
   - Go to App Passwords
   - Generate a new app password for "Mail"

2. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   ```

3. **Create environment file:**
   Create `.env.local`:
   ```
   GMAIL_USER=abdallah.b.b96@gmail.com
   GMAIL_APP_PASSWORD=your_app_password_here
   ```

4. **Update API route:**
   Replace the email sending code in `app/api/contact/route.ts` with Nodemailer code.

## Quick Start (Easiest - Formspree)

1. Go to https://formspree.io and sign up
2. Create a form with email: **abdallah.b.b96@gmail.com**
3. Copy the form endpoint
4. Update `config/contact.ts`:
   ```typescript
   method: 'formspree',
   formspree: {
     endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
   },
   ```
5. Done! Emails will be delivered to your inbox.

## Testing

After setup, test the contact form:
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check your email inbox (abdallah.b.b96@gmail.com)

## Current Implementation

Right now, the API route logs the email but doesn't actually send it. You need to choose one of the options above to enable actual email delivery.
