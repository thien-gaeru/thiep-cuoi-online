const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/imdot/.gemini/antigravity/scratch/thiep-cuoi-online';

// 1. DANH MỤC THIỆP (CATEGORIES) - BỔ SUNG DANH MỤC TIÊU ĐIỂM: 100 MẪU BAO THƯ HOA THEO VIDEO TIKTOK
const CATEGORIES = [
  { 
    id: 'korean_envelope', 
    name: '🌸 100 Mẫu Bao Thư Hoa & Hàn Quốc (Theo Video TikTok)', 
    icon: 'mail-open', 
    archetype: 'korean-envelope', 
    defaultFont: 'font-cormorant', 
    borderStyle: 'korean-tinted', 
    headerStyle: 'korean-envelope-flower', 
    avatarFrame: 'polaroid-tilted' 
  },
  { id: 'traditional', name: 'Truyền Thống Á Đông & Cổ Điển', icon: 'heart', archetype: 'oriental-silk', defaultFont: 'font-cormorant', borderStyle: 'oriental-fretwork', headerStyle: 'song-hy', avatarFrame: 'circle-gold' },
  { id: 'floral', name: 'Hoa Cỏ & Botanical Garden', icon: 'flower-2', archetype: 'botanical-garden', defaultFont: 'font-alex-brush', borderStyle: 'deckle-scallop', headerStyle: 'botanical-wreath', avatarFrame: 'petal-organic' },
  { id: 'luxury', name: 'Hoàng Gia, Luxury & Gold Foil', icon: 'crown', archetype: 'royal-luxury', defaultFont: 'font-cormorant', borderStyle: 'double-gold', headerStyle: 'royal-crest', avatarFrame: 'cathedral-arch' },
  { id: 'rustic', name: 'Rustic, Mộc Mạc & Giấy Kraft', icon: 'feather', archetype: 'rustic-kraft', defaultFont: 'font-dancing', borderStyle: 'dashed-stitch', headerStyle: 'kraft-stamp', avatarFrame: 'polaroid-tape' },
  { id: 'minimalist', name: 'Tối Giản Hiện Đại & Scandinavian', icon: 'layout', archetype: 'editorial-vogue', defaultFont: 'font-playfair', borderStyle: 'hairline-minimal', headerStyle: 'editorial-masthead', avatarFrame: 'square-minimal' },
  { id: 'ocean', name: 'Biển Xanh & Mùa Hè Nhiệt Đới', icon: 'waves', archetype: 'ocean-breeze', defaultFont: 'font-great-vibes', borderStyle: 'sea-wave', headerStyle: 'seashell-crest', avatarFrame: 'circle-cyan' },
  { id: 'pastel', name: 'Pastel Dịu Ngọt & Sweet Romance', icon: 'palette', archetype: 'pastel-sweet', defaultFont: 'font-great-vibes', borderStyle: 'scalloped-sweet', headerStyle: 'ribbon-bow', avatarFrame: 'soft-rounded' },
  { id: 'watercolor', name: 'Màu Nước & Tranh Hội Họa', icon: 'brush', archetype: 'watercolor-canvas', defaultFont: 'font-ephesis', borderStyle: 'deckle-edge', headerStyle: 'watercolor-splash', avatarFrame: 'artist-oval' },
  { id: 'celestial', name: 'Dạ Hội, Ngân Hà & Starlight', icon: 'moon', archetype: 'celestial-galaxy', defaultFont: 'font-cormorant', borderStyle: 'stardust-glow', headerStyle: 'celestial-moon', avatarFrame: 'circle-stars' },
  { id: 'trendy', name: 'Xu Hướng Gen Z, Y2K & Retro', icon: 'zap', archetype: 'wedding-newspaper', defaultFont: 'font-playfair', borderStyle: 'newspaper-rules', headerStyle: 'newspaper-headline', avatarFrame: 'news-column' },
  { id: 'fairytale', name: 'Cổ Tích Lãng Mạn & Lâu Đài Châu Âu', icon: 'sparkles', archetype: 'french-rococo', defaultFont: 'font-ephesis', borderStyle: 'rococo-scroll', headerStyle: 'french-cameo', avatarFrame: 'oval-cameo' },
  { id: 'autumn', name: 'Mùa Thu Vàng & Lá Phong Trầm Ấm', icon: 'wind', archetype: 'autumn-amber', defaultFont: 'font-cormorant', borderStyle: 'amber-border', headerStyle: 'maple-garland', avatarFrame: 'rounded-amber' },
  { id: 'winter', name: 'Mùa Đông Trắng & Bông Tuyết Lạnh', icon: 'snowflake', archetype: 'winter-frost', defaultFont: 'font-playfair', borderStyle: 'frost-crystal', headerStyle: 'snowflake-crest', avatarFrame: 'ice-crystal' },
  { id: 'vintage_era', name: 'Cổ Điển Retro 1920-1970s', icon: 'film', archetype: 'boarding-pass', defaultFont: 'font-sans-vietnam', borderStyle: 'ticket-perforation', headerStyle: 'boarding-pass', avatarFrame: 'ticket-notch' },
  { id: 'broadway', name: 'Nghệ Thuật Sân Khấu & Broadway Glam', icon: 'music', archetype: 'art-deco', defaultFont: 'font-playfair', borderStyle: 'art-deco-chevron', headerStyle: 'gatsby-arch', avatarFrame: 'octagon-deco' },
  { id: 'zen', name: 'Thiền Định, Wabi-Sabi & Zen Garden', icon: 'sun', archetype: 'zen-enso', defaultFont: 'font-cormorant', borderStyle: 'zen-clean', headerStyle: 'enso-seal', avatarFrame: 'circle-enso' },
  { id: 'glassmorphism', name: 'Pha Lê, Thủy Tinh & Glassmorphism', icon: 'shield', archetype: 'glassmorphism', defaultFont: 'font-sans-vietnam', borderStyle: 'frosted-acrylic', headerStyle: 'glass-pill', avatarFrame: 'glass-rounded' },
  { id: 'wine_gala', name: 'Tiệc Rượu Vang & Đêm Dạ Vũ Gala', icon: 'wine', archetype: 'wine-gala', defaultFont: 'font-playfair', borderStyle: 'velvet-wine', headerStyle: 'wine-crest', avatarFrame: 'circle-wine' },
  { id: 'highland', name: 'Cao Nguyên, Rừng Thông & Đồi Chè', icon: 'mountain', archetype: 'coffee-book', defaultFont: 'font-cormorant', borderStyle: 'book-spine', headerStyle: 'leather-bookmark', avatarFrame: 'book-corner' },
  { id: 'cinematic', name: 'Điện Ảnh & Cuộn Phim Tình Yêu', icon: 'camera', archetype: 'cinema-film', defaultFont: 'font-playfair', borderStyle: 'film-sprocket', headerStyle: 'clapperboard', avatarFrame: 'sprocket-frame' }
];

