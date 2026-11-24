# পণ্য ও প্রকাশনা অডিট রিপোর্ট

**তারিখ:** ২৩ নভেম্বর ২০২৬  
**পর্যালোচনার পরিধি (হালনাগাদ):** ৩০টি product folder; ১২০ DOCX, ১২৬ PDF, ৪৮ XLSX; ৩৬ ZIP-এর CRC ও archive contents; স্থানীয় site assets/metadata; browser-এ দেখা live landing page, Gumroad products, Pinterest ও X।  
**সীমাবদ্ধতা:** LinkedIn activity page sign-in browser-এ পড়া যায়নি; Gumroad buyer checkout ও ক্রেতার download experience end-to-end কেনাকাটা ছাড়া যাচাই করা হয়নি। DOCX-এর text/structure এবং Word থেকে export করা ১২০টি read-only PDF render দিয়ে paired layout পরীক্ষা করা হয়েছে। ২১টি Style 1 DOCX Word-এর normal open-এ corruption warning দিয়েছে; OpenAndRepair দিয়ে ২১টিই render হয়েছে।

## সারাংশ

- **Excel/Sheets:** ৪৮ ফাইলে মাত্র ৯টি unique model design; ১৬ workbook Excel-এ open fail, ২১০ formula runtime-unverified; Habit Tracker, Podcast, Creator Sponsorship, Real Estate ROI, Color Tokens ও Cap Table-এর workbook mapping mismatch ধরা পড়েছে।

> এই সারাংশটি প্রাথমিক স্থানীয় অডিটের ফল; পরের “বিস্তারিত নথি ও লাইভ-প্ল্যাটফর্ম অডিট” অংশে নতুন লাইভ ফল ও নথি-পরীক্ষা যুক্ত হয়েছে এবং আগের snapshot-ভিত্তিক অনুমান সংশোধন করা হয়েছে।

- ৩০টি পণ্য ডিরেক্টরির প্রত্যেকটিতে অন্তত একটি ZIP আছে; `extra-pins/` আলাদা সহায়ক ফোল্ডার।
- ২৭টি পণ্যের Gumroad cover আছে; ৩টি পণ্যের cover নেই: AuraRing, Nova SaaS, Small Business Landing Kit। Pinterest pin-ও এই ৩টিতে নেই; Wedding Budget Simulator-এরও আলাদা pin নেই।
- ওয়েবসাইটের ৯টি পণ্য-ছবির path ভাঙা। এর মধ্যে পাঁচটি বর্তমান পণ্যের কভার ফাইল অনুপস্থিত; ছয়টি পুরনো slug আর বর্তমান folder নামের সঙ্গে মেলে না।
- ২টি ওয়েব-থিম ZIP-এ বিক্রয়যোগ্য template source নেই (Apex Wealth, Chrono Portfolio); এগুলোতে মূলত Access/লাইসেন্স/প্রিভিউ-চিত্র আছে।
- ২৬টি `Access-Your-Template.html`-এর মধ্যে মাত্র ১০টিতে সরাসরি Canva design link আছে; সেই ১০টির চারটি জোড়ায় একই লিংক পুনর্ব্যবহৃত।
- 5-in-1 bundle ZIP-গুলোর কাঠামো মোটামুটি একরকম: ৫ DOCX, ৫ fillable PDF, XLSX, Access HTML, license. তবে Canva-এর edit-copy URL না থাকলে “Canva template” হিসেবে কীভাবে ব্যবহার করতে হবে তা ক্রেতাকে স্পষ্ট করে দিতে হবে।
- Gumroad cover-গুলোর 16:9 (1280×720) ও 3:2 (1200×800) মাপ মিশ্র; Pinterest pin-গুলোর মাপ 1000×1500।

## পণ্যভিত্তিক ফলাফল

| পণ্য | স্থানীয় প্যাকেজ/ভিজ্যুয়াল যাচাই | ফলাফল ও করণীয় |
|---|---|---|
| 75-Day Transformation Blueprint | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্রকাশনার উপকরণ উপস্থিত। Canva edit-copy link নেই—Canva delivery দাবি থাকলে যোগ/ব্যাখ্যা করুন। |
| Apex Wealth Landing Theme | ZIP-এ Access, লাইসেন্স, cover ও preview slides | **ব্লকার:** HTML/CSS/JS source ZIP-এ নেই; Access বোতাম `apex-demo.html`-এ যায়, যা ক্রেতার ZIP-এ নেই। পূর্ণ theme source ও offline নির্দেশিকা যোগ করুন। |
| AuraRing Landing Page | HTML/CSS/JS এবং SVG asset-সহ ZIP | সোর্স প্যাকেজ আছে; কিন্তু `gumroad-cover.png`, `cover-v2.png`, `pinterest-pin.png` অনুপস্থিত—সাইটে কার্ড/SEO image ভাঙবে। |
| Brand Bible Guidelines Deck | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Brand Guidelines 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; root-এ আলাদা `Commercial-License.txt` নেই—ZIP-এর license file-টি খুলে ব্যবহারের অধিকার ও শর্ত স্পষ্ট কিনা নিশ্চিত করুন। |
| Chrono Developer Portfolio Theme | ZIP-এ Access, লাইসেন্স, cover ও preview slides | **ব্লকার:** website/theme source code ZIP-এ নেই। পূর্ণ source, assets ও setup guide যোগ করুন। |
| Client Pipeline 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | Canva link আছে, কিন্তু Freelance Client Proposal-এর সঙ্গেও একই link—দুইটি আলাদা design হওয়ার কথা হলে সঠিক link বসান। |
| Course Master Presentation Deck | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Creator Sponsorship Media Kit | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Executive ATS Resume | PDF/preview-সহ ZIP; cover ও pin আছে | Canva link আছে, কিন্তু Executive Resume 5-in-1-এর সঙ্গেও একই link—সঠিক design mapping যাচাই করুন। Gumroad snapshot থাকলে attached file/cover readback করুন। |
| Executive Resume 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | Executive ATS Resume-এর Canva link-এর সঙ্গে একই; SKU/design overlap আছে কিনা যাচাই করুন। |
| Fitness Protocol 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Founder Pitch 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | Startup Pitch Deck-এর সঙ্গে একই Canva link—আলাদা পণ্য হলে ঠিক লিংক নির্ধারণ করুন। |
| Freelance Client Proposal | Agreement PDF/preview-সহ ZIP; cover ও pin আছে | Client Pipeline-এর সঙ্গে একই Canva link। Gumroad JSON snapshot-এ `files: []`, `covers: []`, `thumbnail_url: null` দেখা যায়—Gumroad-এ বর্তমান attachment/cover dashboard থেকে নিশ্চিত করুন। |
| Lumina DTC E-Commerce | HTML/CSS/JS ও license-সহ ZIP; cover ও pin আছে | Source আছে; buyer-facing `Access-Your-Template.html`/setup guide নেই—ইনস্টল/কাস্টমাইজ নির্দেশিকা যোগ করুন। |
| Masterclass Deck 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Minimalist Habit Tracker | PDF/preview-সহ ZIP; cover ও pin আছে | Canva URL আছে। Gumroad JSON snapshot-এ `files: []`, `covers: []`, `thumbnail_url: null`—বর্তমান attachment/cover নিশ্চিত করুন। |
| Monogram Wedding Stationery Suite | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Nova SaaS Theme | ZIP-এ index, README ও license | Source ZIP আছে; `gumroad-cover.png`, `cover-v2.png`, `pinterest-pin.png` অনুপস্থিত—কার্ডের image ও পিন assets যোগ করুন। |
| Podcast Launch Production Planner | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Real Estate Marketing Kit | PDF/preview-সহ ZIP; cover ও pin আছে | Canva URL আছে। Batch listing-এ Gumroad destination ও image URL মিলিয়ে live pin-এর সঙ্গে নিশ্চিত করুন। |
| Small Business Landing Kit | ZIP-এ index, README ও license | Source ZIP আছে; Gumroad cover ও Pinterest pin অনুপস্থিত। |
| Social Media Carousel Kit | PDF/preview/video assets-সহ ZIP; cover ও pin আছে | Canva URL আছে, কিন্তু Founder Pitch/Startup নয়—Viral Carousel 5-in-1-এর সঙ্গেও একই URL; নির্দিষ্ট carousel design কিনা নিশ্চিত করুন। |
| Solopreneur CRM Pipeline | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Startup Pitch Deck | PDF/preview-সহ ZIP; cover ও pin আছে | Founder Pitch 5-in-1-এর সঙ্গে একই Canva URL—সঠিক product-to-design mapping নিশ্চিত করুন। |
| Viral Carousel 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | Social Media Carousel Kit-এর সঙ্গে একই Canva link—আলাদা design হওয়ার কথা হলে ঠিক লিংক দিন। |
| Wealth Engine 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Wealth Matrix Finance Tracker | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |
| Wedding Budget Simulator | 5-style DOCX/PDF/XLSX ZIP; Gumroad cover আছে | Pinterest pin অনুপস্থিত। `extra-pins/wed_cover.png` আছে, কিন্তু সেটি pin-এর বদলি কিনা মাপ/লেআউট দেখে নিশ্চিত করতে হবে। |
| Wedding Suite 5-in-1 | 5-style DOCX/PDF/XLSX ZIP; cover ও pin আছে | প্যাকেজ আছে; Canva সরাসরি লিংক নেই। |

## ওয়েবসাইট ও সোশ্যাল-প্রকাশনা সমস্যা

1. `index.html` এবং `sitemap.xml`-এ ভাঙা image path: `products/auraring-landing-page/cover-v2.png`, `products/nova-saas-theme/cover-v2.png`, `products/smallbiz-landing-kit/cover-v2.png` (ফাইল তৈরি/পথ সংশোধন প্রয়োজন); `products/the-estate/cover-v2.png`, `the-pitch`, `the-close`, `the-creator`, `habit-tracker`, `executive-resume` (বর্তমান folder slug-এ map করুন)।
2. JSON-LD-তে একাধিক পণ্যের `aggregateRating` ও review count আছে। এগুলো বাস্তব verified review না হলে সরিয়ে দিন; structured data-তে কাল্পনিক rating প্রকাশ করবেন না।
3. SEO/schema ও sitemap-এ product count ৩০ বলা হয়েছে—বর্তমান ৩০টি বিক্রয়যোগ্য folder-র সঙ্গে প্রতিটি নাম, URL, মূল্য, image, SKU মিলিয়ে একবার পুনরায় sync করুন।
4. `batch3_gumroad_roster.json` এবং Pinterest queue-তে ১০টি item আছে; queue-র Gumroad URL-গুলো `destination_url`-এর সঙ্গে মিলছে বলে মনে হলেও live pin destination ও creative Pinterest-এ readback করা হয়নি।
5. Pinterest pin assets আছে, কিন্তু X/Twitter/LinkedIn-এর জন্য পণ্যভিত্তিক square/landscape creative বা post copy নেই। LinkedIn carousel-কে platform-specific ভাবে export করার নির্দেশও নেই।
6. Gumroad cover 16:9 বনাম 3:2 মিশ্র। এক মাপের master বানিয়ে সব cover-এ একই crop-safe title placement নিশ্চিত করুন।

## অগ্রাধিকারভিত্তিক করণীয়

### P0 — বিক্রি/ক্রেতার অভিজ্ঞতার ব্লকার

