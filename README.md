# Splito Landing Page

A modern, responsive landing page for the Splito expense splitting app, built with Next.js, Three.js, and Framer Motion.

## Features

- 🎨 Beautiful gradient theme matching the app logo (purple/orange)
- 🎭 Three.js 3D animations
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Feature showcase
- 📖 How it works section
- 🔗 Play Store link placeholder (ready for when app is deployed)

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling (via Next.js)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the landing-page directory:
```bash
cd landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
landing-page/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section with 3D animation
│   ├── Features.tsx     # Features showcase
│   ├── HowItWorks.tsx   # How it works section
│   └── Footer.tsx       # Footer with links
├── package.json
├── tsconfig.json
└── next.config.js
```

## Customization

### Adding Play Store Link

When the app is deployed to Play Store, update the button in `components/Footer.tsx`:

```tsx
<a
  href="YOUR_PLAY_STORE_LINK"
  className="w-full px-4 py-3 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-lg text-white font-semibold flex items-center justify-center space-x-2"
>
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="..." />
  </svg>
  <span>Download on Play Store</span>
</a>
```

### Theme Colors

The theme colors match the app logo:
- Primary Purple: `#9333EA`
- Primary Blue: `#2563EB`
- Secondary Orange: `#FFA500`
- Dark Background: `#0F0F1E`
- Dark Surface: `#1A1A2E`

These can be customized in `app/globals.css` and component files.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js app can be deployed on:
- **Vercel** (recommended) - `vercel deploy`
- **Netlify** - Connect your GitHub repo
- **AWS Amplify** - Connect your GitHub repo
- Any platform that supports Next.js

## License

This project is part of the Splito app.

