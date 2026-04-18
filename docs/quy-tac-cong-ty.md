# 📋 QUY TẮC CÔNG TY — HINDSIGHT MEMORY (Bank: shared)
> Cập nhật: 17/04/2026 | Tổng: 553 mục | Phân loại bởi Antigravity

---

## 🏛️ 1. QUY TẮC VẬN HÀNH CHUNG

### Vai trò & Quyền hạn
- **Sếp (Sep)** là chủ nhân và người điều hành tối cao của tất cả các agent AI
- Trợ lý phải thông báo Sếp khi gặp vấn đề, KHÔNG tự ý tiếp tục mà không báo
- Khi gặp trang yêu cầu đăng nhập → chụp màn hình → báo Sếp → chờ Sếp đăng nhập xong → mới tiếp tục

### Quy tắc Ký ức
- Mọi agent PHẢI đọc shared memory trước mỗi nhiệm vụ quan trọng
- Chỉ lưu vào bank `shared` những thông tin ảnh hưởng TOÀN CÔNG TY (quy tắc, hạ tầng, công cụ chung)
- Agent không được lặp lại phương pháp đã thất bại — phải tự học và đổi cách

### Quy tắc Code
- **Codebase Memory MCP**: Bắt buộc dùng cho MỌI dự án code (quét, lập chỉ mục, tạo biểu đồ)
- **Obsidian MCP**: Ghi lại thủ công các lý do, quyết định kiến trúc, lỗi đã sửa bằng Markdown

---

## 🖥️ 2. HẠ TẦNG & KẾT NỐI

### VPS Chính (openfang01)
- **Vùng:** Singapore
- **OS:** Ubuntu 22.04 LTS
- **Cấu hình:** e2-highmem-2 (2 vCPU, 16GB RAM)
- **Sudo:** NOPASSWD ALL (không cần nhập mật khẩu)
- **VNC:** localhost:6080, password: `vps2026`

### Máy Cày (Desktop)
- **Tên:** MÁY CÀY
- **IP Local:** 192.168.2.67
- **User:** gn / Password: 123456
- **OS:** Windows
- **Kết nối:** WiFi nội bộ

### Máy Admin (Laptop hiện tại)
- **User:** Admin
- **Đang chạy:** Antigravity/Gemini

### Kết nối máy mới
- Sếp cung cấp file `CAI_SSH.bat` → chạy trên máy mới → gửi USER, HOST, IP lại
- AI thêm thông tin vào `machines.json` để hoàn tất cấu hình SSH

---

## 🔑 3. API KEYS & CREDENTIALS

### Gemini API
- Key: `AIzaSyD6J4FO1JNC7bBsJojxK5toBx6XD_z_ETQ`
- Lưu tại: `~/.bashrc` trên VPS

### Firecrawl
- Có **2 khóa riêng biệt**
- Khóa Claw: `fc-ea089de62520465cbb6d29794e03b6c9`
- **Không sử dụng proxy**
- **Quy tắc auto-swap:** Khi hết credit (báo 'Insufficient credits') → agent tự động thay khóa API từ pool

### Facebook API
- Config: `/home/nep94121/config/facebook-api.json` (chmod 600)
- App ID: `1294776395803687`
- Ad Account: `act_1739114627048969` (tiền VND), tên "Claw Tro Ly"
- Page: "Dich vu claw" ID `1037379679459112` (permanent token)

---

## 🤖 4. CÔNG CỤ & PHẦN MỀM

### Browser Automation
- **Vision** (CLAW): Chỉ bật khi gặp CAPTCHA, Canvas/WebGL, kéo thả, hoặc DOM fail 2 lần
- **NopeCHA**: Extension miễn phí auto solve reCAPTCHA + hCaptcha
- **PyAutoGUI**: Dùng khi popup không thấy / loading vô hạn / click không phản hồi
- Quy tắc Browser Vision đã ghi tại `/home/nep94121/agent_system_prompt.md`

### Video Analysis
- Script: `analyze_video.py` (dùng yt-dlp + Gemini 2.5 Flash)
- Dùng khi IDE không hỗ trợ xem video
- Video tải về folder `video` → XÓA sau khi xử lý xong
- Hệ thống dùng chung cho mọi agent

### Voice AI
- **LuxTTS**: AI nhân bản giọng nói (mẫu 3 giây)
- Chưa hỗ trợ tiếng Việt gốc (tính đến 14/04/2026)

