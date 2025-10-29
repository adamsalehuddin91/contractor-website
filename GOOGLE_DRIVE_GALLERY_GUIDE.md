# 📸 Panduan Upload Gambar Projek ke Google Drive

**Untuk**: Binaan Teguh Sdn Bhd
**Website**: https://binaanteguh.pages.dev/
**Tujuan**: Upload dan urus gambar projek sendiri tanpa perlu developer

---

## 🎯 Mengapa Google Drive?

✅ **PERCUMA** - 15GB storage (cukup untuk 500+ gambar)
✅ **MUDAH** - Drag & drop sahaja
✅ **PANTAS** - Google CDN (laju worldwide)
✅ **SENDIRI URUS** - Tak perlu tunggu developer
✅ **SELAMAT** - Backup automatic oleh Google

---

## 📁 Langkah 1: Setup Folder Structure

### **Buat Folder di Google Drive**

1. Pergi ke: https://drive.google.com/
2. Klik **"New"** (atau **"Baharu"**)
3. Pilih **"New folder"**
4. Nama folder: `Binaan Teguh - Projek Gallery`

### **Buat Sub-Folders (Mengikut Kategori)**

Dalam folder utama, buat 4 sub-folders:

```
📁 Binaan Teguh - Projek Gallery/
  ├── 📁 Rumah Baru (New Construction)
  ├── 📁 Renovasi (Renovation)
  ├── 📁 Bangunan Komersial (Commercial)
  └── 📁 Infrastruktur (Infrastructure)
```

**Cara buat sub-folder**:
1. Masuk ke dalam folder `Binaan Teguh - Projek Gallery`
2. Klik **"New"** → **"New folder"**
3. Nama: `Rumah Baru`
4. Ulang untuk 3 kategori lain

---

## 📤 Langkah 2: Upload Gambar Projek

### **Persediaan Gambar**

**Format yang disokong**:
- ✅ JPG / JPEG (paling bagus)
- ✅ PNG
- ✅ WebP

**Saiz gambar yang disyorkan**:
- **Width**: 1200px - 1920px (landscape)
- **File size**: Di bawah 2MB setiap gambar
- **Aspect ratio**: 16:9 atau 4:3 (landscape lebih cantik)

**Tips untuk gambar berkualiti**:
- 📸 Tangkap dalam cahaya terang (siang hari)
- 🏗️ Angle yang tunjukkan keseluruhan bangunan
- ✨ Before & After (untuk renovasi)
- 📐 Fokus pada details (tiles, finishing, workmanship)

### **Cara Upload**

**Method 1: Drag & Drop (Paling Mudah)**
1. Buka folder kategori (contoh: `Rumah Baru`)
2. Drag gambar dari komputer ke browser
3. Tunggu upload selesai (ada progress bar)

**Method 2: Upload Button**
1. Masuk ke folder kategori
2. Klik **"New"** → **"File upload"**
3. Pilih gambar (boleh select banyak)
4. Klik **"Open"**

### **Nama Gambar (Best Practice)**

Guna nama yang jelas:

❌ **JANGAN**: `IMG_1234.jpg`, `DSC_5678.jpg`

✅ **BAGUS**:
- `rumah-banglo-cyberjaya-2024.jpg`
- `renovasi-dapur-shah-alam.jpg`
- `kedai-pejabat-bangi-front.jpg`
- `jalan-longkang-semenyih-progress.jpg`

**Format nama**: `[jenis]-[lokasi]-[tahun/detail].jpg`

---

## 🔗 Langkah 3: Dapatkan Link Gambar

### **Untuk SETIAP Gambar**

1. **Right-click** pada gambar
2. Klik **"Get link"** (atau **"Dapatkan pautan"**)
3. Pastikan setting: **"Anyone with the link"** ✅
4. Klik **"Copy link"**

### **Convert Link ke Format Direct Image**

**Link dari Google Drive** (format share):
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing
```

**Extract FILE_ID sahaja** (bahagian tengah):
```
1a2b3c4d5e6f7g8h9i0j
```

**Format untuk website** (direct image):
```
https://drive.google.com/uc?export=view&id=1a2b3c4d5e6f7g8h9i0j
```

### **Cara Convert (Simple)**

1. Copy link dari Google Drive
2. Cari bahagian `/d/` dan `/view`
3. Ambil text di tengah (FILE_ID)
4. Guna format: `https://drive.google.com/uc?export=view&id=[FILE_ID]`

