export const privacy = {
  hero: {
    title: 'Privacy Policy',
    intro:
      'Your privacy matters. This policy explains what information this website collects, how it is used, and your choices.',
  },

  lastUpdated: 'August 20, 2026',

  sections: [
    {
      title: 'Overview',
      paragraphs: [
        'This website is operated by Roxy Mandisen, LCSW, to provide general information about therapy services and to help you schedule a consultation. This site is an informational website — it is not a patient portal and is not intended for emergencies.',
        'If you are experiencing a mental health emergency, please call 911 or go to your nearest emergency room.',
      ],
    },
    {
      title: 'Information This Website Collects',
      paragraphs: [
        'When you visit this website, we may collect limited, non-clinical information such as:',
      ],
      list: [
        'Pages visited and general usage data (via privacy-focused analytics)',
        'Browser type, device type, and approximate location (city/region level)',
        'Referring website or search terms that led you here',
      ],
      afterList:
        'This website does not include a contact form and does not ask you to submit clinical or health information online.',
    },
    {
      title: 'Information You Share Directly',
      paragraphs: [
        'If you email or call, you choose what information to share. If you schedule through Calendly, you will provide information directly to that service according to their privacy policy.',
        'Please do not use this website, email, or scheduling tools to share urgent clinical information or detailed protected health information unless we have agreed to a secure method of communication.',
      ],
    },
    {
      title: 'How We Use Information',
      list: [
        'Understand how visitors use the website so we can improve it',
        'Respond to inquiries you initiate by email or phone',
        'Facilitate consultation scheduling through Calendly',
      ],
    },
    {
      title: 'Third-Party Services',
      paragraphs: [
        'This website uses trusted third-party services that may collect information according to their own policies:',
      ],
      list: [
        'Vercel Analytics — lightweight, privacy-friendly website analytics',
        'Calendly — online scheduling for consultations',
        'Google Fonts — typography loaded when you visit the site',
      ],
      afterList:
        'We encourage you to review the privacy policies of these services. We do not sell your personal information.',
    },
    {
      title: 'Cookies & Analytics',
      paragraphs: [
        'We use lightweight analytics to understand general traffic patterns. Vercel Analytics is designed to be privacy-friendly and does not use cookies for tracking across other websites.',
        'You can use browser settings to block cookies or use privacy-focused browser extensions if you prefer.',
      ],
    },
    {
      title: 'Data Security',
      paragraphs: [
        'We take reasonable steps to protect information associated with this website. However, no method of transmission over the internet is completely secure. Please use discretion when sharing personal information online.',
      ],
    },
    {
      title: 'Your Choices',
      list: [
        'You may choose not to use this website and contact us by phone instead',
        'You may request information about data you have shared with us directly',
        'You may use browser tools to limit analytics and cookies',
      ],
    },
    {
      title: 'Changes to This Policy',
      paragraphs: [
        'We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        'If you have questions about this privacy policy, please contact:',
      ],
    },
  ],
} as const;
