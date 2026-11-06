const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { id: 'traditional', name: 'Truyền Thống Á Đông & Cổ Điển', icon: 'heart' },
  { id: 'floral', name: 'Hoa Cỏ & Botanical Garden', icon: 'flower-2' },
  { id: 'luxury', name: 'Hoàng Gia, Luxury & Gold Foil', icon: 'crown' },
  { id: 'rustic', name: 'Rustic, Mộc Mạc & Giấy Kraft', icon: 'feather' },
  { id: 'minimalist', name: 'Tối Giản Hiện Đại & Scandinavian', icon: 'layout' },
  { id: 'ocean', name: 'Biển Xanh & Mùa Hè Nhiệt Đới', icon: 'waves' },
  { id: 'pastel', name: 'Pastel Dịu Ngọt & Sweet Romance', icon: 'palette' },
  { id: 'watercolor', name: 'Màu Nước & Tranh Hội Họa', icon: 'brush' },
  { id: 'celestial', name: 'Dạ Hội, Ngân Hà & Starlight', icon: 'moon' },
  { id: 'trendy', name: 'Xu Hướng Gen Z, Y2K & Retro', icon: 'zap' },
  { id: 'fairytale', name: 'Cổ Tích Lãng Mạn & Lâu Đài Châu Âu', icon: 'sparkles' },
  { id: 'autumn', name: 'Mùa Thu Vàng & Lá Phong Trầm Ấm', icon: 'wind' },
  { id: 'winter', name: 'Mùa Đông Trắng & Bông Tuyết Lạnh', icon: 'snowflake' },
  { id: 'vintage_era', name: 'Cổ Điển Retro 1920-1970s', icon: 'film' },
  { id: 'broadway', name: 'Nghệ Thuật Sân Khấu & Broadway Glam', icon: 'music' },
  { id: 'zen', name: 'Thiền Định, Wabi-Sabi & Zen Garden', icon: 'sun' },
  { id: 'glassmorphism', name: 'Pha Lê, Thủy Tinh & Glassmorphism', icon: 'shield' },
  { id: 'wine_gala', name: 'Tiệc Rượu Vang & Đêm Dạ Vũ Gala', icon: 'wine' },
  { id: 'highland', name: 'Cao Nguyên, Rừng Thông & Đồi Chè', icon: 'mountain' },
  { id: 'cinematic', name: 'Điện Ảnh & Cuộn Phim Tình Yêu', icon: 'camera' }
];

const TRANSITIONS = [
  'cinematic-fade', 'parallax-zoom', 'slide-up', 'card-flip',
  'curtain-reveal', 'soft-float', 'origami-fold', 'zoom-burst',
  'gentle-drift', 'ribbon-unroll'
];

const PARTICLES = [
  'petals', 'hearts', 'snow', 'gold-sparkles', 'fireflies', 'confetti'
];

const TAGS = ['VIP', 'Thịnh hành', 'Bán chạy', 'Sang trọng', 'Độc bản', 'Tinh tế', 'Lãng mạn', 'Mới nhất', 'Cổ điển', 'Hiện đại'];

