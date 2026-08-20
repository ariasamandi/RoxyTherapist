export const services = {
  hero: {
    title: 'Services',
    intro:
      "Whether you're seeking support on your own or with a partner, therapy is tailored to your goals — with practical tools, evidence-based approaches, and a warm, collaborative space to grow.",
  },

  individual: {
    title: 'Individual Therapy',
    intro:
      'One-on-one therapy for adults who want to understand themselves more deeply, work through difficult experiences, and build a life that feels more balanced and authentic.',
    whoItsFor: {
      title: "Who it's for",
      items: [
        'Adults navigating anxiety, depression, or persistent stress',
        'Anyone healing from trauma or painful life experiences',
        'People going through major life transitions or feeling stuck',
        'Those working on self-esteem, confidence, or identity',
        "Individuals who want support — even if they're not sure where to start",
      ],
    },
    helpsWith: {
      title: 'What I help with',
      items: [
        'Feeling less overwhelmed by anxiety and worry',
        'Processing trauma and difficult memories at your pace',
        'Building self-compassion and confidence',
        'Managing stress, burnout, and emotional exhaustion',
        'Navigating grief, loss, and life changes',
        'Developing practical coping skills for everyday life',
      ],
    },
  },

  couples: {
    title: 'Couples Therapy',
    intro:
      'Partnership can be deeply rewarding — and deeply challenging. Couples therapy helps you communicate more clearly, rebuild trust, and create a relationship that feels connected and resilient.',
    topics: [
      {
        title: 'Communication',
        description:
          'Learn to express needs and listen with empathy — so conversations bring you closer instead of driving you apart.',
      },
      {
        title: 'Conflict',
        description:
          'Develop healthier ways to disagree, repair after arguments, and break unhelpful patterns that keep repeating.',
      },
      {
        title: 'Trust',
        description:
          'Rebuild trust after betrayal or distance, and create a foundation of honesty and emotional safety.',
      },
      {
        title: 'Premarital',
        description:
          'Prepare for marriage with open conversations about values, expectations, communication, and your shared future.',
      },
      {
        title: 'Emotional Connection',
        description:
          'Rediscover intimacy, affection, and the feeling of being truly seen and valued by your partner.',
      },
    ],
  },

  specialties: {
    title: 'Specialties',
    intro:
      "These are areas where I have focused experience and training. Every client is unique — we'll explore what matters most to you.",
    items: [
      'Anxiety',
      'Trauma',
      'Self-esteem',
      'Relationship issues',
      'Life transitions',
      'Stress',
    ],
  },

  approaches: {
    title: 'Therapy Approaches',
    intro:
      'I integrate evidence-based methods based on what fits your needs — never a one-size-fits-all approach.',
    items: [
      {
        title: 'CBT (Cognitive Behavioral Therapy)',
        shortTitle: 'CBT',
        description:
          'Learn to identify and change unhelpful thoughts and behaviors.',
      },
      {
        title: 'EMDR (Eye Movement Desensitization and Reprocessing)',
        shortTitle: 'EMDR',
        description:
          'Process distressing experiences so they no longer feel overwhelming.',
      },
      {
        title: 'Positive Psychology',
        shortTitle: 'Positive Psychology',
        description:
          'Build on your strengths and create a more fulfilling life.',
      },
      {
        title: 'Mindfulness',
        shortTitle: 'Mindfulness',
        description:
          'Develop greater awareness and emotional balance.',
      },
    ],
  },

  cta: {
    title: 'Not sure which service is right for you?',
    text: "That's completely normal. Schedule a free 15-minute consultation and we'll talk through what you're looking for — no commitment required.",
  },
} as const;
