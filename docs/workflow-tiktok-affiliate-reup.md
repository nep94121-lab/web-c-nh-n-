# 🔥 Workflow: TikTok Shop Affiliate — Re-up Video Douyin

> Mở file này bằng **Markdown Preview** (Ctrl+Shift+V) để xem sơ đồ trực quan!
> 
> 📅 Bóc tách từ video hướng dẫn thực chiến — 09/04/2026

---

## 📊 Sơ đồ tổng quan — Toàn bộ quy trình

```mermaid
flowchart TD
    A["🚀 BƯỚC 1: Chọn Ngách & Sản Phẩm"] --> B["🔍 BƯỚC 2: Tìm Video Gốc trên Douyin"]
    B --> C["⬇️ BƯỚC 3: Tải Video Không Logo"]
    C --> D["🎬 BƯỚC 4: Import vào CapCut PC"]
    D --> E["📝 BƯỚC 5: Tạo Phụ Đề Tiếng Trung (Whisper)"]
    E --> F["📤 BƯỚC 6: Xuất File .SRT"]
    F --> G["💎 BƯỚC 7: Dịch sang Tiếng Việt bằng Gemini API"]
    G --> H["📥 BƯỚC 8: Import .SRT Tiếng Việt vào DaVinci"]
    H --> I["🗣️ BƯỚC 9: FPT.AI Voicemaker — Tạo Giọng AI Việt Tự Nhiên"]
    I --> J["🔊 BƯỚC 10: Xử Lý Âm Thanh Gốc"]
    J --> K["✂️ BƯỚC 11: Căn Chỉnh & Che Phụ Đề Trung"]
    K --> L["🎥 BƯỚC 12: Render Video Chất Lượng Cao"]
    L --> M{"📱 Chuyển qua ĐT?"}
    M -->|"Dùng ĐT đăng"| N["📲 BƯỚC 13a: Chuyển File qua ĐT"]
    M -->|"Dùng PC đăng"| O["💻 BƯỚC 13b: Đăng Trực Tiếp từ PC"]
    N --> P["🚀 BƯỚC 14: Đăng TikTok + Gắn Affiliate"]
    O --> P
    P --> Q["💰 BƯỚC 15: Chờ Đơn Hàng & Thu Tiền"]

    style A fill:#1a1a2e,stroke:#e94560,color:#fff,stroke-width:2px
    style G fill:#533483,stroke:#e94560,color:#fff,stroke-width:2px
    style I fill:#e94560,stroke:#fff,color:#fff,stroke-width:2px
    style M fill:#533483,stroke:#e94560,color:#fff,stroke-width:2px
    style P fill:#0f3460,stroke:#16c79a,color:#fff,stroke-width:2px
    style Q fill:#2e7d32,stroke:#fff,color:#fff,stroke-width:3px
```

---

## 🔄 Workflow theo Phase — Nhìn chia nhóm

```mermaid
graph TB
    subgraph P1["📦 PHASE 1 — NGHIÊN CỨU & CHỌN SẢN PHẨM"]
        A1["🎯 Chọn ngách ít cạnh tranh"] --> A2["🔎 Duyệt kênh Douyin theo ngách"]
        A2 --> A3["🛒 Đối chiếu sản phẩm trên TikTok Shop VN"]
        A3 --> A4{"Giống ≥ 95%?"}
        A4 -->|"Không"| A2
        A4 -->|"Có"| A5["✅ Chốt sản phẩm + video gốc"]
    end

    subgraph P2["⬇️ PHASE 2 — TẢI & IMPORT VIDEO"]
        B1["📋 Copy link video Douyin"] --> B2["🌐 Mở taivideo.vn"]
        B2 --> B3["⬇️ Tải video không logo"]
        B3 --> B4["🎬 Import vào DaVinci Resolve"]
    end

    subgraph P3["💎 PHASE 3 — DỊCH THUẬT & VIỆT HÓA"]
        C1["📝 Whisper auto-caption tiếng Trung"] --> C2["📤 Xuất file .SRT"]
        C2 --> C3["💎 Gửi qua Gemini API dịch Việt"]
        C3 --> C4["📥 Lấy file .SRT tiếng Việt"]
        C4 --> C5["📥 Import .SRT Việt vào DaVinci"]
    end

    subgraph P4["🎙️ PHASE 4 — XỬ LÝ ÂM THANH & HÌNH ẢNH"]
        D1["🗣️ FPT.AI Voicemaker — Giọng AI Việt tự nhiên"] --> D2["🔇 Tách/Xóa giọng Trung gốc"]
        D2 --> D3["🔊 Giảm nhạc nền, tăng giọng AI"]
        D3 --> D4["✂️ Căn timecode giọng AI khớp hình"]
        D4 --> D5["🖌️ Kéo text đè chữ Trung còn sót"]
    end

    subgraph P5["🚀 PHASE 5 — XUẤT & ĐĂNG TẢI"]
        E1["🎥 Render 2K/60fps"] --> E2["📲 Chuyển file sang ĐT hoặc đăng PC"]
        E2 --> E3["🏷️ Gắn sản phẩm Affiliate"]
        E3 --> E4["🚀 Đăng TikTok"]
        E4 --> E5["💰 Theo dõi đơn hàng"]
    end

    P1 --> P2
    P2 --> P3
    P3 --> P4
    P4 --> P5

    style P1 fill:#1e3a5f,stroke:#4fc3f7,color:#fff
    style P2 fill:#1e3a5f,stroke:#ff8a65,color:#fff
    style P3 fill:#1e3a5f,stroke:#ab47bc,color:#fff
    style P4 fill:#1e3a5f,stroke:#ef5350,color:#fff
    style P5 fill:#1e3a5f,stroke:#66bb6a,color:#fff
    style E5 fill:#2e7d32,stroke:#fff,color:#fff,stroke-width:3px
```

