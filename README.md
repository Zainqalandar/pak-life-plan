# Pak Life Plan

A modern Next.js website concept for State Life Insurance Corporation of Pakistan. The site presents the Golden Endowment plan, supporting insurance-plan pages, company information, contact enquiries, and a recruitment experience.

## Highlights

- Responsive marketing homepage for the Golden Endowment plan
- Detailed plan pages with benefits, features, policy conditions, add-ons, FAQs, and investment information
- Additional plan routes for Platinum Plus, Jeevan Sathi, and Child Education & Marriage
- Contact form with client-side validation and a `/api/contact` validation endpoint
- Recruitment landing page, illustrative job listings, job-detail pages, and CV upload validation
- SEO metadata, JSON-LD organization data, sitemap, and robots configuration
- Accessible UI components with responsive layouts and motion effects

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- React Hook Form with Zod validation
- Lucide React icons

## Getting started

### Prerequisites

- Node.js 20 or later recommended
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Environment variables

The site URL is used when generating metadata, sitemap, and robots configuration. Create a `.env.local` file for a deployed environment:

```env
NEXT_PUBLIC_SITE_URL=https://example.com
```

If it is not provided, the application defaults to `http://localhost:3000`.

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage and Golden Endowment overview |
| `/plans/golden-endowment` | Golden Endowment plan details |
| `/plans/platinum-plus` | Platinum Plus plan page |
| `/plans/jeevan-sathi` | Jeevan Sathi plan page |
| `/plans/child-education-marriage` | Child Education & Marriage plan page |
| `/about` | About State Life |
| `/contact` | Contact information and enquiry form |
| `/recruitment` | Careers and illustrative vacancies |
| `/recruitment/[id]` | Individual recruitment listing |
| `/sitemap.xml` | Generated sitemap |
| `/robots.txt` | Generated crawler rules |

## Project structure

```text
app/                 Next.js routes, layouts, API, sitemap, and robots
components/          Reusable UI, layout, homepage, plan, and recruitment components
lib/                 Site content, plan data, validation, SEO, and utility functions
public/images/       Marketing imagery
```

## Content and publishing notes

- Official contact phone, email, and office address are currently placeholders in `lib/site.ts`.
- Recruitment listings in `lib/recruitment.ts` are illustrative examples and should be replaced with approved vacancies before launch.
- The contact API currently validates and acknowledges submissions; it does not persist or forward enquiries.
- The recruitment application form currently validates the form and CV locally. A backend integration is required before applications can be submitted or stored.

## Useful commands

```bash
npm run dev       # Start the local development server
npm run build     # Create a production build
npm start         # Serve the production build
npm run lint      # Run ESLint
```
