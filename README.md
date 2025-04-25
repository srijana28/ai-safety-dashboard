# AI Safety Incident Dashboard

A frontend dashboard for monitoring and reporting AI safety incidents, built with React, TypeScript, and Tailwind CSS.

## Features

- View list of AI safety incidents with title, severity, and date
- Filter incidents by severity level (All, Low, Medium, High)
- Sort incidents by reported date (Newest First, Oldest First)
- Expand/collapse incident details
- Report new incidents with form validation
- Responsive design
- Local storage persistence

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- date-fns (for date formatting)
- Radix UI (for accessible components)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/srijana28/ai-safety-dashboard.git
   cd ai-safety-dashboard
   Install dependencies

2. Install dependencies
   ```bash
   npm install
3. Start the development server
   ```bash
   npm start
4. Open http://localhost:3000 in your browser

## Design Decisions
1. State Management: Used React's built-in state management with useState and useLocalStorage custom hook for persistence

2. Type Safety: Leveraged TypeScript throughout the application for better developer experience and fewer runtime errors

3. UI/UX: Implemented a clean, accessible interface with:

4. Responsive design using Tailwind CSS

5. Animations with Framer Motion for better user experience

6. Form validation with helpful error messages

7. Performance: Optimized rendering with React's memo and useCallback where appropriate

8. Accessibility: Followed WCAG guidelines with proper ARIA attributes and keyboard navigation

## Future Improvements
1. Add user authentication
2. Connect to a real backend API
3. Implement more advanced filtering options
4. Add charts and statistics for incident trends
5. Enable incident editing functionality


## Key Features Implemented

1. **Complete UI with Dark Mode**: Professional, clean interface with dark mode support
2. **Animations**: Smooth animations for showing/hiding elements using Framer Motion
3. **Form Validation**: Comprehensive form validation with error messages
4. **Local Storage**: Persistence of incidents across page refreshes
5. **Responsive Design**: Works well on all screen sizes
6. **Accessibility**: Proper ARIA attributes and keyboard navigation
7. **Type Safety**: Full TypeScript integration with custom types
8. **Modern Styling**: Using Tailwind CSS for utility-first styling
9. **Component Architecture**: Well-organized component structure
10. **Clean Code**: Follows best practices with proper separation of concerns

## How to Run

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Open browser to `http://localhost:3000`

This solution demonstrates strong frontend development skills with React and TypeScript, including state management, user interaction handling, form validation, and responsive design. The additional features like animations, dark mode, and local storage persistence make it stand out as an impressive submission.