// Base themes per category to generate realistic variations
const CATEGORY_PALETTES = {
  traditional: [
    { p: '#B91C1C', s: '#D97706', a: '#DC2626', t: '#450A0A', bg: 'from-rose-50 via-amber-50 to-red-100', cbg: '#FFFFFF', wax: '#B91C1C', petals: ['#DC2626', '#F59E0B', '#FCA5A5'] },
    { p: '#991B1B', s: '#B45309', a: '#B91C1C', t: '#3B0707', bg: 'from-red-50 via-orange-50 to-rose-100', cbg: '#FFFDF9', wax: '#991B1B', petals: ['#991B1B', '#D97706', '#FEE2E2'] },
    { p: '#1D4ED8', s: '#3B82F6', a: '#2563EB', t: '#1E293B', bg: 'from-blue-50 via-slate-50 to-sky-100', cbg: '#FFFFFF', wax: '#1D4ED8', petals: ['#60A5FA', '#93C5FD', '#DBEAFE'] }
  ],
  floral: [
    { p: '#B87D65', s: '#D4AF37', a: '#9D5C43', t: '#3A2E2B', bg: 'from-[#FAF7F2] via-[#F3ECE3] to-[#EBD8D0]', cbg: '#FAF7F2', wax: '#B87D65', petals: ['#FBCFE8', '#FED7AA', '#FDE047'] },
    { p: '#047857', s: '#10B981', a: '#059669', t: '#064E3B', bg: 'from-emerald-50 via-stone-50 to-green-100', cbg: '#FFFFFF', wax: '#047857', petals: ['#A7F3D0', '#D1FAE5', '#E2E8F0'] },
    { p: '#DB2777', s: '#F472B6', a: '#BE185D', t: '#500724', bg: 'from-pink-50 via-rose-50 to-pink-100', cbg: '#FFFFFF', wax: '#DB2777', petals: ['#F472B6', '#FBCFE8', '#FDF2F8'] }
  ],
  luxury: [
    { p: '#B45309', s: '#D97706', a: '#92400E', t: '#291605', bg: 'from-stone-900 via-stone-800 to-amber-950', cbg: '#1C1917', wax: '#D97706', petals: ['#FCD34D', '#F59E0B', '#D97706'], isDark: true },
    { p: '#881337', s: '#BE123C', a: '#4C0519', t: '#3B0716', bg: 'from-rose-50 via-stone-100 to-red-100', cbg: '#FFFFFF', wax: '#881337', petals: ['#BE123C', '#E11D48', '#FECDD3'] },
    { p: '#1E3A8A', s: '#3B82F6', a: '#172554', t: '#0F172A', bg: 'from-blue-50 via-slate-50 to-indigo-100', cbg: '#FFFFFF', wax: '#1E3A8A', petals: ['#93C5FD', '#BFDBFE', '#60A5FA'] }
  ],
  rustic: [
    { p: '#854D0E', s: '#A16207', a: '#713F12', t: '#3B2206', bg: 'from-[#F3ECE3] via-[#E8DEC8] to-[#D9CCA8]', cbg: '#FBF7F0', wax: '#854D0E', petals: ['#D4B89B', '#C2A385', '#E8D8C3'] },
    { p: '#78350F', s: '#B45309', a: '#451A03', t: '#291605', bg: 'from-stone-100 via-amber-50 to-orange-100', cbg: '#FAF6F0', wax: '#78350F', petals: ['#B45309', '#D97706', '#FDE68A'] }
  ],
  minimalist: [
    { p: '#0A0A0A', s: '#525252', a: '#171717', t: '#0A0A0A', bg: 'from-stone-50 via-neutral-100 to-stone-200', cbg: '#FFFFFF', wax: '#171717', petals: ['#A3A3A3', '#D4D4D4', '#E5E5E5'] },
    { p: '#44403C', s: '#78716C', a: '#292524', t: '#1C1917', bg: 'from-stone-50 via-stone-100 to-amber-50/30', cbg: '#FAFAF9', wax: '#44403C', petals: ['#A8A29E', '#D6D3D1', '#F5F5F4'] }
  ],
  ocean: [
    { p: '#0D9488', s: '#2DD4BF', a: '#0F766E', t: '#134E4A', bg: 'from-teal-50 via-cyan-50/50 to-emerald-100', cbg: '#FFFFFF', wax: '#0D9488', petals: ['#5EEAD4', '#99F6E4', '#CCFBF1'] },
    { p: '#0284C7', s: '#38BDF8', a: '#0369A1', t: '#0C4A6E', bg: 'from-sky-50 via-slate-50 to-blue-100', cbg: '#FFFFFF', wax: '#0284C7', petals: ['#7DD3FC', '#BAE6FD', '#E0F2FE'] }
  ],
  pastel: [
    { p: '#EA580C', s: '#FDBA74', a: '#C2410C', t: '#431407', bg: 'from-[#FFF5ED] via-[#FFE8D6] to-[#FED7AA]', cbg: '#FFFFFF', wax: '#EA580C', petals: ['#FED7AA', '#FFEDD5', '#FDBA74'] },
    { p: '#7C3AED', s: '#A78BFA', a: '#6D28D9', t: '#3B0764', bg: 'from-violet-50 via-purple-50/40 to-purple-100', cbg: '#FFFFFF', wax: '#7C3AED', petals: ['#C4B5FD', '#DDD6FE', '#EDE9FE'] }
  ],
  watercolor: [
    { p: '#1E40AF', s: '#3B82F6', a: '#1D4ED8', t: '#172554', bg: 'from-blue-50 via-slate-50 to-indigo-100', cbg: '#FFFFFF', wax: '#1E40AF', petals: ['#60A5FA', '#93C5FD', '#DBEAFE'] },
    { p: '#9333EA', s: '#F59E0B', a: '#7E22CE', t: '#3B0764', bg: 'from-purple-50 via-amber-50 to-stone-100', cbg: '#FFFFFF', wax: '#9333EA', petals: ['#C084FC', '#FCD34D', '#E9D5FF'] }
  ],
  celestial: [
    { p: '#1E3A8A', s: '#F59E0B', a: '#172554', t: '#F8FAFC', bg: 'from-slate-950 via-blue-950 to-indigo-950', cbg: '#0F172A', wax: '#F59E0B', petals: ['#FDE047', '#60A5FA', '#93C5FD'], isDark: true },
    { p: '#6B21A8', s: '#EC4899', a: '#581C87', t: '#FDF4FF', bg: 'from-purple-950 via-slate-950 to-fuchsia-950', cbg: '#1E112A', wax: '#A855F7', petals: ['#E879F9', '#F472B6', '#C084FC'], isDark: true }
  ],
  trendy: [
    { p: '#8B5CF6', s: '#EC4899', a: '#06B6D4', t: '#1E1B4B', bg: 'from-pink-100 via-purple-100 to-cyan-100', cbg: '#FFFFFF', wax: '#8B5CF6', petals: ['#C084FC', '#F472B6', '#67E8F9'] },
    { p: '#1DB954', s: '#191414', a: '#1ED760', t: '#FFFFFF', bg: 'from-zinc-950 via-neutral-900 to-emerald-950/40', cbg: '#121212', wax: '#1DB954', petals: ['#1ED760', '#4ADE80', '#86EFAC'], isDark: true }
  ],
  fairytale: [
    { p: '#9333EA', s: '#F472B6', a: '#7E22CE', t: '#3B0764', bg: 'from-fuchsia-50 via-purple-50 to-pink-100', cbg: '#FFFFFF', wax: '#9333EA', petals: ['#F472B6', '#E879F9', '#FDF2F8'] },
    { p: '#CA8A04', s: '#EAB308', a: '#A16207', t: '#422006', bg: 'from-amber-50 via-yellow-50 to-rose-50', cbg: '#FFFEFA', wax: '#CA8A04', petals: ['#FDE047', '#FDA4AF', '#FEF08A'] }
  ],
  autumn: [
    { p: '#C2410C', s: '#EA580C', a: '#9A3412', t: '#431407', bg: 'from-amber-50 via-orange-50 to-stone-100', cbg: '#FFFDF9', wax: '#C2410C', petals: ['#F97316', '#FBBF24', '#EA580C'] },
    { p: '#B45309', s: '#D97706', a: '#78350F', t: '#291605', bg: 'from-orange-50 via-stone-100 to-amber-100', cbg: '#FAF6F0', wax: '#B45309', petals: ['#F59E0B', '#D97706', '#FED7AA'] }
  ],
  winter: [
    { p: '#0284C7', s: '#94A3B8', a: '#0369A1', t: '#0C4A6E', bg: 'from-slate-100 via-sky-50 to-blue-100', cbg: '#FFFFFF', wax: '#0284C7', petals: ['#BAE6FD', '#E2E8F0', '#F1F5F9'] },
    { p: '#334155', s: '#64748B', a: '#1E293B', t: '#0F172A', bg: 'from-slate-50 via-stone-100 to-zinc-200', cbg: '#FFFFFF', wax: '#334155', petals: ['#CBD5E1', '#E2E8F0', '#FFFFFF'] }
  ],
  vintage_era: [
    { p: '#7C2D12', s: '#9A3412', a: '#431407', t: '#271206', bg: 'from-amber-50 via-stone-100 to-orange-100', cbg: '#FAF5ED', wax: '#7C2D12', petals: ['#EA580C', '#D97706', '#FDE68A'] },
    { p: '#57534E', s: '#78716C', a: '#44403C', t: '#1C1917', bg: 'from-stone-100 via-stone-50 to-amber-50/30', cbg: '#FAF8F5', wax: '#57534E', petals: ['#A8A29E', '#D6D3D1', '#F5F5F4'] }
  ],
  broadway: [
    { p: '#BE123C', s: '#F59E0B', a: '#9F1239', t: '#4C0519', bg: 'from-stone-900 via-red-950 to-amber-950', cbg: '#1C1417', wax: '#BE123C', petals: ['#FDA4AF', '#FCD34D', '#F59E0B'], isDark: true },
    { p: '#D97706', s: '#E11D48', a: '#B45309', t: '#451A03', bg: 'from-amber-50 via-rose-50 to-stone-100', cbg: '#FFFFFF', wax: '#D97706', petals: ['#FBBF24', '#FB7185', '#FDE68A'] }
  ],
  zen: [
    { p: '#3F6212', s: '#65A30D', a: '#4D7C0F', t: '#1A2E05', bg: 'from-stone-100 via-lime-50/40 to-stone-200', cbg: '#FAF9F6', wax: '#3F6212', petals: ['#BEF264', '#D6D3D1', '#E2E8F0'] },
    { p: '#57534E', s: '#847A73', a: '#44403C', t: '#292524', bg: 'from-[#F5F2EB] via-[#ECE7DE] to-[#E0D9CE]', cbg: '#FCFBF9', wax: '#57534E', petals: ['#D6D3D1', '#C7BEB5', '#F5F5F4'] }
  ],
  glassmorphism: [
    { p: '#2563EB', s: '#60A5FA', a: '#1D4ED8', t: '#0F172A', bg: 'from-slate-100 via-sky-100 to-indigo-100', cbg: 'rgba(255, 255, 255, 0.85)', wax: '#2563EB', petals: ['#93C5FD', '#BAE6FD', '#C7D2FE'] },
    { p: '#7C3AED', s: '#A78BFA', a: '#6D28D9', t: '#1E1B4B', bg: 'from-purple-100 via-pink-100 to-indigo-100', cbg: 'rgba(255, 255, 255, 0.85)', wax: '#7C3AED', petals: ['#C4B5FD', '#F472B6', '#E0E7FF'] }
  ],
  wine_gala: [
    { p: '#4C0519', s: '#E11D48', a: '#881337', t: '#FFF1F2', bg: 'from-zinc-950 via-rose-950 to-stone-950', cbg: '#1A090D', wax: '#E11D48', petals: ['#BE123C', '#FB7185', '#FDA4AF'], isDark: true },
    { p: '#831843', s: '#D97706', a: '#700B33', t: '#FFF1F2', bg: 'from-stone-950 via-pink-950 to-rose-950', cbg: '#1C1417', wax: '#D97706', petals: ['#FB7185', '#FCD34D', '#FDA4AF'], isDark: true }
  ],
  highland: [
    { p: '#166534', s: '#15803D', a: '#14532D', t: '#052E16', bg: 'from-emerald-50 via-stone-100 to-green-100', cbg: '#FFFFFF', wax: '#166534', petals: ['#86EFAC', '#BBF7D0', '#D1FAE5'] },
    { p: '#854D0E', s: '#15803D', a: '#713F12', t: '#3B2206', bg: 'from-amber-50 via-stone-100 to-emerald-50', cbg: '#FFFFFF', wax: '#854D0E', petals: ['#FDE047', '#86EFAC', '#FED7AA'] }
  ],
  cinematic: [
    { p: '#18181B', s: '#D4AF37', a: '#27272A', t: '#09090B', bg: 'from-stone-900 via-zinc-900 to-amber-950/40', cbg: '#18181B', wax: '#D4AF37', petals: ['#FCD34D', '#71717A', '#A1A1AA'], isDark: true },
    { p: '#0F172A', s: '#38BDF8', a: '#1E293B', t: '#F8FAFC', bg: 'from-slate-950 via-slate-900 to-sky-950', cbg: '#0F172A', wax: '#38BDF8', petals: ['#7DD3FC', '#BAE6FD', '#E2E8F0'], isDark: true }
  ]
};

