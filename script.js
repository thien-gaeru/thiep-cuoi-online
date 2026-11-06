// ==========================================
// THIỆP MỜI CƯỚI ONLINE - JAVASCRIPT TOÀN DIỆN
// ==========================================

// CẤU HÌNH MẪU MẶC ĐỊNH (DEFAULT CONFIGURATION)
const DEFAULT_CONFIG = {
  groom: {
    name: "Nguyễn Quốc Huy",
    shortName: "Quốc Huy",
    quote: "Chàng trai luôn muốn mang lại nụ cười cho em",
    father: "Nguyễn Văn Hùng",
    mother: "Trần Thị Mai",
    location: "TP. Hồ Chí Minh",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bankName: "Ngân hàng Quân Đội (MB Bank)",
    bankCode: "970422",
    accountNumber: "0987654321",
    accountHolder: "NGUYEN QUOC HUY"
  },
  bride: {
    name: "Lê Mỹ Linh",
    shortName: "Mỹ Linh",
    quote: "Cô gái hạnh phúc nhất khi được đồng hành cùng anh",
    father: "Lê Hoàng Nam",
    mother: "Vũ Bích Ngọc",
    location: "TP. Hồ Chí Minh",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    bankName: "Ngân hàng Ngoại Thương (Vietcombank)",
    bankCode: "970436",
    accountNumber: "1234567890",
    accountHolder: "LE MY LINH"
  },
  event: {
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    dateIso: "2026-11-28T11:00",
    dateDisplay: "28.11.2026",
    dayOfWeek: "Thứ Bảy",
    timeDisplay: "11:00 Trưa",
    lunarDate: "Nhằm ngày 20 tháng 10 năm Bính Ngọ",
    venueName: "Trung Tâm Hội Nghị Tiệc Cưới GEM Center",
    venueHall: "Sảnh Grand Ballroom - Lầu 3",
    venueAddress: "Số 8 Nguyễn Bỉnh Khiêm, P. Đa Kao, Quận 1, TP.HCM",
    mapsUrl: "https://maps.google.com/?q=GEM+Center+Nguyen+Binh+Khiem",
    vuquyTime: "08:30 Sáng - Ngày 28.11.2026",
    vuquyAddress: "123 Đường Trần Hưng Đạo, P. Cô Giang, Quận 1, TP.HCM",
    storyMessage: "Sau những năm tháng cùng nhau trưởng thành, chia sẻ từng buồn vui trong cuộc sống, ngày hôm nay chúng mình quyết định bước tiếp cùng nhau trên chặng đường mới – hôn nhân.\n\nSự hiện diện, lời chúc phúc và tình cảm của bạn chính là món quà vô giá và ý nghĩa nhất dành cho chúng mình trong ngày trọng đại này."
  },
  video: {
    enabled: true,
    title: "Thước Phim Tình Yêu",
    subtitle: "Cùng dõi theo những khoảnh khắc ngọt ngào nhất trong hành trình yêu của chúng mình.",
    url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk"
  },
  effects: {
    transition: "cinematic-fade",
    particle: "petals",
    fontFamily: "font-script",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-wedding-waltz-102.mp3",
    primaryColor: "#B87D65",
    waxColor: "#B87D65"
  },
  templateId: 11,
  gallery: [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
  ]
};

// Biến lưu cấu hình hiện tại và bộ đệm ảnh trong lúc mở modal
let currentConfig = loadStoredConfig();
let workingGallery = [...currentConfig.gallery];
let pendingUploads = {};

// Khởi chạy khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  renderEntirePage();
  syncServerConfig(); // Đồng bộ cấu hình từ server nếu có thiết bị khác chỉnh sửa
  initTemplateEngine(); // Khởi tạo kho 100 mẫu thiệp cưới
  initGuestPersonalization();
  initCountdown();
  initMusicPlayer();
  initEnvelopeOpener();
  initFallingPetals();
  initGuestbook();
  initRSVPForm();
  initShareModal();
});

// Tự động đồng bộ config.json từ máy chủ (để điện thoại mở lên thấy ngay nội dung đã sửa trên PC)
async function syncServerConfig() {
  try {
    const res = await fetch('config.json?v=' + Date.now());
    if (res.ok) {
      const remote = await res.json();
      currentConfig = {
        ...DEFAULT_CONFIG,
        ...remote,
        groom: { ...DEFAULT_CONFIG.groom, ...(remote.groom || {}) },
        bride: { ...DEFAULT_CONFIG.bride, ...(remote.bride || {}) },
        event: { ...DEFAULT_CONFIG.event, ...(remote.event || {}) },
        video: { ...DEFAULT_CONFIG.video, ...(remote.video || {}) },
        effects: { ...DEFAULT_CONFIG.effects, ...(remote.effects || {}) },
        gallery: (remote.gallery && remote.gallery.length > 0) ? remote.gallery : DEFAULT_CONFIG.gallery
      };
      saveConfigToStorage(currentConfig);
      renderEntirePage();
    }
  } catch (e) {
    // Không có server API hoặc đang mở offline file://
  }
}