// 100 Ý TƯỞNG CONCEPTS CHO PHONG CÁCH TIKTOK MINH ANH (10 BỘ X 10 MẪU)
const KOREAN_100_CONCEPTS = [
  // Nhóm 1: Cẩm Tú Cầu & Lavender Mist (Minh Anh Signature)
  { name: "Bao Thư Hoa Cẩm Tú Cầu - Minh Anh Signature (Bản Gốc TikTok)", flower: "Cẩm Tú Cầu & Lavender", quote: "Tình yêu không cần hoàn hảo, chỉ cần chân thật và cùng nhau đi hết con đường.", envColor: "#FADCE2", pri: "#D88A96", sec: "#3B4B5F", acc: "#C9707E" },
  { name: "Cẩm Tú Cầu Hồng Phấn & Mây Trắng", flower: "Cẩm Tú Cầu Hồng Phấn", quote: "Gặp gỡ là duyên, ở bên nhau là định mệnh, trân trọng nhau là tình yêu.", envColor: "#FBE4E8", pri: "#E098A4", sec: "#455A70", acc: "#D48290" },
  { name: "Cẩm Tú Cầu Xanh Lam & Sương Mai", flower: "Cẩm Tú Cầu Xanh Lam", quote: "Em là tất cả những dịu dàng mà thế giới này dành tặng cho anh.", envColor: "#E2EEF9", pri: "#6D94BC", sec: "#364A5E", acc: "#5B84AE" },
  { name: "Cẩm Tú Cầu Tím Mộng & Lavender", flower: "Lavender & Cẩm Tú Cầu Tím", quote: "Cảm ơn vì giữa hàng triệu người, chúng mình đã tìm thấy nhau.", envColor: "#EFE6FA", pri: "#9683B8", sec: "#38314A", acc: "#8A74AF" },
  { name: "Cẩm Tú Cầu Trắng Tinh Khôi & Peony", flower: "Cẩm Tú Cầu Trắng & Peony", quote: "Hạnh phúc đơn giản là cùng anh thức giấc mỗi sáng và thấy nụ cười em.", envColor: "#F5EFE6", pri: "#B3987A", sec: "#3D3935", acc: "#A38666" },
  { name: "Cẩm Tú Cầu & Baby Breath Bồng Bềnh", flower: "Baby Breath & Tú Cầu", quote: "Từ hôm nay, hai chúng ta cùng viết tiếp câu chuyện tình yêu trọn đời.", envColor: "#FAF2F4", pri: "#D39AA6", sec: "#3C4856", acc: "#C58392" },
  { name: "Cẩm Tú Cầu Pastel Nude & Cúc Họa Mi", flower: "Cúc Họa Mi & Tú Cầu", quote: "Nắm tay anh đi qua bao giông bão, để thấy bình yên ở phía cuối con đường.", envColor: "#F9ECE5", pri: "#CC8B74", sec: "#423833", acc: "#BF7961" },
  { name: "Cẩm Tú Cầu Hoàng Gia & Nhũ Vàng", flower: "Tú Cầu Dát Vàng", quote: "Sự hiện diện của bạn là lời chúc phúc quý giá nhất trong ngày trọng đại.", envColor: "#F7F0E4", pri: "#C49A45", sec: "#2E2A24", acc: "#B58832" },
  { name: "Cẩm Tú Cầu Trà Đào & Mộc Lan", flower: "Mộc Lan & Trà Đào", quote: "Yêu không chỉ là nhìn nhau, mà là cùng nhau nhìn về một hướng.", envColor: "#FCECE4", pri: "#DE8F75", sec: "#3E3B39", acc: "#CF7B60" },
  { name: "Cẩm Tú Cầu & Khuynh Diệp Xanh Mướt", flower: "Khuynh Diệp & Tú Cầu", quote: "Tình yêu là khi ở bên cạnh một người, bạn luôn cảm thấy được là chính mình.", envColor: "#E5ECE6", pri: "#668B6E", sec: "#2C3D30", acc: "#53775C" },

  // Nhóm 2: Calla Lily Tinh Khôi & Hồng Trà Nude
  { name: "Calla Lily Trắng Kiêu Sa & Hồng Trà Nude", flower: "Calla Lily Trắng", quote: "Một đời an yên, cùng anh đi hết đoạn đường năm tháng dài rộng.", envColor: "#F5E8E4", pri: "#C78C7B", sec: "#3E3634", acc: "#B87967" },
  { name: "Calla Lily & Nhành Olive Địa Trung Hải", flower: "Calla Lily & Nhành Olive", quote: "Tình yêu bắt đầu từ một ánh nhìn, và kéo dài đến trọn một kiếp người.", envColor: "#EAECE4", pri: "#78876E", sec: "#333A2F", acc: "#66765B" },
  { name: "Calla Lily Vàng Nhạt & Champagne Silk", flower: "Calla Lily Champagne", quote: "Có nhau trong đời là món quà tuyệt diệu nhất mà cuộc sống ban tặng.", envColor: "#F7F2E7", pri: "#B59F7A", sec: "#38332A", acc: "#A58C65" },
  { name: "Calla Lily Đen Tuyền Sang Trọng & Minimalist", flower: "Black Calla Lily Minimal", quote: "Trong biển người bao la, ánh mắt em là bến đỗ duy nhất của anh.", envColor: "#EAE8E6", pri: "#4A4644", sec: "#1C1A19", acc: "#383432" },
  { name: "Calla Lily Hồng Cam & Gió Đầu Mùa", flower: "Calla Lily Hồng Cam", quote: "Chỉ cần là anh, muộn một chút cũng không sao.", envColor: "#FDECE5", pri: "#D6866F", sec: "#453833", acc: "#C47159" },
  { name: "Calla Lily & Lá Bạc Silver Dollar", flower: "Lá Bạc & Calla Lily", quote: "Cùng nhau già đi chính là điều lãng mạn nhất trên thế gian này.", envColor: "#E9ECF0", pri: "#7C8E9E", sec: "#313840", acc: "#6A7C8C" },
  { name: "Calla Lily Tinh Tuyển & Lụa Tơ Tằm", flower: "Calla Lily & Lụa Tơ Tằm", quote: "Hôn nhân là lời hứa trọn đời được xây đắp bằng sự thấu hiểu và sẻ chia.", envColor: "#FAF4ED", pri: "#BFA483", sec: "#3D352B", acc: "#AE916F" },
  { name: "Calla Lily Thuần Khiết & Hương Bưởi", flower: "Calla Lily & Hương Bưởi", quote: "Em là nắng ấm xua tan mùa đông lạnh giá trong trái tim anh.", envColor: "#F6F5ED", pri: "#999676", sec: "#3A392A", acc: "#878462" },
  { name: "Calla Lily & Hoa Cát Tường Dịu Êm", flower: "Calla Lily & Cát Tường", quote: "Hạnh phúc không ở đâu xa, hạnh phúc chính là ở cạnh người mình thương.", envColor: "#F9ECEF", pri: "#C48698", sec: "#3F3238", acc: "#B27284" },
  { name: "Calla Lily Sunset & Nắng Chiều Hoàng Hôn", flower: "Calla Lily Sunset", quote: "Dưới ánh hoàng hôn rực rỡ, anh hứa sẽ yêu em đến ngày tận cùng.", envColor: "#FCE8DF", pri: "#D3795C", sec: "#442E24", acc: "#C06446" },

  // Nhóm 3: White Tulip & Baby Blue Seoul
  { name: "White Tulip & Baby Blue Seoul", flower: "Tulip Trắng Hà Lan", quote: "Anh muốn mỗi ngày trôi qua đều có em bên cạnh, cùng đón bình minh.", envColor: "#E1EEFA", pri: "#5F8EBD", sec: "#2D3F52", acc: "#4C7CAE" },
  { name: "Tulip Trắng Hà Lan & Cúc Tana Mộng Mơ", flower: "Tulip & Cúc Tana", quote: "Tình yêu chân chính là khi hai tâm hồn hòa chung một nhịp đập.", envColor: "#F0F4E8", pri: "#7A9E6B", sec: "#32422C", acc: "#688D58" },
  { name: "Tulip Hồng Pastel & Trái Tim Vẽ Tay", flower: "Tulip Hồng Pastel", quote: "Em không cần là một nàng công chúa, chỉ cần là người duy nhất của anh.", envColor: "#FCE7EC", pri: "#DB7B91", sec: "#452C33", acc: "#C9657D" },
  { name: "Tulip Vàng Nắng Sớm & Kem Sữa", flower: "Tulip Vàng Ban Mai", quote: "Nụ cười của em thắp sáng cả bầu trời ngày cưới hôm nay.", envColor: "#FAF5E4", pri: "#C7A653", sec: "#3E341B", acc: "#B5923E" },
  { name: "Tulip Tím Khói & Bầu Trời Mùa Thu", flower: "Tulip Tím Khói", quote: "Thời gian có thể trôi qua, nhưng tình yêu anh dành cho em là mãi mãi.", envColor: "#EDE7F6", pri: "#8E79B5", sec: "#352B47", acc: "#7C65A5" },
  { name: "Tulip Cam Đào & Vườn Nắng Nhỏ", flower: "Tulip Cam Đào", quote: "Mỗi khoảnh khắc có em đều biến thành một trang thơ lãng mạn.", envColor: "#FDEEE6", pri: "#E28B6D", sec: "#473026", acc: "#D07656" },
  { name: "Tulip Đỏ Thắm & Bao Thư Đỏ Tơ Hồng", flower: "Tulip Đỏ Nồng Nàn", quote: "Nguyện cùng em se tơ kết tóc, trăm năm hòa hợp đến đầu bạc răng long.", envColor: "#FCE4E6", pri: "#C84358", sec: "#421C22", acc: "#B23045" },
  { name: "Tulip Đen Huyền Bí & Phong Cách Vogue", flower: "Tulip Đen Editorial", quote: "Tình yêu của chúng mình là một kiệt tác nghệ thuật độc nhất vô nhị.", envColor: "#EAE7E5", pri: "#544E4C", sec: "#23201F", acc: "#413C3A" },
  { name: "Tulip Trắng Cố Đô & Khung Ảnh Cũ", flower: "Tulip Cố Đô", quote: "Giữa những ồn ào phố thị, anh tìm thấy sự tĩnh lặng ngọt ngào nơi em.", envColor: "#F4F1EA", pri: "#968A78", sec: "#38322A", acc: "#847764" },
  { name: "Vườn Tulip Tình Yêu & Gió Biển Dịu Mát", flower: "Tulip Biển Xanh", quote: "Sóng có thể dạt dào xô bờ, nhưng tình anh dành cho em luôn phẳng lặng bền sâu.", envColor: "#E3F1F4", pri: "#5B96A3", sec: "#2A4146", acc: "#478290" },

  // Nhóm 4: Eucalyptus & Sage Green Mộc Mạc
  { name: "Eucalyptus & Sage Green Mộc Mạc", flower: "Lá Bạch Đàn Eucalyptus", quote: "Tình yêu mộc mạc như hơi thở sớm mai, nhẹ nhàng mà sâu đậm.", envColor: "#E3ECE5", pri: "#61846A", sec: "#2C3E31", acc: "#4E7358" },
  { name: "Nhành Khuynh Diệp Bạc & Mộc Lan Trắng", flower: "Khuynh Diệp & Mộc Lan", quote: "Cảm ơn em đã bước vào cuộc đời anh và biến mọi điều trở nên kỳ diệu.", envColor: "#E8EFEA", pri: "#72927C", sec: "#334438", acc: "#5F8069" },
  { name: "Eucalyptus & Cúc Chamomile Tươi Mới", flower: "Cúc Chamomile & Lá Bạc", quote: "Bình yên nhất là sau một ngày dài được trở về bên vòng tay ấm của anh.", envColor: "#EEF3E9", pri: "#809A72", sec: "#36442F", acc: "#6E8960" },
  { name: "Eucalyptus Vườn Rừng & Giấy Kraft Nâu", flower: "Khuynh Diệp & Giấy Kraft", quote: "Chúng mình cùng nhau trồng cây hạnh phúc, để tình yêu đơm hoa kết trái.", envColor: "#EAE7E0", pri: "#857864", sec: "#3D362C", acc: "#726551" },
  { name: "Eucalyptus & Hoa Hồng Trắng Bụi", flower: "Hồng Trắng Bụi & Eucalyptus", quote: "Tình yêu không đếm số ngày bên nhau, mà đếm những kỷ niệm khó phai.", envColor: "#EBF1ED", pri: "#6B8B75", sec: "#2E3F33", acc: "#577761" },
  { name: "Eucalyptus & Cành Thảo Mộc Rosemary", flower: "Rosemary & Eucalyptus", quote: "Hương thảo mộc lưu giữ ký ức ngọt ngào của ngày hai ta về chung một nhà.", envColor: "#E5EBE6", pri: "#5E7C67", sec: "#2A392F", acc: "#4B6A54" },
  { name: "Eucalyptus & Bụi Sao Vàng Lấp Lánh", flower: "Eucalyptus Bụi Vàng", quote: "Dưới bầu trời ngàn sao, em là ngôi sao sáng nhất dẫn lối cuộc đời anh.", envColor: "#F4F1E6", pri: "#9A8C57", sec: "#3B351E", acc: "#877843" },
  { name: "Eucalyptus Đồi Thông Sương Mù Đà Lạt", flower: "Đồi Thông & Eucalyptus", quote: "Giữa sương lạnh cao nguyên, hơi ấm bàn tay em sưởi ấm tâm hồn anh.", envColor: "#E0E9E6", pri: "#577F76", sec: "#273D38", acc: "#446C63" },
  { name: "Eucalyptus & Trà Xanh Matcha Bình Yên", flower: "Matcha & Eucalyptus", quote: "Vị ngọt ngào của tình yêu lắng đọng như chén trà thơm sau cơn mưa.", envColor: "#E8EFE4", pri: "#729065", sec: "#32432B", acc: "#5F7E52" },
  { name: "Eucalyptus Giọt Sương Sớm & Bình Minh", flower: "Sương Sớm & Eucalyptus", quote: "Chào ngày mới, chào hành trình mới của hai trái tim đập chung một nhịp.", envColor: "#EAF2EE", pri: "#608978", sec: "#2B4036", acc: "#4C7564" },

  // Nhóm 5: Peony Mẫu Đơn & Champagne Nude
  { name: "Mẫu Đơn Hồng Phấn & Champagne Nude", flower: "Mẫu Đơn Hồng Phấn", quote: "Em là bông hoa mẫu đơn kiêu hãnh nở rộ trong khu vườn trái tim anh.", envColor: "#F8ECE9", pri: "#C9887C", sec: "#45312C", acc: "#B87568" },
  { name: "Mẫu Đơn Bạch Ngọc & Dát Vàng Hoàng Kim", flower: "Mẫu Đơn Bạch Ngọc", quote: "Tình yêu cao quý như vàng mười thử lửa, càng qua thử thách càng sáng trong.", envColor: "#F7F2E7", pri: "#C4A25A", sec: "#3D3119", acc: "#B39045" },
  { name: "Mẫu Đơn Đỏ Nhung & Dải Lụa Đỏ Cát Tường", flower: "Mẫu Đơn Đỏ Nhung", quote: "Màu đỏ cát tường chúc cho uyên ương sắt son trăm năm duyên thắm.", envColor: "#FBE3E6", pri: "#B83248", sec: "#41151D", acc: "#A32238" },
  { name: "Mẫu Đơn Cam Đào & Hoàng Hôn Ấm Áp", flower: "Mẫu Đơn Cam Đào", quote: "Ánh hoàng hôn dịu ngọt như nụ hôn đầu anh trao em dưới mái hiên xưa.", envColor: "#FDECE3", pri: "#D68165", sec: "#452C23", acc: "#C46E51" },
  { name: "Mẫu Đơn Tím Nhạt & Giọt Mưa Đầu Mùa", flower: "Mẫu Đơn Tím Nhạt", quote: "Mưa rơi ngoài hiên, nhưng trong lòng anh ngập tràn ánh nắng vì có em.", envColor: "#F2EBF9", pri: "#9C7BBF", sec: "#3A2A4A", acc: "#8A66AF" },
  { name: "Mẫu Đơn Coral Nổi Bật & Phong Cách Hàn", flower: "Mẫu Đơn Coral", quote: "Sự hiện diện của em là điều rạng rỡ nhất từng xảy ra trong cuộc đời anh.", envColor: "#FDEAE6", pri: "#DF7666", sec: "#482620", acc: "#CD6251" },
  { name: "Mẫu Đơn Vườn Thượng Uyển Cung Đình", flower: "Mẫu Đơn Cung Đình", quote: "Tình yêu hoàng gia tráng lệ kết tinh từ những điều bình dị, chân thành nhất.", envColor: "#FAF2E6", pri: "#BC965E", sec: "#3E2F1C", acc: "#A9834A" },
  { name: "Mẫu Đơn Trắng Muốt & Vòng Hoa Nguyện Ước", flower: "Mẫu Đơn Trắng Muốt", quote: "Trong bộ váy cưới trắng tinh khôi, em là cô dâu xinh đẹp nhất thế gian.", envColor: "#F9F6F0", pri: "#A89C8A", sec: "#3B352D", acc: "#968A77" },
  { name: "Mẫu Đơn & Rượu Champagne Nổ Bọt", flower: "Mẫu Đơn & Champagne", quote: "Nâng ly chúc mừng ngày tình yêu đôi ta đơm hoa kết trái ngọt lành.", envColor: "#F7F0E6", pri: "#BCA173", sec: "#3E3321", acc: "#AA8D5D" },
  { name: "Mẫu Đơn Nở Rộ & Bản Tình Ca Bất Hủ", flower: "Mẫu Đơn Nở Rộ", quote: "Lời bài hát có thể quên, nhưng giai điệu tình yêu hai ta sẽ ngân vang mãi mãi.", envColor: "#F9EAEF", pri: "#C87C95", sec: "#432530", acc: "#B76882" },

  // Nhóm 6: Lavender Mist & Oải Hương Lãng Mạn
  { name: "Lavender Mist & Oải Hương Lãng Mạn", flower: "Oải Hương Lavender", quote: "Màu tím thủy chung nhắc nhở anh luôn giữ trọn lời thề son sắt.", envColor: "#F0E8F8", pri: "#8E75B5", sec: "#322744", acc: "#7C61A5" },
  { name: "Oải Hương Khô & Nến Thơm Mùa Đông", flower: "Oải Hương Khô", quote: "Mùi hương ấm áp như tình yêu che chở cho em qua những mùa đông dài.", envColor: "#EDE7F2", pri: "#82719B", sec: "#30283C", acc: "#715E8B" },
  { name: "Lavender & Sương Mù Provence Pháp", flower: "Lavender Provence", quote: "Tình yêu đưa ta du hành qua những cánh đồng hoa tím biếc ngát hương.", envColor: "#EFE6FA", pri: "#957CC0", sec: "#34264A", acc: "#8469B1" },
  { name: "Lavender Tím Thẫm & Phong Bì Tím Pastel", flower: "Lavender Tím Thẫm", quote: "Trân trọng từng giây phút bên em, bởi đó là món quà vô giá của cuộc đời.", envColor: "#ECE2F8", pri: "#7C5CAE", sec: "#2D1D45", acc: "#6B499F" },
  { name: "Lavender & Hoa Thạch Thảo Tím Dịu", flower: "Thạch Thảo & Lavender", quote: "Thạch thảo tím nhỏ bé nhưng tình yêu chúng mình kiên cường bền chặt.", envColor: "#F3EDFA", pri: "#A58ED0", sec: "#3A2F4F", acc: "#937ABE" },
  { name: "Lavender & Hoa Bằng Lăng Kỷ Niệm", flower: "Bằng Lăng & Lavender", quote: "Mùa hạ năm ấy anh gặp em, và tình yêu cứ thế nảy nở đến hôm nay.", envColor: "#F5EAF8", pri: "#A870BD", sec: "#3C2145", acc: "#965CA9" },
  { name: "Lavender Trăng Tròn & Đêm Sao Nguyện Ước", flower: "Lavender Dưới Trăng", quote: "Dưới vầng trăng sáng chứng giám, anh nguyện yêu em trọn đời trọn kiếp.", envColor: "#E9E3F5", pri: "#7B6B9E", sec: "#2A233A", acc: "#69588C" },
  { name: "Lavender Đồi Núi Thơ Mộng & Gió Chiều", flower: "Lavender Đồi Cao", quote: "Cùng em đi tới chân trời góc bể, nơi nào có em nơi đó là nhà.", envColor: "#EEE6F7", pri: "#8A74B1", sec: "#322745", acc: "#78619F" },
  { name: "Lavender & Tách Cà Phê Chiều Mưa", flower: "Lavender & Cà Phê", quote: "Một ngụm cà phê ấm, một bờ vai tựa đầu, thế là trọn vẹn bình yên.", envColor: "#ECE5E1", pri: "#7D6B63", sec: "#342A25", acc: "#6B5850" },
  { name: "Lavender Khúc Tình Ca & Hoàng Hôn Tím", flower: "Lavender Hoàng Hôn", quote: "Hoàng hôn tím khép lại một ngày, mở ra một đời son sắt bên nhau.", envColor: "#F1E7F6", pri: "#936FA8", sec: "#362241", acc: "#815C96" },

  // Nhóm 7: Apricot Peach & Cúc Họa Mi Đầu Mùa
  { name: "Apricot Peach & Cúc Họa Mi Đầu Mùa", flower: "Cúc Họa Mi & Apricot", quote: "Mỗi đóa họa mi trắng ngần như tình yêu thuần khiết anh trao gửi em.", envColor: "#FDEFE8", pri: "#DA8D73", sec: "#45322A", acc: "#C8785E" },
  { name: "Cúc Họa Mi Thuần Khiết & Gió Heo May Hà Nội", flower: "Cúc Họa Mi Hà Nội", quote: "Gió heo may thổi về, báo tin mùa cưới, mùa hạnh phúc của hai chúng mình.", envColor: "#F9F6EE", pri: "#ADA07C", sec: "#3B3525", acc: "#9C8E67" },
  { name: "Apricot Vàng Bơ & Nắng Mùa Thu Rực Rỡ", flower: "Apricot Vàng Bơ", quote: "Nắng thu rót mật vào tim, cho tình yêu đơm hoa rực rỡ nhất trần gian.", envColor: "#FBF3DE", pri: "#CEAB53", sec: "#3F3316", acc: "#BC983D" },
  { name: "Cúc Họa Mi & Lá Phong Vàng Rơi", flower: "Họa Mi & Lá Phong", quote: "Lá vàng rơi ngập lối, nhưng lối đi của hai ta luôn ngập tràn ánh sáng.", envColor: "#FCEEE3", pri: "#D3885C", sec: "#452C1D", acc: "#C17446" },
  { name: "Apricot & Hoa Cát Tường Cam Dịu", flower: "Cát Tường Cam & Apricot", quote: "Chúc cho hai ta bách niên giai lão, cuộc sống luôn êm đềm như nắng mai.", envColor: "#FDF0E9", pri: "#DB8C75", sec: "#473129", acc: "#C9775F" },
  { name: "Cúc Họa Mi & Giỏ Hoa Xe Đạp Phố Cổ", flower: "Họa Mi Phố Cổ", quote: "Chiếc xe đạp chở đầy hoa và chở cả ước mơ về một mái ấm gia đình.", envColor: "#F8F4EC", pri: "#9A9079", sec: "#363228", acc: "#887D65" },
  { name: "Apricot Nắng Chiều & Khung Cửa Sổ Nhỏ", flower: "Apricot Nắng Chiều", quote: "Khung cửa sổ nhỏ mở ra cả thế giới khi có nụ cười em đón chào.", envColor: "#FDEEE7", pri: "#D9856D", sec: "#452A22", acc: "#C67157" },
  { name: "Cúc Họa Mi Trắng & Dải Băng Keo Washi", flower: "Họa Mi Washi Tape", quote: "Những kỷ niệm xinh xắn dán chặt vào trái tim, không bao giờ phai mờ.", envColor: "#F7F5EE", pri: "#9F957F", sec: "#39342A", acc: "#8C816A" },
  { name: "Apricot & Chiếc Bánh Ngọt Tình Yêu", flower: "Apricot Ngọt Ngào", quote: "Vị ngọt của tình yêu là gia vị thơm ngon nhất cho cuộc sống hôn nhân.", envColor: "#FDF1E6", pri: "#DD9575", sec: "#483226", acc: "#CA805E" },
  { name: "Cúc Họa Mi & Nụ Cười Em Mùa Yêu", flower: "Cúc Họa Mi Mùa Yêu", quote: "Nụ cười em chính là lý do khiến anh muốn trở thành phiên bản tốt hơn.", envColor: "#FAF7EE", pri: "#AAA082", sec: "#3C372A", acc: "#978C6E" },

  // Nhóm 8: Desert Rose & Warm Terracotta Boho
  { name: "Desert Rose & Warm Terracotta Boho", flower: "Hồng Sa Mạc & Cỏ Lau", quote: "Tình yêu kiên cường vượt qua bão cát sa mạc để nở hoa rực rỡ.", envColor: "#F6E4DC", pri: "#C4765E", sec: "#422820", acc: "#B1624A" },
  { name: "Cỏ Lau Đuôi Chồn & Hoàng Hôn Sa Mạc", flower: "Cỏ Lau Đuôi Chồn", quote: "Cỏ lau mềm mại uốn mình theo gió, như tình yêu bao dung và nhường nhịn.", envColor: "#F5E9DF", pri: "#B78667", sec: "#3E2C20", acc: "#A57252" },
  { name: "Hồng Sa Mạc Khô & Gốm Nung Địa Trung Hải", flower: "Hồng Khô Terracotta", quote: "Như bình gốm qua lửa đỏ, tình yêu qua thử thách càng thêm bền chắc.", envColor: "#F4DFD5", pri: "#B65E46", sec: "#3C1F16", acc: "#A34A32" },
  { name: "Terracotta & Lá Cọ Khô Bohemia", flower: "Lá Cọ Khô Boho", quote: "Một tình yêu tự do, phóng khoáng nhưng luôn hướng về một mái nhà chung.", envColor: "#F6E8DE", pri: "#B37D5D", sec: "#3E291C", acc: "#9F6A4A" },
  { name: "Hồng Gai Kiêu Hãnh & Nắng Gió Miền Tây", flower: "Hồng Gai Sa Mạc", quote: "Vượt qua gai góc cuộc đời, anh tìm thấy bông hồng quý giá nhất là em.", envColor: "#F8E6E0", pri: "#BD6E5B", sec: "#41241C", acc: "#A95845" },
  { name: "Terracotta & Lửa Trại Đêm Trăng Ấm Cúng", flower: "Terracotta Ấm Cúng", quote: "Ngọn lửa tình yêu sẽ sưởi ấm mái ấm chúng mình qua mọi giông gió.", envColor: "#F7E1D4", pri: "#C86443", sec: "#442115", acc: "#B55030" },
  { name: "Hồng Đất Nồng Nàn & Sợi Dây Gai Mộc", flower: "Hồng Đất & Dây Gai", quote: "Gắn kết giản đơn mà bền chặt, trói chặt hai trái tim bằng tình thương.", envColor: "#F4E3DC", pri: "#B37361", sec: "#3C261F", acc: "#A05F4D" },
  { name: "Terracotta & Vườn Xương Rồng Nở Hoa", flower: "Hoa Xương Rồng Sa Mạc", quote: "Bất kể hoàn cảnh nào, tình yêu hai ta cũng sẽ đâm chồi nảy lộc.", envColor: "#F1E5DA", pri: "#8E8262", sec: "#332E20", acc: "#7B6F50" },
  { name: "Hồng Sa Mạc & Bản Du Ca Tự Do", flower: "Du Ca Sa Mạc", quote: "Cùng em hát khúc ca tình yêu trên khắp nẻo đường cuộc đời thênh thang.", envColor: "#F5E4DA", pri: "#BC7A5C", sec: "#3F281D", acc: "#A86548" },
  { name: "Terracotta Trầm Ấm & Mái Nhà Bình Yên", flower: "Mái Nhà Terracotta", quote: "Nơi nào có tình yêu và tiếng cười, nơi đó chính là thiên đường trên mặt đất.", envColor: "#F4E2D8", pri: "#B86C52", sec: "#3E2218", acc: "#A4573D" },

  // Nhóm 9: Lily of the Valley & Pearl Ivory Hoàng Gia
  { name: "Lily of the Valley & Pearl Ivory Hoàng Gia", flower: "Linh Lan Chuông Trắng", quote: "Chuông hoa linh lan rung lên khúc nhạc báo hiệu hạnh phúc trở về.", envColor: "#F8F6F2", pri: "#969485", sec: "#34332D", acc: "#828071" },
  { name: "Chuông Gió Linh Lan & Hạnh Phúc Trở Lại", flower: "Linh Lan Hạnh Phúc", quote: "Sau những ngày tháng chờ đợi, hạnh phúc ngọt ngào đã nở hoa viên mãn.", envColor: "#F5F7F2", pri: "#7C8D75", sec: "#2D352A", acc: "#687B62" },
  { name: "Linh Lan Trắng & Giọt Sương Pha Lê", flower: "Linh Lan Giọt Sương", quote: "Tình yêu trong trẻo như giọt sương đọng trên cánh hoa ban mai.", envColor: "#F7F8F6", pri: "#8E9A92", sec: "#313834", acc: "#7A877E" },
  { name: "Pearl Ivory & Váy Cưới Lụa Satin Tinh Khôi", flower: "Lụa Satin & Linh Lan", quote: "Từng đường tơ lụa ôm ấp giấc mơ về một ngày trọng đại thiêng liêng.", envColor: "#FAF8F5", pri: "#ACA598", sec: "#3D3933", acc: "#999183" },
  { name: "Linh Lan & Vòng Nguyệt Quế Tinh Tế", flower: "Vòng Nguyệt Quế Linh Lan", quote: "Vương miện tình yêu trao tặng người xứng đáng nhất cùng anh đi trọn đời.", envColor: "#F4F7F3", pri: "#7B927E", sec: "#2B372D", acc: "#677F6A" },
  { name: "Pearl Ivory & Ánh Nến Lung Linh Thánh Đường", flower: "Ánh Nến & Linh Lan", quote: "Lời thề nguyền dưới ánh nến lung linh sẽ là kim chỉ nam cho hôn nhân hai ta.", envColor: "#FBF7EE", pri: "#BAA774", sec: "#3E3622", acc: "#A89460" },
  { name: "Linh Lan Trong Suốt & Kính Mờ Thủy Tinh", flower: "Linh Lan Kính Mờ", quote: "Trái tim em trong suốt để anh nhìn thấy tình yêu chân thật nhất.", envColor: "#F2F6F7", pri: "#7B929B", sec: "#2B363B", acc: "#667E88" },
  { name: "Pearl Ivory & Dấu Sáp Trắng Ngà Quý Tộc", flower: "Dấu Sáp & Linh Lan", quote: "Niêm phong lời hẹn ước bằng tình yêu son sắt của cả một đời.", envColor: "#FAF7F2", pri: "#A49989", sec: "#3A352D", acc: "#928675" },
  { name: "Linh Lan Khúc Nhạc Bình Minh & Nắng Ban Mai", flower: "Bình Minh Linh Lan", quote: "Mỗi sớm mai thức dậy là một ngày mới được yêu em nhiều hơn hôm qua.", envColor: "#F8F6EE", pri: "#969075", sec: "#353226", acc: "#837C61" },
  { name: "Pearl Ivory Vĩnh Cửu & Lời Thề Dưới Thánh Giá", flower: "Lời Thề Linh Lan", quote: "Trước sự chứng giám của trời đất và gia đình, anh xin hứa trọn đời bên em.", envColor: "#FAF8F3", pri: "#A89E8D", sec: "#3A362E", acc: "#958A78" },

  // Nhóm 10: Burgundy Romance & Hồng Nhung Quý Phái
  { name: "Burgundy Romance & Hồng Nhung Quý Phái", flower: "Hồng Nhung Đỏ Thẫm", quote: "Màu đỏ rượu vang say đắm như men say tình yêu anh dành cho em.", envColor: "#F9E4E8", pri: "#932036", sec: "#381017", acc: "#7E1428" },
  { name: "Hồng Nhung Đỏ Thẫm & Tiệc Rượu Vang Đêm", flower: "Hồng Nhung Dạ Tiệc", quote: "Nâng ly rượu nồng mừng ngày đôi ta sánh bước vào thánh đường tình yêu.", envColor: "#F8DFE4", pri: "#8E1D32", sec: "#360E15", acc: "#7A1225" },
  { name: "Burgundy & Dải Nhung Mềm Mại Cát Tường", flower: "Dải Nhung & Hồng Đỏ", quote: "Tình yêu nồng ấm xua tan mọi giá lạnh, mãi mãi thắm nồng như thuở ban đầu.", envColor: "#F7DEE5", pri: "#9B263D", sec: "#3D111B", acc: "#861A2F" },
  { name: "Hồng Nhung & Ánh Đèn Chùm Pha Lê Lâu Đài", flower: "Pha Lê & Hồng Nhung", quote: "Ánh đèn pha lê lộng lẫy soi tỏ nụ cười hạnh phúc nhất của em.", envColor: "#FAE5E7", pri: "#9E293F", sec: "#3E131C", acc: "#8B1E33" },
  { name: "Burgundy & Bản Giao Hưởng Tình Yêu Nồng Cháy", flower: "Giao Hưởng Burgundy", quote: "Mỗi nốt nhạc ngân vang là một lời thì thầm yêu thương anh gửi đến em.", envColor: "#F6DCE2", pri: "#901C31", sec: "#350C14", acc: "#7B1224" },
  { name: "Hồng Nhung Dưới Nến & Dạ Tiệc Mùa Đông", flower: "Hồng Nhung Dưới Nến", quote: "Đêm mùa đông ấm áp lạ kỳ bởi trong tim hai ta luôn có nhau.", envColor: "#F8DFE3", pri: "#8B2335", sec: "#381018", acc: "#771727" },
  { name: "Burgundy Quyến Rũ & Mùi Hương Nước Hoa Nồng Nàn", flower: "Hồng Quyến Rũ Burgundy", quote: "Hương thơm tình yêu ngây ngất dẫn lối hai tâm hồn hòa vào một thể.", envColor: "#F9E1E7", pri: "#96233B", sec: "#3B101A", acc: "#82182D" },
  { name: "Hồng Nhung & Chiếc Nhẫn Đính Hôn Kim Cương", flower: "Nhẫn Kim Cương & Hồng Nhung", quote: "Chiếc nhẫn tròn trên ngón tay là lời hẹn ước không bao giờ thay đổi.", envColor: "#FCE8EB", pri: "#A32D44", sec: "#421620", acc: "#8E2036" },
  { name: "Burgundy Hoàng Hôn Biển Sâu & Lửa Tình", flower: "Hoàng Hôn Burgundy", quote: "Ngọn lửa tình yêu đôi ta sẽ bùng cháy mãi cùng năm tháng dài lâu.", envColor: "#F7DEE2", pri: "#912336", sec: "#381018", acc: "#7D182A" },
  { name: "Bách Niên Hạnh Phúc - Minh Anh & Hữu Quốc Trọn Đời", flower: "Bách Niên Hồng Nhung", quote: "Trăm năm hòa hợp, đầu bạc răng long, mãi mãi bên nhau không rời.", envColor: "#FADCE2", pri: "#9C243B", sec: "#390F19", acc: "#88192D" }
];