const PHOTOS = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=600&q=80"
];

// Title adjective keywords
const ADJECTIVES = [
  'Hạnh Phúc', 'Sum Vầy', 'Vĩnh Cửu', 'Hoàng Kim', 'Thuần Khiết', 'Duyên Dáng',
  'Ngọt Ngào', 'Sang Trọng', 'Ấm Áp', 'Lộng Lẫy', 'Bình Yên', 'Thủy Chung',
  'Mộng Mơ', 'Rạng Ngời', 'Viên Mãn', 'Quý Phái', 'Trang Nhã', 'Ngát Hương',
  'Thơ Mộng', 'Trọn Vẹn', 'Rực Rỡ', 'Đẳng Cấp', 'Tinh Khôi', 'Son Sắt',
  'Nồng Nàn', 'Trầm Ấm', 'Gắn Kết', 'Bất Hủ', 'Hòa Ca', 'Tươi Sáng'
];

const NOUNS = [
  'Lời Thề', 'Giai Điệu', 'Khoảnh Khắc', 'Nguyện Ước', 'Bản Tình Ca', 'Hơi Thở',
  'Vũ Điệu', 'Ánh Dương', 'Hương Sắc', 'Cung Đàn', 'Dòng Chảy', 'Bến Đỗ',
  'Giấc Mơ', 'Hành Trình', 'Ánh Mắt', 'Nụ Cười', 'Nhịp Đập', 'Khúc Ca',
  'Tổ Ấm', 'Hôn Lễ', 'Bàn Tay', 'Trái Tim', 'Vầng Trăng', 'Bầu Trời'
];