// ==========================================
// 1. TẢI VÀ LƯU CẤU HÌNH VÀO LOCALSTORAGE
// ==========================================
function loadStoredConfig() {
  try {
    const saved = localStorage.getItem('wedding_invitation_config_v2');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Gộp đè lên DEFAULT_CONFIG để đảm bảo đầy đủ thuộc tính
      return {
        ...DEFAULT_CONFIG,
        ...parsed,
        groom: { ...DEFAULT_CONFIG.groom, ...(parsed.groom || {}) },
        bride: { ...DEFAULT_CONFIG.bride, ...(parsed.bride || {}) },
        event: { ...DEFAULT_CONFIG.event, ...(parsed.event || {}) },
        video: { ...DEFAULT_CONFIG.video, ...(parsed.video || {}) },
        effects: { ...DEFAULT_CONFIG.effects, ...(parsed.effects || {}) },
        gallery: (parsed.gallery && parsed.gallery.length > 0) ? parsed.gallery : DEFAULT_CONFIG.gallery
      };
    }
  } catch (e) {
    console.error("Lỗi khi đọc cấu hình từ localStorage:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
}

function saveConfigToStorage(config) {
  try {
    localStorage.setItem('wedding_invitation_config_v2', JSON.stringify(config));
  } catch (e) {
    console.error("Lỗi lưu localStorage (có thể vượt dung lượng ảnh):", e);
    showToast('Lỗi: Dung lượng ảnh quá lớn cho bộ nhớ trình duyệt!');
  }
}

// ==========================================
// 2. RENDER GIAO DIỆN THEO CẤU HÌNH HIỆN TẠI
// ==========================================
function renderEntirePage() {
  const c = currentConfig;

  // Tiêu đề trang & Tên cặp đôi
  const coupleText = `${c.groom.shortName || c.groom.name} & ${c.bride.shortName || c.bride.name}`;
  document.title = `Thiệp Mời Cưới - ${coupleText}`;
  
  const elEnvCouple = document.getElementById('envelope-couple-names');
  if (elEnvCouple) elEnvCouple.textContent = coupleText;

  const elHeroGroom = document.getElementById('hero-groom-name');
  if (elHeroGroom) elHeroGroom.textContent = c.groom.shortName || c.groom.name;

  const elHeroBride = document.getElementById('hero-bride-name');
  if (elHeroBride) elHeroBride.textContent = c.bride.shortName || c.bride.name;

  const elCoupleSig = document.getElementById('couple-signature');
  if (elCoupleSig) elCoupleSig.textContent = coupleText;

  const elFooterNames = document.getElementById('footer-couple-names');
  if (elFooterNames) elFooterNames.textContent = coupleText;

  // Ảnh chính
  const elHeroImg = document.getElementById('hero-img');
  if (elHeroImg) elHeroImg.src = c.event.heroImage;

  const elGroomImg = document.getElementById('groom-img');
  if (elGroomImg) elGroomImg.src = c.groom.avatar;

  const elBrideImg = document.getElementById('bride-img');
  if (elBrideImg) elBrideImg.src = c.bride.avatar;

  // Thẻ Chú rể
  const elGroomNameCard = document.getElementById('groom-name-card');
  if (elGroomNameCard) elGroomNameCard.textContent = c.groom.name;
  const elGroomQuote = document.getElementById('groom-quote-card');
  if (elGroomQuote) elGroomQuote.textContent = `"${c.groom.quote}"`;
  const elGroomFather = document.getElementById('groom-father-card');
  if (elGroomFather) elGroomFather.textContent = c.groom.father;
  const elGroomMother = document.getElementById('groom-mother-card');
  if (elGroomMother) elGroomMother.textContent = c.groom.mother;
  const elGroomLoc = document.getElementById('groom-location-card');
  if (elGroomLoc) elGroomLoc.textContent = c.groom.location;

  // Thẻ Cô dâu
  const elBrideNameCard = document.getElementById('bride-name-card');
  if (elBrideNameCard) elBrideNameCard.textContent = c.bride.name;
  const elBrideQuote = document.getElementById('bride-quote-card');
  if (elBrideQuote) elBrideQuote.textContent = `"${c.bride.quote}"`;
  const elBrideFather = document.getElementById('bride-father-card');
  if (elBrideFather) elBrideFather.textContent = c.bride.father;
  const elBrideMother = document.getElementById('bride-mother-card');
  if (elBrideMother) elBrideMother.textContent = c.bride.mother;
  const elBrideLoc = document.getElementById('bride-location-card');
  if (elBrideLoc) elBrideLoc.textContent = c.bride.location;

  // Ngày giờ & Địa điểm
  const elHeroDay = document.getElementById('hero-day-of-week');
  if (elHeroDay) elHeroDay.textContent = c.event.dayOfWeek;
  const elHeroDate = document.getElementById('hero-date-text');
  if (elHeroDate) elHeroDate.textContent = c.event.dateDisplay;
  const elHeroTime = document.getElementById('hero-time-text');
  if (elHeroTime) elHeroTime.textContent = c.event.timeDisplay;
  const elHeroLunar = document.getElementById('hero-lunar-text');
  if (elHeroLunar) elHeroLunar.textContent = `(${c.event.lunarDate})`;

  const elVenueDt = document.getElementById('venue-datetime-text');
  if (elVenueDt) elVenueDt.textContent = `${c.event.timeDisplay} - ${c.event.dayOfWeek}, Ngày ${c.event.dateDisplay}`;

  const elVenueName = document.getElementById('venue-name-card');
  if (elVenueName) elVenueName.textContent = c.event.venueName;
  const elVenueHall = document.getElementById('venue-hall-card');
  if (elVenueHall) elVenueHall.textContent = c.event.venueHall;
  const elVenueAddr = document.getElementById('venue-address-card');
  if (elVenueAddr) elVenueAddr.textContent = c.event.venueAddress;

  const elMapsBtn = document.getElementById('btn-maps-link');
  if (elMapsBtn) elMapsBtn.href = c.event.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(c.event.venueName + ' ' + c.event.venueAddress)}`;

  const elVuquyTime = document.getElementById('vuquy-time-text');
  if (elVuquyTime) elVuquyTime.textContent = c.event.vuquyTime;
  const elVuquyAddr = document.getElementById('vuquy-address-text');
  if (elVuquyAddr) elVuquyAddr.textContent = c.event.vuquyAddress;

  // Lời ngỏ
  const elStory = document.getElementById('couple-message-body');
  if (elStory && c.event.storyMessage) {
    const paragraphs = c.event.storyMessage.split('\n\n').filter(p => p.trim().length > 0);
    elStory.innerHTML = paragraphs.map(p => `<p>"${escapeHtml(p.trim())}"</p>`).join('');
  }

  // Mừng cưới & VietQR
  const elBankCrName = document.getElementById('bank-groom-name');
  if (elBankCrName) elBankCrName.textContent = c.groom.name;
  const elBankCrBank = document.getElementById('bank-groom-bankname');
  if (elBankCrBank) elBankCrBank.textContent = c.groom.bankName;
  const elStkCr = document.getElementById('stk-cr');
  if (elStkCr) elStkCr.textContent = c.groom.accountNumber;

  const elQrCr = document.getElementById('qr-groom-img');
  if (elQrCr) {
    const qrUrlCr = `https://api.vietqr.io/image/${c.groom.bankCode}-${c.groom.accountNumber}-compact.jpg?amount=&addInfo=Mung+cuoi+${encodeURIComponent(c.groom.shortName || c.groom.name)}&accountName=${encodeURIComponent(c.groom.accountHolder)}`;
    elQrCr.src = qrUrlCr;
  }

  const elBankCdName = document.getElementById('bank-bride-name');
  if (elBankCdName) elBankCdName.textContent = c.bride.name;
  const elBankCdBank = document.getElementById('bank-bride-bankname');
  if (elBankCdBank) elBankCdBank.textContent = c.bride.bankName;
  const elStkCd = document.getElementById('stk-cd');
  if (elStkCd) elStkCd.textContent = c.bride.accountNumber;

  const elQrCd = document.getElementById('qr-bride-img');
  if (elQrCd) {
    const qrUrlCd = `https://api.vietqr.io/image/${c.bride.bankCode}-${c.bride.accountNumber}-compact.jpg?amount=&addInfo=Mung+cuoi+${encodeURIComponent(c.bride.shortName || c.bride.name)}&accountName=${encodeURIComponent(c.bride.accountHolder)}`;
    elQrCd.src = qrUrlCd;
  }

  // Album ảnh cưới (Gallery)
  renderGalleryGrid(c.gallery);

  // Video cưới kỷ niệm tùy chỉnh
  renderWeddingVideo(c.video);

  // Áp dụng các hiệu ứng chuyển cảnh, hạt rơi, phông chữ và màu sắc tùy chỉnh
  if (c.effects) {
    applyTransitionEffect(c.effects.transition);
    applyParticleEffect(c.effects.particle);
    applyFontFamily(c.effects.fontFamily);
    applyCustomColors(c.effects.primaryColor, c.effects.waxColor);
  }

  // Cập nhật lại Icon Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// 2B. XỬ LÝ VIDEO CƯỚI (EMBED YOUTUBE, VIMEO, MP4)
// ==========================================
function renderWeddingVideo(videoConfig) {
  const section = document.getElementById('wedding-video-section');
  const container = document.getElementById('wedding-video-frame-container');
  const titleEl = document.getElementById('video-section-title');
  const subtitleEl = document.getElementById('video-section-subtitle');

  if (!section || !container) return;

  const v = videoConfig || (currentConfig && currentConfig.video);
  if (!v || v.enabled === false || !v.url) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  if (titleEl) titleEl.textContent = v.title || 'Thước Phim Tình Yêu';
  if (subtitleEl) subtitleEl.textContent = v.subtitle || 'Cùng dõi theo những khoảnh khắc ngọt ngào nhất trong hành trình yêu của chúng mình.';

  container.innerHTML = getEmbedVideoHtml(v.url);
}

function getEmbedVideoHtml(url) {
  if (!url) return '';
  const cleanUrl = url.trim();

  // 1. YouTube (youtube.com/watch?v=, youtu.be/, shorts/, embed/)
  const ytMatch = cleanUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    const videoId = ytMatch[1];
    return `<iframe class="w-full h-full rounded-2xl" src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1" title="Wedding Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  // 2. Vimeo
  const vimeoMatch = cleanUrl.match(/(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    const vimeoId = vimeoMatch[1];
    return `<iframe class="w-full h-full rounded-2xl" src="https://player.vimeo.com/video/${vimeoId}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  }

  // 3. Tệp video trực tiếp (MP4, WebM, OGG...)
  const poster = (currentConfig && currentConfig.event && currentConfig.event.heroImage) ? currentConfig.event.heroImage : '';
  return `<video class="w-full h-full object-cover rounded-2xl" controls playsinline preload="metadata" poster="${escapeHtml(poster)}">
    <source src="${escapeHtml(cleanUrl)}" type="video/mp4">
    <source src="${escapeHtml(cleanUrl)}" type="video/webm">
    Trình duyệt không hỗ trợ thẻ video HTML5.
  </video>`;
}

function setSampleVideo(url) {
  const input = document.getElementById('cfg-video-url');
  if (input) {
    input.value = url;
    showToast('Đã chọn video mẫu thành công!');
  }
}

function changeAudioPreset(val) {
  const customBox = document.getElementById('cfg-custom-audio-box');
  const customInput = document.getElementById('cfg-custom-audio-url');
  if (val === 'custom') {
    if (customBox) customBox.classList.remove('hidden');
    if (customInput) customInput.focus();
  } else {
    if (customBox) customBox.classList.add('hidden');
    if (customInput) customInput.value = '';
  }
}

