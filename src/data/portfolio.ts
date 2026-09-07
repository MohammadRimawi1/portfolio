import {
  Code2,
  Server,
  Database,
  Boxes,
  Layout,
  GitBranch,
  Github,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';

export type SkillCategory = {
  id: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
  skills: { name: string; note: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    icon: Code2,
    blurb: 'The core languages I write production code in.',
    skills: [
      { name: 'Java', note: 'Primary backend language' },
      { name: 'JavaScript', note: 'Full-stack' },
      { name: 'TypeScript', note: 'Type-safe frontends & APIs' },
      { name: 'Python', note: 'Scripting & tooling' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    blurb: 'Server-side frameworks I build APIs and services with.',
    skills: [
      { name: 'Spring Boot', note: 'REST & microservices' },
      { name: 'Spring Data JPA', note: 'Persistence layer' },
      { name: 'Spring Security', note: 'Auth & authorization' },
      { name: 'Hibernate', note: 'ORM' },
      { name: 'Node.js', note: 'Runtime' },
      { name: 'Express.js', note: 'REST APIs' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: Database,
    blurb: 'Relational and document stores I design schemas for.',
    skills: [
      { name: 'MySQL', note: 'Relational' },
      { name: 'PostgreSQL', note: 'Relational' },
      { name: 'MongoDB', note: 'Document store' },
      { name: 'Mongoose', note: 'ODM for MongoDB' },
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture & DevOps',
    icon: Boxes,
    blurb: 'How I structure, deploy, and connect distributed systems.',
    skills: [
      { name: 'Microservices', note: 'Service decomposition' },
      { name: 'Spring Cloud', note: 'Service discovery & routing' },
      { name: 'Docker', note: 'Containerization' },
      { name: 'RabbitMQ', note: 'Message broker' },
      { name: 'Kafka', note: 'Event streaming' },
      { name: 'Redis', note: 'Caching & pub/sub' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Layout,
    blurb: 'What I use to build interfaces people actually use.',
    skills: [
      { name: 'React', note: 'Component architecture' },
      { name: 'Tailwind CSS', note: 'Styling' },
      { name: 'DaisyUI', note: 'Component library' },
    ],
  },
  {
    id: 'engineering',
    label: 'Software Engineering',
    icon: GitBranch,
    blurb: 'Practices I follow to ship maintainable software.',
    skills: [
      { name: 'UML', note: 'System modeling' },
      { name: 'SRS', note: 'Requirements engineering' },
      { name: 'Agile', note: 'Iterative delivery' },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  details: string[];
  impact: string;
  github?: string;
  accent: 'moss' | 'rust' | 'sand';
};

export const projects: Project[] = [
  {
    slug: 'library-management-system',
    name: 'Library Management System',
    tagline: 'Spring Boot monolith evolved into a microservices architecture',
    year: '2026',
    role: 'Sole developer',
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'Spring Data JPA', 'MySQL', 'Docker'],
    summary:
      'A library platform that started as a Spring Boot monolith and was refactored into a set of independently deployable services, wired together with Spring Cloud and containerized with Docker.',
    details: [
      'Decomposed the monolith into bounded-context services (catalog, members, loans, reservations) communicating over REST.',
      'Introduced Spring Cloud for service registration, API gateway routing, and config management across environments.',
      'Modeled the persistence layer with Spring Data JPA and Hibernate against MySQL, with per-service schemas.',
      'Containerized every service with Docker so the whole system boots with a single compose command.',
    ],
    impact:
      'This is the project I\'d point to if you asked how I think about system design — going from one deployable thing to several, and being honest about what that trade-off costs.',
    github: 'https://github.com/MohammadRimawi1/Library-Management-System',
    accent: 'moss',
  },
  {
    slug: 'complaints-management-system',
    name: 'Complaints Management System',
    tagline: 'A team-built platform for lodging and tracking complaints end to end',
    year: '2026',
    role: 'Full-stack team member',
    stack: ['React', 'Node.js', 'Express.js', 'MySQL', 'UML', 'SRS'],
    summary:
      'A full complaints lifecycle platform built as a team project — from a formal SRS and UML diagrams through a React frontend and a Node/Express API backed by MySQL.',
    details: [
      'Authored and reviewed the Software Requirements Specification and translated it into UML use-case and class diagrams before writing code.',
      'Built REST endpoints on Express for complaint submission, status tracking, and resolution workflows.',
      'Implemented the React client with role-based views for citizens and administrators.',
      'Designed the MySQL schema to model complaints, departments, statuses, and audit history.',
    ],
    impact:
      'Built with a real SRS and UML diagrams before any code, because that\'s how the team I was on actually worked.',
    accent: 'rust',
  },
  {
    slug: 'twitter-clone',
    name: 'Twitter Clone',
    tagline: 'A social feed with posts, follows, and real-time interactions',
    year: '2026',
    role: 'Sole developer',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    summary:
      'A social platform clone covering the core Twitter loop — composing posts, following users, and scrolling a personalized feed — built on the MERN stack with MongoDB.',
    details: [
      'Designed a document model in MongoDB for users, posts, follows, and likes, optimized for feed assembly.',
      'Built the Express API with auth, posting, follow graph, and timeline endpoints.',
      'Implemented the React client with a live feed, compose box, and profile pages.',
      'Handled feed ordering and pagination to keep the timeline responsive as data grows.',
    ],
    impact:
      'MongoDB\'s document model changes how you think about a social feed — this taught me that the hard way, through a few schema rewrites.',
    github: 'https://github.com/MohammadRimawi1/Twitter-Clone',
    accent: 'sand',
  },
  {
    slug: 'mern-thinkboard',
    name: 'MERN ThinkBoard',
    tagline: 'A note-taking board with auth, built on the MERN stack',
    year: '2025',
    role: 'Sole developer',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    summary:
      'A personal think-board for capturing and organizing notes, with user accounts so each person sees only their own content — a clean MERN implementation.',
    details: [
      'Built JWT-based authentication so notes are scoped to the owning user.',
      'Implemented full CRUD for notes and boards on Express with Mongoose models.',
      'Designed the React UI for creating, editing, and filtering notes by board.',
      'Enforced per-user data isolation at the query layer in MongoDB.',
    ],
    impact:
      'Auth and CRUD, done properly. Nothing fancy, but it\'s the part every full-stack job actually tests you on.',
    github: 'https://github.com/MohammadRimawi1/MERN-ThinkBoard',
    accent: 'moss',
  },
  {
    slug: 'subscription-tracker',
    name: 'Subscription Tracker',
    tagline: 'Track recurring spend, secured with Arcjet',
    year: '2026',
    role: 'Sole developer',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Arcjet'],
    summary:
      'A backend service for tracking recurring subscriptions and their costs, hardened with Arcjet for rate limiting and bot protection.',
    details: [
      'Modeled subscriptions, billing cycles, and renewal dates in MongoDB.',
      'Built Express endpoints to add, list, and update subscriptions, with per-user scoping.',
      'Integrated Arcjet to rate-limit endpoints and block abusive traffic before it reaches business logic.',
      'Added cost aggregation so a user can see total recurring spend at a glance.',
    ],
    impact:
      'APIs get abused in production. Arcjet here handles the rate-limiting so the app doesn\'t have to think about it.',
    github: 'https://github.com/MohammadRimawi1/Subscription-Tracker',
    accent: 'rust',
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  kind: 'education' | 'training';
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: '2021 — Present',
    title: 'B.Sc. in Computer Science',
    org: 'Palestine Technical University — Khadoorie',
    kind: 'education',
    description:
      'Currently in Year 4, maintaining a GPA of 85.3/100. Coursework spanning data structures, databases, operating systems, software engineering, and distributed systems — the theoretical backbone behind everything I build.',
  },
  {
    period: '2024',
    title: 'Backend Engineering Training',
    org: 'Exalt Technologies',
    kind: 'training',
    description:
      'A 300+ hour intensive program focused on production backend engineering with Java, Spring Boot, microservices, Spring Cloud, and Docker. Built and deployed service-oriented systems end to end, from API design to containerized deployment.',
  },
  {
    period: '2023',
    title: 'Front-End Development with React',
    org: 'Online certification',
    kind: 'training',
    description:
      'Completed a structured React program covering component architecture, hooks, state management, and building responsive interfaces — the front half of my full-stack skill set.',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const certifications: Certification[] = [
  {
    title: 'EXALT Summer Training Program',
    issuer: 'Exalt Technologies',
    year: '2026',
  },
  {
    title: 'Front-End Development with React',
    issuer: 'Online Certification',
    year: '2026',
  },
];

export const contact = {
  email: 'mohammadrimawi47@gmail.com',
  phone: '+970 592 283 994',
  github: 'github.com/MohammadRimawi1',
  githubUrl: 'https://github.com/MohammadRimawi1',
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export const GithubIcon = Github;
export const ExternalLinkIcon = ExternalLink;