// PHOTO MẪU TỪ UNSPLASH
const PHOTOS = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80"
];

// NẠP 20 DANH MỤC TRƯỚC ĐÓ TỪ generate-1000-templates.js ĐỂ BẢO TOÀN
const oldGenContent = fs.readFileSync(path.join(dir, 'generate-1000-templates.js'), 'utf8');

// TÁCH CATEGORY_CONCEPTS CỦA 20 BỘ SƯU TẬP CŨ
let oldConcepts = {};
try {
  const match = oldGenContent.match(/const CATEGORY_CONCEPTS = (\{[\s\S]*?\n\};)/);
  if (match) {
    eval('oldConcepts = ' + match[1]);
  }
} catch (e) {
  console.error('Không thể đọc oldConcepts:', e);
}

// KHỞI TẠO MẢNG MẪU THIỆP
const allTemplates = [];
let currentId = 1;

// 1. TẠO 100 MẪU PHONG CÁCH TIKTOK MINH ANH (ID: 1 -> 100)
KOREAN_100_CONCEPTS.forEach((c, idx) => {
  const photo = PHOTOS[idx % PHOTOS.length];
  allTemplates.push({
    id: currentId,
    name: c.name,
    concept: c.name,
    category: 'korean_envelope',
    categoryName: '🌸 100 Mẫu Bao Thư Hoa & Hàn Quốc (Theo Video TikTok)',
    archetype: 'korean-envelope',
    borderStyle: 'korean-tinted',
    headerStyle: 'korean-envelope-flower',
    avatarFrame: 'polaroid-tilted',
    fontFamily: (idx % 3 === 0) ? 'font-cormorant' : ((idx % 3 === 1) ? 'font-playfair' : 'font-alex-brush'),
    tag: idx === 0 ? 'Bản Gốc TikTok' : ((idx < 10) ? 'Thịnh hành' : 'Độc bản'),
    transition: 'curtain-reveal',
    particle: (idx % 2 === 0) ? 'petals' : 'hearts',
    quote: c.quote,
    flowerTheme: c.flower,
    envelopeColor: c.envColor,
    desc: `Thiết kế bao thư hoa mở ra trượt vé Save The Date, ảnh Polaroid nghiêng hoa ${c.flower}, bảng đếm ngược trái tim và biểu ngữ cảm ơn theo video TikTok Minh Anh.`,
    thumb: photo,
    theme: {
      primary: c.pri,
      secondary: c.sec,
      accent: c.acc,
      text: "#38312E",
      bg: "from-rose-50/70 via-stone-50 to-pink-50/50",
      cardBg: "#FFFDFB",
      envelopeWax: c.pri,
      envelopeColor: c.envColor,
      petals: ["#FBCFE8", "#F472B6", "#FDE047"],
      isDark: false
    }
  });
  currentId++;
});

