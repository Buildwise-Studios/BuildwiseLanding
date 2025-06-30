# Buildwise MVP Development Studio

## Overview

Buildwise is a modern frontend-only React application for an MVP development consulting agency. The application is a static marketing website that showcases the company's services, approach, and team. The architecture emphasizes modern web development practices with TypeScript, component-based design, and responsive UI using Vite for fast development.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Development Server**: Custom Vite integration for hot module replacement
- **Session Management**: PostgreSQL session store (connect-pg-simple)

### Database Architecture
- **Primary Database**: PostgreSQL (configured via Neon serverless)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Modular schema definition in shared directory
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Marketing Pages**: Hero, Services, Projects, Team, FAQ sections
- **UI Components**: Complete shadcn/ui component library
- **Interactive Elements**: Chat widget, contact forms, testimonials
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Services
- **API Routes**: RESTful endpoints for health checks and contact forms
- **Static Serving**: Integrated Vite development server
- **Error Handling**: Centralized error middleware
- **Logging**: Request/response logging with performance metrics

### Shared Resources
- **Database Schema**: User management schema with Zod validation
- **Type Definitions**: Shared TypeScript interfaces
- **Utilities**: Common utility functions and constants

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express.js handles requests with middleware pipeline
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: JSON responses with proper error handling
5. **State Management**: Client-side caching and synchronization via Query Client

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **@radix-ui/***: Headless UI component primitives
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles server code with external packages
3. **Database Migration**: Drizzle Kit pushes schema changes
4. **Asset Optimization**: Automatic code splitting and optimization

### Production Configuration
- **Server**: Node.js production server serving static files and API
- **Database**: PostgreSQL with connection pooling
- **Environment**: Environment variables for database URLs and configuration
- **Monitoring**: Request logging and error tracking

### Development Workflow
- **Hot Reload**: Vite HMR for instant frontend updates
- **Type Safety**: Full TypeScript coverage across stack
- **Code Organization**: Monorepo structure with shared types
- **Database Development**: Local development with migration support

## Changelog

Changelog:
- June 30, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.