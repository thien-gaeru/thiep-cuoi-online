// ==========================================================================
// KHO 1,000 MẪU THIỆP CƯỚI CHUYÊN NGHIỆP & HIỆU ỨNG CHUYỂN CẢNH ĐA DẠNG
// (20 BỘ SƯU TẬP x 50 MẪU ĐỘC BẢN = 1,000 MẪU)
// ==========================================================================

const WEDDING_CATEGORIES = [
  {
    "id": "all",
    "name": "Tất Cả (1,000 Mẫu)",
    "icon": "sparkles"
  },
  {
    "id": "traditional",
    "name": "Truyền Thống Á Đông & Cổ Điển",
    "icon": "heart"
  },
  {
    "id": "floral",
    "name": "Hoa Cỏ & Botanical Garden",
    "icon": "flower-2"
  },
  {
    "id": "luxury",
    "name": "Hoàng Gia, Luxury & Gold Foil",
    "icon": "crown"
  },
  {
    "id": "rustic",
    "name": "Rustic, Mộc Mạc & Giấy Kraft",
    "icon": "feather"
  },
  {
    "id": "minimalist",
    "name": "Tối Giản Hiện Đại & Scandinavian",
    "icon": "layout"
  },
  {
    "id": "ocean",
    "name": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "icon": "waves"
  },
  {
    "id": "pastel",
    "name": "Pastel Dịu Ngọt & Sweet Romance",
    "icon": "palette"
  },
  {
    "id": "watercolor",
    "name": "Màu Nước & Tranh Hội Họa",
    "icon": "brush"
  },
  {
    "id": "celestial",
    "name": "Dạ Hội, Ngân Hà & Starlight",
    "icon": "moon"
  },
  {
    "id": "trendy",
    "name": "Xu Hướng Gen Z, Y2K & Retro",
    "icon": "zap"
  },
  {
    "id": "fairytale",
    "name": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "icon": "sparkles"
  },
  {
    "id": "autumn",
    "name": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "icon": "wind"
  },
  {
    "id": "winter",
    "name": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "icon": "snowflake"
  },
  {
    "id": "vintage_era",
    "name": "Cổ Điển Retro 1920-1970s",
    "icon": "film"
  },
  {
    "id": "broadway",
    "name": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "icon": "music"
  },
  {
    "id": "zen",
    "name": "Thiền Định, Wabi-Sabi & Zen Garden",
    "icon": "sun"
  },
  {
    "id": "glassmorphism",
    "name": "Pha Lê, Thủy Tinh & Glassmorphism",
    "icon": "shield"
  },
  {
    "id": "wine_gala",
    "name": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "icon": "wine"
  },
  {
    "id": "highland",
    "name": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "icon": "mountain"
  },
  {
    "id": "cinematic",
    "name": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "icon": "camera"
  }
];

const WEDDING_TRANSITIONS = [
  "cinematic-fade",
  "parallax-zoom",
  "slide-up",
  "card-flip",
  "curtain-reveal",
  "soft-float",
  "origami-fold",
  "zoom-burst",
  "gentle-drift",
  "ribbon-unroll"
];

const WEDDING_PARTICLES = [
  "petals",
  "hearts",
  "snow",
  "gold-sparkles",
  "fireflies",
  "confetti"
];