- Apex Wealth ও Chrono Portfolio ZIP-এ পূর্ণ deliverable source code, assets, README/setup instructions যোগ করুন; Access HTML-এর broken/local demo link সরান বা package-এ অন্তর্ভুক্ত করুন।
- Local Gumroad snapshot-কে live attachment status হিসেবে ধরবেন না; seller dashboard-এ ৩০টি published item ও Content tab-এর files পুনরায় মিলিয়ে buyer download visibility নিশ্চিত করুন।
- Canva URL-গুলো ৪টি duplicate pair-এ যাচাই করুন: Client Pipeline ↔ Freelance Proposal; Executive ATS ↔ Executive Resume 5-in-1; Founder Pitch ↔ Startup Pitch; Social Media Carousel ↔ Viral Carousel. ভুল হলে আলাদা URL বসান।

### P1 — সাইটে ভাঙা media/SEO

- ৯টি missing path ঠিক করুন: তিনটি বাস্তব cover তৈরি/যোগ করুন, এবং ছয়টি অবৈধ/পুরনো slug-এর JSON-LD/sitemap mapping ঠিক করুন (পুরনো alias ছয়টি; AuraRing/Nova/Smallbiz-এর cover অনুপস্থিত—মোট ভাঙা নয়টি path)।
- Schema rating/review values যাচাই করুন; যাচাইযোগ্য source না থাকলে বাদ দিন। Structured data ও sitemap-কে storefront-এর বাস্তব পণ্য তালিকা থেকে তৈরি/সিঙ্ক করুন।
- Wedding Budget-এর Pinterest pin তৈরি করুন; চাইলে তিনটি missing pin ও cover একসঙ্গে সম্পন্ন করুন।

### P2 — ক্রেতাকে কী দিচ্ছেন তা স্পষ্ট করুন

- ২৬টি Access HTML-এর Canva link সরাসরি/স্বতন্ত্র কিনা পরীক্ষা করুন; বাকি পণ্যগুলোতে Canva import বনাম Canva edit-link এর পার্থক্য স্পষ্ট করুন।
- যে পণ্যের listing-এ Canva, Google Sheets, “automated”, commercial/resale rights বা lifetime updates বলা হয়, ZIP-এর আসল ফাইল ও license text দিয়ে প্রতিটি দাবির মিল যাচাই করুন।
- 5-in-1 bundle-এ XLSX আছে; Google Sheets-এর দাবি থাকলে আলাদা Sheets copy-link, import steps ও formula compatibility instructions দিন।
- Gumroad cover size এক করুন; Pinterest-এর বাইরের প্রতিটি channel-এর post image/copy আলাদা প্রস্তুত করুন।

## অডিটের সীমা ও পরের ধাপ

এই প্রাথমিক অংশটি folder/package-level findings ছিল। পরবর্তী সংযোজনে ১২০ DOCX/১২৬ PDF/৪৮ XLSX file-by-file parse, PDF render review, ৪৯৮ formula cell-এর cached value পরীক্ষা, live website/Gumroad/Pinterest/X review করা হয়েছে। DOCX-PDF paired layout যাচাই এখন করা হয়েছে; তবে ২১টি Style 1 DOCX-এ Word-এর OpenAndRepair দরকার হয়েছে। Excel formula recalculation engine ব্যবহার করা হয়নি; LinkedIn activity feed এবং Gumroad buyer checkout-ও পড়া যায়নি।




---

# বিস্তারিত নথি ও লাইভ-প্ল্যাটফর্ম অডিট (সংযোজন)
এই সংযোজনটি আগের প্রাথমিক সারাংশের চেয়ে পরবর্তী সরাসরি যাচাইয়ের ফল। Gumroad-এর স্থানীয় JSON snapshot-এ `files: []` দেখা গেলেও এটি বর্তমান live listing-এর অবস্থা নয়: authenticated seller dashboard-এ ৩০টি published product দেখা গেছে; Content tab-এ বহু পণ্যের ZIP attach করা আছে। তাই পুরনো snapshot-কে live-এ ফাইল অনুপস্থিতির প্রমাণ ধরা যাবে না। প্রতিটি পণ্যের buyer-facing delivery তবু test purchase ছাড়া নিশ্চিত নয়।
## নথির সামগ্রিক স্বাস্থ্য
- **ফাইল:** 120 DOCX, 126 PDF, 48 XLSX; সবগুলো parse হয়েছে, parse error ০। ৩৬টি ZIP-এর CRC test-এ error ০।
- **Word:** ১২০ DOCX-এ কোনো accidental TODO/TBD marker শনাক্ত হয়নি। কিন্তু DOCX-এ semantic Heading styles শূন্য—শিরোনামগুলো visual text হিসেবে আছে, ফলে accessibility/navigation উন্নত করতে Heading 1/2 styles লাগানো দরকার।
- **PDF:** `Fillable.pdf` নামে ১২০ ফাইলের কোনোটিতেই AcroForm input field নেই। এগুলো print/markup করার ফাইল হতে পারে, কিন্তু type-in করা interactive fillable PDF নয়। Listing-এ interactive/fillable বলা থাকলে সেটি ঠিক করুন বা ফর্ম ফিল্ড যোগ করুন।
- **PDF দৃশ্যমানতা:** ১২৬ PDF-এর ১৬৪ পৃষ্ঠা parser-এ পাওয়া গেছে। রেন্ডার হয়েছে ১৬৩ পৃষ্ঠা; wedding-suite-এর Style 2 PDF-তে parser ২ পৃষ্ঠা পেয়েছে, কিন্তু রেন্ডারার ১ পৃষ্ঠা তৈরি করেছে এবং দ্বিতীয় পাতায় মাত্র ৮৮টি extractable character আছে। PDF পুনরায় export করে Acrobat/Chrome-এ পৃষ্ঠা সংখ্যা ও দ্বিতীয় পৃষ্ঠা যাচাই করুন। Freelance proposal PDF-এর তৃতীয় পৃষ্ঠা extract-এ পুরো ফাঁকা (0 characters); এটি সরিয়ে বা কন্টেন্ট যোগ করে export করুন।
- **Excel:** ৪৮ workbook-এ ৪৯৮টি formula cell; মূল ফাইলে ৪৯৮টির cached result ফাঁকা। Excel-এর read-only full recalculation-এ ৩২ workbook/২৮৮ formula খুলে calculate হয়েছে, blank result/error ০। বাকি ১৬ workbook/২১০ formula Excel-এ খুলতে ব্যর্থ হয়েছে (ZIP CRC ঠিক, openpyxl parse করেছে); এগুলোর formula runtime-এ যাচাই করা যায়নি। চারটি Brand Asset Inventory workbook static, formula ০।
- **ZIP:** ৩৬টি archive test হয়েছে; সব archive CRC ঠিক। ZIP-এর ভেতরের product-specific content/Access-link/cover বিষয়গুলো নিচের product table ও আগের product findings-এ আছে।