---

## 🛠️ Hệ sinh thái công cụ — Sequence Diagram

```mermaid
sequenceDiagram
    participant U as 👤 Người làm
    participant DY as 🇨🇳 Douyin
    participant WEB as 🌐 taivideo.vn
    participant DV as 🎬 DaVinci Resolve
    participant GM as 💎 Gemini API
    participant FPT as 🗣️ FPT.AI TTS
    participant TT as 📱 TikTok

    U->>DY: 1. Tìm video sản phẩm theo ngách
    U->>WEB: 2. Paste link Douyin → tải video không logo
    WEB-->>U: Video .mp4 sạch
    U->>DV: 3. Import video
    DV-->>U: 4. Whisper auto-caption tiếng Trung → Xuất .SRT
    U->>GM: 5. Gửi .SRT qua API dịch Việt
    GM-->>U: 6. File .SRT tiếng Việt
    U->>FPT: 7. Gửi text qua FPT.AI TTS API → audio giọng Việt
    FPT-->>U: 8. File audio .mp3 giọng AI (Gia Huy/Ban Mai)
    U->>DV: 9. Import .SRT Việt + audio AI
    U->>DV: 10. Xóa giọng Trung, ghép audio mới
    U->>DV: 11. Căn chỉnh text đè chữ Trung
    DV-->>U: 12. Render video hoàn chỉnh
    U->>TT: 13. Đăng video + Gắn affiliate link
    TT-->>U: 💰 Tiền hoa hồng
```

---

## 📋 Chi tiết từng bước

### Bước 1: 🎯 Chọn Ngách & Sản Phẩm

```mermaid
flowchart LR
    A["🎯 Brainstorm ngách"] --> B{"Ít cạnh tranh?"}
    B -->|"Không"| A
    B -->|"Có"| C["🔎 Vào Douyin tìm kênh theo ngách"]
    C --> D["🛒 Đối chiếu TikTok Shop VN"]
    D --> E{"SP giống ≥ 95%?"}
    E -->|"Không"| C
    E -->|"Có"| F["✅ Chốt SP + Video"]

    style A fill:#2d3436,stroke:#00cec9,color:#fff
    style F fill:#2e7d32,stroke:#fff,color:#fff,stroke-width:2px
```

**Tiêu chí quan trọng:**
- Ngách ít cạnh tranh (ví dụ: gia dụng, đồ tiện ích)
- Video gốc chất lượng cao, mới đăng
- Sản phẩm trên TikTok Shop VN phải giống **tối thiểu 95%** với video Douyin
- Đánh vào **chất lượng**, không đánh vào số lượng

---

### Bước 2–3: ⬇️ Tải Video Douyin

```mermaid
flowchart LR
    A["📋 Copy link Douyin"] --> B["🌐 Mở taivideo.vn"]
    B --> C["📋 Paste link"]
    C --> D["⬇️ Tải MP4 không logo"]
    D --> E["💾 Lưu vào máy tính"]

    style A fill:#2d3436,stroke:#00cec9,color:#fff
    style E fill:#2e7d32,stroke:#fff,color:#fff
```

**Công cụ:** `taivideo.vn` hoặc Google tìm "tải video Douyin" — chọn tool miễn phí, tải sạch logo.

---

### Bước 4–6: 📝 Tạo Phụ Đề & Xuất SRT

