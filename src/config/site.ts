export const site = {
  name: 'Roxy Mandisen',
  title: 'Roxy Mandisen',
  tagline: 'Helping you find healing, balance, and hope.',
  description:
    'Therapy for individuals and couples ready to create meaningful change. Virtual sessions available.',
  url: 'https://roxytherapist.com',

  calendlyUrl:
    import.meta.env.PUBLIC_CALENDLY_URL ?? 'https://calendly.com/roxylcsw',

  contact: {
    phone: '(240) 489-1316',
    phoneHref: '+12404891316',
    email: 'roxylcsw@gmail.com',
    location: 'Virtual',
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Specialties', href: '/specialties' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ],

  cta: {
    label: 'Schedule Consultation',
    shortLabel: 'Free Consultation',
  },
} as const;