## ৩০টি পণ্য: delivered Word content ও ফাইল সংখ্যা
| পণ্য folder | Word/PDF/XLSX | DOCX-এ থাকা ৫টি প্রধান নথি/শিরোনাম | নিরীক্ষা নোট |
|---|---:|---|---|
| `75-day-transformation-blueprint` | 5/5/2 | Daily Discipline & Habit Scorecard; 12-Week Athletic Strength & Muscle Split; Calibrated Cutting & Macro Fueling Guide; Zone 2 Endurance & VO2 Max Protocol; Deep Sleep Architecture & Contrast Protocol | নথিগুলো ৫টি visual style নয়, আলাদা companion asset; “5 styles” claim-এর সাথে মিলিয়ে দেখুন |
| `brand-bible-guidelines-deck` | 5/5/2 | Brand Foundation, Core Mission & Tone of Voice; Master Logo Standards, Clearspace & Misuse Rules; Color System, Contrast Ratios & Hierarchy Matrix; Typography Hierarchy & Font Pairing Guidelines; Photography Art Direction & Visual Moodboard | brand identity workbook static; formulas ০ |
| `brand-guidelines-5in1` | 5/5/2 | Nordic Minimalist Tech Brand Guidelines Manual; Old Money Luxury & Editorial Brand Manual; Modern Dark Neo-Brutalist Brand Standards; Bold Typographic Studio Identity Guidelines; Warm Botanical Earthy Lifestyle Identity Book | brand asset workbooks static; formulas ০ |
| `client-pipeline-5in1` | 5/5/2 | High-Ticket Inbound Lead Magnet Architecture; Cold Email & LinkedIn Outbound Prospecting Playbook; Case Study & Social Proof Architecture Deck; Discovery Call Scorecard & Closing Script; Automated Client Referral & Testimonial Engine | ফাইল-গণনা মিলেছে; headings/content parsed |
| `course-master-presentation-deck` | 5/5/2 | Full 25-Slide Webinar Masterclass Presenter Notes; High-Converting Webinar Opt-In Landing Page Copy; 4-Part Pre-Webinar Show-Up Email Sequence; 48-Hour Replay & Cart Close Email Sequence; Complete 6-Module Curriculum Syllabus & Roadmap | ফাইল-গণনা মিলেছে; headings/content parsed |
| `creator-sponsorship-media-kit` | 5/5/2 | 2-Page Creator Media Kit Executive Summary; Creator Sponsorship Rate Card & Package Guide; Cold Pitch Email Sequences for Brand Marketing Leads; Sponsored Content Legal Agreement & Rights Contract; Post-Campaign Analytics & ROI Case Study Deck | ফাইল-গণনা মিলেছে; headings/content parsed |
| `executive-ats-resume` | 5/6/2 | Chief Operating Officer (COO) Executive ATS Resume; Chief Executive Officer (CEO) Institutional Resume; Chief Technology Officer (CTO) Engineering Leadership Resume; Chief Financial Officer (CFO) Capital Management Resume; Executive LinkedIn Profile Optimization & Bio Suite | ৫ম DOCX হলো LinkedIn bio, Resume নয় |
| `executive-resume-5in1` | 5/5/2 | Chief Operating Officer (COO) Operational Scale Resume; VP of Sales & Revenue (CRO) Leadership Resume; VP of Product & Design (CPO) Roadmap Resume; VP of Marketing (CMO) Brand & Performance Resume; Executive Cover Letter & Retained Headhunter Pitch | ৫ম DOCX হলো cover letter, resume নয় |
| `fitness-protocol-5in1` | 5/5/2 | 6-Day Push Pull Legs (PPL) Hypertrophy Program; 5x5 Linear Progression Power Protocol; Clean Bulking & Hypertrophy Nutrition Blueprint; Athletic Mobility & Functional Movement Guide; Desk Worker Posture & Spine Decompression Suite | ফাইল-গণনা মিলেছে; headings/content parsed |
| `founder-pitch-5in1` | 5/5/2 | 15-Slide Early-Stage Venture Seed Pitch Deck; Series A Growth Flywheel & Go-To-Market Engine; Burn Multiple & Capital Efficiency Scorecard; Board of Directors Meeting Deck & Governance Pack; Exit Scenarios & Strategic M&A Valuation Framework | ফাইল-গণনা মিলেছে; headings/content parsed |
| `freelance-client-proposal` | 5/6/2 | High-Ticket Client Proposal & Deliverable Roadmap; Master Services Agreement (MSA) Legal Protection Contract; Scope of Work (SOW) & Change Order Protocol; Value-Based Pricing Calculator & ROI Framing Script; Client Onboarding Questionnaire & Intake Architecture | standalone agreement PDF-এর শেষ পৃষ্ঠা ফাঁকা |
| `masterclass-deck-5in1` | 5/5/2 | The Epiphany Bridge & Origin Story Presentation Script; Dismantling the 3 Core Limiting Beliefs Script; High-Ticket Value Stacking & Offer Presentation; 10-Minute Fast-Action Urgency & Risk Reversal Script; Student Action Workbook & Implementation Exercises | ফাইল-গণনা মিলেছে; headings/content parsed |
| `minimalist-habit-tracker` | 5/6/2 | High-Performance Morning & Evening Routine Manual; 365-Day Atomic Habit Streak & Stacking System; Quarterly OKR Goal Setting & Sprint Architecture; Weekly Executive Review & Reflection Journal; Digital Detox & Focus Architecture Protocol | ফাইল-গণনা মিলেছে; headings/content parsed |
| `monogram-wedding-stationery-suite` | 5/5/2 | Save-the-Date Announcement Suite & Copy Guide; Formal Wedding Invitation Suite & Hosting Etiquette; Reception & Accommodations Details Insert Card; RSVP Response Card & Entree Selection Suite; Day-of Ceremony Program & Dinner Menu Suite | ফাইল-গণনা মিলেছে; headings/content parsed |
| `podcast-launch-production-planner` | 5/5/2 | 8-Week Podcast Launch Production Schedule; Studio Audio Equipment & Recording Pre-Flight Checklist; SEO-Optimized Episode Show Notes & Timestamp Template; VIP Guest Outreach Pitch Emails & Interview Questions; Podcast Sponsorship Rate Card & Host-Read Ad Scripts | ফাইল-গণনা মিলেছে; headings/content parsed |
| `real-estate-marketing-kit` | 5/6/2 | Luxury Property Listing Copywriting & Specs Guide; Open House Signage, Registration & Host Kit; Just Listed & Just Sold Social Media Carousel Pack; Monthly Local Housing Market Update Newsletter; Luxury Home Buyer & Seller Comprehensive Guide | নথিগুলো ৫টি visual style নয়, আলাদা companion asset; “5 styles” claim-এর সাথে মিলিয়ে দেখুন |
| `social-media-carousel-kit` | 5/6/2 | 50 Proven High-Retention Social Media Hook Formulas; Slide-by-Slide Script for 10-Slide Carousels; 5-Frame Instagram & LinkedIn Story Sequence; Content Repurposing & Batching Workflow Manual; Executive Profile Optimization & Conversion Guide | নথিগুলো ৫টি visual style নয়, আলাদা companion asset; “5 styles” claim-এর সাথে মিলিয়ে দেখুন |
| `solopreneur-crm-pipeline` | 5/5/2 | Sales Deal Flow Pipeline Stages & Governance Manual; Lead Qualification Framework (BANT & MEDDPIC Matrix); High-Converting Sales Call Discovery Script; Client Retainer Upsell & Account Expansion Protocol; Lost Deal Post-Mortem & Churn Analysis Template | ফাইল-গণনা মিলেছে; headings/content parsed |
| `startup-pitch-deck` | 5/6/2 | 15-Slide Institutional Seed Investor Pitch Deck; Unit Economics & SaaS Financial Engine; Cap Table Modeling & SAFE Convertible Note Terms; Venture Diligence Data Room & Investor Checklist; Investor Q&A & Objection Handling Battlecard | নথিগুলো ৫টি visual style নয়, আলাদা companion asset; “5 styles” claim-এর সাথে মিলিয়ে দেখুন |
| `viral-carousel-5in1` | 5/5/2 | Tech & SaaS High-Retention Viral Carousel System; Personal Finance & Wealth Growth Carousel System; Fitness, Biohacking & Longevity Carousel System; Creator Economy & Audience Building Carousel System; Deep Work, Productivity & Mindset Carousel System | ফাইল-গণনা মিলেছে; headings/content parsed |
| `wealth-engine-5in1` | 5/5/2 | Institutional Multi-Tier Asset Allocation System; FIRE Safe Withdrawal & Capital Compounding Engine; Tax-Advantaged Retirement & Entity Structuring Manual; Multi-Family Underwriting & Syndication Model; Asymmetric Risk & Cold Storage Vault Architecture | ফাইল-গণনা মিলেছে; headings/content parsed |
| `wealth-matrix-finance-tracker` | 5/5/2 | Zero-Based Monthly Cash Flow & Expense Ledger; Debt Avalanche vs. Snowball Freedom Engine; Liquid Runway & Capital Preservation Protocol; Sinking Funds & Irregular Expense Reserve Schedule; Cash Yield Maximizer & Treasury Ladder Architecture | ফাইল-গণনা মিলেছে; headings/content parsed |
| `wedding-budget-simulator` | 5/5/2 | Wedding Budget Allocation Formula & Percentage Guide; Hidden Wedding Costs & Fee Avoidance Manual; Catering & Bar Package Cost Optimizer; Floral & Decor Budget Maximizer Playbook; Post-Wedding Financial Wrap-Up & Gratuity Protocol | ফাইল-গণনা মিলেছে; headings/content parsed |
| `wedding-suite-5in1` | 5/5/2 | Master 12-Month Wedding Planning Countdown; Minute-by-Minute Wedding Day Production Master Schedule; Vendor Negotiation & Contract Checklist; Seating Chart Matrix & Dietary Restriction Log; Day-Of Emergency Kit & Bridal Survival Protocol | Style 2 Fillable PDF: ২ পৃষ্ঠা parser বনাম ১ পৃষ্ঠা render |
| `apex-wealth-landing-theme` | 0/0/0 | — | Template ZIP; office template নেই; ZIP source/Access link-এর পণ্য-সারাংশ আগের ৩০-পণ্য table-এ আছে |
| `auraring-landing-page` | 0/0/0 | — | HTML/CSS/JS+SVG deliverable; office files নেই; cover/pin missing note আগের table-এ আছে |
| `chrono-developer-portfolio-theme` | 0/0/0 | — | Template ZIP; office template নেই; ZIP source/Access link-এর পণ্য-সারাংশ আগের table-এ আছে |
| `lumina-dtc-ecommerce` | 0/0/0 | — | Web theme package; office files নেই; Gumroad link/presentation আগের product table-এ আছে |
| `nova-saas-theme` | 0/0/0 | — | HTML theme package; office files নেই; missing cover/pin note আগের product table-এ আছে |
| `smallbiz-landing-kit` | 0/0/0 | — | HTML theme package; office files নেই; missing cover/pin note আগের product table-এ আছে |