// ==========================================
// 2C. HIỆU ỨNG CHUYỂN CẢNH, PHÔNG CHỮ & MÀU SẮC
// ==========================================
function applyTransitionEffect(transitionType) {
  const wrapper = document.getElementById('main-invitation-wrapper');
  if (!wrapper) return;

  const allTransitions = [
    'transition-cinematic-fade',
    'transition-parallax-zoom',
    'transition-slide-up',
    'transition-card-flip',
    'transition-curtain-reveal',
    'transition-soft-float',
    'transition-origami-fold',
    'transition-zoom-burst',
    'transition-ribbon-unroll'
  ];

  allTransitions.forEach(cls => wrapper.classList.remove(cls));

  const tType = transitionType || (currentConfig && currentConfig.effects && currentConfig.effects.transition) || 'cinematic-fade';
  if (tType && tType !== 'none') {
    wrapper.classList.add(`transition-${tType}`);
  }
}

function applyFontFamily(fontFamily) {
  const f = fontFamily || (currentConfig && currentConfig.effects && currentConfig.effects.fontFamily) || 'font-script';
  
  const allFonts = [
    'font-script',
    'font-alex-brush',
    'font-great-vibes',
    'font-playfair',
    'font-ephesis',
    'font-cormorant',
    'font-serif-royal',
    'font-dancing',
    'font-montserrat',
    'font-sans-vietnam',
    'font-sans'
  ];

  const targetSelectors = [
    '#envelope-couple-names',
    '#hero-groom-name',
    '#hero-bride-name',
    '#couple-signature',
    '#footer-couple-names'
  ];

  targetSelectors.forEach(sel => {
    const el = document.getElementById(sel.replace('#', ''));
    if (el) {
      allFonts.forEach(cls => el.classList.remove(cls));
      el.classList.add(f);
    }
  });
}

function applyCustomColors(primaryColor, waxColor) {
  const root = document.documentElement;
  if (primaryColor) {
    root.style.setProperty('--theme-primary', primaryColor);
    root.style.setProperty('--theme-accent', primaryColor);
  }
  if (waxColor) {
    root.style.setProperty('--theme-wax', waxColor);
    const sealIcon = document.querySelector('#envelope-overlay .animate-pulse');
    if (sealIcon) {
      sealIcon.style.background = waxColor;
    }
  }
}


// Render lưới ảnh cưới trong Album
function renderGalleryGrid(images) {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  container.innerHTML = '';
  if (!images || images.length === 0) {
    container.innerHTML = `<div class="col-span-2 text-center py-8 text-stone-400 text-xs">Chưa có ảnh nào trong album. Hãy bấm nút quản lý ảnh để thêm ảnh nhé!</div>`;
    return;
  }

  images.forEach((imgUrl, index) => {
    const item = document.createElement('div');
    // Bức ảnh thứ 3 (index 2) hoặc mỗi 5 ảnh thì dàn full 2 cột cho đẹp bố cục
    const isFullWidth = (index === 2) || (index > 4 && index % 4 === 0);
    item.className = `${isFullWidth ? 'col-span-2' : ''} overflow-hidden rounded-2xl shadow-sm cursor-pointer group bg-stone-100 relative`;
    item.onclick = function() { openLightbox(this); };

    item.innerHTML = `
      <img src="${escapeHtml(imgUrl)}" 
           alt="Ảnh cưới ${index + 1}" 
           class="w-full ${isFullWidth ? 'h-64 sm:h-80' : 'h-52 sm:h-60'} object-cover group-hover:scale-105 transition duration-500">
      <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
        <i data-lucide="zoom-in" class="w-6 h-6 drop-shadow"></i>
      </div>
    `;
    container.appendChild(item);
  });
}

