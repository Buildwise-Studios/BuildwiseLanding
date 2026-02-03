# Buildwise - AI Agent Studio for Professional Services

## Project Overview
Buildwise is an AI Agent Studio website built with React, TypeScript, and Vite. The application serves as a marketing and business showcase for an AI agents platform specializing in professional services automation. It features a clean, modern design with comprehensive UI components, real-time chat functionality, and integration with external services for lead generation and communication. AI agents automate repetitive tasks for executive search, legal, and consulting firms, saving 20+ hours per partner per month.

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
- **AI Assistant**: Personalized AI agent named "Jason" with profile picture
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

## Recent Mobile Layout Optimization (July 23, 2025)

### Comprehensive Mobile Responsiveness Implementation
✓ Applied mobile-first responsive design across all major homepage components
✓ Eliminated horizontal scrolling issues on mobile devices
✓ Implemented proper viewport containment and responsive text sizing

### Component-Specific Improvements:
**Hero Section:**
- Responsive heading sizes (text-3xl sm:text-4xl lg:text-6xl)
- Mobile-optimized button layout with truncate text
- Proper image sizing with max-w-full constraints

**Services Section:**
- Responsive grid layout (1 column mobile, 2 columns desktop)
- Optimized card padding and text sizing
- Mobile-friendly CTA button with full-width on small screens

**Projects Section:**
- Three-tier responsive grid (1/2/3 columns)
- Improved project card content with break-words
- Better mobile spacing and typography

**Team Section:**
- Responsive team member layout with optimized image sizes
- Mobile-friendly text sizing and spacing

**FAQ Section:**
- Mobile-optimized accordion buttons with proper text wrapping
- Responsive padding and typography

**Header Navigation:**
- Improved mobile menu with proper overflow handling
- Responsive logo and navigation elements

**Approach Section:**
- Mobile-first layout with responsive image sizing
- Optimized step-by-step process display

### Technical Implementation:
- Added overflow-x: hidden and proper width constraints globally
- Implemented break-words classes for text overflow prevention
- Applied w-full and max-w-full patterns for viewport containment
- Enhanced CSS base styles for mobile overflow prevention
- Used responsive utility patterns (sm:, md:, lg:) throughout

### Current Status:
All mobile layout improvements have been implemented. The application now provides a smooth mobile experience without horizontal scrolling. **RESOLVED**: Cartographer plugin warnings completely eliminated by disabling the problematic plugin in vite.config.ts (July 23, 2025). Application now starts cleanly in 251ms without any console warnings.

## WhatsApp-Style Chat Interface Implementation (July 23, 2025)

### Real-time Chat UX Enhancement
✓ Successfully implemented WhatsApp-style chat interface with fixed input field at bottom
✓ Proper scrolling behavior - only messages area scrolls, input field remains fixed
✓ Clean message display with typing indicators and smooth animations
✓ Responsive design maintaining functionality across all screen sizes

### Technical Implementation:
- Fixed height messages container with calculated dimensions (calc(100% - 80px))
- Absolute positioned input field at bottom with proper z-indexing
- Overflow-y auto for messages area only, preventing full interface scroll
- Smooth fade-in animations for new messages and typing indicators
- Dynamic send button appearance when user types message

### User Experience Features:
- Real-time message delivery via Supabase WebSocket connection
- N8N webhook integration for AI responses from Jason
- Comprehensive email validation with disposable domain blocking
- Visual feedback for typing states and connection status
- Professional chat header with connection indicators

### Current Status:
**CONFIRMED WORKING**: User testing confirms WhatsApp-style chat interface functions properly with correct scrolling behavior and fixed input positioning. Feature marked as complete and production-ready.

## AI Agent Update - Jason Rebrand (July 23, 2025)

### AI Agent Persona Change
✓ Replaced AI agent persona from Mei-Ling to Jason based on marketing feedback
✓ Updated all references throughout the application (components, hooks, documentation)
✓ Replaced agent profile picture with new Jason image (professional male persona)

### Bot Labeling Implementation
✓ Added Discord-style "BOT" labels next to agent name in all contexts
✓ Created reusable BotBadge component with consistent styling
✓ Applied bot labels in:
  - Chat message headers
  - Typing indicators
  - Main chat interface header
  - AI Product Manager page

### Technical Updates:
- Updated use-realtime-chat hook to send messages as "Jason"
- Modified chat-message and typing-indicator components
- Updated AI Product Manager page with Jason's image and bot badge
- Created BotBadge UI component for consistency
- Updated documentation references from Mei-Ling to Jason