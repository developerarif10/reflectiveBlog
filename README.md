# ReflectiveBlog

ReflectiveBlog is a personal blogging website built using **Next.js**, **React**, **Tailwind CSS**, and **MongoDB Atlas**. It allows you to publish your thoughts, tutorials, learning notes, and more — beautifully styled and optimized for performance.

> 🚀 Built for developers, writers, and tech learners who want a simple, customizable, and SEO-friendly blog.

## 🌟 Tech Stack

- **Frontend**: React, Next.js (App Router)
- **Styling**: Tailwind CSS
- **Database**: MongoDB Atlas
- **Content**: MDX via Contentlayer
- **Deployment**: Vercel

---

## 📁 Features

- Light/Dark mode toggle
- MDX support (JSX inside markdown!)
- Responsive design with mobile-first approach
- SEO optimized with sitemap and RSS feed
- Custom blog post layouts (with banners, meta info, etc.)
- Blog tagging and filtering
- Easy deployment to Vercel
- MongoDB integration for storing user or blog data (optional enhancement)

---

## 🔧 Getting Started

### 1. Clone the Repo

```bash
npx degit timlrx/tailwind-nextjs-starter-blog ReflectiveBlog
cd ReflectiveBlog
```

### 2. Install Dependencies

```bash
yarn install
# or
npm install
```

### 3. Start Development Server

```bash
yarn dev
# or
npm run dev
```

Visit `http://localhost:3000` to see your blog live.

---

## 🛠️ Configuration

Edit the following files to customize your blog:

- `data/siteMetadata.js` – site name, author, email, social links
- `data/authors/default.md` – your author profile info
- `data/blog/` – add your blog posts in markdown or mdx
- `components/` – reusable UI components
- `app/` – page structure and routing
- `tailwind.config.js` – theming and design system

You can also update `public/` folder for your own favicon and images.

---

## ✍️ Writing a Blog Post

Blog posts live in the `data/blog/` directory. Each post uses **Frontmatter** to define metadata.

Example:

```markdown
---
title: "How I Built ReflectiveBlog"
date: "2025-08-07"
tags: ["nextjs", "tailwindcss", "mongodb"]
authors: ["default"]
summary: "A developer's journey into building a simple and modern blog site using Next.js and MongoDB."
layout: PostLayout
---

Write your markdown or MDX content here...
```

---

## 🚀 Deployment

### Deploy to Vercel

Click the button below to deploy instantly:

[![Deploy with Vercel](https://vercel.com/button)]

Or, push to your GitHub and connect your repo to [Vercel](https://vercel.com).

---

## 📌 MongoDB Integration (Optional)

If you want to connect MongoDB Atlas for dynamic data (e.g., contact forms, user-authored blogs):

1. Set up a free MongoDB Atlas cluster.
2. Add your `MONGODB_URI` in `.env.local`.
3. Create an API route in `app/api/` to handle data reads/writes.

---

## 📖 License

MIT License. Feel free to use, modify, and build upon ReflectiveBlog.

> Inspired by [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) – customized and personalized for ReflectiveBlog.

---

## ✨ Coming Soon

- Author dashboard with MongoDB
- Blog likes & views count
- Categories page
- Newsletter subscription
- Comment system (e.g., Giscus)

Stay tuned for more improvements 🚀
