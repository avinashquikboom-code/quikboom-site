# QuikBoom — Cinematic 3D Website Redesign

A futuristic, cinematic 3D digital agency web platform engineered for **QuikBoom Digital Marketing Agency** ([quikboom.in](https://quikboom.in/)).

---

## 🚀 Key Highlights & Architectural Features

1. **Interactive 3D WebGL Hero Canvas**
   - Built with `@react-three/fiber`, `@react-three/drei`, and `three.js`.
   - Features a multi-layered crystalline cyber-icosahedron, dual quantum orbital rings, and an ambient constellation particle field.
   - Smooth pointer parallax with clamped rotation coordinates and physically plausible metallic/dielectric materials.
   - Includes graceful, accessible fallback rendering (`SceneFallback.tsx`) for environments where WebGL is unavailable or power-saving mode is active.

2. **Cinematic Light Mode Design System & Tokens**
   - **Pristine Minimal Canvas**: Crisp pure white `#FFFFFF` background with soft silvery slate surfaces (`#F8FAFC`, `#F1F5F9`).
   - **Deep Midnight Obsidian Typography**: `#0F172A` headlines and `#475569` secondary body copy for high contrast and readability.
   - **Electric Accents**: Vibrant Royal Blue (`#1D4ED8`), Cyan (`#0284C7`), and Emerald/Teal (`#0D9488`).
   - **Refined Glassmorphism**: Soft ambient shadows (`rgba(15, 23, 42, 0.05)`), subtle borders (`rgba(226, 232, 240, 0.9)`), and translucent backdrop blur on navigation.
   - **Typography**: Google Fonts Outfit & Plus Jakarta Sans.

3. **Authentic Business Content & Features Preserved**
   - **8 Core Services**: Web Development, App Development, Digital Marketing, SEO Optimization, Social Media Strategy, Marketplace Management, Branding & Design, and AI & Workflow Automation.
   - **3D Tilt Interactive Service Cards**: Perspective transforms reacting to pointer position with subtle radial cursor glows.
   - **Portfolio & Case Studies**: Categorized work (FinTech Dashboard, NeoBank Mobile App, Fashion E-Commerce, Analytics Platform, HR Management System, Gourmet Experience) + Interactive Campaign Video Reels.
   - **Transparent Pricing Tiering**: Basic (₹6,999/mo), Standard (₹12,999/mo — Most Popular), and Premium (₹25,999/mo) with real-time Annual (20% discount) / Monthly billing toggle.
   - **Verified Testimonials**: Client reviews from TechNova, Elevate Finance, Luxe Retail, BrightPath, FreshMart, and Apex Ventures.
   - **Verified Office Location & Contact**:
     - Office: 7th Floor, Office No. 711, Shivanta Highstreet, Gorwa, Vadodara 391330, Gujarat.
     - Direct WhatsApp link (`+91 91579 59503`).
     - Phone: `+91 (915) 795-9503`.
     - Email: `info@quikboom.in`, `support@quikboom.in`.
   - **Interactive Proposal Form**: Real-time validation, service/plan preselection triggers, and transmission confirmation states.
   - **Legal Overlays**: Complete Privacy Policy, Terms of Service, and Cookie Policy modals.

---

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Icons**: Lucide React + custom inline SVG brand marks
- **Styling**: Vanilla CSS custom design tokens, glassmorphism, responsive grids

---

## 💻 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
Open the generated local URL (e.g. `http://localhost:3001`).

### 5. Type-Check & Lint
```bash
npm run lint
```
