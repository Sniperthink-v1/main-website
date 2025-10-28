# Sniperthink Unified Website

This is a unified Next.js application combining three products into a single deployable website:

- **Main Website**: Available at `/` (root)
- **6 Layers Intelligence System**: Available at `/6LayersLP`
- **AI Agents**: Available at `/aiagents`

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install
```

### Development

```bash
# Run development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the main website.

- Navigate to [http://localhost:3000/6LayersLP](http://localhost:3000/6LayersLP) for the Intelligence Growth Engine
- Navigate to [http://localhost:3000/aiagents](http://localhost:3000/aiagents) for AI Chat + Voice Agents

### Build

```bash
# Create production build
pnpm build
# or
npm run build
```

### Production

```bash
# Start production server
pnpm start
# or
npm start
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and deploy

The project includes a `vercel.json` configuration for proper routing.

## Project Structure

```
├── app/
│   ├── (main)/          # Main website at root path
│   ├── 6LayersLP/       # Intelligence Growth Engine at /6LayersLP
│   ├── aiagents/        # AI Agents at /aiagents
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── public/              # Static assets (images, fonts, etc.)
├── components/          # Shared components (if any)
├── lib/                 # Utility functions
├── hooks/               # React hooks
├── types/               # TypeScript types
└── data/                # Static data files
```

## Navigation

The "Start Scaling" buttons in the products section of the main website automatically navigate to:
- `/6LayersLP` for Intelligence Growth Engine
- `/aiagents` for AI Chat + Voice Agents

## Technologies

- **Framework**: Next.js 15+
- **UI**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: Radix UI
- **Package Manager**: pnpm

## Notes

- All three apps have been merged into a single Next.js application
- Each app maintains its own layout and styles
- Public assets from all three apps have been consolidated
- The project uses Next.js App Router with route groups
