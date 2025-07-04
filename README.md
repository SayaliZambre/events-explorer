# Events Explorer - Next.js Developer Assessment

A modern, responsive event listing application built with Next.js 15, featuring dynamic routing, filtering, dark/light mode toggle, animations, and an integrated chat assistant.

## 🚀 Features

### Core Requirements
- **Event Listing**: Display 8 mock events with title, date, location, and description
- **Filtering**: Client-side filtering by location with search functionality
- **Dynamic Routing**: Individual event detail pages with full information
- **SEO Optimized**: Proper meta tags, semantic HTML, and accessibility features
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Enhanced Features
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Framer Motion animations throughout the app
- **Chat Assistant**: Interactive chat widget for user support
- **Advanced UI**: Modern design with hover effects and micro-interactions

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React

## 📁 Project Structure

\`\`\`
events-explorer-assessment/
├── app/
│   ├── events/
│   │   └── [id]/
│   │       └── page.tsx          # Dynamic event detail pages
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout with theme provider
│   ├── not-found.tsx             # Custom 404 page
│   └── page.tsx                  # Homepage with event listing
├── components/
│   ├── chat-widget.tsx           # Interactive chat assistant
│   ├── event-detail-client.tsx   # Client-side event detail component
│   ├── theme-provider.tsx        # Theme context provider
│   └── theme-toggle.tsx          # Dark/light mode toggle
├── lib/
│   └── mock-data.ts              # Mock event data
├── package.json
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd events-explorer-assessment
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎯 Key Implementation Details

### Static Generation
- Uses \`generateStaticParams\` for pre-generating event detail pages
- Implements proper SEO with dynamic metadata generation
- Optimized for performance with static site generation

### Accessibility Features
- Semantic HTML elements (\`<main>\`, \`<section>\`, \`<article>\`)
- Proper ARIA labels and keyboard navigation
- Screen reader friendly content structure
- Focus management and color contrast compliance

### Performance Optimizations
- Static page generation for all event routes
- Optimized images and lazy loading
- Efficient client-side filtering without API calls
- Minimal JavaScript bundle with code splitting

### User Experience
- Smooth page transitions with Framer Motion
- Responsive design for all screen sizes
- Interactive elements with hover states
- Loading states and error handling

## 🎨 Design Decisions

### Theme System
- Implemented comprehensive dark/light mode support
- System preference detection with manual override
- Consistent color scheme across all components

### Animation Strategy
- Subtle entrance animations for better perceived performance
- Hover effects for interactive elements
- Staggered animations for list items
- Performance-optimized animations with Framer Motion

### Chat Integration
- Context-aware responses based on user queries
- Smooth slide-in animation with backdrop
- Persistent state during session
- Mobile-optimized interface

## 🔧 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with zero configuration

## 🔮 Future Enhancements

If given more time, potential improvements would include:

- **Backend Integration**: Real API with database storage
- **User Authentication**: Login/signup with user profiles
- **Event Management**: CRUD operations for event organizers
- **Payment Integration**: Stripe/PayPal for ticket purchases
- **Real-time Features**: Live chat, event updates, notifications
- **Advanced Filtering**: Date ranges, price filters, categories
- **Social Features**: Event sharing, user reviews, favorites
- **Analytics**: Event tracking, user behavior analysis

## 📄 License

This project is created for assessment purposes.
\`\`\`
#   e v e n t s - e x p l o r e r  
 