// ==========================================
// 3. TIỆN ÍCH NÉN ẢNH (CANVAS COMPRESSOR)
// ==========================================
// Giúp giảm dung lượng ảnh chụp 10-20MB từ điện thoại/máy ảnh xuống cỡ ~150KB
function compressImage(file, maxDimension = 1200, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let w = img.width;
        let h = img.height;

        if (w > maxDimension || h > maxDimension) {
          if (w > h) {
            h = Math.round((h * maxDimension) / w);
            w = maxDimension;
          } else {
            w = Math.round((w * maxDimension) / h);
            h = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ==========================================
// 4. QUẢN LÝ BẢNG TÙY CHỈNH (MODAL CONFIG)
// ==========================================
function openConfigModal(activeTab) {
  const modal = document.getElementById('config-modal');
  if (!modal) return;

  // Nạp dữ liệu vào form
  const c = currentConfig;
  workingGallery = [...c.gallery];
  pendingUploads = {};

  // Tab 1
  document.getElementById('cfg-groom-name').value = c.groom.name || '';
  document.getElementById('cfg-groom-quote').value = c.groom.quote || '';
  document.getElementById('cfg-groom-father').value = c.groom.father || '';
  document.getElementById('cfg-groom-mother').value = c.groom.mother || '';

  document.getElementById('cfg-bride-name').value = c.bride.name || '';
  document.getElementById('cfg-bride-quote').value = c.bride.quote || '';
  document.getElementById('cfg-bride-father').value = c.bride.father || '';
  document.getElementById('cfg-bride-mother').value = c.bride.mother || '';

  // Tab 2
  document.getElementById('cfg-event-iso').value = c.event.dateIso ? c.event.dateIso.slice(0, 16) : '2026-11-28T11:00';
  document.getElementById('cfg-event-date-display').value = c.event.dateDisplay || '';
  document.getElementById('cfg-event-day-time').value = `${c.event.dayOfWeek} • ${c.event.timeDisplay}`;
  document.getElementById('cfg-event-lunar').value = c.event.lunarDate || '';
  document.getElementById('cfg-venue-name').value = c.event.venueName || '';
  document.getElementById('cfg-venue-hall').value = c.event.venueHall || '';
  document.getElementById('cfg-venue-address').value = c.event.venueAddress || '';
  document.getElementById('cfg-venue-maps').value = c.event.mapsUrl || '';

  // Tab 3
  document.getElementById('cfg-hero-preview').src = c.event.heroImage;
  document.getElementById('cfg-hero-url').value = c.event.heroImage;
  document.getElementById('cfg-groom-preview').src = c.groom.avatar;
  document.getElementById('cfg-groom-url').value = c.groom.avatar;
  document.getElementById('cfg-bride-preview').src = c.bride.avatar;
  document.getElementById('cfg-bride-url').value = c.bride.avatar;
  renderGalleryThumbnails();

  // Tab 4
  document.getElementById('cfg-bank-groom-name').value = c.groom.bankName || '';
  document.getElementById('cfg-bank-groom-code').value = c.groom.bankCode || '';
  document.getElementById('cfg-bank-groom-num').value = c.groom.accountNumber || '';
  document.getElementById('cfg-bank-groom-holder').value = c.groom.accountHolder || '';

  document.getElementById('cfg-bank-bride-name').value = c.bride.bankName || '';
  document.getElementById('cfg-bank-bride-code').value = c.bride.bankCode || '';
  document.getElementById('cfg-bank-bride-num').value = c.bride.accountNumber || '';
  document.getElementById('cfg-bank-bride-holder').value = c.bride.accountHolder || '';

  // Tab 5
  document.getElementById('cfg-story-message').value = c.event.storyMessage || '';

  // Tab 6: Video Cưới
  const vid = c.video || DEFAULT_CONFIG.video;
  const vidEnabledEl = document.getElementById('cfg-video-enabled');
  if (vidEnabledEl) vidEnabledEl.checked = vid.enabled !== false;
  const vidTitleEl = document.getElementById('cfg-video-title');
  if (vidTitleEl) vidTitleEl.value = vid.title || '';
  const vidSubEl = document.getElementById('cfg-video-subtitle');
  if (vidSubEl) vidSubEl.value = vid.subtitle || '';
  const vidUrlEl = document.getElementById('cfg-video-url');
  if (vidUrlEl) vidUrlEl.value = vid.url || '';

  // Tab 7: Hiệu Ứng & Phông Chữ
  const eff = c.effects || DEFAULT_CONFIG.effects;
  const effTransEl = document.getElementById('cfg-effect-transition');
  if (effTransEl) effTransEl.value = eff.transition || 'cinematic-fade';
  const effPartEl = document.getElementById('cfg-effect-particle');
  if (effPartEl) effPartEl.value = eff.particle || 'petals';
  const effFontEl = document.getElementById('cfg-font-family');
  if (effFontEl) effFontEl.value = eff.fontFamily || 'font-script';

  const effAudioEl = document.getElementById('cfg-audio-preset');
  const customAudioBox = document.getElementById('cfg-custom-audio-box');
  const customAudioUrl = document.getElementById('cfg-custom-audio-url');
  if (effAudioEl) {
    const isPreset = Array.from(effAudioEl.options).some(o => o.value === eff.audioUrl);
    if (isPreset) {
      effAudioEl.value = eff.audioUrl;
      if (customAudioBox) customAudioBox.classList.add('hidden');
    } else if (eff.audioUrl) {
      effAudioEl.value = 'custom';
      if (customAudioBox) customAudioBox.classList.remove('hidden');
      if (customAudioUrl) customAudioUrl.value = eff.audioUrl;
    }
  }

  const primaryColorEl = document.getElementById('cfg-custom-color-primary');
  if (primaryColorEl) primaryColorEl.value = eff.primaryColor || '#B87D65';
  const waxColorEl = document.getElementById('cfg-custom-color-wax');
  if (waxColorEl) waxColorEl.value = eff.waxColor || '#B87D65';

  modal.classList.remove('hidden');

  if (activeTab === 'tab-photos' || activeTab === 'photos') {
    switchConfigTab('photos');
  } else if (activeTab === 'tab-video' || activeTab === 'video') {
    switchConfigTab('video');
  } else if (activeTab === 'tab-effects' || activeTab === 'effects') {
    switchConfigTab('effects');
  } else {
    switchConfigTab('couple');
  }

  if (window.lucide) window.lucide.createIcons();
}

function closeConfigModal() {
  const modal = document.getElementById('config-modal');
  if (modal) modal.classList.add('hidden');
}

function switchConfigTab(tabName) {
  const tabs = ['couple', 'event', 'photos', 'gift', 'story', 'video', 'effects'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const panel = document.getElementById(`tab-panel-${t}`);
    if (btn && panel) {
      if (t === tabName) {
        btn.className = "px-3.5 py-2 rounded-xl transition whitespace-nowrap bg-wedding-accent text-white font-semibold shadow-sm";
        panel.classList.remove('hidden');
      } else {
        btn.className = "px-3.5 py-2 rounded-xl transition whitespace-nowrap text-stone-600 hover:bg-stone-100";
        panel.classList.add('hidden');
      }
    }
  });
  if (window.lucide) window.lucide.createIcons();
}

// Xử lý upload ảnh đơn (Hero, Chú rể, Cô dâu)
async function handleSingleUpload(input, type) {
  if (!input.files || input.files.length === 0) return;
  const file = input.files[0];
  showToast('Đang tối ưu & nén ảnh...');

  try {
    const dataUrl = await compressImage(file, 1200, 0.85);
    pendingUploads[type] = dataUrl;

    if (type === 'hero') {
      document.getElementById('cfg-hero-preview').src = dataUrl;
      document.getElementById('cfg-hero-url').value = dataUrl;
    } else if (type === 'groom') {
      document.getElementById('cfg-groom-preview').src = dataUrl;
      document.getElementById('cfg-groom-url').value = dataUrl;
    } else if (type === 'bride') {
      document.getElementById('cfg-bride-preview').src = dataUrl;
      document.getElementById('cfg-bride-url').value = dataUrl;
    }
    showToast('Đã tải ảnh lên thành công!');
  } catch (err) {
    console.error(err);
    showToast('Lỗi khi xử lý tệp ảnh!');
  }
}

function previewUrlInput(type) {
  const url = document.getElementById(`cfg-${type}-url`).value.trim();
  if (url) {
    document.getElementById(`cfg-${type}-preview`).src = url;
    pendingUploads[type] = url;
  }
}

// Xử lý upload nhiều ảnh vào Album (Multiple Gallery)
async function handleMultipleGalleryUpload(input) {
  if (!input.files || input.files.length === 0) return;
  const files = Array.from(input.files);

  showToast(`Đang tải & nén ${files.length} bức ảnh...`);

  for (const file of files) {
    try {
      const dataUrl = await compressImage(file, 1200, 0.82);
      workingGallery.push(dataUrl);
    } catch (e) {
      console.error("Lỗi nén ảnh:", e);
    }
  }

  renderGalleryThumbnails();
  showToast(`Đã thêm thành công ${files.length} ảnh vào album!`);
  input.value = ''; // Reset input để có thể chọn tiếp
}

function addGalleryUrl() {
  const input = document.getElementById('cfg-new-gallery-url');
  const url = input.value.trim();
  if (!url) return;

  workingGallery.push(url);
  input.value = '';
  renderGalleryThumbnails();
  showToast('Đã thêm ảnh vào album!');
}

function removeGalleryImage(index) {
  workingGallery.splice(index, 1);
  renderGalleryThumbnails();
}

function renderGalleryThumbnails() {
  const container = document.getElementById('cfg-gallery-thumbnails');
  const counter = document.getElementById('cfg-gallery-count');
  if (counter) counter.textContent = `${workingGallery.length} ảnh`;
  if (!container) return;

  container.innerHTML = '';
  workingGallery.forEach((imgUrl, idx) => {
    const thumb = document.createElement('div');
    thumb.className = "relative rounded-xl overflow-hidden aspect-square border border-stone-200 bg-stone-100 group";
    thumb.innerHTML = `
      <img src="${escapeHtml(imgUrl)}" class="w-full h-full object-cover">
      <button type="button" onclick="removeGalleryImage(${idx})" 
              class="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center opacity-80 hover:opacity-100 transition shadow">
        <i data-lucide="x" class="w-3.5 h-3.5"></i>
      </button>
      <span class="absolute bottom-1 left-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">#${idx + 1}</span>
    `;
    container.appendChild(thumb);
  });

  if (window.lucide) window.lucide.createIcons();
}

// Lưu & Áp Dụng Cấu Hình
function saveAndApplyConfig() {
  // 1. Chú rể
  const groomName = document.getElementById('cfg-groom-name').value.trim() || currentConfig.groom.name;
  const groomQuote = document.getElementById('cfg-groom-quote').value.trim() || currentConfig.groom.quote;
  const groomFather = document.getElementById('cfg-groom-father').value.trim() || currentConfig.groom.father;
  const groomMother = document.getElementById('cfg-groom-mother').value.trim() || currentConfig.groom.mother;

  // 2. Cô dâu
  const brideName = document.getElementById('cfg-bride-name').value.trim() || currentConfig.bride.name;
  const brideQuote = document.getElementById('cfg-bride-quote').value.trim() || currentConfig.bride.quote;
  const brideFather = document.getElementById('cfg-bride-father').value.trim() || currentConfig.bride.father;
  const brideMother = document.getElementById('cfg-bride-mother').value.trim() || currentConfig.bride.mother;

  // Tách tên ngắn
  const getShortName = (fullName) => {
    const parts = fullName.split(' ');
    return parts.length > 2 ? parts.slice(-2).join(' ') : fullName;
  };

  // 3. Sự kiện
  const dateIso = document.getElementById('cfg-event-iso').value || currentConfig.event.dateIso;
  const dateDisplay = document.getElementById('cfg-event-date-display').value.trim() || currentConfig.event.dateDisplay;
  const dayTimeRaw = document.getElementById('cfg-event-day-time').value.trim();
  let dayOfWeek = currentConfig.event.dayOfWeek;
  let timeDisplay = currentConfig.event.timeDisplay;
  if (dayTimeRaw.includes('•')) {
    const split = dayTimeRaw.split('•');
    dayOfWeek = split[0].trim();
    timeDisplay = split[1].trim();
  }

  const lunarDate = document.getElementById('cfg-event-lunar').value.trim() || currentConfig.event.lunarDate;
  const venueName = document.getElementById('cfg-venue-name').value.trim() || currentConfig.event.venueName;
  const venueHall = document.getElementById('cfg-venue-hall').value.trim() || currentConfig.event.venueHall;
  const venueAddress = document.getElementById('cfg-venue-address').value.trim() || currentConfig.event.venueAddress;
  const mapsUrl = document.getElementById('cfg-venue-maps').value.trim() || currentConfig.event.mapsUrl;
  const storyMessage = document.getElementById('cfg-story-message').value.trim() || currentConfig.event.storyMessage;

  // 4. Mừng cưới
  const bankCrName = document.getElementById('cfg-bank-groom-name').value.trim() || currentConfig.groom.bankName;
  const bankCrCode = document.getElementById('cfg-bank-groom-code').value.trim() || currentConfig.groom.bankCode;
  const bankCrNum = document.getElementById('cfg-bank-groom-num').value.trim() || currentConfig.groom.accountNumber;
  const bankCrHolder = document.getElementById('cfg-bank-groom-holder').value.trim() || currentConfig.groom.accountHolder;

  const bankCdName = document.getElementById('cfg-bank-bride-name').value.trim() || currentConfig.bride.bankName;
  const bankCdCode = document.getElementById('cfg-bank-bride-code').value.trim() || currentConfig.bride.bankCode;
  const bankCdNum = document.getElementById('cfg-bank-bride-num').value.trim() || currentConfig.bride.accountNumber;
  const bankCdHolder = document.getElementById('cfg-bank-bride-holder').value.trim() || currentConfig.bride.accountHolder;

  // 5. Ảnh
  const heroImage = pendingUploads['hero'] || document.getElementById('cfg-hero-url').value.trim() || currentConfig.event.heroImage;
  const groomAvatar = pendingUploads['groom'] || document.getElementById('cfg-groom-url').value.trim() || currentConfig.groom.avatar;
  const brideAvatar = pendingUploads['bride'] || document.getElementById('cfg-bride-url').value.trim() || currentConfig.bride.avatar;

  // 6. Video cưới kỷ niệm
  const videoEnabled = document.getElementById('cfg-video-enabled') ? document.getElementById('cfg-video-enabled').checked : true;
  const videoTitle = document.getElementById('cfg-video-title')?.value.trim() || 'Thước Phim Tình Yêu';
  const videoSubtitle = document.getElementById('cfg-video-subtitle')?.value.trim() || '';
  const videoUrl = document.getElementById('cfg-video-url')?.value.trim() || '';

  // 7. Hiệu ứng & Phông chữ & Nhạc
  const effectTransition = document.getElementById('cfg-effect-transition')?.value || 'cinematic-fade';
  const effectParticle = document.getElementById('cfg-effect-particle')?.value || 'petals';
  const effectFont = document.getElementById('cfg-font-family')?.value || 'font-script';
  
  let audioUrl = document.getElementById('cfg-audio-preset')?.value || (currentConfig.effects && currentConfig.effects.audioUrl);
  if (audioUrl === 'custom') {
    audioUrl = document.getElementById('cfg-custom-audio-url')?.value.trim() || (currentConfig.effects && currentConfig.effects.audioUrl);
  }
  const primaryColor = document.getElementById('cfg-custom-color-primary')?.value || (currentConfig.effects && currentConfig.effects.primaryColor) || '#B87D65';
  const waxColor = document.getElementById('cfg-custom-color-wax')?.value || (currentConfig.effects && currentConfig.effects.waxColor) || '#B87D65';

  // Cập nhật state
  currentConfig = {
    groom: {
      ...currentConfig.groom,
      name: groomName,
      shortName: getShortName(groomName),
      quote: groomQuote,
      father: groomFather,
      mother: groomMother,
      avatar: groomAvatar,
      bankName: bankCrName,
      bankCode: bankCrCode,
      accountNumber: bankCrNum,
      accountHolder: bankCrHolder
    },
    bride: {
      ...currentConfig.bride,
      name: brideName,
      shortName: getShortName(brideName),
      quote: brideQuote,
      father: brideFather,
      mother: brideMother,
      avatar: brideAvatar,
      bankName: bankCdName,
      bankCode: bankCdCode,
      accountNumber: bankCdNum,
      accountHolder: bankCdHolder
    },
    event: {
      ...currentConfig.event,
      heroImage: heroImage,
      dateIso: dateIso,
      dateDisplay: dateDisplay,
      dayOfWeek: dayOfWeek,
      timeDisplay: timeDisplay,
      lunarDate: lunarDate,
      venueName: venueName,
      venueHall: venueHall,
      venueAddress: venueAddress,
      mapsUrl: mapsUrl,
      storyMessage: storyMessage
    },
    video: {
      enabled: videoEnabled,
      title: videoTitle,
      subtitle: videoSubtitle,
      url: videoUrl
    },
    effects: {
      transition: effectTransition,
      particle: effectParticle,
      fontFamily: effectFont,
      audioUrl: audioUrl,
      primaryColor: primaryColor,
      waxColor: waxColor
    },
    gallery: workingGallery
  };

  // Cập nhật nhạc nền ngay lập tức nếu đổi link bài hát
  const audioEl = document.getElementById('wedding-audio');
  if (audioEl && audioUrl && !audioEl.src.includes(audioUrl)) {
    audioEl.src = audioUrl;
  }

  saveConfigToStorage(currentConfig);
  
  // Gửi lên server để lưu vào config.json và build thiep-cuoi.html cho thiết bị di động
  fetch('/api/save-config', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(currentConfig)
  }).then(res => res.json()).then(data => {
    console.log("Server response:", data);
  }).catch(() => {
    // Chế độ tĩnh hoặc không có server API
  });

  renderEntirePage();
  closeConfigModal();
  triggerWeddingConfetti();
  showToast('Đã lưu & cập nhật thiệp cưới thành công!');
}

function resetToDefaultConfig() {
  if (confirm("Bạn có chắc chắn muốn khôi phục về nội dung và ảnh mẫu ban đầu không?")) {
    currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    try {
      localStorage.removeItem('wedding_invitation_config_v2');
    } catch (e) {}
    renderEntirePage();
    closeConfigModal();
    showToast('Đã khôi phục cài đặt mặc định!');
  }
}

// ==========================================
// 5. CÁ NHÂN HÓA TÊN KHÁCH MỜI
// ==========================================
function initGuestPersonalization() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestParam = urlParams.get('to') || urlParams.get('guest') || urlParams.get('khach');
  
  if (guestParam) {
    const cleanGuestName = guestParam.trim();
    const guestPreview = document.getElementById('guest-name-preview');
    const guestHero = document.getElementById('guest-name-hero');
    const rsvpName = document.getElementById('rsvp-name');

    if (guestPreview) guestPreview.textContent = cleanGuestName;
    if (guestHero) guestHero.textContent = cleanGuestName;
    if (rsvpName) rsvpName.value = cleanGuestName;
  }
}

