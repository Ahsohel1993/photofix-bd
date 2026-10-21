require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true });
const upload = multer({ dest: path.join(__dirname, 'uploads'), limits: { fileSize: 12 * 1024 * 1024 } });
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/status', (req, res) => res.json({ aiReady: Boolean(process.env.REMOVE_BG_API_KEY && !process.env.REMOVE_BG_API_KEY.includes('PASTE_')) }));
app.post('/api/remove-background', upload.single('image'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'আগে একটি ছবি নির্বাচন করুন।' });
  const key = process.env.REMOVE_BG_API_KEY;
  if (!key || key.includes('PASTE_')) {
    fs.unlink(req.file.path, () => {});
    return res.status(503).json({ error: 'AI সুবিধা চালু হয়নি। .env ফাইলে Remove.bg API key যোগ করুন।' });
  }
  try {
    const form = new FormData();
    form.append('image_file', new Blob([fs.readFileSync(req.file.path)]), req.file.originalname || 'photo.jpg');
    form.append('size', 'auto');
    const response = await fetch('https://api.remove.bg/v1.0/removebg', { method: 'POST', headers: { 'X-Api-Key': key }, body: form });
    const buffer = Buffer.from(await response.arrayBuffer());
    if (!response.ok) {
      let message = 'AI ব্যাকগ্রাউন্ড রিমুভ করা যায়নি। API key ও usage limit পরীক্ষা করুন।';
      try { const j = JSON.parse(buffer.toString()); message = j.errors?.[0]?.title || message; } catch (_) {}
      return res.status(response.status).json({ error: message });
    }
    res.set('Content-Type', 'image/png');
    res.set('Cache-Control', 'no-store');
    res.send(buffer);
  } catch (e) {
    res.status(500).json({ error: 'AI সার্ভারে সংযোগ করা যায়নি। ইন্টারনেট ও API key পরীক্ষা করুন।' });
  } finally { fs.unlink(req.file.path, () => {}); }
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`PhotoFix BD চলছে: http://localhost:${port}`));