```mermaid
flowchart LR
    A["🎬 Import video vào DaVinci Resolve"] --> B["📝 Whisper plugin → Auto-caption"]
    B --> C["🇨🇳 Nhận diện tiếng Trung tự động"]
    C --> D["⏳ Đợi Whisper xử lý"]
    D --> E["📤 Xuất phụ đề → file .SRT"]

    style A fill:#2d3436,stroke:#00cec9,color:#fff
    style E fill:#e94560,stroke:#fff,color:#fff,stroke-width:2px
```

**Công cụ:** DaVinci Resolve (MIỄN PHÍ) + plugin Whisper để auto-caption. Hoặc dùng **SubtitleWhisper.com** (online, miễn phí) nếu chưa cài plugin.

---

### Bước 7: 💎 Dịch bằng Gemini API

```mermaid
flowchart LR
    A["📋 Đọc file .SRT tiếng Trung"] --> B["💎 Gửi qua Gemini API"]
    B --> C["📝 Prompt dịch + giữ timecode"]
    C --> D["⏳ Gemini dịch tự động"]
    D --> E["📥 Nhận file .SRT Việt"]

    style B fill:#4285f4,stroke:#fff,color:#fff,stroke-width:2px
    style E fill:#2e7d32,stroke:#fff,color:#fff
```

**Prompt mẫu:**
> *"Đây là hội thoại review sản phẩm [TÊN SP]. Hãy dịch từ tiếng Trung sang tiếng Việt, sửa theo chuẩn văn phong Việt Nam, càng hài hước càng tốt. Giữ nguyên timecode. Sau đó xuất thành file .SRT."*

**Tại sao Gemini API:**
- ✅ Sếp đã có API key sẵn
- ✅ Không giới hạn như ChatGPT free (bị rate limit, phải chờ)
- ✅ Có thể tự động hóa bằng script (không cần copy-paste thủ công)
- ✅ Dịch chất lượng tương đương hoặc tốt hơn ChatGPT free

---

### Bước 8–11: 🎙️ Xử Lý Âm Thanh & Hoàn Thiện

```mermaid
flowchart TD
    A["📥 Import .SRT Việt vào DaVinci"] --> B["🗑️ Xóa phụ đề Trung cũ"]
    B --> C["✏️ Chỉnh dấu câu, văn bản cho tự nhiên"]
    C --> D["🗣️ FPT.AI API → Tạo audio giọng Việt"]
    D --> E["🎧 Chọn giọng: giahuy (nam) hoặc banmai (nữ)"]
    E --> F["🔇 Tách âm thanh gốc → Xóa giọng Trung"]
    F --> G["🔊 Giảm nhạc nền nhỏ hơn giọng AI"]
    G --> H["⏱️ Căn timecode giọng AI khớp hình"]
    H --> I["🖌️ Kéo text đè chữ Trung còn sót"]
    I --> J["👀 Review toàn bộ video"]
    J --> K{"Ổn chưa?"}
    K -->|"Chưa"| H
    K -->|"Rồi"| L["✅ Hoàn thiện"]

    style D fill:#e94560,stroke:#fff,color:#fff,stroke-width:2px
    style F fill:#e94560,stroke:#fff,color:#fff,stroke-width:2px
    style L fill:#2e7d32,stroke:#fff,color:#fff,stroke-width:2px
```

**Về FPT.AI Voicemaker (MIỄN PHÍ 100K ký tự/tháng, giọng cực hay):**
- 🎙️ **giahuy** — Giọng nam miền Nam, trẻ, năng động (⭐ khuyên dùng cho review/game)
- 🎙️ **banmai** — Giọng nữ miền Bắc, tự nhiên, truyền cảm (phổ biến nhất)
- 🎙️ **leminh** — Giọng nam miền Bắc, trầm, chuyên nghiệp
- API: `POST https://api.fpt.ai/hmi/tts/v5` — Lấy key từ https://console.fpt.ai
- Free tier: **100.000 ký tự/tháng** (~2.3 giờ audio — đủ làm ~70 video TikTok)
- 📌 **Xem chi tiết script & API →** File `workflow-tiktok-chi-tiet.md`

**Mẹo chỉnh sửa:**
- Nhạc nền Douyin thường **to quá** → phải giảm xuống thấp hơn giọng thuyết minh
- Bọn Trung nói nhanh → tiếng Việt sẽ thừa hoặc thiếu → tăng tốc độ đọc hoặc cắt câu thừa
- Chỉnh từng đoạn phụ đề riêng cho chuẩn, không "áp dụng cho tất cả"

---

### Bước 12–15: 🚀 Xuất & Đăng Tải