// ==========================================
// 6. MỞ THIỆP & PHÁT NHẠC
// ==========================================
function initEnvelopeOpener() {
  const openBtn = document.getElementById('open-envelope-btn');
  const overlay = document.getElementById('envelope-overlay');
  const audio = document.getElementById('wedding-audio');
  const vinyl = document.getElementById('vinyl-disc');

  if (!openBtn || !overlay) return;

  openBtn.addEventListener('click', () => {
    triggerWeddingConfetti();

    if (audio) {
      audio.play().then(() => {
        if (vinyl) vinyl.classList.add('spin-music');
      }).catch(err => {
        console.log("Autoplay bị hạn chế:", err);
      });
    }

    overlay.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 700);
  });
}

function initMusicPlayer() {
  const musicBtn = document.getElementById('music-btn');
  const audio = document.getElementById('wedding-audio');
  const vinyl = document.getElementById('vinyl-disc');

  if (!musicBtn || !audio) return;

  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      if (vinyl) vinyl.classList.add('spin-music');
      showToast('Đang phát nhạc nền');
    } else {
      audio.pause();
      if (vinyl) vinyl.classList.remove('spin-music');
      showToast('Đã tạm dừng nhạc');
    }
  });
}

// ==========================================
// 7. ĐẾM NGƯỢC THỜI GIAN THỰC
// ==========================================
function initCountdown() {
  function update() {
    const isoString = currentConfig.event.dateIso || '2026-11-28T11:00';
    const targetDate = new Date(isoString).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-minutes').textContent = '00';
      document.getElementById('cd-seconds').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (num) => String(num).padStart(2, '0');

    const elDays = document.getElementById('cd-days');
    const elHours = document.getElementById('cd-hours');
    const elMin = document.getElementById('cd-minutes');
    const elSec = document.getElementById('cd-seconds');

    if (elDays) elDays.textContent = pad(days);
    if (elHours) elHours.textContent = pad(hours);
    if (elMin) elMin.textContent = pad(minutes);
    if (elSec) elSec.textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// ==========================================
// 8. HIỆU ỨNG HẠT RƠI (PETALS, HEARTS, SNOW, SPARKLES, FIREFLIES)
// ==========================================
let currentParticleType = 'petals';

function applyParticleEffect(particleType) {
  currentParticleType = particleType || (currentConfig && currentConfig.effects && currentConfig.effects.particle) || 'petals';
}

function initFallingPetals() {
  const container = document.getElementById('petals-container');
  if (!container) return;

  function createParticle() {
    if (currentParticleType === 'none') return;

    // 1. Trái tim bay tình yêu
    if (currentParticleType === 'hearts') {
      const heart = document.createElement('div');
      heart.className = 'particle-heart';
      const heartSymbols = ['❤️', '💖', '💕', '💓', '🌸'];
      heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      heart.style.left = `${Math.random() * 95}vw`;
      heart.style.fontSize = `${Math.random() * 10 + 14}px`;
      heart.style.animationDuration = `${Math.random() * 3 + 5}s`;
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 8000);
      return;
    }

    // 2. Bông tuyết mùa đông
    if (currentParticleType === 'snow') {
      const snow = document.createElement('div');
      snow.className = 'particle-snow';
      const size = Math.random() * 6 + 4;
      snow.style.width = `${size}px`;
      snow.style.height = `${size}px`;
      snow.style.left = `${Math.random() * 100}vw`;
      snow.style.animationDuration = `${Math.random() * 4 + 6}s`;
      container.appendChild(snow);
      setTimeout(() => snow.remove(), 10000);
      return;
    }

    // 3. Bụi sao vàng lấp lánh (Gold Sparkles)
    if (currentParticleType === 'gold-sparkles') {
      const sparkle = document.createElement('div');
      sparkle.className = 'particle-sparkle';
      const size = Math.random() * 6 + 4;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.animationDuration = `0.8s, ${Math.random() * 3 + 5}s`;
      container.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 8000);
      return;
    }

    // 4. Đom đóm đêm kỳ ảo (Fireflies)
    if (currentParticleType === 'fireflies') {
      const ff = document.createElement('div');
      ff.className = 'particle-firefly';
      ff.style.left = `${Math.random() * 95}vw`;
      ff.style.top = `${Math.random() * 85 + 5}vh`;
      ff.style.animationDuration = `2.5s, ${Math.random() * 5 + 7}s`;
      container.appendChild(ff);
      setTimeout(() => ff.remove(), 12000);
      return;
    }

    // 5. Mặc định: Cánh hoa rơi lãng mạn (Petals)
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 10 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${Math.random() * 4 + 6}s`;
    petal.style.opacity = (Math.random() * 0.4 + 0.3).toString();

    const colors = (typeof activePetalColors !== 'undefined' && activePetalColors.length > 0)
      ? activePetalColors 
      : ['#fbcfe8', '#f472b6', '#fed7aa', '#fde047', '#fecdd3'];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 10000);
  }

  setInterval(createParticle, 750);
}

// ==========================================
// 9. CONFETTI CHÚC MỪNG
// ==========================================
function triggerWeddingConfetti() {
  if (typeof confetti !== 'function') return;

  const count = 200;
  const defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, { spread: 26, startVelocity: 55, colors: ['#D4AF37', '#B87D65', '#FAF7F2'] });
  fire(0.2, { spread: 60, colors: ['#e11d48', '#fb7185', '#fda4af'] });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

// ==========================================
// 10. SỔ LƯU BÚT (GUESTBOOK)
// ==========================================
const DEFAULT_WISHES = [
  {
    name: "Hoàng Long & Thu Hương",
    text: "Chúc hai bạn trăm năm hạnh phúc, mãi mãi đồng lòng và yêu thương nhau như ngày đầu!",
    time: "2 giờ trước"
  },
  {
    name: "Anh Tuấn (Bạn chú rể)",
    text: "Chúc mừng người anh em đã chính thức 'theo nàng về dinh'! Chúc tổ ấm nhỏ luôn rộn vang tiếng cười.",
    time: "Hôm qua"
  },
  {
    name: "Huyền Trang & Nhóm bạn cấp 3",
    text: "Cô dâu xinh đẹp tuyệt vời! Chúc hai vợ chồng sớm có thêm thiên thần nhỏ nhé!",
    time: "2 ngày trước"
  }
];

function initGuestbook() {
  const form = document.getElementById('wishes-form');
  const list = document.getElementById('wishes-list');
  if (!list) return;

  let wishes = [];
  try {
    const saved = localStorage.getItem('wedding_wishes_huy_linh');
    wishes = saved ? JSON.parse(saved) : DEFAULT_WISHES;
  } catch (e) {
    wishes = DEFAULT_WISHES;
  }

  function renderWishes() {
    list.innerHTML = '';
    wishes.forEach(item => {
      const card = document.createElement('div');
      card.className = "bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-sm text-xs";
      card.innerHTML = `
        <div class="flex items-center justify-between mb-1.5">
          <strong class="font-serif text-sm text-stone-800">${escapeHtml(item.name)}</strong>
          <span class="text-[10px] text-stone-400">${item.time || 'Vừa xong'}</span>
        </div>
        <p class="text-stone-600 leading-relaxed font-sans">${escapeHtml(item.text)}</p>
      `;
      list.appendChild(card);
    });
  }

  renderWishes();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('wish-author').value.trim();
      const text = document.getElementById('wish-text').value.trim();

      if (!author || !text) return;

      const newWish = { name: author, text: text, time: 'Vừa xong' };
      wishes.unshift(newWish);
      try {
        localStorage.setItem('wedding_wishes_huy_linh', JSON.stringify(wishes));
      } catch (e) {}

      renderWishes();
      form.reset();
      showToast('Cảm ơn lời chúc ngọt ngào của bạn!');
      triggerWeddingConfetti();
    });
  }
}

// ==========================================
// 11. RSVP FORM
// ==========================================
function initRSVPForm() {
  const form = document.getElementById('rsvp-form');
  const successBox = document.getElementById('rsvp-success');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('rsvp-name').value.trim();
    const attending = form.querySelector('input[name="attending"]:checked')?.value;
    const count = document.getElementById('rsvp-count').value;
    const message = document.getElementById('rsvp-message').value.trim();

    const responseData = { name, attending, count, message, timestamp: new Date().toISOString() };
    try {
      const existing = JSON.parse(localStorage.getItem('wedding_rsvp_huy_linh') || '[]');
      existing.push(responseData);
      localStorage.setItem('wedding_rsvp_huy_linh', JSON.stringify(existing));
    } catch (e) {}

    form.classList.add('hidden');
    if (successBox) successBox.classList.remove('hidden');

    triggerWeddingConfetti();
    showToast('Xác nhận thành công! Rất mong được đón tiếp bạn.');
  });
}

// ==========================================
// 12. TẠO LINK GỬI KHÁCH CÁ NHÂN HÓA
// ==========================================
function initShareModal() {
  const shareBtn = document.getElementById('btn-share-modal');
  const modal = document.getElementById('share-modal');
  const closeBtn = document.getElementById('close-share-modal');
  const inputName = document.getElementById('input-guest-name');
  const outputUrl = document.getElementById('output-guest-url');
  const sampleMsg = document.getElementById('sample-message-text');
  const qrImg = document.getElementById('guest-qr-image');

  if (!shareBtn || !modal) return;

  function updateOutput() {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    // Nếu chạy cục bộ thì dùng IP mạng LAN 192.168.31.79 để điện thoại quét mở được
    const host = isLocal ? '192.168.31.79:8080' : window.location.host;
    const protocol = window.location.protocol.startsWith('http') ? window.location.protocol : 'http:';
    const baseUrl = `${protocol}//${host}${window.location.pathname}`;

    const name = inputName.value.trim() || 'Bạn & Người thương';
    const personalizedUrl = `${baseUrl}?to=${encodeURIComponent(name)}`;
    const coupleText = `${currentConfig.groom.shortName || currentConfig.groom.name} & ${currentConfig.bride.shortName || currentConfig.bride.name}`;

    outputUrl.value = personalizedUrl;
    sampleMsg.value = `Thương gửi ${name},\n${coupleText} trân trọng kính mời bạn đến chung vui cùng gia đình chúng mình vào ${currentConfig.event.dayOfWeek}, ${currentConfig.event.dateDisplay}.\nXem thiệp mời trực tiếp tại:\n${personalizedUrl}\nRất mong được đón tiếp bạn! ❤️`;

    // Cập nhật mã QR để quét xem trực tiếp trên điện thoại
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(personalizedUrl)}`;
    }
  }

  shareBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    updateOutput();
  });

  if (closeBtn) closeBtn.addEventListener('click', () => { modal.classList.add('hidden'); });
  if (inputName) inputName.addEventListener('input', updateOutput);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
}

function copyGuestUrl() {
  const outputUrl = document.getElementById('output-guest-url');
  if (outputUrl && outputUrl.value) {
    copyToClipboard(outputUrl.value, 'Đã sao chép đường link thiệp!');
  }
}

function copySampleMessage() {
  const sampleMsg = document.getElementById('sample-message-text');
  if (sampleMsg && sampleMsg.value) {
    copyToClipboard(sampleMsg.value, 'Đã sao chép tin nhắn Zalo/SMS!');
  }
}

// ==========================================
// 13. SAO CHÉP STK THEO CHỦ THỂ
// ==========================================
function copyAccount(type) {
  if (type === 'groom') {
    copyToClipboard(currentConfig.groom.accountNumber, `Đã sao chép STK Chú Rể (${currentConfig.groom.bankName})!`);
  } else {
    copyToClipboard(currentConfig.bride.accountNumber, `Đã sao chép STK Cô Dâu (${currentConfig.bride.bankName})!`);
  }
}

// ==========================================
// 14. LIGHTBOX & GOOGLE CALENDAR
// ==========================================
function openLightbox(el) {
  const img = el.querySelector('img');
  if (!img) return;

  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');

  if (modal && modalImg) {
    modalImg.src = img.src;
    modal.classList.remove('hidden');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.add('hidden');
}

function addToCalendar() {
  const c = currentConfig;
  const title = encodeURIComponent(`Lễ Thành Hôn: ${c.groom.shortName || c.groom.name} & ${c.bride.shortName || c.bride.name}`);
  const details = encodeURIComponent(`Trân trọng kính mời bạn đến dự lễ thành hôn và tiệc cưới tại ${c.event.venueName}!`);
  const location = encodeURIComponent(`${c.event.venueName}, ${c.event.venueAddress}`);

  let startTime = "20261128T040000Z";
  let endTime = "20261128T070000Z";

  if (c.event.dateIso) {
    try {
      const d = new Date(c.event.dateIso);
      const isoStart = new Date(d.getTime() - (7 * 3600 * 1000)); // sang UTC
      startTime = isoStart.toISOString().replace(/-|:|\.\d\d\d/g, "");
      const isoEnd = new Date(isoStart.getTime() + (3 * 3600 * 1000));
      endTime = isoEnd.toISOString().replace(/-|:|\.\d\d\d/g, "");
    } catch(e) {}
  }

  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  window.open(googleCalUrl, '_blank');
}

// ==========================================
// 15. TIỆN ÍCH COPY & TOAST
// ==========================================
function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg || 'Đã sao chép vào bộ nhớ tạm!');
  }).catch(() => {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast(successMsg || 'Đã sao chép vào bộ nhớ tạm!');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 2800);
}

function escapeHtml(string) {
  if (!string) return '';
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

// ==========================================
// 16. XUẤT FILE HTML TĨNH ĐỘC LẬP (STANDALONE HTML EXPORT)
// ==========================================
async function exportStaticHtml() {
  showToast('Đang đóng gói file HTML tĩnh...');

  // Lưu lại cấu hình mới nhất từ form nếu đang mở modal
  const modal = document.getElementById('config-modal');
  if (modal && !modal.classList.contains('hidden')) {
    saveAndApplyConfig();
  }

  try {
    // 1. Lấy mã nguồn CSS
    let cssText = `
html { scroll-behavior: smooth; }
@keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.spin-music { animation: spin-slow 4s linear infinite; }
@keyframes subtleZoom { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
.animate-subtle-zoom { animation: subtleZoom 25s ease-in-out infinite alternate; }
.petal { position: absolute; background-color: #ffd1dc; border-radius: 150% 0 150% 0; opacity: 0.6; pointer-events: none; animation: fall linear forwards; }
@keyframes fall { 0% { top: -10%; transform: translateX(0) rotate(0deg); } 100% { top: 110%; transform: translateX(80px) rotate(360deg); } }
.envelope-opening { transform: scale(1.1); opacity: 0; pointer-events: none; }
#wishes-list::-webkit-scrollbar { width: 4px; }
#wishes-list::-webkit-scrollbar-track { background: #f1ede8; border-radius: 4px; }
#wishes-list::-webkit-scrollbar-thumb { background: #d4b8a8; border-radius: 4px; }
button, a { -webkit-tap-highlight-color: transparent; }
`;

    // 2. Lấy HTML hiện tại của trang
    let htmlContent = document.documentElement.outerHTML;

    // Nhúng CSS vào thay cho thẻ link style.css
    htmlContent = htmlContent.replace(
      /<link rel="stylesheet" href="style\.css">/i,
      `<style>\n${cssText}\n</style>`
    );

    // 3. Đảm bảo DOCTYPE đầy đủ
    if (!htmlContent.startsWith('<!DOCTYPE html>')) {
      htmlContent = '<!DOCTYPE html>\n' + htmlContent;
    }

    // 4. Lấy mã script và thay DEFAULT_CONFIG thành cấu hình tùy chỉnh mới nhất
    let jsCode = '';
    try {
      const res = await fetch('script.js');
      if (res.ok) {
        jsCode = await res.text();
      }
    } catch (e) {
      console.log("Không thể fetch trực tiếp script.js, sử dụng script nhúng dự phòng");
    }

    if (jsCode) {
      // Thay thế biến DEFAULT_CONFIG trong script bằng currentConfig hiện tại
      const bakedConfig = `const DEFAULT_CONFIG = ${JSON.stringify(currentConfig, null, 2)};`;
      jsCode = jsCode.replace(/const DEFAULT_CONFIG = \{[\s\S]*?\n\};\n/, bakedConfig + '\n');

      htmlContent = htmlContent.replace(
        /<script src="script\.js"><\/script>/i,
        `<script>\n${jsCode}\n</script>`
      );
    }

    // 5. Tạo tên file thân thiện theo tên Cô dâu & Chú rể
    const removeAccents = (str) => {
      return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .replace(/[^a-zA-Z0-9]/g, '-')
        .toLowerCase()
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    };

    const crName = removeAccents(currentConfig.groom.shortName || 'chure');
    const cdName = removeAccents(currentConfig.bride.shortName || 'codau');
    const filename = `thiep-cuoi-${crName}-${cdName}.html`;

    // 6. Kích hoạt tải về tự động
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = url;
    downloadAnchor.download = filename;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(url);

    showToast(`Đã xuất file thành công: ${filename}`);
  } catch (err) {
    console.error("Lỗi xuất file HTML tĩnh:", err);
    showToast('Có lỗi xảy ra khi xuất file HTML!');
  }
}

// ==========================================
// 17. BỘ CHUYỂN ĐỔI 1.000 MẪU THIỆP CƯỚI CHUYÊN NGHIỆP (1,000 TEMPLATES ENGINE)
// ==========================================
let activePetalColors = ['#fbcfe8', '#f472b6', '#fed7aa', '#fde047', '#fecdd3'];
let activeCategoryFilter = 'all';
let currentTemplatePage = 1;
const TEMPLATES_PER_PAGE = 24;
let currentFilteredTemplates = [];

function initTemplateEngine() {
  const tId = currentConfig.templateId || 11;
  applyTemplate(tId, true);
  renderCategoryPills();
  filterTemplates();
}

function applyTemplate(templateId, isInit = false) {
  if (typeof WEDDING_TEMPLATES === 'undefined') return;
  const tmpl = WEDDING_TEMPLATES.find(t => t.id === templateId) || WEDDING_TEMPLATES[10];
  if (!tmpl) return;

  currentConfig.templateId = tmpl.id;

  // Cập nhật biến CSS trên Document
  const root = document.documentElement;
  root.style.setProperty('--theme-primary', tmpl.theme.primary);
  root.style.setProperty('--theme-secondary', tmpl.theme.secondary);
  root.style.setProperty('--theme-accent', tmpl.theme.accent);
  root.style.setProperty('--theme-text', tmpl.theme.text);
  root.style.setProperty('--theme-wax', tmpl.theme.envelopeWax);
  root.style.setProperty('--theme-card-bg', tmpl.theme.cardBg);

  // Cập nhật màu cánh hoa rơi
  if (tmpl.theme.petals && tmpl.theme.petals.length > 0) {
    activePetalColors = tmpl.theme.petals;
  }

  // Cập nhật hiệu ứng chuyển cảnh độc quyền của mẫu nếu có
  if (tmpl.transition) {
    currentConfig.effects = currentConfig.effects || {};
    currentConfig.effects.transition = tmpl.transition;
    applyTransitionEffect(tmpl.transition);
  }

  // Cập nhật hiệu ứng hạt rơi tương ứng của mẫu nếu có
  if (tmpl.particle) {
    currentConfig.effects = currentConfig.effects || {};
    currentConfig.effects.particle = tmpl.particle;
    applyParticleEffect(tmpl.particle);
  }

  // Cập nhật background wrapper thiệp
  const wrapper = document.getElementById('main-invitation-wrapper');
  if (wrapper) {
    wrapper.className = `max-w-xl mx-auto min-h-screen bg-gradient-to-b ${tmpl.theme.bg} shadow-2xl relative pb-28 border-x border-stone-200/40 transition-all duration-500`;
  }

  // Cập nhật màu con dấu sáp
  const sealIcon = document.querySelector('#envelope-overlay .animate-pulse');
  if (sealIcon) {
    sealIcon.style.background = tmpl.theme.envelopeWax;
  }

  // Cập nhật tên mẫu đang chọn
  const displayLabel = document.getElementById('current-template-name-display');
  if (displayLabel) {
    displayLabel.textContent = `${tmpl.name} (#${tmpl.id})`;
  }

  if (!isInit) {
    saveConfigToStorage(currentConfig);
    // Gửi sync server
    fetch('/api/save-config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentConfig)
    }).catch(() => {});

    triggerWeddingConfetti();
    showToast(`Đã áp dụng mẫu #${tmpl.id}: ${tmpl.name}!`);
    renderTemplatePage();
  }
}

function openTemplateModal() {
  const modal = document.getElementById('template-picker-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  renderCategoryPills();
  filterTemplates();
  if (window.lucide) window.lucide.createIcons();
}

function closeTemplateModal() {
  const modal = document.getElementById('template-picker-modal');
  if (!modal) return;
  modal.classList.add('hidden');
}

function renderCategoryPills() {
  const container = document.getElementById('template-category-pills');
  if (!container || typeof WEDDING_CATEGORIES === 'undefined') return;

  container.innerHTML = '';
  WEDDING_CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    const isActive = activeCategoryFilter === cat.id;
    btn.className = `px-3 py-1.5 rounded-full transition whitespace-nowrap flex items-center gap-1.5 font-medium ${
      isActive 
        ? 'bg-wedding-accent text-white shadow-sm' 
        : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
    }`;
    btn.innerHTML = `<span>${cat.name}</span>`;
    btn.onclick = () => {
      activeCategoryFilter = cat.id;
      renderCategoryPills();
      filterTemplates();
    };
    container.appendChild(btn);
  });
}

