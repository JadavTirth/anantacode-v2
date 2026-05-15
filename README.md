<p align="center">
  <img src="public/logo.png" alt="AnantaCode Logo" height="80" />
</p>

<h1 align="center">AnantaCode — Premium Dev Agency Website</h1>

<p align="center">
  <strong>Engineering Modern Digital Experiences for Startups & Businesses</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.38-0055FF?logo=framer&logoColor=white" />
</p>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Live Features](#-live-features)
- [Tech Stack](#-tech-stack)
- [All Packages & Dependencies](#-all-packages--dependencies)
- [Project Structure](#-project-structure)
- [Component Breakdown](#-component-breakdown)
- [Design System](#-design-system)
- [APIs & Integrations](#-apis--integrations)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🚀 About the Project

**AnantaCode v2** is a premium, high-performance SaaS agency landing page built with React 19, Vite 8, and a modern animation stack (GSAP + Framer Motion). The website showcases AnantaCode's services — web development, cloud & DevOps, cybersecurity, UI/UX design, API development, and mobile applications — with a dark futuristic theme, red gradient accents, glassmorphism cards, and rich micro-animations throughout.

### Key Highlights

- ⚡ **Blazing Fast** — Vite 8 build pipeline with optimized React 19
- 🎨 **Premium Design** — Dark hero, red brand gradients, glassmorphism, animated canvas mesh
- 🎬 **Rich Animations** — GSAP ScrollTrigger text shuffles, Framer Motion reveal animations, typewriter effects, floating particles, animated counters
- 📱 **Fully Responsive** — Mobile-first with swipe carousels, fluid `clamp()` typography, and adaptive layouts
- 📬 **Working Forms** — Contact, popup, and newsletter forms powered by Web3Forms API
- 🔍 **SEO Optimized** — Meta tags, semantic HTML, proper heading hierarchy

---

## ✨ Live Features

| Feature | Description |
|---|---|
| **Animated Canvas Mesh** | Dot-network background animation on the hero section using HTML5 Canvas |
| **Typewriter Effect** | Rotating text ("Web Applications", "Mobile Apps", "Cloud Solutions"...) with typing/deleting animation |
| **GSAP Shuffle Text** | Character-by-character shuffle animation on the brand name in the navbar |
| **GSAP TextType** | Multi-string typewriter component for CTA banner with cursor blink via GSAP |
| **Scroll Progress Bar** | Gradient progress indicator fixed at the top of the viewport |
| **Floating Tech Pills** | Animated tech labels floating across the hero section |
| **Glare Hover Cards** | CSS glare-sweep effect on service cards on mouse hover |
| **Animated Counters** | Numbers that count up when scrolled into view (Stats + Why Choose Us sections) |
| **Popup Contact Form** | Full-screen modal with split-panel design, auto-triggers after 3s |
| **Marquee Tech Strip** | Infinite-scrolling technology logo marquee with hover color transitions |
| **Mobile Swipe Carousel** | Snap-scroll carousel for "Why Choose Us" cards on mobile |
| **Wave Section Divider** | SVG wave divider between sections with configurable colors |
| **Footer Watermark** | Giant translucent "AnantaCode" branding stamp in the footer |
| **Newsletter Signup** | Working email subscription form in the footer |

---

## 🛠 Tech Stack

| Category | Technology | Version |
|---|---|---|
| **UI Library** | React | `^19.2.6` |
| **Build Tool** | Vite | `^8.0.12` |
| **Styling** | Tailwind CSS | `^3.4.19` |
| **Animation (Advanced)** | GSAP (GreenSock) | `^3.15.0` |
| **Animation (Layout)** | Framer Motion | `^12.38.0` |
| **GSAP React Bindings** | @gsap/react | `^2.1.2` |
| **Icons** | Lucide React | `^1.14.0` |
| **Animated Numbers** | react-countup | `^6.5.3` |
| **PostCSS** | PostCSS | `^8.5.14` |
| **CSS Autoprefixer** | Autoprefixer | `^10.5.0` |
| **Linting** | ESLint | `^10.3.0` |
| **Language** | JavaScript (ES Modules) | — |
| **Fonts** | Space Grotesk + Inter | Google Fonts |
| **Forms API** | Web3Forms | REST API |

---

## 📦 All Packages & Dependencies

### Production Dependencies (`dependencies`)

| Package | Version | Purpose |
|---|---|---|
| `react` | `^19.2.6` | Core UI library for building component-based interfaces |
| `react-dom` | `^19.2.6` | React DOM renderer for web applications |
| `framer-motion` | `^12.38.0` | Declarative animations — scroll-triggered reveals, page transitions, AnimatePresence exit animations, spring physics |
| `gsap` | `^3.15.0` | Professional animation engine — ScrollTrigger-based text shuffles, SplitText character animations, timeline sequences, nav expand/collapse |
| `@gsap/react` | `^2.1.2` | Official GSAP React integration hooks (`useGSAP`) for lifecycle-safe animations |
| `lucide-react` | `^1.14.0` | Lightweight SVG icon library — provides all icons (Mail, Phone, Code, Rocket, Shield, etc.) used across the site |
| `react-countup` | `^6.5.3` | Animated number counting component (available for stats, though custom counters are also used) |

### Development Dependencies (`devDependencies`)

| Package | Version | Purpose |
|---|---|---|
| `vite` | `^8.0.12` | Next-gen frontend build tool — instant HMR, optimized production bundles, ES module serving |
| `@vitejs/plugin-react` | `^6.0.1` | Vite plugin for React — enables Fast Refresh (HMR), JSX transform, and React-specific optimizations |
| `tailwindcss` | `^3.4.19` | Utility-first CSS framework — used for layout, spacing, responsive design, and component styling throughout all sections |
| `postcss` | `^8.5.14` | CSS transformation pipeline — processes Tailwind directives (`@tailwind`, `@apply`, `@layer`) |
| `autoprefixer` | `^10.5.0` | PostCSS plugin that adds vendor prefixes (`-webkit-`, `-moz-`) for cross-browser compatibility |
| `eslint` | `^10.3.0` | JavaScript/JSX linter for code quality and consistency |
| `@eslint/js` | `^10.0.1` | ESLint's official JavaScript configuration presets |
| `eslint-plugin-react-hooks` | `^7.1.1` | Enforces React Hooks rules (dependency arrays, hook ordering) |
| `eslint-plugin-react-refresh` | `^0.5.2` | Validates components for React Fast Refresh compatibility during development |
| `globals` | `^17.6.0` | Provides global variable definitions for ESLint (browser, node, etc.) |
| `@types/react` | `^19.2.14` | TypeScript type definitions for React (used by IDE for IntelliSense/autocomplete) |
| `@types/react-dom` | `^19.2.3` | TypeScript type definitions for ReactDOM (IDE support) |

### External Resources (CDN / API)

| Resource | Usage |
|---|---|
| **Google Fonts** — `Space Grotesk` | Heading font (weights: 400–800) |
| **Google Fonts** — `Inter` | Body text font (weights: 400–600) |
| **Web3Forms API** | Form submission endpoint (`https://api.web3forms.com/submit`) for contact, popup, and newsletter forms |

---

## 📁 Project Structure

```
anantacode-v2/
├── public/
│   ├── favicon.svg              # SVG favicon
│   ├── icon.png                 # PNG favicon (browser tab)
│   ├── icons.svg                # SVG icon sprite
│   └── logo.png                 # AnantaCode brand logo
│
├── src/
│   ├── assets/
│   │   ├── hero.png             # Hero section image asset
│   │   ├── react.svg            # React logo SVG
│   │   └── vite.svg             # Vite logo SVG
│   │
│   ├── components/
│   │   ├── CardNav.jsx          # GSAP-powered expandable card navigation
│   │   ├── CardNav.css          # CardNav custom styles & hamburger animation
│   │   ├── ContactSection.jsx   # Contact form + info cards section
│   │   ├── CTABanner.jsx        # Mid-page call-to-action banner with TextType
│   │   ├── Footer.jsx           # Footer with newsletter, links & watermark
│   │   ├── GlareHover.jsx       # Glare hover effect wrapper component
│   │   ├── GlareHover.css       # Glare hover CSS animations
│   │   ├── HeroSection.jsx      # Dark hero with canvas mesh, typewriter, particles
│   │   ├── Icons.jsx            # Centralized SVG icon components (lucide-based)
│   │   ├── Navbar.jsx           # Legacy navbar component
│   │   ├── PopupForm.jsx        # Full-screen popup form modal (Framer Motion)
│   │   ├── ProcessSection.jsx   # 4-step development process with tab switcher
│   │   ├── ProjectsSection.jsx  # Featured projects showcase grid
│   │   ├── ServicesSection.jsx   # 6-service grid with GlareHover cards
│   │   ├── Shuffle.jsx          # GSAP SplitText character shuffle animation
│   │   ├── Shuffle.css          # Shuffle component styles
│   │   ├── StatsSection.jsx     # Tech marquee strip + animated stats grid
│   │   ├── TestimonialsSection.jsx # Client testimonials (featured + secondary)
│   │   ├── TextType.jsx         # GSAP typewriter/typing text component
│   │   ├── TextType.css         # TextType cursor styles
│   │   ├── TrustStrip.jsx       # Client trust logos marquee strip
│   │   ├── WaveDivider.jsx      # SVG wave section divider
│   │   └── WhyChooseUs.jsx      # Metrics cards with animated progress bars
│   │
│   ├── App.jsx                  # Root component — assembles all sections
│   ├── App.css                  # Minimal App-level overrides
│   ├── index.css                # Global styles — Tailwind layers, design tokens, reusable classes
│   └── main.jsx                 # React DOM entry point
│
├── index.html                   # HTML shell with SEO meta tags
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration (React plugin)
├── tailwind.config.js           # Tailwind theme extensions (colors, fonts, animations, shadows)
├── postcss.config.js            # PostCSS config (Tailwind + Autoprefixer)
├── eslint.config.js             # ESLint flat config
└── .gitignore                   # Git ignore rules
```

---

## 🧩 Component Breakdown

### Page Layout (in render order)

```
App.jsx
├── ScrollProgress              # Fixed top gradient scroll indicator
├── PopupForm                   # Auto-triggered modal (after 3s)
├── CardNav                     # Sticky top navigation with GSAP card expand
├── <main>
│   ├── HeroSection             # Full-screen dark hero with canvas mesh
│   ├── StatsSection            # Tech marquee + stats counters
│   ├── ServicesSection         # 6 service cards with glare hover
│   ├── ProcessSection          # 4-step tabbed process viewer
│   ├── ProjectsSection         # Featured projects (alternating layout)
│   ├── CTABanner               # Gradient CTA with TextType animation
│   ├── WhyChooseUs             # Metric cards + mobile carousel
│   ├── TestimonialsSection     # Dark testimonials with featured card
│   ├── WaveDivider             # SVG transition from grey to white
│   └── ContactSection          # Contact form + info sidebar
└── Footer                      # Links, newsletter, watermark
```

### Animation Components

| Component | Engine | Description |
|---|---|---|
| `Shuffle.jsx` | GSAP + SplitText + ScrollTrigger | Splits text into characters, wraps each in overflow-hidden containers, animates them in a "slot machine" shuffle. Supports directions (up/down/left/right), even/odd stagger, hover re-trigger, scramble charset, and color transitions. |
| `TextType.jsx` | GSAP (cursor blink) + React state | Multi-string typewriter with configurable speeds, pause duration, reverse mode, color per string, IntersectionObserver start trigger. |
| `GlareHover.jsx` | Pure CSS | Wraps children in a container that sweeps a translucent glare on hover using CSS custom properties and gradient animations. |

### Form Components

| Component | Fields | API | Behavior |
|---|---|---|---|
| `ContactSection.jsx` | Name, Email, Message | Web3Forms | Inline section form with status feedback (idle → sending → sent → idle) |
| `PopupForm.jsx` | Name, Email, Message | Web3Forms | Split-panel modal — auto-opens after 3s, click-outside to close, success celebration with progress bar |
| `Footer.jsx` (newsletter) | Email | Web3Forms | Footer subscribe form with status states |

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `red-primary` | `#FF3B3B` | Primary brand color, CTAs, active states |
| `red-light` | `#FF6B6B` | Gradient midpoints, hover accents |
| `red-dark` | `#7F1D1D` | Gradient endpoints, deep accents |
| `red-glow` | `rgba(255,59,59,0.25)` | Box shadow glow effects |
| Hero background | `#0A0A0A` → `#110505` → `#0f0a00` | Dark hero gradient |
| Footer background | `#0D0D0D` | Near-black footer |

### Typography

| Role | Font Family | Weights |
|---|---|---|
| Headings | `Space Grotesk` | 400, 500, 600, 700, 800 |
| Body | `Inter` | 400, 500, 600 |

### Reusable CSS Classes (defined in `index.css`)

| Class | Purpose |
|---|---|
| `.btn-primary` | Red gradient button with glow shadow and hover lift |
| `.btn-secondary` | Transparent bordered button with hover fill |
| `.glass-card` | White card with subtle border, shadow, hover lift + red border accent |
| `.section` | Standard section padding (`py-24`) |
| `.container-main` | Centered container with responsive padding (max 1200px) |
| `.section-title` | Large bold centered heading |
| `.text-gradient` | Red gradient text (clip-text) |
| `.eyebrow` | Small uppercase label badge |
| `.nav-link` | Navigation link with hover transition |
| `.footer-link` | Footer link with hover color |
| `.tag-chip` | Small rounded tag/badge |
| `.marquee-fade` | Marquee container with white edge fades |
| `.marquee-fade-dark` | Same for dark backgrounds |
| `.bg-gradient-brand` | Brand gradient background utility |
| `.bg-grid-pattern` | Subtle grid background pattern |
| `.scrollbar-hide` | Hides scrollbar cross-browser |

### Custom Tailwind Animations

| Animation | Keyframes | Duration |
|---|---|---|
| `marquee` | Horizontal scroll left | 30s linear infinite |
| `marquee-reverse` | Horizontal scroll right | 30s linear infinite |
| `fade-up` | Opacity 0 → 1 + translateY 30px → 0 | 0.6s ease-out |
| `float` | translateY 0 → -12px → 0 | 4s ease-in-out infinite |

### Custom Box Shadows

| Token | Value |
|---|---|
| `card` | `0 2px 16px rgba(0,0,0,0.06)` |
| `card-hover` | `0 12px 40px rgba(0,0,0,0.1)` |
| `red-glow` | `0 8px 25px rgba(255,59,59,0.35)` |

---

## 🔌 APIs & Integrations

### Web3Forms

All forms submit to the [Web3Forms](https://web3forms.com/) API:

- **Endpoint**: `https://api.web3forms.com/submit`
- **Method**: `POST` (FormData)
- **Access Key**: Configured in component files
- **Used In**: `ContactSection.jsx`, `PopupForm.jsx`, `Footer.jsx`

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/anantacode-v2.git
cd anantacode-v2

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The dev server will start at `http://localhost:5173` (default Vite port).

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev Server** | `npm run dev` | Starts Vite dev server with Hot Module Replacement |
| **Build** | `npm run build` | Creates optimized production build in `dist/` |
| **Preview** | `npm run preview` | Serves the production build locally for testing |
| **Lint** | `npm run lint` | Runs ESLint on all project files |

---

## 🚢 Deployment

The production build outputs to `dist/`. Deploy to any static hosting:

```bash
npm run build
```

**Recommended Platforms:**
- [Vercel](https://vercel.com) — Zero-config for Vite + React
- [Netlify](https://netlify.com) — Drag & drop or Git integration
- [Cloudflare Pages](https://pages.cloudflare.com) — Edge-deployed

---

## 📄 License

This project is proprietary to **AnantaCode**. All rights reserved.

---

<p align="center">
  Built with ❤️ by <strong>AnantaCode</strong> — <a href="mailto:info@anantacode.in">info@anantacode.in</a>
</p>
