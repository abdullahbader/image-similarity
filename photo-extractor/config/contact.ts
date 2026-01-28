// Contact information configuration
// Update these with your actual contact details

export const contactConfig = {
  // Email addresses
  supportEmail: 'support@photoanalyzer.pro', // Replace with your actual support email
  businessEmail: 'business@photoanalyzer.pro', // Replace with your actual business email
  
  // Company information (optional)
  companyName: 'PhotoAnalyzer Pro',
  address: '', // Add your physical address if desired
  phone: '', // Add your phone number if desired
  
  // Social media links (optional)
  socialMedia: {
    linkedin: '', // e.g., 'https://linkedin.com/company/yourcompany'
    twitter: '', // e.g., 'https://twitter.com/yourhandle'
    github: '', // e.g., 'https://github.com/yourusername'
  },
  
  // Contact form settings
  contactForm: {
    // Choose one of these options:
    // 'emailjs' - Uses EmailJS service (requires EmailJS account)
    // 'formspree' - Uses Formspree service (requires Formspree account)
    // 'mailto' - Opens default email client
    // 'api' - Uses custom API endpoint
    method: 'mailto' as 'emailjs' | 'formspree' | 'mailto' | 'api',
    
    // If using EmailJS
    emailjs: {
      serviceId: '',
      templateId: '',
      publicKey: '',
    },
    
    // If using Formspree
    formspree: {
      endpoint: '', // e.g., 'https://formspree.io/f/YOUR_FORM_ID'
    },
    
    // If using custom API
    api: {
      endpoint: '', // e.g., '/api/contact'
    },
  },
  
  // Response time information
  responseTime: '24-48 hours',
}