function filterTemplates() {
  const searchInput = document.getElementById('template-search-input');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  if (typeof WEDDING_TEMPLATES === 'undefined') return;

  currentFilteredTemplates = WEDDING_TEMPLATES.filter(t => {
    const matchCat = (activeCategoryFilter === 'all') || (t.category === activeCategoryFilter);
    const matchQuery = !query || 
      t.name.toLowerCase().includes(query) || 
      t.desc.toLowerCase().includes(query) || 
      t.tag.toLowerCase().includes(query) ||
      (t.transition && t.transition.toLowerCase().includes(query)) ||
      (t.particle && t.particle.toLowerCase().includes(query));
    return matchCat && matchQuery;
  });

  currentTemplatePage = 1;
  renderTemplatePage();
}

function renderTemplatePage() {
  const grid = document.getElementById('template-grid-container');
  const countDisplay = document.getElementById('template-count-display');
  const loadMoreBox = document.getElementById('template-load-more-box');
  if (!grid) return;

  const totalCount = currentFilteredTemplates.length;
  const totalAll = typeof WEDDING_TEMPLATES !== 'undefined' ? WEDDING_TEMPLATES.length : 1000;
  const itemsToShow = currentFilteredTemplates.slice(0, currentTemplatePage * TEMPLATES_PER_PAGE);

  if (countDisplay) {
    countDisplay.textContent = `Hiển thị ${itemsToShow.length}/${totalCount} mẫu (Tổng kho ${totalAll.toLocaleString()} mẫu)`;
  }

  if (loadMoreBox) {
    if (itemsToShow.length < totalCount) {
      loadMoreBox.classList.remove('hidden');
    } else {
      loadMoreBox.classList.add('hidden');
    }
  }

  renderTemplateGrid(itemsToShow);
}