**Contoh**:

Original:
```
https://drive.google.com/file/d/1XyZ9AbC8DeF7GhI6JkL5MnO/view?usp=sharing
```

Extract FILE_ID:
```
1XyZ9AbC8DeF7GhI6JkL5MnO
```

Direct Link:
```
https://drive.google.com/uc?export=view&id=1XyZ9AbC8DeF7GhI6JkL5MnO
```

---

## 📝 Langkah 4: Update Website (projects.json)

### **Edit projects.json di GitHub**

1. Pergi ke: https://github.com/adamsalehuddin91/contractor-website
2. Klik file: `projects.json`
3. Klik button **"Edit"** (icon pensil)
4. Tambah atau edit projek

### **Format Projek (Template)**

**🆕 Format Baru - Multiple Images & Videos (Disyorkan)**

```json
{
  "id": 10,
  "title": "Rumah Banglo Mewah 2 Tingkat",
  "category": "Rumah Baru",
  "location": "Cyberjaya, Selangor",
  "year": "2024",
  "images": [
    "https://drive.google.com/uc?export=view&id=FILE_ID_1",
    "https://drive.google.com/uc?export=view&id=FILE_ID_2",
    "https://drive.google.com/uc?export=view&id=FILE_ID_3",
    "https://drive.google.com/uc?export=view&id=FILE_ID_4"
  ],
  "videos": [
    "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  ],
  "description": "Pembinaan rumah banglo mewah 2 tingkat dengan 5 bilik tidur, 4 bilik air, swimming pool dan landscaping premium.",
  "budget": "RM 850,000",
  "duration": "8 bulan",
  "features": [
    "5 bilik tidur dengan ensuite",
    "Swimming pool & landscaping",
    "Smart home automation",
    "Premium tiles & finishes"
  ]
}
```

**📌 Format Lama - Single Image (Masih Boleh Guna)**

```json
{
  "id": 11,
  "title": "Renovasi Dapur Modern",
  "category": "Renovasi",
  "location": "Shah Alam, Selangor",
  "year": "2024",
  "image": "https://drive.google.com/uc?export=view&id=YOUR_FILE_ID_HERE",
  "description": "Renovasi dapur dengan kabinet custom dan island counter.",
  "budget": "RM 45,000",
  "duration": "1 bulan",
  "features": [
    "Kabinet custom premium",
    "Island counter dengan sink",
    "Lampu LED hidden"
  ]
}
```

### **Field Explanation**

| Field | Keterangan | Contoh |
|-------|------------|--------|
| `id` | Nombor unik (auto increment) | `10`, `11`, `12` |
| `title` | Nama projek (menarik) | `"Rumah Banglo Mewah 2 Tingkat"` |
| `category` | Kategori (4 pilihan sahaja) | `"Rumah Baru"`, `"Renovasi"`, `"Komersial"`, `"Infrastruktur"` |
| `location` | Lokasi projek | `"Cyberjaya, Selangor"` |
| `year` | Tahun siap | `"2024"` |
| `image` | **OLD:** Single image link | `"https://drive.google.com/uc?export=view&id=..."` |
| `images` | **NEW:** Array of multiple images (3-6 disyorkan) | `["link1", "link2", "link3"]` |
| `videos` | **NEW:** Array of YouTube/Google Drive videos | `["youtube_embed_link"]` |
| `description` | Penerangan lengkap (2-3 ayat) | `"Pembinaan rumah..."` |
| `budget` | Kos projek (approximate) | `"RM 850,000"` |
| `duration` | Masa siap | `"8 bulan"` |
| `features` | 3-4 features utama (array) | `["Feature 1", "Feature 2"]` |

---

## 📹 Cara Tambah Video

### **Option 1: YouTube (Paling Mudah - DISYORKAN)**

1. **Upload video ke YouTube**:
   - Pergi ke: https://studio.youtube.com
   - Click **"Create"** → **"Upload videos"**
   - Upload video projek anda
   - Set visibility: **Unlisted** (jika tak nak orang lain cari)

2. **Dapatkan Embed Link**:
   - Buka video di YouTube
   - Click **"Share"** → **"Embed"**
   - Copy URL dalam `src="..."`
   - Format: `https://www.youtube.com/embed/VIDEO_ID`

