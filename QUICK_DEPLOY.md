# ⚡ Quick Deploy Guide - 15 Minutes to Live!

Ultra-fast deployment checklist for experienced users.

---

## 🚀 Speed Run (15 minutes)

### **1. GitHub Setup** (3 min)

```bash
cd "E:\Project-AI-MemoryCore-main\SwiftApp Dev\contractor-website"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/contractor-website.git
git push -u origin main
```

OR drag & drop files to GitHub web interface.

---

### **2. Cloudflare Pages** (5 min)

1. Login: [dash.cloudflare.com](https://dash.cloudflare.com)
2. Workers & Pages → Create application → Connect to Git
3. Select repository: `contractor-website`
4. Build settings: **Leave all empty** (static HTML)
5. Click **"Save and Deploy"**

✅ **LIVE URL**: `https://contractor-website-xyz.pages.dev`

---

### **3. Configure Form** (2 min)

1. Sign up: [formspree.io](https://formspree.io)
2. Create form → Copy form ID
3. Edit `script.js` line 141:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
4. Push to GitHub

---

### **4. Update Content** (5 min)

Edit these files on GitHub:

**All HTML files**:
- Company name
- Phone: `012-345 6789`
- Email: `info@binaanteguh.com`
- WhatsApp: `60123456789`

**projects.json**:
- Replace dummy projects
- Add real images

**contact.html**:
- Update Google Maps iframe

---

## ✅ Verification

- [ ] Website loads: `https://your-site.pages.dev`
- [ ] All 5 pages working
- [ ] Gallery displays projects
- [ ] Contact form submits
- [ ] WhatsApp button works
- [ ] Mobile responsive

---

## 🎯 Custom Domain (Optional)

1. Cloudflare Pages → Custom domains
2. Add domain: `yourdomain.com`
3. Add DNS CNAME: `contractor-website-xyz.pages.dev`
4. Wait 10-15 minutes

---

## 🔄 Future Updates

**Easy Mode**: Edit files on GitHub → Auto-deploys!

**Pro Mode**:
```bash
git add .
git commit -m "Update content"
git push
```

---

## 📊 What You Get

✅ FREE hosting (unlimited bandwidth)
✅ FREE SSL certificate (HTTPS)
✅ Global CDN (fast worldwide)
✅ Auto-deployment (Git push = deploy)
✅ 99.9% uptime

**Monthly Cost**: RM 0

---

## 🐛 Quick Fixes

**404 Error**: Check `index.html` in root folder
**Form not working**: Update Formspree ID in `script.js`
**Images broken**: Check URLs in `projects.json`
**WhatsApp not working**: Format: `60123456789` (no spaces)

---

## 📱 Next Steps

1. Replace dummy content with real data
2. Add professional project photos
3. Test all functionality
4. Share website link!

---

**Total Time**: 15 minutes
**Skill Level**: Beginner-friendly
**Cost**: FREE

**Ready? Go! 🚀**
