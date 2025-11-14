# ResQAuto

## Live Demo

(https://resq-auto.onrender.com)

## Project Overview

- ResQAuto is a modern roadside assistance platform that provides immediate help to stranded drivers.
- Our website connects users with certified service providers for emergency vehicle services including towing, jump starts, tire changes, and lockout assistance.
- The platform is designed to reduce vehicle downtime and provide peace of mind to drivers everywhere.

## Brand Identity

### Color System

- Primary: #06B6D4 (Cyan-600) - Represents reliability, technology, and emergency services. Used for primary buttons, key headings, and brand accents to create trust and visibility.

- Secondary: #1E40AF (Blue-800) - Symbolizes professionalism and stability. Used for secondary elements and background gradients to convey security.

- Neutral: #6B7280 (Gray-500) - For body text and secondary information. Ensures readability while maintaining visual hierarchy.
- Background: #111827 (Gray-900) - Dark background for contrast and modern aesthetic, reducing eye strain and highlighting content.

### Typography

- Headings: Inter Bold - Clean, modern, and highly readable. Chosen for its excellent legibility at various sizes and professional appearance that builds trust.

- Body: Inter Regular - Consistent with headings for brand cohesion. Provides optimal readability for longer text content while maintaining a modern feel.

## Design Decisions

### Layout Adherence

- Spacing System: Implemented using Tailwind CSS's 4px base unit system (0.25rem increments) for consistent vertical and horizontal rhythm

- Measurement Tools: Used browser dev tools for pixel-perfect implementation and Chrome Lighthouse for accessibility compliance

- Grid Implementation: CSS Grid and Flexbox for responsive layouts that maintain structure across all viewports

- Breakpoint Consistency: Strict adherence to Tailwind's breakpoints (sm:640px, md:768px, lg:1024px, xl:1280px)

### Creative Departures

- Content Strategy: Focused on emergency-first messaging with clear CTAs. Used benefit-oriented language ("We make roadside problems disappear") rather than feature lists to create emotional connection.

- Brand Positioning: Positioned as a tech-enabled rescue service rather than traditional towing company. Emphasized speed, reliability, and modern solutions through cyber-inspired color scheme and clean interface.

### MD Breakpoint Decisions:

- Implemented horizontal stats division at md:768px for better space utilization

- Revealed supporting paragraph text at md breakpoint to maintain mobile simplicity

- Transitioned from mobile stack to desktop grid layouts for service cards

- Increased button padding and text size progressively across breakpoints for better touch targets and readability

## Component Architecture

- Props-based Customization: Components accept variants (primary/secondary), sizes, and state props

- Compound Components: Related components grouped together (Card + Card.Header + Card.Body)

- Hook Abstraction: Custom hooks for authentication, API calls, and form handling

- Configuration Objects: Service data and styling constants centralized for easy updates

## Performance Optimizations

### Implemented Optimizations:

#### Code Splitting:

- React.lazy() for route-based chunking

#### Image Optimization:

- WebP format with JPEG fallbacks

- Lazy loading with intersection observer

- Responsive images with srcset

#### Bundle Optimization:

- Tree shaking with Vite

- Minimal bundle size through selective imports

#### Rendering Optimizations:

- React.memo() for expensive components

- useCallback for event handlers

- Virtual scrolling for large lists

#### Caching Strategy:

- Service worker for static assets

- API response caching

- Browser localStorage for user preferences

## Image Credits

### Attribution for Images Used:
#### Hero Background:
* Photo by John Matychuk on Unsplash - Urban night road scene

#### Service Icons:
* React Icons - MIT Licensed

#### Vehicle Illustrations:
* Undraw.co - Open source illustrations

#### Provider Photos:
* Pexels - Free stock photos

#### Logo Design:
* Custom created using SVG and CSS gradients

#### All images used comply with licensing requirements and are properly attributed.

## Installation & Setup

#### Prerequisites:
* Node.js 16.0 or higher

* npm package manager

* MongoDB database (local or Atlas)

## Quick Steup
### Clone the repository
git clone https://github.com/your-username/resqauto.git
cd resqauto

### Install dependencies
npm install

### Environment configuration
cp .env.example .env

#### Edit .env with your configurations:
#### MONGODB_URI=your_connection_string
#### JWT_SECRET=your_secret_key
#### CLIENT_URL=http://localhost:5173

## Create production build
npm run build

## Preview production build
npm run preview

## Start production server
npm start

## Start development server
npm run dev

## Technologies Used

* Core Technologies:
React: 18.2.0 - Component-based UI library

* Vite: 4.1.0 - Build tool and development server

* Tailwind CSS: 3.2.0 - Utility-first CSS framework

* Node.js: 16.0+ - JavaScript runtime

* Express.js: 4.18.0 - Web application framework

* MongoDB: 4.13.0 - NoSQL database

## Key Packages:
- axios: 1.3.0 - HTTP client for API calls

- framer-motion: 8.5.0 - Animation library

- react-icons: 4.7.0 - Icon library

- react-router-dom: 6.8.0 - Client-side routing

- react-intersection-observer: 9.4.0 - Scroll animations

## Challenges & Solutions

#### Challenge 1:
* Real-time Service Tracking

#### Problem:
* Implementing live location updates for service providers without excessive API calls

#### Solution:
* Implemented WebSocket connections for real-time updates

* Used React Query for efficient data caching and background sync

* Added throttling to location updates to reduce server load

#### Challenge 2:
* Mobile-First Responsive Design
Problem: Ensuring perfect display across 300+ device sizes while maintaining performance

#### Solution:

* Adopted Tailwind CSS's mobile-first breakpoint system

* Implemented container queries for component-level responsiveness

* Used CSS Grid and Flexbox for intrinsic responsive layouts

* Conducted cross-browser testing on BrowserStack

#### Challenge 3:
* Authentication State Management
Problem: Maintaining consistent auth state across component re-renders and page refreshes

#### Solution:

* Created AuthContext with useReducer for predictable state updates

* Implemented persistent login using httpOnly cookies

* Added automatic token refresh mechanism

* Used React Router protected routes with route guards

## Future Improvements

### Planned Enhancements:
- Progressive Web App (PWA) Implementation

- Offline functionality for service requests

- Push notifications for service updates

- Add to home screen capability

- Background sync for poor connectivity scenarios

### Advanced Service Features

- AI-powered service recommendation engine

- Real-time service provider matching algorithm

- Integrated payment processing with multiple gateways

- Service history analytics and insights

### Enhanced User Experience

- Voice-controlled emergency requests

- Augmented Reality for vehicle issue diagnosis

- Multi-language support for broader accessibility

- Advanced scheduling with predictive wait times

### Platform Expansion

- Mobile applications (iOS & Android)

- API for third-party integrations

- Fleet management dashboard

- Insurance company partnerships