3. **Tambah ke projects.json**:
```json
"videos": [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/anotherVIDEO"
]
```

### **Option 2: Google Drive Video**

1. **Upload video ke Google Drive**
2. **Set sharing**: "Anyone with the link"
3. **Get link** dan extract FILE_ID
4. **Format untuk embed**:
```json
"videos": [
  "https://drive.google.com/file/d/YOUR_FILE_ID/preview"
]
```

**⚠️ Nota**: YouTube lebih pantas untuk streaming video!

---

## 🎨 Tips Multiple Images

### **Berapa Banyak Gambar Patut Ada?**

- **Minimum**: 1 gambar (still works)
- **Disyorkan**: 3-5 gambar per projek
- **Maximum**: 10 gambar (jangan terlalu banyak, slow loading)

### **Urutan Gambar (Recommended Order)**

1. **Gambar 1**: View depan/exterior (hero shot)
2. **Gambar 2**: Living room/ruang utama
3. **Gambar 3**: Kitchen/dapur
4. **Gambar 4**: Bedroom/master room
5. **Gambar 5**: Bathroom/detail finishing

**Contoh**:
```json
"images": [
  "gdrive-link-front-view.jpg",    // View depan
  "gdrive-link-living-room.jpg",   // Ruang tamu
  "gdrive-link-kitchen.jpg",       // Dapur
  "gdrive-link-bedroom.jpg",       // Bilik tidur
  "gdrive-link-bathroom.jpg"       // Bilik air
]
```

### **Kelebihan Multiple Images + Videos**

✅ **Automatic Image Slider** - Pelanggan boleh swipe/click
✅ **Professional Presentation** - Nampak lebih complete
✅ **Better Engagement** - Pelanggan stay lama di website
✅ **Show Before/After** - Untuk projek renovasi
✅ **Video Walkthrough** - Tunjuk detail pembinaan

### **Kategori Yang Sah (Pilih 1)**

1. `"Rumah Baru"` - New house construction
2. `"Renovasi"` - Renovation & extension
3. `"Komersial"` - Commercial buildings (shop, office, warehouse)
4. `"Infrastruktur"` - Civil works (road, drainage, etc)

### **Commit Changes**

1. Scroll ke bawah
2. Tulis commit message: `"Tambah projek: [Nama Projek]"`
3. Klik **"Commit changes"**
4. Website auto-update dalam 1-2 minit! ✅

---

## 🔄 Update Gambar Existing Project

### **Cara Tukar Gambar**

1. Upload gambar baru ke Google Drive
2. Dapatkan FILE_ID gambar baru
3. Edit `projects.json` di GitHub
4. Cari projek yang nak tukar
5. Replace `image` URL dengan direct link baru
6. Commit changes

**Contoh**:

Before:
```json
"image": "https://drive.google.com/uc?export=view&id=OLD_FILE_ID"
```

After:
```json
"image": "https://drive.google.com/uc?export=view&id=NEW_FILE_ID"
```

---

## 🛠️ Tools: Link Converter (Optional)

### **Automatic Converter Tool**

Untuk senangkan kerja, boleh guna tool ini:

**Online Converter**: https://sites.google.com/site/gdocs2direct/

**Cara guna**:
1. Paste Google Drive share link
2. Click **"Create Direct Link"**
3. Copy direct link
4. Paste ke `projects.json`

### **Excel Formula (Untuk Bulk)**

Kalau ada banyak gambar, guna Excel:

```excel
=CONCATENATE("https://drive.google.com/uc?export=view&id=",
  MID(A1, FIND("/d/", A1)+3, FIND("/view", A1)-FIND("/d/", A1)-3))
```

Column A: Google Drive share links
Result: Direct image links

---

## ✅ Testing & Verification

### **Test Gambar Loading**

1. Buka direct link di browser baru
2. Gambar patut display terus (bukan Google Drive page)
3. Kalau tak dapat, check:
   - ✅ Link sharing set to "Anyone with the link"
   - ✅ Format URL betul
   - ✅ FILE_ID extracted correctly

### **Test Website Gallery**

1. Pergi ke: https://binaanteguh.pages.dev/gallery.html
2. Check projek baru muncul
3. Test filter buttons (All, Rumah Baru, Renovasi, etc)
4. Click projek card - details patut display
5. Test mobile view (resize browser)

---

## 📋 Quick Reference Checklist

### **Untuk Setiap Projek Baru (Single Image)**

