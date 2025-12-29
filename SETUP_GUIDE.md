# CPA Niche Scout AI 2.0 - Super Simple Setup Guide

## For Non-Technical Users - No Terminal Commands Needed!

---

## Step 1: Extract the ZIP File

1. Download the `cpaNicheScoutAI-final.zip` file
2. **Right-click** on it
3. Select **"Extract All"** (Windows) or **"Extract"** (Mac)
4. A folder named `cpaNicheScoutAI-final` will appear

---

## Step 2: Upload to GitHub (No Terminal!)

### Using GitHub Web Interface (Easiest):

1. Go to https://github.com/new
2. Create a new repository:
   - **Repository name**: `cpanichescoutai`
   - **Description**: "CPA Niche Scout AI - Find Profitable Niches"
   - **Public** or **Private** (your choice)
   - Click **"Create repository"**

3. After creating, GitHub will show you instructions
4. Click the **"uploading an existing file"** link
5. **Drag and drop** the extracted folder contents into the upload area
6. Click **"Commit changes"**

**Done!** Your code is now on GitHub.

---

## Step 3: Deploy to Vercel (One-Click!)

### Automatic Deployment:

1. Go to https://vercel.com
2. Click **"Sign up"** (or log in if you have an account)
3. Click **"Import Project"**
4. Paste your GitHub repository URL
5. Click **"Import"**
6. Vercel will automatically:
   - Install dependencies
   - Build your project
   - Deploy it live

**Your site is now LIVE!** Vercel will give you a URL like: `https://cpanichescoutai.vercel.app`

---

## Step 4: Add Stripe Keys (Optional but Recommended)

To enable real Stripe payments:

1. Go to https://dashboard.stripe.com/apikeys
2. Copy your **Publishable Key** and **Secret Key**
3. In Vercel dashboard:
   - Go to your project
   - Click **"Settings"**
   - Click **"Environment Variables"**
   - Add these variables:
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = your publishable key
     - `STRIPE_SECRET_KEY` = your secret key
   - Click **"Save"**

Vercel will automatically redeploy with your Stripe keys!

---

## What You Get

✅ **Email Capture Popup** - Automatically captures visitor emails
✅ **Pricing Page** - 3 payment tiers ($9.99, $19.00, $29.00)
✅ **Stripe Integration** - Ready for real payments
✅ **Dashboard** - All analysis tools
✅ **Professional Design** - Modern, clean interface
✅ **Live Website** - Deployed and accessible

---

## Features Included

### 📊 Keyword Analysis
- Intelligent scoring (15-95)
- Difficulty calculation
- Profit potential
- Traffic estimation

### 💰 CPA Offers
- ClickBank, CJ Affiliate, Impact, Rakuten, ShareASale
- Automatic matching
- Payout information

### 🌐 Domain Finder
- Expired domain suggestions
- Age and price scoring
- Buy/Consider/Skip verdicts

### 📐 Blueprint Generator
- Website structure recommendations
- SEO optimization
- Content suggestions

### 📥 Export Reports
- Professional HTML reports
- All metrics included

### 💳 Stripe Payments
- $9.99 - 20 Credits
- $19.00 - 50 Credits
- $29.00 - 100 Credits

---

## Pricing Tiers Explained

| Plan | Price | Credits | Best For |
|------|-------|---------|----------|
| Starter | $9.99 | 20 | Getting started |
| Professional | $19.00 | 50 | Active marketers |
| Enterprise | $29.00 | 100 | Serious niche hunters |

Each credit = 1 analysis

---

## Troubleshooting

### "I can't find the extracted folder"
- Check your Downloads folder
- Look for a folder named `cpaNicheScoutAI-final`

### "Vercel deployment failed"
- Make sure all files were uploaded to GitHub
- Check that you have a `.env.example` file
- Vercel will show error details - read them carefully

### "Stripe isn't working"
- Make sure you added the environment variables in Vercel
- Check that your keys are correct
- Vercel needs to redeploy after adding keys (it does this automatically)

### "Email popup isn't showing"
- It appears after 2 seconds on the homepage
- Check browser console for errors (F12 key)
- Make sure JavaScript is enabled

---

## Your Website is Ready!

Once deployed on Vercel, you have:
- ✅ A live website
- ✅ Email capture working
- ✅ Pricing page with Stripe ready
- ✅ All analysis tools functional
- ✅ Professional design

**Share your Vercel URL with anyone!**

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Help**: https://docs.github.com
- **Stripe Setup**: https://stripe.com/docs/setup

---

**That's it! You're done! No terminal commands, no technical knowledge needed.** 🎉

Your CPA Niche Scout AI is now live and ready to capture leads and payments!