### Image Generation
- Script: `~/image_gen.py`
- Lệnh: `python3 ~/image_gen.py --prompt 'mo ta anh' --json`
- Output dạng JSON, lưu image paths

### OAuth
- Script `claw-auth-renew` tự động gia hạn token ChatGPT Plus cho OpenClaw
- Lệnh: `/claw-auth` hoặc `claw-auth-renew.ps1`
- ⚠️ KHÔNG dùng `openclaw models auth login` qua SSH (cần TTY)

### GUI Automation
- Script `gui-helper`: quản lý focus cửa sổ, tránh hidden windows, clear modifier keys
- `pencil-cdp` tool tại `/usr/local/bin/pencil-cdp`

### Skills System
- Skill chia sẻ tại VPS: `/home/nep94121/shared-skills/skill-creator/`
- Agent phải kiểm tra skill local (`Test-Path` / `ls`), nếu không có → SCP từ VPS về
- **Skill Security Gate**: Ngăn chặn mã độc bằng Static Analyzer + Docker Sandbox
- ⛔ Skill `obra/superpowers`: Risk 100/100 → **BAN mặc định**

---

## 🎨 5. THƯ VIỆN THIẾT KẾ (Miễn phí 100%)

### Animation
| Thư viện | Mô tả |
|---|---|
| GSAP | #1 animation, miễn phí + ScrollTrigger |
| Anime.js | Lightweight animation engine |
| AOS / ScrollReveal | Scroll reveal animations |
| Lottie / LottieFiles | JSON animations |
| Motion One | Modern tiny animation API |
| Typed.js | Typing animations |
| Atropos.js | 3D parallax hover |
| Animate.css | 80+ CSS animations |
| Cursorly.js | Custom cursors + particles |
| Particles.js / tsParticles | Particle backgrounds |
| Glide.js | Lightweight slider |

### Colors & Gradients
| Tool | Mô tả |
|---|---|
| Coolors | #1 palette generator (spacebar = magic) |
| Adobe Color | Color wheel + harmony |
| Khroma | AI color palette |
| Color Hunt | Community curated palettes |
| Happy Hues | Palettes on real designs |
| Realtime Colors | Preview on real UI |
| Eva Design System | Semantic colors |
| Huemint | AI brand color |
| ColorHexa | Color encyclopedia |
| CSS Gradient | Gradient generator |
| WebGradients | 180 linear gradients |
| MeshGradient | Mesh gradients |
| Haikei | SVG waves, blobs, gradients |
| Super Designer Backgrounds | 100+ CSS patterns |

### Components & UI
| Tool | Mô tả |
|---|---|
| shadcn/ui | #1 copy-paste components (React) |
| Aceternity UI | Premium animated components |
| Magic UI | Animated landing page |
| Eldora UI | Beautiful components |
| Float UI | Modern responsive components |

### Typography & Icons
| Tool | Mô tả |
|---|---|
| Fontsource | Self-host open-source fonts |
| Variable Fonts | Font playground |
| Font Joy | AI font pairing |
| Lucide Icons | 1,368+ SVG icons (from Feather) |
| TOOOLS Icon Hub | Free open-source icon hub |

### Illustrations
| Tool | Mô tả |
|---|---|
| unDraw | Customizable SVG illustrations |
| Blush Design | Illustration collections |

### CSS Tools
| Tool | Mô tả |
|---|---|
| CSS Grid Generator | Grid layout tool |
| MagicPattern | Pattern & background generator |

---

## 🏢 6. DỰ ÁN & PHÂN CÔNG

### AI Web Design Project
- **CEO:** Dùng Paperclip (28.8K GitHub stars)
- **Design Team Lead:** Dùng Pencil.Dev
- Mỗi agent/role có tool riêng biệt

---

## 🔧 7. CONFIG MCP

### Lưu ý quan trọng (BUG ĐÃ FIX 17/04/2026)
- Antigravity có file config RIÊNG tại `C:\Users\Admin\.gemini\antigravity\mcp_config.json`
- File này ĐÈ LÊN `settings.json` chung
- Khi thêm MCP server mới cho Antigravity → PHẢI thêm vào `mcp_config.json`

---

> ⚠️ **Lưu ý:** Tổng bank shared có **553 mục**, nhiều mục bị trùng lặp (cùng nội dung nhưng tiếng Anh/Việt). Sếp nên cân nhắc dọn dẹp để tối ưu hiệu suất đọc ký ức.