// Generate 1,000 Templates
const allTemplates = [];
let idCounter = 1;

CATEGORIES.forEach(cat => {
  const paletteList = CATEGORY_PALETTES[cat.id] || CATEGORY_PALETTES.traditional;
  
  for (let i = 1; i <= 50; i++) {
    const id = idCounter++;
    const palette = paletteList[(i - 1) % paletteList.length];
    const trans = TRANSITIONS[(id - 1) % TRANSITIONS.length];
    const part = PARTICLES[(id - 1) % PARTICLES.length];
    const tag = TAGS[(id - 1) % TAGS.length];
    const thumb = PHOTOS[(id - 1) % PHOTOS.length];

    const adj = ADJECTIVES[(id + i) % ADJECTIVES.length];
    const noun = NOUNS[(id * 2 + i) % NOUNS.length];
    const name = `${cat.name.split(' ')[0]} ${noun} ${adj} #${id}`;

    allTemplates.push({
      id: id,
      name: name,
      category: cat.id,
      categoryName: cat.name,
      tag: tag,
      transition: trans,
      particle: part,
      desc: `Phong cách ${cat.name.toLowerCase()} với hiệu ứng chuyển cảnh ${trans} lôi cuốn và hạt rơi ${part}.`,
      thumb: thumb,
      theme: {
        primary: palette.p,
        secondary: palette.s,
        accent: palette.a,
        text: palette.t,
        bg: palette.bg,
        cardBg: palette.cbg,
        envelopeWax: palette.wax,
        petals: palette.petals,
        isDark: !!palette.isDark
      }
    });
  }
});

console.log(`Generated ${allTemplates.length} templates across ${CATEGORIES.length} categories.`);

const outputCode = `// ==========================================================================
// KHO 1,000 MẪU THIỆP CƯỚI CHUYÊN NGHIỆP & HIỆU ỨNG CHUYỂN CẢNH ĐA DẠNG
// (20 BỘ SƯU TẬP x 50 MẪU ĐỘC BẢN = 1,000 MẪU)
// ==========================================================================

const WEDDING_CATEGORIES = ${JSON.stringify([{ id: 'all', name: 'Tất Cả (1,000 Mẫu)', icon: 'sparkles' }, ...CATEGORIES], null, 2)};

const WEDDING_TRANSITIONS = ${JSON.stringify(TRANSITIONS, null, 2)};

const WEDDING_PARTICLES = ${JSON.stringify(PARTICLES, null, 2)};

const WEDDING_TEMPLATES = ${JSON.stringify(allTemplates, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WEDDING_TEMPLATES, WEDDING_CATEGORIES, WEDDING_TRANSITIONS, WEDDING_PARTICLES };
}
`;

fs.writeFileSync(path.join(__dirname, 'templates.js'), outputCode, 'utf8');
console.log('Successfully written templates.js with 1,000 templates!');
