// ==========================================================================
// KHO 100 MẪU THIỆP CƯỚI WEB ĐA DẠNG PHONG CÁCH (10 BỘ SƯU TẬP x 10 MẪU)
// ==========================================================================

const WEDDING_CATEGORIES = [
  { id: 'all', name: 'Tất Cả (100 Mẫu)', icon: 'sparkles' },
  { id: 'traditional', name: 'Truyền Thống & Á Đông', icon: 'heart' },
  { id: 'floral', name: 'Hoa Cỏ & Botanical', icon: 'flower-2' },
  { id: 'luxury', name: 'Hoàng Gia & Luxury', icon: 'crown' },
  { id: 'rustic', name: 'Rustic & Vintage', icon: 'feather' },
  { id: 'minimalist', name: 'Tối Giản Hiện Đại', icon: 'layout' },
  { id: 'ocean', name: 'Biển & Mùa Hè', icon: 'waves' },
  { id: 'pastel', name: 'Pastel Dịu Ngọt', icon: 'palette' },
  { id: 'watercolor', name: 'Màu Nước & Hội Họa', icon: 'brush' },
  { id: 'celestial', name: 'Dạ Hội & Ngân Hà', icon: 'moon' },
  { id: 'trendy', name: 'Xu Hướng Gen Z & Retro', icon: 'zap' }
];

