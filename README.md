# 🌐 Monza Bit The News

> AI-Powered Real-Time News Intelligence Dashboard — by Monza Lab
>
> ## Vision
>
> Monza Bit The News is a next-generation news intelligence platform that aggregates, analyzes, and presents trending stories from across the web in real-time. Inspired by the UX patterns of leading AI news platforms, it combines web scraping, AI-powered summarization, and a premium dark UI to deliver an immersive news experience.
>
> ## Tech Stack
>
> - **Frontend:** React 18 + TypeScript + Vite
> - - **Styling:** Tailwind CSS + Custom Design System (Dark Premium)
> - - **UI Components:** ShadCN/UI + Custom Components
> - - **State Management:** TanStack React Query
> - - **Routing:** React Router DOM v6
> - - **Data Fetching:** Axios + Cheerio (scraping) + RSS Parser
> - - **AI Integration:** OpenAI / Claude API (summarization & analysis)
> - - **Database:** Supabase (PostgreSQL)
> - - **Deployment:** Vercel / Netlify
> 
> - ## Architecture
> 
> - ```
> monza-bit-the-news/
> ├── public/
> │ └── assets/
> ├── src/
> │ ├── components/
> │ │ ├── layout/ # AppShell, Sidebar, Navbar, Footer
> │ │ ├── dashboard/ # TrendingList, NewsCard, StatsPanel
> │ │ ├── node/ # NodeDetail, Breakdown, StoryStats
> │ │ ├── search/ # SearchBar, SearchSuggestions
> │ │ ├── ui/ # ShadCN + custom primitives
> │ │ └── shared/ # Ticker, MenuFullscreen, CategoryBadge
> │ ├── pages/
> │ │ ├── Home.tsx # Dashboard with trending + featured
> │ │ ├── NodeDetail.tsx # Individual story deep dive
> │ │ ├── Topic.tsx # Category filtered view
> │ │ └── About.tsx # About Monza Bit The News
> │ ├── services/
> │ │ ├── newsApi.ts # News API integrations
> │ │ ├── scraper.ts # Web scraping utilities
> │ │ └── aiSummary.ts # AI summarization service
> │ ├── types/
> │ │ └── news.ts # TypeScript interfaces
> │ ├── hooks/
> │ │ ├── useNews.ts # React Query hooks for news data
> │ │ └── useScrollSpy.ts # Scroll spy for section navigation
> │ ├── data/
> │ │ └── mockNews.ts # Mock data for development
> │ ├── lib/
> │ │ └── utils.ts # Utility functions
> │ ├── styles/
> │ │ └── globals.css # Global styles + design tokens
> │ ├── App.tsx
> │ └── main.tsx
> ├── server/ # Backend scraping service (optional)
> │ ├── scraper.ts
> │ ├── rssParser.ts
> │ └── cron.ts
> ├── package.json
> ├── tailwind.config.ts
> ├── vite.config.ts
> └── tsconfig.json
> ```
>
> ## Design System
>
> ### Colors (Dark Premium Theme)
> - **Background:** `#0a1628` (Deep Navy)
> - - **Surface:** `#0f1d32` (Card backgrounds)
> - - **Primary:** `#80FFFF` (Cyan/Turquoise - links, active states)
> - - **Secondary:** `#D685FF` (Magenta/Purple - accents)
> - - **Text Primary:** `#FFFFFF`
> - - **Text Secondary:** `#8B9DC3` (Muted blue-gray)
> - - **Border:** `#1a2d4a` (Subtle borders)
> - - **Success:** `#4ADE80` (Green metrics)
> - - **Warning:** `#FBBF24` (Yellow alerts)
> 
> - ### Typography
> - - **Headings:** Satoshi Variable (Geometric Sans)
> - - **Body:** Inter / System UI
> - - **Monospace:** DM Mono (Stats, categories, metadata)
> 
> - ### Key UI Patterns
> - 1. **Splash Screen** — Fullscreen brand moment with animated ticker
> 2. 2. **3-Column Dashboard** — Sidebar (trending list) + Main (featured card) + Context (articles)
> 3. 3. **Node Detail Page** — Sticky nav + scrollable sections (Preview → Stats → Breakdown → Learning → Articles)
> 4. 4. **Fullscreen Menu** — Glassmorphism overlay with large navigation links
> 5. 5. **Contextual Search** — AI-powered search bar with dynamic suggestions
> 6. 6. **Metrics Cards** — Visual stats (virality, duration, article count, sentiment)
> 7. 7. **Responsive Mobile** — Vertical card feed (story-style scrolling)
> 
> 8. ## Features Roadmap
> 
> 9. ### Phase 1 — Foundation ✅
> 10. - [ ] Project setup (Vite + React + TypeScript + Tailwind)
> - [ ] - [ ] Design system tokens and global styles
> - [ ] Mock data and TypeScript types
> - [ ] - [ ] Dashboard layout (3-column)
> - [ ] - [ ] Trending sidebar component
> - [ ] - [ ] Featured news card component
> - [ ] - [ ] Basic routing (Home, NodeDetail, Topic)
>
> - [ ] ### Phase 2 — Core Experience
> - [ ] - [ ] Splash screen with ticker animation
> - [ ] - [ ] Node detail page with all sections
> - [ ] - [ ] Scroll spy navigation
> - [ ] - [ ] Fullscreen menu with blur
> - [ ] - [ ] Category filtering
> - [ ] - [ ] Timeframe filtering (Now, 7 days, 30 days)
> - [ ] - [ ] Mobile responsive layout
>
> - [ ] ### Phase 3 — Data & AI
> - [ ] - [ ] RSS feed integration
> - [ ] - [ ] News API integration
> - [ ] - [ ] AI summarization (OpenAI/Claude)
> - [ ] - [ ] Sentiment analysis
> - [ ] - [ ] Virality scoring algorithm
> - [ ] - [ ] Supabase database setup
> - [ ] - [ ] Cron job for data refresh
>
> - [ ] ### Phase 4 — Polish & Launch
> - [ ] - [ ] Animations and transitions
> - [ ] - [ ] SEO optimization
> - [ ] - [ ] PWA support
> - [ ] - [ ] Newsletter signup
> - [ ] - [ ] API for developers
> - [ ] - [ ] i18n (Spanish/English)
>
> - [ ] ## Getting Started
>
> - [ ] ```bash
> - [ ] # Clone the repository
> - [ ] git clone https://github.com/edgarmonza/monza-bit-the-news.git
> - [ ] cd monza-bit-the-news
>
> - [ ] # Install dependencies
> - [ ] npm install
>
> - [ ] # Start development server
> - [ ] npm run dev
>
> - [ ] # Build for production
> - [ ] npm run build
> - [ ] ```
>
> - [ ] ## License
>
> - [ ] MIT — Monza Lab 2026
> - [ ] 