// 2. TẠO 1,000 MẪU CỦA 20 DANH MỤC CÒN LẠI (ID: 101 -> 1100)
const otherCategories = CATEGORIES.filter(c => c.id !== 'korean_envelope');
otherCategories.forEach(cat => {
  const concepts = oldConcepts[cat.id] || [];
  concepts.forEach((conceptTitle, i) => {
    const photo = PHOTOS[(i + currentId) % PHOTOS.length];
    allTemplates.push({
      id: currentId,
      name: `${conceptTitle} #${currentId}`,
      concept: conceptTitle,
      category: cat.id,
      categoryName: cat.name,
      archetype: cat.archetype,
      borderStyle: cat.borderStyle,
      headerStyle: cat.headerStyle,
      avatarFrame: cat.avatarFrame,
      fontFamily: cat.defaultFont,
      tag: i < 5 ? 'VIP' : (i < 15 ? 'Bán chạy' : 'Độc bản'),
      transition: 'cinematic-fade',
      particle: 'petals',
      desc: `Thiết kế thực chất phong cách ${cat.name} với bố cục ${cat.archetype}, khung viền ${cat.borderStyle}, huy hiệu ${cat.headerStyle}.`,
      thumb: photo,
      theme: {
        primary: "#C9707E",
        secondary: "#B85D6B",
        accent: "#C9707E",
        text: "#292524",
        bg: "from-rose-50 via-stone-50 to-amber-50",
        cardBg: "#FFFFFF",
        envelopeWax: "#C9707E",
        petals: ["#FBCFE8", "#F472B6", "#FDE047"],
        isDark: false
      }
    });
    currentId++;
  });
});

console.log(`Tổng số mẫu tạo ra: ${allTemplates.length}`);
console.log(`Mẫu #1: ${allTemplates[0].name} (${allTemplates[0].categoryName})`);

// GHI RA templates.js
const fileContent = `// KHO ${allTemplates.length} MẪU THIỆP CƯỚI CHUYÊN NGHIỆP - BAO GỒM 100 MẪU BAO THƯ HOA TIKTOK MINH ANH
// ĐỘC BẢN THỰC CHẤT, KHÔNG TRÙNG LẶP MẪU

const WEDDING_CATEGORIES = ${JSON.stringify([{ id: 'all', name: `Tất Cả (${allTemplates.length.toLocaleString()} Mẫu)`, icon: 'sparkles' }, ...CATEGORIES], null, 2)};

const WEDDING_TEMPLATES = ${JSON.stringify(allTemplates, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WEDDING_CATEGORIES, WEDDING_TEMPLATES };
}
`;

fs.writeFileSync(path.join(dir, 'templates.js'), fileContent, 'utf8');
console.log('Đã ghi thành công templates.js!');