const WEDDING_TEMPLATES = [
  {
    "id": 1,
    "name": "Truyền Nguyện Ước Vĩnh Cửu #1",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 2,
    "name": "Truyền Vũ Điệu Thuần Khiết #2",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 3,
    "name": "Truyền Cung Đàn Ngọt Ngào #3",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 4,
    "name": "Truyền Giấc Mơ Ấm Áp #4",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 5,
    "name": "Truyền Nụ Cười Bình Yên #5",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 6,
    "name": "Truyền Tổ Ấm Mộng Mơ #6",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 7,
    "name": "Truyền Trái Tim Viên Mãn #7",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 8,
    "name": "Truyền Lời Thề Trang Nhã #8",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 9,
    "name": "Truyền Nguyện Ước Thơ Mộng #9",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 10,
    "name": "Truyền Vũ Điệu Rực Rỡ #10",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 11,
    "name": "Truyền Cung Đàn Tinh Khôi #11",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 12,
    "name": "Truyền Giấc Mơ Nồng Nàn #12",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 13,
    "name": "Truyền Nụ Cười Gắn Kết #13",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 14,
    "name": "Truyền Tổ Ấm Hòa Ca #14",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 15,
    "name": "Truyền Trái Tim Hạnh Phúc #15",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 16,
    "name": "Truyền Lời Thề Vĩnh Cửu #16",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 17,
    "name": "Truyền Nguyện Ước Thuần Khiết #17",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 18,
    "name": "Truyền Vũ Điệu Ngọt Ngào #18",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 19,
    "name": "Truyền Cung Đàn Ấm Áp #19",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 20,
    "name": "Truyền Giấc Mơ Bình Yên #20",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 21,
    "name": "Truyền Nụ Cười Mộng Mơ #21",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 22,
    "name": "Truyền Tổ Ấm Viên Mãn #22",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 23,
    "name": "Truyền Trái Tim Trang Nhã #23",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 24,
    "name": "Truyền Lời Thề Thơ Mộng #24",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 25,
    "name": "Truyền Nguyện Ước Rực Rỡ #25",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 26,
    "name": "Truyền Vũ Điệu Tinh Khôi #26",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 27,
    "name": "Truyền Cung Đàn Nồng Nàn #27",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 28,
    "name": "Truyền Giấc Mơ Gắn Kết #28",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 29,
    "name": "Truyền Nụ Cười Hòa Ca #29",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 30,
    "name": "Truyền Tổ Ấm Hạnh Phúc #30",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 31,
    "name": "Truyền Trái Tim Vĩnh Cửu #31",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 32,
    "name": "Truyền Lời Thề Thuần Khiết #32",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 33,
    "name": "Truyền Nguyện Ước Ngọt Ngào #33",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 34,
    "name": "Truyền Vũ Điệu Ấm Áp #34",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 35,
    "name": "Truyền Cung Đàn Bình Yên #35",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 36,
    "name": "Truyền Giấc Mơ Mộng Mơ #36",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 37,
    "name": "Truyền Nụ Cười Viên Mãn #37",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 38,
    "name": "Truyền Tổ Ấm Trang Nhã #38",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 39,
    "name": "Truyền Trái Tim Thơ Mộng #39",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 40,
    "name": "Truyền Lời Thề Rực Rỡ #40",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 41,
    "name": "Truyền Nguyện Ước Tinh Khôi #41",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 42,
    "name": "Truyền Vũ Điệu Nồng Nàn #42",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 43,
    "name": "Truyền Cung Đàn Gắn Kết #43",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 44,
    "name": "Truyền Giấc Mơ Hòa Ca #44",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 45,
    "name": "Truyền Nụ Cười Hạnh Phúc #45",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 46,
    "name": "Truyền Tổ Ấm Vĩnh Cửu #46",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 47,
    "name": "Truyền Trái Tim Thuần Khiết #47",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 48,
    "name": "Truyền Lời Thề Ngọt Ngào #48",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1D4ED8",
      "secondary": "#3B82F6",
      "accent": "#2563EB",
      "text": "#1E293B",
      "bg": "from-blue-50 via-slate-50 to-sky-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1D4ED8",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 49,
    "name": "Truyền Nguyện Ước Ấm Áp #49",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B91C1C",
      "secondary": "#D97706",
      "accent": "#DC2626",
      "text": "#450A0A",
      "bg": "from-rose-50 via-amber-50 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#B91C1C",
      "petals": [
        "#DC2626",
        "#F59E0B",
        "#FCA5A5"
      ],
      "isDark": false
    }
  },
  {
    "id": 50,
    "name": "Truyền Vũ Điệu Bình Yên #50",
    "category": "traditional",
    "categoryName": "Truyền Thống Á Đông & Cổ Điển",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách truyền thống á đông & cổ điển với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#991B1B",
      "secondary": "#B45309",
      "accent": "#B91C1C",
      "text": "#3B0707",
      "bg": "from-red-50 via-orange-50 to-rose-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#991B1B",
      "petals": [
        "#991B1B",
        "#D97706",
        "#FEE2E2"
      ],
      "isDark": false
    }
  },
  {
    "id": 51,
    "name": "Hoa Ánh Dương Tinh Khôi #51",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 52,
    "name": "Hoa Dòng Chảy Nồng Nàn #52",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 53,
    "name": "Hoa Hành Trình Gắn Kết #53",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 54,
    "name": "Hoa Nhịp Đập Hòa Ca #54",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 55,
    "name": "Hoa Hôn Lễ Hạnh Phúc #55",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 56,
    "name": "Hoa Vầng Trăng Vĩnh Cửu #56",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 57,
    "name": "Hoa Giai Điệu Thuần Khiết #57",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 58,
    "name": "Hoa Bản Tình Ca Ngọt Ngào #58",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 59,
    "name": "Hoa Ánh Dương Ấm Áp #59",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 60,
    "name": "Hoa Dòng Chảy Bình Yên #60",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 61,
    "name": "Hoa Hành Trình Mộng Mơ #61",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 62,
    "name": "Hoa Nhịp Đập Viên Mãn #62",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 63,
    "name": "Hoa Hôn Lễ Trang Nhã #63",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 64,
    "name": "Hoa Vầng Trăng Thơ Mộng #64",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 65,
    "name": "Hoa Giai Điệu Rực Rỡ #65",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 66,
    "name": "Hoa Bản Tình Ca Tinh Khôi #66",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 67,
    "name": "Hoa Ánh Dương Nồng Nàn #67",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 68,
    "name": "Hoa Dòng Chảy Gắn Kết #68",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 69,
    "name": "Hoa Hành Trình Hòa Ca #69",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 70,
    "name": "Hoa Nhịp Đập Hạnh Phúc #70",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 71,
    "name": "Hoa Hôn Lễ Vĩnh Cửu #71",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 72,
    "name": "Hoa Vầng Trăng Thuần Khiết #72",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 73,
    "name": "Hoa Giai Điệu Ngọt Ngào #73",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 74,
    "name": "Hoa Bản Tình Ca Ấm Áp #74",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 75,
    "name": "Hoa Ánh Dương Bình Yên #75",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 76,
    "name": "Hoa Dòng Chảy Mộng Mơ #76",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 77,
    "name": "Hoa Hành Trình Viên Mãn #77",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 78,
    "name": "Hoa Nhịp Đập Trang Nhã #78",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 79,
    "name": "Hoa Hôn Lễ Thơ Mộng #79",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 80,
    "name": "Hoa Vầng Trăng Rực Rỡ #80",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 81,
    "name": "Hoa Giai Điệu Tinh Khôi #81",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 82,
    "name": "Hoa Bản Tình Ca Nồng Nàn #82",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 83,
    "name": "Hoa Ánh Dương Gắn Kết #83",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 84,
    "name": "Hoa Dòng Chảy Hòa Ca #84",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 85,
    "name": "Hoa Hành Trình Hạnh Phúc #85",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 86,
    "name": "Hoa Nhịp Đập Vĩnh Cửu #86",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 87,
    "name": "Hoa Hôn Lễ Thuần Khiết #87",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 88,
    "name": "Hoa Vầng Trăng Ngọt Ngào #88",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 89,
    "name": "Hoa Giai Điệu Ấm Áp #89",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 90,
    "name": "Hoa Bản Tình Ca Bình Yên #90",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 91,
    "name": "Hoa Ánh Dương Mộng Mơ #91",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 92,
    "name": "Hoa Dòng Chảy Viên Mãn #92",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 93,
    "name": "Hoa Hành Trình Trang Nhã #93",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 94,
    "name": "Hoa Nhịp Đập Thơ Mộng #94",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 95,
    "name": "Hoa Hôn Lễ Rực Rỡ #95",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 96,
    "name": "Hoa Vầng Trăng Tinh Khôi #96",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 97,
    "name": "Hoa Giai Điệu Nồng Nàn #97",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 98,
    "name": "Hoa Bản Tình Ca Gắn Kết #98",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#DB2777",
      "secondary": "#F472B6",
      "accent": "#BE185D",
      "text": "#500724",
      "bg": "from-pink-50 via-rose-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#DB2777",
      "petals": [
        "#F472B6",
        "#FBCFE8",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 99,
    "name": "Hoa Ánh Dương Hòa Ca #99",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B87D65",
      "secondary": "#D4AF37",
      "accent": "#9D5C43",
      "text": "#3A2E2B",
      "bg": "from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]",
      "cardBg": "#FAF7F2",
      "envelopeWax": "#B87D65",
      "petals": [
        "#FBCFE8",
        "#FED7AA",
        "#FDE047"
      ],
      "isDark": false
    }
  },
  {
    "id": 100,
    "name": "Hoa Dòng Chảy Hạnh Phúc #100",
    "category": "floral",
    "categoryName": "Hoa Cỏ & Botanical Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoa cỏ & botanical garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#047857",
      "secondary": "#10B981",
      "accent": "#059669",
      "text": "#064E3B",
      "bg": "from-emerald-50 via-stone-50 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#047857",
      "petals": [
        "#A7F3D0",
        "#D1FAE5",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 101,
    "name": "Hoàng Bến Đỗ Mộng Mơ #101",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 102,
    "name": "Hoàng Ánh Mắt Viên Mãn #102",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 103,
    "name": "Hoàng Khúc Ca Trang Nhã #103",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 104,
    "name": "Hoàng Bàn Tay Thơ Mộng #104",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 105,
    "name": "Hoàng Bầu Trời Rực Rỡ #105",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 106,
    "name": "Hoàng Khoảnh Khắc Tinh Khôi #106",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 107,
    "name": "Hoàng Hơi Thở Nồng Nàn #107",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 108,
    "name": "Hoàng Hương Sắc Gắn Kết #108",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 109,
    "name": "Hoàng Bến Đỗ Hòa Ca #109",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 110,
    "name": "Hoàng Ánh Mắt Hạnh Phúc #110",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 111,
    "name": "Hoàng Khúc Ca Vĩnh Cửu #111",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 112,
    "name": "Hoàng Bàn Tay Thuần Khiết #112",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 113,
    "name": "Hoàng Bầu Trời Ngọt Ngào #113",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 114,
    "name": "Hoàng Khoảnh Khắc Ấm Áp #114",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 115,
    "name": "Hoàng Hơi Thở Bình Yên #115",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 116,
    "name": "Hoàng Hương Sắc Mộng Mơ #116",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 117,
    "name": "Hoàng Bến Đỗ Viên Mãn #117",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 118,
    "name": "Hoàng Ánh Mắt Trang Nhã #118",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 119,
    "name": "Hoàng Khúc Ca Thơ Mộng #119",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 120,
    "name": "Hoàng Bàn Tay Rực Rỡ #120",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 121,
    "name": "Hoàng Bầu Trời Tinh Khôi #121",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 122,
    "name": "Hoàng Khoảnh Khắc Nồng Nàn #122",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 123,
    "name": "Hoàng Hơi Thở Gắn Kết #123",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 124,
    "name": "Hoàng Hương Sắc Hòa Ca #124",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 125,
    "name": "Hoàng Bến Đỗ Hạnh Phúc #125",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 126,
    "name": "Hoàng Ánh Mắt Vĩnh Cửu #126",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 127,
    "name": "Hoàng Khúc Ca Thuần Khiết #127",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 128,
    "name": "Hoàng Bàn Tay Ngọt Ngào #128",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 129,
    "name": "Hoàng Bầu Trời Ấm Áp #129",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 130,
    "name": "Hoàng Khoảnh Khắc Bình Yên #130",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 131,
    "name": "Hoàng Hơi Thở Mộng Mơ #131",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 132,
    "name": "Hoàng Hương Sắc Viên Mãn #132",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 133,
    "name": "Hoàng Bến Đỗ Trang Nhã #133",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 134,
    "name": "Hoàng Ánh Mắt Thơ Mộng #134",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 135,
    "name": "Hoàng Khúc Ca Rực Rỡ #135",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 136,
    "name": "Hoàng Bàn Tay Tinh Khôi #136",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 137,
    "name": "Hoàng Bầu Trời Nồng Nàn #137",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 138,
    "name": "Hoàng Khoảnh Khắc Gắn Kết #138",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 139,
    "name": "Hoàng Hơi Thở Hòa Ca #139",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 140,
    "name": "Hoàng Hương Sắc Hạnh Phúc #140",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 141,
    "name": "Hoàng Bến Đỗ Vĩnh Cửu #141",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 142,
    "name": "Hoàng Ánh Mắt Thuần Khiết #142",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 143,
    "name": "Hoàng Khúc Ca Ngọt Ngào #143",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 144,
    "name": "Hoàng Bàn Tay Ấm Áp #144",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 145,
    "name": "Hoàng Bầu Trời Bình Yên #145",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 146,
    "name": "Hoàng Khoảnh Khắc Mộng Mơ #146",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 147,
    "name": "Hoàng Hơi Thở Viên Mãn #147",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 148,
    "name": "Hoàng Hương Sắc Trang Nhã #148",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#3B82F6",
      "accent": "#172554",
      "text": "#0F172A",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E3A8A",
      "petals": [
        "#93C5FD",
        "#BFDBFE",
        "#60A5FA"
      ],
      "isDark": false
    }
  },
  {
    "id": 149,
    "name": "Hoàng Bến Đỗ Thơ Mộng #149",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#92400E",
      "text": "#291605",
      "bg": "from-stone-900 via-stone-800 to-amber-950",
      "cardBg": "#1C1917",
      "envelopeWax": "#D97706",
      "petals": [
        "#FCD34D",
        "#F59E0B",
        "#D97706"
      ],
      "isDark": true
    }
  },
  {
    "id": 150,
    "name": "Hoàng Ánh Mắt Rực Rỡ #150",
    "category": "luxury",
    "categoryName": "Hoàng Gia, Luxury & Gold Foil",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách hoàng gia, luxury & gold foil với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#881337",
      "secondary": "#BE123C",
      "accent": "#4C0519",
      "text": "#3B0716",
      "bg": "from-rose-50 via-stone-100 to-red-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#881337",
      "petals": [
        "#BE123C",
        "#E11D48",
        "#FECDD3"
      ],
      "isDark": false
    }
  },
  {
    "id": 151,
    "name": "Rustic, Nụ Cười Vĩnh Cửu #151",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 152,
    "name": "Rustic, Tổ Ấm Thuần Khiết #152",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 153,
    "name": "Rustic, Trái Tim Ngọt Ngào #153",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 154,
    "name": "Rustic, Lời Thề Ấm Áp #154",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 155,
    "name": "Rustic, Nguyện Ước Bình Yên #155",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 156,
    "name": "Rustic, Vũ Điệu Mộng Mơ #156",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 157,
    "name": "Rustic, Cung Đàn Viên Mãn #157",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 158,
    "name": "Rustic, Giấc Mơ Trang Nhã #158",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 159,
    "name": "Rustic, Nụ Cười Thơ Mộng #159",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 160,
    "name": "Rustic, Tổ Ấm Rực Rỡ #160",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 161,
    "name": "Rustic, Trái Tim Tinh Khôi #161",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 162,
    "name": "Rustic, Lời Thề Nồng Nàn #162",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 163,
    "name": "Rustic, Nguyện Ước Gắn Kết #163",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 164,
    "name": "Rustic, Vũ Điệu Hòa Ca #164",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 165,
    "name": "Rustic, Cung Đàn Hạnh Phúc #165",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 166,
    "name": "Rustic, Giấc Mơ Vĩnh Cửu #166",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 167,
    "name": "Rustic, Nụ Cười Thuần Khiết #167",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 168,
    "name": "Rustic, Tổ Ấm Ngọt Ngào #168",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 169,
    "name": "Rustic, Trái Tim Ấm Áp #169",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 170,
    "name": "Rustic, Lời Thề Bình Yên #170",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 171,
    "name": "Rustic, Nguyện Ước Mộng Mơ #171",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 172,
    "name": "Rustic, Vũ Điệu Viên Mãn #172",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 173,
    "name": "Rustic, Cung Đàn Trang Nhã #173",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 174,
    "name": "Rustic, Giấc Mơ Thơ Mộng #174",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 175,
    "name": "Rustic, Nụ Cười Rực Rỡ #175",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 176,
    "name": "Rustic, Tổ Ấm Tinh Khôi #176",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 177,
    "name": "Rustic, Trái Tim Nồng Nàn #177",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 178,
    "name": "Rustic, Lời Thề Gắn Kết #178",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 179,
    "name": "Rustic, Nguyện Ước Hòa Ca #179",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 180,
    "name": "Rustic, Vũ Điệu Hạnh Phúc #180",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 181,
    "name": "Rustic, Cung Đàn Vĩnh Cửu #181",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 182,
    "name": "Rustic, Giấc Mơ Thuần Khiết #182",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 183,
    "name": "Rustic, Nụ Cười Ngọt Ngào #183",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 184,
    "name": "Rustic, Tổ Ấm Ấm Áp #184",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 185,
    "name": "Rustic, Trái Tim Bình Yên #185",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 186,
    "name": "Rustic, Lời Thề Mộng Mơ #186",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 187,
    "name": "Rustic, Nguyện Ước Viên Mãn #187",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 188,
    "name": "Rustic, Vũ Điệu Trang Nhã #188",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 189,
    "name": "Rustic, Cung Đàn Thơ Mộng #189",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 190,
    "name": "Rustic, Giấc Mơ Rực Rỡ #190",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 191,
    "name": "Rustic, Nụ Cười Tinh Khôi #191",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 192,
    "name": "Rustic, Tổ Ấm Nồng Nàn #192",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 193,
    "name": "Rustic, Trái Tim Gắn Kết #193",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 194,
    "name": "Rustic, Lời Thề Hòa Ca #194",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 195,
    "name": "Rustic, Nguyện Ước Hạnh Phúc #195",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 196,
    "name": "Rustic, Vũ Điệu Vĩnh Cửu #196",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 197,
    "name": "Rustic, Cung Đàn Thuần Khiết #197",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 198,
    "name": "Rustic, Giấc Mơ Ngọt Ngào #198",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 199,
    "name": "Rustic, Nụ Cười Ấm Áp #199",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#A16207",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]",
      "cardBg": "#FBF7F0",
      "envelopeWax": "#854D0E",
      "petals": [
        "#D4B89B",
        "#C2A385",
        "#E8D8C3"
      ],
      "isDark": false
    }
  },
  {
    "id": 200,
    "name": "Rustic, Tổ Ấm Bình Yên #200",
    "category": "rustic",
    "categoryName": "Rustic, Mộc Mạc & Giấy Kraft",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách rustic, mộc mạc & giấy kraft với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#78350F",
      "secondary": "#B45309",
      "accent": "#451A03",
      "text": "#291605",
      "bg": "from-stone-100 via-amber-50 to-orange-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#78350F",
      "petals": [
        "#B45309",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 201,
    "name": "Tối Hôn Lễ Tinh Khôi #201",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 202,
    "name": "Tối Vầng Trăng Nồng Nàn #202",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 203,
    "name": "Tối Giai Điệu Gắn Kết #203",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 204,
    "name": "Tối Bản Tình Ca Hòa Ca #204",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 205,
    "name": "Tối Ánh Dương Hạnh Phúc #205",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 206,
    "name": "Tối Dòng Chảy Vĩnh Cửu #206",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 207,
    "name": "Tối Hành Trình Thuần Khiết #207",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 208,
    "name": "Tối Nhịp Đập Ngọt Ngào #208",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 209,
    "name": "Tối Hôn Lễ Ấm Áp #209",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 210,
    "name": "Tối Vầng Trăng Bình Yên #210",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 211,
    "name": "Tối Giai Điệu Mộng Mơ #211",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 212,
    "name": "Tối Bản Tình Ca Viên Mãn #212",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 213,
    "name": "Tối Ánh Dương Trang Nhã #213",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 214,
    "name": "Tối Dòng Chảy Thơ Mộng #214",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 215,
    "name": "Tối Hành Trình Rực Rỡ #215",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 216,
    "name": "Tối Nhịp Đập Tinh Khôi #216",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 217,
    "name": "Tối Hôn Lễ Nồng Nàn #217",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 218,
    "name": "Tối Vầng Trăng Gắn Kết #218",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 219,
    "name": "Tối Giai Điệu Hòa Ca #219",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 220,
    "name": "Tối Bản Tình Ca Hạnh Phúc #220",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 221,
    "name": "Tối Ánh Dương Vĩnh Cửu #221",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 222,
    "name": "Tối Dòng Chảy Thuần Khiết #222",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 223,
    "name": "Tối Hành Trình Ngọt Ngào #223",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 224,
    "name": "Tối Nhịp Đập Ấm Áp #224",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 225,
    "name": "Tối Hôn Lễ Bình Yên #225",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 226,
    "name": "Tối Vầng Trăng Mộng Mơ #226",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 227,
    "name": "Tối Giai Điệu Viên Mãn #227",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 228,
    "name": "Tối Bản Tình Ca Trang Nhã #228",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 229,
    "name": "Tối Ánh Dương Thơ Mộng #229",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 230,
    "name": "Tối Dòng Chảy Rực Rỡ #230",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 231,
    "name": "Tối Hành Trình Tinh Khôi #231",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 232,
    "name": "Tối Nhịp Đập Nồng Nàn #232",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 233,
    "name": "Tối Hôn Lễ Gắn Kết #233",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 234,
    "name": "Tối Vầng Trăng Hòa Ca #234",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 235,
    "name": "Tối Giai Điệu Hạnh Phúc #235",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 236,
    "name": "Tối Bản Tình Ca Vĩnh Cửu #236",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 237,
    "name": "Tối Ánh Dương Thuần Khiết #237",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 238,
    "name": "Tối Dòng Chảy Ngọt Ngào #238",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 239,
    "name": "Tối Hành Trình Ấm Áp #239",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 240,
    "name": "Tối Nhịp Đập Bình Yên #240",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 241,
    "name": "Tối Hôn Lễ Mộng Mơ #241",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 242,
    "name": "Tối Vầng Trăng Viên Mãn #242",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 243,
    "name": "Tối Giai Điệu Trang Nhã #243",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 244,
    "name": "Tối Bản Tình Ca Thơ Mộng #244",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 245,
    "name": "Tối Ánh Dương Rực Rỡ #245",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 246,
    "name": "Tối Dòng Chảy Tinh Khôi #246",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 247,
    "name": "Tối Hành Trình Nồng Nàn #247",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 248,
    "name": "Tối Nhịp Đập Gắn Kết #248",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 249,
    "name": "Tối Hôn Lễ Hòa Ca #249",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0A0A0A",
      "secondary": "#525252",
      "accent": "#171717",
      "text": "#0A0A0A",
      "bg": "from-stone-50 via-neutral-100 to-stone-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#171717",
      "petals": [
        "#A3A3A3",
        "#D4D4D4",
        "#E5E5E5"
      ],
      "isDark": false
    }
  },
  {
    "id": 250,
    "name": "Tối Vầng Trăng Hạnh Phúc #250",
    "category": "minimalist",
    "categoryName": "Tối Giản Hiện Đại & Scandinavian",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách tối giản hiện đại & scandinavian với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#44403C",
      "secondary": "#78716C",
      "accent": "#292524",
      "text": "#1C1917",
      "bg": "from-stone-50 via-stone-100 to-amber-50/30",
      "cardBg": "#FAFAF9",
      "envelopeWax": "#44403C",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 251,
    "name": "Biển Bầu Trời Mộng Mơ #251",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 252,
    "name": "Biển Khoảnh Khắc Viên Mãn #252",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 253,
    "name": "Biển Hơi Thở Trang Nhã #253",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 254,
    "name": "Biển Hương Sắc Thơ Mộng #254",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 255,
    "name": "Biển Bến Đỗ Rực Rỡ #255",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 256,
    "name": "Biển Ánh Mắt Tinh Khôi #256",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 257,
    "name": "Biển Khúc Ca Nồng Nàn #257",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 258,
    "name": "Biển Bàn Tay Gắn Kết #258",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 259,
    "name": "Biển Bầu Trời Hòa Ca #259",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 260,
    "name": "Biển Khoảnh Khắc Hạnh Phúc #260",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 261,
    "name": "Biển Hơi Thở Vĩnh Cửu #261",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 262,
    "name": "Biển Hương Sắc Thuần Khiết #262",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 263,
    "name": "Biển Bến Đỗ Ngọt Ngào #263",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 264,
    "name": "Biển Ánh Mắt Ấm Áp #264",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 265,
    "name": "Biển Khúc Ca Bình Yên #265",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 266,
    "name": "Biển Bàn Tay Mộng Mơ #266",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 267,
    "name": "Biển Bầu Trời Viên Mãn #267",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 268,
    "name": "Biển Khoảnh Khắc Trang Nhã #268",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 269,
    "name": "Biển Hơi Thở Thơ Mộng #269",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 270,
    "name": "Biển Hương Sắc Rực Rỡ #270",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 271,
    "name": "Biển Bến Đỗ Tinh Khôi #271",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 272,
    "name": "Biển Ánh Mắt Nồng Nàn #272",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 273,
    "name": "Biển Khúc Ca Gắn Kết #273",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 274,
    "name": "Biển Bàn Tay Hòa Ca #274",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 275,
    "name": "Biển Bầu Trời Hạnh Phúc #275",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 276,
    "name": "Biển Khoảnh Khắc Vĩnh Cửu #276",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 277,
    "name": "Biển Hơi Thở Thuần Khiết #277",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 278,
    "name": "Biển Hương Sắc Ngọt Ngào #278",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 279,
    "name": "Biển Bến Đỗ Ấm Áp #279",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 280,
    "name": "Biển Ánh Mắt Bình Yên #280",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 281,
    "name": "Biển Khúc Ca Mộng Mơ #281",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 282,
    "name": "Biển Bàn Tay Viên Mãn #282",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 283,
    "name": "Biển Bầu Trời Trang Nhã #283",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 284,
    "name": "Biển Khoảnh Khắc Thơ Mộng #284",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 285,
    "name": "Biển Hơi Thở Rực Rỡ #285",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 286,
    "name": "Biển Hương Sắc Tinh Khôi #286",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 287,
    "name": "Biển Bến Đỗ Nồng Nàn #287",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 288,
    "name": "Biển Ánh Mắt Gắn Kết #288",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 289,
    "name": "Biển Khúc Ca Hòa Ca #289",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 290,
    "name": "Biển Bàn Tay Hạnh Phúc #290",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 291,
    "name": "Biển Bầu Trời Vĩnh Cửu #291",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 292,
    "name": "Biển Khoảnh Khắc Thuần Khiết #292",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 293,
    "name": "Biển Hơi Thở Ngọt Ngào #293",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 294,
    "name": "Biển Hương Sắc Ấm Áp #294",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 295,
    "name": "Biển Bến Đỗ Bình Yên #295",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 296,
    "name": "Biển Ánh Mắt Mộng Mơ #296",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 297,
    "name": "Biển Khúc Ca Viên Mãn #297",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 298,
    "name": "Biển Bàn Tay Trang Nhã #298",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 299,
    "name": "Biển Bầu Trời Thơ Mộng #299",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0D9488",
      "secondary": "#2DD4BF",
      "accent": "#0F766E",
      "text": "#134E4A",
      "bg": "from-teal-50 via-cyan-50/50 to-emerald-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0D9488",
      "petals": [
        "#5EEAD4",
        "#99F6E4",
        "#CCFBF1"
      ],
      "isDark": false
    }
  },
  {
    "id": 300,
    "name": "Biển Khoảnh Khắc Rực Rỡ #300",
    "category": "ocean",
    "categoryName": "Biển Xanh & Mùa Hè Nhiệt Đới",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách biển xanh & mùa hè nhiệt đới với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#38BDF8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-sky-50 via-slate-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E0F2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 301,
    "name": "Pastel Nguyện Ước Vĩnh Cửu #301",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 302,
    "name": "Pastel Vũ Điệu Thuần Khiết #302",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 303,
    "name": "Pastel Cung Đàn Ngọt Ngào #303",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 304,
    "name": "Pastel Giấc Mơ Ấm Áp #304",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 305,
    "name": "Pastel Nụ Cười Bình Yên #305",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 306,
    "name": "Pastel Tổ Ấm Mộng Mơ #306",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 307,
    "name": "Pastel Trái Tim Viên Mãn #307",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 308,
    "name": "Pastel Lời Thề Trang Nhã #308",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 309,
    "name": "Pastel Nguyện Ước Thơ Mộng #309",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 310,
    "name": "Pastel Vũ Điệu Rực Rỡ #310",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 311,
    "name": "Pastel Cung Đàn Tinh Khôi #311",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 312,
    "name": "Pastel Giấc Mơ Nồng Nàn #312",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 313,
    "name": "Pastel Nụ Cười Gắn Kết #313",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 314,
    "name": "Pastel Tổ Ấm Hòa Ca #314",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 315,
    "name": "Pastel Trái Tim Hạnh Phúc #315",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 316,
    "name": "Pastel Lời Thề Vĩnh Cửu #316",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 317,
    "name": "Pastel Nguyện Ước Thuần Khiết #317",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 318,
    "name": "Pastel Vũ Điệu Ngọt Ngào #318",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 319,
    "name": "Pastel Cung Đàn Ấm Áp #319",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 320,
    "name": "Pastel Giấc Mơ Bình Yên #320",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 321,
    "name": "Pastel Nụ Cười Mộng Mơ #321",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 322,
    "name": "Pastel Tổ Ấm Viên Mãn #322",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 323,
    "name": "Pastel Trái Tim Trang Nhã #323",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 324,
    "name": "Pastel Lời Thề Thơ Mộng #324",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 325,
    "name": "Pastel Nguyện Ước Rực Rỡ #325",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 326,
    "name": "Pastel Vũ Điệu Tinh Khôi #326",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 327,
    "name": "Pastel Cung Đàn Nồng Nàn #327",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 328,
    "name": "Pastel Giấc Mơ Gắn Kết #328",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 329,
    "name": "Pastel Nụ Cười Hòa Ca #329",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 330,
    "name": "Pastel Tổ Ấm Hạnh Phúc #330",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 331,
    "name": "Pastel Trái Tim Vĩnh Cửu #331",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 332,
    "name": "Pastel Lời Thề Thuần Khiết #332",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 333,
    "name": "Pastel Nguyện Ước Ngọt Ngào #333",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 334,
    "name": "Pastel Vũ Điệu Ấm Áp #334",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 335,
    "name": "Pastel Cung Đàn Bình Yên #335",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 336,
    "name": "Pastel Giấc Mơ Mộng Mơ #336",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 337,
    "name": "Pastel Nụ Cười Viên Mãn #337",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 338,
    "name": "Pastel Tổ Ấm Trang Nhã #338",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 339,
    "name": "Pastel Trái Tim Thơ Mộng #339",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 340,
    "name": "Pastel Lời Thề Rực Rỡ #340",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 341,
    "name": "Pastel Nguyện Ước Tinh Khôi #341",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 342,
    "name": "Pastel Vũ Điệu Nồng Nàn #342",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 343,
    "name": "Pastel Cung Đàn Gắn Kết #343",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 344,
    "name": "Pastel Giấc Mơ Hòa Ca #344",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 345,
    "name": "Pastel Nụ Cười Hạnh Phúc #345",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 346,
    "name": "Pastel Tổ Ấm Vĩnh Cửu #346",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 347,
    "name": "Pastel Trái Tim Thuần Khiết #347",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 348,
    "name": "Pastel Lời Thề Ngọt Ngào #348",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 349,
    "name": "Pastel Nguyện Ước Ấm Áp #349",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#EA580C",
      "secondary": "#FDBA74",
      "accent": "#C2410C",
      "text": "#431407",
      "bg": "from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#EA580C",
      "petals": [
        "#FED7AA",
        "#FFEDD5",
        "#FDBA74"
      ],
      "isDark": false
    }
  },
  {
    "id": 350,
    "name": "Pastel Vũ Điệu Bình Yên #350",
    "category": "pastel",
    "categoryName": "Pastel Dịu Ngọt & Sweet Romance",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách pastel dịu ngọt & sweet romance với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#3B0764",
      "bg": "from-violet-50 via-purple-50/40 to-purple-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#DDD6FE",
        "#EDE9FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 351,
    "name": "Màu Ánh Dương Tinh Khôi #351",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 352,
    "name": "Màu Dòng Chảy Nồng Nàn #352",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 353,
    "name": "Màu Hành Trình Gắn Kết #353",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 354,
    "name": "Màu Nhịp Đập Hòa Ca #354",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 355,
    "name": "Màu Hôn Lễ Hạnh Phúc #355",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 356,
    "name": "Màu Vầng Trăng Vĩnh Cửu #356",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 357,
    "name": "Màu Giai Điệu Thuần Khiết #357",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 358,
    "name": "Màu Bản Tình Ca Ngọt Ngào #358",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 359,
    "name": "Màu Ánh Dương Ấm Áp #359",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 360,
    "name": "Màu Dòng Chảy Bình Yên #360",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 361,
    "name": "Màu Hành Trình Mộng Mơ #361",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 362,
    "name": "Màu Nhịp Đập Viên Mãn #362",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 363,
    "name": "Màu Hôn Lễ Trang Nhã #363",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 364,
    "name": "Màu Vầng Trăng Thơ Mộng #364",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 365,
    "name": "Màu Giai Điệu Rực Rỡ #365",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 366,
    "name": "Màu Bản Tình Ca Tinh Khôi #366",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 367,
    "name": "Màu Ánh Dương Nồng Nàn #367",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 368,
    "name": "Màu Dòng Chảy Gắn Kết #368",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 369,
    "name": "Màu Hành Trình Hòa Ca #369",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 370,
    "name": "Màu Nhịp Đập Hạnh Phúc #370",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 371,
    "name": "Màu Hôn Lễ Vĩnh Cửu #371",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 372,
    "name": "Màu Vầng Trăng Thuần Khiết #372",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 373,
    "name": "Màu Giai Điệu Ngọt Ngào #373",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 374,
    "name": "Màu Bản Tình Ca Ấm Áp #374",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 375,
    "name": "Màu Ánh Dương Bình Yên #375",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 376,
    "name": "Màu Dòng Chảy Mộng Mơ #376",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 377,
    "name": "Màu Hành Trình Viên Mãn #377",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 378,
    "name": "Màu Nhịp Đập Trang Nhã #378",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 379,
    "name": "Màu Hôn Lễ Thơ Mộng #379",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 380,
    "name": "Màu Vầng Trăng Rực Rỡ #380",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 381,
    "name": "Màu Giai Điệu Tinh Khôi #381",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 382,
    "name": "Màu Bản Tình Ca Nồng Nàn #382",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 383,
    "name": "Màu Ánh Dương Gắn Kết #383",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 384,
    "name": "Màu Dòng Chảy Hòa Ca #384",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 385,
    "name": "Màu Hành Trình Hạnh Phúc #385",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 386,
    "name": "Màu Nhịp Đập Vĩnh Cửu #386",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 387,
    "name": "Màu Hôn Lễ Thuần Khiết #387",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 388,
    "name": "Màu Vầng Trăng Ngọt Ngào #388",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 389,
    "name": "Màu Giai Điệu Ấm Áp #389",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 390,
    "name": "Màu Bản Tình Ca Bình Yên #390",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 391,
    "name": "Màu Ánh Dương Mộng Mơ #391",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 392,
    "name": "Màu Dòng Chảy Viên Mãn #392",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 393,
    "name": "Màu Hành Trình Trang Nhã #393",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 394,
    "name": "Màu Nhịp Đập Thơ Mộng #394",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 395,
    "name": "Màu Hôn Lễ Rực Rỡ #395",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 396,
    "name": "Màu Vầng Trăng Tinh Khôi #396",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 397,
    "name": "Màu Giai Điệu Nồng Nàn #397",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 398,
    "name": "Màu Bản Tình Ca Gắn Kết #398",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 399,
    "name": "Màu Ánh Dương Hòa Ca #399",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E40AF",
      "secondary": "#3B82F6",
      "accent": "#1D4ED8",
      "text": "#172554",
      "bg": "from-blue-50 via-slate-50 to-indigo-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#1E40AF",
      "petals": [
        "#60A5FA",
        "#93C5FD",
        "#DBEAFE"
      ],
      "isDark": false
    }
  },
  {
    "id": 400,
    "name": "Màu Dòng Chảy Hạnh Phúc #400",
    "category": "watercolor",
    "categoryName": "Màu Nước & Tranh Hội Họa",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách màu nước & tranh hội họa với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F59E0B",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-purple-50 via-amber-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#C084FC",
        "#FCD34D",
        "#E9D5FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 401,
    "name": "Dạ Bến Đỗ Mộng Mơ #401",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 402,
    "name": "Dạ Ánh Mắt Viên Mãn #402",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 403,
    "name": "Dạ Khúc Ca Trang Nhã #403",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 404,
    "name": "Dạ Bàn Tay Thơ Mộng #404",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 405,
    "name": "Dạ Bầu Trời Rực Rỡ #405",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 406,
    "name": "Dạ Khoảnh Khắc Tinh Khôi #406",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 407,
    "name": "Dạ Hơi Thở Nồng Nàn #407",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 408,
    "name": "Dạ Hương Sắc Gắn Kết #408",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 409,
    "name": "Dạ Bến Đỗ Hòa Ca #409",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 410,
    "name": "Dạ Ánh Mắt Hạnh Phúc #410",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 411,
    "name": "Dạ Khúc Ca Vĩnh Cửu #411",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 412,
    "name": "Dạ Bàn Tay Thuần Khiết #412",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 413,
    "name": "Dạ Bầu Trời Ngọt Ngào #413",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 414,
    "name": "Dạ Khoảnh Khắc Ấm Áp #414",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 415,
    "name": "Dạ Hơi Thở Bình Yên #415",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 416,
    "name": "Dạ Hương Sắc Mộng Mơ #416",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 417,
    "name": "Dạ Bến Đỗ Viên Mãn #417",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 418,
    "name": "Dạ Ánh Mắt Trang Nhã #418",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 419,
    "name": "Dạ Khúc Ca Thơ Mộng #419",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 420,
    "name": "Dạ Bàn Tay Rực Rỡ #420",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 421,
    "name": "Dạ Bầu Trời Tinh Khôi #421",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 422,
    "name": "Dạ Khoảnh Khắc Nồng Nàn #422",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 423,
    "name": "Dạ Hơi Thở Gắn Kết #423",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 424,
    "name": "Dạ Hương Sắc Hòa Ca #424",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 425,
    "name": "Dạ Bến Đỗ Hạnh Phúc #425",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 426,
    "name": "Dạ Ánh Mắt Vĩnh Cửu #426",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 427,
    "name": "Dạ Khúc Ca Thuần Khiết #427",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 428,
    "name": "Dạ Bàn Tay Ngọt Ngào #428",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 429,
    "name": "Dạ Bầu Trời Ấm Áp #429",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 430,
    "name": "Dạ Khoảnh Khắc Bình Yên #430",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 431,
    "name": "Dạ Hơi Thở Mộng Mơ #431",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 432,
    "name": "Dạ Hương Sắc Viên Mãn #432",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 433,
    "name": "Dạ Bến Đỗ Trang Nhã #433",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 434,
    "name": "Dạ Ánh Mắt Thơ Mộng #434",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 435,
    "name": "Dạ Khúc Ca Rực Rỡ #435",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 436,
    "name": "Dạ Bàn Tay Tinh Khôi #436",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 437,
    "name": "Dạ Bầu Trời Nồng Nàn #437",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 438,
    "name": "Dạ Khoảnh Khắc Gắn Kết #438",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 439,
    "name": "Dạ Hơi Thở Hòa Ca #439",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 440,
    "name": "Dạ Hương Sắc Hạnh Phúc #440",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 441,
    "name": "Dạ Bến Đỗ Vĩnh Cửu #441",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 442,
    "name": "Dạ Ánh Mắt Thuần Khiết #442",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 443,
    "name": "Dạ Khúc Ca Ngọt Ngào #443",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 444,
    "name": "Dạ Bàn Tay Ấm Áp #444",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 445,
    "name": "Dạ Bầu Trời Bình Yên #445",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 446,
    "name": "Dạ Khoảnh Khắc Mộng Mơ #446",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 447,
    "name": "Dạ Hơi Thở Viên Mãn #447",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 448,
    "name": "Dạ Hương Sắc Trang Nhã #448",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 449,
    "name": "Dạ Bến Đỗ Thơ Mộng #449",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1E3A8A",
      "secondary": "#F59E0B",
      "accent": "#172554",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-blue-950 to-indigo-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#F59E0B",
      "petals": [
        "#FDE047",
        "#60A5FA",
        "#93C5FD"
      ],
      "isDark": true
    }
  },
  {
    "id": 450,
    "name": "Dạ Ánh Mắt Rực Rỡ #450",
    "category": "celestial",
    "categoryName": "Dạ Hội, Ngân Hà & Starlight",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách dạ hội, ngân hà & starlight với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#6B21A8",
      "secondary": "#EC4899",
      "accent": "#581C87",
      "text": "#FDF4FF",
      "bg": "from-purple-950 via-slate-950 to-fuchsia-950",
      "cardBg": "#1E112A",
      "envelopeWax": "#A855F7",
      "petals": [
        "#E879F9",
        "#F472B6",
        "#C084FC"
      ],
      "isDark": true
    }
  },
  {
    "id": 451,
    "name": "Xu Nụ Cười Vĩnh Cửu #451",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 452,
    "name": "Xu Tổ Ấm Thuần Khiết #452",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 453,
    "name": "Xu Trái Tim Ngọt Ngào #453",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 454,
    "name": "Xu Lời Thề Ấm Áp #454",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 455,
    "name": "Xu Nguyện Ước Bình Yên #455",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 456,
    "name": "Xu Vũ Điệu Mộng Mơ #456",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 457,
    "name": "Xu Cung Đàn Viên Mãn #457",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 458,
    "name": "Xu Giấc Mơ Trang Nhã #458",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 459,
    "name": "Xu Nụ Cười Thơ Mộng #459",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 460,
    "name": "Xu Tổ Ấm Rực Rỡ #460",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 461,
    "name": "Xu Trái Tim Tinh Khôi #461",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 462,
    "name": "Xu Lời Thề Nồng Nàn #462",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 463,
    "name": "Xu Nguyện Ước Gắn Kết #463",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 464,
    "name": "Xu Vũ Điệu Hòa Ca #464",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 465,
    "name": "Xu Cung Đàn Hạnh Phúc #465",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 466,
    "name": "Xu Giấc Mơ Vĩnh Cửu #466",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 467,
    "name": "Xu Nụ Cười Thuần Khiết #467",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 468,
    "name": "Xu Tổ Ấm Ngọt Ngào #468",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 469,
    "name": "Xu Trái Tim Ấm Áp #469",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 470,
    "name": "Xu Lời Thề Bình Yên #470",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 471,
    "name": "Xu Nguyện Ước Mộng Mơ #471",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 472,
    "name": "Xu Vũ Điệu Viên Mãn #472",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 473,
    "name": "Xu Cung Đàn Trang Nhã #473",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 474,
    "name": "Xu Giấc Mơ Thơ Mộng #474",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 475,
    "name": "Xu Nụ Cười Rực Rỡ #475",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 476,
    "name": "Xu Tổ Ấm Tinh Khôi #476",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 477,
    "name": "Xu Trái Tim Nồng Nàn #477",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 478,
    "name": "Xu Lời Thề Gắn Kết #478",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 479,
    "name": "Xu Nguyện Ước Hòa Ca #479",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 480,
    "name": "Xu Vũ Điệu Hạnh Phúc #480",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 481,
    "name": "Xu Cung Đàn Vĩnh Cửu #481",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 482,
    "name": "Xu Giấc Mơ Thuần Khiết #482",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 483,
    "name": "Xu Nụ Cười Ngọt Ngào #483",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 484,
    "name": "Xu Tổ Ấm Ấm Áp #484",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 485,
    "name": "Xu Trái Tim Bình Yên #485",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 486,
    "name": "Xu Lời Thề Mộng Mơ #486",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 487,
    "name": "Xu Nguyện Ước Viên Mãn #487",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 488,
    "name": "Xu Vũ Điệu Trang Nhã #488",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 489,
    "name": "Xu Cung Đàn Thơ Mộng #489",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 490,
    "name": "Xu Giấc Mơ Rực Rỡ #490",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 491,
    "name": "Xu Nụ Cười Tinh Khôi #491",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 492,
    "name": "Xu Tổ Ấm Nồng Nàn #492",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 493,
    "name": "Xu Trái Tim Gắn Kết #493",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 494,
    "name": "Xu Lời Thề Hòa Ca #494",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 495,
    "name": "Xu Nguyện Ước Hạnh Phúc #495",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 496,
    "name": "Xu Vũ Điệu Vĩnh Cửu #496",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 497,
    "name": "Xu Cung Đàn Thuần Khiết #497",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 498,
    "name": "Xu Giấc Mơ Ngọt Ngào #498",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 499,
    "name": "Xu Nụ Cười Ấm Áp #499",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#8B5CF6",
      "secondary": "#EC4899",
      "accent": "#06B6D4",
      "text": "#1E1B4B",
      "bg": "from-pink-100 via-purple-100 to-cyan-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#8B5CF6",
      "petals": [
        "#C084FC",
        "#F472B6",
        "#67E8F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 500,
    "name": "Xu Tổ Ấm Bình Yên #500",
    "category": "trendy",
    "categoryName": "Xu Hướng Gen Z, Y2K & Retro",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách xu hướng gen z, y2k & retro với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#1DB954",
      "secondary": "#191414",
      "accent": "#1ED760",
      "text": "#FFFFFF",
      "bg": "from-zinc-950 via-neutral-900 to-emerald-950/40",
      "cardBg": "#121212",
      "envelopeWax": "#1DB954",
      "petals": [
        "#1ED760",
        "#4ADE80",
        "#86EFAC"
      ],
      "isDark": true
    }
  },
  {
    "id": 501,
    "name": "Cổ Hôn Lễ Tinh Khôi #501",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 502,
    "name": "Cổ Vầng Trăng Nồng Nàn #502",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 503,
    "name": "Cổ Giai Điệu Gắn Kết #503",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 504,
    "name": "Cổ Bản Tình Ca Hòa Ca #504",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 505,
    "name": "Cổ Ánh Dương Hạnh Phúc #505",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 506,
    "name": "Cổ Dòng Chảy Vĩnh Cửu #506",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 507,
    "name": "Cổ Hành Trình Thuần Khiết #507",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 508,
    "name": "Cổ Nhịp Đập Ngọt Ngào #508",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 509,
    "name": "Cổ Hôn Lễ Ấm Áp #509",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 510,
    "name": "Cổ Vầng Trăng Bình Yên #510",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 511,
    "name": "Cổ Giai Điệu Mộng Mơ #511",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 512,
    "name": "Cổ Bản Tình Ca Viên Mãn #512",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 513,
    "name": "Cổ Ánh Dương Trang Nhã #513",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 514,
    "name": "Cổ Dòng Chảy Thơ Mộng #514",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 515,
    "name": "Cổ Hành Trình Rực Rỡ #515",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 516,
    "name": "Cổ Nhịp Đập Tinh Khôi #516",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 517,
    "name": "Cổ Hôn Lễ Nồng Nàn #517",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 518,
    "name": "Cổ Vầng Trăng Gắn Kết #518",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 519,
    "name": "Cổ Giai Điệu Hòa Ca #519",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 520,
    "name": "Cổ Bản Tình Ca Hạnh Phúc #520",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 521,
    "name": "Cổ Ánh Dương Vĩnh Cửu #521",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 522,
    "name": "Cổ Dòng Chảy Thuần Khiết #522",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 523,
    "name": "Cổ Hành Trình Ngọt Ngào #523",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 524,
    "name": "Cổ Nhịp Đập Ấm Áp #524",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 525,
    "name": "Cổ Hôn Lễ Bình Yên #525",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 526,
    "name": "Cổ Vầng Trăng Mộng Mơ #526",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 527,
    "name": "Cổ Giai Điệu Viên Mãn #527",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 528,
    "name": "Cổ Bản Tình Ca Trang Nhã #528",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 529,
    "name": "Cổ Ánh Dương Thơ Mộng #529",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 530,
    "name": "Cổ Dòng Chảy Rực Rỡ #530",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 531,
    "name": "Cổ Hành Trình Tinh Khôi #531",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 532,
    "name": "Cổ Nhịp Đập Nồng Nàn #532",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 533,
    "name": "Cổ Hôn Lễ Gắn Kết #533",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 534,
    "name": "Cổ Vầng Trăng Hòa Ca #534",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 535,
    "name": "Cổ Giai Điệu Hạnh Phúc #535",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 536,
    "name": "Cổ Bản Tình Ca Vĩnh Cửu #536",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 537,
    "name": "Cổ Ánh Dương Thuần Khiết #537",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 538,
    "name": "Cổ Dòng Chảy Ngọt Ngào #538",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 539,
    "name": "Cổ Hành Trình Ấm Áp #539",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 540,
    "name": "Cổ Nhịp Đập Bình Yên #540",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 541,
    "name": "Cổ Hôn Lễ Mộng Mơ #541",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 542,
    "name": "Cổ Vầng Trăng Viên Mãn #542",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 543,
    "name": "Cổ Giai Điệu Trang Nhã #543",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 544,
    "name": "Cổ Bản Tình Ca Thơ Mộng #544",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 545,
    "name": "Cổ Ánh Dương Rực Rỡ #545",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 546,
    "name": "Cổ Dòng Chảy Tinh Khôi #546",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 547,
    "name": "Cổ Hành Trình Nồng Nàn #547",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 548,
    "name": "Cổ Nhịp Đập Gắn Kết #548",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 549,
    "name": "Cổ Hôn Lễ Hòa Ca #549",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#9333EA",
      "secondary": "#F472B6",
      "accent": "#7E22CE",
      "text": "#3B0764",
      "bg": "from-fuchsia-50 via-purple-50 to-pink-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#9333EA",
      "petals": [
        "#F472B6",
        "#E879F9",
        "#FDF2F8"
      ],
      "isDark": false
    }
  },
  {
    "id": 550,
    "name": "Cổ Vầng Trăng Hạnh Phúc #550",
    "category": "fairytale",
    "categoryName": "Cổ Tích Lãng Mạn & Lâu Đài Châu Âu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ tích lãng mạn & lâu đài châu âu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#CA8A04",
      "secondary": "#EAB308",
      "accent": "#A16207",
      "text": "#422006",
      "bg": "from-amber-50 via-yellow-50 to-rose-50",
      "cardBg": "#FFFEFA",
      "envelopeWax": "#CA8A04",
      "petals": [
        "#FDE047",
        "#FDA4AF",
        "#FEF08A"
      ],
      "isDark": false
    }
  },
  {
    "id": 551,
    "name": "Mùa Bầu Trời Mộng Mơ #551",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 552,
    "name": "Mùa Khoảnh Khắc Viên Mãn #552",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 553,
    "name": "Mùa Hơi Thở Trang Nhã #553",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 554,
    "name": "Mùa Hương Sắc Thơ Mộng #554",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 555,
    "name": "Mùa Bến Đỗ Rực Rỡ #555",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 556,
    "name": "Mùa Ánh Mắt Tinh Khôi #556",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 557,
    "name": "Mùa Khúc Ca Nồng Nàn #557",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 558,
    "name": "Mùa Bàn Tay Gắn Kết #558",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 559,
    "name": "Mùa Bầu Trời Hòa Ca #559",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 560,
    "name": "Mùa Khoảnh Khắc Hạnh Phúc #560",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 561,
    "name": "Mùa Hơi Thở Vĩnh Cửu #561",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 562,
    "name": "Mùa Hương Sắc Thuần Khiết #562",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 563,
    "name": "Mùa Bến Đỗ Ngọt Ngào #563",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 564,
    "name": "Mùa Ánh Mắt Ấm Áp #564",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 565,
    "name": "Mùa Khúc Ca Bình Yên #565",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 566,
    "name": "Mùa Bàn Tay Mộng Mơ #566",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 567,
    "name": "Mùa Bầu Trời Viên Mãn #567",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 568,
    "name": "Mùa Khoảnh Khắc Trang Nhã #568",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 569,
    "name": "Mùa Hơi Thở Thơ Mộng #569",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 570,
    "name": "Mùa Hương Sắc Rực Rỡ #570",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 571,
    "name": "Mùa Bến Đỗ Tinh Khôi #571",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 572,
    "name": "Mùa Ánh Mắt Nồng Nàn #572",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 573,
    "name": "Mùa Khúc Ca Gắn Kết #573",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 574,
    "name": "Mùa Bàn Tay Hòa Ca #574",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 575,
    "name": "Mùa Bầu Trời Hạnh Phúc #575",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 576,
    "name": "Mùa Khoảnh Khắc Vĩnh Cửu #576",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 577,
    "name": "Mùa Hơi Thở Thuần Khiết #577",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 578,
    "name": "Mùa Hương Sắc Ngọt Ngào #578",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 579,
    "name": "Mùa Bến Đỗ Ấm Áp #579",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 580,
    "name": "Mùa Ánh Mắt Bình Yên #580",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 581,
    "name": "Mùa Khúc Ca Mộng Mơ #581",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 582,
    "name": "Mùa Bàn Tay Viên Mãn #582",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 583,
    "name": "Mùa Bầu Trời Trang Nhã #583",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 584,
    "name": "Mùa Khoảnh Khắc Thơ Mộng #584",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 585,
    "name": "Mùa Hơi Thở Rực Rỡ #585",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 586,
    "name": "Mùa Hương Sắc Tinh Khôi #586",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 587,
    "name": "Mùa Bến Đỗ Nồng Nàn #587",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 588,
    "name": "Mùa Ánh Mắt Gắn Kết #588",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 589,
    "name": "Mùa Khúc Ca Hòa Ca #589",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 590,
    "name": "Mùa Bàn Tay Hạnh Phúc #590",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 591,
    "name": "Mùa Bầu Trời Vĩnh Cửu #591",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 592,
    "name": "Mùa Khoảnh Khắc Thuần Khiết #592",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 593,
    "name": "Mùa Hơi Thở Ngọt Ngào #593",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 594,
    "name": "Mùa Hương Sắc Ấm Áp #594",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 595,
    "name": "Mùa Bến Đỗ Bình Yên #595",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 596,
    "name": "Mùa Ánh Mắt Mộng Mơ #596",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 597,
    "name": "Mùa Khúc Ca Viên Mãn #597",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 598,
    "name": "Mùa Bàn Tay Trang Nhã #598",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 599,
    "name": "Mùa Bầu Trời Thơ Mộng #599",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#C2410C",
      "secondary": "#EA580C",
      "accent": "#9A3412",
      "text": "#431407",
      "bg": "from-amber-50 via-orange-50 to-stone-100",
      "cardBg": "#FFFDF9",
      "envelopeWax": "#C2410C",
      "petals": [
        "#F97316",
        "#FBBF24",
        "#EA580C"
      ],
      "isDark": false
    }
  },
  {
    "id": 600,
    "name": "Mùa Khoảnh Khắc Rực Rỡ #600",
    "category": "autumn",
    "categoryName": "Mùa Thu Vàng & Lá Phong Trầm Ấm",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách mùa thu vàng & lá phong trầm ấm với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#B45309",
      "secondary": "#D97706",
      "accent": "#78350F",
      "text": "#291605",
      "bg": "from-orange-50 via-stone-100 to-amber-100",
      "cardBg": "#FAF6F0",
      "envelopeWax": "#B45309",
      "petals": [
        "#F59E0B",
        "#D97706",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 601,
    "name": "Mùa Nguyện Ước Vĩnh Cửu #601",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 602,
    "name": "Mùa Vũ Điệu Thuần Khiết #602",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 603,
    "name": "Mùa Cung Đàn Ngọt Ngào #603",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 604,
    "name": "Mùa Giấc Mơ Ấm Áp #604",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 605,
    "name": "Mùa Nụ Cười Bình Yên #605",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 606,
    "name": "Mùa Tổ Ấm Mộng Mơ #606",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 607,
    "name": "Mùa Trái Tim Viên Mãn #607",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 608,
    "name": "Mùa Lời Thề Trang Nhã #608",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 609,
    "name": "Mùa Nguyện Ước Thơ Mộng #609",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 610,
    "name": "Mùa Vũ Điệu Rực Rỡ #610",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 611,
    "name": "Mùa Cung Đàn Tinh Khôi #611",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 612,
    "name": "Mùa Giấc Mơ Nồng Nàn #612",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 613,
    "name": "Mùa Nụ Cười Gắn Kết #613",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 614,
    "name": "Mùa Tổ Ấm Hòa Ca #614",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 615,
    "name": "Mùa Trái Tim Hạnh Phúc #615",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 616,
    "name": "Mùa Lời Thề Vĩnh Cửu #616",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 617,
    "name": "Mùa Nguyện Ước Thuần Khiết #617",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 618,
    "name": "Mùa Vũ Điệu Ngọt Ngào #618",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 619,
    "name": "Mùa Cung Đàn Ấm Áp #619",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 620,
    "name": "Mùa Giấc Mơ Bình Yên #620",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 621,
    "name": "Mùa Nụ Cười Mộng Mơ #621",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 622,
    "name": "Mùa Tổ Ấm Viên Mãn #622",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 623,
    "name": "Mùa Trái Tim Trang Nhã #623",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 624,
    "name": "Mùa Lời Thề Thơ Mộng #624",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 625,
    "name": "Mùa Nguyện Ước Rực Rỡ #625",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 626,
    "name": "Mùa Vũ Điệu Tinh Khôi #626",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 627,
    "name": "Mùa Cung Đàn Nồng Nàn #627",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 628,
    "name": "Mùa Giấc Mơ Gắn Kết #628",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 629,
    "name": "Mùa Nụ Cười Hòa Ca #629",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 630,
    "name": "Mùa Tổ Ấm Hạnh Phúc #630",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 631,
    "name": "Mùa Trái Tim Vĩnh Cửu #631",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 632,
    "name": "Mùa Lời Thề Thuần Khiết #632",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 633,
    "name": "Mùa Nguyện Ước Ngọt Ngào #633",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 634,
    "name": "Mùa Vũ Điệu Ấm Áp #634",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 635,
    "name": "Mùa Cung Đàn Bình Yên #635",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 636,
    "name": "Mùa Giấc Mơ Mộng Mơ #636",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 637,
    "name": "Mùa Nụ Cười Viên Mãn #637",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 638,
    "name": "Mùa Tổ Ấm Trang Nhã #638",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 639,
    "name": "Mùa Trái Tim Thơ Mộng #639",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 640,
    "name": "Mùa Lời Thề Rực Rỡ #640",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 641,
    "name": "Mùa Nguyện Ước Tinh Khôi #641",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 642,
    "name": "Mùa Vũ Điệu Nồng Nàn #642",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 643,
    "name": "Mùa Cung Đàn Gắn Kết #643",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 644,
    "name": "Mùa Giấc Mơ Hòa Ca #644",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 645,
    "name": "Mùa Nụ Cười Hạnh Phúc #645",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 646,
    "name": "Mùa Tổ Ấm Vĩnh Cửu #646",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 647,
    "name": "Mùa Trái Tim Thuần Khiết #647",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 648,
    "name": "Mùa Lời Thề Ngọt Ngào #648",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 649,
    "name": "Mùa Nguyện Ước Ấm Áp #649",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0284C7",
      "secondary": "#94A3B8",
      "accent": "#0369A1",
      "text": "#0C4A6E",
      "bg": "from-slate-100 via-sky-50 to-blue-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#0284C7",
      "petals": [
        "#BAE6FD",
        "#E2E8F0",
        "#F1F5F9"
      ],
      "isDark": false
    }
  },
  {
    "id": 650,
    "name": "Mùa Vũ Điệu Bình Yên #650",
    "category": "winter",
    "categoryName": "Mùa Đông Trắng & Bông Tuyết Lạnh",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách mùa đông trắng & bông tuyết lạnh với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#334155",
      "secondary": "#64748B",
      "accent": "#1E293B",
      "text": "#0F172A",
      "bg": "from-slate-50 via-stone-100 to-zinc-200",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#334155",
      "petals": [
        "#CBD5E1",
        "#E2E8F0",
        "#FFFFFF"
      ],
      "isDark": false
    }
  },
  {
    "id": 651,
    "name": "Cổ Ánh Dương Tinh Khôi #651",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 652,
    "name": "Cổ Dòng Chảy Nồng Nàn #652",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 653,
    "name": "Cổ Hành Trình Gắn Kết #653",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 654,
    "name": "Cổ Nhịp Đập Hòa Ca #654",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 655,
    "name": "Cổ Hôn Lễ Hạnh Phúc #655",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 656,
    "name": "Cổ Vầng Trăng Vĩnh Cửu #656",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 657,
    "name": "Cổ Giai Điệu Thuần Khiết #657",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 658,
    "name": "Cổ Bản Tình Ca Ngọt Ngào #658",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 659,
    "name": "Cổ Ánh Dương Ấm Áp #659",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 660,
    "name": "Cổ Dòng Chảy Bình Yên #660",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 661,
    "name": "Cổ Hành Trình Mộng Mơ #661",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 662,
    "name": "Cổ Nhịp Đập Viên Mãn #662",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 663,
    "name": "Cổ Hôn Lễ Trang Nhã #663",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 664,
    "name": "Cổ Vầng Trăng Thơ Mộng #664",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 665,
    "name": "Cổ Giai Điệu Rực Rỡ #665",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 666,
    "name": "Cổ Bản Tình Ca Tinh Khôi #666",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 667,
    "name": "Cổ Ánh Dương Nồng Nàn #667",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 668,
    "name": "Cổ Dòng Chảy Gắn Kết #668",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 669,
    "name": "Cổ Hành Trình Hòa Ca #669",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 670,
    "name": "Cổ Nhịp Đập Hạnh Phúc #670",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 671,
    "name": "Cổ Hôn Lễ Vĩnh Cửu #671",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 672,
    "name": "Cổ Vầng Trăng Thuần Khiết #672",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 673,
    "name": "Cổ Giai Điệu Ngọt Ngào #673",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 674,
    "name": "Cổ Bản Tình Ca Ấm Áp #674",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 675,
    "name": "Cổ Ánh Dương Bình Yên #675",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 676,
    "name": "Cổ Dòng Chảy Mộng Mơ #676",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 677,
    "name": "Cổ Hành Trình Viên Mãn #677",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 678,
    "name": "Cổ Nhịp Đập Trang Nhã #678",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 679,
    "name": "Cổ Hôn Lễ Thơ Mộng #679",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 680,
    "name": "Cổ Vầng Trăng Rực Rỡ #680",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 681,
    "name": "Cổ Giai Điệu Tinh Khôi #681",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 682,
    "name": "Cổ Bản Tình Ca Nồng Nàn #682",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 683,
    "name": "Cổ Ánh Dương Gắn Kết #683",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 684,
    "name": "Cổ Dòng Chảy Hòa Ca #684",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 685,
    "name": "Cổ Hành Trình Hạnh Phúc #685",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 686,
    "name": "Cổ Nhịp Đập Vĩnh Cửu #686",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 687,
    "name": "Cổ Hôn Lễ Thuần Khiết #687",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 688,
    "name": "Cổ Vầng Trăng Ngọt Ngào #688",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 689,
    "name": "Cổ Giai Điệu Ấm Áp #689",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 690,
    "name": "Cổ Bản Tình Ca Bình Yên #690",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 691,
    "name": "Cổ Ánh Dương Mộng Mơ #691",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 692,
    "name": "Cổ Dòng Chảy Viên Mãn #692",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 693,
    "name": "Cổ Hành Trình Trang Nhã #693",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 694,
    "name": "Cổ Nhịp Đập Thơ Mộng #694",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 695,
    "name": "Cổ Hôn Lễ Rực Rỡ #695",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 696,
    "name": "Cổ Vầng Trăng Tinh Khôi #696",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 697,
    "name": "Cổ Giai Điệu Nồng Nàn #697",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 698,
    "name": "Cổ Bản Tình Ca Gắn Kết #698",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 699,
    "name": "Cổ Ánh Dương Hòa Ca #699",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C2D12",
      "secondary": "#9A3412",
      "accent": "#431407",
      "text": "#271206",
      "bg": "from-amber-50 via-stone-100 to-orange-100",
      "cardBg": "#FAF5ED",
      "envelopeWax": "#7C2D12",
      "petals": [
        "#EA580C",
        "#D97706",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 700,
    "name": "Cổ Dòng Chảy Hạnh Phúc #700",
    "category": "vintage_era",
    "categoryName": "Cổ Điển Retro 1920-1970s",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách cổ điển retro 1920-1970s với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#78716C",
      "accent": "#44403C",
      "text": "#1C1917",
      "bg": "from-stone-100 via-stone-50 to-amber-50/30",
      "cardBg": "#FAF8F5",
      "envelopeWax": "#57534E",
      "petals": [
        "#A8A29E",
        "#D6D3D1",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 701,
    "name": "Nghệ Bến Đỗ Mộng Mơ #701",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 702,
    "name": "Nghệ Ánh Mắt Viên Mãn #702",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 703,
    "name": "Nghệ Khúc Ca Trang Nhã #703",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 704,
    "name": "Nghệ Bàn Tay Thơ Mộng #704",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 705,
    "name": "Nghệ Bầu Trời Rực Rỡ #705",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 706,
    "name": "Nghệ Khoảnh Khắc Tinh Khôi #706",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 707,
    "name": "Nghệ Hơi Thở Nồng Nàn #707",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 708,
    "name": "Nghệ Hương Sắc Gắn Kết #708",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 709,
    "name": "Nghệ Bến Đỗ Hòa Ca #709",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 710,
    "name": "Nghệ Ánh Mắt Hạnh Phúc #710",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 711,
    "name": "Nghệ Khúc Ca Vĩnh Cửu #711",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 712,
    "name": "Nghệ Bàn Tay Thuần Khiết #712",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 713,
    "name": "Nghệ Bầu Trời Ngọt Ngào #713",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 714,
    "name": "Nghệ Khoảnh Khắc Ấm Áp #714",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 715,
    "name": "Nghệ Hơi Thở Bình Yên #715",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 716,
    "name": "Nghệ Hương Sắc Mộng Mơ #716",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 717,
    "name": "Nghệ Bến Đỗ Viên Mãn #717",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 718,
    "name": "Nghệ Ánh Mắt Trang Nhã #718",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 719,
    "name": "Nghệ Khúc Ca Thơ Mộng #719",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 720,
    "name": "Nghệ Bàn Tay Rực Rỡ #720",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 721,
    "name": "Nghệ Bầu Trời Tinh Khôi #721",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 722,
    "name": "Nghệ Khoảnh Khắc Nồng Nàn #722",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 723,
    "name": "Nghệ Hơi Thở Gắn Kết #723",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 724,
    "name": "Nghệ Hương Sắc Hòa Ca #724",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 725,
    "name": "Nghệ Bến Đỗ Hạnh Phúc #725",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 726,
    "name": "Nghệ Ánh Mắt Vĩnh Cửu #726",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 727,
    "name": "Nghệ Khúc Ca Thuần Khiết #727",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 728,
    "name": "Nghệ Bàn Tay Ngọt Ngào #728",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 729,
    "name": "Nghệ Bầu Trời Ấm Áp #729",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 730,
    "name": "Nghệ Khoảnh Khắc Bình Yên #730",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 731,
    "name": "Nghệ Hơi Thở Mộng Mơ #731",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 732,
    "name": "Nghệ Hương Sắc Viên Mãn #732",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 733,
    "name": "Nghệ Bến Đỗ Trang Nhã #733",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 734,
    "name": "Nghệ Ánh Mắt Thơ Mộng #734",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 735,
    "name": "Nghệ Khúc Ca Rực Rỡ #735",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 736,
    "name": "Nghệ Bàn Tay Tinh Khôi #736",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 737,
    "name": "Nghệ Bầu Trời Nồng Nàn #737",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 738,
    "name": "Nghệ Khoảnh Khắc Gắn Kết #738",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 739,
    "name": "Nghệ Hơi Thở Hòa Ca #739",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 740,
    "name": "Nghệ Hương Sắc Hạnh Phúc #740",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 741,
    "name": "Nghệ Bến Đỗ Vĩnh Cửu #741",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 742,
    "name": "Nghệ Ánh Mắt Thuần Khiết #742",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 743,
    "name": "Nghệ Khúc Ca Ngọt Ngào #743",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 744,
    "name": "Nghệ Bàn Tay Ấm Áp #744",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 745,
    "name": "Nghệ Bầu Trời Bình Yên #745",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 746,
    "name": "Nghệ Khoảnh Khắc Mộng Mơ #746",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 747,
    "name": "Nghệ Hơi Thở Viên Mãn #747",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 748,
    "name": "Nghệ Hương Sắc Trang Nhã #748",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 749,
    "name": "Nghệ Bến Đỗ Thơ Mộng #749",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#BE123C",
      "secondary": "#F59E0B",
      "accent": "#9F1239",
      "text": "#4C0519",
      "bg": "from-stone-900 via-red-950 to-amber-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#BE123C",
      "petals": [
        "#FDA4AF",
        "#FCD34D",
        "#F59E0B"
      ],
      "isDark": true
    }
  },
  {
    "id": 750,
    "name": "Nghệ Ánh Mắt Rực Rỡ #750",
    "category": "broadway",
    "categoryName": "Nghệ Thuật Sân Khấu & Broadway Glam",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách nghệ thuật sân khấu & broadway glam với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#D97706",
      "secondary": "#E11D48",
      "accent": "#B45309",
      "text": "#451A03",
      "bg": "from-amber-50 via-rose-50 to-stone-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#D97706",
      "petals": [
        "#FBBF24",
        "#FB7185",
        "#FDE68A"
      ],
      "isDark": false
    }
  },
  {
    "id": 751,
    "name": "Thiền Nụ Cười Vĩnh Cửu #751",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 752,
    "name": "Thiền Tổ Ấm Thuần Khiết #752",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 753,
    "name": "Thiền Trái Tim Ngọt Ngào #753",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 754,
    "name": "Thiền Lời Thề Ấm Áp #754",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 755,
    "name": "Thiền Nguyện Ước Bình Yên #755",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 756,
    "name": "Thiền Vũ Điệu Mộng Mơ #756",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 757,
    "name": "Thiền Cung Đàn Viên Mãn #757",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 758,
    "name": "Thiền Giấc Mơ Trang Nhã #758",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 759,
    "name": "Thiền Nụ Cười Thơ Mộng #759",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 760,
    "name": "Thiền Tổ Ấm Rực Rỡ #760",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 761,
    "name": "Thiền Trái Tim Tinh Khôi #761",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 762,
    "name": "Thiền Lời Thề Nồng Nàn #762",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 763,
    "name": "Thiền Nguyện Ước Gắn Kết #763",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 764,
    "name": "Thiền Vũ Điệu Hòa Ca #764",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 765,
    "name": "Thiền Cung Đàn Hạnh Phúc #765",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 766,
    "name": "Thiền Giấc Mơ Vĩnh Cửu #766",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 767,
    "name": "Thiền Nụ Cười Thuần Khiết #767",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 768,
    "name": "Thiền Tổ Ấm Ngọt Ngào #768",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 769,
    "name": "Thiền Trái Tim Ấm Áp #769",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 770,
    "name": "Thiền Lời Thề Bình Yên #770",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 771,
    "name": "Thiền Nguyện Ước Mộng Mơ #771",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 772,
    "name": "Thiền Vũ Điệu Viên Mãn #772",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 773,
    "name": "Thiền Cung Đàn Trang Nhã #773",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 774,
    "name": "Thiền Giấc Mơ Thơ Mộng #774",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 775,
    "name": "Thiền Nụ Cười Rực Rỡ #775",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 776,
    "name": "Thiền Tổ Ấm Tinh Khôi #776",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 777,
    "name": "Thiền Trái Tim Nồng Nàn #777",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 778,
    "name": "Thiền Lời Thề Gắn Kết #778",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 779,
    "name": "Thiền Nguyện Ước Hòa Ca #779",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 780,
    "name": "Thiền Vũ Điệu Hạnh Phúc #780",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 781,
    "name": "Thiền Cung Đàn Vĩnh Cửu #781",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 782,
    "name": "Thiền Giấc Mơ Thuần Khiết #782",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 783,
    "name": "Thiền Nụ Cười Ngọt Ngào #783",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 784,
    "name": "Thiền Tổ Ấm Ấm Áp #784",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 785,
    "name": "Thiền Trái Tim Bình Yên #785",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 786,
    "name": "Thiền Lời Thề Mộng Mơ #786",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 787,
    "name": "Thiền Nguyện Ước Viên Mãn #787",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 788,
    "name": "Thiền Vũ Điệu Trang Nhã #788",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 789,
    "name": "Thiền Cung Đàn Thơ Mộng #789",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 790,
    "name": "Thiền Giấc Mơ Rực Rỡ #790",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 791,
    "name": "Thiền Nụ Cười Tinh Khôi #791",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 792,
    "name": "Thiền Tổ Ấm Nồng Nàn #792",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 793,
    "name": "Thiền Trái Tim Gắn Kết #793",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 794,
    "name": "Thiền Lời Thề Hòa Ca #794",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 795,
    "name": "Thiền Nguyện Ước Hạnh Phúc #795",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 796,
    "name": "Thiền Vũ Điệu Vĩnh Cửu #796",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 797,
    "name": "Thiền Cung Đàn Thuần Khiết #797",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 798,
    "name": "Thiền Giấc Mơ Ngọt Ngào #798",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 799,
    "name": "Thiền Nụ Cười Ấm Áp #799",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#3F6212",
      "secondary": "#65A30D",
      "accent": "#4D7C0F",
      "text": "#1A2E05",
      "bg": "from-stone-100 via-lime-50/40 to-stone-200",
      "cardBg": "#FAF9F6",
      "envelopeWax": "#3F6212",
      "petals": [
        "#BEF264",
        "#D6D3D1",
        "#E2E8F0"
      ],
      "isDark": false
    }
  },
  {
    "id": 800,
    "name": "Thiền Tổ Ấm Bình Yên #800",
    "category": "zen",
    "categoryName": "Thiền Định, Wabi-Sabi & Zen Garden",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách thiền định, wabi-sabi & zen garden với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#57534E",
      "secondary": "#847A73",
      "accent": "#44403C",
      "text": "#292524",
      "bg": "from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]",
      "cardBg": "#FCFBF9",
      "envelopeWax": "#57534E",
      "petals": [
        "#D6D3D1",
        "#C7BEB5",
        "#F5F5F4"
      ],
      "isDark": false
    }
  },
  {
    "id": 801,
    "name": "Pha Hôn Lễ Tinh Khôi #801",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 802,
    "name": "Pha Vầng Trăng Nồng Nàn #802",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 803,
    "name": "Pha Giai Điệu Gắn Kết #803",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 804,
    "name": "Pha Bản Tình Ca Hòa Ca #804",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 805,
    "name": "Pha Ánh Dương Hạnh Phúc #805",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 806,
    "name": "Pha Dòng Chảy Vĩnh Cửu #806",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 807,
    "name": "Pha Hành Trình Thuần Khiết #807",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 808,
    "name": "Pha Nhịp Đập Ngọt Ngào #808",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 809,
    "name": "Pha Hôn Lễ Ấm Áp #809",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 810,
    "name": "Pha Vầng Trăng Bình Yên #810",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 811,
    "name": "Pha Giai Điệu Mộng Mơ #811",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 812,
    "name": "Pha Bản Tình Ca Viên Mãn #812",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 813,
    "name": "Pha Ánh Dương Trang Nhã #813",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 814,
    "name": "Pha Dòng Chảy Thơ Mộng #814",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 815,
    "name": "Pha Hành Trình Rực Rỡ #815",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 816,
    "name": "Pha Nhịp Đập Tinh Khôi #816",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 817,
    "name": "Pha Hôn Lễ Nồng Nàn #817",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 818,
    "name": "Pha Vầng Trăng Gắn Kết #818",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 819,
    "name": "Pha Giai Điệu Hòa Ca #819",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 820,
    "name": "Pha Bản Tình Ca Hạnh Phúc #820",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 821,
    "name": "Pha Ánh Dương Vĩnh Cửu #821",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 822,
    "name": "Pha Dòng Chảy Thuần Khiết #822",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 823,
    "name": "Pha Hành Trình Ngọt Ngào #823",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 824,
    "name": "Pha Nhịp Đập Ấm Áp #824",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 825,
    "name": "Pha Hôn Lễ Bình Yên #825",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 826,
    "name": "Pha Vầng Trăng Mộng Mơ #826",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 827,
    "name": "Pha Giai Điệu Viên Mãn #827",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 828,
    "name": "Pha Bản Tình Ca Trang Nhã #828",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 829,
    "name": "Pha Ánh Dương Thơ Mộng #829",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 830,
    "name": "Pha Dòng Chảy Rực Rỡ #830",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 831,
    "name": "Pha Hành Trình Tinh Khôi #831",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 832,
    "name": "Pha Nhịp Đập Nồng Nàn #832",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 833,
    "name": "Pha Hôn Lễ Gắn Kết #833",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 834,
    "name": "Pha Vầng Trăng Hòa Ca #834",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 835,
    "name": "Pha Giai Điệu Hạnh Phúc #835",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 836,
    "name": "Pha Bản Tình Ca Vĩnh Cửu #836",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 837,
    "name": "Pha Ánh Dương Thuần Khiết #837",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 838,
    "name": "Pha Dòng Chảy Ngọt Ngào #838",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 839,
    "name": "Pha Hành Trình Ấm Áp #839",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 840,
    "name": "Pha Nhịp Đập Bình Yên #840",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 841,
    "name": "Pha Hôn Lễ Mộng Mơ #841",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 842,
    "name": "Pha Vầng Trăng Viên Mãn #842",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 843,
    "name": "Pha Giai Điệu Trang Nhã #843",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 844,
    "name": "Pha Bản Tình Ca Thơ Mộng #844",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 845,
    "name": "Pha Ánh Dương Rực Rỡ #845",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 846,
    "name": "Pha Dòng Chảy Tinh Khôi #846",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 847,
    "name": "Pha Hành Trình Nồng Nàn #847",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 848,
    "name": "Pha Nhịp Đập Gắn Kết #848",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 849,
    "name": "Pha Hôn Lễ Hòa Ca #849",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#2563EB",
      "secondary": "#60A5FA",
      "accent": "#1D4ED8",
      "text": "#0F172A",
      "bg": "from-slate-100 via-sky-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#2563EB",
      "petals": [
        "#93C5FD",
        "#BAE6FD",
        "#C7D2FE"
      ],
      "isDark": false
    }
  },
  {
    "id": 850,
    "name": "Pha Vầng Trăng Hạnh Phúc #850",
    "category": "glassmorphism",
    "categoryName": "Pha Lê, Thủy Tinh & Glassmorphism",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách pha lê, thủy tinh & glassmorphism với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#7C3AED",
      "secondary": "#A78BFA",
      "accent": "#6D28D9",
      "text": "#1E1B4B",
      "bg": "from-purple-100 via-pink-100 to-indigo-100",
      "cardBg": "rgba(255, 255, 255, 0.85)",
      "envelopeWax": "#7C3AED",
      "petals": [
        "#C4B5FD",
        "#F472B6",
        "#E0E7FF"
      ],
      "isDark": false
    }
  },
  {
    "id": 851,
    "name": "Tiệc Bầu Trời Mộng Mơ #851",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 852,
    "name": "Tiệc Khoảnh Khắc Viên Mãn #852",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 853,
    "name": "Tiệc Hơi Thở Trang Nhã #853",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 854,
    "name": "Tiệc Hương Sắc Thơ Mộng #854",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 855,
    "name": "Tiệc Bến Đỗ Rực Rỡ #855",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 856,
    "name": "Tiệc Ánh Mắt Tinh Khôi #856",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 857,
    "name": "Tiệc Khúc Ca Nồng Nàn #857",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 858,
    "name": "Tiệc Bàn Tay Gắn Kết #858",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 859,
    "name": "Tiệc Bầu Trời Hòa Ca #859",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 860,
    "name": "Tiệc Khoảnh Khắc Hạnh Phúc #860",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 861,
    "name": "Tiệc Hơi Thở Vĩnh Cửu #861",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 862,
    "name": "Tiệc Hương Sắc Thuần Khiết #862",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 863,
    "name": "Tiệc Bến Đỗ Ngọt Ngào #863",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 864,
    "name": "Tiệc Ánh Mắt Ấm Áp #864",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 865,
    "name": "Tiệc Khúc Ca Bình Yên #865",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 866,
    "name": "Tiệc Bàn Tay Mộng Mơ #866",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 867,
    "name": "Tiệc Bầu Trời Viên Mãn #867",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 868,
    "name": "Tiệc Khoảnh Khắc Trang Nhã #868",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 869,
    "name": "Tiệc Hơi Thở Thơ Mộng #869",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 870,
    "name": "Tiệc Hương Sắc Rực Rỡ #870",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 871,
    "name": "Tiệc Bến Đỗ Tinh Khôi #871",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 872,
    "name": "Tiệc Ánh Mắt Nồng Nàn #872",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 873,
    "name": "Tiệc Khúc Ca Gắn Kết #873",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 874,
    "name": "Tiệc Bàn Tay Hòa Ca #874",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 875,
    "name": "Tiệc Bầu Trời Hạnh Phúc #875",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 876,
    "name": "Tiệc Khoảnh Khắc Vĩnh Cửu #876",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 877,
    "name": "Tiệc Hơi Thở Thuần Khiết #877",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 878,
    "name": "Tiệc Hương Sắc Ngọt Ngào #878",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 879,
    "name": "Tiệc Bến Đỗ Ấm Áp #879",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 880,
    "name": "Tiệc Ánh Mắt Bình Yên #880",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 881,
    "name": "Tiệc Khúc Ca Mộng Mơ #881",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 882,
    "name": "Tiệc Bàn Tay Viên Mãn #882",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 883,
    "name": "Tiệc Bầu Trời Trang Nhã #883",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 884,
    "name": "Tiệc Khoảnh Khắc Thơ Mộng #884",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 885,
    "name": "Tiệc Hơi Thở Rực Rỡ #885",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 886,
    "name": "Tiệc Hương Sắc Tinh Khôi #886",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 887,
    "name": "Tiệc Bến Đỗ Nồng Nàn #887",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 888,
    "name": "Tiệc Ánh Mắt Gắn Kết #888",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 889,
    "name": "Tiệc Khúc Ca Hòa Ca #889",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 890,
    "name": "Tiệc Bàn Tay Hạnh Phúc #890",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 891,
    "name": "Tiệc Bầu Trời Vĩnh Cửu #891",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 892,
    "name": "Tiệc Khoảnh Khắc Thuần Khiết #892",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 893,
    "name": "Tiệc Hơi Thở Ngọt Ngào #893",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 894,
    "name": "Tiệc Hương Sắc Ấm Áp #894",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 895,
    "name": "Tiệc Bến Đỗ Bình Yên #895",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 896,
    "name": "Tiệc Ánh Mắt Mộng Mơ #896",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 897,
    "name": "Tiệc Khúc Ca Viên Mãn #897",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 898,
    "name": "Tiệc Bàn Tay Trang Nhã #898",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 899,
    "name": "Tiệc Bầu Trời Thơ Mộng #899",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#4C0519",
      "secondary": "#E11D48",
      "accent": "#881337",
      "text": "#FFF1F2",
      "bg": "from-zinc-950 via-rose-950 to-stone-950",
      "cardBg": "#1A090D",
      "envelopeWax": "#E11D48",
      "petals": [
        "#BE123C",
        "#FB7185",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 900,
    "name": "Tiệc Khoảnh Khắc Rực Rỡ #900",
    "category": "wine_gala",
    "categoryName": "Tiệc Rượu Vang & Đêm Dạ Vũ Gala",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách tiệc rượu vang & đêm dạ vũ gala với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#831843",
      "secondary": "#D97706",
      "accent": "#700B33",
      "text": "#FFF1F2",
      "bg": "from-stone-950 via-pink-950 to-rose-950",
      "cardBg": "#1C1417",
      "envelopeWax": "#D97706",
      "petals": [
        "#FB7185",
        "#FCD34D",
        "#FDA4AF"
      ],
      "isDark": true
    }
  },
  {
    "id": 901,
    "name": "Cao Nguyện Ước Vĩnh Cửu #901",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 902,
    "name": "Cao Vũ Điệu Thuần Khiết #902",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 903,
    "name": "Cao Cung Đàn Ngọt Ngào #903",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 904,
    "name": "Cao Giấc Mơ Ấm Áp #904",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 905,
    "name": "Cao Nụ Cười Bình Yên #905",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 906,
    "name": "Cao Tổ Ấm Mộng Mơ #906",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 907,
    "name": "Cao Trái Tim Viên Mãn #907",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 908,
    "name": "Cao Lời Thề Trang Nhã #908",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 909,
    "name": "Cao Nguyện Ước Thơ Mộng #909",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 910,
    "name": "Cao Vũ Điệu Rực Rỡ #910",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 911,
    "name": "Cao Cung Đàn Tinh Khôi #911",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 912,
    "name": "Cao Giấc Mơ Nồng Nàn #912",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 913,
    "name": "Cao Nụ Cười Gắn Kết #913",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 914,
    "name": "Cao Tổ Ấm Hòa Ca #914",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 915,
    "name": "Cao Trái Tim Hạnh Phúc #915",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 916,
    "name": "Cao Lời Thề Vĩnh Cửu #916",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 917,
    "name": "Cao Nguyện Ước Thuần Khiết #917",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 918,
    "name": "Cao Vũ Điệu Ngọt Ngào #918",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 919,
    "name": "Cao Cung Đàn Ấm Áp #919",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 920,
    "name": "Cao Giấc Mơ Bình Yên #920",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 921,
    "name": "Cao Nụ Cười Mộng Mơ #921",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 922,
    "name": "Cao Tổ Ấm Viên Mãn #922",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 923,
    "name": "Cao Trái Tim Trang Nhã #923",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 924,
    "name": "Cao Lời Thề Thơ Mộng #924",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 925,
    "name": "Cao Nguyện Ước Rực Rỡ #925",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 926,
    "name": "Cao Vũ Điệu Tinh Khôi #926",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 927,
    "name": "Cao Cung Đàn Nồng Nàn #927",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 928,
    "name": "Cao Giấc Mơ Gắn Kết #928",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 929,
    "name": "Cao Nụ Cười Hòa Ca #929",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 930,
    "name": "Cao Tổ Ấm Hạnh Phúc #930",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 931,
    "name": "Cao Trái Tim Vĩnh Cửu #931",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 932,
    "name": "Cao Lời Thề Thuần Khiết #932",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 933,
    "name": "Cao Nguyện Ước Ngọt Ngào #933",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 934,
    "name": "Cao Vũ Điệu Ấm Áp #934",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 935,
    "name": "Cao Cung Đàn Bình Yên #935",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 936,
    "name": "Cao Giấc Mơ Mộng Mơ #936",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 937,
    "name": "Cao Nụ Cười Viên Mãn #937",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 938,
    "name": "Cao Tổ Ấm Trang Nhã #938",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 939,
    "name": "Cao Trái Tim Thơ Mộng #939",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 940,
    "name": "Cao Lời Thề Rực Rỡ #940",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 941,
    "name": "Cao Nguyện Ước Tinh Khôi #941",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 942,
    "name": "Cao Vũ Điệu Nồng Nàn #942",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 943,
    "name": "Cao Cung Đàn Gắn Kết #943",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 944,
    "name": "Cao Giấc Mơ Hòa Ca #944",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 945,
    "name": "Cao Nụ Cười Hạnh Phúc #945",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 946,
    "name": "Cao Tổ Ấm Vĩnh Cửu #946",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 947,
    "name": "Cao Trái Tim Thuần Khiết #947",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 948,
    "name": "Cao Lời Thề Ngọt Ngào #948",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 949,
    "name": "Cao Nguyện Ước Ấm Áp #949",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#166534",
      "secondary": "#15803D",
      "accent": "#14532D",
      "text": "#052E16",
      "bg": "from-emerald-50 via-stone-100 to-green-100",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#166534",
      "petals": [
        "#86EFAC",
        "#BBF7D0",
        "#D1FAE5"
      ],
      "isDark": false
    }
  },
  {
    "id": 950,
    "name": "Cao Vũ Điệu Bình Yên #950",
    "category": "highland",
    "categoryName": "Cao Nguyên, Rừng Thông & Đồi Chè",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách cao nguyên, rừng thông & đồi chè với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#854D0E",
      "secondary": "#15803D",
      "accent": "#713F12",
      "text": "#3B2206",
      "bg": "from-amber-50 via-stone-100 to-emerald-50",
      "cardBg": "#FFFFFF",
      "envelopeWax": "#854D0E",
      "petals": [
        "#FDE047",
        "#86EFAC",
        "#FED7AA"
      ],
      "isDark": false
    }
  },
  {
    "id": 951,
    "name": "Điện Ánh Dương Tinh Khôi #951",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 952,
    "name": "Điện Dòng Chảy Nồng Nàn #952",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 953,
    "name": "Điện Hành Trình Gắn Kết #953",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 954,
    "name": "Điện Nhịp Đập Hòa Ca #954",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 955,
    "name": "Điện Hôn Lễ Hạnh Phúc #955",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 956,
    "name": "Điện Vầng Trăng Vĩnh Cửu #956",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 957,
    "name": "Điện Giai Điệu Thuần Khiết #957",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 958,
    "name": "Điện Bản Tình Ca Ngọt Ngào #958",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 959,
    "name": "Điện Ánh Dương Ấm Áp #959",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 960,
    "name": "Điện Dòng Chảy Bình Yên #960",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 961,
    "name": "Điện Hành Trình Mộng Mơ #961",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 962,
    "name": "Điện Nhịp Đập Viên Mãn #962",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 963,
    "name": "Điện Hôn Lễ Trang Nhã #963",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 964,
    "name": "Điện Vầng Trăng Thơ Mộng #964",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 965,
    "name": "Điện Giai Điệu Rực Rỡ #965",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 966,
    "name": "Điện Bản Tình Ca Tinh Khôi #966",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 967,
    "name": "Điện Ánh Dương Nồng Nàn #967",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 968,
    "name": "Điện Dòng Chảy Gắn Kết #968",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 969,
    "name": "Điện Hành Trình Hòa Ca #969",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 970,
    "name": "Điện Nhịp Đập Hạnh Phúc #970",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 971,
    "name": "Điện Hôn Lễ Vĩnh Cửu #971",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "fireflies",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 972,
    "name": "Điện Vầng Trăng Thuần Khiết #972",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "confetti",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 973,
    "name": "Điện Giai Điệu Ngọt Ngào #973",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "petals",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 974,
    "name": "Điện Bản Tình Ca Ấm Áp #974",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "hearts",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 975,
    "name": "Điện Ánh Dương Bình Yên #975",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 976,
    "name": "Điện Dòng Chảy Mộng Mơ #976",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 977,
    "name": "Điện Hành Trình Viên Mãn #977",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "fireflies",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 978,
    "name": "Điện Nhịp Đập Trang Nhã #978",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "confetti",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 979,
    "name": "Điện Hôn Lễ Thơ Mộng #979",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "petals",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 980,
    "name": "Điện Vầng Trăng Rực Rỡ #980",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "hearts",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 981,
    "name": "Điện Giai Điệu Tinh Khôi #981",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 982,
    "name": "Điện Bản Tình Ca Nồng Nàn #982",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 983,
    "name": "Điện Ánh Dương Gắn Kết #983",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "fireflies",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 984,
    "name": "Điện Dòng Chảy Hòa Ca #984",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "confetti",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 985,
    "name": "Điện Hành Trình Hạnh Phúc #985",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "petals",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 986,
    "name": "Điện Nhịp Đập Vĩnh Cửu #986",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "hearts",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 987,
    "name": "Điện Hôn Lễ Thuần Khiết #987",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 988,
    "name": "Điện Vầng Trăng Ngọt Ngào #988",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 989,
    "name": "Điện Giai Điệu Ấm Áp #989",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "fireflies",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 990,
    "name": "Điện Bản Tình Ca Bình Yên #990",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "confetti",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 991,
    "name": "Điện Ánh Dương Mộng Mơ #991",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "VIP",
    "transition": "cinematic-fade",
    "particle": "petals",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh cinematic-fade lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 992,
    "name": "Điện Dòng Chảy Viên Mãn #992",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Thịnh hành",
    "transition": "parallax-zoom",
    "particle": "hearts",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh parallax-zoom lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 993,
    "name": "Điện Hành Trình Trang Nhã #993",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Bán chạy",
    "transition": "slide-up",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh slide-up lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 994,
    "name": "Điện Nhịp Đập Thơ Mộng #994",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Sang trọng",
    "transition": "card-flip",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh card-flip lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 995,
    "name": "Điện Hôn Lễ Rực Rỡ #995",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Độc bản",
    "transition": "curtain-reveal",
    "particle": "fireflies",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh curtain-reveal lôi cuốn và hạt rơi fireflies.",
    "thumb": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 996,
    "name": "Điện Vầng Trăng Tinh Khôi #996",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Tinh tế",
    "transition": "soft-float",
    "particle": "confetti",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh soft-float lôi cuốn và hạt rơi confetti.",
    "thumb": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 997,
    "name": "Điện Giai Điệu Nồng Nàn #997",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Lãng mạn",
    "transition": "origami-fold",
    "particle": "petals",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh origami-fold lôi cuốn và hạt rơi petals.",
    "thumb": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 998,
    "name": "Điện Bản Tình Ca Gắn Kết #998",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Mới nhất",
    "transition": "zoom-burst",
    "particle": "hearts",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh zoom-burst lôi cuốn và hạt rơi hearts.",
    "thumb": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  },
  {
    "id": 999,
    "name": "Điện Ánh Dương Hòa Ca #999",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Cổ điển",
    "transition": "gentle-drift",
    "particle": "snow",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh gentle-drift lôi cuốn và hạt rơi snow.",
    "thumb": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#18181B",
      "secondary": "#D4AF37",
      "accent": "#27272A",
      "text": "#09090B",
      "bg": "from-stone-900 via-zinc-900 to-amber-950/40",
      "cardBg": "#18181B",
      "envelopeWax": "#D4AF37",
      "petals": [
        "#FCD34D",
        "#71717A",
        "#A1A1AA"
      ],
      "isDark": true
    }
  },
  {
    "id": 1000,
    "name": "Điện Dòng Chảy Hạnh Phúc #1000",
    "category": "cinematic",
    "categoryName": "Điện Ảnh & Cuộn Phim Tình Yêu",
    "tag": "Hiện đại",
    "transition": "ribbon-unroll",
    "particle": "gold-sparkles",
    "desc": "Phong cách điện ảnh & cuộn phim tình yêu với hiệu ứng chuyển cảnh ribbon-unroll lôi cuốn và hạt rơi gold-sparkles.",
    "thumb": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80",
    "theme": {
      "primary": "#0F172A",
      "secondary": "#38BDF8",
      "accent": "#1E293B",
      "text": "#F8FAFC",
      "bg": "from-slate-950 via-slate-900 to-sky-950",
      "cardBg": "#0F172A",
      "envelopeWax": "#38BDF8",
      "petals": [
        "#7DD3FC",
        "#BAE6FD",
        "#E2E8F0"
      ],
      "isDark": true
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WEDDING_TEMPLATES, WEDDING_CATEGORIES, WEDDING_TRANSITIONS, WEDDING_PARTICLES };
}