## প্রতিটি DOCX (১২০টি)
Path product folder-এর relative; chars হলো extracted text length, tables হলো table count. “Title” প্রথম extracted title.
| DOCX path | Title | chars | table | notes |
|---|---|---:|---:|---|
| `75-day-transformation-blueprint\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Daily Discipline & Habit Scorecard | 1859 | 3 | semantic heading style নেই |
| `75-day-transformation-blueprint\01_Microsoft_Word\Style_2_old_money_luxury.docx` | 12-Week Athletic Strength & Muscle Split | 1564 | 3 | semantic heading style নেই |
| `75-day-transformation-blueprint\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Calibrated Cutting & Macro Fueling Guide | 1586 | 3 | semantic heading style নেই |
| `75-day-transformation-blueprint\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Zone 2 Endurance & VO2 Max Protocol | 1625 | 3 | semantic heading style নেই |
| `75-day-transformation-blueprint\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Deep Sleep Architecture & Contrast Protocol | 1793 | 3 | semantic heading style নেই |
| `brand-bible-guidelines-deck\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Brand Foundation, Core Mission & Tone of Voice | 1657 | 3 | semantic heading style নেই; placeholder tokens: placeholder |
| `brand-bible-guidelines-deck\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Master Logo Standards, Clearspace & Misuse Rules | 1580 | 3 | semantic heading style নেই |
| `brand-bible-guidelines-deck\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Color System, Contrast Ratios & Hierarchy Matrix | 1547 | 3 | semantic heading style নেই |
| `brand-bible-guidelines-deck\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Typography Hierarchy & Font Pairing Guidelines | 1688 | 3 | semantic heading style নেই |
| `brand-bible-guidelines-deck\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Photography Art Direction & Visual Moodboard | 1563 | 3 | semantic heading style নেই |
| `brand-guidelines-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Nordic Minimalist Tech Brand Guidelines Manual | 1236 | 3 | semantic heading style নেই |
| `brand-guidelines-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Old Money Luxury & Editorial Brand Manual | 1277 | 3 | semantic heading style নেই |
| `brand-guidelines-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Modern Dark Neo-Brutalist Brand Standards | 1264 | 3 | semantic heading style নেই |
| `brand-guidelines-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Bold Typographic Studio Identity Guidelines | 1294 | 3 | semantic heading style নেই |
| `brand-guidelines-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Warm Botanical Earthy Lifestyle Identity Book | 1221 | 3 | semantic heading style নেই |
| `client-pipeline-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | High-Ticket Inbound Lead Magnet Architecture | 1814 | 3 | semantic heading style নেই |
| `client-pipeline-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Cold Email & LinkedIn Outbound Prospecting Playbook | 1938 | 3 | semantic heading style নেই |
| `client-pipeline-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Case Study & Social Proof Architecture Deck | 1690 | 3 | semantic heading style নেই |
| `client-pipeline-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Discovery Call Scorecard & Closing Script | 1722 | 3 | semantic heading style নেই |
| `client-pipeline-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Automated Client Referral & Testimonial Engine | 1524 | 3 | semantic heading style নেই |
| `course-master-presentation-deck\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Full 25-Slide Webinar Masterclass Presenter Notes | 1647 | 3 | semantic heading style নেই |
| `course-master-presentation-deck\01_Microsoft_Word\Style_2_old_money_luxury.docx` | High-Converting Webinar Opt-In Landing Page Copy | 1686 | 3 | semantic heading style নেই |
| `course-master-presentation-deck\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | 4-Part Pre-Webinar Show-Up Email Sequence | 1588 | 3 | semantic heading style নেই |
| `course-master-presentation-deck\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | 48-Hour Replay & Cart Close Email Sequence | 1545 | 3 | semantic heading style নেই |
| `course-master-presentation-deck\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Complete 6-Module Curriculum Syllabus & Roadmap | 1758 | 3 | semantic heading style নেই |
| `creator-sponsorship-media-kit\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | 2-Page Creator Media Kit Executive Summary | 1739 | 3 | semantic heading style নেই |
| `creator-sponsorship-media-kit\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Creator Sponsorship Rate Card & Package Guide | 1714 | 3 | semantic heading style নেই |
| `creator-sponsorship-media-kit\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Cold Pitch Email Sequences for Brand Marketing Leads | 1657 | 3 | semantic heading style নেই |
| `creator-sponsorship-media-kit\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Sponsored Content Legal Agreement & Rights Contract | 1803 | 3 | semantic heading style নেই |
| `creator-sponsorship-media-kit\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Post-Campaign Analytics & ROI Case Study Deck | 1417 | 3 | semantic heading style নেই |
| `executive-ats-resume\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Chief Operating Officer (COO) Executive ATS Resume | 1724 | 3 | semantic heading style নেই |
| `executive-ats-resume\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Chief Executive Officer (CEO) Institutional Resume | 1372 | 3 | semantic heading style নেই |
| `executive-ats-resume\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Chief Technology Officer (CTO) Engineering Leadership Resume | 1386 | 3 | semantic heading style নেই |
| `executive-ats-resume\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Chief Financial Officer (CFO) Capital Management Resume | 1369 | 3 | semantic heading style নেই |
| `executive-ats-resume\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Executive LinkedIn Profile Optimization & Bio Suite | 1633 | 3 | semantic heading style নেই |
| `executive-resume-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Chief Operating Officer (COO) Operational Scale Resume | 1458 | 3 | semantic heading style নেই |
| `executive-resume-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | VP of Sales & Revenue (CRO) Leadership Resume | 1281 | 3 | semantic heading style নেই |
| `executive-resume-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | VP of Product & Design (CPO) Roadmap Resume | 1211 | 3 | semantic heading style নেই |
| `executive-resume-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | VP of Marketing (CMO) Brand & Performance Resume | 1301 | 3 | semantic heading style নেই |
| `executive-resume-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Executive Cover Letter & Retained Headhunter Pitch | 1431 | 3 | semantic heading style নেই |
| `fitness-protocol-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | 6-Day Push Pull Legs (PPL) Hypertrophy Program | 1914 | 3 | semantic heading style নেই |
| `fitness-protocol-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | 5x5 Linear Progression Power Protocol | 1289 | 3 | semantic heading style নেই |
| `fitness-protocol-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Clean Bulking & Hypertrophy Nutrition Blueprint | 1698 | 3 | semantic heading style নেই |
| `fitness-protocol-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Athletic Mobility & Functional Movement Guide | 1592 | 3 | semantic heading style নেই |
| `fitness-protocol-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Desk Worker Posture & Spine Decompression Suite | 1627 | 3 | semantic heading style নেই |
| `founder-pitch-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | 15-Slide Early-Stage Venture Seed Pitch Deck | 1811 | 3 | semantic heading style নেই |
| `founder-pitch-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Series A Growth Flywheel & Go-To-Market Engine | 1583 | 3 | semantic heading style নেই |
| `founder-pitch-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Burn Multiple & Capital Efficiency Scorecard | 1454 | 3 | semantic heading style নেই |
| `founder-pitch-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Board of Directors Meeting Deck & Governance Pack | 1801 | 3 | semantic heading style নেই |
| `founder-pitch-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Exit Scenarios & Strategic M&A Valuation Framework | 1735 | 3 | semantic heading style নেই |
| `freelance-client-proposal\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | High-Ticket Client Proposal & Deliverable Roadmap | 1811 | 3 | semantic heading style নেই |
| `freelance-client-proposal\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Master Services Agreement (MSA) Legal Protection Contract | 1943 | 3 | semantic heading style নেই |
| `freelance-client-proposal\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Scope of Work (SOW) & Change Order Protocol | 1549 | 3 | semantic heading style নেই |
| `freelance-client-proposal\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Value-Based Pricing Calculator & ROI Framing Script | 1793 | 3 | semantic heading style নেই |
| `freelance-client-proposal\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Client Onboarding Questionnaire & Intake Architecture | 1609 | 3 | semantic heading style নেই |
| `masterclass-deck-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | The Epiphany Bridge & Origin Story Presentation Script | 1781 | 3 | semantic heading style নেই |
| `masterclass-deck-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Dismantling the 3 Core Limiting Beliefs Script | 1624 | 3 | semantic heading style নেই |
| `masterclass-deck-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | High-Ticket Value Stacking & Offer Presentation | 1841 | 3 | semantic heading style নেই |
| `masterclass-deck-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | 10-Minute Fast-Action Urgency & Risk Reversal Script | 1451 | 3 | semantic heading style নেই |
| `masterclass-deck-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Student Action Workbook & Implementation Exercises | 1656 | 3 | semantic heading style নেই |
| `minimalist-habit-tracker\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | High-Performance Morning & Evening Routine Manual | 1702 | 3 | semantic heading style নেই |
| `minimalist-habit-tracker\01_Microsoft_Word\Style_2_old_money_luxury.docx` | 365-Day Atomic Habit Streak & Stacking System | 1600 | 3 | semantic heading style নেই |
| `minimalist-habit-tracker\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Quarterly OKR Goal Setting & Sprint Architecture | 1628 | 3 | semantic heading style নেই |
| `minimalist-habit-tracker\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Weekly Executive Review & Reflection Journal | 1817 | 3 | semantic heading style নেই |
| `minimalist-habit-tracker\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Digital Detox & Focus Architecture Protocol | 1655 | 3 | semantic heading style নেই |
| `monogram-wedding-stationery-suite\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Save-the-Date Announcement Suite & Copy Guide | 1627 | 3 | semantic heading style নেই |
| `monogram-wedding-stationery-suite\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Formal Wedding Invitation Suite & Hosting Etiquette | 1623 | 3 | semantic heading style নেই |
| `monogram-wedding-stationery-suite\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Reception & Accommodations Details Insert Card | 1595 | 3 | semantic heading style নেই |
| `monogram-wedding-stationery-suite\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | RSVP Response Card & Entree Selection Suite | 1563 | 3 | semantic heading style নেই |
| `monogram-wedding-stationery-suite\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Day-of Ceremony Program & Dinner Menu Suite | 1702 | 3 | semantic heading style নেই |
| `podcast-launch-production-planner\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | 8-Week Podcast Launch Production Schedule | 1739 | 3 | semantic heading style নেই |
| `podcast-launch-production-planner\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Studio Audio Equipment & Recording Pre-Flight Checklist | 1558 | 3 | semantic heading style নেই |
| `podcast-launch-production-planner\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | SEO-Optimized Episode Show Notes & Timestamp Template | 1561 | 3 | semantic heading style নেই |
| `podcast-launch-production-planner\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | VIP Guest Outreach Pitch Emails & Interview Questions | 1524 | 3 | semantic heading style নেই |
| `podcast-launch-production-planner\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Podcast Sponsorship Rate Card & Host-Read Ad Scripts | 1554 | 3 | semantic heading style নেই |
| `real-estate-marketing-kit\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Luxury Property Listing Copywriting & Specs Guide | 1672 | 3 | semantic heading style নেই |
| `real-estate-marketing-kit\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Open House Signage, Registration & Host Kit | 1554 | 3 | semantic heading style নেই |
| `real-estate-marketing-kit\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Just Listed & Just Sold Social Media Carousel Pack | 1329 | 3 | semantic heading style নেই |
| `real-estate-marketing-kit\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Monthly Local Housing Market Update Newsletter | 1497 | 3 | semantic heading style নেই |
| `real-estate-marketing-kit\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Luxury Home Buyer & Seller Comprehensive Guide | 1522 | 3 | semantic heading style নেই |
| `social-media-carousel-kit\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | 50 Proven High-Retention Social Media Hook Formulas | 1708 | 3 | semantic heading style নেই |
| `social-media-carousel-kit\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Slide-by-Slide Script for 10-Slide Carousels | 1702 | 3 | semantic heading style নেই |
| `social-media-carousel-kit\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | 5-Frame Instagram & LinkedIn Story Sequence | 1640 | 3 | semantic heading style নেই |
| `social-media-carousel-kit\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Content Repurposing & Batching Workflow Manual | 1440 | 3 | semantic heading style নেই |
| `social-media-carousel-kit\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Executive Profile Optimization & Conversion Guide | 1695 | 3 | semantic heading style নেই |
| `solopreneur-crm-pipeline\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Sales Deal Flow Pipeline Stages & Governance Manual | 1885 | 3 | semantic heading style নেই |
| `solopreneur-crm-pipeline\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Lead Qualification Framework (BANT & MEDDPIC Matrix) | 1754 | 3 | semantic heading style নেই |
| `solopreneur-crm-pipeline\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | High-Converting Sales Call Discovery Script | 1849 | 3 | semantic heading style নেই |
| `solopreneur-crm-pipeline\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Client Retainer Upsell & Account Expansion Protocol | 1679 | 3 | semantic heading style নেই |
| `solopreneur-crm-pipeline\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Lost Deal Post-Mortem & Churn Analysis Template | 1935 | 3 | semantic heading style নেই |
| `startup-pitch-deck\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | 15-Slide Institutional Seed Investor Pitch Deck | 2165 | 3 | semantic heading style নেই |
| `startup-pitch-deck\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Unit Economics & SaaS Financial Engine | 1847 | 3 | semantic heading style নেই |
| `startup-pitch-deck\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Cap Table Modeling & SAFE Convertible Note Terms | 1728 | 3 | semantic heading style নেই |
| `startup-pitch-deck\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Venture Diligence Data Room & Investor Checklist | 1842 | 3 | semantic heading style নেই |
| `startup-pitch-deck\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Investor Q&A & Objection Handling Battlecard | 1857 | 3 | semantic heading style নেই |
| `viral-carousel-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Tech & SaaS High-Retention Viral Carousel System | 2042 | 3 | semantic heading style নেই |
| `viral-carousel-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Personal Finance & Wealth Growth Carousel System | 1676 | 3 | semantic heading style নেই |
| `viral-carousel-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Fitness, Biohacking & Longevity Carousel System | 1574 | 3 | semantic heading style নেই |
| `viral-carousel-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Creator Economy & Audience Building Carousel System | 1451 | 3 | semantic heading style নেই |
| `viral-carousel-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Deep Work, Productivity & Mindset Carousel System | 1461 | 3 | semantic heading style নেই |
| `wealth-engine-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Institutional Multi-Tier Asset Allocation System | 2010 | 3 | semantic heading style নেই |
| `wealth-engine-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | FIRE Safe Withdrawal & Capital Compounding Engine | 1958 | 3 | semantic heading style নেই |
| `wealth-engine-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Tax-Advantaged Retirement & Entity Structuring Manual | 1899 | 3 | semantic heading style নেই |
| `wealth-engine-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Multi-Family Underwriting & Syndication Model | 1985 | 3 | semantic heading style নেই |
| `wealth-engine-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Asymmetric Risk & Cold Storage Vault Architecture | 1852 | 3 | semantic heading style নেই |
| `wealth-matrix-finance-tracker\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Zero-Based Monthly Cash Flow & Expense Ledger | 1846 | 3 | semantic heading style নেই |
| `wealth-matrix-finance-tracker\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Debt Avalanche vs. Snowball Freedom Engine | 1657 | 3 | semantic heading style নেই |
| `wealth-matrix-finance-tracker\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Liquid Runway & Capital Preservation Protocol | 1703 | 3 | semantic heading style নেই |
| `wealth-matrix-finance-tracker\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Sinking Funds & Irregular Expense Reserve Schedule | 1742 | 3 | semantic heading style নেই |
| `wealth-matrix-finance-tracker\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Cash Yield Maximizer & Treasury Ladder Architecture | 1727 | 3 | semantic heading style নেই |
| `wedding-budget-simulator\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Wedding Budget Allocation Formula & Percentage Guide | 1862 | 3 | semantic heading style নেই |
| `wedding-budget-simulator\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Hidden Wedding Costs & Fee Avoidance Manual | 1597 | 3 | semantic heading style নেই |
| `wedding-budget-simulator\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Catering & Bar Package Cost Optimizer | 1665 | 3 | semantic heading style নেই |
| `wedding-budget-simulator\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Floral & Decor Budget Maximizer Playbook | 1603 | 3 | semantic heading style নেই |
| `wedding-budget-simulator\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Post-Wedding Financial Wrap-Up & Gratuity Protocol | 1725 | 3 | semantic heading style নেই |
| `wedding-suite-5in1\01_Microsoft_Word\Style_1_nordic_minimalist.docx` | Master 12-Month Wedding Planning Countdown | 1902 | 3 | semantic heading style নেই |
| `wedding-suite-5in1\01_Microsoft_Word\Style_2_old_money_luxury.docx` | Minute-by-Minute Wedding Day Production Master Schedule | 2293 | 3 | semantic heading style নেই |
| `wedding-suite-5in1\01_Microsoft_Word\Style_3_modern_dark_editorial.docx` | Vendor Negotiation & Contract Checklist | 1649 | 3 | semantic heading style নেই |
| `wedding-suite-5in1\01_Microsoft_Word\Style_4_bold_typographic_studio.docx` | Seating Chart Matrix & Dietary Restriction Log | 1645 | 3 | semantic heading style নেই |
| `wedding-suite-5in1\01_Microsoft_Word\Style_5_warm_botanical_earthy.docx` | Day-Of Emergency Kit & Bridal Survival Protocol | 1595 | 3 | semantic heading style নেই |

