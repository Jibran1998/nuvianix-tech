# 🌐 Nuvianix Tech 

A sleek, fully dark-themed corporate website showcasing Nuvianix's brand, services, culture, and work, using modern web design techniques and smooth animations.

## 🧠 Project Overview

Nuvianix is a technology company committed to driving digital success through innovative cloud solutions and cutting-edge software development. This repository contains the codebase for the Nuvianix corporate website, built with modern web technologies and following best practices for performance, accessibility, and user experience.

## ⚙️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js (App Router), TailwindCSS |
| Animations | Framer Motion, GSAP |
| Hosting | Vercel (preferred), or Netlify |
| SEO & Analytics | Next SEO, Google Analytics |
| Forms | Formspree / Resend for emails |
| Images | Next/Image |

## 🎨 Design Principles

- **Dark Mode Only**: All pages strictly follow dark UI themes.
- **Minimalist Design**: Clean UI, subtle animations.
- **Responsive**: Works on all screen sizes.
- **Accessible**: Uses semantic HTML and good color contrast.
- **Interactive**: Smooth scroll & hover animations.

## 🔖 Pages Overview

### 1. Home
- Hero section with animated headline and background.
- Short intro with CTA (e.g., "Let's Build Something Great").
- Services preview.
- Featured projects.
- Testimonials carousel.
- Footer with social/contact links.

### 2. About Us
- Company intro (with motion scroll effects).
- Timeline/History (animated).
- Team profiles (hover animations).
- Mission & Values.

### 3. Services
- Cloud Solutions
- DevOps Engineering
- Web Development
- App Development
- SQA & Test Automation

### 4. Portfolio / Case Studies
- Cloud-Native Fintech SaaS
- E-commerce Web Experience
- Healthcare Mobile App
- And more...

### 5. Careers
- Job listings with filtering.
- Each job expands into a detailed description.
- Application form.

### 6. Contact
- Simple contact form (name, email, message).
- Animated map or visual.
- Direct contact info.

## 📁 Folder Structure (Next.js App Router)

```
/app
  └─ layout.tsx
  └─ page.tsx (Home)
  └─ about/
  └─ services/
  └─ portfolio/
  └─ careers/
  └─ contact/
  
/components
  └─ Header.tsx
  └─ Footer.tsx
  └─ Hero.tsx
  └─ ServiceCard.tsx
  └─ TestimonialSlider.tsx
  └─ ContactForm.tsx

/styles
  └─ globals.css
  └─ tailwind.config.ts

/lib
  └─ utils.ts (for animation helpers etc.)

/public
  └─ images/
```

## 🧰 Tools & Technologies

### Programming Languages
- JavaScript, TypeScript, Python, Go, Dart, YAML, Bash

### DevOps & Cloud Stack
- AWS, Azure, GCP, Docker, Kubernetes, Helm, Terraform, Pulumi
- CI/CD: GitHub Actions, Jenkins, GitLab CI
- Monitoring: Prometheus, Grafana, Datadog
- GitOps: ArgoCD, Flux

### Development Stack
- Frontend: React, Next.js, TailwindCSS
- Backend: Node.js, Express, Go
- Mobile: Flutter, React Native
- CMS: Headless CMS (Sanity, Contentlayer)

### QA & Testing
- Selenium, Cypress, Playwright, JMeter, Postman

## 🎬 Animation Guidelines

- **Page Load**: Fade in + scale animation.
- **Scroll-based effects**: Fade-in or slide-in using Framer Motion.
- **Hover Interactions**: Lift cards or animate icons.
- **Text Animations**: Use staggered entrance on key messages.
- **Smooth Page Transitions**: Optional using Framer Motion's `AnimatePresence`.

## 🚀 Our Approach

1. **Discover:** Understand your business, audience, and goals.
2. **Design:** Architect elegant, scalable, and user-friendly systems.
3. **Develop:** Build robust applications with agility and precision.
4. **Deliver:** Ship and scale with confidence, backed by automation and testing.

## 🔒 Non-Functional Requirements

- **Performance Score**: Aim for 90+ on Lighthouse.
- **SEO Optimized**: Meta tags, structured data.
- **Analytics**: Google Analytics / Vercel Analytics.
- **Form Protection**: reCAPTCHA or honeypot for spam.

## 📦 MVP Features (Phase 1)

- Static site (Next.js SSG/ISR).
- Home, About, Services, Contact.
- Animations.
- Responsive design.
- Fully dark-themed components.

## 🧪 Stretch Features (Phase 2)

- Blog (MDX).
- CMS Integration (e.g., Sanity or Contentlayer).
- Dynamic job listings.
- Case Study modal pages.

## 🌎 Global Reach

We proudly serve clients across:
- 🇺🇸 United States
- 🇪🇺 Europe
- 🇸🇬 Singapore
- 🇦🇺 Australia
- 🌍 More coming soon...

## 🤝 Partners & Alliances

We work with leading platforms and cloud providers to maximize performance and reliability:
- AWS Partner Network (APN)
- GitHub & GitLab Solutions
- Google Cloud Startups
- Vercel & Netlify
- Stripe & Firebase

## 📍 Contact Us

### Address (Dummy):
Nuvianix HQ  
Floor 2, Innovation Hub  
Tech Valley, NY, USA

### Email:
[hello@nuvianix.com](mailto:hello@nuvianix.com)

### Socials:
- LinkedIn: [linkedin.com/company/nuvianix](#)
- GitHub: [github.com/nuvianix](#)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Jibran1998/nuvianix-tech.git
   cd nuvianix-tech
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Development

### Build
```bash
npm run build
# or
yarn build
```

### Lint
```bash
npm run lint
# or
yarn lint
```

## 📄 License

This project is proprietary and confidential.
