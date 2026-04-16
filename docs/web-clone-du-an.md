# 🎯 Web Clone Cho Dự Án

> Tài liệu tham khảo 4 website có hiệu ứng đẹp để clone cho dự án công bố sản phẩm.
> Cập nhật: 15/04/2026

---

## 📋 Tổng Quan

| # | Website | Loại | Hiệu ứng chính | Độ khó clone |
|---|---------|------|-----------------|--------------|
| 1 | [Raycast](https://www.raycast.com/) | Product Launch | Scroll pinning, keyboard animation, dark mode | ⭐⭐⭐ |
| 2 | [Pitch](https://pitch.com/) | SaaS Platform | Slide transitions, template gallery, color shifting | ⭐⭐⭐⭐ |
| 3 | [One Design Company](https://www.onedesigncompany.com/) | Agency Showcase | Horizontal scroll, image scale, text wipe | ⭐⭐⭐⭐⭐ |
| 4 | [Framer](https://www.framer.com/) | Website Builder | Component morphing, canvas demos, feature tabs | ⭐⭐⭐⭐ |

---

## 1️⃣ Raycast — raycast.com

**URL:** https://www.raycast.com/

**Mô tả:** Bộ công cụ năng suất tất cả trong một, được đóng gói trong một launcher có thể mở rộng. Nhanh, tiện, đáng tin cậy.

### Hiệu ứng cần clone:
- **Dark Mode UI** — giao diện tối sang trọng, gradient tinh tế
- **Scroll-triggered reveals** — các section hiện ra mượt mà khi cuộn
- **Keyboard shortcut animation** — hiệu ứng phím tắt gõ thực tế
- **Extension cards** — hover scale + shadow trên card plugin
- **Sticky navigation** — header cố định với blur backdrop
- **Section pinning** — ghim section trong khi nội dung cuộn
- **Testimonial carousel** — quote khách hàng xoay vòng
- **CTA glow buttons** — nút Download có hiệu ứng phát sáng

### Cấu trúc trang:
```
├── Hero Section (tagline + download buttons + announcement banner)
├── Feature Showcase (extensions grid theo category tabs)
├── AI Section (Your Mac just got smarter)
├── Automation (Snippets, Quicklinks, Hotkeys)
├── Community Section (Slack, YouTube videos)
├── Developer API Section
└── Footer (newsletter signup)
```

### Tech Stack gợi ý:
- **Animation:** GSAP + ScrollTrigger
- **Smooth Scroll:** Lenis
- **Layout:** CSS Grid + Flexbox
- **Font:** Inter hoặc tương tự

---

## 2️⃣ Pitch — pitch.com

**URL:** https://pitch.com/

**Mô tả:** Nền tảng thuyết trình AI giúp team chuyên nghiệp hợp tác, tạo và trình bày slide — tất cả đều đúng brand.

### Hiệu ứng cần clone:
- **Template gallery scroll** — carousel ngang hiển thị template cards
- **Step-by-step workflow** — 4 bước "How Pitch works" với tab switching
- **Logo marquee** — banner logo khách hàng chạy vô hạn
- **Integration cards** — cards tích hợp với hover reveal
- **Testimonial slider** — quote CEO/VP xoay vòng
- **Presentation gallery** — grid ảnh preview với hover zoom
- **Gradient backgrounds** — nền gradient chuyển màu mượt
- **Fade-in-on-load** — ảnh và text fade in khi tải

### Cấu trúc trang:
```
├── Hero Section (tagline + CTA + logo banner)
├── Template Gallery (horizontal scroll cards)
├── How It Works (4-step tabs với preview)
│   ├── Generate/discover templates
│   ├── Create sleek slides
│   ├── Convince anyone
│   └── Know what's working
├── Integrations (HubSpot, Slack, Notion, Loom, Unsplash)
├── Presentation Gallery (real deck previews)
├── Testimonials (carousel quotes)
├── Blog/News Section
└── Footer
```

### Tech Stack gợi ý:
- **Framework:** Next.js (SSR cho SEO)
- **Animation:** Framer Motion hoặc GSAP
- **Image:** Cloudinary CDN (như bản gốc)
- **Font:** Custom sans-serif

---

## 3️⃣ One Design Company — onedesigncompany.com

**URL:** https://www.onedesigncompany.com/

**Mô tả:** Agency thiết kế web Chicago — biến nghiên cứu thành trải nghiệm web đáng nhớ, phát triển và chiến lược thương hiệu.

### Hiệu ứng cần clone:
- **Full-screen project slider** — slideshow toàn màn hình showcase dự án
- **Image scale on hover** — ảnh phóng to mượt khi hover
- **Text wipe/reveal** — chữ xuất hiện kiểu lau từ trái sang
- **Smooth page transitions** — chuyển trang mượt mà (barba.js style)
- **Custom cursor** — cursor tùy chỉnh thay đổi theo context
- **Parallax depth** — các layer di chuyển khác nhau
- **Bold typography** — chữ to, đậm, editorial style
- **News section** — danh sách tin tức với category tags

### Cấu trúc trang:
```
├── Navigation (Work, About, News, Contact)
├── Hero Showcase (full-screen project slides)
│   ├── Merus — "As invested as you are"
│   ├── Quaise Energy — "Clean energy for everyone"
│   ├── Landkind — "Ethical supplements"
│   ├── Flexe — "Rebranding an industry innovator"
│   ├── HOLLY HUNT — "Design. Forward."
│   ├── ... (22+ projects)
├── Agency Description
├── News Section
├── Services (Branding, Logo, Website, Web Dev)
└── Footer (Chicago address + socials)
```

### Tech Stack gợi ý:
- **Animation:** GSAP + ScrollTrigger + SplitText
- **Smooth Scroll:** Lenis
- **Page Transitions:** Barba.js
- **Cursor:** Custom Canvas cursor
- **Font:** Custom serif + sans-serif

### ⚠️ Lưu ý:
Đây là web **khó clone nhất** trong 4 trang — nhiều hiệu ứng phức tạp, page transitions, và custom interactions.

---

## 4️⃣ Framer — framer.com

**URL:** https://www.framer.com/

**Mô tả:** Website builder no-code được tin dùng bởi startups hàng đầu và Fortune 500. Build nhanh, scale dễ dàng với CMS, analytics, localization, SEO tích hợp.

### Hiệu ứng cần clone:
- **Feature tabs với live preview** — tab switching hiển thị demo thực
- **Interactive mockup** — UI demo tương tác (CMS editor, Analytics dashboard)
- **Testimonial infinite scroll** — vòng quote khách hàng liên tục
- **Expert marketplace carousel** — slider chuyên gia xoay vòng
- **Analytics dashboard animation** — số liệu đếm lên, chart animate
- **Gradient aurora background** — nền gradient sống động
- **A/B testing UI mockup** — demo giao diện test A/B
- **SEO score animation** — Google Lighthouse scores animate
- **Sticky feature sections** — section ghim khi cuộn qua features

### Cấu trúc trang:
```
├── Announcement Banner ("State of Sites '26")
├── Hero Section (tagline + 3 CTAs)
├── Feature Tabs
│   ├── AI — generate layouts
│   ├── Design — craft responsive
│   ├── CMS — manage content
│   └── Collaborate — real-time editing
├── Analytics & Insights (dashboard mockup)
├── A/B Testing (optimization demo)
├── SEO & Performance (Lighthouse scores)
├── Customer Testimonials (infinite carousel)
├── Expert Marketplace (partner slider)
└── Footer
```

### Tech Stack gợi ý:
- **Framework:** Next.js
- **Animation:** Framer Motion (phù hợp vì chính là sản phẩm!)
- **Smooth Scroll:** CSS scroll-snap hoặc Lenis
- **Charts:** Custom SVG animation
- **Font:** Inter

---

## 📊 So Sánh Tổng Hợp

| Tiêu chí | Raycast | Pitch | One Design | Framer |
|----------|---------|-------|------------|--------|
| **Theme** | Dark | Light | Dark/Light | Light |
| **Animation level** | Trung bình | Trung bình | Cao | Cao |
| **Scroll effects** | ✅ Pinning | ✅ Reveals | ✅ Full-screen | ✅ Tabs mượt |
| **Hover effects** | Card scale | Image zoom | Image scale + cursor | Card morph |
| **Typography** | Clean sans | Professional | Bold editorial | Modern sans |
| **Responsive** | ✅ | ✅ | ✅ | ✅ |
| **Phù hợp cho** | Product app | SaaS/Pitch | Creative agency | Tech product |
| **Thời gian clone** | 3-5 ngày | 4-6 ngày | 7-10 ngày | 5-7 ngày |

---

## 🛠️ Libraries Chung Cần Dùng

```
// Animation
- GSAP (gsap.com) — animation engine chính
- ScrollTrigger — scroll-based animations
- SplitText — text splitting effects

// Smooth Scroll
- Lenis — smooth scrolling

// Page Transitions (nếu cần)
- Barba.js — smooth page transitions

// Fonts
- Google Fonts: Inter, Outfit, DM Sans

// Icons
- Lucide Icons hoặc Phosphor Icons
```

---

## 🎯 Thứ Tự Clone Gợi Ý

1. **Raycast** (dễ nhất) → làm trước để lấy momentum
2. **Pitch** → template gallery + workflow tabs
3. **Framer** → interactive demos + testimonials
4. **One Design** (khó nhất) → full-screen transitions + custom cursor

---

> 📝 *File này được tạo bởi Antigravity để tham khảo khi clone. Mỗi section có đủ thông tin về hiệu ứng, cấu trúc và tech stack.*
