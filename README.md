# SUJAL.SYS — The Digital Lab

Personal portfolio of Sujal Singhal. React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide.

## Run locally
```bash
npm install
npm run dev          # http://localhost:5173
npm run typecheck    # optional type check
npm run build        # production build -> dist/
npm run preview
```

## Edit content
Everything (links, projects, skills, experience, achievements, email) lives in **`src/data/portfolio.ts`**.
- **Resume:** put your PDF in `public/` (e.g. `public/Sujal_Singhal_Resume.pdf`) and set `resumeUrl: "/Sujal_Singhal_Resume.pdf"`. Until then the button honestly says it is not added.
- **Contact form:** create a form at [Formspree](https://formspree.io) (or similar), then set `VITE_FORM_ENDPOINT` (see `.env.example`; on Vercel: Project → Settings → Environment Variables). Without it the form says nothing was sent.
- **Counts / ratings:** the "300+ / 100+" figures come from your resume; update them to your latest verified numbers.
- **Experience:** "Sducation Friend" still has placeholder text — fill it in.

## Upload to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/SujalSinghal123/portfolio.git   # create an empty repo named "portfolio" first
git push -u origin main
```

## Deploy on Vercel
1. Go to vercel.com → **Add New → Project** → import the GitHub repo.
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`.
3. Add `VITE_FORM_ENDPOINT` env var, then **Deploy**.
