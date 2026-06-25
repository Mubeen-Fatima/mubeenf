import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 'rag-chatbot-client',
    quote: "Mubeen built an exceptional, reliable chatbot using a RAG system, surpassing our unreliable off-the-shelf solution. Her custom design ensures consistent answers and scalability for future projects.",
    clientName: 'Enterprise Client',
    projectRef: 'rag-chatbot',
    role: 'CTO',
  },
  {
    id: 'llama3-client',
    quote: "Mubeen is very skilled, and if there are domains she is not as experienced, she will catch up in a matter of days. Very impressive. Would highly recommend.",
    clientName: 'Tech Startup',
    projectRef: 'llama3-assistant',
    role: 'Founder',
  },
  {
    id: 'restaurant-client',
    quote: "Mubeen is talented developer. She has grip on her domain. Understand the problems well and provide decent solutions. Happy to work with her and looking forward for future collaborations.",
    clientName: 'Restaurant Chain',
    projectRef: 'restaurant-system',
    role: 'Owner',
  },
  {
    id: 'python-tutoring-client',
    quote: "Very well skilled on the topic and very helpful with tutoring thank you so much for working with me for 4 months.",
    clientName: 'Student',
    role: 'Mentee',
  },
];