## প্রতিটি PDF (১২৬টি)
Chars/page শূন্য হলে blank-page flag. Fields হলো interactive form fields-এর সংখ্যা.
| PDF path | pages | chars/page | fields | ফল |
|---|---:|---|---:|---|
| `75-day-transformation-blueprint\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1659 | 0 | নাম Fillable হলেও interactive field নেই |
| `75-day-transformation-blueprint\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1354 | 0 | নাম Fillable হলেও interactive field নেই |
| `75-day-transformation-blueprint\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1395 | 0 | নাম Fillable হলেও interactive field নেই |
| `75-day-transformation-blueprint\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1434 | 0 | নাম Fillable হলেও interactive field নেই |
| `75-day-transformation-blueprint\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1588 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-bible-guidelines-deck\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1500 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-bible-guidelines-deck\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1413 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-bible-guidelines-deck\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1364 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-bible-guidelines-deck\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1519 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-bible-guidelines-deck\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1404 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-guidelines-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1095 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-guidelines-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1134 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-guidelines-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1117 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-guidelines-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1161 | 0 | নাম Fillable হলেও interactive field নেই |
| `brand-guidelines-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1071 | 0 | নাম Fillable হলেও interactive field নেই |
| `client-pipeline-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1643 | 0 | নাম Fillable হলেও interactive field নেই |
| `client-pipeline-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1756 | 0 | নাম Fillable হলেও interactive field নেই |
| `client-pipeline-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1549 | 0 | নাম Fillable হলেও interactive field নেই |
| `client-pipeline-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1570 | 0 | নাম Fillable হলেও interactive field নেই |
| `client-pipeline-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1374 | 0 | নাম Fillable হলেও interactive field নেই |
| `course-master-presentation-deck\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1478 | 0 | নাম Fillable হলেও interactive field নেই |
| `course-master-presentation-deck\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1530 | 0 | নাম Fillable হলেও interactive field নেই |
| `course-master-presentation-deck\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1430 | 0 | নাম Fillable হলেও interactive field নেই |
| `course-master-presentation-deck\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1395 | 0 | নাম Fillable হলেও interactive field নেই |
| `course-master-presentation-deck\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1594 | 0 | নাম Fillable হলেও interactive field নেই |
| `creator-sponsorship-media-kit\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1555 | 0 | নাম Fillable হলেও interactive field নেই |
| `creator-sponsorship-media-kit\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1531 | 0 | নাম Fillable হলেও interactive field নেই |
| `creator-sponsorship-media-kit\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1511 | 0 | নাম Fillable হলেও interactive field নেই |
| `creator-sponsorship-media-kit\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1651 | 0 | নাম Fillable হলেও interactive field নেই |
| `creator-sponsorship-media-kit\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1268 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-ats-resume\Executive-Resume-Template.pdf` | 2 | 1774,1526 | 0 | parsed; text present |
| `executive-ats-resume\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1574 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-ats-resume\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1231 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-ats-resume\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1225 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-ats-resume\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1239 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-ats-resume\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1486 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-resume-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1301 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-resume-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1120 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-resume-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1061 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-resume-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1141 | 0 | নাম Fillable হলেও interactive field নেই |
| `executive-resume-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1280 | 0 | নাম Fillable হলেও interactive field নেই |
| `fitness-protocol-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1734 | 0 | নাম Fillable হলেও interactive field নেই |
| `fitness-protocol-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1121 | 0 | নাম Fillable হলেও interactive field নেই |
| `fitness-protocol-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1509 | 0 | নাম Fillable হলেও interactive field নেই |
| `fitness-protocol-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1415 | 0 | নাম Fillable হলেও interactive field নেই |
| `fitness-protocol-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1464 | 0 | নাম Fillable হলেও interactive field নেই |
| `founder-pitch-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1631 | 0 | নাম Fillable হলেও interactive field নেই |
| `founder-pitch-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1392 | 0 | নাম Fillable হলেও interactive field নেই |
| `founder-pitch-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1259 | 0 | নাম Fillable হলেও interactive field নেই |
| `founder-pitch-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1629 | 0 | নাম Fillable হলেও interactive field নেই |
| `founder-pitch-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1564 | 0 | নাম Fillable হলেও interactive field নেই |
| `freelance-client-proposal\Freelance-Client-Proposal-Agreement.pdf` | 3 | 794,240,0 | 0 | blank page 3 |
| `freelance-client-proposal\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1636 | 0 | নাম Fillable হলেও interactive field নেই |
| `freelance-client-proposal\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1780 | 0 | নাম Fillable হলেও interactive field নেই |
| `freelance-client-proposal\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1390 | 0 | নাম Fillable হলেও interactive field নেই |
| `freelance-client-proposal\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1634 | 0 | নাম Fillable হলেও interactive field নেই |
| `freelance-client-proposal\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1438 | 0 | নাম Fillable হলেও interactive field নেই |
| `masterclass-deck-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1629 | 0 | নাম Fillable হলেও interactive field নেই |
| `masterclass-deck-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1468 | 0 | নাম Fillable হলেও interactive field নেই |
| `masterclass-deck-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1681 | 0 | নাম Fillable হলেও interactive field নেই |
| `masterclass-deck-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1316 | 0 | নাম Fillable হলেও interactive field নেই |
| `masterclass-deck-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1482 | 0 | নাম Fillable হলেও interactive field নেই |
| `minimalist-habit-tracker\Minimalist-Daily-Habit-Tracker.pdf` | 1 | 224 | 0 | parsed; text present |
| `minimalist-habit-tracker\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1530 | 0 | নাম Fillable হলেও interactive field নেই |
| `minimalist-habit-tracker\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1436 | 0 | নাম Fillable হলেও interactive field নেই |
| `minimalist-habit-tracker\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1460 | 0 | নাম Fillable হলেও interactive field নেই |
| `minimalist-habit-tracker\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1648 | 0 | নাম Fillable হলেও interactive field নেই |
| `minimalist-habit-tracker\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1484 | 0 | নাম Fillable হলেও interactive field নেই |
| `monogram-wedding-stationery-suite\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1484 | 0 | নাম Fillable হলেও interactive field নেই |
| `monogram-wedding-stationery-suite\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1469 | 0 | নাম Fillable হলেও interactive field নেই |
| `monogram-wedding-stationery-suite\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1448 | 0 | নাম Fillable হলেও interactive field নেই |
| `monogram-wedding-stationery-suite\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1428 | 0 | নাম Fillable হলেও interactive field নেই |
| `monogram-wedding-stationery-suite\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1556 | 0 | নাম Fillable হলেও interactive field নেই |
| `podcast-launch-production-planner\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1577 | 0 | নাম Fillable হলেও interactive field নেই |
| `podcast-launch-production-planner\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1390 | 0 | নাম Fillable হলেও interactive field নেই |
| `podcast-launch-production-planner\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1411 | 0 | নাম Fillable হলেও interactive field নেই |
| `podcast-launch-production-planner\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1385 | 0 | নাম Fillable হলেও interactive field নেই |
| `podcast-launch-production-planner\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1404 | 0 | নাম Fillable হলেও interactive field নেই |
| `real-estate-marketing-kit\Real-Estate-Marketing-Social-Kit.pdf` | 10 | 75,316,148,163,106,107,119,420,173,289 | 0 | parsed; text present |
| `real-estate-marketing-kit\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1514 | 0 | নাম Fillable হলেও interactive field নেই |
| `real-estate-marketing-kit\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1391 | 0 | নাম Fillable হলেও interactive field নেই |
| `real-estate-marketing-kit\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1199 | 0 | নাম Fillable হলেও interactive field নেই |
| `real-estate-marketing-kit\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1345 | 0 | নাম Fillable হলেও interactive field নেই |
| `real-estate-marketing-kit\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1363 | 0 | নাম Fillable হলেও interactive field নেই |
| `social-media-carousel-kit\Creator-Instagram-Carousel-Kit.pdf` | 12 | 164,81,95,372,260,170,106,130,169,163,320,124 | 0 | parsed; text present |
| `social-media-carousel-kit\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1542 | 0 | নাম Fillable হলেও interactive field নেই |
| `social-media-carousel-kit\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1507 | 0 | নাম Fillable হলেও interactive field নেই |
| `social-media-carousel-kit\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1479 | 0 | নাম Fillable হলেও interactive field নেই |
| `social-media-carousel-kit\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1265 | 0 | নাম Fillable হলেও interactive field নেই |
| `social-media-carousel-kit\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1531 | 0 | নাম Fillable হলেও interactive field নেই |
| `solopreneur-crm-pipeline\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1709 | 0 | নাম Fillable হলেও interactive field নেই |
| `solopreneur-crm-pipeline\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1588 | 0 | নাম Fillable হলেও interactive field নেই |
| `solopreneur-crm-pipeline\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1693 | 0 | নাম Fillable হলেও interactive field নেই |
| `solopreneur-crm-pipeline\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1521 | 0 | নাম Fillable হলেও interactive field নেই |
| `solopreneur-crm-pipeline\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1762 | 0 | নাম Fillable হলেও interactive field নেই |
| `startup-pitch-deck\Tech-Startup-Investor-Pitch-Deck.pdf` | 15 | 149,292,330,350,361,289,332,362,274,279,364,206,269,268,361 | 0 | parsed; text present |
| `startup-pitch-deck\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1985 | 0 | নাম Fillable হলেও interactive field নেই |
| `startup-pitch-deck\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1668 | 0 | নাম Fillable হলেও interactive field নেই |
| `startup-pitch-deck\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1550 | 0 | নাম Fillable হলেও interactive field নেই |
| `startup-pitch-deck\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1660 | 0 | নাম Fillable হলেও interactive field নেই |
| `startup-pitch-deck\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1704 | 0 | নাম Fillable হলেও interactive field নেই |
| `viral-carousel-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1877 | 0 | নাম Fillable হলেও interactive field নেই |
| `viral-carousel-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1516 | 0 | নাম Fillable হলেও interactive field নেই |
| `viral-carousel-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1416 | 0 | নাম Fillable হলেও interactive field নেই |
| `viral-carousel-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1296 | 0 | নাম Fillable হলেও interactive field নেই |
| `viral-carousel-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1303 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-engine-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1813 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-engine-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1769 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-engine-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1704 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-engine-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1796 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-engine-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1656 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-matrix-finance-tracker\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1652 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-matrix-finance-tracker\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1457 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-matrix-finance-tracker\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1515 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-matrix-finance-tracker\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1562 | 0 | নাম Fillable হলেও interactive field নেই |
| `wealth-matrix-finance-tracker\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1523 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-budget-simulator\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1685 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-budget-simulator\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 1 | 1444 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-budget-simulator\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1514 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-budget-simulator\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1450 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-budget-simulator\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1568 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-suite-5in1\02_Editable_PDFs\Style_1_nordic_minimalist_Fillable.pdf` | 1 | 1729 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-suite-5in1\02_Editable_PDFs\Style_2_old_money_luxury_Fillable.pdf` | 2 | 1984,88 | 0 | নাম Fillable হলেও interactive field নেই; render-এ ১/২ পৃষ্ঠা (দ্বিতীয় পৃষ্ঠা যাচাই করুন) |
| `wedding-suite-5in1\02_Editable_PDFs\Style_3_modern_dark_editorial_Fillable.pdf` | 1 | 1484 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-suite-5in1\02_Editable_PDFs\Style_4_bold_typographic_studio_Fillable.pdf` | 1 | 1472 | 0 | নাম Fillable হলেও interactive field নেই |
| `wedding-suite-5in1\02_Editable_PDFs\Style_5_warm_botanical_earthy_Fillable.pdf` | 1 | 1443 | 0 | নাম Fillable হলেও interactive field নেই |

