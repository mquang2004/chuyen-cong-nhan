import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

// BỘ DỮ LIỆU SỬ THI: CHI TIẾT - HÀO HÙNG - CÓ CHIỀU SÂU
const milestones = [
  // --- CHƯƠNG 1: ĐÊM TRƯỜNG TRƯỚC BÌNH MINH ---
  {
    year: "Thế kỉ XV - XVII",
    tag: "TÍCH LUỸ NGUYÊN THUỶ",
    title: "Cừu Ăn Thịt Người",
    desc: "Một bi kịch lịch sử đẫm máu tại nước Anh, nơi những đồng cỏ xanh tươi nhuốm màu đau thương của người nông dân. Phong trào 'Rào đất cướp ruộng' đã tước đoạt tư liệu sản xuất, đẩy hàng triệu con người vào cảnh bần cùng, buộc họ phải bán mình để tồn tại.",
    details: [
      "Vào cuối thế kỷ XV, ngành dệt len tại Anh phát triển bùng nổ, biến lông cừu thành 'vàng trắng'. Lợi nhuận khổng lồ khiến giới quý tộc và địa chủ bất chấp đạo lý, cưỡng chế tước đoạt ruộng đất của nông dân để chuyển thành bãi chăn thả cừu. Những ngôi làng bị san phẳng, ruộng đồng biến mất sau những hàng rào dây thép.",
      "Người nông dân mất đất, mất nhà, lâm vào cảnh 'thất cơ lỡ vận'. Họ lang thang khắp các nẻo đường, trở thành những người vô gia cư. Tàn khốc hơn, Nhà nước phong kiến Anh thời đó đã ban hành những đạo luật đẫm máu trừng phạt người lang thang: đánh roi, xẻo tai, thậm chí tử hình nếu tái phạm.",
      "Không còn con đường nào khác, họ buộc phải quay trở lại các công xưởng, bán sức lao động rẻ mạt để đổi lấy miếng ăn qua ngày. Chính trong hoàn cảnh bi thương đó, những người vô sản đầu tiên của lịch sử nhân loại đã được hình thành: Tự do về thân thể, nhưng trần trụi về tài sản."
    ],
    img: "https://images.unsplash.com/photo-1464039397811-476f652a343b?w=800",
    videoId: "zhL5DCizj5c", 
    color: "#f1f5f9"
  },
  {
    year: "1760",
    tag: "CÁCH MẠNG CÔNG NGHIỆP 1.0",
    title: "Kỷ Nguyên Của Khói Và Thép",
    desc: "Tiếng còi tàu hơi nước xé toạc bầu trời châu Âu, báo hiệu sự ra đời của nền đại công nghiệp. Giai cấp công nhân hiện đại chính thức bước lên vũ đài lịch sử, nhưng lại bị xiềng xích vào những cỗ máy khổng lồ vô tri vô giác.",
    details: [
      "Sáng chế máy hơi nước của James Watt không chỉ là một bước tiến kỹ thuật, mà là một cuộc cách mạng xã hội. Các công trường thủ công nhỏ lẻ nhanh chóng bị thay thế bởi những nhà máy công nghiệp quy mô lớn với ống khói nhả đạn đen kịt lên bầu trời.",
      "Tuy nhiên, sự tiến bộ của kỹ thuật lại tỷ lệ nghịch với hạnh phúc của người thợ. Công nhân phải làm việc 14 đến 16 tiếng mỗi ngày trong điều kiện tăm tối, ồn ào và độc hại. Phụ nữ và trẻ em trở thành nguồn lao động bị bóc lột tàn tệ nhất vì tiền công rẻ mạt.",
      "Trong giai đoạn này, người công nhân chưa thực sự làm chủ quá trình sản xuất. Họ trở thành 'một bộ phận phụ thuộc của máy móc', một đinh ốc trong dây chuyền khổng lồ. Sự tha hóa của lao động đạt đến đỉnh điểm khi con người bị vắt kiệt sức lực để tạo ra lợi nhuận cho nhà tư bản."
    ],
    img: "https://i.chungta.vn/2017/04/26/1-1493192811.jpg",
    videoId: "MxIzoUmwDSU",
    color: "#e2e8f0"
  },
  {
    year: "1811 - 1816",
    tag: "ĐẤU TRANH TỰ PHÁT",
    title: "Cơn Giận Dữ Của Luddite",
    desc: "Sự phản kháng ngây thơ nhưng đầy phẫn nộ của những người thợ dệt. Trong cơn tuyệt vọng, họ đã vung búa đập tan những cỗ máy, lầm tưởng rằng đó là kẻ thù cướp đi miếng cơm manh áo của gia đình mình.",
    details: [
      "Phong trào Luddite (đập phá máy móc) bùng nổ mạnh mẽ tại Anh. Những người thợ thủ công lành nghề nhìn thấy máy móc như những 'quái vật' tước đoạt việc làm và phẩm giá của họ. Họ tổ chức các cuộc tấn công vào ban đêm, đốt xưởng và phá hủy thiết bị.",
      "Đây là biểu hiện điển hình của giai đoạn đấu tranh 'tự phát'. Giai cấp công nhân lúc này cảm nhận được nỗi đau khổ, nhưng chưa nhận thức được nguồn gốc của nó. Họ chưa hiểu rằng kẻ thù thực sự không phải là cái máy vô tri, mà là chế độ sở hữu tư bản chủ nghĩa đứng sau nó.",
      "Dù thất bại và bị đàn áp dã man, phong trào này là tiếng thét đầu tiên của giai cấp công nhân, buộc giới chủ phải dè chừng và đặt ra câu hỏi lớn về mâu thuẫn gay gắt trong lòng xã hội tư bản."
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MruHnW-TbrWyy8xkhn6peoPtNqNc9HBNMA&s",
    videoId: "o-EDDw-YwTY",
    color: "#cbd5e1"
  },
  {
    year: "1836 - 1848",
    tag: "CHÍNH TRỊ HOÁ",
    title: "Hiến Chương Nhân Dân",
    desc: "Bước trưởng thành vượt bậc về nhận thức: Công nhân Anh không còn dùng bạo lực mù quáng, mà đã biết dùng lá phiếu và kiến nghị thư để đòi quyền lực chính trị, mở đầu cho kỷ nguyên đấu tranh có tổ chức.",
    details: [
      "Phong trào Hiến chương (Chartism) là phong trào cách mạng vô sản rộng lớn, có tính chất quần chúng và chính trị đầu tiên trên thế giới. Hàng triệu chữ ký đã được thu thập để gửi lên Nghị viện Anh, đòi quyền bầu cử phổ thông, bỏ phiếu kín và quyền ứng cử cho người nghèo.",
      "Mặc dù các kiến nghị thư liên tục bị bác bỏ, nhưng phong trào đã giáo dục ý thức chính trị cho hàng triệu thợ mỏ, thợ dệt. Họ nhận ra rằng: Muốn thay đổi số phận kinh tế (bánh mì), trước hết phải nắm lấy quyền lực chính trị (lá phiếu).",
      "Sự kiện này đánh dấu sự tách rời của giai cấp công nhân khỏi sự ảnh hưởng của giai cấp tư sản, trở thành một lực lượng chính trị độc lập, sẵn sàng cho sự tiếp nhận một lý luận khoa học dẫn đường."
    ],
    img: "https://images.unsplash.com/photo-1577985695029-9dc490a233b2?w=800",
    videoId: "fHFJMG_SHNA",
    color: "#94a3b8"
  },

  // --- CHƯƠNG 2: ÁNH SÁNG CỦA LÝ LUẬN ---
  {
    year: "1848",
    tag: "TUYÊN NGÔN ĐẢNG CỘNG SẢN",
    title: "Cú Hịch Của Thời Đại",
    desc: "Tháng 2 năm 1848, bầu trời châu Âu rung chuyển bởi một văn kiện nhỏ nhưng có sức nặng ngàn cân. Marx và Engels đã trao cho giai cấp công nhân một vũ khí lý luận sắc bén nhất: Sứ mệnh lịch sử thế giới.",
    details: [
      "Tuyên ngôn Đảng Cộng sản ra đời trong bối cảnh 'Mùa xuân của các dân tộc' đang sục sôi. Lần đầu tiên, lịch sử xã hội loài người được giải mã qua lăng kính đấu tranh giai cấp. Các ông chỉ rõ: Giai cấp tư sản, trong quá trình thống trị, đã vô tình sản sinh ra người đào huyệt chôn chính mình - đó là giai cấp vô sản.",
      "Văn kiện khẳng định sứ mệnh của công nhân không chỉ là tự giải phóng mình, mà là giải phóng toàn nhân loại khỏi mọi áp bức, bóc lột. Để làm được điều đó, họ phải đập tan bộ máy nhà nước tư sản và thiết lập nền chuyên chính vô sản.",
      "Câu kết của Tuyên ngôn: 'Vô sản toàn thế giới, đoàn kết lại!' đã trở thành lời hịch thiêng liêng, kết nối hàng triệu trái tim cần lao trên khắp năm châu, chuyển phong trào công nhân từ 'tự phát' sang 'tự giác' hoàn toàn."
    ],
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
    videoId: "Iqvx2Jv4zjI",
    color: "#fecaca"
  },
  {
    year: "1864",
    tag: "QUỐC TẾ I",
    title: "Vòng Tay Quốc Tế",
    desc: "Sự ra đời của 'Hội Liên hiệp Công nhân Quốc tế' tại London. Lần đầu tiên, giai cấp công nhân có một bộ tham mưu chung, biến khẩu hiệu đoàn kết thành hành động thực tiễn xuyên biên giới.",
    details: [
      "Dưới sự lãnh đạo trực tiếp của K. Marx, Quốc tế I đã trở thành trung tâm chỉ đạo phong trào công nhân các nước. Tổ chức này đã ủng hộ các cuộc bãi công ở Anh, Pháp, Bỉ..., ngăn chặn giới chủ nhập khẩu lao động nước ngoài để phá hoại bãi công.",
      "Quốc tế I đấu tranh không khoan nhượng chống lại các trào lưu phi vô sản (như chủ nghĩa cơ hội, chủ nghĩa vô chính phủ), bảo vệ sự trong sáng của chủ nghĩa Mác. Nó đặt nền móng tư tưởng và tổ chức cho sự ra đời của các Đảng Cộng sản sau này.",
      "Sự tồn tại của Quốc tế I khẳng định một chân lý: Tư bản là một lực lượng quốc tế, vì vậy cuộc đấu tranh của công nhân cũng phải mang tính quốc tế. Biên giới quốc gia không thể chia cắt tình hữu ái giai cấp."
    ],
    img: "https://img.loigiaihay.com/picture/article/2014/0810/82536931407686091_small.jpg",
    videoId: "SMdjVa44UxE",
    color: "#fca5a5"
  },
  {
    year: "1871",
    tag: "BÀI HỌC XƯƠNG MÁU",
    title: "Công Xã Paris Bất Tử",
    desc: "72 ngày đêm hào hùng chấn động địa cầu. Lần đầu tiên trong lịch sử, những người thợ Paris với đôi bàn tay chai sạn đã lật đổ chính quyền tư sản, thiết lập nên Nhà nước kiểu mới của dân, do dân và vì dân.",
    details: [
      "Ngày 18/3/1871, giai cấp công nhân Paris khởi nghĩa giành chính quyền. Họ thành lập Công xã - một hình thức nhà nước chưa từng có. Công xã đã ban bố những sắc lệnh tiến bộ vượt thời đại: Tách nhà thờ khỏi nhà nước, giáo dục bắt buộc và miễn phí, cấm cúp phạt lương công nhân, giao công xưởng cho tập thể quản lý.",
      "Tuy nhiên, do thiếu một đảng tiên phong lãnh đạo và chưa thực hiện liên minh công - nông, Công xã đã bị giai cấp tư sản phản kích tàn bạo. Tuần lễ đẫm máu tháng 5 đã dìm Paris trong biển lửa và xác người.",
      "Dù thất bại, Công xã Paris mãi mãi là 'người đi tiên phong vĩ đại'. Sự hy sinh của các chiến sĩ Công xã đã để lại bài học xương máu vô giá: Giai cấp công nhân muốn thắng lợi phải đập tan bộ máy nhà nước cũ và thiết lập quyền lực thực sự của mình."
    ],
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    videoId: "nUZmlwPZoOQ",
    color: "#f87171"
  },

  // --- CHƯƠNG 3: HIỆN THỰC HÓA SỨ MỆNH ---
  {
    year: "1886",
    tag: "SỰ KIỆN HAYMARKET",
    title: "Máu Nhuộm Chicago",
    desc: "Cuộc đình công khổng lồ tại Chicago nước Mỹ đã viết nên trang sử bi tráng cho ngày Quốc tế Lao động 1/5. Máu của công nhân đã đổ xuống để đổi lấy quyền con người cơ bản: Ngày làm việc 8 giờ.",
    details: [
      "Vào thập niên 80 thế kỷ XIX, công nhân Mỹ bị bóc lột tàn tệ, phải làm việc từ 14-18 giờ/ngày. Khẩu hiệu đấu tranh vang dội thời bấy giờ là: '8 giờ làm việc, 8 giờ nghỉ ngơi, 8 giờ học tập và vui chơi'. Đỉnh điểm là cuộc tổng bãi công của 40 vạn công nhân Chicago ngày 1/5/1886.",
      "Tại quảng trường Haymarket, cảnh sát đã nổ súng vào đoàn người biểu tình ôn hòa. Máu nhuộm đỏ đường phố, các thủ lĩnh công đoàn bị bắt và treo cổ. Nhưng sự đàn áp tàn bạo không thể dập tắt ngọn lửa đấu tranh.",
      "Từ sự kiện bi tráng này, ngày 1/5 đã trở thành ngày hội biểu dương lực lượng của giai cấp công nhân toàn thế giới. Nó nhắc nhở chúng ta rằng: Mọi quyền lợi của người lao động hôm nay đều được đánh đổi bằng sự hy sinh của các thế hệ đi trước."
    ],
    img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800",
    videoId: "1pwEKwmObnI",
    color: "#ef4444"
  },
  {
    year: "1917",
    tag: "CÁCH MẠNG THÁNG MƯỜI",
    title: "Mười Ngày Rung Chuyển Thế Giới",
    desc: "Tiếng súng rạng đông từ chiến hạm Rạng Đông đã xé toạc màn đêm của chế độ Nga hoàng. Dưới sự lãnh đạo thiên tài của Lênin, lý luận Mác đã bước từ trang sách ra đời thực, khai sinh ra thời đại mới.",
    details: [
      "Cách mạng Tháng Mười Nga là cuộc cách mạng xã hội chủ nghĩa đầu tiên thắng lợi trên thế giới. Giai cấp công nhân Nga, liên minh chặt chẽ với nông dân, đã lật đổ giai cấp tư sản và địa chủ, thiết lập nên Nhà nước Xô viết công - nông.",
      "Thắng lợi này đã đập tan mắt xích yếu nhất của chủ nghĩa đế quốc, chia thế giới thành hai hệ thống đối lập. Nó chứng minh rằng: Giai cấp công nhân hoàn toàn đủ năng lực lãnh đạo xã hội, quản lý kinh tế và xây dựng một chế độ xã hội công bằng, không còn người bóc lột người.",
      "Đối với các dân tộc thuộc địa (như Việt Nam), Cách mạng Tháng Mười như một ánh mặt trời chói lọi, chỉ ra con đường giải phóng duy nhất: Con đường cách mạng vô sản. Nguyễn Ái Quốc đã khẳng định: 'Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản'."
    ],
    img: "https://images.unsplash.com/photo-1580130601254-05fa235e1e54?w=800",
    videoId: "nkdukjVLef8",
    color: "#dc2626"
  },

  // --- CHƯƠNG 4: SỨ MỆNH TẠI VIỆT NAM ---
  {
    year: "1925",
    tag: "VIỆT NAM - BA SON",
    title: "Huyền Thoại Ba Son",
    desc: "Tiếng búa của công nhân xưởng đóng tàu Ba Son (Sài Gòn) không chỉ là âm thanh của lao động, mà là tiếng kèn báo hiệu sự trưởng thành về chất của giai cấp công nhân Việt Nam: Chuyển từ 'Tự phát' sang 'Tự giác'.",
    details: [
      "Tháng 8/1925, dưới sự lãnh đạo bí mật của Tôn Đức Thắng, công nhân Ba Son đã tổ chức bãi công để ngăn cản thực dân Pháp sửa chữa chiến hạm, không cho chúng chở lính sang đàn áp phong trào cách mạng ở Trung Quốc.",
      "Cuộc bãi công thắng lợi rực rỡ sau 8 ngày đêm kiên cường. Đây là mốc son chói lọi, đánh dấu lần đầu tiên công nhân Việt Nam đấu tranh không chỉ vì mục đích kinh tế (tăng lương, giảm giờ làm) mà vì mục đích chính trị quốc tế, thể hiện tình đoàn kết giai cấp vô sản xuyên biên giới.",
      "Sự kiện này chứng tỏ giai cấp công nhân Việt Nam, dù số lượng còn ít (khoảng 22 vạn người, chiếm 1-2% dân số), nhưng đã sớm tiếp thu tư tưởng cách mạng và sẵn sàng gánh vác sứ mệnh lịch sử của dân tộc."
    ],
    img: "https://images.unsplash.com/photo-1565538902598-e737bd329c01?w=800",
    videoId: "oX5keiybfyg",
    color: "#fdba74"
  },
  {
    year: "1930",
    tag: "SỰ RA ĐỜI CỦA ĐẢNG",
    title: "Ngọn Cờ Tiên Phong",
    desc: "Mùa xuân năm 1930, Đảng Cộng sản Việt Nam ra đời. Đây là bước ngoặt vĩ đại, chấm dứt thời kỳ khủng hoảng về đường lối cứu nước kéo dài hàng thập kỷ, đưa giai cấp công nhân lên vị trí lãnh đạo duy nhất.",
    details: [
      "Khác với quy luật chung của thế giới, giai cấp công nhân Việt Nam ra đời *trước* cả giai cấp tư sản dân tộc. Họ sinh ra trong nỗi nhục mất nước, chịu ba tầng áp bức (đế quốc, phong kiến, tư sản bản xứ), nên có tinh thần cách mạng triệt để nhất.",
      "Sự ra đời của Đảng là sự kết hợp nhuần nhuyễn giữa chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước Việt Nam. Ngay từ khi ra đời, Đảng đã khẳng định sứ mệnh lãnh đạo cách mạng thuộc về giai cấp công nhân thông qua đội tiền phong của mình.",
      "Cương lĩnh chính trị đầu tiên của Đảng đã vạch ra con đường đúng đắn: Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản. Từ đây, con thuyền cách mạng Việt Nam đã có người cầm lái vững vàng vượt qua mọi sóng gió."
    ],
    img: "https://images.unsplash.com/photo-1560251180-1a0b93970dc5?w=800",
    videoId: "7FtGvLISpIk",
    color: "#fbbf24"
  },
  {
    year: "1954 - 1975",
    tag: "SỨ MỆNH DÂN TỘC",
    title: "Tay Búa Và Tay Súng",
    desc: "Trong khói lửa chiến tranh, giai cấp công nhân Việt Nam đã thực hiện một sứ mệnh kép phi thường: Vừa lao động quên mình xây dựng CNXH ở miền Bắc, vừa cầm súng chiến đấu giải phóng miền Nam thống nhất đất nước.",
    details: [
      "Với tinh thần 'Mỗi người làm việc bằng hai vì miền Nam ruột thịt', công nhân miền Bắc đã di dời hàng trăm nhà máy vào rừng sâu, hang núi để duy trì sản xuất dưới mưa bom bão đạn của không quân Mỹ. Họ đã cung cấp hàng triệu tấn vũ khí, lương thực cho chiến trường.",
      "Hàng vạn công nhân ưu tú đã gia nhập quân đội, trở thành những chiến sĩ lái xe Trường Sơn, thợ kỹ thuật quân sự, trực tiếp cầm súng đối mặt với kẻ thù. Hình ảnh 'tay búa tay súng' trở thành biểu tượng kiêu hãnh của giai cấp công nhân thời đại Hồ Chí Minh.",
      "Thắng lợi năm 1975 là minh chứng hùng hồn cho sức mạnh của khối liên minh công - nông - trí thức dưới sự lãnh đạo của Đảng, hoàn thành xuất sắc sứ mệnh giải phóng dân tộc, mở ra kỷ nguyên độc lập, thống nhất và đi lên CNXH."
    ],
    img: "https://images.unsplash.com/photo-1518659556730-67c945407775?w=800",
    videoId: "bp7JBr8D_q4",
    color: "#f59e0b"
  },

  // --- CHƯƠNG 5: VƯỢT QUA SÓNG GIÓ & ĐỔI MỚI ---
  {
    year: "1986",
    tag: "ĐỔI MỚI",
    title: "Phá Bỏ Tư Duy Bao Cấp",
    desc: "Trước bờ vực khủng hoảng kinh tế - xã hội, Đại hội VI của Đảng đã dũng cảm 'nhìn thẳng vào sự thật', khởi xướng công cuộc Đổi Mới toàn diện. Giai cấp công nhân bước vào hành trình lột xác để thích nghi với cơ chế thị trường.",
    details: [
      "Đất nước chuyển mình từ cơ chế tập trung quan liêu bao cấp sang nền kinh tế hàng hóa nhiều thành phần, vận hành theo cơ chế thị trường có sự quản lý của Nhà nước. Đây là bước đi sống còn để giải phóng sức sản xuất.",
      "Giai cấp công nhân có sự biến đổi sâu sắc về cơ cấu. Bên cạnh bộ phận công nhân nhà nước truyền thống, đã xuất hiện đông đảo đội ngũ công nhân trong khu vực tư nhân và khu vực có vốn đầu tư nước ngoài (FDI).",
      "Sự thay đổi này mang lại cơ hội việc làm và thu nhập, nhưng cũng đặt công nhân trước những thách thức gay gắt: Cạnh tranh việc làm, yêu cầu nâng cao tay nghề, tác phong công nghiệp và sự phân tầng xã hội, phân hóa giàu nghèo ngày càng rõ rệt."
    ],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    videoId: "xFHawdU99KQ",
    color: "#bef264"
  },
  {
    year: "1991",
    tag: "THỬ THÁCH LỊCH SỬ",
    title: "Giữ Vững Niềm Tin Giữa Cơn Bão Táp",
    desc: "Khi 'thành trì' Xô Viết sụp đổ, chủ nghĩa xã hội thế giới lâm vào thoái trào nghiêm trọng. Nhưng chính trong thời khắc sinh tử đó, bản lĩnh chính trị của giai cấp công nhân Việt Nam lại tỏa sáng hơn bao giờ hết.",
    details: [
      "Sự sụp đổ của mô hình CNXH ở Đông Âu và Liên Xô là một cú sốc tâm lý lớn. Các thế lực thù địch hí hửng dự đoán về sự sụp đổ dây chuyền của Việt Nam. Nhưng Đảng và giai cấp công nhân Việt Nam đã kiên định trả lời: Không! Chúng tôi sẽ đi tiếp con đường đã chọn.",
      "Bằng cách kiên trì chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh, vận dụng sáng tạo vào thực tiễn Việt Nam, công cuộc Đổi Mới đã gặt hái những thành tựu to lớn. Đất nước ra khỏi khủng hoảng, kinh tế tăng trưởng cao, đời sống nhân dân được cải thiện.",
      "Thực tiễn này đã chứng minh sức sống mãnh liệt của lý tưởng xã hội chủ nghĩa. Giai cấp công nhân Việt Nam không chỉ giữ vững ngọn cờ tư tưởng mà còn đóng vai trò nòng cốt trong việc ổn định chính trị và phát triển đất nước."
    ],
    img: "https://images.unsplash.com/photo-1626262796120-79f90647ee48?w=800",
    videoId: "_Tm0C3Av8hM",
    color: "#84cc16"
  },

  // --- CHƯƠNG 6: TƯƠNG LAI VÀ TRÍ TUỆ HÓA ---
  {
    year: "Hiện nay",
    tag: "BỐI CẢNH THẾ GIỚI",
    title: "Công Nhân 'Cổ Cồn Trắng'",
    desc: "Trong kỷ nguyên số và kinh tế tri thức, hình ảnh người công nhân lấm lem dầu mỡ đang dần lùi xa, thay thế bằng những người thao tác trên máy tính và robot. Xu hướng 'Trí tuệ hóa' đang làm thay đổi diện mạo giai cấp vô sản toàn cầu.",
    details: [
      "Cách mạng công nghiệp 4.0 với AI, Big Data, IoT đã tạo ra những nhà máy thông minh không người lái. Công nhân hiện đại không chỉ dùng cơ bắp mà chủ yếu dùng trí não. Họ là những kỹ sư phần mềm, kỹ thuật viên vận hành, chuyên gia phân tích.",
      "Tuy nhiên, sự thay đổi về hình thức lao động không làm thay đổi bản chất của quan hệ sản xuất tư bản chủ nghĩa. Dù mặc áo trắng ngồi phòng lạnh, họ vẫn là người làm thuê, bán sức lao động và bị bóc lột giá trị thặng dư - thậm chí mức độ bóc lột chất xám còn tinh vi và nặng nề hơn.",
      "Mặt khác, sự phân hóa trong nội bộ giai cấp công nhân thế giới ngày càng sâu sắc giữa nhóm lao động trình độ cao và nhóm lao động giản đơn, tạo ra những thách thức mới cho sự đoàn kết quốc tế của phong trào công nhân."
    ],
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800",
    videoId: "4kAV0Nm-e0Q",
    color: "#6ee7b7"
  },
  {
    year: "Hiện nay",
    tag: "TẠI VIỆT NAM",
    title: "Làm Chủ Công Nghệ Cao",
    desc: "Trước làn sóng 4.0, công nhân Việt Nam đang đứng trước vận hội lớn để 'đi tắt đón đầu', làm chủ công nghệ hiện đại, nhưng cũng đối mặt với nguy cơ tụt hậu và bị thay thế bởi tự động hóa.",
    details: [
      "Tại các khu công nghệ cao, các tập đoàn lớn như VinFast, Viettel, Samsung..., một bộ phận công nhân Việt Nam đã tiếp cận và làm chủ được các dây chuyền sản xuất hiện đại bậc nhất thế giới. Tỷ lệ lao động qua đào tạo ngày càng tăng.",
      "Tuy nhiên, nhìn tổng thể, chất lượng nguồn nhân lực vẫn là điểm nghẽn. Số lượng công nhân lành nghề, bậc cao còn thiếu. Tác phong công nghiệp, kỷ luật lao động và kỹ năng mềm vẫn còn hạn chế so với khu vực.",
      "Nhiệm vụ cấp bách hiện nay là phải đẩy mạnh 'Trí thức hóa' giai cấp công nhân. Chỉ có tri thức và kỹ năng mới giúp công nhân Việt Nam tránh được 'bẫy thu nhập trung bình' và giữ vững vai trò lãnh đạo trong nền kinh tế số."
    ],
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
    videoId: "dYUsdD-QIgA",
    color: "#34d399"
  },
  {
    year: "2030",
    tag: "MỤC TIÊU GẦN",
    title: "Việt Nam Hùng Cường",
    desc: "Đảng ta xác định mục tiêu đến năm 2030 (kỷ niệm 100 năm thành lập Đảng): Việt Nam là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao. Giai cấp công nhân là lực lượng then chốt để hiện thực hóa khát vọng này.",
    details: [
      "Để đạt được mục tiêu này, Việt Nam phải hoàn thành sự nghiệp công nghiệp hóa, hiện đại hóa. Giai cấp công nhân phải là lực lượng đi đầu, là nòng cốt của khối liên minh công - nông - trí thức.",
      "Chiến lược phát triển tập trung vào việc xây dựng đội ngũ công nhân lớn mạnh về số lượng, đa dạng về cơ cấu, và đặc biệt là nâng cao chất lượng. Phải hình thành được tầng lớp công nhân tinh hoa, những 'nghệ nhân' trong thời đại số.",
      "Đồng thời, Nhà nước cam kết cải thiện mạnh mẽ đời sống vật chất và tinh thần cho công nhân: giải quyết vấn đề nhà ở xã hội, tiền lương, bảo hiểm và phúc lợi, để người công nhân yên tâm cống hiến và sáng tạo."
    ],
    img: "https://images.unsplash.com/photo-1496247749665-49cf5bf87569?w=800",
    videoId: "7zwMRVvfEHw",
    color: "#2dd4bf"
  },
  {
    year: "2045",
    tag: "TẦM NHÌN DÀI HẠN",
    title: "Hiện Thực Hóa Giấc Mơ",
    desc: "Hướng tới cột mốc 2045 - Kỷ niệm 100 năm thành lập nước: Việt Nam trở thành nước phát triển, thu nhập cao. Đây là đích đến của con đường quá độ lên CNXH mà bao thế hệ đã đổ máu xương vun đắp.",
    details: [
      "Tại cột mốc này, sứ mệnh lịch sử của giai cấp công nhân Việt Nam sẽ bước lên một tầm cao mới: Xây dựng thành công một xã hội 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh'.",
      "Công nhân lúc này sẽ là những người làm chủ thực sự của nền kinh tế tri thức, xã hội số và chính phủ số. Khoảng cách giữa lao động trí óc và lao động chân tay sẽ dần bị xóa nhòa.",
      "Khát vọng 2045 không chỉ là giấc mơ về sự giàu có, mà là sự khẳng định vị thế của Việt Nam trên trường quốc tế, sánh vai với các cường quốc năm châu như mong ước của Bác Hồ. Và giai cấp công nhân chính là người cầm lá cờ đầu trong hành trình vĩ đại đó."
    ],
    img: "https://images.unsplash.com/photo-1559592413-7cec4d0ea49b?w=800",
    videoId: "WCgMg0bTIKI",
    color: "#06b6d4"
  }
];

function App() {
  const containerRef = useRef(null);
  const fillRef = useRef(null);
  const blobRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const milestoneEls = document.querySelectorAll(".milestone");
    milestoneEls.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        end: "bottom 15%",
        onToggle: self => {
          if (self.isActive) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        }
      });
    });

    gsap.to(fillRef.current, {
      height: "100%",
      scrollTrigger: { trigger: containerRef.current, start: "top center", end: "bottom center", scrub: 0.5 }
    });

    document.querySelectorAll(".milestone").forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: "top 75%", end: "bottom 25%",
        onEnter: () => el.classList.add("active"),
        onLeaveBack: () => el.classList.remove("active")
      });
    });
  }, []);

  return (
    <div className={`app-wrapper ${selected ? 'modal-open' : ''}`}>
      <div className="bg-glow" ref={blobRef}></div>

      <header className="hero">
        <p className="hero-tag">CHỦ NGHĨA XÃ HỘI KHOA HỌC</p>
        <h1>GIAI CẤP <br></br> CÔNG NHÂN</h1>
        <p className="hero-desc">SỰ PHÁT TRIỂN CỦA GIAI CẤP CÔNG NHÂN</p>
        <div className="scroll-hint">
          <div className="mouse"></div>
          <p>CUỘN ĐỂ KHÁM PHÁ</p>
        </div>
      </header>

      <div className="container" ref={containerRef}>
        <div className="timeline-path"></div>
        <div className="timeline-fill" ref={fillRef}></div>

        {milestones.map((m, i) => (
          <section key={i} className={`milestone ms-${i}`} onClick={() => setSelected(m)}>
            <div className="year-container">
              <span className="year">{m.year}</span>
            </div>
            <div className="content">
              <div className="info">
                <span className="tag">{m.tag}</span>
                <h2>{m.title}</h2>
                <p>{m.desc}</p>
                <div className="explore-btn" style={{ color: "#ef4444" }}>Bấm để xem chi tiết ➜</div>
              </div>
              <div className="image-wrapper">
                <img src={m.img} alt={m.title} />
              </div>
            </div>
          </section>
        ))}
      </div>

      {selected && (
        <div className="detail-modal" onClick={() => setSelected(null)}>
          <div className="modal-body" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelected(null)}>×</button>
            <div className="modal-inner">
               <span className="modal-tag">{selected.tag}</span>
               <h2>{selected.title}</h2>
               
               {/* MODAL CÓ VIDEO */}
               <div className="modal-content-stack">
                  <div className="video-responsive">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${selected.videoId}?autoplay=1`} 
                      title={selected.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="modal-text">
                     {/* RENDER MẢNG DETAILS THÀNH CÁC ĐOẠN VĂN */}
                     {selected.details.map((paragraph, idx) => (
                        <p key={idx} style={{marginBottom: '15px'}}>{paragraph}</p>
                     ))}
                     <div className="source-ref">
                        Nguồn: Giáo trình CNXHKH, Tư liệu VTV & History Channel
                     </div>
                  </div>
               </div>

            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-line"></div>
          <h2>TIÊN PHONG - SÁNG TẠO - CỐNG HIẾN</h2>
          <p className="footer-sub">
            Nhóm [Tên Nhóm] &bull; Chủ đề 1: Sứ mệnh lịch sử Giai cấp công nhân
          </p>
          <p className="copyright">© 2026 CNXHKH Project</p>
        </div>
      </footer>
    </div>
  );
}

export default App;