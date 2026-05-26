# ELD Diagnostics – Report Server

A lightweight Node.js server that serves lab reports matching the original ELD Diagnostics format. Each QR code on the printed reports links to this server, which renders the patient's data in a pixel-accurate HTML replica of the original report.

---

## 🚀 Quick Start (Local)

```bash
npm install
npm start
# Server runs at http://localhost:3000
```

Test a report:
```
http://localhost:3000/SLIMS.API/api/public/DownloadReport?labId=1024840180&password=ABC
```

---

## ☁️ Deploy to Render (Free, Public URL in 2 minutes)

1. Push this folder to a GitHub repo
2. Go to https://render.com → New → Web Service
3. Connect your GitHub repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** Node
5. Click **Deploy**
6. You get a URL like: `https://eld-reports.onrender.com`

---

## ☁️ Deploy to Railway (Free)

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

---

## ☁️ Deploy to Fly.io (Free)

```bash
npm install -g flyctl
flyctl launch
flyctl deploy
```

---

## 🔗 After Deploying

Once you have a public URL (e.g. `https://eld-reports.onrender.com`), regenerate the QR codes in the PDFs to point to:

```
https://eld-reports.onrender.com/SLIMS.API/api/public/DownloadReport?labId=<ENDO_NO>&password=<PASSWORD>
```

Each patient has their own `labId` — see the table in server.js.

---

## 📋 Patient Lab IDs

| # | Patient | Lab ID |
|---|---------|--------|
| 01 | MR. DINESH AGARWAL | 1024840180 |
| 02 | MR. KAPIL VERMA | 1024820874 |
| 03 | MS. PRIYA GUPTA | 1024867896 |
| 04 | MR. DINESH SHARMA | 1024837713 |
| 05 | MS. ANITA MEENA | 1024837207 |
| 06 | MS. REKHA JOSHI | 1024822145 |
| 07 | MS. USHA VERMA | 1024867385 |
| 08 | MR. RAKESH YADAV | 1024859784 |
| 09 | MR. DINESH SHARMA | 1024850702 |
| 10 | MS. SUNITA SHARMA | 1024849284 |
