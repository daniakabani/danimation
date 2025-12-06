import { Feature } from '@/types'
import { Layers, ShieldCheck, Component } from 'lucide-react'

export const FEATURES: Feature[] = [
  {
    title: 'UI Platforms',
    description:
      'Micro-frontends, dashboards, and architectural foundations powering international launches.',
    icon: Layers,
  },
  {
    title: 'Design Systems',
    description:
      '120+ components, tokens, governance, documentation, and 85%+ adoption across squads.',
    icon: Component,
  },
  {
    title: 'Checkout Systems',
    description:
      'Typed contracts, secure flows, fallback states, and millions processed quarterly.',
    icon: ShieldCheck,
  },
]

export const projects = [
  {
    title: 'MoneyLion Web App - Frontend Rebuilt',
    description: 'A consolidation of 6+ frontend apps into a single frontend platform.',
    tags: ['React', 'Next.js', 'Node.js', 'Architecture'],
    metrics: ['8M USD/quarter', '67% conversion uplift', '81% fewer errors'],
    image: '/images/moneylion.png',
    problem:
      'The Frontend apps were a fragmented mess of different tech stacks, repos, CI/CD pipelines and configs. They were not scalable, and lacked clear ownership and ownership over the frontend platform. The frontend platform was also not built with measurable engineering clarity and architecture.',
    solution:
      'We rebuilt the frontend platform from scratch with a scalable architecture, clear ownership, and measurable engineering clarity. We also built a design system with a collection of shared components and design tokens.',
  },
  {
    title: 'MLDS - Moneylion Design System',
    description: 'MoneyLion Design System with scalable component library and design tokens',
    tags: ['React', 'Storybook', 'Styled Components', 'Design System'],
    metrics: ['40+ components', 'Full documentation', 'Type-safe'],
    image: '/images/moneylion.png',
    problem: 'Moneylion web apps lacked identity and brand consistency.',
    solution: 'We built a design system with a collection of shared components and design tokens.',
  },
  {
    title: 'Trevo GearBox - Micro-Frontend Platform',
    description:
      'Scalable micro-frontend architecture enabling independent high-velocity deployments, with a collection of shared components and design tokens.',
    tags: ['NextJs', 'Storybook', 'Module Federation', 'Architecture', 'TypeScript'],
    metrics: ['1/week → 3+/week deployments', 'Zero rollback increase', 'Indonesia launch ready'],
    image: '/images/trevo.png',
    problem: 'Trevo was a monolithic app with poor scalability.',
    solution:
      'We built a micro-frontend architecture to enable independent high-velocity deployments.',
  },
  {
    title: 'Trevo Guard - Car Insurance Service',
    description:
      'End-to-end checkout system with real-time sync, error reduction, and type safety.',
    tags: [
      'React',
      'Storybook',
      'TypeScript',
      'Styled Components',
      'Checkout System',
      'BFF Pattern',
    ],
    metrics: ['100% type-safe', 'Real-time sync', 'Error reduction'],
    image: '/images/trevo.png',
    problem:
      'Socar/TRevo were not making money during lockdown, no one could drive cars which is the business bread and butter.',
    solution:
      'Web built an Insurance service with checkout system and real-time sync. We also built a BFF to handle the checkout process and reduce error rates.',
  },
]

export const metrics = [
  {
    label: 'Revenue Impact',
    value: '1.2M USD',
    subtext: 'Per quarter through optimized funnels',
  },
  {
    label: 'Conversion Uplift',
    value: '53%',
    subtext: 'Improved user experience and flow',
  },
  {
    label: 'Error Reduction',
    value: '76%',
    subtext: 'Fewer error states through better UX',
  },
  {
    label: 'Deploy Velocity',
    value: '4x',
    subtext: 'From 1/week to 3+ per week',
  },
]

export const featuredArticles = [
  {
    title: 'The New CSS Positioning System Explained, Plus 10 Advanced CSS Tips just for you ;)',
    summary:
      'A deep dive into the new CSS Positioning System, including the new sticky position, the new grid layout, and more.',
    date: 'Nov 2025',
    link: 'https://medium.com/@daniakabani/the-new-css-positioning-system-explained-plus-10-advanced-css-tips-just-for-you-0f5a3e19b883',
    readTime: '5 min read',
  },
  {
    title:
      'Tailwind CSS Sucks (and That’s Okay): Why It’s Not Real CSS, and Why You’re Not a Frontend Engineer If You Don’t Know CSS',
    summary:
      'Why tailwind CSS sucks, and how can you become a better frontend engineer by knowing CSS.',
    date: 'Nov 2024',
    link: 'https://medium.com/@daniakabani/tailwind-css-sucks-and-thats-okay-why-it-s-not-real-css-and-why-you-re-not-a-frontend-engineer-7567eb57eef6',
    readTime: '6 min read',
  },
  {
    title:
      'When Your React Page Turns Into a Monster: Lessons From Refactoring 1000 Lines of Chaos Into 150 Lines of Clean Architecture',
    summary:
      'A deep dive into the challenges of refactoring a large React codebase into a clean architecture.',
    date: 'Oct 2024',
    link: 'https://medium.com/@daniakabani/when-your-react-page-turns-into-a-monster-lessons-from-refactoring-1000-lines-of-chaos-into-150-8f3bfb3d6abf',
    readTime: '4 min read',
  },
  {
    title: 'React Didn’t Kill HTML; Our Laziness Did',
    summary:
      'Why React is not the only way to build modern web apps, and how we can leverage HTML and CSS to build better user experiences.',
    date: 'Nov 2024',
    link: 'https://medium.com/@daniakabani/react-didnt-kill-html-our-laziness-did-65b625f0bd50',
    readTime: '4 min read',
  },
]

export const techStack = [
  {
    name: 'Frontend Core & Design',
    attitude: 'The foundation for blazing-fast, type-safe, and beautiful user interfaces.',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'zustand', 'swr'],
  },
  {
    name: 'Architecture & Scaling',
    attitude: 'Building large, scalable systems with clear boundaries and independent deployments.',
    techs: [
      'Micro-frontends',
      'Module Federation',
      'Monorepo (Turborepo)',
      'Design Systems',
      'BFF Pattern',
    ],
  },
  {
    name: 'Data & Backend Integration',
    attitude: 'Optimizing data flow for superior performance and reliable state management.',
    techs: ['Express', 'Prisma', 'RestAPI', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'Quality & Delivery',
    attitude: 'Ensuring high-quality, documented, and rapidly deployable code.',
    techs: ['Storybook', 'ESLint/Prettier', 'Vitest/Jest', 'Playwright', 'GitHub Actions (CI/CD)'],
  },
]