## প্রতিটি XLSX (৪৮টি)
প্রতিটি workbook-এর sheet name/used range/formula count/Excel runtime status ও product-fit flag নিচে। সব ৪৮টির ZIP CRC ও openpyxl parse pass; ৩২টি read-only Excel full recalc pass, ১৬টি Excel open failure.
| XLSX path | Sheets (formulas) | cells | Excel check | product-fit/theme |
|---|---|---:|---|---|
| `75-day-transformation-blueprint\03_Google_Workspace\75-day-transformation-blueprint-Automated-Model.xlsx` | Macro & TDEE Calculator (13); 12-Week Lift Tracker (7) | 91 | OPEN FAILED; 20 formula not runtime-checked | Macro/TDEE ও 12-week lift tracker বিষয়গতভাবে fitness-এর সঙ্গে মেলে, তবে 75-day নামের সাথে 12-week period আলাদা; দুইটি file একই sheet content. |
| `75-day-transformation-blueprint\03_Google_Workspace\75Day_Discipline_Macro_Calculator.xlsx` | Macro & TDEE Calculator (13); 12-Week Lift Tracker (7) | 91 | OPEN FAILED; 20 formula not runtime-checked | Macro/TDEE ও 12-week lift tracker বিষয়গতভাবে fitness-এর সঙ্গে মেলে, তবে 75-day নামের সাথে 12-week period আলাদা; দুইটি file একই sheet content. |
| `brand-bible-guidelines-deck\03_Google_Workspace\brand-bible-guidelines-deck-Automated-Model.xlsx` | Brand Asset & IP Inventory (0) | 31 | static; no formula | Brand Asset/IP inventory আছে; static (formula 0), “Automated Model” নাম বিভ্রান্তিকর. |
| `brand-bible-guidelines-deck\03_Google_Workspace\Brand_Identity_Asset_Governance_Matrix.xlsx` | Brand Asset & IP Inventory (0) | 31 | static; no formula | Brand Asset/IP inventory আছে; static (formula 0), “Automated Model” নাম বিভ্রান্তিকর. |
| `brand-guidelines-5in1\03_Google_Workspace\brand-guidelines-5in1-Automated-Model.xlsx` | Brand Asset & IP Inventory (0) | 31 | static; no formula | **ফাইল-নাম mismatch:** Studio_Design_System_Color_Tokens.xlsx-এ Brand Asset/IP Inventory আছে; actual color token table নেই. Static workbook. |
| `brand-guidelines-5in1\03_Google_Workspace\Studio_Design_System_Color_Tokens.xlsx` | Brand Asset & IP Inventory (0) | 31 | static; no formula | **মিসম্যাচ:** Brand Asset & IP Inventory; color tokens sheet নয়; formula নেই. |
| `client-pipeline-5in1\03_Google_Workspace\client-pipeline-5in1-Automated-Model.xlsx` | Client Deal Pipeline (9) | 63 | recalc PASS; 9, blank/error 0 | Client Deal Pipeline; pipeline kit-এ উপযুক্ত. |
| `client-pipeline-5in1\03_Google_Workspace\Client_Acquisition_Pipeline_Matrix.xlsx` | Client Deal Pipeline (9) | 63 | recalc PASS; 9, blank/error 0 | Client Deal Pipeline; pipeline kit-এ উপযুক্ত. |
| `course-master-presentation-deck\03_Google_Workspace\course-master-presentation-deck-Automated-Model.xlsx` | Funnel Conversion Model (5) | 21 | OPEN FAILED; 5 formula not runtime-checked | Funnel Conversion Model; course/webinar kit-এ উপযুক্ত, Masterclass-এর same content signature. |
| `course-master-presentation-deck\03_Google_Workspace\Webinar_Conversion_Attendance_Model.xlsx` | Funnel Conversion Model (5) | 21 | OPEN FAILED; 5 formula not runtime-checked | Funnel Conversion Model; course/webinar kit-এ উপযুক্ত, Masterclass-এর same content signature. |
| `creator-sponsorship-media-kit\03_Google_Workspace\creator-sponsorship-media-kit-Automated-Model.xlsx` | Content Editorial Calendar (4) | 36 | recalc PASS; 4, blank/error 0 | **ভুল product fit:** Content Editorial Calendar আছে; sponsorship rate/media kit model নেই. |
| `creator-sponsorship-media-kit\03_Google_Workspace\Creator_Sponsorship_Rate_Calculator.xlsx` | Content Editorial Calendar (4) | 36 | recalc PASS; 4, blank/error 0 | **ভুল product fit:** Content Editorial Calendar আছে; sponsorship rate/media kit model নেই. |
| `executive-ats-resume\03_Google_Workspace\executive-ats-resume-Automated-Model.xlsx` | Executive Search Pipeline (4) | 36 | recalc PASS; 4, blank/error 0 | Executive Search & Compensation Pipeline; resume kit-এ adjacent, কিন্তু Executive Career Achievement Matrix নয়. |
| `executive-ats-resume\03_Google_Workspace\Executive_Career_Achievement_Matrix.xlsx` | Executive Search Pipeline (4) | 36 | recalc PASS; 4, blank/error 0 | Executive Search & Compensation Pipeline; resume kit-এ adjacent, কিন্তু Executive Career Achievement Matrix নয়. |
| `executive-resume-5in1\03_Google_Workspace\C_Suite_Executive_Compensation_Model.xlsx` | Executive Search Pipeline (4) | 36 | recalc PASS; 4, blank/error 0 | **ফাইল-নাম mismatch:** C-Suite Compensation Model file-এ Executive Search Pipeline আছে; resume/compensation model আলাদা করে clarify করুন. |
| `executive-resume-5in1\03_Google_Workspace\executive-resume-5in1-Automated-Model.xlsx` | Executive Search Pipeline (4) | 36 | recalc PASS; 4, blank/error 0 | **ফাইল-নাম mismatch:** C-Suite Compensation Model file-এ Executive Search Pipeline আছে; resume/compensation model আলাদা করে clarify করুন. |
| `fitness-protocol-5in1\03_Google_Workspace\fitness-protocol-5in1-Automated-Model.xlsx` | Macro & TDEE Calculator (13); 12-Week Lift Tracker (7) | 91 | OPEN FAILED; 20 formula not runtime-checked | Fitness calculator ও lift tracker মেলে; দুই workbook file duplicate content. |
| `fitness-protocol-5in1\03_Google_Workspace\Fitness_Macro_Volume_Calculator.xlsx` | Macro & TDEE Calculator (13); 12-Week Lift Tracker (7) | 91 | OPEN FAILED; 20 formula not runtime-checked | Fitness calculator ও lift tracker মেলে; দুই workbook file duplicate content. |
| `founder-pitch-5in1\03_Google_Workspace\founder-pitch-5in1-Automated-Model.xlsx` | 3-Year Financial Model (15) | 61 | recalc PASS; 15, blank/error 0 | 3-Year Financial Model; Founder Pitch-এ relevant, Startup Pitch-এর same sheet-content signature. |
| `founder-pitch-5in1\03_Google_Workspace\Silicon_Valley_Burn_Multiple_Model.xlsx` | 3-Year Financial Model (15) | 61 | recalc PASS; 15, blank/error 0 | 3-Year Financial Model; Founder Pitch-এ relevant, Startup Pitch-এর same sheet-content signature. |
| `freelance-client-proposal\03_Google_Workspace\Client_Proposal_Value_Pricing_Model.xlsx` | Client Deal Pipeline (9) | 63 | recalc PASS; 9, blank/error 0 | **আংশিক fit:** Client Deal Pipeline আছে; named Value Pricing Model/Proposal calculator নেই. Automated-Model ফাইলটি Client Pipeline-এর exact byte duplicate. |
| `freelance-client-proposal\03_Google_Workspace\freelance-client-proposal-Automated-Model.xlsx` | Client Deal Pipeline (9) | 63 | recalc PASS; 9, blank/error 0 | Exact byte duplicate of client-pipeline-5in1 Automated-Model workbook. |
| `masterclass-deck-5in1\03_Google_Workspace\High_Ticket_Course_Funnel_Calculator.xlsx` | Funnel Conversion Model (5) | 21 | OPEN FAILED; 5 formula not runtime-checked | Funnel Conversion Model; course funnel kit-এ উপযুক্ত, Course Master ও Podcast group-এর same content signature. |
| `masterclass-deck-5in1\03_Google_Workspace\masterclass-deck-5in1-Automated-Model.xlsx` | Funnel Conversion Model (5) | 21 | OPEN FAILED; 5 formula not runtime-checked | Funnel Conversion Model; course funnel kit-এ উপযুক্ত, Course Master ও Podcast group-এর same content signature. |
| `minimalist-habit-tracker\03_Google_Workspace\Habit_Streak_Compounding_Model.xlsx` | Macro & TDEE Calculator (13); 12-Week Lift Tracker (7) | 91 | OPEN FAILED; 20 formula not runtime-checked | **ভুল product fit:** Macro/TDEE + strength/lift tracker আছে; habit/streak tracker নেই. |
| `minimalist-habit-tracker\03_Google_Workspace\minimalist-habit-tracker-Automated-Model.xlsx` | Macro & TDEE Calculator (13); 12-Week Lift Tracker (7) | 91 | OPEN FAILED; 20 formula not runtime-checked | **ভুল product fit:** Macro/TDEE + strength/lift tracker আছে; habit/streak tracker নেই. |
| `monogram-wedding-stationery-suite\03_Google_Workspace\monogram-wedding-stationery-suite-Automated-Model.xlsx` | Master Budget Simulator (21); Guest List & RSVPs (0) | 113 | recalc PASS; 21, blank/error 0 | **আংশিক/ভুল fit:** Wedding Budget + Guest List/RSVP আছে; stationery production/print-order matrix নেই. |
| `monogram-wedding-stationery-suite\03_Google_Workspace\Stationery_Production_Budget_Matrix.xlsx` | Master Budget Simulator (21); Guest List & RSVPs (0) | 113 | recalc PASS; 21, blank/error 0 | **আংশিক/ভুল fit:** Wedding Budget + Guest List/RSVP আছে; stationery production/print-order matrix নেই. |
| `podcast-launch-production-planner\03_Google_Workspace\podcast-launch-production-planner-Automated-Model.xlsx` | Funnel Conversion Model (5) | 21 | OPEN FAILED; 5 formula not runtime-checked | **ভুল product fit:** Funnel Conversion Model আছে; podcast production/sponsorship calculator নেই. |
| `podcast-launch-production-planner\03_Google_Workspace\Podcast_Production_Sponsorship_Model.xlsx` | Funnel Conversion Model (5) | 21 | OPEN FAILED; 5 formula not runtime-checked | **ভুল product fit:** Funnel Conversion Model আছে; podcast production/sponsorship calculator নেই. |
| `real-estate-marketing-kit\03_Google_Workspace\Luxury_Real_Estate_Marketing_ROI_Model.xlsx` | Content Editorial Calendar (4) | 36 | recalc PASS; 4, blank/error 0 | **ভুল product fit:** Content Editorial Calendar আছে; Real Estate marketing ROI model নেই. |
| `real-estate-marketing-kit\03_Google_Workspace\real-estate-marketing-kit-Automated-Model.xlsx` | Content Editorial Calendar (4) | 36 | recalc PASS; 4, blank/error 0 | **ভুল product fit:** Content Editorial Calendar আছে; Real Estate marketing ROI model নেই. |
| `social-media-carousel-kit\03_Google_Workspace\social-media-carousel-kit-Automated-Model.xlsx` | Content Editorial Calendar (4) | 36 | recalc PASS; 4, blank/error 0 | Editorial calendar আছে; carousel design/script/scheduling tool নয়—শুধু adjacent fit. |
| `social-media-carousel-kit\03_Google_Workspace\Social_Media_Editorial_Calendar.xlsx` | Content Editorial Calendar (4) | 36 | recalc PASS; 4, blank/error 0 | Editorial calendar আছে; carousel design/script/scheduling tool নয়—শুধু adjacent fit. |
| `solopreneur-crm-pipeline\03_Google_Workspace\Sales_Deal_Flow_Pipeline_Tracker.xlsx` | Client Deal Pipeline (9) | 63 | recalc PASS; 9, blank/error 0 | Client Deal Pipeline; CRM/pipeline kit-এ উপযুক্ত. |
| `solopreneur-crm-pipeline\03_Google_Workspace\solopreneur-crm-pipeline-Automated-Model.xlsx` | Client Deal Pipeline (9) | 63 | recalc PASS; 9, blank/error 0 | Client Deal Pipeline; CRM/pipeline kit-এ উপযুক্ত. |
| `startup-pitch-deck\03_Google_Workspace\SaaS_Unit_Economics_Cap_Table_Model.xlsx` | 3-Year Financial Model (15) | 61 | recalc PASS; 15, blank/error 0 | **আংশিক fit:** 3-Year Financial Model আছে, কিন্তু SaaS Unit Economics/Cap Table নামে থাকা ফাইলে cap-table sheet নেই. |
| `startup-pitch-deck\03_Google_Workspace\startup-pitch-deck-Automated-Model.xlsx` | 3-Year Financial Model (15) | 61 | recalc PASS; 15, blank/error 0 | **আংশিক fit:** 3-Year Financial Model আছে, কিন্তু SaaS Unit Economics/Cap Table নামে থাকা ফাইলে cap-table sheet নেই. |
| `viral-carousel-5in1\03_Google_Workspace\viral-carousel-5in1-Automated-Model.xlsx` | Content Editorial Calendar (4) | 36 | recalc PASS; 4, blank/error 0 | Editorial calendar আছে; viral carousel performance/repurposing engine claim-কে actual sheet content-এ 맞춰 clarify করুন. |
| `viral-carousel-5in1\03_Google_Workspace\Viral_Content_Repurposing_Engine.xlsx` | Content Editorial Calendar (4) | 36 | recalc PASS; 4, blank/error 0 | Editorial calendar আছে; viral carousel performance/repurposing engine claim-কে actual sheet content-এ 맞춰 clarify করুন. |
| `wealth-engine-5in1\03_Google_Workspace\Institutional_Asset_Allocation_Model.xlsx` | Net Worth Dashboard (11); FIRE Retirement Calculator (4) | 119 | OPEN FAILED; 15 formula not runtime-checked | **আংশিক fit:** Net Worth + FIRE sheets আছে; Institutional Asset Allocation, tax/real estate/hedging model নেই. |
| `wealth-engine-5in1\03_Google_Workspace\wealth-engine-5in1-Automated-Model.xlsx` | Net Worth Dashboard (11); FIRE Retirement Calculator (4) | 119 | OPEN FAILED; 15 formula not runtime-checked | **আংশিক fit:** Net Worth + FIRE sheets আছে; Institutional Asset Allocation, tax/real estate/hedging model নেই. |
| `wealth-matrix-finance-tracker\03_Google_Workspace\Personal_Finance_Net_Worth_Matrix.xlsx` | Net Worth Dashboard (11); FIRE Retirement Calculator (4) | 119 | OPEN FAILED; 15 formula not runtime-checked | Net Worth Dashboard + FIRE; tracker-এর সঙ্গে উপযুক্ত, Wealth Engine-এর same content signature. |
| `wealth-matrix-finance-tracker\03_Google_Workspace\wealth-matrix-finance-tracker-Automated-Model.xlsx` | Net Worth Dashboard (11); FIRE Retirement Calculator (4) | 119 | OPEN FAILED; 15 formula not runtime-checked | Net Worth Dashboard + FIRE; tracker-এর সঙ্গে উপযুক্ত, Wealth Engine-এর same content signature. |
| `wedding-budget-simulator\03_Google_Workspace\wedding-budget-simulator-Automated-Model.xlsx` | Master Budget Simulator (21); Guest List & RSVPs (0) | 113 | recalc PASS; 21, blank/error 0 | Master Budget + Guest List/RSVP; budget simulator-এ উপযুক্ত, Wedding Suite-এর same content signature. |
| `wedding-budget-simulator\03_Google_Workspace\Wedding_Budget_Allocation_Simulator.xlsx` | Master Budget Simulator (21); Guest List & RSVPs (0) | 113 | recalc PASS; 21, blank/error 0 | Master Budget + Guest List/RSVP; budget simulator-এ উপযুক্ত, Wedding Suite-এর same content signature. |
| `wedding-suite-5in1\03_Google_Workspace\wedding-suite-5in1-Automated-Model.xlsx` | Master Budget Simulator (21); Guest List & RSVPs (0) | 113 | recalc PASS; 21, blank/error 0 | Master Budget + Guest List/RSVP; wedding planning-এ relevant, Wedding Budget-এর duplicate content. |
| `wedding-suite-5in1\03_Google_Workspace\Wedding_Budget_Simulator_Master.xlsx` | Master Budget Simulator (21); Guest List & RSVPs (0) | 113 | recalc PASS; 21, blank/error 0 | Master Budget + Guest List/RSVP; wedding planning-এ relevant, Wedding Budget-এর duplicate content. |