```mermaid
flowchart LR
    A["🎥 Render 2K/60fps"] --> B{"Thiết bị đăng?"}
    B -->|"📱 Điện thoại"| C["📲 Send Anywhere / AirDrop"]
    B -->|"💻 Máy tính"| D["🌐 TikTok Studio Web"]
    C --> E["📱 Mở TikTok trên ĐT"]
    D --> F["💻 Mở TikTok Studio trên PC"]
    E --> G["🏷️ Gắn sản phẩm Affiliate"]
    F --> G
    G --> H["🚀 ĐĂNG!"]
    H --> I["💰 Chờ nổ đơn"]

    style A fill:#2d3436,stroke:#00cec9,color:#fff
    style D fill:#0f3460,stroke:#16c79a,color:#fff,stroke-width:2px
    style H fill:#e94560,stroke:#fff,color:#fff,stroke-width:2px
    style I fill:#2e7d32,stroke:#fff,color:#fff,stroke-width:3px
```

---

## 📱 vs 💻 — CÓ CẦN ĐIỆN THOẠI KHÔNG?

### Kết luận: ❌ KHÔNG BẮT BUỘC — Máy tính làm hết 100% được!

```mermaid
pie title "Tỷ lệ công việc theo thiết bị"
    "💻 Máy tính (bắt buộc)" : 85
    "📱 Điện thoại (tùy chọn)" : 15
```

### So sánh chi tiết:

| Công đoạn | 💻 Máy tính | 📱 Điện thoại | Ghi chú |
|-----------|:-----------:|:-------------:|---------|
| Tìm ngách/SP trên Douyin | ✅ Web | ✅ App | PC tiện hơn để so sánh |
| Tải video Douyin | ✅ taivideo.vn | ✅ App tải | PC nhanh hơn |
| Chỉnh sửa video | ✅ **DaVinci Resolve** | ❌ Chỉ PC | **PC bắt buộc** — phần mềm chuyên nghiệp |
| Dịch Gemini API | ✅ Script tự động | ✅ API | Tự động hóa được |
| Render video | ✅ Nhanh hơn | ⚠️ Chậm hơn | PC vượt trội |
| **Đăng TikTok** | ✅ **TikTok Studio** | ✅ App TikTok | **Cả hai đều được!** |
| Gắn Affiliate | ✅ TikTok Studio | ✅ App TikTok | **Cả hai đều được!** |

### 🔑 Giải pháp 100% máy tính — không cần điện thoại:

**TikTok Studio** (https://www.tiktok.com/tiktokstudio) cho phép:
- ✅ Upload video trực tiếp từ PC
- ✅ Thêm mô tả, hashtag
- ✅ Gắn sản phẩm Affiliate
- ✅ Lên lịch đăng bài
- ✅ Xem analytics & đơn hàng

> 💡 **Lý do video gốc dùng điện thoại:** Người hướng dẫn thói quen dùng app TikTok trên ĐT + dùng Send Anywhere chuyển file. Nhưng đây là **thói quen cá nhân**, không phải yêu cầu bắt buộc. TikTok Studio trên web làm được tất cả.

---

## 💰 Chi phí vận hành

| Mục | Chi phí | Ghi chú |
|-----|---------|---------|
| DaVinci Resolve | **MIỄN PHÍ** | Thay CapCut Pro, chuyên nghiệp hơn |
| Gemini API | **MIỄN PHÍ** (free tier) | Thay ChatGPT, không giới hạn |
| FPT.AI Voicemaker | **MIỄN PHÍ** (100K ký tự/tháng) | Giọng Gia Huy/Ban Mai — tự nhiên nhất |
| Whisper (auto-caption) | **MIỄN PHÍ** | Plugin DaVinci hoặc online |
| taivideo.vn | **MIỄN PHÍ** | Tải video Douyin |
| Send Anywhere | **MIỄN PHÍ** | Chỉ cần nếu dùng ĐT đăng |
| TikTok Studio | **MIỄN PHÍ** | Đăng bài từ PC |
| **TỔNG** | **🎉 0đ/tháng** | **Hoàn toàn MIỄN PHÍ!** |

---

## 💡 Mẹo & Lưu ý quan trọng

1. **Chất lượng > Số lượng** — 1 video chuẩn hơn 10 video bừa
2. **Sản phẩm phải giống 95%+** — Người mua thông minh, không bịp được
3. **Prompt Gemini càng chi tiết càng tốt** — Nêu rõ tên SP, phong cách dịch
4. **Nhạc nền phải NHỎ hơn giọng thuyết minh** — Douyin hay cho nhạc to
5. **Chỉnh từng đoạn phụ đề** — Không dùng "áp dụng cho tất cả"
6. **Chọn giọng AI phù hợp ngách** — Gia dụng → giọng nữ vui vẻ
7. **Render chất lượng cao** — 2K/60fps tối thiểu
8. **Kênh tham khảo:** `@shopdogiadunghuuich` (kênh của người hướng dẫn)

---

> 📌 **Ctrl+Shift+V** để xem sơ đồ trực quan!
