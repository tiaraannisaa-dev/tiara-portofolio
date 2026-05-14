# Tiara Annisaa — Portfolio Website

Personal portfolio for **Tiara Annisaa** — Strategy, CEO Office & Digital Transformation Professional.

**Stack**: Next.js 15 (App Router) · TypeScript · Tailwind CSS · Sanity CMS · Framer Motion · Vercel

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> The site renders perfectly without Sanity — Books, Articles, Projects, and Speaking sections show static fallback data (or empty states) until the CMS is connected.

---

## Add Your Profile Photo

Save your photo as `tiara.jpg` inside the `public/` folder:

- Aspect ratio: **4:5 portrait**
- Min size: **800 × 1000 px**
- Format: JPG (preferred)
- File size: < 500 KB

If the file is missing, the Hero shows a gradient + "TA" monogram fallback.

---

## Connect Sanity CMS

The site uses Sanity to manage **Projects**, **Speaking Engagements**, **Books**, and **Articles** through a friendly dashboard at `/studio`.

### Step 1 — Create a Sanity project

1. Sign up at [sanity.io/manage](https://www.sanity.io/manage) (free tier is plenty).
2. Click **Create new project**.
3. Note your **Project ID** and **Dataset name** (default: `production`).

### Step 2 — Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in `.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-01
```

### Step 3 — Add CORS origin

In [sanity.io/manage](https://www.sanity.io/manage):

- Go to your project → **API** → **CORS Origins**
- Add `http://localhost:3000`
- After deploy, also add your production URL (e.g. `https://tiaraannisaa.vercel.app`)

### Step 4 — Open the embedded Studio

Restart `npm run dev` and go to:

```
http://localhost:3000/studio
```

You'll see four content types in the sidebar:

#### 📊 Project (Strategy & Transformation)

- **Client / Company Name** *(required)* — for confidential clients, use a generic label
- **Client Logo** — optional image upload (falls back to letter avatar)
- **Description** *(required)* — 1-sentence impact summary
- **Industry** — e.g. "Telecommunications"
- **Year** — e.g. "2023" or "2022–2023"
- **Confidential** — toggle to show "Confidential" badge instead of revealing client identity
- **Display Order** — lower = appears first

#### 🎤 Speaking Engagement

- **Organization** *(required)*
- **Organization Logo** — optional
- **Topic / Title** *(required)*
- **Year** — optional
- **Link** — optional URL to recording, event, or LinkedIn post
- **Display Order**

#### 📚 Book

- **Title** *(required)*
- **Author** *(required)*
- **Cover Image**
- **Category** — strategy, leadership, personal-development, business, other
- **Key Insights** — 1–5 short bullet points (your takeaways)
- **Date Read**
- **Display Order**

#### ✍️ Article

- **Title** *(required)*
- **Slug** — auto-generated from title
- **Excerpt** — short summary (max 280 chars)
- **Cover Image**
- **Category** — strategy, leadership, transformation, career, reflections
- **Published At** *(required)*
- **Reading Time (minutes)**
- **Body** — rich text editor with H2/H3, bold, italic, blockquote, links, inline images

> 💡 **Smart fallback**: When you add even one Project/Speaking entry to Sanity, the website automatically switches from static fallback data to your CMS data. Add at least all your projects so nothing is lost.

---

## Deploy to GitHub + Vercel

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: e.g. `tiara-portfolio`
3. Choose **Private** or **Public** (Vercel works with both)
4. **Don't** initialize with README/gitignore (we already have them)
5. Click **Create repository**

### Step 2 — Push your code to GitHub

In your terminal, inside the project folder:

```bash
# initialize git (if not already)
git init
git branch -M main

# stage and commit everything
git add .
git commit -m "Initial commit: portfolio website"

# connect to your GitHub repo (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/tiara-portfolio.git

# push
git push -u origin main
```

> **Don't have git installed?**
> macOS: `brew install git`
> Or use GitHub Desktop ([desktop.github.com](https://desktop.github.com)) — drag the project folder, commit, and click "Publish repository".

### Step 3 — Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Click **Import** next to your `tiara-portfolio` repository.
3. Framework Preset: **Next.js** (auto-detected)
4. **Environment Variables** — add these three (copy from `.env.local`):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
5. Click **Deploy**.

After ~2 minutes, Vercel gives you a URL like `https://tiara-portfolio.vercel.app`.

### Step 4 — Add production URL to Sanity CORS

Back in [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS Origins** — add your Vercel URL so the live site can fetch CMS content.

### Step 5 — (Optional) Custom Domain

In Vercel → your project → **Settings** → **Domains**:

- Add a custom domain (e.g. `tiaraannisaa.com`)
- Vercel guides you through DNS setup with your registrar
- Free SSL certificate is automatic

### How updates work

Once deployed, **every time you `git push` to `main`, Vercel automatically rebuilds and deploys**:

```bash
# make some changes (e.g. edit lib/data.ts)
git add .
git commit -m "Update bio"
git push
```

CMS changes (Projects, Books, Articles, Speaking) **don't require a redeploy** — they update live within 60 seconds (controlled by `revalidate: 60` in `sanity/lib/fetch.ts`).

---

## Editing Content

| Content | Where to edit | Requires redeploy? |
|---|---|---|
| Profile, bio, tagline, email, socials | `lib/data.ts` | Yes (git push) |
| Skills, certifications | `lib/data.ts` | Yes (git push) |
| **Projects (Strategy & Transformation)** | `/studio` (Sanity) | No — live in 60s |
| **Speaking Engagements** | `/studio` (Sanity) | No — live in 60s |
| **Books** | `/studio` (Sanity) | No — live in 60s |
| **Articles** | `/studio` (Sanity) | No — live in 60s |
| Profile photo | `public/tiara.jpg` | Yes (git push) |

> Static fallback data in `lib/data.ts` is used when Sanity is empty or not configured. Once you add CMS entries, they take precedence.

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx                    # Root layout, fonts, navbar, footer
│   ├── page.tsx                      # Homepage
│   ├── globals.css                   # Tailwind + custom utilities
│   ├── articles/
│   │   ├── page.tsx                  # Articles listing
│   │   └── [slug]/page.tsx           # Article detail
│   └── studio/[[...tool]]/           # Embedded Sanity Studio at /studio
├── components/                       # All UI components
├── lib/
│   └── data.ts                       # Static fallback data
├── sanity/
│   ├── env.ts
│   ├── schemas/
│   │   ├── project.ts                # Strategy & Transformation Projects
│   │   ├── speaking.ts               # Speaking Engagements
│   │   ├── book.ts
│   │   ├── article.ts
│   │   └── index.ts
│   └── lib/
│       ├── client.ts                 # Sanity client
│       ├── image.ts                  # Image URL builder
│       ├── queries.ts                # GROQ queries
│       └── fetch.ts                  # Typed fetchers
├── public/
│   └── tiara.jpg                     # ← Replace with your photo
├── sanity.config.ts                  # Studio config
├── tailwind.config.ts                # Design tokens
├── next.config.js
└── package.json
```

---

## Design Tokens

| Token | Hex | Use |
|---|---|---|
| `maroon` | `#7B1E2E` | Primary accent |
| `maroon-dark` | `#5C1622` | Hover state |
| `rose-soft` | `#FCE4EC` | Background highlights |
| `rose-mist` | `#F8D7DD` | Hero decorative blobs |
| `cream` | `#FBF7F4` | Section backgrounds |
| `ink` | `#0A0A0A` | Body text |
| `paper` | `#FFFFFF` | Page background |

**Typography**: Fraunces (serif, headings) + Inter (sans, body) — both loaded via `next/font/google`.

---

© Tiara Annisaa. All rights reserved.
