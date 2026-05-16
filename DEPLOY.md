# Deployment Guide

## GitHub to Netlify Deployment

Since the goal is a highly SEO-optimized static-first approach, this Vite application is configured to play nicely with Netlify, ensuring your single-page app (SPA) gracefully supports deep linking and fallback mechanisms, whilst also guaranteeing `robots.txt` and `sitemap.xml` are accessible.

### Step 1: Push to GitHub
1. In the AI Studio IDE, select "Export to GitHub" from the top menu.
2. Select or create your repository (e.g., `woodyoudoit-web`).

### Step 2: Connect to Netlify
1. Log into [Netlify](https://app.netlify.com).
2. Click **"Add new site"** -> **"Import an existing project"**.
3. Choose **GitHub** and authorize your account.
4. Select the `woodyoudoit-web` repository.
5. In the Build settings:
   - **Base directory**: (Leave empty)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**.

### Step 3: Domain Setup
1. Once deployed, click **Domain Settings**.
2. Click **Add custom domain** and type `woodyoudoit.net`.
3. Update your DNS settings at your Domain Registrar to point to Netlify's name servers or set up an A record/CNAME as guided by the Netlify UI.
4. Enable Netlify's automatic Let's Encrypt SSL.

### Step 4: Google Search Console (GSC) Setup
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add Property -> Choose **Domain** type (recommended) -> Enter `woodyoudoit.net`.
3. Verify ownership via DNS (add the provided TXT record to your DNS).
4. In GSC, click on **Sitemaps** in the left sidebar.
5. Enter `sitemap.xml` and click submit. You should see "Success". GSC will now ingest all your clean URLs!

## How the Statically Generated SEO works:
A custom Node script (`generate-seo.mjs`) is hooked into the `npm run build` step.
Every time you build the project on Netlify, the script parses your `src/content/posts/*.json` files and generates a fresh, accurate `sitemap.xml` and `robots.txt` placed in the `dist` folder.
Netlify uses the automatically generated `_redirects` file to handle deep-linking correctly.
