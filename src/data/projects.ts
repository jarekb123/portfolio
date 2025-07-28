import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'infinit-flutter-web-to-nextjs',
    name: 'Infinit - migrate flutter web to next.js',
    shortDescription: 'Migration of a Flutter web app to Next.js, leveraging native web technologies and AI-driven UI generation.',
    fullDescription: 'Led the migration of a complex Flutter web application to a modern Next.js stack, utilizing native web technologies. Integrated AI agents (Cursor, VS Code Copilot, Claude/GPT/Gemini) for code generation and automation. Employed a Figma MCP server to automatically generate UI code, while maintaining business logic in custom React hooks and extracting CQRS API requests for TypeScript client generation.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Figma MCP', 'AI Agents', 'CQRS', 'OpenAPI'],
    libraries: ['React Query', 'Zod', 'Axios', 'SWR', 'Custom AI Integrations'],
    responsibilities: [
      'Implemented app with AI agents: Cursor, VS Code Copilot, Claude/GPT/Gemini models',
      'Used Figma MCP server to automatically generate UI code with AI agents',
      'Kept business logic (API integration, form validation, etc.) in custom hooks',
      'Extracted CQRS API requests/responses to generate API TypeScript clients'
    ],
    interestingCases: [
      'Automated UI code generation from Figma designs using AI agents',
      'Seamless migration of business logic from Flutter to React custom hooks',
      'Type-safe API client generation from CQRS endpoints'
    ],
    previewImages: ['/nextjs.jpg'],
    allImages: [],
    projectType: ['frontend']
  },
  {
    id: '2',
    slug: 'infinit-leads-management-frontend',
    name: 'Infinit - Leads Management Frontend',
    shortDescription: 'Fullstack React + Vite project for leads management, featuring a custom design system and advanced integrations.',
    fullDescription: 'Developed a fullstack leads management platform from scratch using React and Vite with TypeScript. Built a shared design system library with custom components based on Ant Design and CSS-in-JS. Integrated with REST APIs using OpenAPI-generated clients and React Query, and added VAPI (voice AI agent) support. Implemented business event tracking with Amplitude and contributed to the FastAPI backend (Pydantic models, migrations, endpoints, custom joins).',
    techStack: ['React', 'Vite', 'TypeScript', 'Ant Design', 'CSS-in-JS', 'FastAPI', 'OpenAPI'],
    libraries: ['React Query', 'Amplitude', 'VAPI', 'Pydantic', 'Custom Design System'],
    responsibilities: [
      'Created React + Vite TypeScript project from scratch',
      'Built shared design system library with custom components (AntD + CSS-in-JS)',
      'Integrated with REST API (OpenAPI-generated client + React Query)',
      'Integrated with VAPI (voice AI agent)',
      'Sent business events to Amplitude service',
      'Contributed to FastAPI backend: Pydantic models, migrations, endpoints, custom joins'
    ],
    interestingCases: [
      'Automated OpenAPI client generation and seamless integration with React Query',
      'VAPI integration for showing the power of voice AI agents',
      'Shared design system for consistent UI/UX across multiple projects'
    ],
    previewImages: ['/reactvite.png'],
    allImages: [],
    projectType: ['frontend']
  },
  {
    id: '3',
    slug: 'infinit-nextjs-static-sites-generator',
    name: 'Infinit - Next.JS static sites generator',
    shortDescription: 'AI-powered static site generator using Next.js, dynamic forms, and JSON schema integration.',
    fullDescription: 'Created a proof-of-concept static site generator using Next.js and TypeScript, powered by the bolt.new AI agent. Implemented dynamic forms based on JSON schema with custom field renderers and validation. Developed a script to generate static sites from Next.js templates and JSON configuration files, supporting partially client-rendered content. Styled with Ant Design and contributed to FastAPI backend for dynamic data merging.',
    techStack: ['Next.js', 'TypeScript', 'Ant Design', 'JSON Schema', 'FastAPI', 'bolt.new AI'],
    libraries: ['Ajv', 'Ant Design', 'Custom Form Renderers', 'React Query'],
    responsibilities: [
      'Created PoC with bolt.new AI agent (Next.js + TypeScript)',
      'Implemented dynamic form based on JSON schema with custom field renderers',
      'Validated form data with JSON schema validators',
      'Developed script for Next.js SSG: template + JSON config = static site',
      'Styled with Ant Design components',
      'Contributed to FastAPI backend: merged dynamic data from backend and frontend forms'
    ],
    interestingCases: [
      'Dynamic form rendering and validation from JSON schema',
      'Automated static site generation with partial client rendering',
      'Backend-frontend data merging for dynamic content delivery'
    ],
    previewImages: ['/nextjs.jpg'],
    allImages: [],
    projectType: ['frontend']
  },
  {
    id: '4',
    slug: 'infinit-flutter-app',
    name: 'Infinit - Flutter app',
    shortDescription: 'Mobile app with custom form validation, shared design system, and deep API integrations.',
    fullDescription: 'Developed a robust Flutter mobile application featuring a custom form validation framework and a shared design system for consistent UI/UX. Integrated with CQRS and OpenAPI services using code-generated clients. Contributed to a Nest.JS microservice, integrated SWAN banking-as-a-service, Amplitude analytics, and ory.kratos authentication.',
    techStack: ['Flutter', 'Dart', 'CQRS', 'OpenAPI', 'NestJS', 'SWAN', 'Amplitude', 'ory.kratos'],
    libraries: ['Provider', 'GetIt', 'Dio', 'Custom Form Validation', 'Amplitude SDK'],
    responsibilities: [
      'Created custom form validation framework',
      'Built shared design system for UI/UX consistency',
      'Integrated with CQRS API services',
      'Integrated with OpenAPI services (auto-generated clients)',
      'Contributed to Nest.JS micro-service',
      'Integrated with SWAN banking-as-a-service',
      'Integrated with Amplitude (analytics events)',
      'Integrated with ory.kratos auth service (API and browser flow)',
      'Integrated with '
    ],
    interestingCases: [
      'Custom form validation framework for complex business logic',
      'Seamless integration of multiple external services (SWAN, Amplitude, ory.kratos)',
      'Shared design system for rapid feature development'
    ],
    previewImages: ['/flutter.png'],
    allImages: [],
    projectType: ['mobile']
  },
  {
    id: '5',
    slug: 'infinit-backoffice-react-frontend',
    name: 'Infinit - backoffice react frontend',
    shortDescription: 'Backoffice frontend with dynamic forms, Ant Design UI, and secure API integrations.',
    fullDescription: 'Built a backoffice React frontend featuring dynamic form generation from JSON schema and styled with Ant Design. Integrated with CQRS and OpenAPI services, and implemented authentication via ory.kratos (API and browser flow).',
    techStack: ['React', 'TypeScript', 'Ant Design', 'CQRS', 'OpenAPI', 'ory.kratos'],
    libraries: ['React Query', 'Ant Design', 'Custom Form Generator', 'Axios'],
    responsibilities: [
      'Generated dynamic forms based on JSON schema',
      'Styled UI/UX with Ant Design',
      'Integrated with CQRS API services',
      'Integrated with OpenAPI services',
      'Integrated with ory.kratos auth service (browser flow)'
    ],
    interestingCases: [
      'Dynamic form generation for backoffice workflows',
      'Secure authentication integration with ory.kratos',
      'Unified API integration with CQRS and OpenAPI clients'
    ],
    previewImages: ['/reactvite.png'],
    allImages: [],
    projectType: ['frontend']
  },
  {
    id: '6',
    slug: 'pharmacy-job-offers-web-app',
    name: 'Pharmacy Job Offers Web App',
    shortDescription: 'A web platform for pharmacists to find and manage job offers, built with React and Vite.',
    fullDescription: 'Developed a modern web application enabling pharmacists to browse and apply for various job offers (one-time, side job, part-time, permanent), while allowing pharmacies to add and manage their listings. The platform features a responsive UI, efficient data fetching, and seamless user experience.',
    techStack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'REST API'],
    libraries: ['React Query', 'React Router', 'Axios', 'Tailwind CSS'],
    responsibilities: [
      'Led the frontend development of the project',
      'Communicated with business clients to gather requirements and feedback'
    ],
    interestingCases: [
      'Designed a flexible job offer filtering and search system',
      'Implemented role-based access for pharmacists and pharmacies',
      'Optimized data fetching and caching with React Query'
    ],
    previewImages: ['/reactvite.png'],
    allImages: [],
    projectType: ['frontend']
  },
  {
    id: '7',
    slug: 'pharmacy-job-offers-mobile-app',
    name: 'Pharmacy Job Offers Mobile App',
    shortDescription: 'A Flutter mobile app for pharmacists and pharmacies to manage and track job offers, including QR code scanning.',
    fullDescription: 'Built a cross-platform mobile application with Flutter, allowing pharmacists to find and apply for job offers, and pharmacies to manage listings. The app supports job tracking via QR code scanning for start/end times, and provides a smooth user experience for both roles.',
    techStack: ['Flutter', 'Dart', 'BLoC', 'REST API'],
    libraries: ['Provider', 'BLoC', 'QR Code Scanner', 'Dio'],
    responsibilities: [
      'Led the mobile development of the project',
      'Implemented job offer browsing and management features',
      'Integrated QR code scanning for job time tracking'
    ],
    interestingCases: [
      'QR code-based job time tracking for pharmacists',
    ],
    previewImages: ['/flutter.png'],
    allImages: [],
    projectType: ['mobile']
  },
  {
    id: '8',
    slug: 'foodsi-stop-wasting-food-mobile-app',
    name: 'Foodsi - Stop Wasting Food Mobile App',
    shortDescription: 'A Flutter mobile and web app to help users save food, featuring monorepo management and robust backend migration.',
    fullDescription: 'Led the Flutter team in developing Foodsi, a mobile and web application designed to reduce food waste. Managed a monorepo with Melos, collaborated closely with startup founders, and ensured a smooth, backwards-compatible migration to a new backend API. Utilized Bugfender for advanced bug analysis and migrated the legacy Ruby frontend to Flutter Web.',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Figma', 'Flutter Web', 'Melos', 'JSON:API'],
    libraries: ['BLoC', 'Provider', 'Melos', 'Bugfender'],
    responsibilities: [
      'Leading the Flutter team',
      'Managed monorepo using Melos for mobile and web codebases',
      'Collaborated closely with startup founders to align on product vision',
      'Prepared backwards-compatible switch to new backend API',
      'Analyzed bugs and exceptions using Bugfender',
      'Migrated Ruby on Rails HTML frontend to Flutter Web',
      'Designed and implemented JSON:API type-safe flutter client',
    ],
    interestingCases: [
      'Thanks to the monorepo, we were able to produce 2 apps from a single codebase. Mobile app included customer and partner features. Web app included partner features only (no customer features were included in the compiled app).',
      'Backwards-compatible API migration with rollback capability',
      'Custom bottom sheets transition animation done with Navigator 2.0 API',
      'Big refactoring of the codebase - removed thousands of lines of code',
      'Integrated with PayU payment gateway',
      'Integrated with Google Pay',
      'Fixing issues with Google Maps integration (blinking when popping the map screen)',
      'Partner mobile and web from single codebase - AWD (Adaptive Web Design)',
      'Integration with multiple analytics tools - designed simple tool-agnostic analytics client',
      'Optimizing queries for fetching the offers showing on the map',
    ],
    previewImages: ['/fd-01.jpeg'],
    allImages: [
      '/fd-01.jpeg',
      '/fd-02.jpeg',
      '/fd-03.jpeg',
    ],
    projectType: ['mobile', 'frontend']
  },
  {
    id: '9',
    slug: 'credit-agricole-bank-polska',
    name: 'Credit-Agricole Bank Polska',
    shortDescription: 'Mobile app for Polish bank, atomic design system, and cross-domain data communication.',
    fullDescription: 'Developed key features for Credit-Agricole Bank Polska’s mobile banking app, including regular and savings accounts, debit/credit card management, and a pixel-perfect UI based on a 1:1 Figma-to-code atomic design system. Collaborated with business owners to simplify banking processes and designed a cross-domain (microfrontends in separate Flutter packages) reactive data communication system. Integrated with APIs not originally designed for mobile, adding abstraction layers as needed.',
    techStack: ['Flutter', 'Dart', 'BLoC', 'Melos', 'RxDart'],
    libraries: ['BLoC', 'RxDart', 'Melos', 'Provider'],
    responsibilities: [
      'Implemented regular, savings accounts, and debit/credit card management features',
      'Contributed to atomic design system (1:1 Figma to code)',
      'Implemented pixel-perfect UI',
      'Collaborated with business owners to simplify banking processes',
      'Designed cross-domain (microfrontends) reactive data communication',
      'Integrated with APIs not prepared for mobile (added abstraction layers)'
    ],
    interestingCases: [
      'One of the biggest flutter projects in the world - in peak ~30 Flutter devs',
      'Integration with APIs not designed for mobile apps',
      'Cross-domain communication between microfrontends in Flutter packages',
      'Atomic design system implementation for banking UI'
    ],
    previewImages: ['/cabp-01.webp'],
    allImages: [
      '/cabp-01.webp',
      '/cabp-02.png',
      '/cabp-03.webp',
      '/cabp-04.png',
    ],
    projectType: ['mobile']
  },
  {
    id: '10',
    slug: 'trainn-training-plan-generator',
    name: 'Trainn - Training Plan Generator',
    shortDescription: 'Sports app for generating training plans, featuring chat, video player, and social sharing.',
    fullDescription: 'Enhanced a sports app for generating personalized training plans. Fixed and improved the chat feature and its animations, integrated a video player for workout demonstrations, and implemented functionality to render Flutter widgets as images for social media sharing.',
    techStack: ['Flutter', 'Dart', 'BLoC', 'RxDart', 'Dio'],
    libraries: ['BLoC', 'RxDart', 'Dio', 'Video Player'],
    responsibilities: [
      'Implementing new features, fixing bugs and maintaining the codebase',
      'Fixed chat feature and improved its animations',
      'Integrated video player for workout demonstrations',
      'Implemented rendering of Flutter widgets to images for social sharing'
    ],
    interestingCases: [
      'Rendering Flutter widgets to images for social media',
      'Smooth chat animations and bug fixes',
      'Video player integration in training plans'
    ],
    previewImages: ['/trainn-01.jpeg'],
    allImages: [
      '/trainn-01.jpeg',
      '/trainn-02.jpeg',
      '/trainn-03.jpeg',
      '/trainn-04.jpeg',
    ],
    projectType: ['mobile']
  },
  {
    id: '11',
    slug: 'fintech-connector',
    name: 'Fintech Connector',
    shortDescription: 'Solo-developed fintech app with real-time chat, push notifications, and repository-based API integration.',
    fullDescription: 'Developed a fintech connector app as a solo developer, implementing real-time chat with an existing API and Firebase, integrating push notifications via FCM, and building a repository layer for robust API communication.',
    techStack: ['Flutter', 'Dart', 'BLoC', 'RxDart', 'Cloud Messaging'],
    libraries: ['BLoC', 'RxDart', 'Firebase Cloud Messaging', 'Provider'],
    responsibilities: [
      'Solo developer for the entire app',
      'Implemented real-time chat with existing API and Firebase',
      'Integrated push notifications via FCM',
      'Built repository layer for API integration'
    ],
    interestingCases: [
      'Real-time chat with hybrid API and Firebase',
      'Push notification integration with FCM',
      'Repository pattern for scalable API communication'
    ],
    previewImages: ['/fc-01.webp'],
    allImages: [
      '/fc-01.webp',
      '/fc-03.webp',
      '/fc-02.webp',
    ],
    projectType: ['mobile']
  },
  {
    id: '12',
    slug: 'kardiolog',
    name: 'Kardiolog',
    shortDescription: 'Offline-first health app with charts, Google Fit integration, and local storage.',
    fullDescription: 'Developed Kardiolog, an offline-first health app as a solo developer. Integrated fl_charts for data visualization, used Sembast for local storage, and connected to Google Fit via native event and method channels.',
    techStack: ['Flutter', 'Dart', 'BLoC', 'RxDart', 'Sembast', 'fl_charts'],
    libraries: ['BLoC', 'RxDart', 'Sembast', 'fl_charts'],
    responsibilities: [
      'Solo developer for the entire app',
      'Implemented offline-first architecture with Sembast',
      'Integrated fl_charts for health data visualization',
      'Integrated with Google Fit via native event and method channels'
    ],
    interestingCases: [
      'Offline-first data storage with Sembast',
      'Native integration with Google Fit',
      'Advanced health data visualization with fl_charts'
    ],
    previewImages: ['/flutter.png'],
    allImages: [],
    projectType: ['mobile']
  },
];