import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'e-commerce-dashboard',
    name: 'E-Commerce Dashboard',
    shortDescription: 'Modern React dashboard for e-commerce management with real-time analytics',
    fullDescription: 'A comprehensive e-commerce dashboard built with React and TypeScript, featuring real-time analytics, inventory management, order tracking, and customer insights. The application includes interactive charts, data visualization, and a responsive design optimized for both desktop and mobile devices.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    libraries: ['React Query', 'React Hook Form', 'Framer Motion', 'Lucide React'],
    responsibilities: [
      'Designed and implemented the complete UI/UX architecture',
      'Developed real-time dashboard components with interactive charts',
      'Integrated REST APIs for data fetching and state management',
      'Implemented responsive design patterns for mobile compatibility',
      'Created reusable component library following design system principles'
    ],
    interestingCases: [
      'Implemented real-time data updates using WebSocket connections',
      'Optimized performance with React.memo and useMemo for large datasets',
      'Created custom hooks for complex state management across components',
      'Developed advanced filtering and search functionality with debouncing'
    ],
    previewImages: [
      '/projects/dashboard/preview-1.jpg',
      '/projects/dashboard/preview-2.jpg',
      '/projects/dashboard/preview-3.jpg'
    ],
    allImages: [
      '/projects/dashboard/preview-1.jpg',
      '/projects/dashboard/preview-2.jpg',
      '/projects/dashboard/preview-3.jpg',
      '/projects/dashboard/detail-1.jpg',
      '/projects/dashboard/detail-2.jpg'
    ],
    featured: true,
    completionDate: '2024-01',
    projectType: 'frontend'
  },
  {
    id: '2',
    slug: 'mobile-fitness-app',
    name: 'Mobile Fitness Tracker',
    shortDescription: 'React Native fitness tracking app with workout plans and progress analytics',
    fullDescription: 'A comprehensive fitness tracking mobile application built with React Native, featuring personalized workout plans, progress tracking, nutrition logging, and social features. The app includes offline capabilities, push notifications, and integration with health APIs.',
    techStack: ['React Native', 'TypeScript', 'Expo', 'SQLite'],
    libraries: ['React Navigation', 'Async Storage', 'React Native Reanimated', 'Expo Notifications'],
    responsibilities: [
      'Led mobile application development from concept to deployment',
      'Implemented complex animations and gesture handling',
      'Developed offline-first architecture with local data persistence',
      'Integrated device sensors for activity tracking',
      'Designed and implemented push notification system'
    ],
    interestingCases: [
      'Built custom exercise animation system using React Native Reanimated',
      'Implemented background location tracking with battery optimization',
      'Created offline synchronization mechanism for workout data',
      'Developed custom chart components for progress visualization'
    ],
    previewImages: [
      '/projects/fitness/preview-1.jpg',
      '/projects/fitness/preview-2.jpg',
      '/projects/fitness/preview-3.jpg'
    ],
    allImages: [
      '/projects/fitness/preview-1.jpg',
      '/projects/fitness/preview-2.jpg',
      '/projects/fitness/preview-3.jpg',
      '/projects/fitness/detail-1.jpg',
      '/projects/fitness/detail-2.jpg',
      '/projects/fitness/detail-3.jpg'
    ],
    featured: true,
    completionDate: '2023-11',
    projectType: 'mobile'
  },
  {
    id: '3',
    slug: 'task-management-platform',
    name: 'Task Management Platform',
    shortDescription: 'Collaborative task management platform with team features and integrations',
    fullDescription: 'A full-featured task management platform designed for teams, offering project organization, task assignments, deadline tracking, and team collaboration tools. Built with modern web technologies and featuring real-time updates, file attachments, and third-party integrations.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    libraries: ['React Query', 'Socket.io', 'React DnD', 'Date-fns'],
    responsibilities: [
      'Architected full-stack application with React frontend and Node.js backend',
      'Implemented real-time collaboration features using WebSockets',
      'Designed and optimized PostgreSQL database schema',
      'Built drag-and-drop task management interface',
      'Integrated third-party APIs for calendar and notification services'
    ],
    interestingCases: [
      'Implemented real-time collaborative editing with conflict resolution',
      'Built custom drag-and-drop system with smooth animations',
      'Created advanced permission system with role-based access control',
      'Optimized database queries for large datasets with complex relationships'
    ],
    previewImages: [
      '/projects/taskman/preview-1.jpg',
      '/projects/taskman/preview-2.jpg',
      '/projects/taskman/preview-3.jpg'
    ],
    allImages: [
      '/projects/taskman/preview-1.jpg',
      '/projects/taskman/preview-2.jpg',
      '/projects/taskman/preview-3.jpg',
      '/projects/taskman/detail-1.jpg',
      '/projects/taskman/detail-2.jpg'
    ],
    featured: false,
    completionDate: '2023-08',
    projectType: 'fullstack'
  }
];