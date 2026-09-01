export const home = {
  intro: {
    greeting: "Hi, I'm Roxy.",
    paragraphs: [
      "I'm a licensed clinical social worker passionate about helping people feel more grounded, connected, and hopeful — even when life feels overwhelming.",
      "I am one of the few therapists that is trained in EMDR and my approach is warm, collaborative, and practical. I work with individuals and couples who want to understand themselves more deeply, heal from difficult experiences, and build skills that last long after therapy ends.",
      "Whether you're facing anxiety, relationship challenges, or a major life transition, you don't have to navigate it alone.",
    ],
  },

  help: {
    title: 'How I Can Help',
    intro: 'Therapy can support you through many of life\'s challenges. Areas I often work with include:',
    items: [
      'Anxiety',
      'Depression',
      'Trauma & PTSD',
      'Relationship Challenges',
      'Self-Esteem',
      'Stress & Burnout',
      'Life Transitions',
    ],
  },

  approach: {
    title: 'My Approach',
    quote:
      "Therapy isn't just about talking through problems. Together we'll understand what's keeping you stuck, develop practical tools, heal underlying wounds, and create lasting change.",
    modalities: ['CBT', 'EMDR', 'Positive Psychology', 'Mindfulness', 'Couples Therapy'],
    outcomes: [
      'Feel less overwhelmed by anxiety',
      'Build healthier relationships',
      'Heal from painful experiences',
      'Develop confidence in yourself',
      'Learn practical tools you can use outside of therapy',
    ],
  },

  process: {
    title: 'What to Expect',
    intro: 'Starting therapy should feel clear and manageable. Here\'s how we get started:',
    steps: [
      {
        number: '1',
        title: 'Schedule a free consultation',
        description: 'A brief, no-pressure conversation to share what you\'re looking for and see if we\'re a good fit.',
      },
      {
        number: '2',
        title: 'Identify your goals',
        description: "We'll talk about what's bringing you in and create a personalized plan tailored to your needs.",
      },
      {
        number: '3',
        title: 'Build lasting change',
        description: 'Together we develop the skills, insight, and confidence to create meaningful, lasting change.',
      },
    ],
  },

  reviews: {
    title: 'Client Reflections',
    message: 'Coming soon — testimonials will be shared here once available.',
  },

  cta: {
    title: 'Ready to begin?',
    text: 'Schedule your free 15-minute consultation and take the first step toward feeling more like yourself again.',
  },
} as const;

export const heroPhoto = {
  src: '/images/hero-blossoms.jpg',
  alt: 'Cherry blossoms on a branch against a clear blue sky',
} as const;

export const homeIntroPhoto = {
  src: '/images/roxy-home-intro.png',
  alt: 'Roxy Mandisen, licensed clinical social worker',
} as const;

export const roxyPhoto = {
  src: '/images/roxy-mandisen.jpg',
  alt: 'Roxy Mandisen, licensed clinical social worker',
} as const;
