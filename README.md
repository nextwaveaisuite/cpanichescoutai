# CPA Niche Scout AI 2.0

## 🎯 Overview

**CPA Niche Scout AI** is a next-generation tool designed to help CPA marketers and affiliate marketers discover profitable niches, find matching CPA offers, locate aged domains with traffic history, and generate complete website blueprints—all powered by intelligent algorithms.

### Problem Solved
Manually searching for low-competition, high-traffic keywords is **slow, error-prone, and time-consuming**. This tool automates the entire process with AI-powered analysis.

---

## ✨ Features

### 1. **Keyword Analysis**
- Intelligent scoring based on keyword characteristics
- Traffic potential estimation
- Competition difficulty calculation
- Profit potential assessment
- CPA niche relevance detection
- Actionable verdicts: BUILD, MONITOR, or SKIP

### 2. **CPA Offer Matching**
- Automatic matching with major CPA networks:
  - ClickBank
  - CJ Affiliate
  - Impact
  - Rakuten
  - ShareASale
- Payout information
- Relevance scoring

### 3. **Expired Domain Finder**
- Intelligent domain suggestions
- Domain age and history scoring
- Price estimation (<$15 focus)
- Multiple TLD variations (.com, .net, etc.)
- Buy/Consider/Skip verdicts

### 4. **Website Blueprint Generator**
- Complete site structure recommendations
- Page hierarchy and content types
- SEO optimization suggestions
- Related keyword suggestions
- CTA optimization

### 5. **HTML Export**
- Professional analysis reports
- Downloadable HTML format
- All metrics and recommendations included
- Ready to share or archive

---

## 🚀 Getting Started

### Installation

```bash
# Clone or download the project
cd cpaNicheScoutAI-enhanced

# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

Visit `http://localhost:3000` in your browser.

### Quick Start

1. Go to the **Dashboard** (`/dashboard`)
2. Enter a keyword (e.g., "best weight loss pills")
3. Click one of the analysis buttons:
   - **📊 Analyze** - Keyword scoring and metrics
   - **💰 Offers** - Matching CPA offers
   - **🌐 Domains** - Domain suggestions
   - **📐 Blueprint** - Website structure
   - **📥 Export** - HTML report

---

## 📊 Scoring Algorithms

### Keyword Score (0-100)
Combines:
- CPA modifier bonus (+20 if contains: best, review, how to, guide, etc.)
- Niche relevance (+40-75)
- Keyword length and word count
- Specificity score

**Verdict:**
- **BUILD** (>60): High potential, start building
- **MONITOR** (40-60): Worth watching
- **SKIP** (<40): Low potential

### Difficulty Score (0-100)
Lower is easier to rank for:
- Long-tail keywords (3+ words): -15 bonus
- Specific keywords (>25 chars): -10 bonus
- Base: 60

### Profit Score (0-100)
Based on:
- Niche value (high-value niches: insurance, loans, forex, etc.)
- Difficulty (easier = more profit potential)
- Specificity (3+ word keywords score higher)

### Domain Score (0-100)
Evaluates:
- Extension (.com=25, .net=15, other=10)
- Domain age (2 points per year, max 20)
- Length (≤12 chars = 15 points)
- Price (<$15=15, <$30=10, >$30=5)

---

## 🏗️ Project Structure

```
cpaNicheScoutAI-enhanced/
├── app/
│   ├── api/                    # API endpoints
│   │   ├── analyze/            # Keyword analysis
│   │   ├── offers/             # CPA offer matching
│   │   ├── domains/            # Domain finder
│   │   ├── blueprint/          # Site blueprint
│   │   └── export/             # HTML export
│   ├── dashboard/              # Main tool interface
│   ├── page.tsx                # Landing page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── lib/
│   ├── ai/                     # AI engines
│   │   ├── keywordEngine.ts
│   │   ├── offerEngine.ts
│   │   ├── domainEngine.ts
│   │   ├── blueprintEngine.ts
│   │   └── exportEngine.ts
│   └── scoring/                # Scoring algorithms
│       ├── keywordScore.ts
│       ├── difficultyScore.ts
│       ├── profitScore.ts
│       └── domainScore.ts
├── components/                 # Reusable components
├── utils/                      # Helper functions
├── config/                     # Configuration
├── public/                     # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 API Endpoints

All endpoints accept POST requests with JSON body `{ q: "keyword" }`.

### `/api/analyze`
Analyzes a keyword for CPA potential.

**Response:**
```json
{
  "keyword": "weight loss pills",
  "score": 72,
  "difficulty": 45,
  "profit": 68,
  "traffic": 7200,
  "competition": 28,
  "verdict": "BUILD",
  "metrics": { ... }
}
```

### `/api/offers`
Finds matching CPA offers.

**Response:**
```json
{
  "keyword": "weight loss pills",
  "offers": [
    {
      "network": "ClickBank",
      "name": "weight loss pills - ClickBank Offer",
      "payout": 45,
      "relevance": "high"
    }
  ]
}
```

### `/api/domains`
Suggests aged domains.

**Response:**
```json
{
  "keyword": "weight loss pills",
  "domains": [
    {
      "domain": "weightlosspills.com",
      "price": 12.99,
      "age": 5,
      "score": 78,
      "verdict": "BUY"
    }
  ]
}
```

### `/api/blueprint`
Generates website blueprint.

**Response:**
```json
{
  "keyword": "weight loss pills",
  "siteName": "Weight Hub",
  "pages": [ ... ],
  "structure": { ... },
  "seo": { ... }
}
```

### `/api/export`
Generates HTML report.

**Response:**
```json
{
  "keyword": "weight loss pills",
  "html": "<!DOCTYPE html>...",
  "format": "html"
}
```

---

## 🎨 Design System

### Colors
- **Primary**: #4f7cff (Blue)
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Amber)
- **Danger**: #ef4444 (Red)
- **Background**: #0b1220 (Dark)

### Typography
- **Font**: System UI (-apple-system, BlinkMacSystemFont, etc.)
- **Headings**: 600 weight, 1.3 line-height
- **Body**: 1.6 line-height

### Components
- **Cards**: Hover effects, subtle shadows
- **Buttons**: Multiple variants (primary, secondary, success, warning, danger)
- **Inputs**: Focus states with blue glow
- **Badges**: Color-coded status indicators
- **Alerts**: Info, success, warning, danger styles

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
vercel
```

### Docker
```bash
docker build -t cpanichescout .
docker run -p 3000:3000 cpanichescout
```

### Self-Hosted
```bash
npm run build
npm run start
```

---

## 📈 Enhancement Ideas

- Real API integrations (domain registrars, CPA networks)
- User authentication and saved analyses
- Bulk keyword analysis
- Historical data tracking
- Advanced filtering and sorting
- Export to CSV/PDF
- Competitor analysis
- Backlink analysis
- Traffic estimation from real data

---

## 📝 License

This project is provided as-is for educational and commercial use.

---

## 🤝 Support

For issues, questions, or feature requests, please refer to the documentation or create an issue.

---

**CPA Niche Scout AI 2.0** | Find Your Next Profitable Niche 🎯
