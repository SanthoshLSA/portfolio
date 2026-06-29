# Santhosh Ananth - Professional Portfolio

This is a modern, responsive, and visually premium professional portfolio website for **Santhosh Ananth**, built using Next.js 16 (App Router), React 19, Tailwind CSS v4, and shadcn/ui components.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Tailwind transitions and interactive states

## 📁 Folder Structure

```
santhosh-portfolio/
├── public/                  # Static assets (images, pdfs)
│   ├── avatar.png           # Profile Photo
│   ├── resume.pdf           # Downloadable CV
│   └── leetcode.svg         # SVG icon for LeetCode
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Portfolio single page
│   │   └── globals.css      # Custom global CSS with variables
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero / Intro section
│   │   ├── About.tsx        # Bio & personal information
│   │   ├── Skills.tsx       # Technical skills categories
│   │   ├── Projects.tsx     # Academic and personal projects
│   │   ├── Experience.tsx   # Education & Timeline section
│   │   ├── Contact.tsx      # Contact section
│   │   ├── Footer.tsx       # Copyright & quick links
│   │   └── ui/              # shadcn UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       └── card.tsx
│   └── lib/
│       └── utils.ts         # Utility helper for tailwind merge
├── components.json          # shadcn configuration
├── package.json             # NPM dependencies & scripts
└── tsconfig.json            # TypeScript configuration
```

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or later recommended).

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

The project is optimized for deployment on **Vercel**:
1. Push your code to a GitHub repository.
2. Import the repository in Vercel.
3. Vercel will automatically detect Next.js and deploy.