- [ ] Upload gambar ke Google Drive (folder kategori betul)
- [ ] Set sharing: "Anyone with the link"
- [ ] Copy share link
- [ ] Extract FILE_ID
- [ ] Create direct link: `https://drive.google.com/uc?export=view&id=[FILE_ID]`
- [ ] Edit `projects.json` di GitHub
- [ ] Add projek details (title, location, budget, etc)
- [ ] Paste direct link ke `image` field
- [ ] Commit changes
- [ ] Wait 1-2 minit
- [ ] Test di website: https://binaanteguh.pages.dev/gallery.html

### **🆕 Untuk Projek dengan Multiple Images + Video**

- [ ] Upload 3-5 gambar ke Google Drive (folder kategori betul)
- [ ] Set sharing untuk semua gambar: "Anyone with the link"
- [ ] Dapatkan FILE_ID untuk setiap gambar
- [ ] Create direct links untuk semua gambar
- [ ] (Optional) Upload video ke YouTube, dapatkan embed link
- [ ] Edit `projects.json` di GitHub
- [ ] Guna format baru dengan `images` array (bukan `image`)
- [ ] Tambah `videos` array jika ada video
- [ ] Commit changes: "Update projek [nama] - tambah 5 gambar"
- [ ] Wait 1-2 minit
- [ ] Test di website - click projek untuk lihat slider
- [ ] Test keyboard navigation (← → arrows)
- [ ] Test mobile swipe gestures

---

## 🚨 Common Issues & Solutions

### **Problem 1: Gambar tak display**

**Symptoms**: Broken image icon atau Google Drive login page

**Solutions**:
- ✅ Check sharing setting: Must be "Anyone with the link"
- ✅ Verify direct link format: `https://drive.google.com/uc?export=view&id=...`
- ✅ Test link di Incognito window (Private browsing)

### **Problem 2: Projek tak muncul di gallery**

**Solutions**:
- ✅ Check `category` spelling (must exact match)
- ✅ Valid categories: `"Rumah Baru"`, `"Renovasi"`, `"Komersial"`, `"Infrastruktur"`
- ✅ Check JSON syntax (comma, brackets, quotes)
- ✅ Wait 2-3 minit after commit

### **Problem 3: Website tak update**

**Solutions**:
- ✅ Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
- ✅ Clear browser cache
- ✅ Wait 2-3 minit for Cloudflare deployment
- ✅ Check GitHub commit successful

### **Problem 4: Gambar loading slow**

**Solutions**:
- ✅ Compress gambar (gunakan TinyPNG.com)
- ✅ Resize gambar to 1920px max width
- ✅ Convert to JPG (smaller file size)

---

## 💡 Pro Tips

### **Untuk Gambar Berkualiti**

1. **Golden Hour Photography**: Ambil gambar waktu pagi (7-9am) atau petang (5-7pm)
2. **Multiple Angles**: 3-5 gambar per projek (front, side, interior, details)
3. **Before & After**: Sangat powerful untuk renovasi
4. **Progress Shots**: Tunjukkan process (foundation → structure → finishing)
5. **People in Photo**: Tambah worker or client for scale and trust

### **Untuk Organization**

1. **Consistent Naming**: Guna format yang sama untuk semua
2. **Date in Filename**: Senang track bila ambil gambar
3. **Backup Original**: Simpan high-res version dalam folder lain
4. **Monthly Folders**: Organize by month uploaded

### **Untuk SEO & Marketing**

1. **Descriptive Titles**: Guna keyword yang customer cari
2. **Location in Description**: Bantu local SEO
3. **Budget Range**: Transparensi bina trust
4. **Features List**: Highlight selling points
5. **Update Regular**: Fresh content = better ranking

---

## 📞 Need Help?

Kalau ada masalah atau tak pasti:

1. **WhatsApp Developer**: [Your Number]
2. **Email Support**: tokwi@swiftapp.dev
3. **Video Tutorial**: [Link kalau ada]

---

## 🎉 You're Ready!

Sekarang anda boleh:
- ✅ Upload gambar projek sendiri
- ✅ Update gallery tanpa developer
- ✅ Add projek baru dalam 5 minit
- ✅ Maintain website independently

**Happy uploading! 🚀**

---

*Panduan ini dicipta oleh Tokwi v4.0 - SwiftApp Development*
*Last updated: 28 Oktober 2025*
