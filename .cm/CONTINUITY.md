# CodyMaster Working Memory
Last Updated: 2026-04-15T10:49:00
Current Phase: refining
Current Iteration: 3
Project: Portfolio Clone (adriengervaix.com)

## Active Goal
Hoàn thiện trang chủ portfolio. Sau đó mở rộng: mỗi ô dự án → clone web riêng, mỗi ô marquee → trang nghề nghiệp riêng.

## Current Task
- ID: T-004
- Title: Fix hero layout — orb không che chữ, CV business card, xóa floating card
- Status: completed
- Skill: cm-continuity

## Just Completed
- **Orb Repositioned**: Dịch `.hero-visual` sang `right: -60px; top: 65%` + `pointer-events: none` + `z-index: 1`. Giờ orb nằm gọn ở góc dưới phải chữ title, KHÔNG che text intro.
- **Xóa Floating CV Card**: Gỡ hoàn toàn khối `floating-cv-card` (absolute positioned) vì nó nằm ĐÈ lên text "Nơi lưu lại...".
- **Xóa Nav CV Button**: Gỡ nút "Xem CV" trên thanh navbar.
- **CV Business Card**: Thay thế card visit 04 nhỏ bằng `.cv-business-card` full-width nằm dưới hàng contact (Email/Fb/Gh). Hiển thị tên + role + nút Tải CV. Hover có border accent + shadow + icon đổi màu.
- **ROADMAP.md**: Tạo file ý tưởng & tiến độ tại `c:\Users\Admin\Desktop\codex\ROADMAP.md`.

## Next Actions (Priority Order)
1. Chờ Sếp duyệt layout Hero mới.
2. Phase 2: Tạo thư mục `projects/` và clone từng dự án vào trang riêng.
3. Phase 3: Xác định danh sách nghề và tạo trang nghề nghiệp.

## Mistakes & Learnings

### Ý thức Tự Cải Thiện (Self-Correction)
- **What Failed 1**: Dùng `position: absolute` cho floating-cv-card khiến nó che chữ trên mọi kích thước màn hình.
- **How to Prevent 1**: Khi cần thêm element mới, ưu tiên dùng flow layout (normal document flow) thay vì absolute positioning. Absolute chỉ dùng khi đã chắc chắn không gian trống.
- **What Failed 2**: z-index trick không thay thế được việc di chuyển vật lý element khi nó đang che content.
- **How to Prevent 2**: "Di chuyển" (position shift) > "Chồng lên" (z-index) khi xử lý overlap.
- **What Failed 3**: Codebase Memory MCP index bị mất giữa các session (project not found).
- **How to Prevent 3**: Kiểm tra `list_projects` đầu mỗi session, nếu thiếu thì re-index ngay.
- **Agent**: Antigravity

## Working Context
Dự án sử dụng: HTML, JS & GSAP. File chính: index.html, css/styles.css, js/script.js.
Local server: python -m http.server 5000
Ý tưởng mở rộng được lưu tại ROADMAP.md

## Files Currently Being Modified
- `index.html`: Cấu trúc hero section, CV business card.
- `css/styles.css`: Orb positioning, CV business card styles.
- `ROADMAP.md`: File ý tưởng & tiến độ dự án.