### Workbook theme, reuse ও interaction findings
- ৪৮টি XLSX-এ full cell-value/formula/style signature মিলিয়ে **মাত্র ৯টি unique workbook design** পাওয়া গেছে; একই content/style একাধিক product folder-এ পুনর্ব্যবহৃত। ৪৮টি ফাইলের মধ্যে একজোড়া exact byte duplicate: Client Pipeline Automated Model ↔ Freelance Client Proposal Automated Model।
- সব worksheet মিলিয়ে data-validation dropdown ০, freeze pane ০, auto-filter ০। Deal-stage, RSVP, platform, rate/percent inputs-এ dropdown/validation নেই; typo-তে formula SUMIF বা percentage output ভুল হতে পারে। Input cells-এ নির্দেশনা, valid ranges, freeze header/filter দিন।
- Spreadsheet palette/layout ৯টি reused model design-এর মতো একই; Word/PDF-এর পাঁচ style palette-এর পৃথক spreadsheet variant নেই। Default demo data (যেমন sample client/company, weight, wedding budget) clearly “sample” tag করতে হবে বা buyer copy-তে blank করতে হবে।
| Unique workbook template (file count) | ব্যবহৃত product | fit verdict |
|---|---|---|
| Macro/TDEE + 12-week lift (6) | 75-Day, Fitness, Minimalist Habit Tracker | 75-Day/Fitness adjacent; Habit Tracker mismatch; 12-week বনাম 75-day period মিল নয় |
| Brand Asset/IP inventory (4) | Brand Bible, Brand Guidelines | Brand Bible fit; Color Tokens নামে থাকা deliverable mismatch; static, automated নয় |
| Client Deal Pipeline (6) | Client Pipeline, Freelance Proposal, Solopreneur CRM | Pipeline/CRM fit; Proposal Value Pricing file pipeline duplicate/partial fit |
| Funnel Conversion Model (6) | Course Master, Masterclass, Podcast Planner | Course/Masterclass fit; Podcast mismatch |
| Content Editorial Calendar (8) | Creator Sponsorship, Real Estate, Social Carousel, Viral Carousel | Social/viral adjacent; Sponsorship rate + Real Estate ROI mismatch |
| Executive Search/Compensation Pipeline (4) | Executive ATS, Executive Resume 5-in-1 | Executive-career adjacent; achievement matrix/compensation named sheets actually one search pipeline |
| 3-Year Financial Model (4) | Founder Pitch, Startup Pitch Deck | Both pitch adjacent; Startup Cap Table filename has no cap-table sheet |
| Wedding Budget + Guest/RSVP (6) | Monogram Stationery, Wedding Budget, Wedding Suite | Budget/Suite fit; Stationery Production Matrix title mismatch |
| Net Worth + FIRE (4) | Wealth Engine, Wealth Matrix | Matrix fit; institutional asset allocation engine scope under-delivered |

**Formula limitations:** ২৮টি workbook-এর ২৮৮ formula Excel-এ full recalc-এ ০ error/blank; বাকি ১৬ workbook-এর ২১০ formula runtime-এ পরীক্ষা করা যায়নি, তাই ফাইল ঠিক না করা পর্যন্ত sale package-এ পাঠানো উচিত নয়। Source XLSX-এ cached results এখনও ফাঁকা; runtime recalc source-এ save করা হয়নি।

