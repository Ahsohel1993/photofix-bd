PhotoFix BD — প্রথম সংস্করণ (v1.0)
=================================

এই প্যাকেজটি Render-এ প্রকাশের জন্য প্রস্তুত করা হয়েছে। এটি নিজে থেকে অনলাইনে প্রকাশ হয় না; আপনার GitHub ও Render অ্যাকাউন্টে সংযোগ করে Deploy করতে হবে।

ফিচার
- বাংলা, মোবাইল/কম্পিউটার উপযোগী responsive ইন্টারফেস
- ছবি আপলোড (সর্বোচ্চ ১২ MB)
- 35x45 mm, 2x2 inch এবং কাস্টম মাপ
- সাদা, নীল ও হালকা নীল ব্যাকগ্রাউন্ডের বিকল্প
- brightness, contrast, saturation
- JPEG/PNG ডাউনলোড
- A4 বা 4x6 পেপারে একাধিক কপি সাজানো
- Remove.bg API দিয়ে AI background removal-এর সার্ভার সংযোগ
- /privacy.html-এ প্রাথমিক গোপনীয়তা নীতি
- render.yaml-এ Render deploy configuration

কম্পিউটারে চালানোর নিয়ম (Windows)
1. Node.js LTS ইনস্টল করুন: https://nodejs.org/
2. ZIP ফাইলটি Extract করুন।
3. photofix-bd ফোল্ডার খুলুন। ফোল্ডারের ঠিকানার ঘরে cmd লিখে Enter চাপুন।
4. টার্মিনালে চালান: npm install
5. .env.example ফাইলটির কপি করে নাম দিন .env
6. AI দরকার হলে https://www.remove.bg/api থেকে API key নিন এবং .env ফাইলে REMOVE_BG_API_KEY= এর পরে key বসান। key-টি কারও সঙ্গে শেয়ার করবেন না।
7. চালান: npm start
8. ব্রাউজারে খুলুন: http://localhost:3000
9. বন্ধ করতে টার্মিনালে Ctrl+C চাপুন।

অনলাইনে প্রকাশ (Render + GitHub)
1. ZIP Extract করুন। GitHub-এ নতুন repository তৈরি করুন।
2. photofix-bd ফোল্ডারের ভেতরের ফাইলগুলো repository-র root-এ আপলোড করুন (ফোল্ডারটিকে আরেকটি সাবফোল্ডার হিসেবে নয়)।
3. .env, uploads/ বা API key GitHub-এ আপলোড করবেন না. .gitignore-এ .env ও uploads/ উপেক্ষা করা আছে।
4. https://render.com এ লগইন করে New > Blueprint নির্বাচন করুন এবং GitHub repository সংযুক্ত করুন। Render render.yaml পড়বে। বিকল্পভাবে New > Web Service বেছে Build Command: npm install এবং Start Command: npm start দিন।
5. Render Dashboard > Environment-এ REMOVE_BG_API_KEY যোগ করে API key দিন। AI সুবিধা এখনই চালু না করতে চাইলে key বাদ রাখতে পারেন।
6. Deploy করুন। Render আপনাকে public URL দেবে; সেই URL মোবাইল ও কম্পিউটারের ব্রাউজারে খুলে পরীক্ষা করুন।

গুরুত্বপূর্ণ সীমাবদ্ধতা ও নিরাপত্তা
- Render-এর free plan, যদি উপলভ্য থাকে, সীমা/স্লিপ/কোটার অধীন এবং নিয়ম পরিবর্তন হতে পারে। বর্তমান শর্ত যাচাই করুন।
- AI background removal-এর জন্য Remove.bg API key ও তাদের usage quota/pricing প্রযোজ্য; এটি সম্পূর্ণ বিনামূল্যে হবে এমন নিশ্চয়তা নেই।
- API key কখনো HTML/JavaScript বা GitHub-এ রাখবেন না; শুধু Render Environment Variables বা স্থানীয় .env-এ রাখুন।
- AI ব্যবহার করলে ছবি তৃতীয় পক্ষের AI সেবায় পাঠানো হয়। গ্রাহকের সম্মতি নিন এবং privacy.html প্রকাশের আগে আপনার ব্যবসার যোগাযোগের তথ্য ও প্রকৃত প্রক্রিয়া অনুযায়ী হালনাগাদ করুন।
- সাধারণ এডিটিং ব্রাউজারেই হয়; AI অপসারণ ছাড়া কেবল রং নির্বাচন করলেই মূল ছবির ব্যাকগ্রাউন্ড আলাদা হয়ে যাবে না। AI ফলাফল যাচাই করুন।
- এই MVP-তে অ্যাকাউন্ট, পেমেন্ট, অর্ডার, অ্যাডমিন প্যানেল, রেট-লিমিটিং বা বড় ট্রাফিকের জন্য স্কেলিং নেই। প্রকাশ্যে প্রচারের আগে অপব্যবহার প্রতিরোধ ও খরচের সীমা যোগ করার কথা বিবেচনা করুন।
- সরকারি আবেদন জমা দেওয়ার আগে সংশ্লিষ্ট প্রতিষ্ঠানের নির্দিষ্ট ছবির মাপ ও নিয়ম যাচাই করুন।
