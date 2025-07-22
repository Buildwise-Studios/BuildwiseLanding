# Buildwise - MVP Development Studio

## Project Overview
Buildwise is a modern MVP development studio website built with React, TypeScript, and Vite. The application serves as a marketing and business showcase for an AI-powered development agency specializing in rapid MVP creation. It features a clean, modern design with comprehensive UI components, real-time chat functionality, and integration with external services for lead generation and communication.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: React hooks and context for local state management

### Component Structure
- **Design System**: Comprehensive UI component library based on shadcn/ui
- **Page Components**: Modular page components (Home, AI Product Manager, Terms, Privacy)
- **Section Components**: Reusable sections (Hero, Services, Projects, Team, etc.)
- **Interactive Elements**: Real-time chat widget, forms, and navigation

## Key Components

### Pages and Routing
- **Home Page**: Main landing page with multiple sections showcasing services
- **AI Product Manager**: Interactive chat interface for project scoping
- **Legal Pages**: Terms of Service and Privacy Policy pages
- **404 Handling**: Catch-all routing with fallback to home page

### Real-time Features
- **Chat System**: Supabase-powered real-time chat with broadcast channels
- **Live Communication**: WebSocket-based messaging for instant interaction
- **User Sessions**: Email-based chat sessions with persistent history
- **AI Assistant**: Personalized AI agent named "Mei-Ling" with profile picture
- **Welcome Messages**: Automated personalized greeting explaining PRD process
- **Typing Indicators**: Visual feedback during AI response processing

### UI/UX Components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components using Radix UI primitives
- **Animations**: Smooth transitions and hover effects
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback system for actions

## Data Flow

### Client-Side State Management
1. **Local State**: useState and useReducer for component-level state
2. **Global State**: React Context for shared application state
3. **URL State**: Wouter router for navigation state management
4. **Form State**: React Hook Form for complex form interactions

### External Service Integration
1. **Supabase**: Real-time chat and potential future database operations
2. **Calendly**: External booking system integration
3. **Social Media**: Links to LinkedIn, Facebook, and Instagram
4. **Email Services**: Contact forms and lead generation

### Asset Management
- **Static Assets**: Images stored in attached_assets directory
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, TypeScript
- **Build Tools**: Vite, TypeScript, PostCSS
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Components**: Radix UI primitives, Lucide React icons
- **Forms**: React Hook Form, Hookform resolvers
- **Real-time**: Supabase client with SSR support
- **Utilities**: date-fns, framer-motion for animations

### Development Tools
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implied by project structure)
- **Development Server**: Custom Vite dev server with Replit integration
- **Hot Reload**: Vite HMR with error overlay for development

## Deployment Strategy

### Build Process
- **Production Build**: Vite builds optimized static assets to `dist/` directory
- **Asset Optimization**: Automatic code splitting and tree shaking
- **Environment Handling**: Support for development and production environments

### Hosting Configuration
- **Vercel**: Configured with SPA routing rewrites in `vercel.json`
- **Replit**: Development environment with custom server configuration
- **Static Hosting**: Can be deployed to any static hosting service

### Development Workflow
- **Local Development**: Custom dev server on port 5000 with host binding
- **Environment Variables**: Support for Replit and standard environment variables
- **Asset Serving**: Vite handles static asset serving with path resolution

### Performance Considerations
- **Code Splitting**: Automatic route-based and component-based splitting
- **Lazy Loading**: Dynamic imports for non-critical components
- **Asset Optimization**: Vite handles image and asset optimization
- **Bundle Analysis**: Built-in Vite bundle analysis capabilities

The application is designed as a single-page application (SPA) with client-side routing, optimized for fast loading and smooth user experience. The architecture supports easy scaling and addition of new features, particularly around the AI product management and real-time communication aspects.