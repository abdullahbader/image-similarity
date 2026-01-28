# Contact Information Setup Guide

## 📋 Information Needed

To make your website fully functional, please provide the following information:

### 1. **Email Addresses** (Required)
- **Support Email**: The email address where users should send support requests
- **Business Email**: The email address for business inquiries (can be the same as support email)

### 2. **Company Information** (Optional but Recommended)
- **Company Name**: Your official company/business name
- **Physical Address**: If you want to display your business address
- **Phone Number**: If you want to display a contact phone number

### 3. **Social Media Links** (Optional)
- **LinkedIn**: Your LinkedIn company/profile URL
- **Twitter/X**: Your Twitter/X handle URL
- **GitHub**: Your GitHub profile/organization URL

### 4. **Contact Form Method** (Choose One)

You have 4 options for handling contact form submissions:

#### Option A: Mailto Links (Easiest - No Setup Required)
- **Method**: `mailto`
- **How it works**: Opens the user's default email client with pre-filled information
- **Pros**: No setup, works immediately
- **Cons**: Requires users to have email client configured

#### Option B: Formspree (Recommended - Free Tier Available)
- **Method**: `formspree`
- **Setup**: 
  1. Go to https://formspree.io
  2. Create a free account
  3. Create a new form
  4. Copy the form endpoint URL
- **Pros**: Professional, emails sent directly to your inbox, spam protection
- **Cons**: Requires account setup (free tier: 50 submissions/month)

#### Option C: EmailJS (Free Tier Available)
- **Method**: `emailjs`
- **Setup**:
  1. Go to https://www.emailjs.com
  2. Create a free account
  3. Set up email service (Gmail, Outlook, etc.)
  4. Create email template
  5. Get Service ID, Template ID, and Public Key
- **Pros**: Direct email delivery, customizable templates
- **Cons**: More complex setup, free tier: 200 emails/month

#### Option D: Custom API Endpoint
- **Method**: `api`
- **Setup**: Provide your own backend API endpoint URL
- **Pros**: Full control, custom logic
- **Cons**: Requires backend development

## 🔧 How to Update

1. Open the file: `config/contact.ts`
2. Replace the placeholder values with your actual information
3. Save the file
4. The website will automatically use your information

## 📝 Example Configuration

```typescript
export const contactConfig = {
  supportEmail: 'your-support@yourdomain.com',
  businessEmail: 'your-business@yourdomain.com',
  companyName: 'Your Company Name',
  address: '123 Main St, City, State 12345',
  phone: '+1 (555) 123-4567',
  socialMedia: {
    linkedin: 'https://linkedin.com/company/yourcompany',
    twitter: 'https://twitter.com/yourhandle',
    github: 'https://github.com/yourusername',
  },
  contactForm: {
    method: 'formspree', // or 'mailto', 'emailjs', 'api'
    formspree: {
      endpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    },
  },
  responseTime: '24-48 hours',
}
```

## ✅ What's Already Done

- ✅ Footer redesigned with cleaner, more professional layout
- ✅ Contact page updated to use real email addresses
- ✅ Contact form configured to work with multiple methods
- ✅ All components now pull from centralized config file
- ✅ Responsive design maintained
- ✅ Hover effects and animations added

## 🚀 Next Steps

1. **Provide your email addresses** - Update `config/contact.ts` with your real emails
2. **Choose contact form method** - Select mailto, Formspree, EmailJS, or custom API
3. **Add optional information** - Company name, address, phone, social media links
4. **Test the contact form** - Make sure emails are being received correctly

## 📧 Quick Start (Minimum Required)

At minimum, you just need to update these two lines in `config/contact.ts`:

```typescript
supportEmail: 'your-actual-email@domain.com',
businessEmail: 'your-actual-email@domain.com', // Can be same as supportEmail
```

That's it! The website will work with just your email addresses.
