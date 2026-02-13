# WordPress to Next.js Migration - Cleanup Guide

## Issue: Old WordPress Files Still Accessible (P-17)

Your website was successfully migrated from WordPress to Next.js, but old WordPress files in `/wp-content/uploads/` and other WordPress directories are still accessible on the server. This causes:

1. **SEO Issues** - Google may index outdated content (old fees, faculty lists, programme info)
2. **Crawl Budget Waste** - Google wastes time crawling old files instead of new Next.js pages
3. **Security Risk** - Old WordPress files may contain vulnerabilities or sensitive data

---

## ✅ What Has Been Fixed (Application Level)

### 1. **robots.txt Enhanced**
**File:** `public/robots.txt`

Added comprehensive blocking of WordPress paths:
```txt
Disallow: /wp-content/
Disallow: /wp-includes/
Disallow: /wp-admin/
Disallow: /wp-json/
Disallow: /xmlrpc.php
Disallow: /wp-login.php
Disallow: /wp-signup.php
```

**Effect:** Search engines will stop crawling these paths.

### 2. **Next.js Redirects Added**
**File:** `next.config.js`

Added permanent 301 redirects for WordPress paths:
```javascript
{
  source: '/wp-content/:path*',
  destination: '/404',
  permanent: true,
}
// ... and 4 more WordPress path redirects
```

**Effect:** Any request to WordPress paths handled by Next.js will redirect to 404.

### 3. **Edge Middleware Created** ✨
**File:** `middleware.ts` (NEW)

Created middleware to block WordPress paths at the edge before they reach the router:
- Blocks 14 common WordPress file paths
- Returns 301 redirect to /404 page
- Runs efficiently at the edge

**Effect:** Fast blocking of WordPress paths with minimal overhead.

---

## 🚨 What Still Needs to Be Done (Server Level)

The application-level fixes above will work for requests that reach your Next.js application. However, **if old WordPress files still physically exist on your server**, you need to clean them up at the server/hosting level.

### Option A: Quick Fix - Block in Server Config (Nginx/Apache)

#### For Nginx:
Add to your nginx config:
```nginx
# Block old WordPress paths
location ~* ^/(wp-content|wp-includes|wp-admin|wp-json)/ {
    return 404;
}

location ~* \.(php|php5|php7|phtml)$ {
    # Only allow index.php if needed by Next.js
    if ($request_uri !~ "^/_next/") {
        return 404;
    }
}
```

#### For Apache (.htaccess):
Add to your `.htaccess` file:
```apache
# Block old WordPress paths
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule ^wp-content/ - [L,R=404]
RewriteRule ^wp-includes/ - [L,R=404]
RewriteRule ^wp-admin/ - [L,R=404]
RewriteRule ^wp-json/ - [L,R=404]
RewriteRule \.php$ - [L,R=404]
</IfModule>
```

### Option B: Better - Identify Useful Files, Remove the Rest

1. **Check Google Search Console** → Pages → See which `/wp-content/` URLs are indexed
2. **Download any useful PDFs/images** that are still referenced
3. **Upload them to** `/public/pdf/` or `/public/images/` in your Next.js project
4. **Delete the old WordPress directories** from the server:
   ```bash
   rm -rf /path/to/your/site/wp-content/
   rm -rf /path/to/your/site/wp-includes/
   rm -rf /path/to/your/site/wp-admin/
   ```

### Option C: Best - Complete Server Cleanup ✅ RECOMMENDED

**Prerequisites:**
- Backup your server first
- Verify no important files are in WordPress directories

**Steps:**

1. **SSH into your server**
   ```bash
   ssh user@your-server.com
   cd /path/to/your/site
   ```

2. **List WordPress files to verify**
   ```bash
   ls -la | grep wp-
   ```

3. **Delete WordPress directories**
   ```bash
   # Delete WordPress core directories
   rm -rf wp-content/
   rm -rf wp-includes/
   rm -rf wp-admin/

   # Delete WordPress root files
   rm -f wp-*.php
   rm -f xmlrpc.php
   rm -f license.txt
   rm -f readme.html
   ```

4. **Verify deletion**
   ```bash
   ls -la | grep wp-
   # Should return nothing
   ```

5. **Test your site**
   - Visit https://pharmacy.jkkn.ac.in
   - Try accessing https://pharmacy.jkkn.ac.in/wp-content/uploads/test.pdf
   - Should get 404 or redirect

---

## 📊 Expected Results After Full Cleanup

1. ✅ **Google stops crawling old WordPress content** (robots.txt)
2. ✅ **Old WordPress URLs return 404** (middleware + redirects)
3. ✅ **Crawl budget focused on Next.js pages** (no old files to crawl)
4. ✅ **Security improved** (no old vulnerable files)
5. ✅ **Cleaner search results** (no outdated PDFs appearing)

---

## 🔍 How to Verify the Fix

### 1. Test robots.txt
Visit: https://pharmacy.jkkn.ac.in/robots.txt
- Should show `Disallow: /wp-content/` and other WordPress paths

### 2. Test WordPress path blocking
Try accessing:
- https://pharmacy.jkkn.ac.in/wp-content/
- https://pharmacy.jkkn.ac.in/wp-admin/
- https://pharmacy.jkkn.ac.in/xmlrpc.php

**Expected:** Should get 404 error page

### 3. Check Google Search Console
1. Go to Google Search Console
2. Navigate to **Coverage** or **Pages**
3. Search for URLs containing `/wp-content/`
4. Over time (2-4 weeks), these should disappear from the index

### 4. Test with robots.txt tester
1. Go to Google Search Console → Settings → robots.txt Tester
2. Test URLs like `/wp-content/uploads/2023/test.pdf`
3. Should show "Blocked by robots.txt"

---

## 📝 Maintenance Notes

- **Application-level fixes** (middleware, redirects, robots.txt) are now in place ✅
- **Server-level cleanup** must be done manually on your hosting server
- After server cleanup, monitor Google Search Console for 2-4 weeks
- Old indexed URLs will gradually disappear from search results
- No changes needed to existing Next.js pages

---

## 🆘 Troubleshooting

**Q: I deleted WordPress files but old URLs still work**
- A: Clear your server cache (Cloudflare, CDN, or server cache)
- Check if files are cached in reverse proxy (Nginx cache, Varnish, etc.)

**Q: How do I know which PDFs are still being used?**
- A: Check Google Search Console → Performance → Filter by URL containing "wp-content"
- Check Google Analytics for referrals to these URLs

**Q: Should I redirect old PDFs to new locations?**
- A: Only if they're actively used and have SEO value
- Use next.config.js redirects for specific files:
  ```javascript
  {
    source: '/wp-content/uploads/2023/syllabus.pdf',
    destination: '/pdf/syllabus-2026.pdf',
    permanent: true,
  }
  ```

---

## 📞 Contact & Support

If you need help with server-level cleanup:
1. Contact your hosting provider (Hostinger, Cloudways, AWS, etc.)
2. Share this document with your server administrator
3. Request them to remove WordPress directories as per Option C above

---

**Last Updated:** 2026-02-13
**Status:** Application-level fixes ✅ COMPLETE | Server-level cleanup ⏳ PENDING