function loadMoreTemplates() {
  currentTemplatePage++;
  renderTemplatePage();
}

function getFilteredTemplates() {
  return currentFilteredTemplates;
}

function renderTemplateGrid(list) {
  const grid = document.getElementById('template-grid-container');
  if (!grid) return;

  grid.innerHTML = '';
  if (!list || list.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-12 text-stone-400 text-xs">Không tìm thấy mẫu thiệp phù hợp. Hãy thử từ khóa khác!</div>`;
    return;
  }

  list.forEach(t => {
    const isCurrent = (currentConfig.templateId || 11) === t.id;
    const card = document.createElement('div');
    card.className = `rounded-2xl border p-3 flex flex-col justify-between transition-all duration-300 bg-white shadow-sm hover:shadow-md ${
      isCurrent ? 'ring-2 ring-wedding-accent border-wedding-accent' : 'border-stone-200 hover:border-wedding-accent/50'
    }`;

    // Icon mô tả hạt rơi
    const particleIcon = t.particle === 'hearts' ? '❤️' :
                         t.particle === 'snow' ? '❄️' :
                         t.particle === 'gold-sparkles' ? '✨' :
                         t.particle === 'fireflies' ? '🌟' : '🌸';

    card.innerHTML = `
      <div class="space-y-2.5">
        <div class="relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-100">
          <img src="${escapeHtml(t.thumb)}" alt="${escapeHtml(t.name)}" class="w-full h-full object-cover" loading="lazy">
          <span class="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/65 backdrop-blur-sm text-white">
            #${t.id} • ${escapeHtml(t.tag)}
          </span>
          ${isCurrent ? '<span class="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-500 text-white shadow">Đang dùng</span>' : ''}
        </div>

        <div>
          <div class="flex items-center justify-between gap-1">
            <h4 class="font-serif font-bold text-sm text-stone-900 line-clamp-1">${escapeHtml(t.name)}</h4>
            <span class="text-xs shrink-0" title="Hạt rơi: ${t.particle}">${particleIcon}</span>
          </div>
          <p class="text-[11px] text-stone-500 line-clamp-2 mt-0.5">${escapeHtml(t.desc)}</p>
        </div>

        <!-- Badges hiệu ứng chuyển cảnh & màu sắc -->
        <div class="flex flex-wrap items-center gap-1.5 pt-0.5">
          <span class="text-[9px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 font-mono">🎬 ${t.transition || 'cinematic'}</span>
          <div class="flex items-center gap-1 ml-auto">
            <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner" style="background:${t.theme.primary}" title="Chủ đạo"></span>
            <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner" style="background:${t.theme.secondary}" title="Màu phụ"></span>
            <span class="w-3.5 h-3.5 rounded-full border border-black/10 shadow-inner" style="background:${t.theme.envelopeWax}" title="Màu con dấu"></span>
          </div>
        </div>
      </div>

      <div class="pt-3 border-t border-stone-100 mt-3">
        <button onclick="applyTemplate(${t.id})" 
                class="w-full py-2 px-3 rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1.5 ${
                  isCurrent 
                    ? 'bg-green-50 text-green-700 border border-green-200 cursor-default' 
                    : 'bg-wedding-accent hover:bg-stone-800 text-white shadow-sm'
                }">
          ${isCurrent ? '<i data-lucide="check" class="w-3.5 h-3.5"></i> Đang kích hoạt' : 'Áp dụng mẫu này'}
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}