const WEDDING_TEMPLATES = [
  // =========================================================================
  // BỘ 1: TRUYỀN THỐNG & Á ĐÔNG (1 - 10)
  // =========================================================================
  {
    id: 1,
    name: "Song Hỷ Cát Tường",
    category: "traditional",
    tag: "Phổ biến",
    desc: "Sắc đỏ son may mắn kết hợp ánh kim chữ Hỷ truyền thống Á Đông.",
    thumb: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#B91C1C", secondary: "#D97706", accent: "#DC2626", text: "#450A0A",
      bg: "from-rose-50 via-amber-50 to-red-100", cardBg: "#FFFFFF", envelopeWax: "#B91C1C",
      petals: ["#DC2626", "#F59E0B", "#FCA5A5", "#FEF3C7"]
    }
  },
  {
    id: 2,
    name: "Long Phụng Hòa Minh",
    category: "traditional",
    tag: "Trang trọng",
    desc: "Họa tiết rồng phượng sum vầy trên nền lụa đỏ thắm quyền quý.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#991B1B", secondary: "#B45309", accent: "#B91C1C", text: "#3B0707",
      bg: "from-red-50 via-orange-50 to-rose-100", cardBg: "#FFFDF9", envelopeWax: "#991B1B",
      petals: ["#991B1B", "#D97706", "#FEE2E2"]
    }
  },
  {
    id: 3,
    name: "Gốm Sứ Hoa Lam",
    category: "traditional",
    tag: "Thanh tao",
    desc: "Cảm hứng gốm hoa lam men sứ cổ truyền Việt Nam thanh lịch.",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#1D4ED8", secondary: "#3B82F6", accent: "#2563EB", text: "#1E293B",
      bg: "from-blue-50 via-slate-50 to-sky-100", cardBg: "#FFFFFF", envelopeWax: "#1D4ED8",
      petals: ["#60A5FA", "#93C5FD", "#DBEAFE", "#E2E8F0"]
    }
  },
  {
    id: 4,
    name: "Sen Hồng Cung Đình",
    category: "traditional",
    tag: "Duyên dáng",
    desc: "Hương sắc hoa sen thanh tao đại diện cho tình yêu son sắt trăm năm.",
    thumb: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#BE185D", secondary: "#059669", accent: "#DB2777", text: "#500724",
      bg: "from-pink-50 via-emerald-50/20 to-rose-100", cardBg: "#FFFFFF", envelopeWax: "#BE185D",
      petals: ["#F472B6", "#A7F3D0", "#FBCFE8"]
    }
  },
  {
    id: 5,
    name: "Thêu Tay Hoàng Triều",
    category: "traditional",
    tag: "Quý phái",
    desc: "Chi tiết hoa văn thêu chỉ vàng óng ánh trên gấm lụa cao cấp.",
    thumb: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#854D0E", secondary: "#CA8A04", accent: "#A16207", text: "#422006",
      bg: "from-amber-50 via-yellow-50/50 to-stone-100", cardBg: "#FFFEFA", envelopeWax: "#CA8A04",
      petals: ["#FBBF24", "#FDE68A", "#D97706"]
    }
  },
  {
    id: 6,
    name: "Đèn Lồng Phố Hội",
    category: "traditional",
    tag: "Ấm cúng",
    desc: "Không gian cổ kính lãng mạn như đêm rằm phố cổ Hội An.",
    thumb: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#C2410C", secondary: "#D97706", accent: "#EA580C", text: "#431407",
      bg: "from-amber-50 via-orange-50 to-stone-100", cardBg: "#FFFFFF", envelopeWax: "#EA580C",
      petals: ["#FB923C", "#FBBF24", "#FED7AA"]
    }
  },
  {
    id: 7,
    name: "Trầu Cau Đượm Tình",
    category: "traditional",
    tag: "Ý nghĩa",
    desc: "Biểu tượng trầu cau gắn kết trăm năm tình nghĩa vợ chồng.",
    thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#15803D", secondary: "#B91C1C", accent: "#16A34A", text: "#14532D",
      bg: "from-emerald-50 via-stone-50 to-rose-50", cardBg: "#FFFFFF", envelopeWax: "#B91C1C",
      petals: ["#86EFAC", "#FCA5A5", "#BBF7D0"]
    }
  },
  {
    id: 8,
    name: "Thư Pháp Á Đông",
    category: "traditional",
    tag: "Tao nhã",
    desc: "Nét mực thư pháp thanh thoát lưu giữ nguyện ước ước bách niên giai lão.",
    thumb: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#262626", secondary: "#B91C1C", accent: "#171717", text: "#171717",
      bg: "from-stone-100 via-stone-50 to-amber-50/40", cardBg: "#FAF8F5", envelopeWax: "#991B1B",
      petals: ["#F87171", "#D4D4D8", "#FCA5A5"]
    }
  },
  {
    id: 9,
    name: "Gấm Hoa Cát Tường",
    category: "traditional",
    tag: "Sang trọng",
    desc: "Màu gấm đỏ phối ánh vàng hoàng gia rực rỡ và đầm ấm.",
    thumb: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#7F1D1D", secondary: "#D97706", accent: "#991B1B", text: "#3B0707",
      bg: "from-rose-50 via-amber-50 to-red-100", cardBg: "#FFFDFB", envelopeWax: "#7F1D1D",
      petals: ["#EF4444", "#F59E0B", "#FEE2E2"]
    }
  },
  {
    id: 10,
    name: "Áo Dài Thục Nữ",
    category: "traditional",
    tag: "Dịu dàng",
    desc: "Họa tiết nụ hoa e ấp gợi nét duyên dáng tà áo dài ngày cưới.",
    thumb: "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#A21CAF", secondary: "#E11D48", accent: "#C026D3", text: "#4A044E",
      bg: "from-fuchsia-50 via-rose-50 to-pink-100", cardBg: "#FFFFFF", envelopeWax: "#C026D3",
      petals: ["#E879F9", "#FDA4AF", "#F5D0FE"]
    }
  },

  // =========================================================================
  // BỘ 2: HOA CỎ & BOTANICAL (11 - 20)
  // =========================================================================
  {
    id: 11,
    name: "Hoa Hồng Champagne",
    category: "floral",
    tag: "Lãng mạn",
    desc: "Sắc hoa hồng pastel và màu rượu champagne ấm áp dịu dàng.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#B87D65", secondary: "#D4AF37", accent: "#9D5C43", text: "#3A2E2B",
      bg: "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]", cardBg: "#FAF7F2", envelopeWax: "#B87D65",
      petals: ["#FBCFE8", "#FED7AA", "#FDE047"]
    }
  },
  {
    id: 12,
    name: "Bạch Đàn & Khu Vườn Xanh",
    category: "floral",
    tag: "Tươi mát",
    desc: "Lá bạch đàn tươi mát phối hoa trắng mang hơi thở thiên nhiên thuần khiết.",
    thumb: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#047857", secondary: "#10B981", accent: "#059669", text: "#064E3B",
      bg: "from-emerald-50 via-stone-50 to-green-100", cardBg: "#FFFFFF", envelopeWax: "#047857",
      petals: ["#A7F3D0", "#D1FAE5", "#E2E8F0"]
    }
  },
  {
    id: 13,
    name: "Mộc Lan Tinh Khôi",
    category: "floral",
    tag: "Thanh khiết",
    desc: "Cành hoa mộc lan trắng nở rộ biểu tượng cho tình yêu chân thành.",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#475569", secondary: "#94A3B8", accent: "#334155", text: "#1E293B",
      bg: "from-slate-50 via-stone-50 to-zinc-100", cardBg: "#FFFFFF", envelopeWax: "#64748B",
      petals: ["#F1F5F9", "#CBD5E1", "#E2E8F0"]
    }
  },
  {
    id: 14,
    name: "Cẩm Tú Cầu Xanh Lam",
    category: "floral",
    tag: "Dịu dàng",
    desc: "Đóa cẩm tú cầu xanh ngắt dệt nên câu chuyện tình bình yên.",
    thumb: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0284C7", secondary: "#38BDF8", accent: "#0369A1", text: "#0C4A6E",
      bg: "from-sky-50 via-slate-50 to-cyan-100", cardBg: "#FFFFFF", envelopeWax: "#0284C7",
      petals: ["#7DD3FC", "#BAE6FD", "#E0F2FE"]
    }
  },
  {
    id: 15,
    name: "Hướng Dương Rực Rỡ",
    category: "floral",
    tag: "Ngập tràn nắng",
    desc: "Ánh hoa hướng dương vàng ấm áp hướng trọn trái tim về nhau.",
    thumb: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#D97706", secondary: "#F59E0B", accent: "#B45309", text: "#451A03",
      bg: "from-amber-50 via-yellow-50 to-orange-100", cardBg: "#FFFDF7", envelopeWax: "#D97706",
      petals: ["#FCD34D", "#FDE68A", "#FBBF24"]
    }
  },
  {
    id: 16,
    name: "Cành Ô Liu Hy Lạp",
    category: "floral",
    tag: "Thần thoại",
    desc: "Lá ô liu mang lời chúc bình an, trường tồn và hạnh phúc viên mãn.",
    thumb: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#3F6212", secondary: "#65A30D", accent: "#4D7C0F", text: "#1A2E05",
      bg: "from-lime-50/70 via-stone-50 to-amber-50/40", cardBg: "#FFFFFF", envelopeWax: "#4D7C0F",
      petals: ["#BEF264", "#D9F99D", "#E2E8F0"]
    }
  },
  {
    id: 17,
    name: "Oải Hương Provence",
    category: "floral",
    tag: "Thơ mộng",
    desc: "Cánh đồng lavender tím biếc của nước Pháp ngọt ngào và thủy chung.",
    thumb: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#7E22CE", secondary: "#A855F7", accent: "#6B21A8", text: "#3B0764",
      bg: "from-purple-50 via-fuchsia-50/30 to-violet-100", cardBg: "#FFFFFF", envelopeWax: "#7E22CE",
      petals: ["#D8B4FE", "#E9D5FF", "#C084FC"]
    }
  },
  {
    id: 18,
    name: "Anh Đào Tokyo",
    category: "floral",
    tag: "Thanh xuân",
    desc: "Cánh hoa sakura rơi khẽ khàng trong ngày hạnh phúc đẹp nhất.",
    thumb: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#DB2777", secondary: "#F472B6", accent: "#BE185D", text: "#500724",
      bg: "from-pink-50 via-rose-50/40 to-pink-100", cardBg: "#FFFFFF", envelopeWax: "#DB2777",
      petals: ["#F472B6", "#FBCFE8", "#FDF2F8"]
    }
  },
  {
    id: 19,
    name: "Dã Quỳ Cao Nguyên",
    category: "floral",
    tag: "Phóng khoáng",
    desc: "Sắc vàng dã quỳ hoang dã ấm áp như tình yêu rực rỡ nơi phố núi.",
    thumb: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#CA8A04", secondary: "#EAB308", accent: "#A16207", text: "#422006",
      bg: "from-yellow-50 via-amber-50/40 to-stone-100", cardBg: "#FFFDF5", envelopeWax: "#CA8A04",
      petals: ["#FDE047", "#FEF08A", "#FED7AA"]
    }
  },
  {
    id: 20,
    name: "Tulip Hà Lan Tinh Tế",
    category: "floral",
    tag: "Cao nhã",
    desc: "Những cánh hoa tulip vươn mình tượng trưng cho tình yêu hoàn hảo.",
    thumb: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#E11D48", secondary: "#FB7185", accent: "#BE123C", text: "#4C0519",
      bg: "from-rose-50 via-red-50/30 to-rose-100", cardBg: "#FFFFFF", envelopeWax: "#E11D48",
      petals: ["#FDA4AF", "#FECDD3", "#FEE2E2"]
    }
  },

  // =========================================================================
  // BỘ 3: HOÀNG GIA & LUXURY (21 - 30)
  // =========================================================================
  {
    id: 21,
    name: "Hoàng Gia Gold Foil",
    category: "luxury",
    tag: "Đẳng cấp",
    desc: "Ánh vàng kim 24K dát viền lộng lẫy và quyền lực đỉnh cao.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#B45309", secondary: "#D97706", accent: "#92400E", text: "#291605",
      bg: "from-stone-900 via-stone-800 to-amber-950", cardBg: "#1C1917", envelopeWax: "#D97706",
      petals: ["#FCD34D", "#F59E0B", "#D97706"], isDark: true
    }
  },
  {
    id: 22,
    name: "Nhung Đỏ Burgundy",
    category: "luxury",
    tag: "Quyến rũ",
    desc: "Sắc đỏ rượu vang nhung mịn mang đến tiệc cưới ấm cúng và quý phái.",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#881337", secondary: "#BE123C", accent: "#4C0519", text: "#3B0716",
      bg: "from-rose-50 via-stone-100 to-red-100", cardBg: "#FFFFFF", envelopeWax: "#881337",
      petals: ["#BE123C", "#E11D48", "#FECDD3"]
    }
  },
  {
    id: 23,
    name: "Kim Cương Sapphire",
    category: "luxury",
    tag: "Xa hoa",
    desc: "Sắc xanh ngọc sapphire quý hiếm tôn vinh lời thề ước vĩnh cửu.",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#1E3A8A", secondary: "#3B82F6", accent: "#172554", text: "#0F172A",
      bg: "from-blue-50 via-slate-50 to-indigo-100", cardBg: "#FFFFFF", envelopeWax: "#1E3A8A",
      petals: ["#93C5FD", "#BFDBFE", "#60A5FA"]
    }
  },
  {
    id: 24,
    name: "Đêm Tiệc Emerald",
    category: "luxury",
    tag: "Thời thượng",
    desc: "Màu xanh ngọc lục bảo huyền bí phối ánh kim sa lung linh.",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#065F46", secondary: "#10B981", accent: "#064E3B", text: "#022C22",
      bg: "from-emerald-50 via-stone-50 to-teal-100", cardBg: "#FFFFFF", envelopeWax: "#065F46",
      petals: ["#6EE7B7", "#A7F3D0", "#D1FAE5"]
    }
  },
  {
    id: 25,
    name: "Bạch Kim Hoàng Gia",
    category: "luxury",
    tag: "Hiện đại",
    desc: "Sắc trắng bạc bạch kim tinh xảo cho cặp đôi yêu thích sự thanh tao.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#475569", secondary: "#94A3B8", accent: "#334155", text: "#0F172A",
      bg: "from-slate-100 via-stone-100 to-zinc-200", cardBg: "#FFFFFF", envelopeWax: "#475569",
      petals: ["#CBD5E1", "#E2E8F0", "#F1F5F9"]
    }
  },
  {
    id: 26,
    name: "Cung Điện Versailles",
    category: "luxury",
    tag: "Cổ tích",
    desc: "Lộng lẫy và hoa lệ như đám cưới quý tộc phương Tây trong lâu đài.",
    thumb: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#9A3412", secondary: "#D97706", accent: "#7C2D12", text: "#431407",
      bg: "from-amber-50 via-orange-50/50 to-stone-100", cardBg: "#FFFCF5", envelopeWax: "#D97706",
      petals: ["#FBBF24", "#FCD34D", "#FED7AA"]
    }
  },
  {
    id: 27,
    name: "Thủy Tinh Pha Lê",
    category: "luxury",
    tag: "Lấp lánh",
    desc: "Hiệu ứng phản chiếu ánh sáng pha lê trong suốt tựa pha lê tình yêu.",
    thumb: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0E7490", secondary: "#22D3EE", accent: "#155E75", text: "#164E63",
      bg: "from-cyan-50 via-slate-50 to-sky-100", cardBg: "#FFFFFF", envelopeWax: "#0E7490",
      petals: ["#A5F3FC", "#CFFAFE", "#E0F2FE"]
    }
  },
  {
    id: 28,
    name: "Tơ Lụa Champagne",
    category: "luxury",
    tag: "Mềm mại",
    desc: "Nếp lụa satin màu sâm panh mềm mại và ngọt ngào.",
    thumb: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#A16207", secondary: "#EAB308", accent: "#854D0E", text: "#3B2206",
      bg: "from-amber-50/80 via-stone-50 to-yellow-100", cardBg: "#FFFEF7", envelopeWax: "#A16207",
      petals: ["#FDE047", "#FEF08A", "#FDF4E3"]
    }
  },
  {
    id: 29,
    name: "Vương Miện Ánh Kim",
    category: "luxury",
    tag: "Vương giả",
    desc: "Đường viền vương miện lấp lánh biểu tượng nàng công chúa và chàng hoàng tử.",
    thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#B45309", secondary: "#F59E0B", accent: "#92400E", text: "#451A03",
      bg: "from-amber-50 via-stone-50 to-orange-100", cardBg: "#FFFFFF", envelopeWax: "#B45309",
      petals: ["#FCD34D", "#FDE68A", "#F59E0B"]
    }
  },
  {
    id: 30,
    name: "Dạ Khúc Thính Phòng",
    category: "luxury",
    tag: "Nghệ thuật",
    desc: "Giai điệu du dương của tiệc cưới thính phòng sang trọng và lắng đọng.",
    thumb: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#334155", secondary: "#D4AF37", accent: "#1E293B", text: "#0F172A",
      bg: "from-slate-100 via-stone-100 to-amber-50/50", cardBg: "#FFFFFF", envelopeWax: "#D4AF37",
      petals: ["#FCD34D", "#CBD5E1", "#E2E8F0"]
    }
  },

  // =========================================================================
  // BỘ 4: RUSTIC & VINTAGE (31 - 40)
  // =========================================================================
  {
    id: 31,
    name: "Giấy Kraft Mộc Mạc",
    category: "rustic",
    tag: "Mộc",
    desc: "Màu giấy nâu kraft vintage thắt nơ thừng giản dị và chân thành.",
    thumb: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#854D0E", secondary: "#A16207", accent: "#713F12", text: "#3B2206",
      bg: "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]", cardBg: "#FBF7F0", envelopeWax: "#854D0E",
      petals: ["#D4B89B", "#C2A385", "#E8D8C3"]
    }
  },
  {
    id: 32,
    name: "Gỗ Thông Trầm Mặc",
    category: "rustic",
    tag: "Ấm cúng",
    desc: "Vân gỗ thông ấm áp hòa cùng hương thơm của núi rừng Đà Lạt.",
    thumb: "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#78350F", secondary: "#B45309", accent: "#451A03", text: "#291605",
      bg: "from-stone-100 via-amber-50 to-orange-100", cardBg: "#FAF6F0", envelopeWax: "#78350F",
      petals: ["#B45309", "#D97706", "#FDE68A"]
    }
  },
  {
    id: 33,
    name: "Bohemian Tự Do",
    category: "rustic",
    tag: "Phóng khoáng",
    desc: "Họa tiết ren đan macrame và lông vũ bay bổng phong cách du mục boho.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#9A3412", secondary: "#EA580C", accent: "#7C2D12", text: "#431407",
      bg: "from-orange-50 via-stone-100 to-amber-100", cardBg: "#FFFDF9", envelopeWax: "#9A3412",
      petals: ["#FB923C", "#FED7AA", "#FBBF24"]
    }
  },
  {
    id: 34,
    name: "Đèn Dây Fairy Lights",
    category: "rustic",
    tag: "Lung linh",
    desc: "Khu vườn cổ tích lung linh ánh đèn vàng trong đêm tiệc cưới ngoài trời.",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#D97706", secondary: "#F59E0B", accent: "#B45309", text: "#1C1917",
      bg: "from-stone-900 via-zinc-800 to-amber-950", cardBg: "#292524", envelopeWax: "#F59E0B",
      petals: ["#FDE047", "#FBBF24", "#F59E0B"], isDark: true
    }
  },
  {
    id: 35,
    name: "Lá Khô Mùa Thu",
    category: "rustic",
    tag: "Trầm ấm",
    desc: "Sắc lá phong vàng cam rực rỡ của mùa thu dịu ngọt tình yêu chín muồi.",
    thumb: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#C2410C", secondary: "#EA580C", accent: "#9A3412", text: "#431407",
      bg: "from-amber-50 via-orange-50 to-stone-100", cardBg: "#FFFDF9", envelopeWax: "#C2410C",
      petals: ["#F97316", "#FBBF24", "#EA580C"]
    }
  },
  {
    id: 36,
    name: "Cỏ Đuôi Phụng Pampas",
    category: "rustic",
    tag: "Trendy",
    desc: "Cành cỏ lau pampas bồng bềnh đậm chất lễ cưới sân vườn hiện đại.",
    thumb: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#A16207", secondary: "#CA8A04", accent: "#713F12", text: "#3B2206",
      bg: "from-[#F7F4EF] via-[#EFE8DC] to-[#E5DAC6]", cardBg: "#FFFEFC", envelopeWax: "#A16207",
      petals: ["#E6D7C3", "#D2C1A8", "#F3EDE2"]
    }
  },
  {
    id: 37,
    name: "Lều Trại Du Mục Glamping",
    category: "rustic",
    tag: "Độc lạ",
    desc: "Trải nghiệm tiệc cưới lều trại ngoài trời gần gũi với mây trời.",
    thumb: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#4D7C0F", secondary: "#84CC16", accent: "#3F6212", text: "#1A2E05",
      bg: "from-stone-100 via-lime-50/50 to-amber-50", cardBg: "#FFFFFF", envelopeWax: "#4D7C0F",
      petals: ["#A3E635", "#D9F99D", "#CBD5E1"]
    }
  },
  {
    id: 38,
    name: "Hơi Thở Cổ Điển 1980s",
    category: "rustic",
    tag: "Hoài niệm",
    desc: "Phong cách bưu thiếp tem thư thập niên 80 hoài cổ và lãng mạn.",
    thumb: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#7C2D12", secondary: "#9A3412", accent: "#431407", text: "#271206",
      bg: "from-amber-50 via-stone-100 to-orange-100", cardBg: "#FAF5ED", envelopeWax: "#7C2D12",
      petals: ["#EA580C", "#D97706", "#FDE68A"]
    }
  },
  {
    id: 39,
    name: "Khí Cầu Bay Lượn",
    category: "rustic",
    tag: "Bay bổng",
    desc: "Hành trình tình yêu cùng nhau ngắm nhìn thế giới từ trên cao.",
    thumb: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0369A1", secondary: "#38BDF8", accent: "#075985", text: "#082F49",
      bg: "from-sky-50 via-stone-50 to-amber-50", cardBg: "#FFFFFF", envelopeWax: "#0369A1",
      petals: ["#7DD3FC", "#FED7AA", "#BAE6FD"]
    }
  },
  {
    id: 40,
    name: "Hoa Dại Đồng Nội",
    category: "rustic",
    tag: "Hồn nhiên",
    desc: "Những đóa hoa dại nhỏ xinh nở rộ trên thảo nguyên xanh ngát.",
    thumb: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#15803D", secondary: "#EAB308", accent: "#16A34A", text: "#14532D",
      bg: "from-emerald-50 via-yellow-50/40 to-stone-100", cardBg: "#FFFFFF", envelopeWax: "#15803D",
      petals: ["#86EFAC", "#FDE047", "#FBCFE8"]
    }
  },

  // =========================================================================
  // BỘ 5: TỐI GIẢN HIỆN ĐẠI (MINIMALIST) (41 - 50)
  // =========================================================================
  {
    id: 41,
    name: "Trắng Đen Monochrome",
    category: "minimalist",
    tag: "Tối giản",
    desc: "Sự tương phản kinh điển không bao giờ lỗi thời giữa trắng và đen.",
    thumb: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0A0A0A", secondary: "#525252", accent: "#171717", text: "#0A0A0A",
      bg: "from-stone-50 via-neutral-100 to-stone-200", cardBg: "#FFFFFF", envelopeWax: "#171717",
      petals: ["#A3A3A3", "#D4D4D4", "#E5E5E5"]
    }
  },
  {
    id: 42,
    name: "Nét Vẽ Line Art",
    category: "minimalist",
    tag: "Nghệ thuật",
    desc: "Những đường nét vẽ tay mộc mạc phác họa chân dung hai người.",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#44403C", secondary: "#78716C", accent: "#292524", text: "#1C1917",
      bg: "from-stone-50 via-stone-100 to-amber-50/30", cardBg: "#FAFAF9", envelopeWax: "#44403C",
      petals: ["#A8A29E", "#D6D3D1", "#F5F5F4"]
    }
  },
  {
    id: 43,
    name: "Bê Tông & Kính Mờ",
    category: "minimalist",
    tag: "Kiến trúc",
    desc: "Phong cách kiến trúc đương đại vững chãi và tinh tế.",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#475569", secondary: "#64748B", accent: "#334155", text: "#0F172A",
      bg: "from-slate-100 via-gray-100 to-zinc-200", cardBg: "#FFFFFF", envelopeWax: "#475569",
      petals: ["#94A3B8", "#CBD5E1", "#E2E8F0"]
    }
  },
  {
    id: 44,
    name: "Typography Đương Đại",
    category: "minimalist",
    tag: "Ấn tượng",
    desc: "Tôn vinh vẻ đẹp của kiểu chữ nghệ thuật và khoảng trống tinh tế.",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#18181B", secondary: "#3F3F46", accent: "#27272A", text: "#09090B",
      bg: "from-zinc-50 via-stone-50 to-neutral-100", cardBg: "#FFFFFF", envelopeWax: "#27272A",
      petals: ["#71717A", "#A1A1AA", "#E4E4E7"]
    }
  },
  {
    id: 45,
    name: "Tối Giản Bắc Âu Nordic",
    category: "minimalist",
    tag: "Scandinavian",
    desc: "Sự ấm cúng Hygge trong không gian sáng thoáng kiểu Bắc Âu.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#065F46", secondary: "#6B7280", accent: "#047857", text: "#1F2937",
      bg: "from-[#F8FAF9] via-[#F1F5F3] to-[#E7EFEA]", cardBg: "#FFFFFF", envelopeWax: "#065F46",
      petals: ["#6EE7B7", "#D1D5DB", "#E5E7EB"]
    }
  },
  {
    id: 46,
    name: "Khối Màu Color Block",
    category: "minimalist",
    tag: "Trẻ trung",
    desc: "Sắp đặt các mảng màu pastel hình học tạo nên nét chấm phá hiện đại.",
    thumb: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#4338CA", secondary: "#F43F5E", accent: "#3730A3", text: "#1E1B4B",
      bg: "from-indigo-50 via-rose-50 to-amber-50", cardBg: "#FFFFFF", envelopeWax: "#4338CA",
      petals: ["#818CF8", "#FDA4AF", "#FDE68A"]
    }
  },
  {
    id: 47,
    name: "Hình Học Geometric",
    category: "minimalist",
    tag: "Cân đối",
    desc: "Khung đa giác mạ vàng cắt gọt sắc nét bao bọc lấy tình yêu đôi lứa.",
    thumb: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#B45309", secondary: "#3F3F46", accent: "#92400E", text: "#18181B",
      bg: "from-stone-50 via-zinc-100 to-amber-50", cardBg: "#FFFFFF", envelopeWax: "#B45309",
      petals: ["#FBBF24", "#A1A1AA", "#E4E4E7"]
    }
  },
  {
    id: 48,
    name: "Không Gian Âm (Negative Space)",
    category: "minimalist",
    tag: "Tinh giản",
    desc: "Khoảng trắng thở nhẹ nhàng nhường toàn bộ tiêu điểm cho nhân vật chính.",
    thumb: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#292524", secondary: "#57534E", accent: "#1C1917", text: "#0C0A09",
      bg: "from-stone-50 via-stone-50 to-stone-100", cardBg: "#FFFFFF", envelopeWax: "#292524",
      petals: ["#A8A29E", "#D6D3D1", "#E7E5E4"]
    }
  },
  {
    id: 49,
    name: "Serif Cổ Điển Tinh Tế",
    category: "minimalist",
    tag: "Thư thái",
    desc: "Tập trung vào vẻ đẹp quý tộc của những nét chân chữ thanh mảnh.",
    thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#4A044E", secondary: "#86198F", accent: "#701A75", text: "#2E0233",
      bg: "from-fuchsia-50/50 via-stone-50 to-pink-50", cardBg: "#FFFFFF", envelopeWax: "#701A75",
      petals: ["#E879F9", "#F0ABFC", "#FDF4FF"]
    }
  },
  {
    id: 50,
    name: "Wabi-Sabi Nhật Bản",
    category: "minimalist",
    tag: "An yên",
    desc: "Tìm thấy vẻ đẹp hoàn mỹ trong những điều mộc mạc và chân thành nhất.",
    thumb: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#57534E", secondary: "#847A73", accent: "#44403C", text: "#292524",
      bg: "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]", cardBg: "#FCFBF9", envelopeWax: "#57534E",
      petals: ["#D6D3D1", "#C7BEB5", "#F5F5F4"]
    }
  },

  // =========================================================================
  // BỘ 6: BIỂN & MÙA HÈ (51 - 60)
  // =========================================================================
  {
    id: 51,
    name: "Hoàng Hôn Bãi Biển",
    category: "ocean",
    tag: "Lãng mạn",
    desc: "Bầu trời ửng hồng cam khi ánh hoàng hôn buông xuống mặt biển bao la.",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#C2410C", secondary: "#F43F5E", accent: "#EA580C", text: "#431407",
      bg: "from-rose-50 via-orange-50 to-amber-100", cardBg: "#FFFFFF", envelopeWax: "#EA580C",
      petals: ["#FB923C", "#FDA4AF", "#FDE047"]
    }
  },
  {
    id: 52,
    name: "Sóng Biển Xanh Ngọc",
    category: "ocean",
    tag: "Tươi mát",
    desc: "Nước biển xanh ngọc lam trong vắt và bọt sóng vỗ bờ cát trắng.",
    thumb: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0D9488", secondary: "#2DD4BF", accent: "#0F766E", text: "#134E4A",
      bg: "from-teal-50 via-cyan-50/50 to-emerald-100", cardBg: "#FFFFFF", envelopeWax: "#0D9488",
      petals: ["#5EEAD4", "#99F6E4", "#CCFBF1"]
    }
  },
  {
    id: 53,
    name: "Vỏ Ốc & San Hô",
    category: "ocean",
    tag: "Độc đáo",
    desc: "Những nhánh san hô cam pastel và vỏ ốc lưu giữ câu chuyện biển cả.",
    thumb: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#E11D48", secondary: "#FB923C", accent: "#BE123C", text: "#4C0519",
      bg: "from-rose-50 via-orange-50/40 to-stone-100", cardBg: "#FFFFFF", envelopeWax: "#E11D48",
      petals: ["#FDA4AF", "#FED7AA", "#FECDD3"]
    }
  },
  {
    id: 54,
    name: "Gió Biển Địa Trung Hải",
    category: "ocean",
    tag: "Tự do",
    desc: "Tone xanh biển Santorini và tường vôi trắng tinh khôi.",
    thumb: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0284C7", secondary: "#0369A1", accent: "#075985", text: "#0C4A6E",
      bg: "from-sky-50 via-blue-50/30 to-slate-100", cardBg: "#FFFFFF", envelopeWax: "#0284C7",
      petals: ["#7DD3FC", "#BAE6FD", "#E0F2FE"]
    }
  },
  {
    id: 55,
    name: "Đảo Nhiệt Đới Bali",
    category: "ocean",
    tag: "Nhiệt đới",
    desc: "Hàng dừa xanh nghiêng bóng bên bờ biển nhiệt đới mộng mơ.",
    thumb: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#15803D", secondary: "#D97706", accent: "#166534", text: "#14532D",
      bg: "from-emerald-50 via-amber-50 to-stone-100", cardBg: "#FFFFFF", envelopeWax: "#15803D",
      petals: ["#86EFAC", "#FCD34D", "#BBF7D0"]
    }
  },
  {
    id: 56,
    name: "Rạn San Hô Hawaii",
    category: "ocean",
    tag: "Sôi động",
    desc: "Sắc màu rực rỡ của nắng gió và vũ điệu aloha nồng nhiệt.",
    thumb: "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#BE185D", secondary: "#F59E0B", accent: "#9D174D", text: "#500724",
      bg: "from-pink-50 via-yellow-50 to-rose-100", cardBg: "#FFFFFF", envelopeWax: "#BE185D",
      petals: ["#F472B6", "#FDE047", "#FBCFE8"]
    }
  },
  {
    id: 57,
    name: "Bờ Cát Trắng Mịn",
    category: "ocean",
    tag: "Thư thái",
    desc: "Cát mịn dưới chân và tiếng sóng thì thầm lời hẹn ước.",
    thumb: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#9A3412", secondary: "#0284C7", accent: "#7C2D12", text: "#3B2206",
      bg: "from-amber-50/60 via-sky-50 to-stone-100", cardBg: "#FFFFFF", envelopeWax: "#9A3412",
      petals: ["#FED7AA", "#BAE6FD", "#F3EDE2"]
    }
  },
  {
    id: 58,
    name: "Thủy Thủ Dương Buồm",
    category: "ocean",
    tag: "Kiên định",
    desc: "Cánh buồm trắng no gió cùng nhau vượt qua mọi phong ba cuộc đời.",
    thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#1E3A8A", secondary: "#DC2626", accent: "#172554", text: "#0F172A",
      bg: "from-blue-50 via-slate-50 to-indigo-100", cardBg: "#FFFFFF", envelopeWax: "#1E3A8A",
      petals: ["#93C5FD", "#FCA5A5", "#BFDBFE"]
    }
  },
  {
    id: 59,
    name: "Ánh Dương Mùa Hạ",
    category: "ocean",
    tag: "Năng lượng",
    desc: "Ánh nắng vàng mùa hè rọi sáng nụ cười rạng rỡ của cô dâu chú rể.",
    thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#EA580C", secondary: "#FACC15", accent: "#C2410C", text: "#431407",
      bg: "from-orange-50 via-yellow-50 to-amber-100", cardBg: "#FFFFFF", envelopeWax: "#EA580C",
      petals: ["#FB923C", "#FDE047", "#FED7AA"]
    }
  },
  {
    id: 60,
    name: "Đêm Biển Đầy Sao",
    category: "ocean",
    tag: "Kỳ ảo",
    desc: "Ngọn hải đăng dẫn lối tình yêu dưới bầu trời đêm sao trên biển.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0369A1", secondary: "#F59E0B", accent: "#075985", text: "#082F49",
      bg: "from-slate-900 via-sky-950 to-stone-900", cardBg: "#0F172A", envelopeWax: "#F59E0B",
      petals: ["#38BDF8", "#FDE047", "#7DD3FC"], isDark: true
    }
  },

  // =========================================================================
  // BỘ 7: PASTEL DỊU NGỌT (61 - 70)
  // =========================================================================
  {
    id: 61,
    name: "Kem Đào Peach Fuzz",
    category: "pastel",
    tag: "Màu của năm",
    desc: "Tone màu quả đào ấm áp, ngọt lịm và ôm ấp trọn vẹn yêu thương.",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#EA580C", secondary: "#FDBA74", accent: "#C2410C", text: "#431407",
      bg: "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]", cardBg: "#FFFFFF", envelopeWax: "#EA580C",
      petals: ["#FED7AA", "#FFEDD5", "#FDBA74"]
    }
  },
  {
    id: 62,
    name: "Hồng Phấn Blush Pink",
    category: "pastel",
    tag: "Ngọt ngào",
    desc: "Má hồng cô dâu e ấp trong ngày cưới hạnh phúc ngập tràn.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#DB2777", secondary: "#F472B6", accent: "#BE185D", text: "#500724",
      bg: "from-pink-50 via-rose-50 to-pink-100", cardBg: "#FFFFFF", envelopeWax: "#DB2777",
      petals: ["#F472B6", "#FBCFE8", "#FDF2F8"]
    }
  },
  {
    id: 63,
    name: "Tím Khói Lilac",
    category: "pastel",
    tag: "Mộng mơ",
    desc: "Sắc tím khói bảng lảng dịu êm như bài thơ tình mùa thu.",
    thumb: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#7C3AED", secondary: "#A78BFA", accent: "#6D28D9", text: "#3B0764",
      bg: "from-violet-50 via-purple-50/40 to-purple-100", cardBg: "#FFFFFF", envelopeWax: "#7C3AED",
      petals: ["#C4B5FD", "#DDD6FE", "#EDE9FE"]
    }
  },
  {
    id: 64,
    name: "Xanh Bạc Hà Mint",
    category: "pastel",
    tag: "Mát lành",
    desc: "Sự tươi mát sảng khoái và trong trẻo cho một khởi đầu mới.",
    thumb: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#059669", secondary: "#34D399", accent: "#047857", text: "#064E3B",
      bg: "from-emerald-50 via-teal-50 to-green-100", cardBg: "#FFFFFF", envelopeWax: "#059669",
      petals: ["#6EE7B7", "#A7F3D0", "#D1FAE5"]
    }
  },
  {
    id: 65,
    name: "Vàng Bơ Buttercream",
    category: "pastel",
    tag: "Ấm áp",
    desc: "Vị ngọt béo của bánh cưới bơ vàng tan chảy trong từng khoảnh khắc.",
    thumb: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#D97706", secondary: "#FCD34D", accent: "#B45309", text: "#451A03",
      bg: "from-amber-50 via-yellow-50 to-orange-50", cardBg: "#FFFDF7", envelopeWax: "#D97706",
      petals: ["#FDE047", "#FEF08A", "#FEF9C3"]
    }
  },
  {
    id: 66,
    name: "Xanh Da Trời Baby Blue",
    category: "pastel",
    tag: "Bình yên",
    desc: "Bầu trời trong xanh dịu nhẹ như ánh mắt người thương ngày đầu gặp gỡ.",
    thumb: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0284C7", secondary: "#7DD3FC", accent: "#0369A1", text: "#0C4A6E",
      bg: "from-sky-50 via-blue-50/40 to-cyan-100", cardBg: "#FFFFFF", envelopeWax: "#0284C7",
      petals: ["#BAE6FD", "#E0F2FE", "#F0F9FF"]
    }
  },
  {
    id: 67,
    name: "Mây Hồng Kẹo Ngọt",
    category: "pastel",
    tag: "Dễ thương",
    desc: "Tình yêu ngọt ngào tựa kẹo bông gòn bềnh bồng giữa mây trời.",
    thumb: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#BE185D", secondary: "#F472B6", accent: "#9D174D", text: "#500724",
      bg: "from-pink-50 via-fuchsia-50/30 to-rose-100", cardBg: "#FFFFFF", envelopeWax: "#BE185D",
      petals: ["#F472B6", "#FBCFE8", "#FCE7F3"]
    }
  },
  {
    id: 68,
    name: "Trà Chiều Anh Quốc",
    category: "pastel",
    tag: "Cổ điển",
    desc: "Tách trà hoa hồng và bánh scone kiểu Anh thanh lịch tao nhã.",
    thumb: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#9D5C43", secondary: "#D4AF37", accent: "#824630", text: "#3B2219",
      bg: "from-[#F9F6F0] via-[#F2ECE1] to-[#E9DFD1]", cardBg: "#FFFFFF", envelopeWax: "#9D5C43",
      petals: ["#E8D4C8", "#F1E4DC", "#FBF7F4"]
    }
  },
  {
    id: 69,
    name: "Bánh Macaron Paris",
    category: "pastel",
    tag: "Tinh nghịch",
    desc: "Sự phối trộn màu pastel của những chiếc bánh macaron kinh đô ánh sáng.",
    thumb: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#C026D3", secondary: "#38BDF8", accent: "#9333EA", text: "#4A044E",
      bg: "from-pink-50 via-sky-50 to-purple-50", cardBg: "#FFFFFF", envelopeWax: "#C026D3",
      petals: ["#F0ABFC", "#7DD3FC", "#FDF2F8"]
    }
  },
  {
    id: 70,
    name: "Vườn Hồng Sớm Mai",
    category: "pastel",
    tag: "Tinh sương",
    desc: "Những giọt sương mai đọng trên cánh hoa hồng hé nở đầu ngày.",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#E11D48", secondary: "#10B981", accent: "#BE123C", text: "#4C0519",
      bg: "from-rose-50 via-emerald-50/20 to-pink-100", cardBg: "#FFFFFF", envelopeWax: "#E11D48",
      petals: ["#FDA4AF", "#A7F3D0", "#FECDD3"]
    }
  },

  // =========================================================================
  // BỘ 8: MÀU NƯỚC & HỘI HỌA (71 - 80)
  // =========================================================================
  {
    id: 71,
    name: "Màu Nước Loang Xanh Indigo",
    category: "watercolor",
    tag: "Nghệ thuật",
    desc: "Vết loang màu nước tự nhiên tựa bức tranh thủy mặc hiện đại.",
    thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#1E40AF", secondary: "#3B82F6", accent: "#1D4ED8", text: "#172554",
      bg: "from-blue-50 via-slate-50 to-indigo-100", cardBg: "#FFFFFF", envelopeWax: "#1E40AF",
      petals: ["#60A5FA", "#93C5FD", "#DBEAFE"]
    }
  },
  {
    id: 72,
    name: "Trừu Tượng Sơn Dầu",
    category: "watercolor",
    tag: "Sáng tạo",
    desc: "Những vệt sơn dầu dày dặn phối màu tinh tế như bảo tàng nghệ thuật.",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#9333EA", secondary: "#F59E0B", accent: "#7E22CE", text: "#3B0764",
      bg: "from-purple-50 via-amber-50 to-stone-100", cardBg: "#FFFFFF", envelopeWax: "#9333EA",
      petals: ["#C084FC", "#FCD34D", "#E9D5FF"]
    }
  },
  {
    id: 73,
    name: "Vân Đá Cẩm Thạch Marble",
    category: "watercolor",
    tag: "Sang trọng",
    desc: "Vân đá cẩm thạch trắng phối chỉ vàng gold kiêu kỳ và tinh tế.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#78716C", secondary: "#D4AF37", accent: "#57534E", text: "#1C1917",
      bg: "from-stone-50 via-neutral-100 to-amber-50/40", cardBg: "#FFFFFF", envelopeWax: "#D4AF37",
      petals: ["#FBBF24", "#D6D3D1", "#E7E5E4"]
    }
  },
  {
    id: 74,
    name: "Nghệ Thuật Kintsugi Hàn Vàng",
    category: "watercolor",
    tag: "Ý nghĩa sâu sắc",
    desc: "Hàn gắn bằng vàng ròng, trân quý mọi thử thách để bên nhau vững bền.",
    thumb: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#B45309", secondary: "#292524", accent: "#92400E", text: "#1C1917",
      bg: "from-stone-100 via-amber-50 to-zinc-200", cardBg: "#FFFFFF", envelopeWax: "#B45309",
      petals: ["#FCD34D", "#A8A29E", "#FDE68A"]
    }
  },
  {
    id: 75,
    name: "Phác Thảo Than Chì",
    category: "watercolor",
    tag: "Mộc mạc",
    desc: "Nét chì phác họa chân dung tình yêu đầy cảm xúc chân phương.",
    thumb: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#262626", secondary: "#525252", accent: "#171717", text: "#0A0A0A",
      bg: "from-stone-50 via-zinc-100 to-stone-200", cardBg: "#FAFAF9", envelopeWax: "#262626",
      petals: ["#737373", "#A3A3A3", "#E5E5E5"]
    }
  },
  {
    id: 76,
    name: "Đốm Đá Terrazzo Hiện Đại",
    category: "watercolor",
    tag: "Năng động",
    desc: "Họa tiết đá mài terrazzo rực rỡ sắc màu vui tươi và ấm áp.",
    thumb: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#C2410C", secondary: "#0D9488", accent: "#EA580C", text: "#431407",
      bg: "from-orange-50 via-teal-50 to-amber-50", cardBg: "#FFFFFF", envelopeWax: "#C2410C",
      petals: ["#FB923C", "#5EEAD4", "#FED7AA"]
    }
  },
  {
    id: 77,
    name: "Màu Nước Hồng Hoàng Hôn",
    category: "watercolor",
    tag: "Ngọt lịm",
    desc: "Vết loang màu nước hồng cam ấm nóng của buổi chiều hẹn hò.",
    thumb: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#BE123C", secondary: "#FB923C", accent: "#9F1239", text: "#4C0519",
      bg: "from-rose-50 via-orange-50 to-pink-100", cardBg: "#FFFFFF", envelopeWax: "#BE123C",
      petals: ["#FDA4AF", "#FDBA74", "#FECDD3"]
    }
  },
  {
    id: 78,
    name: "Sơn Mài Truyền Thống",
    category: "watercolor",
    tag: "Dân tộc",
    desc: "Kỹ thuật sơn mài huyền ảo kết hợp vỏ trứng và vàng quỳ.",
    thumb: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#991B1B", secondary: "#D97706", accent: "#7F1D1D", text: "#450A0A",
      bg: "from-red-950 via-stone-900 to-amber-950", cardBg: "#1C1917", envelopeWax: "#D97706",
      petals: ["#EF4444", "#F59E0B", "#FCD34D"], isDark: true
    }
  },
  {
    id: 79,
    name: "Tranh Thủy Mặc Mù Sương",
    category: "watercolor",
    tag: "Tĩnh lặng",
    desc: "Khung cảnh non nước mờ sương như chốn bồng lai tiên cảnh.",
    thumb: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#334155", secondary: "#64748B", accent: "#1E293B", text: "#0F172A",
      bg: "from-slate-50 via-stone-100 to-gray-200", cardBg: "#FFFFFF", envelopeWax: "#334155",
      petals: ["#94A3B8", "#CBD5E1", "#E2E8F0"]
    }
  },
  {
    id: 80,
    name: "Lăng Kính Cầu Vồng Prism",
    category: "watercolor",
    tag: "Ảo diệu",
    desc: "Tán sắc ánh sáng qua lăng kính pha lê tạo dải màu lung linh.",
    thumb: "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#7C3AED", secondary: "#06B6D4", accent: "#6D28D9", text: "#2E1065",
      bg: "from-violet-50 via-cyan-50 to-pink-50", cardBg: "#FFFFFF", envelopeWax: "#7C3AED",
      petals: ["#C4B5FD", "#67E8F9", "#FBCFE8"]
    }
  },

  // =========================================================================
  // BỘ 9: DẠ HỘI & NGÂN HÀ (81 - 90)
  // =========================================================================
  {
    id: 81,
    name: "Bầu Trời Sao Midnight Blue",
    category: "celestial",
    tag: "Huyền bí",
    desc: "Đêm tiệc dạ hội dưới bầu trời đầy sao lấp lánh như viên ngọc.",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#1E3A8A", secondary: "#F59E0B", accent: "#172554", text: "#F8FAFC",
      bg: "from-slate-950 via-blue-950 to-indigo-950", cardBg: "#0F172A", envelopeWax: "#F59E0B",
      petals: ["#FDE047", "#60A5FA", "#93C5FD"], isDark: true
    }
  },
  {
    id: 82,
    name: "Vũ Trụ Ngân Hà Galaxy",
    category: "celestial",
    tag: "Bao la",
    desc: "Dải ngân hà muôn vì tinh tú chứng giám cho tình yêu vĩnh cửu.",
    thumb: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#6B21A8", secondary: "#EC4899", accent: "#581C87", text: "#FDF4FF",
      bg: "from-purple-950 via-slate-950 to-fuchsia-950", cardBg: "#1E112A", envelopeWax: "#A855F7",
      petals: ["#E879F9", "#F472B6", "#C084FC"], isDark: true
    }
  },
  {
    id: 83,
    name: "Trăng Khuyết Ánh Bạc",
    category: "celestial",
    tag: "Thơ mộng",
    desc: "Vầng trăng khuyết dịu dàng soi sáng con đường chung bước tương lai.",
    thumb: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#334155", secondary: "#E2E8F0", accent: "#1E293B", text: "#F8FAFC",
      bg: "from-slate-900 via-zinc-900 to-stone-900", cardBg: "#18181B", envelopeWax: "#CBD5E1",
      petals: ["#E2E8F0", "#F1F5F9", "#94A3B8"], isDark: true
    }
  },
  {
    id: 84,
    name: "Cực Quang Aurora",
    category: "celestial",
    tag: "Kỳ vĩ",
    desc: "Ánh sáng cực quang Bắc Cực rực rỡ huyền ảo hiếm có.",
    thumb: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#059669", secondary: "#06B6D4", accent: "#047857", text: "#ECFDF5",
      bg: "from-slate-950 via-emerald-950 to-teal-950", cardBg: "#062E25", envelopeWax: "#10B981",
      petals: ["#34D399", "#22D3EE", "#6EE7B7"], isDark: true
    }
  },
  {
    id: 85,
    name: "Đêm Vũ Hội Mặt Nạ",
    category: "celestial",
    tag: "Huyền thoại",
    desc: "Điệu valse say đắm trong đêm tiệc dạ vũ Venice lãng mạn.",
    thumb: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#831843", secondary: "#D97706", accent: "#700B33", text: "#FFF1F2",
      bg: "from-stone-950 via-pink-950 to-rose-950", cardBg: "#1C1417", envelopeWax: "#D97706",
      petals: ["#FB7185", "#FCD34D", "#FDA4AF"], isDark: true
    }
  },
  {
    id: 86,
    name: "Pháo Hoa Đón Giao Thừa",
    category: "celestial",
    tag: "Bùng nổ",
    desc: "Những chùm pháo hoa thắp sáng bầu trời mừng ngày về chung một nhà.",
    thumb: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#B91C1C", secondary: "#F59E0B", accent: "#991B1B", text: "#FFFDF5",
      bg: "from-stone-950 via-red-950 to-neutral-950", cardBg: "#1C1917", envelopeWax: "#B91C1C",
      petals: ["#EF4444", "#F59E0B", "#FCD34D"], isDark: true
    }
  },
  {
    id: 87,
    name: "Rượu Vang Đêm Muộn",
    category: "celestial",
    tag: "Say đắm",
    desc: "Ly vang đỏ nồng nàn dưới ánh trăng nâng ly chúc phúc tình yêu nồng thắm.",
    thumb: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#4C0519", secondary: "#E11D48", accent: "#881337", text: "#FFF1F2",
      bg: "from-zinc-950 via-rose-950 to-stone-950", cardBg: "#1A090D", envelopeWax: "#E11D48",
      petals: ["#BE123C", "#FB7185", "#FDA4AF"], isDark: true
    }
  },
  {
    id: 88,
    name: "Ánh Nến Lung Linh Candlelight",
    category: "celestial",
    tag: "Ấm áp",
    desc: "Hàng trăm ngọn nến thơm thắp sáng không gian tiệc cưới ấm áp thân mật.",
    thumb: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#D97706", secondary: "#FBBF24", accent: "#B45309", text: "#FFFBEB",
      bg: "from-stone-950 via-amber-950 to-zinc-950", cardBg: "#211A13", envelopeWax: "#F59E0B",
      petals: ["#FCD34D", "#FDE68A", "#F59E0B"], isDark: true
    }
  },
  {
    id: 89,
    name: "Chòm Sao Đôi Lứa Constellation",
    category: "celestial",
    tag: "Định mệnh",
    desc: "Hai vì sao định mệnh tìm thấy nhau giữa hàng tỷ tinh tú trên bầu trời.",
    thumb: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#4338CA", secondary: "#A5B4FC", accent: "#3730A3", text: "#EEF2FF",
      bg: "from-slate-950 via-indigo-950 to-stone-950", cardBg: "#11142E", envelopeWax: "#6366F1",
      petals: ["#818CF8", "#C7D2FE", "#E0E7FF"], isDark: true
    }
  },
  {
    id: 90,
    name: "Chiêm Tinh Tình Yêu",
    category: "celestial",
    tag: "Kỳ bí",
    desc: "Bản đồ sao ngày cưới ghi dấu thời khắc hai tâm hồn hòa chung nhịp đập.",
    thumb: "https://images.unsplash.com/photo-1532767153582-b1a0e5145009?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0F766E", secondary: "#D4AF37", accent: "#115E59", text: "#F0FDFA",
      bg: "from-zinc-950 via-teal-950 to-stone-950", cardBg: "#0C1F1D", envelopeWax: "#D4AF37",
      petals: ["#2DD4BF", "#FCD34D", "#99F6E4"], isDark: true
    }
  },

  // =========================================================================
  // BỘ 10: XU HƯỚNG GEN Z & RETRO (91 - 100)
  // =========================================================================
  {
    id: 91,
    name: "Holographic Cầu Vồng Y2K",
    category: "trendy",
    tag: "Gen Z",
    desc: "Màu ánh kim hologram 7 màu chuyển biến theo góc nhìn cực kỳ thời thượng.",
    thumb: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#8B5CF6", secondary: "#EC4899", accent: "#06B6D4", text: "#1E1B4B",
      bg: "from-pink-100 via-purple-100 to-cyan-100", cardBg: "#FFFFFF", envelopeWax: "#8B5CF6",
      petals: ["#C084FC", "#F472B6", "#67E8F9"]
    }
  },
  {
    id: 92,
    name: "Kính Mờ Glassmorphism",
    category: "trendy",
    tag: "Hiện đại",
    desc: "Hiệu ứng kính mờ trong suốt thời thượng của giao diện ứng dụng thế hệ mới.",
    thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#2563EB", secondary: "#60A5FA", accent: "#1D4ED8", text: "#0F172A",
      bg: "from-slate-100 via-sky-100 to-indigo-100", cardBg: "rgba(255, 255, 255, 0.8)", envelopeWax: "#2563EB",
      petals: ["#93C5FD", "#BAE6FD", "#C7D2FE"]
    }
  },
  {
    id: 93,
    name: "Nhật Báo Tình Yêu (Newspaper)",
    category: "trendy",
    tag: "Vintage báo in",
    desc: "Thiết kế như trang nhất tờ báo sáng đưa tin mừng ngày cưới trọng đại.",
    thumb: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#1C1917", secondary: "#44403C", accent: "#0C0A09", text: "#1C1917",
      bg: "from-[#F5EFEB] via-[#EBE2DA] to-[#DFD4C8]", cardBg: "#FDFCFA", envelopeWax: "#1C1917",
      petals: ["#78716C", "#A8A29E", "#D6D3D1"]
    }
  },
  {
    id: 94,
    name: "Vé Máy Bay Hạnh Phúc (Boarding Pass)",
    category: "trendy",
    tag: "Du lịch",
    desc: "Tấm vé máy bay đưa hai bạn cất cánh vào chuyến bay hạnh phúc cuộc đời.",
    thumb: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#0284C7", secondary: "#EA580C", accent: "#0369A1", text: "#0C4A6E",
      bg: "from-sky-50 via-slate-50 to-orange-50", cardBg: "#FFFFFF", envelopeWax: "#0284C7",
      petals: ["#7DD3FC", "#FB923C", "#BAE6FD"]
    }
  },
  {
    id: 95,
    name: "Khung Ảnh Polaroid Retro",
    category: "trendy",
    tag: "Chụp ảnh lấy liền",
    desc: "Khung polaroid chụp ảnh lấy liền ghi dấu những kỷ niệm ngọt ngào.",
    thumb: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#334155", secondary: "#E11D48", accent: "#1E293B", text: "#0F172A",
      bg: "from-stone-100 via-amber-50/50 to-slate-100", cardBg: "#FFFFFF", envelopeWax: "#E11D48",
      petals: ["#FDA4AF", "#CBD5E1", "#FECDD3"]
    }
  },
  {
    id: 96,
    name: "Đĩa Than Vinyl Cổ Điển",
    category: "trendy",
    tag: "Âm nhạc",
    desc: "Đĩa than vinyl cổ điển quay chậm ngân nga bản tình ca bất hủ.",
    thumb: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#18181B", secondary: "#D4AF37", accent: "#27272A", text: "#09090B",
      bg: "from-stone-900 via-zinc-900 to-amber-950/40", cardBg: "#18181B", envelopeWax: "#D4AF37",
      petals: ["#FCD34D", "#71717A", "#A1A1AA"], isDark: true
    }
  },
  {
    id: 97,
    name: "Bản Nhạc Spotify Song",
    category: "trendy",
    tag: "Âm nhạc Gen Z",
    desc: "Giao diện bài hát đôi lứa với mã vạch bài ca tình yêu của hai người.",
    thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#1DB954", secondary: "#191414", accent: "#1ED760", text: "#FFFFFF",
      bg: "from-zinc-950 via-neutral-900 to-emerald-950/40", cardBg: "#121212", envelopeWax: "#1DB954",
      petals: ["#1ED760", "#4ADE80", "#86EFAC"], isDark: true
    }
  },
  {
    id: 98,
    name: "Pop Art Tươi Vui",
    category: "trendy",
    tag: "Phá cách",
    desc: "Màu sắc nổi bật phong cách pop art tràn đầy niềm vui và sự lạc quan.",
    thumb: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#EC4899", secondary: "#FBBF24", accent: "#DB2777", text: "#831843",
      bg: "from-yellow-100 via-pink-100 to-cyan-100", cardBg: "#FFFFFF", envelopeWax: "#EC4899",
      petals: ["#F472B6", "#FDE047", "#67E8F9"]
    }
  },
  {
    id: 99,
    name: "Sticker Cute Dễ Thương",
    category: "trendy",
    tag: "Đáng yêu",
    desc: "Trang trí với sticker trái tim, nụ cười và icon tình yêu đáng yêu.",
    thumb: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#F43F5E", secondary: "#FB923C", accent: "#E11D48", text: "#4C0519",
      bg: "from-rose-50 via-amber-50 to-pink-50", cardBg: "#FFFFFF", envelopeWax: "#F43F5E",
      petals: ["#FDA4AF", "#FDBA74", "#FED7AA"]
    }
  },
  {
    id: 100,
    name: "Cyber Neon Tương Lai",
    category: "trendy",
    tag: "Cyberpunk",
    desc: "Ánh đèn neon hồng tím rực rỡ tượng trưng cho tình yêu thời đại số.",
    thumb: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
    theme: {
      primary: "#06B6D4", secondary: "#F43F5E", accent: "#0891B2", text: "#ECFEFF",
      bg: "from-slate-950 via-purple-950 to-cyan-950", cardBg: "#0B132B", envelopeWax: "#06B6D4",
      petals: ["#22D3EE", "#FB7185", "#A855F7"], isDark: true
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WEDDING_TEMPLATES, WEDDING_CATEGORIES };
}
