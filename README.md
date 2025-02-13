# Online hackathon template

A modern template designed for managing hackathon with a mobile-friendly interface & an admin area.

## Showcase

### 1. Homepage

A beautifully crafted homepage showcasing the event details and rules for it.

### 2. Managing submissions

An admin panel to add your hackathon project submissions.

### 3. Performance, accessibility and SEO

Impressive Lighthouse score to ensure great accessibility for people with disabilities, and SEO optimizations to
ensure search engines can scan the website with ease.

## Useful links

- Homepage: [src/app/page.tsx](./src/app/page.tsx)
- FAQs: [/src/components/Faq.tsx](./src/components/Faq.tsx)
- Admin area: [src/app/hacker](./src/app/hacker)
- Site footer: [/src/components/Footer.tsx](./src/components/Footer.tsx)
- OG image (preview thumbnail): [og-image.png](public/images/og-image.png)

## Technologies

We use [Next.js](https://nextjs.org/), [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
codebase.

CSS framework [TailwindCSS](https://tailwindcss.com/) is used for all styling needs.

## Tips and tricks

- Never use images with resolution greater than 1080p
- Before production use, connect to analytics tool such as [Plausible](https://plausible.io/)
  or [Google Analytics](https://marketingplatform.google.com/about/analytics/)

## Setting up Project

1. Start with setting up your project using [Appwrite CLI](https://appwrite.io/docs/tooling/command-line/installation)
2. Login using `appwrite login`
3. Edit [appwrite.json](appwrite.json) and update the project name & ID
4. Run `appwrite push -all`, this will create all the necessary database, collection and attributes

## Local development

1. Rename [.env.example](.env.example) to `.env` and edit the values
2. Install dependencies with `npm install` (or `pnpm install` or `yarn`)
3. Start a development server with `npm run dev` (or `pnpm dev` or `yarn dev`)
4. Visit [http://localhost:3000](http://localhost:3000/)

## Deploy to production

When used with Appwrite, all changes to `main` branch are automatically deployed to production.

Otherwise, use `npm run build` (or `pnpm build` or `yarn build`), and deploy as Node.js server with build folder as
`./.next`.
