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
    previewImages: ['/placeholder.svg'],
    allImages: ['/placeholder.svg'],
    featured: false,
    completionDate: '2025-02',
    projectType: 'frontend'
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
      'Voice AI agent (VAPI) integration for enhanced user interaction',
      'Shared design system for consistent UI/UX across multiple projects'
    ],
    previewImages: ['confidential'],
    allImages: ['confidential'],
    featured: true,
    completionDate: '2025-05',
    projectType: 'fullstack'
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
    previewImages: ['/placeholder.svg'],
    allImages: ['/placeholder.svg'],
    featured: false,
    completionDate: '2025-03',
    projectType: 'frontend'
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
      'Integrated with ory.kratos auth service (API and browser flow)'
    ],
    interestingCases: [
      'Custom form validation framework for complex business logic',
      'Seamless integration of multiple external services (SWAN, Amplitude, ory.kratos)',
      'Shared design system for rapid feature development'
    ],
    previewImages: ['/placeholder.svg'],
    allImages: ['/placeholder.svg'],
    featured: true,
    completionDate: '2025-07',
    projectType: 'mobile'
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
    previewImages: ['/placeholder.svg'],
    allImages: ['/placeholder.svg'],
    featured: false,
    completionDate: '2025-07',
    projectType: 'frontend'
  }
];