## প্রতিটি ZIP package (৩৬টি)
CRC পরীক্ষা সফল; Path product folder-এর relative. Archive entries সংখ্যা এবং CRC ফল নিচে।
| Product folder | ZIP file | size bytes | entries | CRC |
|---|---|---:|---:|---|
| `75-day-transformation-blueprint` | `75-day-transformation-blueprint-Package.zip` | 204523 | 14 | PASS |
| `apex-wealth-landing-theme` | `apex-wealth-landing-theme-Package.zip` | 1191993 | 16 | PASS |
| `auraring-landing-page` | `auraring-landing-page-Package.zip` | 40535 | 17 | PASS |
| `brand-bible-guidelines-deck` | `brand-bible-guidelines-deck-Package.zip` | 201680 | 14 | PASS |
| `brand-guidelines-5in1` | `brand-guidelines-5in1-Package.zip` | 199306 | 14 | PASS |
| `chrono-developer-portfolio-theme` | `chrono-developer-portfolio-theme-Package.zip` | 1223560 | 16 | PASS |
| `client-pipeline-5in1` | `client-pipeline-5in1-Package.zip` | 203743 | 14 | PASS |
| `course-master-presentation-deck` | `course-master-presentation-deck-Package.zip` | 201714 | 14 | PASS |
| `creator-sponsorship-media-kit` | `creator-sponsorship-media-kit-Package.zip` | 201890 | 14 | PASS |
| `executive-ats-resume` | `Executive-ATS-Resume-Canva-Package.zip` | 1968538 | 2 | PASS |
| `executive-ats-resume` | `executive-ats-resume-Package.zip` | 200477 | 14 | PASS |
| `executive-resume-5in1` | `executive-resume-5in1-Package.zip` | 199942 | 14 | PASS |
| `fitness-protocol-5in1` | `fitness-protocol-5in1-Package.zip` | 203985 | 14 | PASS |
| `founder-pitch-5in1` | `founder-pitch-5in1-Package.zip` | 202666 | 14 | PASS |
| `freelance-client-proposal` | `Freelance-Client-Proposal-Canva-Package.zip` | 1522539 | 3 | PASS |
| `freelance-client-proposal` | `freelance-client-proposal-Package.zip` | 203422 | 14 | PASS |
| `lumina-dtc-ecommerce` | `lumina-dtc-ecommerce-Package.zip` | 7795 | 4 | PASS |
| `masterclass-deck-5in1` | `masterclass-deck-5in1-Package.zip` | 201513 | 14 | PASS |
| `minimalist-habit-tracker` | `Minimalist-Habit-Tracker-Canva-Package.zip` | 3386140 | 3 | PASS |
| `minimalist-habit-tracker` | `minimalist-habit-tracker-Package.zip` | 204486 | 14 | PASS |
| `monogram-wedding-stationery-suite` | `monogram-wedding-stationery-suite-Package.zip` | 204033 | 14 | PASS |
| `nova-saas-theme` | `nova-saas-theme-Package.zip` | 4959 | 3 | PASS |
| `podcast-launch-production-planner` | `podcast-launch-production-planner-Package.zip` | 201294 | 14 | PASS |
| `real-estate-marketing-kit` | `Real-Estate-Marketing-Canva-Package.zip` | 44781331 | 4 | PASS |
| `real-estate-marketing-kit` | `real-estate-marketing-kit-Package.zip` | 201030 | 14 | PASS |
| `smallbiz-landing-kit` | `smallbiz-landing-kit-Package.zip` | 5336 | 3 | PASS |
| `social-media-carousel-kit` | `Creator-Carousel-Kit-Canva-Package.zip` | 37455841 | 4 | PASS |
| `social-media-carousel-kit` | `social-media-carousel-kit-Package.zip` | 202413 | 14 | PASS |
| `solopreneur-crm-pipeline` | `solopreneur-crm-pipeline-Package.zip` | 203656 | 14 | PASS |
| `startup-pitch-deck` | `startup-pitch-deck-Package.zip` | 204651 | 14 | PASS |
| `startup-pitch-deck` | `Tech-Startup-Pitch-Deck-Canva-Package.zip` | 6747979 | 4 | PASS |
| `viral-carousel-5in1` | `viral-carousel-5in1-Package.zip` | 202399 | 14 | PASS |
| `wealth-engine-5in1` | `wealth-engine-5in1-Package.zip` | 207540 | 14 | PASS |
| `wealth-matrix-finance-tracker` | `wealth-matrix-finance-tracker-Package.zip` | 206661 | 14 | PASS |
| `wedding-budget-simulator` | `wedding-budget-simulator-Package.zip` | 205225 | 14 | PASS |
| `wedding-suite-5in1` | `wedding-suite-5in1-Package.zip` | 206402 | 14 | PASS |

## লাইভ চ্যানেল ও ল্যান্ডিং পেজ
### Website
- লাইভ landing page-এ ৩০টি পণ্য card দেখা যায়, কিন্তু hero-তে “Browse All 10 Digital Systems” এবং category filters-এ মোট ১০ দেখায়। তিন জায়গার count এক করে ৩০ করুন বা সত্য count অনুযায়ী listing ঠিক করুন।
- শেষ ১০টি card-এর Buy link সবই Gumroad store root `https://mdsanaullahsm.gumroad.com/`-এ যাচ্ছে; প্রতিটি card-কে তার নিজস্ব product page-এ দিন।
- Footer-এর Pinterest link ভুল account `pinterest.com/usajobsignals/`; Sanaullah Mondol Studio profile-এ বদলান।
- Source/SEO-তে ৯টি broken product-cover reference: ৩টি cover অনুপস্থিত, ৬টি পুরোনো slug; map/update করুন। JSON-LD-তে 4.9 rating ও review count আছে—বাস্তব, যাচাইযোগ্য review না হলে বাদ দিন।
### Gumroad
- Seller dashboard-এ ৩০টি published product দেখা গেছে; দেখা তালিকায় প্রতিটি ০ sales/$0 revenue ছিল (audit-এর মুহূর্তের snapshot; পরে বদলাতে পারে)।
- Content tab-এর অনেক ZIP-এর পাশে “attached to product but not on any page” লেখা। এটি buyer download fail প্রমাণ করে না, তবে প্রতিটি product-এর buyer view/test purchase-এ file visibility ও download যাচাই করুন।
### Pinterest
- Profile-এর bio “Modern…”-এর প্রথম M বাদ পড়ে “odern…” দেখা যায়; bio ঠিক করুন। Website URL HTTP; HTTPS-এ বদলান।
- SM Studio profile-এ unrelated USA jobs/Google AI Pro pin ও একাধিক duplicate product pin রয়েছে; archive/delete বা সঠিক board-এ সরান। কিছু pin title/category-তে product mismatch (Broadcaster carousel template, Solopreneur CRM-এ Notion claim) দেখা গেছে; files যা deliver করে তার সাথে copy মিলান।
### X
- Account bio virtual assistant/“Social Media Influencer” পরিচয় দেখায়; SM Studio digital product brand-এর সাথে মিলিয়ে bio/category update বিবেচনা করুন। একটি পোস্টে “All 20 systems live” বলা, কিন্তু সাইটে ৩০ card আছে—সংখ্যা ও offer copy হালনাগাদ করুন। “সব suite-এ 5 themes … Canva” দাবি সব product format-এ সত্য কিনা নিশ্চিত করুন।
### LinkedIn
- URL খোলা হলেও activity feed browser-এ পড়া যায়নি; LinkedIn content/asset/link audit অসম্পূর্ণ। Local site footer-এর URL আছে, তবে post copy/link যাচাই করা যায়নি।

## করণীয় তালিকা (অগ্রাধিকারক্রমে)
1. **জরুরি:** ১০টি নতুন website card-এর Gumroad product URL, ৩০ বনাম ১০ count, ভুল Pinterest footer link, এবং ৯টি broken cover reference ঠিক করুন।
2. **বিক্রয়-পূর্ব:** Gumroad-এর প্রতিটি buyer-facing product page-এ ZIP download visible কি না যাচাই; “not on any page” বার্তার প্রভাব নিশ্চিত করুন। Gumroad listing-এর প্রতিটি product file, cover, price ও live landing link এক roster-এ মিলিয়ে নিন।
3. **ডেলিভারেবল গুণমান:** ১২০ PDF-তে interactive fields যোগ করুন অথবা “fillable” দাবি সরান; Freelance Agreement-এর ফাঁকা page 3 সরান; wedding-suite Style 2 PDF পুনরায় export/দ্বিতীয় page যাচাই করুন।
4. **Excel P0:** Excel খুলতে ব্যর্থ ১৬টি workbook rebuild; ২১০টি formula Excel/Sheets-এ recalc ও result যাচাই; বাকি ৩২টি workbook-এ calculated cache save করে retest. ৯টি reused template-কে product-fit অনুযায়ী আলাদা করুন; Color Tokens, Podcast, Sponsorship/Real Estate ROI, Habit Tracker ও Cap Table-এর ভুল/missing workbook ঠিক করুন।
5. **Listing/content consistency:** “৫ style” claim-এর বিপরীতে পাঁচ DOCX/PDF অনেক product-এ পাঁচটি ভিন্ন companion tool, একই template-এর পাঁচ design নয়; Gumroad copy, ZIP filename, preview ও deliverable list স্পষ্ট করুন। COO/CFO/CTO/CRO/CPO/CMO resume kits-এ LinkedIn bio/cover letter-কে resume হিসেবে গোনা হচ্ছে কিনা copy ঠিক করুন।
6. **বিশ্বাস/ব্র্যান্ড:** Pinterest bio/HTTP/duplicate ও off-brand pins; X bio ও “20 systems” copy; live JSON-LD review/rating evidence পর্যালোচনা করুন।
7. **অ্যাক্সেসিবিলিটি ও QA:** Word-এর semantic Heading styles যোগ করুন; DOCX page layout Word/PDF-এ render করে final visual check; LinkedIn activity audit পুনরায় সম্পন্ন করুন।


## Word বনাম matching PDF: cross-format visual check

- ১২০টি DOCX-এর প্রতিটির একই folder ও একই style name-এর `_Fillable.pdf` পাওয়া গেছে (১২০/১২০)। Extracted title ১২০ জোড়ায় মেলে; মূল text content-ও অনুরূপ। Word থেকে PDF export করে supplied PDF-এর পাশে প্রথম পৃষ্ঠা বসিয়ে ২৪টি product × পাঁচ style-এর visual sheet review করেছি।
- **ডিজাইন সিস্টেম মেলে, কিন্তু page layout pixel-perfect এক নয়।** একই style palette, title hierarchy ও table family বজায় থাকে; Word render-এ spacing, column width, table wrapping এবং whitespace প্রায়ই আলাদা। তাই একটিকে আরেকটির exact visual duplicate বলা যাবে না। Word export-গুলোর page size Letter এবং paired PDFs-ও Letter।
- **পৃষ্ঠা-সংখ্যার ৬টি গুরুত্বপূর্ণ অমিল:** `client-pipeline-5in1 / Style 2`, `social-media-carousel-kit / Style 2`, `startup-pitch-deck / Style 2`, `wealth-engine-5in1 / Style 2`, `wedding-budget-simulator / Style 1`, `wedding-suite-5in1 / Style 2`—Word-এ ২ পৃষ্ঠা, supplied PDF-এ ১ পৃষ্ঠা। Extracted content-এ সবগুলোই প্রায় সম্পূর্ণ মেলে; ফলে PDF-গুলো কনটেন্ট বাদ না দিয়ে এক পৃষ্ঠায় বেশি compact হয়েছে বলে দেখা যায়। দুই format-এ একই page break চাওয়া হলে PDF পুনরায় export বা DOCX pagination ঠিক করা দরকার।
- **Word compatibility warning:** ২১টি `Style_1_nordic_minimalist.docx` normal Word open/export-এ “The file appears to be corrupted” দেখিয়েছে। OpenAndRepair দিয়ে সব ২১টি read-only render হয়েছে; original DOCX save/modify করা হয়নি। Buyer-কে warning দেখা দিতে পারে—Word-এ খুলে Repair/Save As করে clean DOCX/PDF পুনরায় export করুন।
- XLSX-গুলো একই PDF/DOCX-এর visual counterpart নয়; সেগুলো আলাদা spreadsheet tools। তাদের visual styling-কে এই ১২০টি DOCX↔PDF pair count-এর মধ্যে ধরা হয়নি।

**২১টি OpenAndRepair-required DOCX folder:** `brand-bible-guidelines-deck`, `brand-guidelines-5in1`, `client-pipeline-5in1`, `course-master-presentation-deck`, `creator-sponsorship-media-kit`, `executive-ats-resume`, `executive-resume-5in1`, `fitness-protocol-5in1`, `founder-pitch-5in1`, `freelance-client-proposal`, `masterclass-deck-5in1`, `minimalist-habit-tracker`, `monogram-wedding-stationery-suite`, `podcast-launch-production-planner`, `real-estate-marketing-kit`, `social-media-carousel-kit`, `solopreneur-crm-pipeline`, `startup-pitch-deck`, `viral-carousel-5in1`, `wealth-engine-5in1`, `wealth-matrix-finance-tracker`.
