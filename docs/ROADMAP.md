# 🗺️ CODEX Portfolio — Ý Tưởng & Tiến Độ

> **Chủ sở hữu:** Nguyễn Tuấn Anh — AI Architect
> **Bắt đầu:** 2026-04-14
> **Cập nhật lần cuối:** 2026-04-15

---

## 📐 Kiến Trúc Tổng Thể

Portfolio là một trang web tĩnh (HTML/CSS/JS + GSAP) clone phong cách adriengervaix.com.

### Cấu trúc trang:

```
index.html (Trang chính)
├── Hero Section — "One Mind Infinite" + giới thiệu + CV card
├── Marquee — Băng chạy hiển thị các nghề đã làm (mỗi ô = 1 trang riêng)
├── Projects Section — Grid dự án (mỗi ô = 1 trang web clone riêng)
├── About Section
└── Footer
```

---

## 🎯 Ý Tưởng Chính

### 1. Ô Dự Án → Clone Website riêng
Mỗi ô dự án (VD: "Codex Portfolio", "Firecrawl Workflow", "TikTok Manager", "Teaching Platform") sẽ **link sang một trang riêng** chứa bản clone đầy đủ của website dự án đó.

| Dự án | Trạng thái | Trang |
|-------|-----------|-------|
| Codex Portfolio | 🟡 Đang làm | `projects/codex.html` |
| Firecrawl Workflow | ⚪ Chưa bắt đầu | `projects/firecrawl.html` |
| TikTok Manager | ⚪ Chưa bắt đầu | `projects/tiktok.html` |
| Teaching Platform | ⚪ Chưa bắt đầu | `projects/teaching.html` |

### 2. Băng Chạy Marquee → Trang nghề nghiệp
Băng chạy ngang (marquee) hiện đang là các ô gradient màu. Mỗi ô sẽ đại diện cho **một nghề/vai trò đã từng làm**, và khi ấn vào sẽ mở ra trang riêng mô tả kinh nghiệm ở nghề đó.

| Nghề | Trạng thái | Trang |
|------|-----------|-------|
| *(Chưa xác định)* | ⚪ Chưa lên danh sách | `careers/xxx.html` |

### 3. CV / Hồ sơ năng lực
- CV hiển thị dạng **Card Visit** ngay dưới các nút liên hệ ở Hero section
- Ấn vào mở file `Nguyen_Tuan_Anh_CV.pdf`

---

## ✅ Tiến Độ

### Phase 1: Trang chủ (Hero Section) — 🟡 ĐANG LÀM

| Task | Trạng thái | Ghi chú |
|------|-----------|---------|
| Clone layout adriengervaix.com | ✅ Xong | HTML/CSS/JS cơ bản |
| Loading screen animation | ✅ Xong | GSAP timeline |
| Custom cursor | ✅ Xong | Dot + Ring |
| Hero text animation | ✅ Xong | GSAP reveal |
| Orb gradient animation | ✅ Xong | CSS + GSAP |
| Fix email text clipping | ✅ Xong | Ghost text technique |
| Fix orb che chữ | ✅ Xong | Reposition right:-60px, top:65% |
| CV Business Card | ✅ Xong | Full-width card visit style |
| Icon thay thế (Lucide) | ✅ Xong | SVG icons |
| Marquee auto-scroll | ✅ Xong | Vòng lặp vô hạn |
| Projects grid | ✅ Xong | 2x2 grid layout |
| About section | ✅ Xong | Helix animation + text |
| Footer | ✅ Xong | Links + copyright |
| Responsive mobile | ⚪ Chưa làm | |
| Deploy lên Vercel | 🔴 Cần Sếp duyệt | KHÔNG tự deploy |

### Phase 2: Trang dự án — ⚪ CHƯA BẮT ĐẦU

| Task | Trạng thái |
|------|-----------|
| Tạo thư mục `projects/` | ⚪ |
| Clone từng dự án vào trang riêng | ⚪ |
| Link từ project card → trang dự án | ⚪ |

### Phase 3: Trang nghề nghiệp — ⚪ CHƯA BẮT ĐẦU

| Task | Trạng thái |
|------|-----------|
| Xác định danh sách nghề | ⚪ |
| Tạo thư mục `careers/` | ⚪ |
| Thiết kế template cho mỗi trang nghề | ⚪ |
| Thay ô gradient marquee bằng ô nghề thực | ⚪ |

---

## 🔧 Tech Stack

- **HTML5 + CSS3 + Vanilla JS**
- **GSAP** — Animation engine
- **Lenis** — Smooth scrolling
- **Lucide Icons** — SVG icon set
- **Vercel** — Hosting (chỉ deploy khi Sếp cho phép)

---

## 📝 Ghi chú quan trọng

1. **KHÔNG tự deploy lên Vercel** — Luôn chờ Sếp xác nhận
2. **Luôn dùng Codebase Memory MCP** khi tìm code
3. **Luôn test bằng browser trước** khi báo cáo xong
4. **Cập nhật CONTINUITY.md** sau mỗi phiên làm việc
