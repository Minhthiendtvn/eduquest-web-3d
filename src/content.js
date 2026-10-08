export const subjects = [
  {
    id: "math",
    name: "Toán học",
    shortName: "Toán",
    category: "TƯ DUY & CON SỐ",
    color: "blue",
    symbol: "∑",
    description: "Giải đố nhanh, tư duy thật chất!",
    topics: [
      {
        id: "algebra",
        title: "Phương trình vui",
        description: "Tìm x và mở khóa bí mật",
        level: "CƠ BẢN",
        duration: "5 phút",
        questions: [
          {
            prompt: "Nếu 3x + 5 = 20, giá trị của x là bao nhiêu?",
            answers: ["3", "5", "8", "15"],
            correct: 1,
            explanation: "Trừ 5 ở hai vế, ta có 3x = 15. Chia cho 3, vậy x = 5.",
          },
          {
            prompt: "Một chiếc áo giá 240.000đ đang được giảm 25%. Giá mới là bao nhiêu?",
            answers: ["60.000đ", "160.000đ", "180.000đ", "215.000đ"],
            correct: 2,
            explanation: "Số tiền giảm là 240.000 × 25% = 60.000đ. Giá mới còn 180.000đ.",
          },
          {
            prompt: "Rút gọn biểu thức 2(a + 3) − a.",
            answers: ["a + 3", "a + 6", "2a + 3", "3a + 6"],
            correct: 1,
            explanation: "Phân phối 2 vào ngoặc rồi thu gọn: 2a + 6 − a = a + 6.",
          },
          {
            prompt: "Nếu y = 4, giá trị của 2y² là bao nhiêu?",
            answers: ["16", "24", "32", "64"],
            correct: 2,
            explanation: "Thay y = 4: 2 × 4² = 2 × 16 = 32.",
          },
          {
            prompt: "Một số khi nhân với 7 rồi trừ 3 thì bằng 39. Số đó là?",
            answers: ["4", "5", "6", "7"],
            correct: 2,
            explanation: "Gọi số cần tìm là x: 7x − 3 = 39 nên 7x = 42 và x = 6.",
          },
        ],
      },
      {
        id: "geometry",
        title: "Hình học không gian",
        description: "Khám phá hình khối quanh ta",
        level: "KHÁM PHÁ",
        duration: "5 phút",
        questions: [
          {
            prompt: "Một hình lập phương có bao nhiêu mặt?",
            answers: ["4 mặt", "6 mặt", "8 mặt", "12 mặt"],
            correct: 1,
            explanation: "Hình lập phương có 6 mặt vuông bằng nhau, 8 đỉnh và 12 cạnh.",
          },
          {
            prompt: "Diện tích hình tròn bán kính 3 cm là bao nhiêu?",
            answers: ["6π cm²", "9π cm²", "12π cm²", "18π cm²"],
            correct: 1,
            explanation: "Diện tích hình tròn là πr². Với r = 3, ta được 9π cm².",
          },
          {
            prompt: "Tổng ba góc trong một tam giác bằng bao nhiêu?",
            answers: ["90°", "180°", "270°", "360°"],
            correct: 1,
            explanation: "Tổng số đo các góc trong của mọi tam giác luôn bằng 180°.",
          },
          {
            prompt: "Hình hộp chữ nhật có bao nhiêu cạnh?",
            answers: ["8 cạnh", "10 cạnh", "12 cạnh", "16 cạnh"],
            correct: 2,
            explanation: "Có 4 cạnh ở mặt trên, 4 cạnh ở mặt dưới và 4 cạnh đứng: tổng cộng 12.",
          },
          {
            prompt: "Một hình vuông có cạnh dài 7 cm. Chu vi là bao nhiêu?",
            answers: ["14 cm", "21 cm", "28 cm", "49 cm"],
            correct: 2,
            explanation: "Chu vi hình vuông bằng 4 lần độ dài cạnh: 4 × 7 = 28 cm.",
          },
        ],
      },
      {
        id: "fractions",
        title: "Phân số tốc độ",
        description: "Tính nhẩm và về đích",
        level: "TĂNG TỐC",
        duration: "5 phút",
        questions: [
          {
            prompt: "Phân số nào bằng 3/4?",
            answers: ["6/10", "9/12", "12/20", "15/24"],
            correct: 1,
            explanation: "Nhân cả tử và mẫu của 3/4 với 3 ta được 9/12.",
          },
          {
            prompt: "Tính 1/2 + 1/4.",
            answers: ["1/6", "2/6", "2/4", "3/4"],
            correct: 3,
            explanation: "Quy đồng 1/2 thành 2/4, rồi cộng 2/4 + 1/4 = 3/4.",
          },
          {
            prompt: "2/3 của 18 là bao nhiêu?",
            answers: ["6", "9", "12", "15"],
            correct: 2,
            explanation: "18 chia 3 được 6; 6 nhân 2 được 12.",
          },
          {
            prompt: "Rút gọn phân số 15/25.",
            answers: ["2/5", "3/5", "3/4", "5/3"],
            correct: 1,
            explanation: "Chia cả tử và mẫu cho ước chung lớn nhất là 5: 15/25 = 3/5.",
          },
          {
            prompt: "Viết 0,2 dưới dạng phân số tối giản.",
            answers: ["1/2", "1/4", "1/5", "2/5"],
            correct: 2,
            explanation: "0,2 = 2/10 = 1/5 sau khi rút gọn.",
          },
        ],
      },
    ],
  },
  {
    id: "science",
    name: "Khoa học",
    shortName: "Khoa học",
    category: "KHÁM PHÁ & THÍ NGHIỆM",
    color: "green",
    symbol: "✳",
    description: "Hỏi “tại sao?” và tìm câu trả lời.",
    topics: [
      {
        id: "physics",
        title: "Vật lý quanh ta",
        description: "Những quy luật thú vị",
        level: "KHÁM PHÁ",
        duration: "5 phút",
        questions: [
          {
            prompt: "Ánh sáng Mặt Trời đến Trái Đất mất khoảng bao lâu?",
            answers: ["8 giây", "8 phút", "8 giờ", "8 ngày"],
            correct: 1,
            explanation: "Ánh sáng đi khoảng 150 triệu km từ Mặt Trời đến Trái Đất trong gần 8 phút 20 giây.",
          },
          {
            prompt: "Đơn vị đo cường độ dòng điện là gì?",
            answers: ["Vôn (V)", "Oát (W)", "Ampe (A)", "Jun (J)"],
            correct: 2,
            explanation: "Ampe, ký hiệu A, là đơn vị đo cường độ dòng điện trong hệ SI.",
          },
          {
            prompt: "Âm thanh không thể truyền qua môi trường nào?",
            answers: ["Không khí", "Nước", "Thép", "Chân không"],
            correct: 3,
            explanation: "Âm thanh cần môi trường vật chất để truyền, vì vậy không truyền được trong chân không.",
          },
          {
            prompt: "Lực nào giữ các hành tinh chuyển động quanh Mặt Trời?",
            answers: ["Lực ma sát", "Lực đàn hồi", "Lực hấp dẫn", "Lực đẩy"],
            correct: 2,
            explanation: "Lực hấp dẫn giữa Mặt Trời và các hành tinh giữ chúng trên quỹ đạo.",
          },
          {
            prompt: "Nhiệt độ nước sôi ở áp suất khí quyển tiêu chuẩn là bao nhiêu?",
            answers: ["0°C", "50°C", "100°C", "150°C"],
            correct: 2,
            explanation: "Ở áp suất khí quyển tiêu chuẩn, nước sôi ở 100°C.",
          },
        ],
      },
      {
        id: "biology",
        title: "Bí mật cơ thể",
        description: "Từ tế bào đến hệ cơ quan",
        level: "CƠ BẢN",
        duration: "5 phút",
        questions: [
          {
            prompt: "Cơ quan nào bơm máu đi khắp cơ thể?",
            answers: ["Phổi", "Gan", "Tim", "Thận"],
            correct: 2,
            explanation: "Tim co bóp nhịp nhàng để bơm máu đến phổi và các cơ quan trong cơ thể.",
          },
          {
            prompt: "Cây xanh hấp thụ khí nào khi quang hợp?",
            answers: ["Ôxi", "Nitơ", "Hiđrô", "Cacbon điôxít"],
            correct: 3,
            explanation: "Trong quang hợp, cây hấp thụ CO₂ và nước để tạo chất hữu cơ, đồng thời thải ôxi.",
          },
          {
            prompt: "Đơn vị cấu tạo và chức năng cơ bản của sự sống là gì?",
            answers: ["Mô", "Cơ quan", "Tế bào", "Hệ cơ quan"],
            correct: 2,
            explanation: "Tế bào là đơn vị cấu tạo và chức năng cơ bản của mọi cơ thể sống.",
          },
          {
            prompt: "Xương nào dài nhất trong cơ thể người?",
            answers: ["Xương cánh tay", "Xương đùi", "Xương sườn", "Xương chày"],
            correct: 1,
            explanation: "Xương đùi là xương dài và khỏe nhất trong bộ xương người.",
          },
          {
            prompt: "Cơ quan nào giúp trao đổi khí khi chúng ta hít thở?",
            answers: ["Dạ dày", "Phổi", "Tim", "Não"],
            correct: 1,
            explanation: "Ở phổi, ôxi đi vào máu và cacbon điôxít được đưa ra ngoài khi thở.",
          },
        ],
      },
      {
        id: "chemistry",
        title: "Phòng thí nghiệm",
        description: "Nguyên tố và phản ứng",
        level: "TĂNG TỐC",
        duration: "5 phút",
        questions: [
          {
            prompt: "Ký hiệu hóa học của vàng là gì?",
            answers: ["Ag", "Au", "Fe", "Cu"],
            correct: 1,
            explanation: "Vàng có ký hiệu Au, bắt nguồn từ tên Latin aurum.",
          },
          {
            prompt: "Nước tinh khiết có công thức hóa học nào?",
            answers: ["CO₂", "O₂", "H₂O", "NaCl"],
            correct: 2,
            explanation: "Mỗi phân tử nước gồm hai nguyên tử hiđrô và một nguyên tử ôxi: H₂O.",
          },
          {
            prompt: "Dung dịch có pH nhỏ hơn 7 thường có tính chất gì?",
            answers: ["Axit", "Bazơ", "Trung tính", "Kim loại"],
            correct: 0,
            explanation: "Ở điều kiện thông thường, dung dịch có pH nhỏ hơn 7 là dung dịch axit.",
          },
          {
            prompt: "Khí nào chiếm tỉ lệ lớn nhất trong không khí?",
            answers: ["Ôxi", "Cacbon điôxít", "Nitơ", "Hiđrô"],
            correct: 2,
            explanation: "Nitơ chiếm khoảng 78% thể tích không khí khô.",
          },
          {
            prompt: "Muối ăn có công thức hóa học là gì?",
            answers: ["HCl", "NaOH", "NaCl", "KCl"],
            correct: 2,
            explanation: "Muối ăn thông thường là natri clorua, có công thức NaCl.",
          },
        ],
      },
    ],
  },
];

function createStarterQuestion(prompt, correctAnswer, incorrectAnswers, explanation) {
  return {
    prompt,
    answers: [correctAnswer, ...incorrectAnswers],
    correct: 0,
    explanation,
  };
}

function createStarterTopic(id, title, description, art, questionData) {
  return {
    id,
    title,
    description,
    level: "KHÁM PHÁ",
    duration: "5 phút",
    art,
    questions: questionData.map(([prompt, answer, alternatives, explanation]) =>
      createStarterQuestion(prompt, answer, alternatives, explanation),
    ),
  };
}

const additionalSubjects = [
  {
    id: "literature",
    name: "Ngữ văn",
    shortName: "Văn",
    category: "ĐỌC HIỂU & NGÔN TỪ",
    color: "rose",
    symbol: "文",
    description: "Đọc sâu, cảm nhận hay, viết điều mình nghĩ.",
    topics: [createStarterTopic("literary-reading", "Đọc hiểu văn bản", "Khám phá hình ảnh và ý nghĩa trong văn học", ["Aa", "✍", "文"], [
      ["Từ ngữ nào diễn tả sự vật bằng cách gọi tên sự vật khác có nét tương đồng?", "Ẩn dụ", ["Nhân hóa", "Liệt kê", "Nói quá"], "Ẩn dụ gọi tên sự vật này bằng tên sự vật khác dựa trên nét tương đồng giữa chúng."],
      ["Trong câu “Mặt trời xuống biển như hòn lửa”, tác giả sử dụng biện pháp tu từ nào?", "So sánh", ["Điệp ngữ", "Hoán dụ", "Nói giảm"], "Từ “như” nối hai hình ảnh có nét tương đồng: mặt trời và hòn lửa."],
      ["Nhân vật chính trong một truyện thường là ai?", "Nhân vật giữ vai trò trung tâm của câu chuyện", ["Người chỉ xuất hiện ở phần kết", "Người kể chuyện trong mọi trường hợp", "Nhân vật không có lời thoại"], "Nhân vật chính giữ vai trò trung tâm và thường gắn với các sự việc quan trọng của truyện."],
      ["Tác dụng thường gặp của ngôi kể thứ nhất là gì?", "Tạo cảm giác gần gũi qua lời kể của người trong cuộc", ["Kể được suy nghĩ của mọi nhân vật cùng lúc", "Loại bỏ hoàn toàn cảm xúc", "Chỉ dùng để kể sự việc có thật"], "Ngôi kể thứ nhất thường tạo sự gần gũi, chủ quan qua trải nghiệm của người kể xưng “tôi”."],
      ["Khi nêu nhận xét về một nhân vật, dẫn chứng nào thuyết phục nhất?", "Chi tiết và lời nói cụ thể trong văn bản", ["Một ý kiến không liên quan của người đọc", "Chỉ nhắc lại tên nhân vật", "Một kết luận không kèm căn cứ"], "Nhận xét cần dựa vào chi tiết, hành động hoặc lời nói có trong văn bản."],
    ])],
  },
  {
    id: "english",
    name: "Tiếng Anh",
    shortName: "Anh",
    category: "NGÔN NGỮ & GIAO TIẾP",
    color: "violet",
    symbol: "A",
    description: "Tích lũy từ vựng, tự tin giao tiếp.",
    topics: [createStarterTopic("english-everyday", "English mỗi ngày", "Ngữ pháp và từ vựng trong tình huống quen thuộc", ["Hi!", "Aa", "ABC"], [
      ["Choose the correct form: “She ___ to school every day.”", "goes", ["go", "going", "went"], "Với chủ ngữ ngôi thứ ba số ít ở thì hiện tại đơn, động từ “go” thêm -es."],
      ["What is the past tense of “buy”?", "bought", ["buyed", "buys", "buying"], "“Buy” là động từ bất quy tắc; dạng quá khứ và quá khứ phân từ là “bought”."],
      ["Which word means “thư viện”?", "library", ["bookshop", "kitchen", "station"], "“Library” có nghĩa là thư viện, nơi mọi người có thể đọc hoặc mượn sách."],
      ["Choose the correct comparison: “A train is ___ than a bicycle.”", "faster", ["fast", "fastest", "more fast"], "So sánh hơn của tính từ ngắn “fast” là “faster”."],
      ["Complete the sentence: “There ___ two windows in my room.”", "are", ["is", "am", "be"], "Dùng “there are” trước danh từ số nhiều “two windows”."],
    ])],
  },
  {
    id: "history",
    name: "Lịch sử",
    shortName: "Sử",
    category: "DÒNG THỜI GIAN & SỰ KIỆN",
    color: "orange",
    symbol: "⌛",
    description: "Kết nối sự kiện hôm qua với hôm nay.",
    topics: [createStarterTopic("vietnam-history", "Dấu mốc Việt Nam", "Những sự kiện quan trọng trong lịch sử hiện đại", ["1945", "⏳", "★"], [
      ["Nước Việt Nam Dân chủ Cộng hòa ra đời vào ngày nào?", "2 tháng 9 năm 1945", ["19 tháng 8 năm 1945", "30 tháng 4 năm 1975", "7 tháng 5 năm 1954"], "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình."],
      ["Chiến thắng Điện Biên Phủ kết thúc vào năm nào?", "1954", ["1945", "1968", "1975"], "Chiến dịch Điện Biên Phủ kết thúc thắng lợi ngày 7/5/1954."],
      ["Cách mạng tháng Tám thành công vào năm nào?", "1945", ["1930", "1946", "1954"], "Tháng Tám năm 1945, nhân dân giành chính quyền trên cả nước."],
      ["Đường lối Đổi mới ở Việt Nam được đề ra tại Đại hội VI năm nào?", "1986", ["1975", "1980", "1995"], "Đại hội đại biểu toàn quốc lần thứ VI của Đảng năm 1986 đề ra đường lối Đổi mới."],
      ["Ngày giải phóng miền Nam, thống nhất đất nước là ngày nào?", "30 tháng 4 năm 1975", ["2 tháng 9 năm 1945", "7 tháng 5 năm 1954", "19 tháng 8 năm 1945"], "Ngày 30/4/1975 đánh dấu sự kết thúc chiến tranh và thống nhất đất nước."],
    ])],
  },
  {
    id: "geography",
    name: "Địa lý",
    shortName: "Địa lý",
    category: "BẢN ĐỒ & MÔI TRƯỜNG",
    color: "cyan",
    symbol: "◎",
    description: "Đọc bản đồ, khám phá thiên nhiên và con người.",
    topics: [createStarterTopic("vietnam-geography", "Khám phá địa lý Việt Nam", "Địa hình, khí hậu và vùng kinh tế", ["VN", "🧭", "🌏"], [
      ["Đồng bằng nào nằm ở cực Nam của Việt Nam?", "Đồng bằng sông Cửu Long", ["Đồng bằng sông Hồng", "Đồng bằng Thanh - Nghệ - Tĩnh", "Đồng bằng duyên hải Nam Trung Bộ"], "Đồng bằng sông Cửu Long nằm ở phía Nam, do hệ thống sông Tiền và sông Hậu bồi đắp."],
      ["Đỉnh núi cao nhất Việt Nam là đỉnh nào?", "Phan Xi Păng", ["Bạch Mã", "Ngọc Linh", "Tản Viên"], "Phan Xi Păng thuộc dãy Hoàng Liên Sơn, cao 3.143 m."],
      ["Tây Nguyên nổi tiếng với loại cây công nghiệp nào?", "Cà phê", ["Cây đay", "Cây cói", "Cây dừa nước"], "Tây Nguyên có đất badan rộng lớn và khí hậu phù hợp với cây cà phê."],
      ["Vịnh Hạ Long thuộc tỉnh, thành nào?", "Quảng Ninh", ["Khánh Hòa", "Kiên Giang", "Thanh Hóa"], "Vịnh Hạ Long nằm ở tỉnh Quảng Ninh, thuộc vùng Đông Bắc Việt Nam."],
      ["Gió mùa Đông Bắc thường làm miền Bắc nước ta có thời tiết như thế nào vào mùa đông?", "Lạnh và thường khô ở đầu mùa", ["Nóng quanh năm", "Mưa dông quanh năm", "Lạnh nhưng không bao giờ có mưa phùn"], "Gió mùa Đông Bắc khiến miền Bắc có mùa đông lạnh; đầu mùa thường lạnh khô, cuối mùa thường lạnh ẩm."],
    ])],
  },
  {
    id: "informatics",
    name: "Tin học",
    shortName: "Tin học",
    category: "TƯ DUY SỐ & AN TOÀN",
    color: "indigo",
    symbol: "⌘",
    description: "Tư duy thuật toán, sử dụng công nghệ an toàn.",
    topics: [createStarterTopic("digital-skills", "Công dân số thông thái", "Dữ liệu, thuật toán và an toàn trực tuyến", ["01", "⌘", "✓"], [
      ["Dãy số nhị phân chỉ sử dụng những chữ số nào?", "0 và 1", ["1 và 2", "0 đến 9", "A và B"], "Hệ nhị phân dùng hai chữ số 0 và 1 để biểu diễn dữ liệu."],
      ["Đặc điểm nào giúp mật khẩu an toàn hơn?", "Dài, khó đoán và kết hợp nhiều loại ký tự", ["Dùng ngày sinh để dễ nhớ", "Dùng “123456”", "Dùng chung một mật khẩu ở mọi nơi"], "Mật khẩu dài, khó đoán và khác nhau giữa các tài khoản giúp giảm nguy cơ bị chiếm quyền."],
      ["Thuật toán là gì?", "Một dãy hữu hạn các bước rõ ràng để giải quyết vấn đề", ["Một loại thiết bị lưu trữ", "Một ngôn ngữ chỉ máy tính mới hiểu", "Một trang web tìm kiếm"], "Thuật toán mô tả tuần tự các bước để giải quyết một bài toán hoặc nhiệm vụ."],
      ["Khi nhận liên kết đăng nhập lạ yêu cầu nhập mật khẩu, em nên làm gì?", "Không mở liên kết, kiểm tra với người lớn hoặc đơn vị chính thức", ["Nhập thử mật khẩu để kiểm tra", "Chuyển tiếp cho cả lớp", "Tải mọi tệp đính kèm"], "Liên kết lạ có thể dùng để lừa lấy thông tin; hãy kiểm tra qua kênh chính thức và báo người lớn."],
      ["Phần mềm bảng tính phù hợp nhất để làm việc nào?", "Tính toán và sắp xếp dữ liệu dạng bảng", ["Chỉnh sửa video chuyên nghiệp", "Quản lý thiết bị mạng", "Vẽ mô hình 3D"], "Bảng tính tổ chức dữ liệu theo hàng, cột và hỗ trợ công thức tính toán."],
    ])],
  },
  {
    id: "technology",
    name: "Công nghệ",
    shortName: "Công nghệ",
    category: "THIẾT KẾ & SÁNG TẠO",
    color: "yellow",
    symbol: "⚙",
    description: "Từ ý tưởng đến sản phẩm hữu ích.",
    topics: [createStarterTopic("design-thinking", "Nhà thiết kế sáng tạo", "Quy trình thiết kế và công nghệ quanh ta", ["⚙", "✏", "↗"], [
      ["Bước đầu tiên khi thiết kế một sản phẩm thường là gì?", "Xác định nhu cầu hoặc vấn đề cần giải quyết", ["Trang trí sản phẩm", "Sản xuất hàng loạt ngay", "Chọn màu bao bì"], "Cần hiểu người dùng và vấn đề trước khi đưa ra giải pháp thiết kế."],
      ["Vật liệu nào dẫn điện tốt trong các lựa chọn sau?", "Đồng", ["Cao su", "Thủy tinh", "Gỗ khô"], "Đồng là kim loại dẫn điện tốt và thường được dùng làm lõi dây dẫn."],
      ["Nguồn năng lượng nào có thể tái tạo?", "Ánh sáng Mặt Trời", ["Than đá", "Dầu mỏ", "Khí tự nhiên"], "Năng lượng Mặt Trời được bổ sung liên tục từ tự nhiên và là nguồn năng lượng tái tạo."],
      ["Vì sao nên thử nghiệm mẫu trước khi làm nhiều sản phẩm?", "Để phát hiện vấn đề và cải tiến thiết kế", ["Để tránh phải xác định nhu cầu", "Để bỏ qua ý kiến người dùng", "Để không cần kiểm tra an toàn"], "Thử nghiệm giúp đánh giá mẫu, phát hiện điểm cần sửa trước khi hoàn thiện."],
      ["Thiết bị nào giúp biến điện năng thành ánh sáng trong đèn?", "Bóng đèn", ["Công tắc", "Phích cắm", "Cầu chì"], "Bóng đèn chuyển đổi điện năng thành ánh sáng và một phần nhiệt năng."],
    ])],
  },
  {
    id: "civics",
    name: "GDCD & Kinh tế - Pháp luật",
    shortName: "GDCD / KTPL",
    category: "CÔNG DÂN & CUỘC SỐNG",
    color: "teal",
    symbol: "⚖",
    description: "Hiểu quyền, trách nhiệm và lựa chọn có trách nhiệm.",
    topics: [createStarterTopic("responsible-citizenship", "Công dân có trách nhiệm", "Quyền, nghĩa vụ và kỹ năng kinh tế hằng ngày", ["§", "⚖", "♡"], [
      ["Khi chứng kiến bạn bị bắt nạt, cách ứng xử an toàn và có trách nhiệm là gì?", "Báo người lớn đáng tin cậy và hỗ trợ bạn an toàn", ["Đứng xem và quay video", "Chia sẻ hình ảnh lên mạng", "Tự mình dùng bạo lực để trả đũa"], "Tìm sự hỗ trợ từ giáo viên hoặc người lớn và ưu tiên an toàn của người bị bắt nạt."],
      ["Quy tắc giao thông đường bộ áp dụng với ai?", "Mọi người tham gia giao thông", ["Chỉ người lái ô tô", "Chỉ người trưởng thành", "Chỉ người đi bộ"], "Người đi bộ, người đi xe đạp và người điều khiển phương tiện đều cần tuân thủ quy tắc giao thông."],
      ["Nếu muốn mua một món đồ, bước nào giúp quản lý tiền hợp lý?", "So sánh nhu cầu, giá cả và số tiền mình có", ["Mua ngay món đắt nhất", "Vay tiền mà không xem khả năng trả", "Bỏ qua thông tin sản phẩm"], "Lập kế hoạch và cân đối ngân sách giúp đưa ra quyết định chi tiêu phù hợp."],
      ["Thông tin cá nhân của người khác nên được chia sẻ khi nào?", "Khi có sự đồng ý và lý do phù hợp", ["Bất cứ khi nào thấy thú vị", "Khi đăng lên nhóm đông người", "Khi người khác không biết"], "Tôn trọng quyền riêng tư nghĩa là không tự ý thu thập hoặc phát tán thông tin của người khác."],
      ["Nếu không đồng ý với ý kiến của bạn, cách thảo luận phù hợp là gì?", "Lắng nghe và trình bày quan điểm bằng lý lẽ tôn trọng", ["Công kích cá nhân", "Ngắt lời và chế giễu", "Đăng thông tin riêng tư của bạn"], "Trao đổi bình tĩnh, lắng nghe và nêu lý do giúp giải quyết bất đồng một cách tôn trọng."],
    ])],
  },
  {
    id: "physical-education",
    name: "Giáo dục thể chất",
    shortName: "Thể chất",
    category: "VẬN ĐỘNG & SỨC KHỎE",
    color: "red",
    symbol: "↗",
    description: "Vận động vui, rèn sức bền và tinh thần đồng đội.",
    topics: [createStarterTopic("active-and-healthy", "Vận động khỏe mạnh", "Nguyên tắc luyện tập an toàn và fair play", ["🏃", "⚽", "💪"], [
      ["Vì sao nên khởi động trước khi vận động mạnh?", "Giúp cơ thể chuẩn bị dần và giảm nguy cơ chấn thương", ["Để không cần uống nước", "Để cơ thể mất sức trước", "Để bỏ qua phần luyện tập chính"], "Khởi động làm cơ và tim mạch thích nghi dần với cường độ vận động."],
      ["Khi tập luyện ra nhiều mồ hôi, điều gì giúp cơ thể hoạt động an toàn?", "Uống nước phù hợp và nghỉ khi thấy mệt", ["Cố tập tiếp dù chóng mặt", "Không uống nước cả buổi", "Chỉ uống nước tăng lực"], "Bổ sung nước và nghỉ ngơi khi cơ thể có dấu hiệu quá sức giúp hạn chế mất nước."],
      ["Tinh thần fair play trong thi đấu là gì?", "Tôn trọng luật chơi, đối thủ và đồng đội", ["Thắng bằng mọi cách", "Cố ý làm đối thủ bị thương", "Không chấp nhận quyết định trọng tài"], "Fair play đề cao sự trung thực, tôn trọng luật và tôn trọng những người cùng thi đấu."],
      ["Nếu cảm thấy đau bất thường trong lúc tập, nên làm gì?", "Dừng lại và báo cho giáo viên hoặc người phụ trách", ["Cố tiếp tục với cường độ cao hơn", "Giấu triệu chứng", "Tự ý dùng thuốc của người khác"], "Dừng vận động và báo người có trách nhiệm giúp xử lý sớm, an toàn."],
      ["Để cải thiện sức bền, cách tập nào phù hợp?", "Tăng thời lượng hoặc cường độ từ từ và nghỉ hợp lý", ["Tập hết sức liên tục mỗi ngày", "Không cần ngủ đủ", "Chỉ luyện tập một lần thật lâu"], "Luyện tập tiến triển dần kết hợp nghỉ ngơi giúp cơ thể thích nghi và phục hồi."],
    ])],
  },
  {
    id: "music",
    name: "Âm nhạc",
    shortName: "Âm nhạc",
    category: "GIAI ĐIỆU & NHỊP ĐIỆU",
    color: "pink",
    symbol: "♫",
    description: "Lắng nghe, cảm nhận và sáng tạo giai điệu.",
    topics: [createStarterTopic("music-and-rhythm", "Nhịp điệu vui", "Làm quen với những yếu tố cơ bản của âm nhạc", ["♫", "♪", "♬"], [
      ["Tốc độ nhanh hay chậm của một bản nhạc được gọi là gì?", "Tempo (tốc độ)", ["Cao độ", "Âm sắc", "Hòa âm"], "Tempo cho biết nhịp độ nhanh hay chậm của âm nhạc."],
      ["Cao độ cho biết đặc điểm nào của âm thanh?", "Âm thanh trầm hay bổng", ["Âm thanh dài hay ngắn", "Âm thanh to hay nhỏ", "Nhạc cụ nặng hay nhẹ"], "Cao độ mô tả âm thanh nghe trầm hoặc bổng."],
      ["Nhịp trong âm nhạc giúp người nghe cảm nhận điều gì?", "Sự đều đặn và cách sắp xếp phách", ["Màu sắc của nhạc cụ", "Lời bài hát được viết bằng chữ gì", "Kích thước sân khấu"], "Nhịp tổ chức các phách theo mẫu đều đặn trong bản nhạc."],
      ["Ký hiệu “f” trong bản nhạc thường chỉ cách thể hiện nào?", "Mạnh (forte)", ["Nhẹ (piano)", "Rất chậm", "Lặp lại từ đầu"], "Ký hiệu f là viết tắt của forte, nghĩa là chơi hoặc hát mạnh."],
      ["Hòa tấu là hình thức biểu diễn như thế nào?", "Nhiều nhạc cụ hoặc người biểu diễn cùng phối hợp", ["Một người đọc thầm bản nhạc", "Chỉ có tiếng vỗ tay", "Một nhạc cụ chơi mà không theo nhịp"], "Hòa tấu là sự phối hợp của nhiều nhạc cụ trong cùng một tác phẩm."],
    ])],
  },
  {
    id: "visual-arts",
    name: "Mỹ thuật",
    shortName: "Mỹ thuật",
    category: "HÌNH ẢNH & THIẾT KẾ",
    color: "purple",
    symbol: "◈",
    description: "Quan sát thế giới qua màu sắc, hình khối và đường nét.",
    topics: [createStarterTopic("art-and-design", "Ngôn ngữ tạo hình", "Màu sắc, bố cục và cách quan sát nghệ thuật", ["◈", "🎨", "✿"], [
      ["Ba màu cơ bản trong hội họa truyền thống thường được dạy là gì?", "Đỏ, vàng và xanh lam", ["Đen, trắng và xám", "Cam, tím và xanh lục", "Nâu, hồng và vàng"], "Đỏ, vàng và xanh lam là bộ ba màu cơ bản thường dùng để giới thiệu pha màu trong hội họa."],
      ["Bố cục trong một bức tranh giúp điều gì?", "Sắp xếp các hình ảnh để tạo sự cân đối và hướng nhìn", ["Làm tranh tự động chuyển động", "Thay thế mọi màu sắc", "Quyết định giá tiền của tranh"], "Bố cục tổ chức các yếu tố thị giác để tạo trọng tâm và sự hài hòa."],
      ["Một vật thể hình khối được thể hiện có chiều sâu tốt hơn nhờ yếu tố nào?", "Sáng, tối và bóng đổ", ["Chỉ dùng một đường viền", "Xóa mọi vùng tối", "Đặt vật thể ngoài trang giấy"], "Sáng, tối và bóng đổ gợi tả thể tích và hướng chiếu sáng."],
      ["Màu nào thường tạo cảm giác ấm áp?", "Đỏ cam", ["Xanh lam", "Xanh lục", "Tím xanh"], "Các màu như đỏ, cam và vàng thường được gọi là nhóm màu nóng."],
      ["Khi góp ý sản phẩm nghệ thuật của bạn, cách nào phù hợp?", "Nêu điều mình quan sát được và góp ý cụ thể, tôn trọng", ["Chê bai người làm", "So sánh để làm bạn xấu hổ", "Tự ý sửa sản phẩm của bạn"], "Phản hồi cụ thể, tử tế giúp người sáng tạo có thêm ý tưởng để phát triển."],
    ])],
  },
  {
    id: "national-defense",
    name: "GDQP và An ninh",
    shortName: "QP-AN",
    category: "AN TOÀN & TRÁCH NHIỆM",
    color: "slate",
    symbol: "★",
    description: "Học kỹ năng an toàn và trách nhiệm với cộng đồng.",
    topics: [createStarterTopic("safety-and-community", "An toàn cùng cộng đồng", "Kỹ năng ứng phó và ý thức bảo vệ cộng đồng", ["★", "🛡", "✓"], [
      ["Khi nghe thông báo sơ tán tại trường, em nên làm gì?", "Bình tĩnh làm theo hướng dẫn của giáo viên", ["Chạy ngược lại lấy đồ", "Tách khỏi lớp để quay phim", "Chen lấn để đi trước"], "Giữ bình tĩnh, đi theo lối thoát hiểm và làm theo hướng dẫn của người phụ trách."],
      ["Trong trường hợp khẩn cấp, số điện thoại cứu hỏa ở Việt Nam là số nào?", "114", ["111", "113", "115"], "114 là số điện thoại báo cháy và yêu cầu cứu nạn, cứu hộ; 113 gọi công an, 115 gọi cấp cứu y tế."],
      ["Khi phát hiện vật lạ có dấu hiệu nguy hiểm, cách xử lý an toàn là gì?", "Không chạm vào, tránh xa và báo người lớn hoặc cơ quan chức năng", ["Mang về nhà kiểm tra", "Đá hoặc di chuyển vật đó", "Rủ bạn đến xem gần hơn"], "Không chạm hoặc tự di chuyển vật đáng ngờ; hãy giữ khoảng cách và báo người có trách nhiệm."],
      ["Nếu nhận được tin chưa kiểm chứng về tình huống khẩn cấp, em nên làm gì?", "Kiểm tra thông tin từ cơ quan hoặc kênh chính thức trước khi chia sẻ", ["Chia sẻ ngay để mọi người sợ", "Thêm chi tiết cho hấp dẫn", "Gửi tiếp vào mọi nhóm chat"], "Kiểm chứng thông tin giúp tránh gây hoang mang và lan truyền tin sai."],
      ["Khi gặp người bị nạn, ưu tiên đầu tiên là gì?", "Đảm bảo an toàn cho mình và gọi người có chuyên môn hỗ trợ", ["Tự thực hiện việc vượt quá khả năng", "Tụ tập đông người quanh nạn nhân", "Di chuyển nạn nhân trong mọi trường hợp"], "Hãy tránh tạo thêm nguy hiểm, gọi cấp cứu hoặc người lớn và làm theo hướng dẫn chuyên môn."],
    ])],
  },
  {
    id: "career-experience",
    name: "Trải nghiệm & Hướng nghiệp",
    shortName: "Hướng nghiệp",
    category: "BẢN THÂN & TƯƠNG LAI",
    color: "lime",
    symbol: "✦",
    description: "Hiểu điểm mạnh và khám phá con đường phù hợp.",
    topics: [createStarterTopic("know-yourself", "Khám phá điểm mạnh", "Đặt mục tiêu, hợp tác và tìm hiểu nghề nghiệp", ["🎯", "✦", "↗"], [
      ["Mục tiêu SMART cần có đặc điểm nào?", "Cụ thể và có thể đo lường, phù hợp, thực tế, có thời hạn", ["Không cần xác định điều muốn làm", "Luôn phụ thuộc vào người khác", "Không có mốc thời gian"], "SMART thường gồm: cụ thể, đo lường được, có thể đạt được, phù hợp và có thời hạn."],
      ["Khi làm việc nhóm, cách nào giúp mọi người phối hợp tốt?", "Lắng nghe, phân chia nhiệm vụ rõ ràng và cùng chịu trách nhiệm", ["Để một người làm hết", "Không chia sẻ tiến độ", "Tranh công khi hoàn thành"], "Phân công minh bạch và trao đổi thường xuyên giúp nhóm phối hợp hiệu quả."],
      ["Cách tốt để tìm hiểu một nghề mình quan tâm là gì?", "Tìm nguồn tin đáng tin cậy và hỏi người có kinh nghiệm", ["Chỉ dựa vào một video ngắn", "Chọn nghề theo lời đồn", "Bỏ qua yêu cầu học tập của nghề"], "Kết hợp nguồn tin đáng tin cậy với trao đổi cùng người có kinh nghiệm giúp hiểu công việc thực tế."],
      ["Sau khi nhận góp ý về bài làm, thái độ nào giúp mình tiến bộ?", "Xem xét góp ý phù hợp và thử cải thiện", ["Bỏ qua mọi góp ý", "Xem góp ý là sự công kích", "Không bao giờ thử lại"], "Phản hồi có ích giúp nhận ra điểm mạnh và điều cần luyện tập thêm."],
      ["Khi chưa biết mình thích lĩnh vực nào, bước đầu tiên phù hợp là gì?", "Thử nhiều hoạt động an toàn và ghi nhận điều mình hứng thú", ["Chọn ngẫu nhiên rồi không tìm hiểu", "Nghĩ rằng mình không có điểm mạnh", "Chỉ chọn giống bạn bè"], "Trải nghiệm đa dạng giúp nhận ra sở thích, giá trị và khả năng của bản thân."],
    ])],
  },
];

subjects.push(...additionalSubjects);

const curriculumExtensions = {
  math: [
    createStarterTopic("statistics-and-chance", "Thống kê và xác suất", "Đọc dữ liệu và dự đoán khả năng xảy ra", ["📊", "∑", "%"], [
      ["Trung bình cộng của 4, 6 và 8 là bao nhiêu?", "6", ["5", "7", "18"], "Trung bình cộng bằng tổng các số chia cho số lượng: (4 + 6 + 8) ÷ 3 = 6."],
      ["Trung vị của dãy số 1, 3, 5, 7, 9 là số nào?", "5", ["3", "6", "9"], "Dãy đã được sắp xếp; số nằm chính giữa là 5."],
      ["Khoảng biến thiên của các số 2, 4, 9 và 12 là bao nhiêu?", "10", ["8", "9", "12"], "Khoảng biến thiên bằng số lớn nhất trừ số nhỏ nhất: 12 − 2 = 10."],
      ["Gieo một con xúc xắc cân đối sáu mặt. Xác suất ra số chẵn là bao nhiêu?", "1/2", ["1/6", "1/3", "2/3"], "Có ba kết quả chẵn trong sáu kết quả đồng khả năng: 3/6 = 1/2."],
      ["Xác suất của một sự kiện không thể xảy ra bằng bao nhiêu?", "0", ["1/4", "1/2", "1"], "Sự kiện không thể xảy ra có xác suất bằng 0; sự kiện chắc chắn có xác suất bằng 1."],
    ]),
    createStarterTopic("ratios-and-percentages", "Tỉ lệ và phần trăm", "Ứng dụng tỉ số trong mua sắm và đo lường", ["比例", "%", "↗"], [
      ["Tỉ số của 12 và 18 rút gọn thành bao nhiêu?", "2:3", ["3:2", "6:9:1", "12:6"], "Chia cả hai số cho ước chung lớn nhất là 6: 12:18 = 2:3."],
      ["Một lớp có 40 học sinh, trong đó 25% đi xe đạp. Có bao nhiêu bạn đi xe đạp?", "10 bạn", ["5 bạn", "15 bạn", "25 bạn"], "25% của 40 bằng 0,25 × 40 = 10 học sinh."],
      ["Giá 200.000đ tăng 10%. Giá mới là bao nhiêu?", "220.000đ", ["180.000đ", "210.000đ", "240.000đ"], "10% của 200.000đ là 20.000đ; cộng vào giá cũ được 220.000đ."],
      ["Bản đồ có tỉ lệ 1:50.000. Hai địa điểm cách nhau 4 cm trên bản đồ, ngoài thực tế cách nhau bao xa?", "2 km", ["200 m", "20 km", "200 km"], "4 cm × 50.000 = 200.000 cm = 2 km."],
      ["Phân số 3/5 tương ứng với bao nhiêu phần trăm?", "60%", ["30%", "50%", "80%"], "3/5 = 0,6; đổi sang phần trăm được 0,6 × 100% = 60%."],
    ]),
    createStarterTopic("linear-equations", "Phương trình bậc nhất", "Tìm ẩn số qua các bước biến đổi cân bằng", ["x=?", "＝", "✓"], [
      ["Giải phương trình x + 8 = 15.", "x = 7", ["x = 5", "x = 8", "x = 23"], "Trừ 8 ở hai vế: x = 15 − 8 = 7."],
      ["Giải phương trình 4x = 24.", "x = 6", ["x = 4", "x = 24", "x = 32"], "Chia hai vế cho 4: x = 24 ÷ 4 = 6."],
      ["Giải phương trình 2x − 5 = 11.", "x = 8", ["x = 2", "x = 4", "x = 14"], "Cộng 5 hai vế được 2x = 16; chia 2 được x = 8."],
      ["Giải phương trình 3(x + 2) = 21.", "x = 5", ["x = 3", "x = 7", "x = 19"], "Chia hai vế cho 3 được x + 2 = 7, nên x = 5."],
      ["Một số cộng với 12 bằng 30. Số đó là bao nhiêu?", "18", ["12", "30", "42"], "Gọi số cần tìm là x: x + 12 = 30 nên x = 18."],
    ]),
  ],
  science: [
    createStarterTopic("ecosystems-and-energy", "Hệ sinh thái kỳ thú", "Theo dấu dòng năng lượng trong tự nhiên", ["🌿", "🦋", "☀"], [
      ["Trong chuỗi thức ăn, sinh vật nào thường là sinh vật sản xuất?", "Thực vật xanh", ["Động vật ăn cỏ", "Động vật ăn thịt", "Nấm phân hủy"], "Thực vật xanh tạo chất hữu cơ nhờ quang hợp và thường là sinh vật sản xuất trong hệ sinh thái."],
      ["Động vật ăn cỏ trong chuỗi thức ăn thường thuộc nhóm nào?", "Sinh vật tiêu thụ", ["Sinh vật sản xuất", "Sinh vật phân hủy", "Chất vô cơ"], "Động vật lấy thức ăn từ sinh vật khác nên thuộc nhóm sinh vật tiêu thụ."],
      ["Nấm và nhiều vi khuẩn giúp hệ sinh thái bằng cách nào?", "Phân giải xác sinh vật và trả chất dinh dưỡng về môi trường", ["Tạo ánh sáng Mặt Trời", "Ngừng mọi chuỗi thức ăn", "Biến nước thành ôxi"], "Sinh vật phân hủy phân giải vật chất hữu cơ, góp phần tuần hoàn chất dinh dưỡng."],
      ["Mũi tên trong chuỗi thức ăn thường chỉ hướng nào?", "Hướng truyền vật chất và năng lượng từ thức ăn đến sinh vật ăn nó", ["Hướng gió thổi trong khu vực", "Hướng di chuyển của mọi loài", "Hướng nước chảy trong sông"], "Mũi tên thường đi từ sinh vật bị ăn đến sinh vật tiêu thụ nó, biểu thị hướng truyền vật chất và năng lượng."],
      ["Đa dạng sinh học là gì?", "Sự phong phú về loài, nguồn gen và hệ sinh thái", ["Số lượng cá thể của một loài duy nhất", "Chỉ số lượng cây trong một khu rừng", "Mức độ thay đổi thời tiết mỗi ngày"], "Đa dạng sinh học bao gồm sự phong phú ở cấp độ loài, nguồn gen và hệ sinh thái."],
    ]),
    createStarterTopic("matter-and-mixtures", "Chất và hỗn hợp", "Nhận biết tính chất và cách tách các chất quen thuộc", ["⚗", "💧", "◉"], [
      ["Nước muối là loại nào?", "Hỗn hợp đồng nhất", ["Chất tinh khiết", "Nguyên tố hóa học", "Hỗn hợp dị thể luôn lắng ngay"], "Muối tan phân bố đều trong nước tạo thành dung dịch đồng nhất."],
      ["Có thể thu muối từ nước muối bằng cách nào?", "Làm bay hơi nước", ["Dùng nam châm hút muối", "Lọc qua giấy lọc thường", "Để hỗn hợp đóng băng hoàn toàn"], "Khi nước bay hơi, muối tan còn lại dưới dạng tinh thể."],
      ["Hỗn hợp cát và sỏi có thể được tách thuận tiện bằng cách nào?", "Sàng theo kích thước hạt", ["Chưng cất", "Dùng nam châm", "Làm bay hơi"], "Cát và sỏi có kích thước khác nhau nên có thể dùng rây hoặc sàng để tách."],
      ["Chất nào sau đây là chất tinh khiết?", "Nước cất", ["Nước biển", "Không khí", "Nước đường"], "Nước cất chủ yếu chỉ gồm phân tử nước; các lựa chọn còn lại là hỗn hợp."],
      ["Dầu ăn và nước để yên thường tạo thành trạng thái nào?", "Hai lớp chất lỏng riêng biệt", ["Dung dịch trong suốt đồng nhất", "Chất rắn mới", "Một chất khí"], "Dầu và nước không hòa tan đều vào nhau; dầu thường nổi thành lớp trên."],
    ]),
    createStarterTopic("earth-moon-and-seasons", "Trái Đất và Mặt Trăng", "Tìm hiểu ngày đêm, pha trăng và chuyển động quanh Mặt Trời", ["🌍", "🌙", "☀"], [
      ["Ngày và đêm trên Trái Đất chủ yếu hình thành do chuyển động nào?", "Trái Đất tự quay quanh trục", ["Mặt Trăng tự quay quanh Trái Đất", "Mặt Trời quay quanh Trái Đất", "Trái Đất đứng yên"], "Khi Trái Đất tự quay, các khu vực lần lượt hướng về phía Mặt Trời rồi khuất khỏi ánh sáng."],
      ["Mặt Trăng sáng trên bầu trời chủ yếu vì lý do nào?", "Phản xạ ánh sáng từ Mặt Trời", ["Tự phát sáng như một ngôi sao", "Phát ra ánh sáng từ lõi nóng", "Phản chiếu ánh sáng từ các thành phố"], "Mặt Trăng không tự phát sáng đáng kể; ta nhìn thấy ánh sáng Mặt Trời phản xạ từ bề mặt của nó."],
      ["Một chu kỳ các pha Mặt Trăng kéo dài xấp xỉ bao lâu?", "29,5 ngày", ["24 giờ", "7 ngày", "365 ngày"], "Chu kỳ từ một lần trăng non đến lần tiếp theo kéo dài khoảng 29,5 ngày."],
      ["Trái Đất mất khoảng bao lâu để quay một vòng quanh Mặt Trời?", "Một năm", ["Một ngày", "Một tháng", "Một tuần"], "Một vòng chuyển động của Trái Đất quanh Mặt Trời mất khoảng 365 ngày và gần 6 giờ."],
      ["Mùa trong năm chủ yếu liên quan đến yếu tố nào?", "Trục Trái Đất nghiêng khi Trái Đất chuyển động quanh Mặt Trời", ["Khoảng cách đến Mặt Trăng", "Mặt Trời tắt vào mùa đông", "Trái Đất ngừng tự quay"], "Độ nghiêng trục làm thay đổi góc chiếu và thời gian nhận ánh sáng ở mỗi bán cầu trong năm."],
    ]),
  ],
  literature: [
    createStarterTopic("poetry-and-images", "Thơ và hình ảnh", "Khám phá nhịp điệu, hình ảnh và cảm xúc trong thơ", ["✍", "☁", "♪"], [
      ["Trong thơ, vần có tác dụng nổi bật nào?", "Tạo sự liên kết âm thanh và góp phần tạo nhịp điệu", ["Thay thế hoàn toàn ý nghĩa câu thơ", "Cho biết chính xác thời gian sáng tác", "Bắt buộc mọi câu phải dài bằng nhau"], "Vần liên kết âm thanh giữa các tiếng, góp phần tạo nhạc điệu cho bài thơ."],
      ["Nhân vật trữ tình thường là ai?", "Chủ thể bộc lộ cảm xúc, suy nghĩ trong bài thơ", ["Người in cuốn sách", "Nhân vật chính trong mọi truyện", "Người đọc đầu tiên của tác phẩm"], "Nhân vật trữ tình là hình tượng phát ngôn, bộc lộ cảm xúc và suy nghĩ trong tác phẩm trữ tình."],
      ["Hình ảnh thơ thường giúp người đọc điều gì?", "Hình dung sự vật và cảm nhận ý nghĩa, cảm xúc", ["Biết chính xác tiểu sử tác giả", "Không cần đọc các câu thơ khác", "Xác định duy nhất một cách hiểu"], "Hình ảnh thơ gợi ra sự vật, liên tưởng và sắc thái cảm xúc cho người đọc."],
      ["Chủ đề của một bài thơ gần với nội dung nào nhất?", "Vấn đề hoặc ý nghĩa chính tác phẩm tập trung thể hiện", ["Số khổ thơ trong bài", "Tên nhà xuất bản", "Số chữ ở dòng cuối"], "Chủ đề là vấn đề trung tâm được tác phẩm đặt ra hoặc thể hiện."],
      ["Khi phân tích một biện pháp tu từ, điều gì làm nhận xét thuyết phục?", "Nêu chi tiết trong thơ và giải thích tác dụng trong ngữ cảnh", ["Chỉ kể tên biện pháp", "Đoán ý mà không dẫn chứng", "Chép lại toàn bài thơ"], "Phân tích cần có dẫn chứng cụ thể và giải thích tác dụng của biện pháp trong ngữ cảnh."],
    ]),
    createStarterTopic("narrative-perspective", "Người kể chuyện", "Nhận biết ngôi kể và điểm nhìn trong truyện", ["👁", "📖", "💬"], [
      ["Dấu hiệu thường gặp của người kể chuyện ngôi thứ nhất là gì?", "Người kể xưng “tôi” và kể từ trải nghiệm của mình", ["Người kể luôn biết mọi việc tương lai", "Truyện không có nhân vật", "Chỉ dùng lời thoại"], "Ngôi thứ nhất thường dùng đại từ “tôi”, tạo điểm nhìn gắn với trải nghiệm người kể."],
      ["Người kể chuyện ngôi thứ ba thường gọi nhân vật bằng cách nào?", "Tên nhân vật hoặc đại từ như “cậu ấy”, “cô ấy”", ["Luôn xưng “tôi”", "Chỉ gọi bằng số thứ tự", "Không nhắc đến nhân vật"], "Người kể ngôi thứ ba đứng ngoài câu chuyện và thường gọi nhân vật bằng tên hoặc đại từ."],
      ["Điểm nhìn kể chuyện ảnh hưởng điều gì?", "Thông tin và cảm nhận người đọc tiếp nhận về sự việc", ["Số trang của cuốn sách", "Màu giấy in", "Tên nhà xuất bản"], "Điểm nhìn quyết định sự việc được quan sát và kể từ vị trí nào, qua đó ảnh hưởng cách người đọc hiểu."],
      ["Lời thoại trong truyện có thể giúp người đọc nhận ra điều gì?", "Tính cách, suy nghĩ hoặc quan hệ giữa các nhân vật", ["Kết quả của mọi sự kiện trước khi đọc", "Năm xuất bản của truyện", "Số chương của tác phẩm"], "Cách nhân vật nói và đáp lại nhau góp phần thể hiện tính cách, tâm trạng và mối quan hệ."],
      ["Chi tiết lặp lại nhiều lần trong truyện có thể có vai trò gì?", "Nhấn mạnh chủ đề hoặc gợi liên tưởng", ["Luôn là lỗi in", "Thay thế cốt truyện", "Chỉ để tăng số trang"], "Một mô-típ hoặc chi tiết lặp lại có thể tạo liên kết và làm nổi bật ý nghĩa tác phẩm."],
    ]),
    createStarterTopic("argument-and-evidence", "Lập luận thuyết phục", "Phân biệt luận điểm, lý lẽ và dẫn chứng", ["🗣", "💡", "✓"], [
      ["Luận điểm trong một bài nghị luận là gì?", "Ý kiến chính cần được làm sáng tỏ", ["Một ví dụ trang trí", "Tên tác giả của bài viết", "Câu bất kỳ ở phần kết"], "Luận điểm là nhận định hoặc ý kiến trung tâm mà bài viết cần lập luận để làm rõ."],
      ["Dẫn chứng có vai trò gì trong bài nghị luận?", "Cung cấp căn cứ cụ thể hỗ trợ luận điểm", ["Thay thế toàn bộ lập luận", "Làm bài viết dài hơn mà không cần liên quan", "Ẩn nguồn thông tin"], "Dẫn chứng phù hợp giúp luận điểm có căn cứ và tăng sức thuyết phục."],
      ["Một nguồn thông tin đáng tin cậy thường có đặc điểm nào?", "Có tác giả hoặc tổ chức rõ ràng và kiểm chứng được", ["Không nêu nguồn", "Chỉ xuất hiện trong tin nhắn ẩn danh", "Khẳng định điều giật gân mà không có căn cứ"], "Có thể kiểm tra tác giả, tổ chức, ngày tháng và căn cứ giúp đánh giá độ tin cậy của nguồn."],
      ["Khi gặp ý kiến trái chiều, cách lập luận phù hợp là gì?", "Trình bày lý do và phản hồi vào ý kiến, không công kích người nói", ["Chế giễu người có ý kiến khác", "Bỏ qua mọi dẫn chứng", "Đổi chủ đề để tránh trao đổi"], "Phản hồi lý lẽ và dẫn chứng một cách tôn trọng giúp cuộc trao đổi tập trung vào vấn đề."],
      ["Kết luận của bài nghị luận nên làm gì?", "Khái quát lại luận điểm dựa trên các lý lẽ đã trình bày", ["Đưa ra chủ đề hoàn toàn không liên quan", "Lặp lại mọi câu y nguyên", "Thêm thông tin chưa được kiểm chứng"], "Kết luận thường tổng hợp ý chính và khép lại lập luận nhất quán với nội dung bài viết."],
    ]),
  ],
  english: [
    createStarterTopic("english-present-perfect", "Past experiences", "Kể về trải nghiệm bằng thì hiện tại hoàn thành", ["Have?", "✓", "ABC"], [
      ["Choose the correct form: “They ___ visited Hội An twice.”", "have", ["has", "are", "were"], "Dùng “have” với chủ ngữ “they” trong cấu trúc hiện tại hoàn thành: have + past participle."],
      ["Which word commonly introduces a starting point in time?", "since", ["for", "during", "while"], "“Since” thường đi với một mốc bắt đầu, ví dụ “since 2022”."],
      ["Which phrase expresses a duration?", "for three years", ["since Monday", "at 8 o’clock", "last night"], "“For three years” nêu khoảng thời gian kéo dài; “since” thường nêu mốc bắt đầu."],
      ["Complete the question: “Have you ___ tried bánh mì?”", "ever", ["yet", "ago", "last"], "“Ever” thường được dùng trong câu hỏi về việc đã từng trải nghiệm điều gì chưa."],
      ["Which sentence uses the past simple for a finished time?", "I saw that film yesterday.", ["I have seen that film yesterday.", "I has seen that film yesterday.", "I seeing that film yesterday."], "“Yesterday” là thời điểm đã kết thúc, nên dùng thì quá khứ đơn: “saw”."],
    ]),
    createStarterTopic("english-future-plans", "Plans for the future", "Nói về dự định, lịch trình và kế hoạch sắp tới", ["📅", "will", "→"], [
      ["Complete the plan: “We ___ visit Huế next weekend.”", "are going to", ["is going to", "was", "has"], "Với chủ ngữ “we”, cấu trúc dự định là “are going to” + động từ nguyên mẫu."],
      ["Choose the correct form: “The bus ___ at 7:30 tomorrow morning.”", "leaves", ["leave", "leaving", "left"], "Lịch trình cố định thường dùng thì hiện tại đơn, kể cả khi nói về tương lai."],
      ["Which sentence offers help?", "I’ll carry that bag for you.", ["I carried that bag yesterday.", "I carry that bag every day.", "I am carrying that bag now."], "“I’ll…” có thể diễn đạt quyết định hoặc lời đề nghị giúp đỡ ngay lúc nói."],
      ["Complete the sentence: “If it rains, we ___ stay indoors.”", "will", ["are", "did", "have"], "Câu điều kiện loại một thường có if + hiện tại đơn, mệnh đề chính dùng “will” + động từ."],
      ["Which phrase describes a fixed arrangement?", "I’m meeting my cousin at 5 p.m.", ["I met my cousin last week.", "I meet my cousin yesterday.", "I have meet my cousin."], "Thì hiện tại tiếp diễn có thể diễn đạt cuộc hẹn hoặc kế hoạch đã sắp xếp."],
    ]),
    createStarterTopic("english-modal-advice", "Giving advice", "Dùng should, must và have to đúng ngữ cảnh", ["💬", "should", "✓"], [
      ["Choose the advice: “You ___ get some rest if you feel tired.”", "should", ["mustn’t", "can’t", "won’t"], "“Should” thường dùng để đưa ra lời khuyên."],
      ["Which sentence expresses a prohibition?", "You mustn’t use your phone during the exam.", ["You should drink water.", "You can ask a question.", "You might visit later."], "“Mustn’t” diễn đạt điều không được phép làm."],
      ["Complete the rule: “Students ___ wear a helmet when riding a motorbike.”", "have to", ["has to", "would", "could"], "“Students” là chủ ngữ số nhiều; “have to” diễn đạt nghĩa vụ hoặc quy định."],
      ["Which phrase asks for permission politely?", "May I open the window?", ["Must I opening the window?", "Should I opened the window?", "Have I open the window?"], "“May I…?” là cách lịch sự để xin phép."],
      ["Which sentence shows that something is not necessary?", "You don’t have to bring your own pen.", ["You must bring your own pen.", "You mustn’t bring a pen.", "You should bringed a pen."], "“Don’t have to” nghĩa là không bắt buộc, khác với “mustn’t” là bị cấm."],
    ]),
  ],
  history: [
    createStarterTopic("dai-viet-civilization", "Dấu ấn Đại Việt", "Những mốc son của nhà nước và văn hóa Đại Việt", ["1010", "🏯", "📜"], [
      ["Năm 1010, vua Lý Thái Tổ dời đô đến đâu?", "Thăng Long", ["Hoa Lư", "Phú Xuân", "Cổ Loa"], "Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư ra Đại La và đổi tên thành Thăng Long."],
      ["Triều Trần đã lãnh đạo kháng chiến chống quân Nguyên - Mông bao nhiêu lần trong thế kỷ XIII?", "Ba lần", ["Một lần", "Hai lần", "Bốn lần"], "Nhà Trần cùng quân dân Đại Việt ba lần kháng chiến chống quân Nguyên - Mông vào các năm 1258, 1285 và 1287–1288."],
      ["Ai lãnh đạo cuộc khởi nghĩa Lam Sơn đầu thế kỷ XV?", "Lê Lợi", ["Quang Trung", "Trần Hưng Đạo", "Lý Thường Kiệt"], "Lê Lợi khởi xướng và lãnh đạo cuộc khởi nghĩa Lam Sơn, sau đó lên ngôi vua, lập triều Lê sơ."],
      ["Tác phẩm “Bình Ngô đại cáo” gắn với tên tuổi của ai?", "Nguyễn Trãi", ["Nguyễn Du", "Lê Quý Đôn", "Chu Văn An"], "Nguyễn Trãi soạn “Bình Ngô đại cáo” năm 1428, tổng kết thắng lợi của cuộc khởi nghĩa Lam Sơn."],
      ["Quốc Tử Giám được thành lập dưới triều đại nào?", "Nhà Lý", ["Nhà Trần", "Nhà Hồ", "Nhà Nguyễn"], "Quốc Tử Giám được thành lập năm 1076 dưới triều Lý, gắn với sự phát triển của giáo dục Nho học."],
    ]),
    createStarterTopic("ancient-cultures-of-viet-nam", "Văn hóa Việt cổ", "Tìm hiểu dấu tích các nhà nước đầu tiên", ["🥁", "🏺", "⏳"], [
      ["Truyền thuyết về các vua Hùng gắn với nhà nước cổ nào?", "Văn Lang", ["Âu Lạc", "Đại Cồ Việt", "Chăm-pa"], "Truyền thuyết các vua Hùng gắn với nhà nước Văn Lang trong buổi đầu lịch sử dân tộc."],
      ["Thành Cổ Loa gắn với nhà nước nào?", "Âu Lạc", ["Văn Lang", "Đại Việt", "Phù Nam"], "Cổ Loa là kinh đô của nhà nước Âu Lạc dưới thời An Dương Vương."],
      ["Trống đồng Đông Sơn phản ánh điều gì?", "Đời sống và kỹ thuật của cư dân thời cổ", ["Sự xuất hiện của máy in", "Hoạt động đường sắt", "Chữ viết điện tử"], "Trống đồng và hoa văn là tư liệu khảo cổ quan trọng về đời sống, tín ngưỡng và kỹ thuật đúc đồng."],
      ["Một tư liệu khảo cổ có thể giúp nhà nghiên cứu làm gì?", "Tìm hiểu dấu tích vật chất của quá khứ", ["Dự đoán chính xác mọi sự kiện tương lai", "Thay thế mọi nguồn sử liệu khác", "Khẳng định sự kiện mà không cần phân tích"], "Di vật, di tích cung cấp chứng cứ vật chất, cần được phân tích cùng các nguồn sử liệu khác."],
      ["Vì sao cần bảo tồn di tích lịch sử?", "Gìn giữ chứng tích quá khứ và giá trị văn hóa cho thế hệ sau", ["Để ngăn mọi người tìm hiểu lịch sử", "Để thay đổi hiện trạng tùy ý", "Chỉ để làm đẹp bản đồ"], "Bảo tồn giúp gìn giữ giá trị lịch sử, văn hóa và tạo điều kiện cho nghiên cứu, giáo dục."],
    ]),
    createStarterTopic("vietnam-in-the-twentieth-century", "Việt Nam thế kỷ XX", "Nhận diện những bước ngoặt của lịch sử hiện đại", ["1945", "1975", "🕰"], [
      ["Nước Việt Nam Dân chủ Cộng hòa được thành lập vào năm nào?", "1945", ["1930", "1954", "1975"], "Tuyên ngôn Độc lập ngày 2/9/1945 khai sinh nước Việt Nam Dân chủ Cộng hòa."],
      ["Hiệp định Genève về Đông Dương được ký kết vào năm nào?", "1954", ["1945", "1968", "1973"], "Hiệp định Genève được ký tháng 7/1954, sau chiến thắng Điện Biên Phủ."],
      ["Sự kiện nào diễn ra ngày 30/4/1975?", "Giải phóng miền Nam, thống nhất đất nước", ["Tuyên ngôn Độc lập", "Khởi đầu Đổi mới", "Thành lập ASEAN"], "Ngày 30/4/1975 đánh dấu kết thúc chiến tranh và giải phóng miền Nam."],
      ["Đường lối Đổi mới được đề ra tại Đại hội VI năm nào?", "1986", ["1976", "1980", "1995"], "Đại hội VI năm 1986 khởi xướng đường lối Đổi mới ở Việt Nam."],
      ["Khi học lịch sử, vì sao cần đối chiếu nhiều nguồn tư liệu?", "Để kiểm chứng thông tin và hiểu sự kiện từ nhiều góc nhìn", ["Để bỏ qua bối cảnh", "Để chọn nguồn có tiêu đề hấp dẫn nhất", "Để không cần đánh giá chứng cứ"], "Đối chiếu nguồn giúp kiểm tra độ tin cậy, bối cảnh và cách diễn giải sự kiện."],
    ]),
  ],
  geography: [
    createStarterTopic("map-skills-and-scale", "Giải mã bản đồ", "Làm quen với tỉ lệ, phương hướng và đường đồng mức", ["🗺", "🧭", "📍"], [
      ["Trên bản đồ tỉ lệ 1:100.000, 1 cm trên bản đồ tương ứng khoảng cách thực địa nào?", "1 km", ["100 m", "10 km", "100 km"], "Tỉ lệ 1:100.000 nghĩa là 1 cm trên bản đồ bằng 100.000 cm ngoài thực địa, tức 1 km."],
      ["Đường xích đạo có vĩ độ bao nhiêu?", "0°", ["23,5° Bắc", "90° Bắc", "180°"], "Đường xích đạo là vĩ tuyến gốc, có vĩ độ 0°."],
      ["Các đường đồng mức nằm sát nhau thường cho biết địa hình như thế nào?", "Sườn dốc", ["Đồng bằng tuyệt đối", "Mặt biển phẳng", "Khu vực không có độ cao"], "Khoảng cách đường đồng mức càng gần thường biểu thị độ cao thay đổi nhanh trên một khoảng ngang ngắn, tức sườn dốc."],
      ["Trên bản đồ thông thường, phía trên trang giấy thường chỉ hướng nào?", "Bắc", ["Nam", "Đông", "Tây"], "Theo quy ước phổ biến, bản đồ được định hướng với phía Bắc ở phía trên."],
      ["Khác biệt chính giữa thời tiết và khí hậu là gì?", "Thời tiết ngắn hạn; khí hậu là đặc trưng thời tiết trong thời gian dài", ["Thời tiết chỉ có ở biển", "Khí hậu thay đổi từng giờ", "Hai khái niệm hoàn toàn giống nhau"], "Thời tiết mô tả trạng thái khí quyển trong thời gian ngắn; khí hậu khái quát các đặc điểm trong thời gian dài."],
    ]),
    createStarterTopic("population-and-settlement", "Dân cư và đô thị", "Khám phá phân bố dân số và các kiểu quần cư", ["👥", "🏙", "📍"], [
      ["Mật độ dân số được tính bằng cách nào?", "Số dân chia cho diện tích", ["Diện tích chia cho số tỉnh", "Số sinh chia cho số trường", "Số dân nhân với lượng mưa"], "Mật độ dân số thường bằng tổng số dân chia cho diện tích lãnh thổ."],
      ["Đô thị hóa thường gắn với xu hướng nào?", "Tỉ lệ dân cư sống ở đô thị tăng", ["Mọi thành phố biến mất", "Dân số luôn giảm về 0", "Không có thay đổi về nơi cư trú"], "Đô thị hóa là quá trình gia tăng dân số đô thị và mở rộng lối sống, không gian đô thị."],
      ["Yếu tố nào có thể ảnh hưởng đến nơi cư trú của dân cư?", "Việc làm, địa hình, nguồn nước và giao thông", ["Màu sắc của bản đồ", "Tên của một con sông ở xa", "Số trang của sách giáo khoa"], "Cơ hội việc làm, điều kiện tự nhiên và kết nối giao thông đều ảnh hưởng đến phân bố dân cư."],
      ["Di cư là gì?", "Sự chuyển dịch nơi cư trú của người dân", ["Sự thay đổi mùa trong năm", "Sự hình thành một ngọn núi", "Sự luân chuyển của gió"], "Di cư là việc cá nhân hoặc nhóm người chuyển nơi cư trú trong một thời gian nhất định."],
      ["Vì sao thành phố cần quy hoạch giao thông và dịch vụ công?", "Đáp ứng nhu cầu đi lại, sinh hoạt của dân cư và phát triển bền vững", ["Để mọi người phải đi xa hơn", "Để loại bỏ không gian công cộng", "Để không cần tính đến môi trường"], "Quy hoạch hỗ trợ kết nối, tiếp cận dịch vụ và quản lý tác động của đô thị hóa."],
    ]),
    createStarterTopic("climate-and-climate-change", "Khí hậu biến đổi", "Hiểu hiệu ứng nhà kính và lựa chọn thích ứng", ["🌦", "🌡", "🌱"], [
      ["Khí nhà kính có vai trò tự nhiên nào?", "Giữ lại một phần nhiệt và giúp Trái Đất đủ ấm cho sự sống", ["Làm Trái Đất không nhận ánh sáng", "Ngăn mọi loại mây hình thành", "Dừng hoàn toàn chu trình nước"], "Hiệu ứng nhà kính tự nhiên giữ lại một phần nhiệt; sự gia tăng quá mức làm Trái Đất ấm lên."],
      ["Hoạt động nào làm tăng lượng khí nhà kính do con người?", "Đốt nhiều nhiên liệu hóa thạch", ["Trồng thêm cây phù hợp", "Đi bộ quãng đường ngắn", "Tái sử dụng đồ vật"], "Đốt than, dầu và khí tự nhiên thải thêm khí nhà kính như cacbon điôxít."],
      ["Biện pháp nào giúp giảm phát thải trong di chuyển hằng ngày?", "Đi bộ, đi xe đạp hoặc dùng phương tiện công cộng khi phù hợp", ["Đi xe một mình cho mọi quãng đường", "Để động cơ nổ khi không sử dụng", "Chọn tuyến đường vòng dài hơn"], "Các lựa chọn di chuyển ít phát thải giúp giảm nhiên liệu sử dụng trên mỗi người."],
      ["Thích ứng với biến đổi khí hậu có nghĩa là gì?", "Điều chỉnh để giảm tác động và rủi ro khí hậu", ["Làm thời tiết thay đổi theo ý muốn", "Bỏ qua cảnh báo thiên tai", "Ngừng mọi hoạt động học tập"], "Thích ứng gồm các biện pháp giảm tính dễ bị tổn thương trước tác động khí hậu hiện tại và tương lai."],
      ["Khi có cảnh báo nắng nóng, lựa chọn nào giúp bảo vệ sức khỏe?", "Uống đủ nước, hạn chế hoạt động ngoài trời lúc nắng gắt và làm theo hướng dẫn", ["Tập nặng giữa trưa", "Không uống nước", "Bỏ qua dấu hiệu kiệt sức"], "Bổ sung nước, tránh nắng gắt và tuân theo hướng dẫn y tế giúp giảm nguy cơ sốc nhiệt."],
    ]),
  ],
  informatics: [
    createStarterTopic("algorithms-and-code", "Thuật toán vào cuộc", "Dùng tuần tự, rẽ nhánh và lặp để giải quyết vấn đề", ["01", "{ }", "↻"], [
      ["Trong lập trình, biến thường dùng để làm gì?", "Lưu trữ một giá trị có thể được sử dụng hoặc thay đổi", ["Trang trí giao diện", "Kết nối máy tính với nguồn điện", "In tài liệu ra giấy"], "Biến đặt tên cho vùng lưu trữ dữ liệu mà chương trình có thể đọc hoặc cập nhật."],
      ["Cấu trúc rẽ nhánh giúp chương trình làm gì?", "Chọn hành động dựa trên một điều kiện", ["Lặp mãi một lệnh không dừng", "Xóa mọi dữ liệu đầu vào", "Đổi tên tệp tự động"], "Cấu trúc điều kiện cho phép chọn nhánh lệnh tùy theo điều kiện đúng hay sai."],
      ["Vòng lặp phù hợp nhất khi nào?", "Cần thực hiện một nhóm bước nhiều lần", ["Chỉ cần hiển thị một dòng chữ", "Muốn tắt máy tính", "Không có thao tác nào cần thực hiện"], "Vòng lặp giúp lặp lại các bước, thường theo số lần hoặc cho đến khi điều kiện thay đổi."],
      ["Lỗi cú pháp thường xuất hiện khi nào?", "Mã lệnh không tuân theo quy tắc viết của ngôn ngữ", ["Chương trình cho kết quả đúng", "Máy tính hết pin", "Người dùng đổi hình nền"], "Lỗi cú pháp xảy ra khi câu lệnh vi phạm quy tắc cấu trúc mà ngôn ngữ lập trình yêu cầu."],
      ["Cách kiểm thử đơn giản giúp tìm lỗi trong chương trình là gì?", "Thử với dữ liệu đầu vào khác nhau và so sánh kết quả mong đợi", ["Chỉ đổi màu màn hình", "Xóa hết phần hướng dẫn", "Chạy chương trình mà không quan sát"], "Thử nhiều trường hợp đầu vào giúp kiểm tra chương trình có xử lý đúng các tình huống dự kiến không."],
    ]),
    createStarterTopic("data-and-spreadsheets", "Dữ liệu thông minh", "Sắp xếp, lọc và đọc bảng dữ liệu", ["▦", "Σ", "🔎"], [
      ["Trong bảng tính, giao điểm của một hàng và một cột gọi là gì?", "Ô", ["Trang", "Biểu đồ", "Tệp đính kèm"], "Mỗi ô nằm tại giao điểm một hàng và một cột, thường được xác định bằng địa chỉ như A1."],
      ["Công thức nào thường dùng để cộng các ô từ A1 đến A5 trong bảng tính?", "=SUM(A1:A5)", ["=JOIN(A1:A5)", "=COLOR(A1:A5)", "=OPEN(A1:A5)"], "Hàm SUM tính tổng các giá trị trong phạm vi được chỉ định."],
      ["Lọc dữ liệu trong bảng giúp ích điều gì?", "Chỉ hiển thị các hàng đáp ứng điều kiện chọn", ["Xóa mọi dữ liệu gốc", "Đổi tên tất cả cột", "Tắt máy tính"], "Bộ lọc giúp tập trung xem các bản ghi đáp ứng tiêu chí mà không cần xóa dữ liệu khác."],
      ["Biểu đồ cột thường phù hợp để làm gì?", "So sánh giá trị giữa các nhóm", ["Viết một đoạn văn dài", "Lưu mật khẩu", "Thay thế mọi bảng dữ liệu"], "Các cột giúp so sánh trực quan số liệu của những nhóm hoặc thời điểm khác nhau."],
      ["Trước khi chia sẻ bảng có thông tin cá nhân, cần làm gì?", "Kiểm tra quyền truy cập và loại bỏ thông tin không cần chia sẻ", ["Đăng công khai cho tiện", "Gửi đường dẫn cho người lạ", "Thêm mật khẩu vào một ô bất kỳ"], "Chia sẻ đúng người và đúng quyền, đồng thời giảm dữ liệu cá nhân không cần thiết để bảo vệ riêng tư."],
    ]),
    createStarterTopic("networks-and-online-safety", "Mạng Internet an toàn", "Hiểu đường đi của dữ liệu và bảo vệ tài khoản", ["🌐", "🔒", "↔"], [
      ["Trình duyệt web dùng để làm gì?", "Truy cập và hiển thị nội dung trên các trang web", ["Tăng dung lượng pin", "Tạo kết nối điện trong nhà", "Thay thế hệ điều hành"], "Trình duyệt gửi yêu cầu đến máy chủ web và hiển thị nội dung nhận được."],
      ["HTTPS trên địa chỉ trang web cho biết điều gì?", "Kết nối giữa trình duyệt và trang web được mã hóa khi truyền", ["Trang web chắc chắn không có lừa đảo", "Nội dung luôn chính xác", "Người dùng được miễn kiểm tra đường dẫn"], "HTTPS bảo vệ dữ liệu truyền qua kết nối nhưng không tự bảo đảm trang web đáng tin hay nội dung đúng."],
      ["Mã xác thực một lần (OTP) nên được xử lý thế nào?", "Không chia sẻ với bất kỳ ai, kể cả người tự xưng là nhân viên hỗ trợ", ["Đăng công khai để khỏi quên", "Gửi cho người gọi điện yêu cầu", "Dùng chung cho mọi tài khoản"], "OTP có thể cho phép đăng nhập hoặc xác nhận giao dịch; không cung cấp mã cho người khác."],
      ["Một trang đăng nhập đáng ngờ yêu cầu mật khẩu và mã OTP. Em nên làm gì?", "Đóng trang và tự truy cập dịch vụ qua địa chỉ hoặc ứng dụng chính thức", ["Nhập thông tin để thử", "Chuyển liên kết cho cả lớp", "Tắt phần mềm bảo vệ"], "Tự mở dịch vụ qua kênh chính thức giúp tránh trang giả mạo lấy cắp tài khoản."],
      ["Vì sao cần cập nhật phần mềm và hệ điều hành?", "Bản cập nhật có thể sửa lỗi và khắc phục lỗ hổng bảo mật", ["Để mọi tệp tự động công khai", "Để mật khẩu không còn cần thiết", "Để ngăn người dùng lưu dữ liệu"], "Cập nhật thường chứa bản sửa lỗi, cải thiện khả năng tương thích và bảo vệ thiết bị."],
    ]),
  ],
  technology: [
    createStarterTopic("energy-and-sustainable-design", "Năng lượng xanh", "So sánh nguồn năng lượng và lựa chọn thiết kế bền vững", ["☀", "🔋", "♻"], [
      ["Nguồn nào được bổ sung tự nhiên và có thể tái tạo?", "Năng lượng gió", ["Than đá", "Dầu mỏ", "Khí tự nhiên"], "Gió được tạo ra liên tục bởi các quá trình tự nhiên và là nguồn năng lượng tái tạo."],
      ["Điểm khác biệt chính của nguồn năng lượng không tái tạo là gì?", "Nguồn dự trữ hữu hạn và hình thành rất chậm", ["Luôn không tạo ra chất thải", "Chỉ sử dụng được vào ban đêm", "Có thể tạo mới ngay trong vài phút"], "Than, dầu và khí tự nhiên hình thành qua thời gian địa chất rất dài nên nguồn dự trữ hữu hạn."],
      ["Khi thiết kế sản phẩm, vì sao nên cân nhắc khả năng sửa chữa?", "Có thể kéo dài thời gian sử dụng và giảm rác thải", ["Để sản phẩm luôn nặng hơn", "Để không cần thử nghiệm", "Để tăng số vật liệu dùng một lần"], "Sản phẩm dễ sửa chữa có thể được dùng lâu hơn, giảm nhu cầu thay mới và lượng rác thải."],
      ["Vật liệu nào thường thuận lợi cho tái chế nếu được thu gom, phân loại đúng?", "Lon nhôm", ["Thức ăn thừa lẫn tạp chất", "Giấy ăn đã dính dầu mỡ", "Rác hỗn hợp chưa phân loại"], "Lon nhôm có thể được thu gom và tái chế; việc phân loại đúng giúp quá trình xử lý hiệu quả hơn."],
      ["Một thiết kế tiết kiệm năng lượng nên hướng đến điều gì?", "Đáp ứng nhu cầu với mức năng lượng sử dụng hợp lý", ["Dùng nhiều điện nhất có thể", "Bỏ qua hiệu suất khi chọn thiết bị", "Tăng thời gian bật thiết bị không cần thiết"], "Thiết kế tiết kiệm năng lượng vẫn đáp ứng công năng nhưng hạn chế lãng phí."],
    ]),
    createStarterTopic("structures-and-mechanisms", "Kết cấu và máy đơn giản", "Tìm hiểu cách cấu tạo giúp công trình vững chắc", ["⚙", "△", "🏗"], [
      ["Hình tam giác thường được dùng trong kết cấu vì sao?", "Khó bị biến dạng khi các cạnh được liên kết chắc chắn", ["Có thể tự phát sáng", "Luôn nhẹ hơn mọi hình khác", "Không cần vật liệu"], "Cấu trúc tam giác có độ ổn định hình học cao khi các thanh được liên kết chắc chắn."],
      ["Ròng rọc cố định thường giúp ích chủ yếu bằng cách nào?", "Đổi hướng của lực kéo", ["Tạo thêm năng lượng", "Loại bỏ hoàn toàn trọng lượng vật", "Làm vật tự chuyển động"], "Ròng rọc cố định lý tưởng chủ yếu đổi hướng lực, không làm giảm độ lớn lực cần thiết."],
      ["Mặt phẳng nghiêng giúp đưa vật lên cao bằng cách nào?", "Dùng lực nhỏ hơn trên quãng đường dài hơn", ["Không cần tác dụng lực", "Làm vật nhẹ đi", "Tạo ra năng lượng mới"], "Mặt phẳng nghiêng trao đổi lực với quãng đường: thường giảm lực cần thiết nhưng tăng quãng đường kéo."],
      ["Trọng tâm thấp thường giúp vật có đặc điểm nào?", "Ổn định hơn và khó bị lật hơn", ["Luôn di chuyển nhanh hơn", "Không chịu tác dụng của trọng lực", "Tự cân bằng trên mọi bề mặt"], "Trọng tâm thấp thường làm tăng độ ổn định, dù còn phụ thuộc vào chân đế và điều kiện tác động."],
      ["Khi chế tạo mô hình cầu, vì sao cần thử tải có kiểm soát?", "Đánh giá khả năng chịu lực và phát hiện điểm yếu", ["Để không cần bản thiết kế", "Để chứng minh cầu chịu được mọi tải trọng", "Để bỏ qua vật liệu"], "Thử tải an toàn cung cấp thông tin về độ bền và giúp cải thiện thiết kế."],
    ]),
    createStarterTopic("food-and-agricultural-technology", "Công nghệ thực phẩm", "Tìm hiểu bảo quản và truy xuất nguồn gốc thực phẩm", ["🌾", "🥬", "♻"], [
      ["Vì sao bảo quản thực phẩm lạnh thường làm chậm hư hỏng?", "Nhiệt độ thấp làm chậm hoạt động của nhiều vi sinh vật và phản ứng", ["Nhiệt độ lạnh tiêu diệt mọi vi sinh vật", "Thực phẩm không còn cần vệ sinh", "Lạnh làm thực phẩm tự khô hoàn toàn"], "Nhiệt độ thấp thường làm chậm sự phát triển của nhiều vi sinh vật nhưng không thay thế vệ sinh và hạn sử dụng."],
      ["Bao bì kín, sạch giúp bảo quản thực phẩm bằng cách nào?", "Hạn chế nhiễm bẩn và tiếp xúc với một số yếu tố môi trường", ["Làm thực phẩm luôn vô hạn sử dụng", "Biến mọi thực phẩm thành đồ tiệt trùng", "Thay thế việc kiểm tra tình trạng"], "Bao bì phù hợp giúp hạn chế nhiễm bẩn; vẫn cần bảo quản đúng hướng dẫn và kiểm tra hạn dùng."],
      ["Mã QR truy xuất nguồn gốc có thể giúp người mua làm gì?", "Xem thông tin lô hàng hoặc quá trình sản xuất nếu dữ liệu được cung cấp", ["Chứng minh tuyệt đối sản phẩm không có rủi ro", "Thay thế mọi kiểm định", "Biết trước giá trong tương lai"], "Mã truy xuất có thể liên kết đến thông tin nguồn gốc, nhưng độ tin cậy phụ thuộc dữ liệu và đơn vị cung cấp."],
      ["Vì sao cần rửa tay trước khi chế biến thức ăn?", "Giảm nguy cơ đưa vi sinh vật và chất bẩn vào thực phẩm", ["Làm thực phẩm chín nhanh hơn", "Thay thế hoàn toàn việc nấu chín", "Loại bỏ nhu cầu rửa dụng cụ"], "Rửa tay đúng cách giúp giảm nguy cơ nhiễm bẩn thực phẩm trong quá trình chế biến."],
      ["Nguyên tắc nào giúp giảm lãng phí thực phẩm tại nhà?", "Lên kế hoạch mua vừa đủ và bảo quản theo hướng dẫn", ["Mua càng nhiều càng tốt", "Bỏ qua ngày sử dụng", "Để mọi thức ăn ở nhiệt độ phòng"], "Lên kế hoạch và bảo quản phù hợp giúp sử dụng thực phẩm hiệu quả, an toàn hơn."],
    ]),
  ],
  civics: [
    createStarterTopic("smart-spending", "Chi tiêu thông minh", "Lập ngân sách nhỏ và đưa ra lựa chọn có cân nhắc", ["₫", "🧾", "✓"], [
      ["Ngân sách cá nhân giúp ích điều gì?", "Theo dõi tiền nhận được, tiền chi và mục tiêu tiết kiệm", ["Đảm bảo luôn mua được mọi thứ", "Thay thế mọi quyết định của gia đình", "Làm tăng số tiền mà không cần kế hoạch"], "Ngân sách ghi lại thu, chi và mục tiêu để hỗ trợ lựa chọn phù hợp với số tiền hiện có."],
      ["Em có 100.000đ và muốn mua một món 70.000đ. Trước khi quyết định, nên làm gì?", "Xem món đồ có cần thiết và còn đủ tiền cho mục tiêu khác không", ["Mua ngay vì vẫn còn tiền", "Mượn thêm mà không tính khả năng trả", "Bỏ qua giá niêm yết"], "Cân nhắc nhu cầu và các khoản dự định khác giúp quyết định chi tiêu có trách nhiệm."],
      ["So sánh giá theo đơn vị (ví dụ giá mỗi 100 g) giúp ích gì?", "So sánh giá trị giữa các gói có kích thước khác nhau", ["Xác định sản phẩm nào luôn tốt nhất", "Biết chính xác sản phẩm được sản xuất ở đâu", "Thay thế việc đọc hạn sử dụng"], "Giá theo cùng đơn vị giúp so sánh chi phí giữa các quy cách đóng gói khác nhau."],
      ["Vì sao nên dành một phần tiền cho mục tiêu tiết kiệm?", "Giúp chuẩn bị cho mục tiêu hoặc khoản chi trong tương lai", ["Để không cần lập kế hoạch", "Vì mọi khoản chi đều không cần thiết", "Để tránh tìm hiểu giá cả"], "Tiết kiệm đều đặn có thể giúp đạt mục tiêu đã đặt ra và chuẩn bị cho nhu cầu tương lai."],
      ["Khi quảng cáo hứa hẹn lợi ích quá tốt nhưng yêu cầu chuyển tiền gấp, nên làm gì?", "Tạm dừng, kiểm tra nguồn tin và hỏi người lớn đáng tin cậy", ["Chuyển tiền ngay để giữ ưu đãi", "Gửi thông tin cá nhân để xác minh", "Rủ bạn bè chuyển tiền cùng"], "Lời thúc giục chuyển tiền và cam kết khó tin có thể là dấu hiệu lừa đảo; cần kiểm tra trước và nhờ hỗ trợ."],
    ]),
    createStarterTopic("rights-and-responsibilities", "Quyền và trách nhiệm", "Ứng xử có tôn trọng ở trường và trên môi trường số", ["⚖", "🤝", "💬"], [
      ["Quyền riêng tư của bạn bè cần được tôn trọng như thế nào?", "Xin phép trước khi chia sẻ hình ảnh hoặc thông tin nhận diện", ["Đăng ảnh bất kỳ lúc nào", "Chia sẻ mật khẩu của bạn", "Đưa thông tin lên nhóm công khai"], "Xin phép và cân nhắc phạm vi chia sẻ giúp bảo vệ quyền riêng tư của người khác."],
      ["Khi bất đồng trong nhóm, cách giải quyết phù hợp là gì?", "Lắng nghe, nêu lý do và tìm phương án dựa trên mục tiêu chung", ["Công kích cá nhân", "Loại bạn khỏi nhóm ngay", "Phát tán tin nhắn riêng"], "Trao đổi tôn trọng và tập trung vào vấn đề giúp nhóm tìm giải pháp công bằng."],
      ["Nếu thấy nội dung bắt nạt trên mạng, hành động nào có trách nhiệm?", "Không chia sẻ tiếp, lưu bằng chứng an toàn và báo người lớn đáng tin cậy", ["Bình luận chế giễu", "Chuyển tiếp cho nhiều người", "Tự công khai thông tin người đăng"], "Không khuếch tán nội dung, báo người lớn và dùng công cụ báo cáo phù hợp sẽ giảm tổn hại."],
      ["Một quy tắc chung trong lớp học nên được áp dụng ra sao?", "Công bằng, rõ ràng và tôn trọng quyền của mọi người", ["Chỉ áp dụng với một vài bạn", "Thay đổi tùy ý để trừng phạt", "Không cần giải thích mục đích"], "Quy tắc rõ ràng và áp dụng công bằng giúp bảo vệ quyền, trách nhiệm của các thành viên."],
      ["Khi sử dụng nội dung của người khác cho bài học, nên làm gì?", "Nêu nguồn và tôn trọng điều kiện sử dụng", ["Xóa tên tác giả", "Nhận là sản phẩm của mình", "Sao chép mọi nội dung không cần kiểm tra"], "Ghi nguồn phù hợp thể hiện sự trung thực và tôn trọng công sức sáng tạo."],
    ]),
    createStarterTopic("needs-wants-and-saving", "Nhu cầu, mong muốn và tiết kiệm", "Lập kế hoạch tiền tiêu vặt theo mục tiêu", ["🎯", "₫", "🐷"], [
      ["Nhu cầu thường khác mong muốn ở điểm nào?", "Nhu cầu gắn với điều cần thiết; mong muốn là điều mình thích có thể chưa cần", ["Mọi mong muốn đều thiết yếu", "Nhu cầu luôn đắt hơn", "Hai khái niệm không thể phân biệt"], "Phân biệt nhu cầu và mong muốn giúp ưu tiên chi tiêu theo điều quan trọng."],
      ["Em muốn mua sách giá 90.000đ và có 30.000đ. Nếu tiết kiệm đều 15.000đ mỗi tuần, cần ít nhất bao lâu?", "4 tuần", ["2 tuần", "3 tuần", "6 tuần"], "Cần thêm 60.000đ; 60.000 ÷ 15.000 = 4 tuần, nếu không phát sinh khoản khác."],
      ["Quỹ dự phòng cá nhân có mục đích gì?", "Dành cho khoản chi bất ngờ hoặc nhu cầu quan trọng", ["Dùng hết ngay khi nhận tiền", "Thay thế mọi nguồn hỗ trợ", "Bắt buộc phải cho người lạ vay"], "Một khoản dự phòng giúp ứng phó linh hoạt hơn với chi phí bất ngờ."],
      ["Trước khi mua hàng trực tuyến, nên kiểm tra điều gì?", "Giá cuối cùng, người bán, điều kiện giao hàng và thông tin sản phẩm", ["Chỉ màu sắc quảng cáo", "Mã OTP của người khác", "Mật khẩu tài khoản ngân hàng qua tin nhắn"], "Kiểm tra người bán và các điều kiện giao dịch giúp giảm rủi ro mua nhầm hoặc bị lừa."],
      ["Nếu kế hoạch tiết kiệm không phù hợp với số tiền hiện có, nên làm gì?", "Điều chỉnh mục tiêu hoặc thời gian một cách thực tế", ["Vay tùy tiện", "Bỏ qua mọi khoản chi cần thiết", "Tự trách mình và không xem lại kế hoạch"], "Kế hoạch thực tế cần phù hợp nguồn tiền, thời hạn và các nhu cầu thiết yếu."],
    ]),
  ],
  "physical-education": [
    createStarterTopic("fitness-foundations", "Thử thách thể lực", "Hiểu sức bền, sức mạnh, độ linh hoạt và phục hồi", ["💪", "🏃", "🌱"], [
      ["Sức bền tim mạch giúp cơ thể làm tốt việc nào?", "Duy trì hoạt động vận động trong thời gian dài", ["Chỉ nâng một vật thật nặng một lần", "Ngồi yên trong thời gian dài", "Tăng chiều cao ngay lập tức"], "Sức bền tim mạch liên quan đến khả năng duy trì hoạt động thể lực trong một khoảng thời gian."],
      ["Bài tập chống đẩy chủ yếu thử thách nhóm năng lực nào?", "Sức mạnh cơ bắp", ["Khả năng đọc bản đồ", "Thị lực màu sắc", "Khả năng ghi nhớ từ vựng"], "Chống đẩy sử dụng các nhóm cơ thân trên để nâng và hạ cơ thể."],
      ["Độ linh hoạt của cơ thể liên quan đến điều gì?", "Khả năng vận động khớp qua một biên độ phù hợp", ["Tốc độ đọc một trang sách", "Khả năng nín thở lâu nhất", "Số bước đi trong một phút"], "Độ linh hoạt mô tả khả năng vận động của khớp và các mô liên quan trong biên độ phù hợp."],
      ["Nguyên tắc tăng tải khi luyện tập an toàn là gì?", "Tăng dần mức độ phù hợp thay vì đột ngột quá sức", ["Tăng tối đa mọi bài tập ngay buổi đầu", "Không bao giờ thay đổi bài tập", "Bỏ qua cảm giác đau bất thường"], "Tăng dần giúp cơ thể có thời gian thích nghi; cần dừng và báo người hướng dẫn nếu có dấu hiệu bất thường."],
      ["Vì sao cơ thể cần thời gian nghỉ sau khi tập?", "Để phục hồi và thích nghi với hoạt động thể lực", ["Để thay thế hoàn toàn việc luyện tập", "Để làm giảm mọi lợi ích vận động", "Để không cần ngủ đủ"], "Nghỉ ngơi là một phần của luyện tập, giúp cơ thể phục hồi và thích nghi."],
    ]),
    createStarterTopic("team-sports-and-fair-play", "Đồng đội và fair play", "Phối hợp chiến thuật và ứng xử đẹp khi thi đấu", ["🤝", "⚽", "🏅"], [
      ["Trong một trò chơi đồng đội, giao tiếp rõ ràng giúp ích điều gì?", "Phối hợp vị trí và hành động với đồng đội", ["Thay thế mọi kỹ năng vận động", "Đảm bảo đội luôn thắng", "Không cần quan sát trận đấu"], "Trao đổi ngắn gọn giúp đồng đội phối hợp và điều chỉnh chiến thuật."],
      ["Khi đồng đội mắc lỗi trong trận đấu, cách ứng xử nào phù hợp?", "Động viên và cùng tập trung vào tình huống tiếp theo", ["Chế giễu trước mọi người", "Bỏ chơi để trừng phạt bạn", "Đổ lỗi liên tục"], "Động viên và hỗ trợ giúp duy trì tinh thần hợp tác, tôn trọng trong đội."],
      ["Trước khi tham gia môn thể thao có va chạm, cần làm gì?", "Nghe hướng dẫn luật và sử dụng dụng cụ bảo hộ phù hợp", ["Bỏ qua hướng dẫn", "Tự ý thay đổi luật", "Không kiểm tra sân tập"], "Nắm rõ luật, kiểm tra môi trường và dùng bảo hộ phù hợp giúp giảm nguy cơ chấn thương."],
      ["Nếu trọng tài đưa ra quyết định không như mong muốn, nên làm gì?", "Giữ bình tĩnh và trao đổi tôn trọng theo quy định", ["Đe dọa trọng tài", "Rời sân gây nguy hiểm", "Cố tình phạm luật để phản đối"], "Tôn trọng trọng tài và quy trình khiếu nại giúp thi đấu an toàn, công bằng."],
      ["Mục tiêu quan trọng của hoạt động thể thao học đường là gì?", "Rèn luyện sức khỏe, kỹ năng và tinh thần hợp tác", ["Chỉ giành chiến thắng bằng mọi giá", "Loại bỏ người mới tập", "Thay thế việc nghỉ ngơi"], "Thể thao học đường hướng đến phát triển thể chất, kỹ năng và thái độ tích cực."],
    ]),
    createStarterTopic("healthy-training-habits", "Tập luyện khoa học", "Lập thói quen vận động, khởi động và hồi phục", ["💧", "🧘", "💪"], [
      ["Một buổi tập an toàn thường nên bắt đầu bằng gì?", "Khởi động phù hợp với hoạt động sắp tập", ["Chạy nước rút ngay lập tức", "Nín thở lâu nhất có thể", "Bỏ qua việc quan sát môi trường"], "Khởi động tăng dần giúp cơ thể chuẩn bị trước khi vận động cường độ cao."],
      ["Khi vận động ngoài trời trong ngày nóng, nên chú ý điều gì?", "Uống nước, nghỉ ở nơi mát và dừng nếu thấy choáng", ["Cố tập dù chóng mặt", "Mặc thêm nhiều lớp áo kín", "Không báo ai khi thấy mệt"], "Nhiệt độ cao làm tăng nguy cơ mất nước và quá nóng; cần nghỉ, uống nước và báo người phụ trách."],
      ["Nhịp tim khi vận động tăng lên chủ yếu vì sao?", "Cơ thể cần đưa máu và ôxi đến cơ hoạt động nhiều hơn", ["Tim đang ngừng làm việc", "Cơ thể không cần năng lượng", "Phổi ngừng trao đổi khí"], "Khi cơ hoạt động, nhu cầu ôxi và vận chuyển chất tăng nên tim thường đập nhanh hơn."],
      ["Một lịch vận động hợp lý nên có đặc điểm nào?", "Phù hợp thể trạng, tăng dần và xen kẽ thời gian hồi phục", ["Cường độ tối đa mỗi ngày", "Không có ngày nghỉ dù đau", "Chỉ tập một lần thật lâu mỗi tháng"], "Tập đều, phù hợp và có phục hồi giúp duy trì thói quen an toàn hơn."],
      ["Nếu đau ngực hoặc khó thở bất thường khi tập, nên làm gì?", "Dừng tập ngay và báo người lớn hoặc nhân viên y tế", ["Cố hoàn thành bài tập", "Tự uống thuốc của người khác", "Giấu triệu chứng"], "Dấu hiệu bất thường cần được xử lý kịp thời bởi người có trách nhiệm hoặc chuyên môn."],
    ]),
  ],
  music: [
    createStarterTopic("music-notation-and-dynamics", "Đọc ký hiệu âm nhạc", "Khám phá khuông nhạc, sắc thái và dấu lặng", ["𝄞", "♪", "𝆑"], [
      ["Khuông nhạc phổ thông gồm bao nhiêu dòng kẻ?", "5 dòng", ["3 dòng", "4 dòng", "7 dòng"], "Khuông nhạc tiêu chuẩn gồm năm dòng kẻ song song và bốn khe."],
      ["Ký hiệu “p” (piano) trong bản nhạc thường có nghĩa gì?", "Chơi hoặc hát nhẹ", ["Chơi thật mạnh", "Tăng dần tốc độ", "Lặp lại đoạn nhạc"], "Trong ký hiệu sắc thái, “p” là piano, chỉ cách thể hiện nhẹ."],
      ["Dấu lặng trong bản nhạc biểu thị điều gì?", "Khoảng thời gian im lặng có độ dài xác định", ["Âm thanh phải phát thật to", "Thay đổi nhạc cụ ngay lập tức", "Bài nhạc đã kết thúc"], "Mỗi dấu lặng quy định một khoảng im lặng theo giá trị trường độ của nó."],
      ["Thuật ngữ “crescendo” yêu cầu người biểu diễn làm gì?", "Tăng dần cường độ âm thanh", ["Giảm dần cường độ âm thanh", "Dừng lại hoàn toàn", "Chơi nhanh gấp đôi"], "Crescendo là chỉ dẫn tăng dần âm lượng hoặc cường độ biểu diễn."],
      ["Khóa Sol thường được đặt quanh dòng nào của khuông nhạc?", "Dòng thứ hai tính từ dưới lên", ["Dòng thứ nhất tính từ dưới lên", "Dòng thứ tư tính từ dưới lên", "Khe thứ nhất tính từ dưới lên"], "Tâm của ký hiệu khóa Sol xoắn quanh dòng thứ hai, xác định nốt Sol ở vị trí đó."],
    ]),
    createStarterTopic("instruments-and-timbre", "Nhạc cụ và âm sắc", "Nhận biết cách tạo âm và màu sắc của nhạc cụ", ["🎻", "🥁", "🎺"], [
      ["Âm sắc giúp người nghe phân biệt điều gì?", "Đặc điểm riêng của âm thanh từ các nguồn khác nhau", ["Chỉ độ dài của bản nhạc", "Số trang của bản nhạc", "Tên người nghe"], "Âm sắc là màu sắc riêng của âm thanh, giúp phân biệt nhạc cụ hoặc giọng hát."],
      ["Đàn violin tạo âm thanh chủ yếu bằng cách nào?", "Kéo vĩ trên dây đàn", ["Thổi qua ống sáo", "Gõ vào mặt trống", "Bấm phím tạo luồng khí"], "Violin là nhạc cụ dây, thường tạo âm khi dùng vĩ kéo trên dây."],
      ["Trống tạo âm thanh chủ yếu khi nào?", "Mặt trống rung khi được gõ", ["Dây đàn được kéo", "Không khí đi qua lỗ sáo", "Phím đàn được nhấn"], "Khi mặt trống rung do va chạm, nó làm không khí xung quanh dao động tạo âm."],
      ["Sáo thường thuộc nhóm nhạc cụ nào?", "Nhạc cụ hơi", ["Nhạc cụ dây", "Nhạc cụ gõ có cao độ cố định", "Nhạc cụ điện tử duy nhất"], "Sáo tạo âm khi luồng khí làm cột không khí trong ống dao động."],
      ["Khi nghe một đoạn nhạc, cách nào giúp nhận ra nhạc cụ tốt hơn?", "Lắng nghe âm sắc và cách âm thanh được tạo ra", ["Chỉ nhìn tên bài hát", "Đoán theo màu sân khấu", "Bỏ qua phần âm thanh"], "Chú ý đặc điểm âm thanh và cách chơi giúp nhận biết nhạc cụ trong bản phối."],
    ]),
    createStarterTopic("melody-harmony-and-rhythm", "Giai điệu và hòa âm", "Phân biệt giai điệu, hòa âm và nhịp", ["♫", "♬", "🎼"], [
      ["Giai điệu thường là gì?", "Chuỗi nốt nhạc tạo thành đường nét âm thanh dễ nhận biết", ["Danh sách nhạc cụ trên sân khấu", "Khoảng im lặng giữa hai buổi diễn", "Tên của người biểu diễn"], "Giai điệu là chuỗi cao độ và trường độ tạo thành ý nhạc mà người nghe có thể nhận ra."],
      ["Hòa âm thường hình thành khi nào?", "Nhiều âm thanh có cao độ khác nhau vang lên hoặc kết hợp theo quan hệ", ["Chỉ có một tiếng động bất kỳ", "Bản nhạc không có cao độ", "Người nghe đọc lời bài hát"], "Hòa âm liên quan đến cách các cao độ kết hợp và hỗ trợ giai điệu."],
      ["Phách mạnh trong một ô nhịp giúp người nghe cảm nhận điều gì?", "Trọng tâm và cách chia nhịp", ["Màu sắc của bản nhạc", "Kích thước sân khấu", "Tên nhạc sĩ"], "Các phách mạnh tạo điểm nhấn giúp cảm nhận cấu trúc nhịp điệu."],
      ["Trong nhịp 3/4, mỗi ô nhịp thường có bao nhiêu phách đen?", "Ba phách", ["Hai phách", "Bốn phách", "Sáu phách"], "Chỉ số nhịp 3/4 cho biết mỗi ô nhịp thường có tổng giá trị tương đương ba phách đen."],
      ["Một bản nhạc có thể có nhiều giai điệu cùng lúc không?", "Có, các bè có thể tạo những đường giai điệu riêng", ["Không, mọi bản nhạc chỉ có một nốt", "Chỉ khi không có nhịp", "Chỉ trong nhạc không lời"], "Âm nhạc nhiều bè có thể kết hợp các đường giai điệu độc lập, hòa quyện với nhau."],
    ]),
  ],
  "visual-arts": [
    createStarterTopic("perspective-and-space", "Vẽ không gian", "Tạo cảm giác chiều sâu bằng phối cảnh", ["◫", "↗", "🏙"], [
      ["Trong phối cảnh một điểm tụ, các đường song song đi sâu vào không gian thường hướng về đâu?", "Điểm tụ", ["Tâm của vật thể gần nhất", "Góc dưới bên trái của trang", "Một điểm bất kỳ ngoài trang"], "Các đường hướng sâu song song với hướng nhìn có vẻ hội tụ về điểm tụ trên đường chân trời."],
      ["Đường chân trời trong phối cảnh thường tương ứng với điều gì?", "Tầm mắt của người quan sát", ["Mép dưới của tờ giấy", "Đường viền của mọi vật thể", "Chiều cao cố định của mọi tòa nhà"], "Đường chân trời biểu thị cao độ tầm mắt của người quan sát trong hình phối cảnh."],
      ["Trong tranh có chiều sâu, vật ở gần thường được vẽ như thế nào so với vật cùng cỡ ở xa?", "Lớn hơn", ["Luôn nhỏ hơn", "Cùng kích thước trong mọi trường hợp", "Không có đường viền"], "Vật ở gần thường chiếm góc nhìn lớn hơn nên được thể hiện lớn hơn vật cùng cỡ ở xa."],
      ["Hai vật chồng lấp một phần trong tranh thường gợi ý điều gì?", "Vật che khuất một phần nằm gần người xem hơn", ["Hai vật có cùng màu", "Hai vật ở cùng một mặt phẳng", "Vật phía sau có kích thước thật nhỏ hơn"], "Sự chồng lấp là một dấu hiệu thị giác giúp người xem cảm nhận vị trí trước – sau."],
      ["Đặt vật thể chính lệch khỏi chính giữa có thể giúp bố cục như thế nào?", "Tạo cân bằng thị giác và hướng nhìn linh hoạt hơn", ["Làm mất hoàn toàn trọng tâm", "Khiến tranh không còn bố cục", "Bắt buộc mọi phần tranh bằng nhau"], "Bố cục lệch tâm có thể tạo nhịp điệu và cân bằng thị giác nếu các yếu tố được sắp xếp phù hợp."],
    ]),
    createStarterTopic("color-wheel-and-contrast", "Vòng màu và tương phản", "Khám phá cách phối màu tạo điểm nhấn", ["🎨", "◉", "✨"], [
      ["Hai màu bổ túc thường nằm ở vị trí nào trên vòng màu?", "Đối diện nhau", ["Liền kề nhau", "Cùng một sắc độ", "Ở ngoài vòng màu"], "Các cặp màu bổ túc thường đối diện trên vòng màu và tạo tương phản mạnh."],
      ["Màu nóng thường gợi cảm giác nào trong nhiều ngữ cảnh thị giác?", "Ấm áp hoặc sôi nổi", ["Lạnh giá tuyệt đối", "Không có cảm xúc", "Luôn tối hơn màu lạnh"], "Đỏ, cam, vàng thường được xếp vào nhóm màu nóng và có thể gợi năng lượng, ấm áp."],
      ["Tương phản sáng – tối giúp ích gì cho hình ảnh?", "Làm rõ khối, điểm nhấn và sự khác biệt thị giác", ["Xóa bỏ mọi hình dạng", "Khiến tất cả màu giống nhau", "Thay thế đường nét trong mọi trường hợp"], "Sự khác biệt về độ sáng giúp thể hiện hình khối và hướng mắt người xem."],
      ["Pha thêm màu trắng vào một màu thường tạo ra điều gì?", "Sắc độ sáng hơn", ["Sắc độ tối hơn", "Màu đen tuyệt đối", "Không có thay đổi nào"], "Thêm trắng thường làm màu sáng và nhạt hơn; kết quả còn tùy màu gốc và lượng pha."],
      ["Để chữ trên áp phích dễ đọc, nên chọn màu chữ và nền thế nào?", "Có độ tương phản đủ rõ", ["Hai màu gần như trùng nhau", "Chỉ dùng màu rất nhạt trên nền trắng", "Dùng thật nhiều hiệu ứng cùng lúc"], "Độ tương phản rõ giúp chữ dễ nhận biết, đặc biệt với người có thị lực hoặc điều kiện xem khác nhau."],
    ]),
    createStarterTopic("texture-and-printmaking", "Chất cảm và in tạo hình", "Quan sát bề mặt và thử nghiệm hình ảnh lặp", ["▧", "🖐", "✴"], [
      ["“Chất cảm” trong mỹ thuật gợi cho người xem điều gì?", "Cảm giác bề mặt như nhẵn, ráp hoặc mềm", ["Nhiệt độ chính xác của bức tranh", "Âm lượng của màu sắc", "Tên người sở hữu"], "Chất cảm có thể là bề mặt thực hoặc cảm giác thị giác mà hình ảnh gợi ra."],
      ["Kỹ thuật in tạo hình thường giúp ích gì?", "Tạo nhiều bản hình từ một khuôn hoặc bề mặt đã chuẩn bị", ["Làm tranh tự chuyển động", "Biến giấy thành âm thanh", "Xóa mọi dấu vết của hình"], "In tạo hình cho phép chuyển hình ảnh từ bản in hoặc khuôn sang một hay nhiều bề mặt."],
      ["Khi dùng vật liệu có bề mặt ráp để in, kết quả có thể thể hiện điều gì?", "Dấu vết và hoa văn của bề mặt vật liệu", ["Chỉ có một màu trắng", "Không có hình ảnh", "Nhiệt độ môi trường"], "Bề mặt và cách đặt mực có thể tạo hoa văn hoặc chất cảm đặc trưng."],
      ["Vì sao nên thử bản in trên giấy nháp trước?", "Kiểm tra lượng màu và kết quả trước khi in bản chính", ["Để không cần chuẩn bị vật liệu", "Để thay đổi nội dung của mọi bản vẽ", "Để tránh quan sát sản phẩm"], "Bản thử giúp điều chỉnh mực, lực và vị trí in trước khi thực hiện sản phẩm hoàn chỉnh."],
      ["Khi góp ý sản phẩm của bạn, điều nào nên được ưu tiên?", "Mô tả cụ thể điều quan sát được và đề xuất tôn trọng", ["Đánh giá con người thay vì sản phẩm", "Chế giễu lựa chọn cá nhân", "Tự ý đăng tác phẩm lên mạng"], "Phản hồi cụ thể, tôn trọng giúp người sáng tạo cân nhắc hướng phát triển của tác phẩm."],
    ]),
  ],
  "national-defense": [
    createStarterTopic("fire-safety-and-evacuation", "Thoát hiểm an toàn", "Nhận biết nguyên tắc ứng phó khi có cháy", ["🚪", "🧯", "114"], [
      ["Khi nghe chuông báo cháy ở trường, em nên làm gì trước tiên?", "Bình tĩnh làm theo hướng dẫn và đi theo lối thoát hiểm", ["Quay lại lấy đồ cá nhân", "Chen lấn để chạy trước", "Tự ý đi tìm đám cháy"], "Bình tĩnh, làm theo hướng dẫn của giáo viên và đi theo lối thoát hiểm đã được chỉ dẫn."],
      ["Khi sơ tán khỏi tòa nhà đang cháy, nên dùng phương tiện nào?", "Cầu thang bộ theo lối thoát hiểm", ["Thang máy", "Thang cuốn đang dừng", "Đường đi qua khu vực có khói dày"], "Không sử dụng thang máy khi cháy; hãy theo biển chỉ dẫn và hướng dẫn của người phụ trách."],
      ["Nếu hành lang có nhiều khói, lựa chọn an toàn nhất là gì?", "Tránh đi vào khói, báo người lớn và làm theo hướng dẫn thoát nạn", ["Chạy xuyên qua để quay lại lấy đồ", "Mở mọi cửa để tìm lửa", "Ẩn vào nơi kín mà không báo ai"], "Khói có thể gây nguy hiểm; không đi vào vùng khói dày, báo người lớn và làm theo kế hoạch thoát nạn."],
      ["Số điện thoại báo cháy và cứu nạn, cứu hộ ở Việt Nam là số nào?", "114", ["111", "113", "115"], "114 là số báo cháy và cứu nạn, cứu hộ; hãy gọi khi ở vị trí an toàn và làm theo hướng dẫn."],
      ["Sau khi đã ra khỏi khu vực nguy hiểm, em nên làm gì?", "Ở tại điểm tập kết và báo cho người phụ trách", ["Quay lại tòa nhà tìm bạn", "Tự ý rời khỏi trường", "Đứng gần nơi xe cứu hộ cần tiếp cận"], "Ở điểm tập kết giúp giáo viên kiểm đếm và lực lượng hỗ trợ tiếp cận khu vực thuận lợi."],
    ]),
    createStarterTopic("earthquake-preparedness", "Sẵn sàng khi có động đất", "Nhận biết cách bảo vệ bản thân và sơ tán theo hướng dẫn", ["🏠", "🛡", "📢"], [
      ["Nếu đang trong lớp học và xảy ra rung lắc mạnh, nên làm gì?", "Núp dưới bàn chắc chắn, bảo vệ đầu và chờ hướng dẫn", ["Chạy ngay đến cửa sổ", "Dùng thang máy đi xuống", "Đứng cạnh tủ cao dễ đổ"], "Trong lúc rung lắc, hãy cúi thấp, che đầu và nấp dưới bàn chắc chắn nếu có thể."],
      ["Khi đang ở ngoài trời lúc xảy ra động đất, nên tránh xa điều gì?", "Tòa nhà, cột điện và vật có thể rơi", ["Khu vực trống an toàn", "Người hướng dẫn sơ tán", "Điểm tập kết được chỉ định"], "Ngoài trời, hãy di chuyển đến nơi trống và tránh xa công trình, dây điện hoặc vật có nguy cơ rơi."],
      ["Sau khi rung lắc dừng, em nên làm gì?", "Làm theo hướng dẫn sơ tán và đề phòng dư chấn", ["Quay lại lấy đồ ngay", "Dùng thang máy", "Đứng dưới ban công"], "Có thể xảy ra dư chấn; hãy sơ tán theo hướng dẫn đến khu vực an toàn."],
      ["Một bộ đồ dùng khẩn cấp cơ bản có thể gồm vật dụng nào?", "Nước uống, đèn pin và bộ sơ cứu phù hợp", ["Pháo sáng tự chế", "Vật dễ cháy", "Thuốc không rõ nguồn"], "Đồ dùng thiết yếu và an toàn có thể hỗ trợ ban đầu; cần làm theo hướng dẫn của gia đình, trường học."],
      ["Trong diễn tập ứng phó thiên tai ở trường, vì sao cần tham gia nghiêm túc?", "Để nhớ lối thoát và thực hành quy trình an toàn", ["Để thi xem ai chạy nhanh nhất", "Để tự ý thay đổi đường sơ tán", "Để bỏ qua hướng dẫn"], "Diễn tập giúp mọi người quen quy trình, lối thoát và điểm tập kết trước tình huống thực tế."],
    ]),
    createStarterTopic("first-aid-and-emergency-help", "Gọi trợ giúp đúng cách", "Biết cách báo người lớn và cung cấp thông tin khẩn cấp", ["☎", "🩹", "🧭"], [
      ["Khi gọi dịch vụ khẩn cấp, thông tin nào nên nói rõ?", "Địa điểm, việc đang xảy ra và số người cần hỗ trợ", ["Mật khẩu tài khoản", "Tin đồn chưa xác minh", "Thông tin không liên quan"], "Thông tin ngắn gọn, chính xác về vị trí và tình huống giúp lực lượng hỗ trợ đánh giá và phản ứng."],
      ["Nếu gặp người bị thương nặng, bước đầu tiên của học sinh nên là gì?", "Đảm bảo an toàn, gọi người lớn và dịch vụ cấp cứu", ["Tự di chuyển nạn nhân trong mọi trường hợp", "Cho uống thuốc bất kỳ", "Tụ tập đông người quanh nạn nhân"], "Ưu tiên an toàn, gọi người có chuyên môn và làm theo hướng dẫn thay vì tự thực hiện việc vượt khả năng."],
      ["Số điện thoại cấp cứu y tế tại Việt Nam là số nào?", "115", ["111", "113", "114"], "115 là số cấp cứu y tế; 113 gọi công an, 114 báo cháy và cứu nạn, cứu hộ."],
      ["Khi một bạn bị chảy máu nhẹ, em nên làm gì?", "Báo người lớn và làm theo hướng dẫn sơ cứu an toàn", ["Chạm trực tiếp vào máu mà không bảo vệ", "Bôi hóa chất không rõ nguồn", "Giấu sự việc"], "Hãy báo người lớn; chỉ hỗ trợ trong phạm vi được hướng dẫn và tránh tiếp xúc trực tiếp với máu."],
      ["Nếu không chắc tình huống có nguy hiểm hay không, lựa chọn nào phù hợp?", "Giữ khoảng cách và báo người lớn hoặc người có trách nhiệm", ["Tự thử để kiểm tra", "Rủ bạn đến gần", "Quay phim thay vì tìm trợ giúp"], "Giữ an toàn cá nhân và báo người có trách nhiệm là bước phù hợp khi chưa đánh giá được nguy cơ."],
    ]),
  ],
  "career-experience": [
    createStarterTopic("career-exploration", "Khám phá thế giới nghề", "Tìm hiểu nghề nghiệp qua sở thích, kỹ năng và trải nghiệm", ["🔎", "🧭", "✦"], [
      ["Khi tìm hiểu một nghề, thông tin nào giúp em hình dung công việc thực tế?", "Nhiệm vụ hằng ngày, kỹ năng cần có và môi trường làm việc", ["Chỉ tên gọi của nghề", "Chỉ mức lương trong một quảng cáo", "Ý kiến của một người không làm nghề đó"], "Tìm hiểu nhiệm vụ, kỹ năng và môi trường giúp có cái nhìn thực tế hơn về nghề."],
      ["Một cách hữu ích để khám phá sở thích nghề nghiệp là gì?", "Thử hoạt động phù hợp, an toàn và ghi lại điều mình thấy hứng thú", ["Chọn nghề theo bạn bè mà không tìm hiểu", "Cho rằng sở thích không thể thay đổi", "Chỉ xem một đoạn quảng cáo"], "Trải nghiệm đa dạng giúp nhận biết điều mình quan tâm và muốn tìm hiểu sâu hơn."],
      ["Kỹ năng giao tiếp có thể hữu ích trong bao nhiêu nghề?", "Nhiều lĩnh vực nghề nghiệp khác nhau", ["Chỉ nghề phát thanh", "Chỉ nghề giáo viên", "Không nghề nào"], "Giao tiếp là kỹ năng có thể chuyển đổi, hữu ích trong nhiều môi trường học tập và làm việc."],
      ["Khi so sánh hai lựa chọn nghề nghiệp, cách nào hợp lý?", "Đối chiếu sở thích, năng lực, yêu cầu học tập và thông tin đáng tin cậy", ["Chọn ngay nghề có tên nghe hấp dẫn", "Chỉ dựa vào lời đồn", "Bỏ qua điều kiện và yêu cầu của nghề"], "Cân nhắc nhiều yếu tố và tìm thông tin từ nguồn đáng tin cậy hỗ trợ lựa chọn có cơ sở."],
      ["Kế hoạch nghề nghiệp nên được điều chỉnh khi nào?", "Khi có trải nghiệm hoặc thông tin mới giúp mình hiểu rõ hơn", ["Không bao giờ được thay đổi", "Mỗi khi thấy một quảng cáo", "Chỉ khi người khác chọn thay"], "Kế hoạch là định hướng có thể cập nhật khi sở thích, hiểu biết hoặc hoàn cảnh thay đổi."],
    ]),
    createStarterTopic("study-planning-and-time", "Lập kế hoạch học tập", "Chia mục tiêu thành bước nhỏ và quản lý thời gian", ["🗓", "⏱", "🎯"], [
      ["Một mục tiêu học tập rõ ràng nên có điều gì?", "Việc cần làm và mốc thời gian có thể kiểm tra", ["Chỉ một mong muốn chung chung", "Không có thời hạn", "Kết quả phụ thuộc hoàn toàn vào người khác"], "Mục tiêu cụ thể và có mốc kiểm tra giúp theo dõi tiến độ, điều chỉnh kế hoạch."],
      ["Nếu một bài tập lớn có hạn nộp sau hai tuần, cách nào giúp tránh dồn việc?", "Chia bài thành các bước nhỏ và lên lịch thực hiện", ["Đợi đến tối trước hạn", "Bỏ qua yêu cầu của bài", "Làm nhiều việc cùng lúc mà không có thứ tự"], "Chia nhỏ nhiệm vụ và phân bổ thời gian giúp tiến độ ổn định và dễ phát hiện khó khăn."],
      ["Khi lịch học có quá nhiều việc cùng thời điểm, nên làm gì?", "Ưu tiên việc quan trọng, trao đổi và điều chỉnh lịch thực tế", ["Thức trắng nhiều đêm liên tục", "Bỏ hết hoạt động nghỉ ngơi", "Không nói với ai khi cần hỗ trợ"], "Ưu tiên, điều chỉnh khối lượng và nhờ hỗ trợ giúp kế hoạch cân bằng, khả thi hơn."],
      ["Một phiên học tập trung có thể được cải thiện bằng cách nào?", "Giảm yếu tố gây xao nhãng và nghỉ ngắn phù hợp", ["Mở thật nhiều ứng dụng cùng lúc", "Không bao giờ nghỉ", "Học khi đang lái xe"], "Giảm xao nhãng và nghỉ hợp lý có thể hỗ trợ duy trì sự tập trung."],
      ["Sau khi hoàn thành một mục tiêu nhỏ, nên làm gì?", "Tự đánh giá tiến độ và ghi nhận điều đã học", ["Xóa mọi ghi chú", "Từ bỏ mục tiêu dài hạn", "Không xem lại cách làm"], "Nhìn lại kết quả giúp nhận ra tiến bộ và điều chỉnh bước tiếp theo."],
    ]),
    createStarterTopic("strengths-and-transferable-skills", "Kỹ năng của mình", "Nhận diện kỹ năng có thể dùng trong nhiều lĩnh vực", ["💡", "🤝", "✦"], [
      ["Kỹ năng giải quyết vấn đề thường bắt đầu bằng bước nào?", "Xác định rõ vấn đề và thông tin liên quan", ["Chọn giải pháp đầu tiên mà không xem xét", "Đổ lỗi cho người khác", "Bỏ qua mục tiêu"], "Hiểu vấn đề và bằng chứng giúp lựa chọn phương án phù hợp hơn."],
      ["Kỹ năng làm việc nhóm có thể thể hiện qua hành động nào?", "Lắng nghe, chia sẻ nhiệm vụ và cập nhật tiến độ", ["Giữ mọi thông tin cho riêng mình", "Để một người làm tất cả", "Bỏ qua cam kết"], "Hợp tác dựa trên giao tiếp, trách nhiệm và phối hợp giữa các thành viên."],
      ["Kỹ năng số có ích trong nhiều lĩnh vực vì sao?", "Nhiều công việc cần tìm kiếm, đánh giá và xử lý thông tin số", ["Mọi nghề đều chỉ dùng một ứng dụng", "Kỹ năng số thay thế mọi kỹ năng khác", "Thiết bị luôn tự đưa quyết định đúng"], "Khả năng sử dụng công nghệ và đánh giá thông tin hỗ trợ học tập, làm việc ở nhiều lĩnh vực."],
      ["Khi nhận ra mình cần cải thiện một kỹ năng, bước nào hợp lý?", "Đặt mục tiêu luyện tập nhỏ, tìm phản hồi và theo dõi tiến bộ", ["Cho rằng không thể học thêm", "Chỉ chờ người khác làm thay", "Tránh mọi cơ hội thực hành"], "Luyện tập có mục tiêu và phản hồi giúp phát triển năng lực theo thời gian."],
      ["Vì sao nên ghi lại trải nghiệm và sản phẩm đã làm?", "Giúp nhìn lại kỹ năng, tiến bộ và điều muốn học tiếp", ["Để thay thế mọi bằng cấp", "Để chứng minh mình không bao giờ sai", "Để không cần tôn trọng quyền riêng tư"], "Hồ sơ trải nghiệm có chọn lọc giúp phản tư và trao đổi về quá trình học tập."],
    ]),
  ],
};

const gradeSixTopics = {
  math: [
    createStarterTopic("grade-6-natural-numbers", "Lớp 6 · Số tự nhiên", "Lũy thừa, thứ tự phép tính và tính chia hết", ["6", "∑", "÷"], [
      ["Giá trị của 2³ là bao nhiêu?", "8", ["6", "9", "16"], "2³ = 2 × 2 × 2 = 8, không phải 2 × 3."],
      ["Tính 18 − 6 ÷ 3.", "16", ["4", "12", "6"], "Thực hiện phép chia trước: 6 ÷ 3 = 2, rồi tính 18 − 2 = 16."],
      ["Trong các số sau, số nào chia hết cho cả 2 và 5?", "120", ["125", "122", "123"], "Số chia hết cho cả 2 và 5 có chữ số tận cùng là 0."],
      ["Số nào sau đây là số nguyên tố?", "13", ["1", "9", "15"], "13 chỉ có hai ước dương là 1 và 13. Số 1 không phải số nguyên tố."],
      ["Ước chung lớn nhất của 12 và 18 là bao nhiêu?", "6", ["3", "12", "36"], "Các ước chung dương là 1, 2, 3, 6; lớn nhất là 6."],
    ]),
    createStarterTopic("grade-6-integers", "Lớp 6 · Số nguyên", "So sánh số âm và tính toán trên trục số", ["−", "0", "+"], [
      ["Số đối của −7 là số nào?", "7", ["−7", "0", "1/7"], "Hai số đối nhau có tổng bằng 0: −7 + 7 = 0."],
      ["Trong các số sau, số nào lớn nhất?", "2", ["−8", "−1", "0"], "Trên trục số, 2 nằm bên phải các số −8, −1 và 0 nên lớn nhất."],
      ["Tính (−4) + 9.", "5", ["−5", "13", "−13"], "Hai số khác dấu: lấy 9 − 4 = 5, kết quả mang dấu của số có giá trị tuyệt đối lớn hơn."],
      ["Nhiệt độ từ −2°C tăng thêm 6°C. Nhiệt độ mới là bao nhiêu?", "4°C", ["−8°C", "8°C", "−4°C"], "Nhiệt độ mới là −2 + 6 = 4°C."],
      ["Tính (−3) × (−5).", "15", ["−15", "−8", "8"], "Tích hai số nguyên âm là số dương; 3 × 5 = 15."],
    ]),
    createStarterTopic("grade-6-geometry", "Lớp 6 · Hình học cơ bản", "Chu vi, diện tích và những hình quen thuộc", ["□", "△", "6"], [
      ["Hình chữ nhật dài 8 cm, rộng 3 cm có diện tích bao nhiêu?", "24 cm²", ["11 cm²", "22 cm²", "48 cm²"], "Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng: 8 × 3 = 24 cm²."],
      ["Hình vuông cạnh 5 cm có chu vi bao nhiêu?", "20 cm", ["10 cm", "25 cm", "15 cm"], "Chu vi hình vuông bằng 4 lần cạnh: 4 × 5 = 20 cm."],
      ["Tam giác đều có đặc điểm nào?", "Ba cạnh bằng nhau", ["Chỉ hai cạnh bằng nhau", "Có bốn cạnh", "Luôn có một góc vuông"], "Tam giác đều có ba cạnh bằng nhau và ba góc bằng nhau."],
      ["Đoạn thẳng AB dài 10 cm. M là trung điểm của AB. AM dài bao nhiêu?", "5 cm", ["10 cm", "20 cm", "2 cm"], "Trung điểm nằm giữa hai đầu mút và chia đoạn thẳng thành hai phần bằng nhau: AM = 10 ÷ 2 = 5 cm."],
      ["Hình bình hành có đáy 7 cm và chiều cao tương ứng 4 cm. Diện tích là bao nhiêu?", "28 cm²", ["11 cm²", "22 cm²", "14 cm²"], "Diện tích hình bình hành bằng đáy nhân chiều cao tương ứng: 7 × 4 = 28 cm²."],
    ]),
  ],
  science: [
    createStarterTopic("grade-6-measurement", "Lớp 6 · Đo lường và chất", "Dụng cụ đo, các thể của chất và hỗn hợp", ["🌡", "⚖", "💧"], [
      ["Dụng cụ nào dùng để đo nhiệt độ?", "Nhiệt kế", ["Thước kẻ", "Đồng hồ bấm giây", "Cân"], "Nhiệt kế dùng để đo nhiệt độ; cần chọn loại phù hợp với vật cần đo."],
      ["Đơn vị khối lượng trong hệ SI là gì?", "Kilôgam (kg)", ["Mét (m)", "Giây (s)", "Lít (L)"], "Kilôgam là đơn vị khối lượng trong hệ SI; mét đo chiều dài và giây đo thời gian."],
      ["Nước đá chuyển thành nước lỏng là hiện tượng gì?", "Nóng chảy", ["Đông đặc", "Ngưng tụ", "Sôi"], "Nóng chảy là quá trình chất chuyển từ thể rắn sang thể lỏng."],
      ["Cách nào phù hợp để tách cát không tan khỏi nước?", "Lọc", ["Dùng nam châm", "Khuấy liên tục", "Thêm nước"], "Giấy lọc giữ lại hạt cát, còn nước đi qua; cách này tách chất rắn không tan khỏi chất lỏng."],
      ["Khi hòa tan hoàn toàn muối ăn trong nước, ta thu được gì?", "Dung dịch muối", ["Chất tinh khiết", "Hỗn hợp cát và nước", "Muối ở thể khí"], "Dung dịch muối là hỗn hợp đồng nhất gồm muối hòa tan và nước, không phải chất tinh khiết."],
    ]),
    createStarterTopic("grade-6-cells", "Lớp 6 · Tế bào và sự sống", "Khám phá tế bào và tổ chức cơ thể", ["🌱", "🔬", "6"], [
      ["Đơn vị cấu tạo và chức năng cơ bản của cơ thể sống là gì?", "Tế bào", ["Cơ quan", "Hệ cơ quan", "Bộ xương"], "Tế bào là đơn vị cấu tạo và chức năng cơ bản của cơ thể sống."],
      ["Dụng cụ nào giúp quan sát nhiều loại tế bào rất nhỏ?", "Kính hiển vi", ["La bàn", "Kính thiên văn", "Cân điện tử"], "Kính hiển vi phóng đại hình ảnh, giúp quan sát những tế bào không nhìn rõ bằng mắt thường."],
      ["Cấu trúc nào bao bọc tế bào và kiểm soát sự trao đổi chất với môi trường?", "Màng tế bào", ["Lục lạp", "Nhân tế bào", "Không bào"], "Màng tế bào bao bọc tế bào và tham gia kiểm soát các chất đi vào, đi ra."],
      ["Ở tế bào lá cây xanh, bào quan nào thực hiện quang hợp?", "Lục lạp", ["Nhân", "Màng tế bào", "Không bào"], "Lục lạp chứa diệp lục và là nơi thực hiện quang hợp trong tế bào lá cây xanh."],
      ["Nhóm tế bào cùng thực hiện một chức năng tạo thành cấp tổ chức nào?", "Mô", ["Cơ thể", "Hệ cơ quan", "Quần thể"], "Ở cơ thể đa bào, các tế bào cùng thực hiện một chức năng tạo thành mô; các mô phối hợp tạo cơ quan."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-6-literature", "Lớp 6 · Đọc hiểu và tiếng Việt", "Truyện dân gian, từ ngữ và biện pháp tu từ", ["📖", "✎", "6"], [
      ["Truyện kể về nhân vật và sự kiện lịch sử, thường có yếu tố kì ảo, thuộc thể loại nào?", "Truyền thuyết", ["Bản tin", "Văn bản hướng dẫn", "Thơ tự do"], "Truyền thuyết thường kể về nhân vật, sự kiện liên quan đến lịch sử và thể hiện cách nhìn của nhân dân qua yếu tố kì ảo."],
      ["Người kể xưng “tôi” và tham gia câu chuyện đang kể ở ngôi nào?", "Ngôi thứ nhất", ["Ngôi thứ ba", "Không có ngôi kể", "Ngôi thứ hai"], "Ở ngôi thứ nhất, người kể thường xưng tôi và kể từ trải nghiệm, hiểu biết của mình."],
      ["Trong câu “Mặt hồ như một tấm gương”, biện pháp tu từ nổi bật là gì?", "So sánh", ["Nhân hóa", "Điệp ngữ", "Nói giảm nói tránh"], "Từ “như” nối hai hình ảnh mặt hồ và tấm gương để làm nổi bật sự tương đồng."],
      ["Câu nào sử dụng nhân hóa?", "Chú mèo đang suy nghĩ về bữa tối", ["Con mèo có bộ lông vàng", "Con mèo nặng ba kilôgam", "Con mèo nằm dưới bàn"], "Gọi mèo là “chú” và gán hành động suy nghĩ về bữa tối như con người là nhân hóa."],
      ["Từ nào sau đây là từ láy?", "Lấp lánh", ["Bàn ghế", "Sách vở", "Quần áo"], "“Lấp lánh” có sự lặp lại âm đầu; các từ còn lại được tạo bởi những tiếng có nghĩa kết hợp với nhau."],
    ]),
  ],
  english: [
    createStarterTopic("grade-6-english", "Lớp 6 · English everyday", "Hiện tại đơn, đồ vật và sinh hoạt hằng ngày", ["ABC", "🏫", "6"], [
      ["Điền từ: She ___ to school every day.", "goes", ["go", "going", "are"], "Ở hiện tại đơn, chủ ngữ she đi với động từ goes."],
      ["Điền từ: There ___ two books on the desk.", "are", ["is", "am", "be"], "Two books là danh từ số nhiều nên dùng there are."],
      ["Từ nào chỉ đồ dùng để viết?", "pencil", ["window", "chair", "door"], "Pencil nghĩa là bút chì; window là cửa sổ, chair là ghế và door là cửa ra vào."],
      ["Điền từ: We ___ football now.", "are playing", ["plays", "play yesterday", "is playing"], "Now cho biết hành động đang diễn ra; với chủ ngữ we, dùng are + động từ thêm -ing."],
      ["Câu hỏi nào dùng để hỏi giờ?", "What time is it?", ["What is your name?", "Where do you live?", "How old are you?"], "What time is it? nghĩa là Mấy giờ rồi? Các câu còn lại hỏi tên, nơi ở và tuổi."],
    ]),
  ],
  history: [
    createStarterTopic("grade-6-ancient-history", "Lớp 6 · Thế giới cổ đại", "Tư liệu lịch sử và những nền văn minh đầu tiên", ["🏺", "📜", "6"], [
      ["Một chiếc trống đồng cổ là loại tư liệu nào?", "Tư liệu hiện vật", ["Tư liệu truyền miệng", "Bản dự báo thời tiết", "Tư liệu chữ viết"], "Trống đồng là vật còn lưu lại từ quá khứ, thuộc tư liệu hiện vật."],
      ["Một thế kỉ có bao nhiêu năm?", "100 năm", ["10 năm", "50 năm", "1.000 năm"], "Một thế kỉ bằng 100 năm; một thiên niên kỉ bằng 1.000 năm."],
      ["Nền văn minh Ai Cập cổ đại hình thành gắn với con sông nào?", "Sông Nin", ["Sông Hồng", "Sông Hoàng Hà", "Sông Mê Công"], "Sông Nin cung cấp nước và phù sa, tạo điều kiện cho nông nghiệp và văn minh Ai Cập cổ đại."],
      ["Lưỡng Hà cổ đại nằm giữa hai con sông nào?", "Ti-grơ và Ơ-phrat", ["Nin và Hồng", "Ấn và Hằng", "Hoàng Hà và Trường Giang"], "Tên Lưỡng Hà có nghĩa là vùng đất giữa hai sông, ở đây là Ti-grơ và Ơ-phrat."],
      ["Người đứng đầu nhà nước Văn Lang được gọi là gì?", "Hùng Vương", ["Pharaon", "Hoàng đế La Mã", "Tổng thống"], "Theo truyền thống lịch sử, người đứng đầu nhà nước Văn Lang được gọi là Hùng Vương."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-6-earth-and-maps", "Lớp 6 · Trái Đất và bản đồ", "Phương hướng, tọa độ và chuyển động Trái Đất", ["🌍", "🧭", "6"], [
      ["Đường chia Trái Đất thành bán cầu Bắc và bán cầu Nam là gì?", "Xích đạo", ["Kinh tuyến gốc", "Chí tuyến Bắc", "Vòng cực Nam"], "Xích đạo là vĩ tuyến 0°, chia Trái Đất thành bán cầu Bắc và bán cầu Nam."],
      ["Kinh tuyến gốc có giá trị kinh độ bao nhiêu?", "0°", ["90° Bắc", "180°", "90° Nam"], "Kinh tuyến gốc có kinh độ 0° và đi qua Greenwich; kinh độ biểu thị vị trí về phía đông hoặc tây."],
      ["Trái Đất tự quay quanh trục theo hướng nào?", "Từ tây sang đông", ["Từ đông sang tây", "Từ bắc xuống nam", "Từ nam lên bắc"], "Trái Đất tự quay từ tây sang đông, nên ta thấy Mặt Trời có chuyển động biểu kiến từ đông sang tây."],
      ["Trái Đất hoàn thành một vòng tự quay quanh trục trong khoảng bao lâu?", "24 giờ", ["12 giờ", "30 ngày", "365 ngày"], "Một vòng tự quay của Trái Đất kéo dài khoảng 24 giờ, tạo nhịp ngày và đêm."],
      ["Bản đồ tỉ lệ 1:100.000 có khoảng cách 1 cm. Khoảng cách thực tế là bao nhiêu?", "1 km", ["100 m", "10 km", "100 km"], "1 cm trên bản đồ ứng với 100.000 cm ngoài thực tế, tức 1.000 m hay 1 km."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-6-digital-basics", "Lớp 6 · Thông tin và máy tính", "Dữ liệu, thiết bị và tìm kiếm thông tin", ["💻", "01", "6"], [
      ["Máy tính biểu diễn dữ liệu bằng các kí hiệu nào?", "0 và 1", ["Chỉ chữ A", "Chỉ số 9", "Chỉ dấu cộng"], "Dữ liệu trong máy tính được biểu diễn bằng dãy bit, mỗi bit có giá trị 0 hoặc 1."],
      ["Thiết bị nào chủ yếu dùng để nhập kí tự vào máy tính?", "Bàn phím", ["Màn hình", "Máy in", "Loa"], "Bàn phím là thiết bị vào, dùng để nhập chữ, số và lệnh."],
      ["Thiết bị nào xuất hình ảnh từ máy tính để người dùng xem?", "Màn hình", ["Chuột", "Bàn phím", "Máy quét"], "Màn hình là thiết bị ra, hiển thị hình ảnh và kết quả xử lí."],
      ["Để tìm thông tin về các hành tinh, từ khóa nào phù hợp nhất?", "các hành tinh trong hệ Mặt Trời", ["bài hay", "mọi thứ", "trang đẹp"], "Từ khóa cụ thể, liên quan trực tiếp đến điều cần tìm giúp thu hẹp kết quả tìm kiếm."],
      ["Các tệp liên quan đến cùng một bài học nên được tổ chức thế nào?", "Lưu trong thư mục có tên rõ ràng", ["Đặt tất cả cùng một tên", "Xóa phần mở rộng của mọi tệp", "Lưu ngẫu nhiên không cần nhớ vị trí"], "Thư mục có tên rõ ràng giúp nhóm tệp theo nội dung và tìm lại dễ dàng."],
    ]),
  ],
};

const gradeSevenTopics = {
  math: [
    createStarterTopic("grade-7-rational-numbers", "Lớp 7 · Số hữu tỉ", "Phân số, số thập phân và giá trị tuyệt đối", ["½", "±", "7"], [
      ["Tính −1/2 + 3/4.", "1/4", ["−1/4", "1/2", "5/4"], "Quy đồng −1/2 = −2/4, nên −2/4 + 3/4 = 1/4."],
      ["Giá trị tuyệt đối của −2,5 là bao nhiêu?", "2,5", ["−2,5", "0", "5"], "Giá trị tuyệt đối là khoảng cách từ điểm biểu diễn số đó đến 0 trên trục số, nên luôn không âm."],
      ["Tính (−2/3) × (3/4).", "−1/2", ["1/2", "−2/7", "−3/2"], "Nhân tử với tử, mẫu với mẫu: −6/12 = −1/2."],
      ["Viết 0,75 dưới dạng phân số tối giản.", "3/4", ["7/5", "1/4", "3/5"], "0,75 = 75/100; chia cả tử và mẫu cho 25 được 3/4."],
      ["Tính (−3)².", "9", ["−9", "−6", "6"], "Bình phương cả số −3: (−3) × (−3) = 9."],
    ]),
    createStarterTopic("grade-7-proportionality", "Lớp 7 · Đại lượng tỉ lệ", "Tỉ lệ thuận, tỉ lệ nghịch và bài toán thực tế", ["↗", "∝", "7"], [
      ["Nếu y = 3x thì y tỉ lệ thuận với x theo hệ số nào?", "3", ["1/3", "0", "−3"], "Công thức y = kx biểu thị tỉ lệ thuận; ở đây k = 3."],
      ["Bốn quyển vở cùng loại giá 28.000đ. Sáu quyển giá bao nhiêu?", "42.000đ", ["36.000đ", "48.000đ", "56.000đ"], "Một quyển giá 28.000 ÷ 4 = 7.000đ; sáu quyển giá 6 × 7.000 = 42.000đ."],
      ["Nếu xy = 12 và x = 3 thì y bằng bao nhiêu?", "4", ["9", "15", "36"], "Thay x = 3 vào xy = 12: 3y = 12 nên y = 4."],
      ["Hai người làm xong việc trong 6 giờ. Bốn người có năng suất như nhau làm việc đó trong bao lâu, nếu không cản trở nhau?", "3 giờ", ["12 giờ", "6 giờ", "2 giờ"], "Khối lượng việc không đổi: 2 × 6 = 12 giờ-người; chia cho 4 người được 3 giờ."],
      ["Cho a/2 = b/3 và a + b = 20. Giá trị của a là bao nhiêu?", "8", ["12", "10", "4"], "Đặt a = 2k, b = 3k thì 5k = 20, nên k = 4 và a = 8."],
    ]),
    createStarterTopic("grade-7-angles-and-triangles", "Lớp 7 · Góc và tam giác", "Góc đối đỉnh, đường song song và tam giác cân", ["△", "∠", "7"], [
      ["Hai góc đối đỉnh, một góc bằng 65°. Góc còn lại bằng bao nhiêu?", "65°", ["115°", "25°", "130°"], "Hai góc đối đỉnh có số đo bằng nhau."],
      ["Hai góc kề bù, một góc bằng 120°. Góc còn lại bằng bao nhiêu?", "60°", ["120°", "30°", "240°"], "Tổng hai góc kề bù bằng 180°, nên góc còn lại là 180° − 120° = 60°."],
      ["Một tam giác có hai góc bằng 40° và 60°. Góc thứ ba bằng bao nhiêu?", "80°", ["100°", "70°", "90°"], "Tổng ba góc trong tam giác bằng 180°: 180° − 40° − 60° = 80°."],
      ["Tam giác cân có góc ở đỉnh bằng 40°. Mỗi góc ở đáy bằng bao nhiêu?", "70°", ["40°", "140°", "80°"], "Hai góc ở đáy bằng nhau và có tổng 180° − 40° = 140°, nên mỗi góc bằng 70°."],
      ["Một đường thẳng cắt hai đường thẳng song song. Hai góc đồng vị có quan hệ gì?", "Bằng nhau", ["Luôn bù nhau", "Luôn bằng 90°", "Luôn hơn kém nhau 10°"], "Khi một đường thẳng cắt hai đường thẳng song song, các cặp góc đồng vị bằng nhau."],
    ]),
  ],
  science: [
    createStarterTopic("grade-7-speed-and-sound", "Lớp 7 · Tốc độ và âm thanh", "Đo chuyển động và tìm hiểu nguồn âm", ["⏱", "♪", "7"], [
      ["Một người đi 120 m trong 30 s. Tốc độ trung bình là bao nhiêu?", "4 m/s", ["40 m/s", "0,25 m/s", "150 m/s"], "Tốc độ bằng quãng đường chia thời gian: 120 ÷ 30 = 4 m/s."],
      ["Xe đạp đi với tốc độ 12 km/h trong 2 giờ. Quãng đường là bao nhiêu?", "24 km", ["6 km", "14 km", "12 km"], "Quãng đường bằng tốc độ nhân thời gian: 12 × 2 = 24 km."],
      ["Khi dây đàn phát ra âm thanh, dây đàn đang làm gì?", "Dao động", ["Đứng yên hoàn toàn", "Tan chảy", "Phát sáng"], "Nguồn âm là vật dao động; dây đàn dao động làm môi trường xung quanh truyền âm."],
      ["Âm có tần số lớn hơn thường được nghe như thế nào?", "Cao hơn", ["Trầm hơn", "Luôn to hơn", "Luôn nhỏ hơn"], "Độ cao của âm phụ thuộc vào tần số: tần số càng lớn thì âm càng cao, không đồng nghĩa âm to hơn."],
      ["Âm không truyền được trong môi trường nào?", "Chân không", ["Không khí", "Nước", "Thép"], "Âm cần môi trường vật chất để truyền; chân không không có môi trường vật chất truyền âm."],
    ]),
    createStarterTopic("grade-7-plant-metabolism", "Lớp 7 · Trao đổi chất ở thực vật", "Quang hợp, hô hấp và vận chuyển nước", ["🌿", "☀", "7"], [
      ["Hai nguyên liệu chính cây sử dụng trong quang hợp là gì?", "Nước và khí cacbon điôxít", ["Ôxi và đường", "Nitơ và muối ăn", "Tinh bột và ôxi"], "Nhờ năng lượng ánh sáng và diệp lục, cây dùng nước và CO₂ để tạo chất hữu cơ, giải phóng ôxi."],
      ["Quang hợp chuyển năng lượng ánh sáng thành dạng năng lượng nào?", "Năng lượng hóa học trong chất hữu cơ", ["Chỉ năng lượng âm thanh", "Chỉ điện năng", "Năng lượng của gió"], "Năng lượng ánh sáng được tích lũy dưới dạng năng lượng hóa học trong chất hữu cơ do quang hợp tạo ra."],
      ["Bộ phận nào của rễ tăng diện tích tiếp xúc để hấp thụ nước và muối khoáng?", "Lông hút", ["Cánh hoa", "Quả", "Hạt phấn"], "Lông hút làm tăng diện tích tiếp xúc của rễ với đất, hỗ trợ hấp thụ nước và muối khoáng."],
      ["Phần lớn nước cây hấp thụ được thoát ra ngoài qua đâu?", "Khí khổng ở lá", ["Cánh hoa", "Hạt", "Vỏ quả"], "Thoát hơi nước chủ yếu diễn ra qua khí khổng ở lá, góp phần tạo lực hút nước từ rễ lên."],
      ["Vai trò chính của hô hấp tế bào ở thực vật là gì?", "Giải phóng năng lượng từ chất hữu cơ", ["Chỉ tạo màu xanh cho lá", "Hấp thụ mọi ánh sáng", "Làm cây ngừng trao đổi chất"], "Hô hấp tế bào phân giải chất hữu cơ, giải phóng năng lượng phục vụ hoạt động sống của cây."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-7-literature", "Lớp 7 · Đọc và cảm nhận", "Ngụ ngôn, thơ và cách liên kết văn bản", ["📖", "✎", "7"], [
      ["Truyện ngụ ngôn thường hướng người đọc đến điều gì?", "Bài học về cách sống và ứng xử", ["Chỉ dẫn lắp máy", "Thông báo thời tiết", "Bảng thống kê dân số"], "Truyện ngụ ngôn thường dùng câu chuyện ngắn, đôi khi mượn chuyện loài vật, để gửi gắm bài học."],
      ["Một dòng thơ năm chữ thường có bao nhiêu tiếng?", "Năm tiếng", ["Bốn tiếng", "Sáu tiếng", "Bảy tiếng"], "Thơ năm chữ thường có năm tiếng trong mỗi dòng; “chữ” ở đây được hiểu theo tiếng."],
      ["Trong câu “Lan đọc sách. Bạn ấy ghi lại những ý quan trọng”, “bạn ấy” thay cho ai?", "Lan", ["Cuốn sách", "Những ý quan trọng", "Người viết sách"], "“Bạn ấy” thay cho Lan, giúp tránh lặp tên và liên kết hai câu."],
      ["Câu “Ôi, khu vườn đẹp quá!” chủ yếu thể hiện điều gì?", "Cảm xúc ngạc nhiên, thích thú", ["Một yêu cầu", "Một câu hỏi về địa điểm", "Một phép tính"], "Từ “ôi”, “quá” và dấu chấm than thể hiện cảm xúc của người nói."],
      ["Khi viết đoạn văn nêu cảm nhận về thơ, cách nào thuyết phục hơn?", "Nêu cảm nhận và dẫn hình ảnh, từ ngữ phù hợp trong bài", ["Chỉ chép lại toàn bài thơ", "Nhận xét không liên quan đến bài", "Chỉ nêu số dòng thơ"], "Cảm nhận nên gắn với dẫn chứng cụ thể và giải thích tác dụng của hình ảnh, từ ngữ."],
    ]),
  ],
  english: [
    createStarterTopic("grade-7-english", "Lớp 7 · English experiences", "Sở thích, quá khứ đơn và thói quen lành mạnh", ["ABC", "🎵", "7"], [
      ["Điền từ: I enjoy ___ books in my free time.", "reading", ["read", "reads", "to reading"], "Sau enjoy, dùng động từ dạng -ing: enjoy reading."],
      ["Điền từ: We ___ the museum yesterday.", "visited", ["visit", "visits", "visiting"], "Yesterday chỉ thời gian trong quá khứ; visit là động từ có quy tắc, thêm -ed thành visited."],
      ["Điền từ: She ___ to school yesterday because she was ill.", "did not go", ["does not go", "did not went", "not goes"], "Phủ định quá khứ đơn dùng did not + động từ nguyên mẫu: did not go."],
      ["Điền từ: There isn't ___ milk left in the bottle.", "any", ["many", "a", "an"], "Trong câu phủ định này dùng any với danh từ không đếm được milk; many dùng với danh từ đếm được số nhiều."],
      ["Lời khuyên nào phù hợp với câu “I feel tired after staying up late”?", "You should get enough sleep.", ["You should stay up later.", "You should skip every meal.", "You should never rest."], "Get enough sleep nghĩa là ngủ đủ giấc, là lời khuyên phù hợp khi mệt vì thức khuya."],
    ]),
  ],
  history: [
    createStarterTopic("grade-7-medieval-history", "Lớp 7 · Lịch sử trung đại", "Tây Âu và các triều đại Việt Nam", ["🏰", "📜", "7"], [
      ["Trong lãnh địa phong kiến Tây Âu, lực lượng lao động chủ yếu là ai?", "Nông nô", ["Lãnh chúa", "Thương nhân đường biển", "Vua"], "Nông nô là lực lượng sản xuất chủ yếu trong lãnh địa, phải thực hiện nghĩa vụ với lãnh chúa."],
      ["Ai lên ngôi vua và lập ra triều Lý năm 1009?", "Lý Công Uẩn", ["Đinh Bộ Lĩnh", "Trần Cảnh", "Lê Lợi"], "Lý Công Uẩn lên ngôi năm 1009, mở đầu triều Lý."],
      ["Năm 1010, Lý Công Uẩn dời đô từ Hoa Lư đến đâu?", "Đại La, đổi tên là Thăng Long", ["Phú Xuân", "Gia Định", "Lam Sơn"], "Năm 1010, nhà vua dời đô ra Đại La và đổi tên thành Thăng Long."],
      ["Nhà Trần đã ba lần kháng chiến chống quân xâm lược nào trong thế kỉ XIII?", "Mông – Nguyên", ["Minh", "Thanh", "Tống"], "Quân dân nhà Trần chống các cuộc xâm lược Mông – Nguyên vào các năm 1258, 1285 và 1287–1288."],
      ["Người lãnh đạo cuộc khởi nghĩa Lam Sơn là ai?", "Lê Lợi", ["Lý Thường Kiệt", "Ngô Quyền", "Quang Trung"], "Lê Lợi lãnh đạo khởi nghĩa Lam Sơn chống quân Minh, bắt đầu năm 1418."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-7-continents", "Lớp 7 · Khám phá các châu lục", "Địa hình, khí hậu và tự nhiên châu Âu, châu Á, châu Phi", ["🌍", "🗺", "7"], [
      ["Châu lục nào có diện tích đất liền lớn nhất?", "Châu Á", ["Châu Âu", "Châu Phi", "Châu Đại Dương"], "Châu Á có diện tích lớn nhất trong các châu lục."],
      ["Dãy núi nào thường được dùng làm một phần ranh giới tự nhiên giữa châu Âu và châu Á?", "U-ran", ["An-đét", "An-pơ", "Hi-ma-lay-a"], "Dãy U-ran là một phần ranh giới quy ước giữa châu Âu và châu Á."],
      ["Hoang mạc lớn ở phía bắc châu Phi là hoang mạc nào?", "Xa-ha-ra", ["Gô-bi", "A-ta-ca-ma", "Ca-la-ha-ri"], "Xa-ha-ra nằm ở Bắc Phi; Ca-la-ha-ri nằm ở phần phía nam châu Phi."],
      ["Khí hậu Địa Trung Hải điển hình có mùa hạ như thế nào?", "Nóng và khô", ["Rất lạnh và nhiều tuyết", "Mưa quanh năm không đổi", "Luôn dưới 0°C"], "Khí hậu Địa Trung Hải có mùa hạ nóng, khô và mùa đông tương đối ấm, có mưa."],
      ["Khu vực nào ở châu Phi có rừng mưa xích đạo rộng lớn?", "Lưu vực sông Công-gô", ["Trung tâm Xa-ha-ra", "Ven Bắc Băng Dương", "Đỉnh núi phủ băng quanh năm"], "Lưu vực Công-gô gần xích đạo có khí hậu nóng ẩm, thuận lợi cho rừng mưa xích đạo."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-7-spreadsheets", "Lớp 7 · Bảng tính cơ bản", "Ô dữ liệu, công thức và hàm tính toán", ["📊", "A1", "7"], [
      ["Địa chỉ ô ở cột B, hàng 3 được viết như thế nào?", "B3", ["3B", "BB", "B:3"], "Địa chỉ ô gồm tên cột trước, số hàng sau: B3."],
      ["Công thức trong phần mềm bảng tính thường bắt đầu bằng kí hiệu nào?", "=", ["?", "#", "!"], "Dấu bằng cho biết nội dung nhập là công thức cần tính toán."],
      ["Ô A1 chứa 5 và A2 chứa 7. Công thức =A1+A2 cho kết quả nào?", "12", ["57", "2", "35"], "Công thức cộng giá trị hai ô: 5 + 7 = 12."],
      ["Hàm nào tính tổng các ô từ A1 đến A3?", "SUM(A1:A3)", ["MAX(A1:A3)", "MIN(A1:A3)", "AVERAGE(A1:A3)"], "SUM tính tổng; dấu hai chấm xác định vùng ô liên tiếp từ A1 đến A3."],
      ["Hàm AVERAGE(B1:B3) dùng để làm gì với dữ liệu số trong vùng ô?", "Tính trung bình cộng", ["Tìm số lớn nhất", "Tìm số nhỏ nhất", "Chỉ đếm ô trống"], "AVERAGE tính trung bình cộng của các giá trị số trong vùng ô được chọn."],
    ]),
  ],
};

const gradeEightTopics = {
  math: [
    createStarterTopic("grade-8-polynomials", "Lớp 8 · Đa thức và hằng đẳng thức", "Thu gọn biểu thức và phân tích đa thức", ["x²", "＝", "8"], [
      ["Thu gọn 3x + 2x − x.", "4x", ["6x", "5x", "4x²"], "Các hạng tử đồng dạng có hệ số cộng được với nhau: 3 + 2 − 1 = 4."],
      ["Khai triển (x + 2)².", "x² + 4x + 4", ["x² + 4", "x² + 2x + 4", "x² − 4x + 4"], "Bình phương một tổng bằng bình phương số thứ nhất, cộng hai lần tích, cộng bình phương số thứ hai."],
      ["Phân tích x² − 9 thành nhân tử.", "(x − 3)(x + 3)", ["(x − 9)(x + 9)", "(x − 3)²", "x(x − 9)"], "Dùng hiệu hai bình phương: x² − 3² = (x − 3)(x + 3)."],
      ["Phân tích 2x² + 6x bằng cách đặt nhân tử chung.", "2x(x + 3)", ["2(x + 3)", "x(2x + 3)", "2x(x + 6)"], "Hai hạng tử có nhân tử chung 2x: 2x² + 6x = 2x(x + 3)."],
      ["Tính giá trị của x² − 2x + 1 khi x = 4.", "9", ["17", "7", "15"], "Biểu thức bằng (x − 1)²; thay x = 4 được 3² = 9."],
    ]),
    createStarterTopic("grade-8-linear-equations", "Lớp 8 · Phương trình và hàm số", "Giải phương trình bậc nhất và tính giá trị hàm số", ["y", "↗", "8"], [
      ["Giải phương trình 3x − 7 = 8.", "x = 5", ["x = 1", "x = −5", "x = 15"], "Cộng 7 vào hai vế được 3x = 15; chia hai vế cho 3 được x = 5."],
      ["Giải phương trình 2(x + 1) = x + 6.", "x = 4", ["x = 2", "x = 6", "x = 8"], "Khai triển: 2x + 2 = x + 6. Trừ x rồi trừ 2 ở hai vế được x = 4."],
      ["Cho hàm số y = 2x + 1. Khi x = 3 thì y bằng bao nhiêu?", "7", ["6", "9", "5"], "Thay x = 3 vào công thức: y = 2 × 3 + 1 = 7."],
      ["Điểm nào thuộc đồ thị hàm số y = x − 2?", "(3; 1)", ["(3; 2)", "(0; 2)", "(2; 2)"], "Tại x = 3, y = 3 − 2 = 1 nên điểm (3; 1) thuộc đồ thị."],
      ["Hệ số góc của đường thẳng y = −2x + 3 là bao nhiêu?", "−2", ["3", "2", "−3"], "Đường thẳng y = ax + b có hệ số góc a; ở đây a = −2."],
    ]),
    createStarterTopic("grade-8-triangle-geometry", "Lớp 8 · Tam giác và tứ giác", "Định lí Pythagore, đường trung bình và hình bình hành", ["△", "□", "8"], [
      ["Tam giác vuông có hai cạnh góc vuông dài 3 cm và 4 cm. Cạnh huyền dài bao nhiêu?", "5 cm", ["7 cm", "1 cm", "25 cm"], "Theo định lí Pythagore, bình phương cạnh huyền bằng 3² + 4² = 25, nên cạnh huyền dài 5 cm."],
      ["Đường trung bình của tam giác song song với cạnh thứ ba dài 12 cm. Đường trung bình dài bao nhiêu?", "6 cm", ["12 cm", "24 cm", "18 cm"], "Đoạn nối trung điểm hai cạnh của tam giác song song và bằng một nửa cạnh thứ ba: 12 ÷ 2 = 6 cm."],
      ["Tổng số đo các góc trong của một tứ giác là bao nhiêu?", "360°", ["180°", "270°", "540°"], "Một đường chéo chia tứ giác thành hai tam giác, mỗi tam giác có tổng góc 180°."],
      ["Hai đường chéo của hình bình hành có tính chất nào?", "Cắt nhau tại trung điểm của mỗi đường", ["Luôn bằng nhau", "Luôn vuông góc", "Không bao giờ cắt nhau"], "Trong hình bình hành, hai đường chéo chia đôi nhau; chúng không nhất thiết bằng nhau hoặc vuông góc."],
      ["Hai tam giác đồng dạng có tỉ số các cạnh tương ứng là 2:1. Tỉ số chu vi theo cùng thứ tự là bao nhiêu?", "2:1", ["4:1", "1:2", "1:1"], "Các cạnh tương ứng cùng gấp hai lần, nên tổng độ dài các cạnh cũng gấp hai lần."],
    ]),
  ],
  science: [
    createStarterTopic("grade-8-chemical-reactions", "Lớp 8 · Phản ứng hóa học", "Biến đổi chất, bảo toàn khối lượng và dung dịch", ["⚗", "→", "8"], [
      ["Hiện tượng nào là biến đổi hóa học?", "Sắt bị gỉ", ["Nước đá tan", "Cắt giấy thành mảnh nhỏ", "Nước bay hơi"], "Sắt bị gỉ tạo chất mới; các hiện tượng còn lại không làm xuất hiện chất mới."],
      ["Trong phản ứng hóa học xảy ra trong hệ kín, tổng khối lượng các chất thay đổi thế nào?", "Được bảo toàn", ["Luôn tăng gấp đôi", "Luôn giảm một nửa", "Luôn bằng không"], "Tổng khối lượng chất tham gia bằng tổng khối lượng sản phẩm, khi tính đầy đủ các chất trong hệ kín."],
      ["Trong phương trình 2H₂ + O₂ → 2H₂O, hệ số đứng trước O₂ là bao nhiêu?", "1", ["2", "3", "4"], "Không ghi hệ số nghĩa là hệ số 1; hai vế đều có 4 nguyên tử H và 2 nguyên tử O."],
      ["Hòa tan 10 g muối vào 90 g nước. Nồng độ phần trăm của dung dịch là bao nhiêu?", "10%", ["9%", "11,1%", "90%"], "Khối lượng dung dịch là 100 g; nồng độ phần trăm bằng 10 ÷ 100 × 100% = 10%."],
      ["Chất xúc tác có tác dụng nào đối với phản ứng?", "Làm tăng tốc độ phản ứng mà không bị tiêu hao sau phản ứng", ["Luôn làm mất toàn bộ sản phẩm", "Thay thế mọi chất phản ứng", "Luôn làm phản ứng dừng lại"], "Chất xúc tác làm tăng tốc độ phản ứng và không bị tiêu hao sau phản ứng."],
    ]),
    createStarterTopic("grade-8-pressure-and-body", "Lớp 8 · Áp suất và cơ thể người", "Áp lực, tiêu hóa và tuần hoàn", ["⚖", "🫀", "8"], [
      ["Áp lực 100 N tác dụng vuông góc lên diện tích 0,5 m². Áp suất là bao nhiêu?", "200 Pa", ["50 Pa", "100 Pa", "0,005 Pa"], "Áp suất bằng áp lực chia diện tích bị ép: 100 ÷ 0,5 = 200 Pa."],
      ["Trong cùng một chất lỏng đứng yên, áp suất tăng khi nào?", "Khi độ sâu tăng", ["Khi độ sâu giảm", "Chỉ khi đổi màu chất lỏng", "Khi đổi tên bình chứa"], "Áp suất chất lỏng tăng theo độ sâu, với cùng khối lượng riêng và gia tốc trọng trường."],
      ["Phần lớn chất dinh dưỡng được hấp thụ ở cơ quan nào?", "Ruột non", ["Thực quản", "Ruột già", "Khoang miệng"], "Ruột non có bề mặt hấp thụ lớn nhờ nếp gấp, lông ruột và vi nhung mao."],
      ["Thành phần máu nào chủ yếu vận chuyển ôxi?", "Hồng cầu", ["Bạch cầu", "Tiểu cầu", "Chỉ nước trong huyết tương"], "Hemoglobin trong hồng cầu gắn với ôxi, giúp vận chuyển ôxi từ phổi đến mô."],
      ["Cơ quan nào bơm máu trong hệ tuần hoàn?", "Tim", ["Dạ dày", "Gan", "Thận"], "Tim co bóp tạo lực đẩy máu đi qua các mạch máu, duy trì tuần hoàn."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-8-literature", "Lớp 8 · Văn bản và lập luận", "Nhận biết luận điểm, bằng chứng và sắc thái từ ngữ", ["📖", "✎", "8"], [
      ["Trong văn bản nghị luận, luận điểm là gì?", "Ý kiến chính người viết muốn làm rõ", ["Danh sách tên nhân vật", "Mọi dấu câu trong bài", "Chỉ tiêu đề của bài"], "Luận điểm thể hiện ý kiến hoặc quan điểm; lí lẽ và bằng chứng giúp làm rõ, thuyết phục người đọc."],
      ["Bằng chứng nào phù hợp nhất cho luận điểm “Cần giảm rác nhựa ở trường”?", "Số liệu khảo sát lượng rác nhựa trong trường", ["Lịch chiếu phim cuối tuần", "Dự báo giá vàng", "Tên một bài hát"], "Bằng chứng phải liên quan trực tiếp đến luận điểm; số liệu cần có nguồn và cách thu thập đáng tin cậy."],
      ["Trong câu “Bạn ấy chạy nhanh như gió”, biện pháp tu từ nổi bật là gì?", "So sánh", ["Nhân hóa", "Điệp ngữ", "Liệt kê"], "Từ “như” nối tốc độ chạy với gió, làm nổi bật sự nhanh nhẹn."],
      ["Từ nào có sắc thái trang trọng hơn, thường dùng khi nói về người đã mất?", "Từ trần", ["Chết", "Ăn", "Chạy"], "“Từ trần” mang sắc thái trang trọng; lựa chọn từ cần phù hợp ngữ cảnh và thái độ giao tiếp."],
      ["Khi tóm tắt một văn bản, việc nào quan trọng nhất?", "Giữ ý chính và diễn đạt ngắn gọn, trung thành với văn bản", ["Thêm chi tiết không có trong bản gốc", "Chép mọi câu nguyên văn", "Chỉ ghi cảm xúc cá nhân"], "Tóm tắt cần giữ nội dung cốt lõi, không tự thêm hoặc làm sai lệch thông tin."],
    ]),
  ],
  english: [
    createStarterTopic("grade-8-english", "Lớp 8 · English in context", "Quá khứ tiếp diễn, so sánh và câu điều kiện", ["ABC", "🌦", "8"], [
      ["Điền từ: At 8 p.m. yesterday, I ___ my homework.", "was doing", ["am doing", "does", "were doing"], "Hành động đang diễn ra tại một thời điểm trong quá khứ dùng quá khứ tiếp diễn; I đi với was."],
      ["Điền từ: This road is ___ than that road.", "wider", ["wide", "widest", "more wider"], "Wide là tính từ ngắn; so sánh hơn dùng wider và không thêm more."],
      ["Điền từ: If it rains tomorrow, we ___ at home.", "will stay", ["stayed", "stays", "staying"], "Câu điều kiện loại một dùng hiện tại đơn ở mệnh đề if và will + động từ nguyên mẫu ở mệnh đề chính."],
      ["Điền từ: He speaks English ___ than before.", "more fluently", ["fluent", "most fluent", "fluently more"], "Fluently là trạng từ; dạng so sánh hơn là more fluently."],
      ["Điền từ: ___ she was tired, she finished her homework.", "Although", ["Because", "So", "Therefore"], "Although thể hiện tương phản: mặc dù mệt, cô ấy vẫn hoàn thành bài tập."],
    ]),
  ],
  history: [
    createStarterTopic("grade-8-modern-history", "Lớp 8 · Những chuyển biến lịch sử", "Cách mạng công nghiệp và Việt Nam thế kỉ XVIII–XIX", ["🏭", "📜", "8"], [
      ["Cách mạng công nghiệp lần thứ nhất bắt đầu ở nước nào?", "Anh", ["Nhật Bản", "Việt Nam", "Ai Cập"], "Cách mạng công nghiệp lần thứ nhất khởi đầu ở Anh trong nửa sau thế kỉ XVIII."],
      ["Phát minh nào gắn với việc James Watt cải tiến và thúc đẩy cơ giới hóa?", "Máy hơi nước", ["Máy tính điện tử", "Điện thoại thông minh", "Động cơ phản lực"], "James Watt cải tiến máy hơi nước, giúp nó được sử dụng hiệu quả hơn trong sản xuất và giao thông."],
      ["Năm 1789, Quang Trung đánh bại quân xâm lược nào?", "Quân Thanh", ["Quân Minh", "Quân Tống", "Quân Mông – Nguyên"], "Chiến thắng Ngọc Hồi – Đống Đa năm 1789 đánh bại quân Thanh."],
      ["Ai lập ra triều Nguyễn năm 1802?", "Nguyễn Ánh", ["Nguyễn Huệ", "Lê Lợi", "Lý Công Uẩn"], "Nguyễn Ánh lên ngôi năm 1802, lấy niên hiệu Gia Long và lập triều Nguyễn."],
      ["Năm 1858, liên quân Pháp – Tây Ban Nha mở đầu cuộc tấn công Việt Nam tại đâu?", "Đà Nẵng", ["Hà Nội", "Huế", "Cần Thơ"], "Liên quân Pháp – Tây Ban Nha tấn công Đà Nẵng năm 1858, mở đầu cuộc xâm lược Việt Nam của Pháp."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-8-vietnam-geography", "Lớp 8 · Thiên nhiên Việt Nam", "Địa hình, khí hậu và sông ngòi", ["🇻🇳", "🗺", "8"], [
      ["Lãnh thổ đất liền Việt Nam nằm chủ yếu trong đới khí hậu nào?", "Nhiệt đới", ["Hàn đới", "Ôn đới lạnh", "Cực"], "Việt Nam nằm trong vùng nội chí tuyến bán cầu Bắc; khí hậu còn chịu ảnh hưởng của gió mùa và biển."],
      ["Địa hình đồi núi chiếm khoảng bao nhiêu diện tích đất liền Việt Nam?", "Ba phần tư", ["Một phần tư", "Một phần mười", "Toàn bộ"], "Đồi núi chiếm khoảng ba phần tư diện tích đất liền, nhưng chủ yếu là đồi núi thấp."],
      ["Khí hậu Việt Nam có đặc điểm nổi bật nào?", "Nhiệt đới ẩm gió mùa", ["Khô hạn quanh năm trên toàn lãnh thổ", "Băng giá quanh năm", "Không có sự phân hóa"], "Khí hậu nhìn chung nóng ẩm, chịu ảnh hưởng của gió mùa và phân hóa theo vùng, độ cao, mùa."],
      ["Phần lớn các sông ở Việt Nam có chế độ nước như thế nào?", "Thay đổi theo mùa mưa và mùa khô", ["Không bao giờ thay đổi", "Chỉ có nước vào mùa đông", "Luôn đóng băng"], "Lượng mưa theo mùa làm sông thường có mùa lũ và mùa cạn, thời điểm có thể khác nhau giữa các vùng."],
      ["Loại đất phổ biến ở vùng đồi núi nhiệt đới nước ta là gì?", "Đất feralit", ["Đất băng vĩnh cửu", "Chỉ đất phù sa mới", "Chỉ cát biển"], "Đất feralit phổ biến ở vùng đồi núi nhiệt đới; điều kiện nóng ẩm thúc đẩy phong hóa và tích lũy ôxit sắt, nhôm."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-8-algorithms", "Lớp 8 · Thuật toán và dữ liệu số", "Biến, điều kiện, vòng lặp và đánh giá thông tin", ["💻", "↻", "8"], [
      ["Trong chương trình, biến được dùng chủ yếu để làm gì?", "Lưu giá trị có thể thay đổi khi chương trình chạy", ["Chỉ trang trí màn hình", "Thay thế toàn bộ máy tính", "Chỉ lưu một ảnh không bao giờ đổi"], "Biến có tên để lưu và truy cập giá trị; chương trình có thể cập nhật giá trị đó."],
      ["Cấu trúc “nếu ... thì ...” thuộc loại cấu trúc nào?", "Rẽ nhánh", ["Chỉ tuần tự", "Chỉ lặp vô hạn", "Lưu trữ tệp"], "Rẽ nhánh lựa chọn thao tác dựa trên điều kiện đúng hay sai."],
      ["Đặt tổng = 0, rồi cộng 1 vào tổng trong 5 lần lặp. Giá trị cuối là bao nhiêu?", "5", ["0", "1", "10"], "Mỗi lần tăng thêm 1; sau năm lần, tổng bằng 0 + 5 = 5."],
      ["Để thực hiện cùng một thao tác 10 lần, cấu trúc nào phù hợp nhất?", "Vòng lặp", ["Chỉ một lệnh điều kiện", "Đổi tên tệp", "Tắt chương trình"], "Vòng lặp cho phép lặp lại một nhóm lệnh theo số lần hoặc điều kiện."],
      ["Khi gặp thông tin gây nghi ngờ trên mạng, nên làm gì trước khi chia sẻ?", "Kiểm tra tác giả, thời điểm và đối chiếu nguồn đáng tin cậy", ["Chia sẻ ngay vì tiêu đề hấp dẫn", "Chỉ dựa vào số lượt thích", "Bỏ qua nguồn xuất bản"], "Đánh giá nguồn và kiểm chứng thông tin giúp tránh lan truyền nội dung sai hoặc đã lỗi thời."],
    ]),
  ],
};

const gradeNineTopics = {
  math: [
    createStarterTopic("grade-9-roots", "Lớp 9 · Căn thức", "Căn bậc hai, căn bậc ba và điều kiện xác định", ["√", "x", "9"], [
      ["Căn bậc hai số học của 81 là bao nhiêu?", "9", ["−9", "18", "162"], "Căn bậc hai số học là số không âm có bình phương bằng số đã cho: 9² = 81."],
      ["Rút gọn √50.", "5√2", ["25√2", "2√5", "5"], "50 = 25 × 2 nên √50 = √25 × √2 = 5√2."],
      ["Biểu thức √(x − 3) xác định trong tập số thực khi nào?", "x ≥ 3", ["x > 0", "x ≤ 3", "Mọi số thực x"], "Biểu thức dưới căn bậc hai phải không âm: x − 3 ≥ 0, tức x ≥ 3."],
      ["Tính √((-4)²).", "4", ["−4", "16", "−16"], "Căn bậc hai số học của bình phương một số bằng giá trị tuyệt đối của số đó: |−4| = 4."],
      ["Căn bậc ba của −8 là bao nhiêu?", "−2", ["2", "−4", "4"], "Vì (−2)³ = −8 nên căn bậc ba của −8 là −2."],
    ]),
    createStarterTopic("grade-9-equations", "Lớp 9 · Hệ và phương trình", "Hệ hai ẩn, phương trình bậc hai và bài toán thực tế", ["x,y", "＝", "9"], [
      ["Hệ x + y = 7 và x − y = 1 có nghiệm nào?", "x = 4, y = 3", ["x = 3, y = 4", "x = 5, y = 2", "x = 7, y = 1"], "Cộng hai phương trình được 2x = 8, nên x = 4; thay vào x + y = 7 được y = 3."],
      ["Phương trình x² − 9 = 0 có những nghiệm nào?", "x = −3 hoặc x = 3", ["Chỉ x = 3", "Chỉ x = −3", "x = −9 hoặc x = 9"], "x² = 9 có hai nghiệm là −3 và 3, vì bình phương của cả hai đều bằng 9."],
      ["Biệt thức của phương trình x² − 5x + 6 = 0 là bao nhiêu?", "1", ["25", "49", "−1"], "Với a = 1, b = −5, c = 6: biệt thức bằng b² − 4ac = 25 − 24 = 1."],
      ["Nghiệm của phương trình x² − 5x + 6 = 0 là gì?", "x = 2 hoặc x = 3", ["x = −2 hoặc x = −3", "x = 1 hoặc x = 6", "x = 0 hoặc x = 5"], "Phân tích x² − 5x + 6 = (x − 2)(x − 3), nên một trong hai nhân tử phải bằng 0."],
      ["Hai vé người lớn và một vé trẻ em giá 100.000đ. Vé trẻ em giá 20.000đ. Một vé người lớn giá bao nhiêu?", "40.000đ", ["30.000đ", "50.000đ", "80.000đ"], "Hai vé người lớn giá 100.000 − 20.000 = 80.000đ; mỗi vé giá 40.000đ."],
    ]),
    createStarterTopic("grade-9-circles", "Lớp 9 · Đường tròn", "Bán kính, tiếp tuyến, góc và chu vi", ["○", "π", "9"], [
      ["Đường tròn có bán kính 5 cm. Đường kính dài bao nhiêu?", "10 cm", ["5 cm", "2,5 cm", "25 cm"], "Đường kính bằng hai lần bán kính: 2 × 5 = 10 cm."],
      ["Tiếp tuyến của đường tròn có quan hệ gì với bán kính tại tiếp điểm?", "Vuông góc", ["Song song", "Luôn tạo góc 45°", "Trùng nhau"], "Tiếp tuyến vuông góc với bán kính đi qua tiếp điểm."],
      ["Một góc nội tiếp chắn nửa đường tròn có số đo bao nhiêu?", "90°", ["45°", "180°", "360°"], "Góc nội tiếp bằng một nửa số đo cung bị chắn; nửa đường tròn có số đo 180°."],
      ["Chu vi đường tròn bán kính 3 cm là bao nhiêu?", "6π cm", ["3π cm", "9π cm", "12π cm"], "Chu vi đường tròn bằng 2πr; thay r = 3 được 6π cm."],
      ["Diện tích hình tròn bán kính 4 cm là bao nhiêu?", "16π cm²", ["8π cm²", "4π cm²", "32π cm²"], "Diện tích hình tròn bằng πr²; với r = 4, diện tích là 16π cm²."],
    ]),
  ],
  science: [
    createStarterTopic("grade-9-electricity-and-energy", "Lớp 9 · Điện và năng lượng", "Định luật Ohm, mạch điện và công suất", ["⚡", "Ω", "9"], [
      ["Điện trở 6 Ω có hiệu điện thế 12 V giữa hai đầu. Cường độ dòng điện là bao nhiêu?", "2 A", ["0,5 A", "6 A", "72 A"], "Theo định luật Ohm: I = U/R = 12/6 = 2 A."],
      ["Hai điện trở 3 Ω và 5 Ω mắc nối tiếp có điện trở tương đương bao nhiêu?", "8 Ω", ["2 Ω", "15 Ω", "1,875 Ω"], "Mắc nối tiếp: điện trở tương đương bằng tổng các điện trở, 3 + 5 = 8 Ω."],
      ["Hai điện trở bằng nhau, mỗi điện trở 6 Ω, mắc song song. Điện trở tương đương là bao nhiêu?", "3 Ω", ["12 Ω", "6 Ω", "36 Ω"], "Hai điện trở bằng nhau mắc song song có điện trở tương đương bằng một nửa mỗi điện trở: 6/2 = 3 Ω."],
      ["Thiết bị hoạt động với hiệu điện thế 12 V và dòng điện 0,5 A. Công suất điện là bao nhiêu?", "6 W", ["24 W", "12,5 W", "0,04 W"], "Công suất điện P = UI = 12 × 0,5 = 6 W."],
      ["Thiết bị công suất 100 W hoạt động trong 2 giờ. Điện năng tiêu thụ là bao nhiêu?", "0,2 kWh", ["200 kWh", "2 kWh", "0,02 kWh"], "100 W = 0,1 kW; điện năng bằng công suất nhân thời gian: 0,1 × 2 = 0,2 kWh."],
    ]),
    createStarterTopic("grade-9-genetics", "Lớp 9 · Di truyền cơ bản", "DNA, gene, nhiễm sắc thể và biến dị", ["DNA", "🧬", "9"], [
      ["Phân tử nào chủ yếu lưu giữ thông tin di truyền trong tế bào?", "DNA", ["Nước", "Tinh bột", "Chất béo dự trữ"], "Thông tin di truyền được lưu trong trình tự các nucleotide của DNA."],
      ["Gene được hiểu là gì ở mức cơ bản?", "Một đoạn DNA mang thông tin mã hóa một sản phẩm xác định", ["Một tế bào hoàn chỉnh", "Toàn bộ cơ thể", "Chỉ một phân tử nước"], "Gene là đoạn DNA chứa thông tin để tạo sản phẩm xác định, như một chuỗi polypeptide hoặc RNA."],
      ["Trong DNA, adenine (A) liên kết bổ sung với base nào?", "Thymine (T)", ["Guanine (G)", "Cytosine (C)", "Uracil (U)"], "Trong DNA, A liên kết với T và G liên kết với C theo nguyên tắc bổ sung."],
      ["Tế bào sinh dưỡng người bình thường có bao nhiêu nhiễm sắc thể?", "46", ["23", "44", "48"], "Tế bào sinh dưỡng người bình thường có 46 nhiễm sắc thể, xếp thành 23 cặp."],
      ["Sự thay đổi trong trình tự nucleotide của gene được gọi là gì?", "Đột biến gene", ["Quang hợp", "Thoát hơi nước", "Tiêu hóa"], "Đột biến gene làm thay đổi trình tự nucleotide; tác động có thể khác nhau tùy vị trí và điều kiện."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-9-literature", "Lớp 9 · Đọc hiểu và nghị luận", "Luận đề, trích dẫn và lời kể", ["📖", "✎", "9"], [
      ["Trong bài nghị luận, luận đề là gì?", "Vấn đề chính được bàn luận trong toàn bài", ["Chỉ một dấu câu", "Tên mọi nhân vật", "Một ví dụ bất kì"], "Luận đề là vấn đề bao quát; các luận điểm triển khai những khía cạnh của vấn đề đó."],
      ["Khi trích nguyên văn lời một tác giả, cách nào phù hợp?", "Giữ đúng lời trích, đánh dấu phần trích và ghi nguồn", ["Đổi lời trích nhưng vẫn gọi là nguyên văn", "Bỏ nguồn để người đọc đoán", "Gán câu nói cho người khác"], "Trích dẫn trực tiếp cần chính xác và ghi nguồn để người đọc kiểm tra, đồng thời tôn trọng tác giả."],
      ["Câu nào sử dụng lời dẫn trực tiếp?", "Lan nói: “Mình sẽ đến thư viện.”", ["Lan nói rằng bạn sẽ đến thư viện.", "Lan dự định đến thư viện.", "Theo Lan, thư viện rất yên tĩnh."], "Lời dẫn trực tiếp giữ nguyên lời nhân vật, thường dùng dấu hai chấm và dấu ngoặc kép."],
      ["Chi tiết nghệ thuật có thể giúp người đọc hiểu điều gì?", "Đặc điểm nhân vật và ý nghĩa của tác phẩm", ["Chỉ số trang của sách", "Chỉ giá bán của sách", "Chỉ năm in"], "Chi tiết được lựa chọn có thể khắc họa nhân vật, tạo tình huống và góp phần thể hiện chủ đề."],
      ["Khi phân tích một nhân vật, bằng chứng nào phù hợp?", "Lời nói, hành động và suy nghĩ được thể hiện trong văn bản", ["Tin đồn về người đọc", "Thông tin không liên quan đến truyện", "Cảm nhận không có căn cứ"], "Phân tích cần dựa vào chi tiết trong văn bản và giải thích chúng cho thấy đặc điểm nào của nhân vật."],
    ]),
  ],
  english: [
    createStarterTopic("grade-9-english", "Lớp 9 · English connections", "Mệnh đề quan hệ, câu ước và lời nói gián tiếp", ["ABC", "💬", "9"], [
      ["Điền từ: The girl ___ won the prize is my friend.", "who", ["which", "where", "when"], "Who thay cho người và làm chủ ngữ trong mệnh đề quan hệ này."],
      ["Điền từ: This is the book ___ I bought yesterday.", "which", ["who", "where", "when"], "Which dùng cho vật; ở đây thay cho the book trong mệnh đề quan hệ."],
      ["Điền từ: I wish I ___ taller.", "were", ["am", "will be", "being"], "Câu ước trái với hiện tại thường dùng dạng quá khứ; were là cách dùng chuẩn trong câu này."],
      ["Tường thuật ngay sau đó, lùi thì theo cách thông thường: He said, “I am tired.”", "He said that he was tired.", ["He said that I am tired.", "He said that he is tiring.", "He said that he were tired."], "Đổi I thành he và lùi am thành was khi tường thuật theo cách thông thường với said."],
      ["Điền từ: If I had more free time, I ___ a new language.", "would learn", ["will learn", "learns", "learning"], "Điều kiện loại hai dùng quá khứ đơn trong mệnh đề if và would + động từ nguyên mẫu ở mệnh đề chính."],
    ]),
  ],
  history: [
    createStarterTopic("grade-9-twentieth-century", "Lớp 9 · Lịch sử thế kỉ XX", "Những mốc lịch sử thế giới và Việt Nam", ["📜", "🕊", "9"], [
      ["Chiến tranh thế giới thứ hai diễn ra trong khoảng thời gian nào?", "1939–1945", ["1914–1918", "1929–1933", "1954–1975"], "Chiến tranh thế giới thứ hai bắt đầu năm 1939 và kết thúc năm 1945."],
      ["Liên hợp quốc được thành lập vào năm nào?", "1945", ["1919", "1930", "1954"], "Liên hợp quốc ra đời năm 1945 nhằm góp phần duy trì hòa bình và an ninh quốc tế."],
      ["Đảng Cộng sản Việt Nam được thành lập vào năm nào?", "1930", ["1911", "1925", "1945"], "Hội nghị hợp nhất đầu năm 1930 thành lập Đảng Cộng sản Việt Nam."],
      ["Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày nào?", "2/9/1945", ["19/8/1945", "7/5/1954", "30/4/1975"], "Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập."],
      ["Chiến thắng Điện Biên Phủ kết thúc vào ngày nào?", "7/5/1954", ["2/9/1945", "19/12/1946", "30/4/1975"], "Chiến dịch Điện Biên Phủ kết thúc thắng lợi ngày 7/5/1954."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-9-vietnam-economy", "Lớp 9 · Dân cư và kinh tế Việt Nam", "Ngành kinh tế, vùng sản xuất và đô thị hóa", ["🇻🇳", "📊", "9"], [
      ["Vùng nào là vùng sản xuất lúa lớn nhất Việt Nam?", "Đồng bằng sông Cửu Long", ["Tây Nguyên", "Bắc Trung Bộ", "Trung du và miền núi Bắc Bộ"], "Đồng bằng sông Cửu Long có diện tích canh tác rộng và điều kiện thuận lợi, là vùng sản xuất lúa lớn nhất nước."],
      ["Cây công nghiệp nào gắn nổi bật với vùng Tây Nguyên?", "Cà phê", ["Lúa nước", "Rau ôn đới trên toàn vùng", "Cây cói"], "Tây Nguyên nổi bật về cà phê nhờ đất bazan và điều kiện khí hậu phù hợp ở nhiều khu vực."],
      ["Hoạt động nào thuộc khu vực dịch vụ?", "Vận tải hành khách", ["Trồng lúa", "Khai thác than", "Sản xuất xi măng"], "Vận tải là dịch vụ; trồng lúa thuộc nông nghiệp, khai thác than và sản xuất xi măng thuộc công nghiệp."],
      ["Đô thị hóa thường gắn với thay đổi nào?", "Tăng vai trò của đô thị và tỉ lệ dân cư đô thị", ["Mọi thành phố biến thành làng", "Toàn bộ dân cư chỉ làm nông", "Không thay đổi phân bố dân cư"], "Đô thị hóa gắn với sự phát triển đô thị, gia tăng dân cư đô thị và lan tỏa lối sống đô thị."],
      ["Biện pháp nào giúp phát triển nghề cá bền vững?", "Bảo vệ nguồn lợi và không sử dụng cách đánh bắt hủy diệt", ["Đánh bắt bằng chất nổ", "Khai thác mọi cá con", "Phá rừng ngập mặn để tăng đánh bắt"], "Bảo vệ môi trường sống, tuân thủ quy định khai thác và tránh đánh bắt hủy diệt giúp duy trì nguồn lợi."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-9-digital-problem-solving", "Lớp 9 · Giải quyết vấn đề số", "Mô phỏng, kiểm thử và lựa chọn công cụ", ["💻", "✓", "9"], [
      ["Phần mềm mô phỏng có ích khi nào?", "Khi cần quan sát mô hình của hiện tượng khó thực hiện trực tiếp", ["Khi muốn bỏ qua mọi bằng chứng", "Khi muốn đảm bảo mọi mô hình đều chính xác tuyệt đối", "Khi không cần đặt câu hỏi"], "Mô phỏng giúp thử nghiệm trên mô hình, nhưng kết quả phụ thuộc giả định và giới hạn của mô hình."],
      ["Trước khi chọn công cụ số để làm bài tập, nên xác định điều gì?", "Mục tiêu, dữ liệu và yêu cầu của bài", ["Chỉ màu biểu tượng", "Chỉ số lượt tải", "Chỉ quảng cáo của công cụ"], "Hiểu yêu cầu giúp chọn công cụ phù hợp, thay vì dùng công cụ nổi tiếng nhưng không đáp ứng nhiệm vụ."],
      ["Vì sao cần kiểm thử chương trình bằng nhiều trường hợp?", "Để phát hiện lỗi và kiểm tra kết quả trong các tình huống khác nhau", ["Để chứng minh chương trình không thể có lỗi", "Để thay thế việc hiểu bài toán", "Để tránh xem kết quả"], "Một trường hợp chạy đúng chưa bảo đảm mọi trường hợp đều đúng; cần thử dữ liệu điển hình và các trường hợp biên."],
      ["Khi làm việc nhóm trên tài liệu trực tuyến, cách quản lí quyền nào phù hợp?", "Chỉ cấp quyền cần thiết cho đúng người", ["Cho mọi người trên mạng quyền sửa", "Công khai mọi dữ liệu cá nhân", "Chia sẻ mật khẩu tài khoản"], "Phân quyền phù hợp giúp cộng tác hiệu quả và hạn chế sửa đổi hoặc truy cập ngoài ý muốn."],
      ["Muốn so sánh doanh thu các tháng, loại biểu đồ nào thường phù hợp?", "Biểu đồ cột", ["Một ảnh trang trí không có dữ liệu", "Chỉ biểu tượng cảm xúc", "Sơ đồ thư mục"], "Biểu đồ cột giúp so sánh giá trị giữa các tháng; biểu đồ đường cũng có thể hữu ích khi nhấn mạnh xu hướng."],
    ]),
  ],
};

const gradeTenTopics = {
  math: [
    createStarterTopic("grade-10-sets", "Lớp 10 · Mệnh đề và tập hợp", "Phủ định, giao, hợp và khoảng số thực", ["∩", "∪", "10"], [
      ["Phủ định của mệnh đề “Mọi số nguyên đều là số chẵn” là gì?", "Có ít nhất một số nguyên không phải số chẵn", ["Mọi số nguyên đều là số lẻ", "Không có số nguyên nào", "Mọi số chẵn đều là số nguyên"], "Phủ định của “mọi phần tử có tính chất” là “tồn tại ít nhất một phần tử không có tính chất đó”."],
      ["Cho A = {1, 2, 3} và B = {2, 3, 4}. Giao của A và B là gì?", "{2, 3}", ["{1, 4}", "{1, 2, 3, 4}", "{1, 2}"], "Giao chứa những phần tử thuộc cả hai tập hợp: 2 và 3."],
      ["Cho A = {1, 2} và B = {2, 3}. Hợp của A và B là gì?", "{1, 2, 3}", ["{2}", "{1, 3}", "{1, 2, 2, 3}"], "Hợp chứa các phần tử thuộc ít nhất một tập; mỗi phần tử chỉ liệt kê một lần."],
      ["Khoảng (−1; 3] chứa số nào sau đây?", "3", ["−1", "4", "−2"], "Dấu ngoặc tròn loại −1, dấu ngoặc vuông nhận 3; các số trong khoảng thỏa −1 < x ≤ 3."],
      ["Cho A = {1, 2, 3, 4} và B = {2, 4}. Hiệu A \\ B là gì?", "{1, 3}", ["{2, 4}", "{1, 2, 3, 4}", "Tập rỗng"], "Hiệu A \\ B gồm các phần tử thuộc A nhưng không thuộc B, tức 1 và 3."],
    ]),
    createStarterTopic("grade-10-quadratic-functions", "Lớp 10 · Hàm số bậc hai", "Đỉnh parabol, trục đối xứng và dấu tam thức", ["x²", "↗", "10"], [
      ["Đỉnh của parabol y = x² − 4x + 3 là điểm nào?", "(2; −1)", ["(−2; −1)", "(2; 3)", "(0; 3)"], "Viết y = (x − 2)² − 1, nên đỉnh là (2; −1)."],
      ["Trục đối xứng của parabol y = x² + 2x − 3 là đường nào?", "x = −1", ["x = 1", "y = −1", "x = −3"], "Hoành độ đỉnh bằng −b/(2a) = −2/2 = −1; trục đối xứng là x = −1."],
      ["Hàm số y = (x − 1)² + 2 có giá trị nhỏ nhất bằng bao nhiêu?", "2", ["1", "0", "−2"], "Bình phương luôn không âm, nên y ≥ 2; dấu bằng xảy ra khi x = 1."],
      ["Tam thức x² − 4 âm khi nào?", "−2 < x < 2", ["x < −2 hoặc x > 2", "Mọi số thực x", "Chỉ x = 2"], "x² − 4 < 0 tương đương x² < 4, tức −2 < x < 2."],
      ["Đồ thị y = −x² có bề lõm hướng nào?", "Xuống dưới", ["Lên trên", "Sang phải", "Sang trái"], "Hệ số của x² âm nên parabol có bề lõm hướng xuống dưới."],
    ]),
    createStarterTopic("grade-10-vectors", "Lớp 10 · Vectơ và tọa độ", "Tọa độ, độ dài và tích vô hướng", ["→", "Oxy", "10"], [
      ["Cho A(1; 2), B(4; 6). Vectơ AB có tọa độ nào?", "(3; 4)", ["(5; 8)", "(−3; −4)", "(4; 3)"], "Lấy tọa độ điểm cuối trừ điểm đầu: AB = (4 − 1; 6 − 2) = (3; 4)."],
      ["Vectơ có tọa độ (3; 4) có độ dài bao nhiêu?", "5", ["7", "25", "1"], "Độ dài bằng căn bậc hai của 3² + 4² = 25, tức 5."],
      ["Cho u = (1; 2), v = (3; −1). Tọa độ u + v là gì?", "(4; 1)", ["(2; −3)", "(3; −2)", "(4; 3)"], "Cộng từng tọa độ: (1 + 3; 2 − 1) = (4; 1)."],
      ["Tích vô hướng của u = (1; 2) và v = (2; −1) bằng bao nhiêu?", "0", ["4", "−4", "2"], "Tích vô hướng bằng 1 × 2 + 2 × (−1) = 0; hai vectơ này vuông góc."],
      ["Trung điểm của A(0; 2) và B(4; 6) có tọa độ nào?", "(2; 4)", ["(4; 8)", "(2; 2)", "(0; 4)"], "Lấy trung bình các tọa độ tương ứng: ((0 + 4)/2; (2 + 6)/2) = (2; 4)."],
    ]),
  ],
  science: [
    createStarterTopic("grade-10-mechanics", "Lớp 10 · Cơ học", "Gia tốc, lực, công và động năng", ["⚙", "F", "10"], [
      ["Vận tốc tăng đều từ 2 m/s lên 10 m/s trong 4 s theo cùng một chiều. Gia tốc là bao nhiêu?", "2 m/s²", ["3 m/s²", "8 m/s²", "0,5 m/s²"], "Gia tốc bằng độ biến thiên vận tốc chia thời gian: (10 − 2)/4 = 2 m/s²."],
      ["Vật khối lượng 2 kg chịu hợp lực 6 N. Độ lớn gia tốc là bao nhiêu?", "3 m/s²", ["12 m/s²", "4 m/s²", "0,33 m/s²"], "Theo định luật II Newton, F = ma nên a = 6/2 = 3 m/s²."],
      ["Lực không đổi 10 N kéo vật đi 3 m cùng hướng với lực. Công của lực là bao nhiêu?", "30 J", ["13 J", "3 J", "0 J"], "Khi lực cùng hướng chuyển dời, công bằng lực nhân quãng đường: 10 × 3 = 30 J."],
      ["Vật khối lượng 2 kg chuyển động với tốc độ 3 m/s. Động năng là bao nhiêu?", "9 J", ["6 J", "18 J", "3 J"], "Động năng bằng một nửa khối lượng nhân bình phương tốc độ: 0,5 × 2 × 3² = 9 J."],
      ["Cặp lực trong định luật III Newton tác dụng lên đâu?", "Hai vật khác nhau", ["Cùng một vật", "Chỉ vật có khối lượng lớn hơn", "Không tác dụng lên vật nào"], "Hai vật tương tác tác dụng lực lên nhau; cặp lực có cùng độ lớn, ngược chiều và đặt lên hai vật khác nhau."],
    ]),
    createStarterTopic("grade-10-atomic-chemistry", "Lớp 10 · Nguyên tử và liên kết", "Hạt cơ bản, số hiệu nguyên tử và liên kết hóa học", ["⚛", "e", "10"], [
      ["Hạt nào trong nguyên tử mang điện tích dương?", "Proton", ["Electron", "Neutron", "Cả electron và neutron"], "Proton mang điện tích dương, electron mang điện tích âm và neutron không mang điện."],
      ["Số hiệu nguyên tử Z bằng số hạt nào trong hạt nhân?", "Số proton", ["Số neutron", "Tổng proton và neutron", "Số electron lớp ngoài cùng"], "Số hiệu nguyên tử xác định số proton trong hạt nhân và nhận diện nguyên tố."],
      ["Nguyên tử trung hòa có 11 proton thì có bao nhiêu electron?", "11", ["10", "12", "22"], "Nguyên tử trung hòa có tổng điện tích bằng 0, nên số electron bằng số proton."],
      ["Hai nguyên tử đồng vị của cùng một nguyên tố khác nhau về điều gì?", "Số neutron", ["Số proton", "Số hiệu nguyên tử", "Tên nguyên tố"], "Đồng vị có cùng số proton nhưng khác số neutron, nên có số khối khác nhau."],
      ["Liên kết cộng hóa trị thường được hình thành bằng cách nào?", "Các nguyên tử dùng chung một hay nhiều cặp electron", ["Chỉ dùng chung proton", "Xóa toàn bộ hạt nhân", "Chỉ trao đổi neutron"], "Liên kết cộng hóa trị hình thành nhờ một hay nhiều cặp electron dùng chung giữa các nguyên tử."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-10-literature", "Lớp 10 · Văn học và văn bản", "Thần thoại, sử thi và phân tích tác phẩm", ["📖", "✎", "10"], [
      ["Thần thoại thường phản ánh điều gì?", "Cách người xưa hình dung nguồn gốc thế giới và các hiện tượng", ["Chỉ dữ liệu dự báo thời tiết", "Chỉ hướng dẫn sử dụng máy", "Chỉ bảng giá hàng hóa"], "Thần thoại dùng trí tưởng tượng và hình tượng thần linh để lí giải thế giới, con người theo quan niệm thời cổ."],
      ["Nhân vật trung tâm của sử thi thường mang đặc điểm nào?", "Người anh hùng tiêu biểu cho lí tưởng và sức mạnh cộng đồng", ["Chỉ là người bán hàng bất kì", "Không có hành động nào", "Luôn là người kể ngoài câu chuyện"], "Sử thi thường kể những sự kiện lớn, đề cao người anh hùng và các giá trị của cộng đồng."],
      ["Chủ đề của tác phẩm là gì?", "Vấn đề chính về đời sống được tác phẩm đặt ra", ["Chỉ tên nhà xuất bản", "Chỉ số trang", "Mọi từ xuất hiện trong bài"], "Chủ đề là vấn đề trung tâm được thể hiện qua nhân vật, sự kiện, hình ảnh và cách tổ chức tác phẩm."],
      ["Khi phân tích tác dụng một hình ảnh thơ, nên làm gì?", "Đặt hình ảnh trong ngữ cảnh và giải thích ý nghĩa, cảm xúc gợi ra", ["Chỉ đếm số chữ", "Tách khỏi mọi câu xung quanh", "Chỉ chép định nghĩa trong từ điển"], "Ngữ cảnh giúp hiểu hình ảnh góp phần thể hiện cảm xúc, chủ đề và nét nghệ thuật như thế nào."],
      ["Một văn bản thông tin đáng tin cậy cần đặc điểm nào?", "Thông tin có thể kiểm chứng và nguồn được nêu rõ", ["Chỉ có tiêu đề gây sốc", "Không cần ngày xuất bản", "Chỉ dựa vào lời đồn"], "Nguồn rõ ràng và thông tin kiểm chứng được giúp người đọc đánh giá độ tin cậy; vẫn cần xem thời điểm và mục đích viết."],
    ]),
  ],
  english: [
    createStarterTopic("grade-10-english", "Lớp 10 · English for learning", "Câu bị động, hiện tại hoàn thành và động từ nguyên mẫu", ["ABC", "🌱", "10"], [
      ["Điền từ: English ___ in many countries.", "is spoken", ["speaks", "is speaking", "spoken"], "Câu bị động hiện tại đơn dùng am/is/are + quá khứ phân từ; English đi với is spoken."],
      ["Điền từ: We ___ here since 2020.", "have lived", ["live yesterday", "are live", "has lived"], "Since 2020 chỉ mốc bắt đầu kéo dài đến hiện tại; với we dùng have lived."],
      ["Điền từ: She decided ___ a new language.", "to learn", ["learning", "learns", "learned"], "Sau decide dùng động từ nguyên mẫu có to: decided to learn."],
      ["Điền từ: This task ___ by Friday. It is required.", "must be completed", ["must completed", "must completing", "must be complete by someone yesterday"], "Bị động với động từ khuyết thiếu dùng modal + be + quá khứ phân từ: must be completed."],
      ["Điền từ: They were studying when the phone ___.", "rang", ["ring", "was ring", "has ringing"], "Hành động ngắn xen vào hành động đang diễn ra trong quá khứ thường dùng quá khứ đơn: rang."],
    ]),
  ],
  history: [
    createStarterTopic("grade-10-civilizations", "Lớp 10 · Văn minh và di sản", "Thành tựu văn minh, tư liệu và bảo tồn", ["🏛", "📜", "10"], [
      ["Chữ hình nêm gắn với nền văn minh cổ đại nào?", "Lưỡng Hà", ["La Mã", "Văn Lang", "Maya"], "Chữ hình nêm được người Sumer phát triển ở Lưỡng Hà và thường được ghi trên bảng đất sét."],
      ["Giấy, kĩ thuật in, thuốc súng và la bàn thường được nhắc đến như thành tựu của nền văn minh nào?", "Trung Hoa", ["Ai Cập", "Hy Lạp", "La Mã"], "Đây là bốn phát minh thường được nhắc đến của Trung Hoa, có ảnh hưởng lớn đến nhiều khu vực."],
      ["Thời kì Phục hưng ở châu Âu nổi bật với xu hướng nào?", "Đề cao con người và phát triển văn học, nghệ thuật, khoa học", ["Từ bỏ mọi hoạt động nghệ thuật", "Ngừng tìm hiểu tự nhiên", "Chỉ duy trì kinh tế tự cấp tự túc"], "Phục hưng khơi dậy giá trị văn hóa cổ điển và tinh thần nhân văn, thúc đẩy sáng tạo, nghiên cứu."],
      ["Vì sao cần đối chiếu nhiều nguồn tư liệu khi nghiên cứu lịch sử?", "Để kiểm tra thông tin và nhận diện góc nhìn, giới hạn của nguồn", ["Để mọi nguồn tự động đúng", "Để bỏ qua bằng chứng", "Để chỉ chọn nguồn hợp ý mình"], "Nguồn tư liệu có bối cảnh, mục đích và giới hạn; đối chiếu giúp hình thành nhận định có cơ sở hơn."],
      ["Hành động nào phù hợp khi tham quan di tích?", "Tuân thủ hướng dẫn và không làm hư hại hiện vật", ["Khắc tên lên tường", "Tự lấy hiện vật làm kỉ niệm", "Di chuyển đồ trưng bày tùy ý"], "Tôn trọng quy định và bảo vệ hiện vật giúp giữ gìn di sản cho cộng đồng và các thế hệ sau."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-10-physical-geography", "Lớp 10 · Địa lí tự nhiên", "Khí quyển, nước, địa hình và môi trường", ["🌍", "🌦", "10"], [
      ["Phần lớn hiện tượng thời tiết diễn ra ở tầng khí quyển nào?", "Tầng đối lưu", ["Tầng bình lưu", "Tầng nhiệt", "Tầng ngoài"], "Tầng đối lưu chứa phần lớn hơi nước và diễn ra hầu hết các hiện tượng như mây, mưa, gió."],
      ["Trong vòng tuần hoàn nước, quá trình nào đưa nước lỏng thành hơi nước?", "Bốc hơi", ["Ngưng tụ", "Đóng băng", "Dòng chảy mặt"], "Bốc hơi chuyển nước từ thể lỏng sang thể khí; ngưng tụ là quá trình ngược lại."],
      ["Nội lực có thể gây ra hiện tượng nào?", "Động đất và hoạt động núi lửa", ["Chỉ bốc hơi nước", "Chỉ xói mòn do mưa", "Chỉ vận chuyển cát do gió"], "Nội lực có nguồn năng lượng từ bên trong Trái Đất, góp phần gây biến dạng vỏ, động đất và núi lửa."],
      ["Phong hóa được hiểu là quá trình nào?", "Phá hủy và biến đổi đá tại chỗ", ["Chỉ di chuyển đất đá đến nơi khác", "Chỉ hình thành mây", "Chỉ chuyển động của đại dương"], "Phong hóa làm đá bị phá hủy hoặc biến đổi tại chỗ; vận chuyển là quá trình đưa vật liệu đến nơi khác."],
      ["Yếu tố nào giúp giảm xói mòn đất trên sườn dốc?", "Duy trì lớp phủ thực vật", ["Chặt sạch cây", "Để đất trống trong mùa mưa", "Loại bỏ mọi rễ cây"], "Thực vật làm giảm tác động của giọt mưa, rễ giữ đất và lớp phủ giúp hạn chế dòng chảy mặt."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-10-python-basics", "Lớp 10 · Lập trình Python", "Biến, kiểu dữ liệu, điều kiện và vòng lặp", ["🐍", "01", "10"], [
      ["Trong Python, sau x = 3 rồi x = x + 2, x có giá trị nào?", "5", ["3", "2", "6"], "Lệnh thứ hai lấy giá trị hiện tại của x cộng 2 rồi gán lại cho x."],
      ["Kết quả của 7 // 2 trong Python là bao nhiêu?", "3", ["3,5", "1", "14"], "Với hai số nguyên dương, // cho thương nguyên làm tròn xuống; 7 chia 2 có thương nguyên là 3."],
      ["Biểu thức nào trong Python kiểm tra x có bằng 10 hay không?", "x == 10", ["x = 10", "x => 10", "x :=: 10"], "== dùng để so sánh bằng; = dùng để gán giá trị."],
      ["range(4) tạo dãy giá trị nào khi duyệt bằng vòng lặp?", "0, 1, 2, 3", ["1, 2, 3, 4", "0, 1, 2, 3, 4", "Chỉ 4"], "range(4) bắt đầu từ 0, tăng 1 và dừng trước 4."],
      ["Hàm input() trong Python trả về kiểu dữ liệu nào?", "Chuỗi kí tự (str)", ["Luôn là số nguyên (int)", "Luôn là số thực (float)", "Luôn là giá trị đúng/sai (bool)"], "input() trả về chuỗi; muốn tính toán với số cần chuyển kiểu phù hợp và xử lí dữ liệu không hợp lệ."],
    ]),
  ],
};

for (const [subjectId, topics] of Object.entries(gradeSixTopics)) {
  for (const topic of topics) topic.level = "LỚP 6";
  curriculumExtensions[subjectId].push(...topics);
}

for (const [subjectId, topics] of Object.entries(gradeSevenTopics)) {
  for (const topic of topics) topic.level = "LỚP 7";
  curriculumExtensions[subjectId].push(...topics);
}

for (const [subjectId, topics] of Object.entries(gradeEightTopics)) {
  for (const topic of topics) topic.level = "LỚP 8";
  curriculumExtensions[subjectId].push(...topics);
}

for (const [subjectId, topics] of Object.entries(gradeNineTopics)) {
  for (const topic of topics) topic.level = "LỚP 9";
  curriculumExtensions[subjectId].push(...topics);
}




const gradeElevenTopics = {
  math: [
    createStarterTopic("grade-11-trigonometry", "Lớp 11 · Lượng giác", "Góc, giá trị lượng giác và phương trình cơ bản", ["sin", "π", "11"], [
      ["Góc 180° tương ứng với bao nhiêu radian?", "π rad", ["2π rad", "π/2 rad", "π/4 rad"], "Một vòng tròn là 360° hay 2π rad, nên nửa vòng là 180° hay π rad."],
      ["Giá trị của sin(π/6) là bao nhiêu?", "1/2", ["0", "1", "√3/2"], "π/6 rad tương ứng 30°; sin 30° = 1/2."],
      ["Đẳng thức nào đúng với mọi góc x?", "sin²x + cos²x = 1", ["sin x + cos x = 1", "sin²x − cos²x = 1", "sin x = cos x"], "Đây là hệ thức lượng giác cơ bản, suy ra từ tọa độ điểm trên đường tròn đơn vị."],
      ["Chu kì dương nhỏ nhất của hàm số y = sin x là bao nhiêu?", "2π", ["π", "π/2", "4π"], "sin(x + 2π) = sin x; 2π là chu kì dương nhỏ nhất."],
      ["Trong đoạn [0; 2π], phương trình cos x = 1 có những nghiệm nào?", "0 và 2π", ["Chỉ π", "π/2 và 3π/2", "π và 2π"], "cos x = 1 khi x là bội nguyên của 2π; trong đoạn đã cho có 0 và 2π."],
    ]),
    createStarterTopic("grade-11-sequences", "Lớp 11 · Dãy số", "Cấp số cộng, cấp số nhân và tổng các số hạng", ["uₙ", "Σ", "11"], [
      ["Cấp số cộng có số hạng đầu 2 và công sai 3. Số hạng thứ tư là bao nhiêu?", "11", ["8", "14", "6"], "Số hạng thứ tư bằng 2 + (4 − 1) × 3 = 11."],
      ["Dãy 5, 9, 13, 17, ... là cấp số cộng có công sai bao nhiêu?", "4", ["5", "9", "2"], "Hiệu mỗi số hạng với số đứng trước đều bằng 4."],
      ["Tổng năm số hạng đầu của cấp số cộng 1, 3, 5, 7, 9, ... là bao nhiêu?", "25", ["20", "30", "45"], "Tổng bằng 5 × (1 + 9)/2 = 25."],
      ["Cấp số nhân có số hạng đầu 3 và công bội 2. Số hạng thứ tư là bao nhiêu?", "24", ["12", "18", "48"], "Số hạng thứ tư bằng 3 × 2³ = 24."],
      ["Dãy 81, 27, 9, 3, ... là cấp số nhân có công bội bao nhiêu?", "1/3", ["3", "−3", "−1/3"], "Tỉ số một số hạng với số đứng trước là 27/81 = 1/3."],
    ]),
    createStarterTopic("grade-11-derivatives", "Lớp 11 · Đạo hàm cơ bản", "Tốc độ thay đổi và hệ số góc tiếp tuyến", ["f′", "x²", "11"], [
      ["Đạo hàm của hàm số y = x² là gì?", "2x", ["x", "x²", "2"], "Theo quy tắc đạo hàm lũy thừa, đạo hàm của x² là 2x."],
      ["Đạo hàm của hàm số y = 3x + 5 là bao nhiêu?", "3", ["5", "3x", "8"], "Đạo hàm của 3x là 3, còn đạo hàm của hằng số 5 là 0."],
      ["Đạo hàm của hàm số hằng y = 7 là bao nhiêu?", "0", ["7", "1", "7x"], "Hàm hằng không thay đổi theo x nên có đạo hàm bằng 0."],
      ["Hệ số góc tiếp tuyến của đồ thị y = x² tại điểm có hoành độ x = 2 là bao nhiêu?", "4", ["2", "1", "8"], "Hệ số góc tiếp tuyến bằng giá trị đạo hàm tại điểm đó: y′(2) = 2 × 2 = 4."],
      ["Vật có vị trí s(t) = t² mét, với t tính bằng giây. Vận tốc tức thời tại t = 3 s là bao nhiêu?", "6 m/s", ["9 m/s", "3 m/s", "2 m/s"], "Vận tốc tức thời là đạo hàm của vị trí theo thời gian: v(t) = 2t, nên v(3) = 6 m/s."],
    ]),
  ],
  science: [
    createStarterTopic("grade-11-oscillations-and-waves", "Lớp 11 · Dao động và sóng", "Chu kì, tần số, bước sóng và dao động điều hòa", ["〰", "Hz", "11"], [
      ["Một dao động có chu kì 0,5 s. Tần số là bao nhiêu?", "2 Hz", ["0,5 Hz", "5 Hz", "0,25 Hz"], "Tần số là nghịch đảo chu kì: f = 1/T = 1/0,5 = 2 Hz."],
      ["Sóng có tốc độ 12 m/s và tần số 3 Hz. Bước sóng là bao nhiêu?", "4 m", ["36 m", "9 m", "0,25 m"], "Bước sóng bằng tốc độ truyền sóng chia tần số: 12/3 = 4 m."],
      ["Trong dao động điều hòa, biên độ là gì?", "Độ lệch lớn nhất khỏi vị trí cân bằng", ["Thời gian thực hiện một dao động", "Số dao động trong một giây", "Quãng đường trong mọi khoảng thời gian"], "Biên độ đặc trưng cho độ lệch cực đại, không phải chu kì hay tần số."],
      ["Trong dao động điều hòa, tốc độ của vật lớn nhất khi nào?", "Khi qua vị trí cân bằng", ["Khi ở vị trí biên", "Khi gia tốc có độ lớn cực đại", "Khi li độ có độ lớn cực đại"], "Tại vị trí cân bằng, thế năng nhỏ nhất và động năng lớn nhất nên tốc độ đạt cực đại."],
      ["Một sóng cơ truyền năng lượng nhưng các phần tử môi trường chủ yếu làm gì?", "Dao động quanh vị trí cân bằng", ["Đi cùng sóng mãi về một phía", "Biến mất sau mỗi chu kì", "Không chuyển động trong mọi trường hợp"], "Sóng cơ lan truyền dao động và năng lượng; các phần tử môi trường dao động quanh vị trí cân bằng."],
    ]),
    createStarterTopic("grade-11-chemical-equilibrium", "Lớp 11 · Cân bằng và dung dịch", "Cân bằng động, pH và phản ứng axit–bazơ", ["⇌", "pH", "11"], [
      ["Ở trạng thái cân bằng hóa học, tốc độ phản ứng thuận và nghịch có quan hệ gì?", "Bằng nhau", ["Phản ứng thuận luôn nhanh hơn", "Phản ứng nghịch luôn nhanh hơn", "Cả hai bắt buộc bằng không"], "Cân bằng hóa học là cân bằng động: hai phản ứng vẫn diễn ra với tốc độ bằng nhau."],
      ["Với phản ứng thuận tỏa nhiệt, tăng nhiệt độ làm cân bằng chuyển dịch theo chiều nào?", "Chiều nghịch", ["Chiều thuận", "Không thể chuyển dịch", "Luôn tạo thêm mọi sản phẩm"], "Tăng nhiệt độ ưu tiên chiều thu nhiệt, tức chiều nghịch trong trường hợp này."],
      ["Ở 25°C, dung dịch có pH = 3 được phân loại thế nào?", "Có tính axit", ["Trung tính", "Có tính bazơ", "Không chứa ion nào"], "Ở 25°C, dung dịch có pH nhỏ hơn 7 có tính axit."],
      ["Theo thuyết Brønsted–Lowry, bazơ là chất có khả năng làm gì?", "Nhận proton", ["Chỉ nhường electron", "Luôn giải phóng khí ôxi", "Chỉ cho neutron"], "Theo thuyết này, axit cho proton còn bazơ nhận proton."],
      ["Sản phẩm của phản ứng HCl + NaOH → ... là gì?", "NaCl và H₂O", ["Na và Cl₂", "H₂ và O₂", "Chỉ NaCl"], "Đây là phản ứng trung hòa giữa axit và bazơ: HCl + NaOH → NaCl + H₂O."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-11-literature", "Lớp 11 · Nghệ thuật kể chuyện", "Điểm nhìn, tình huống truyện và lập luận văn học", ["📖", "✎", "11"], [
      ["Điểm nhìn trần thuật giúp xác định điều gì?", "Vị trí và góc độ quan sát, kể lại câu chuyện", ["Chỉ kích thước trang sách", "Chỉ số lượng chương", "Chỉ tên nhà xuất bản"], "Điểm nhìn chi phối thông tin người đọc biết và cách sự kiện, nhân vật được cảm nhận."],
      ["Người kể chuyện và tác giả có quan hệ thế nào?", "Không nên mặc nhiên đồng nhất hai vai trò", ["Luôn là cùng một người trong mọi tác phẩm", "Không bao giờ liên quan đến nhau", "Người kể luôn là nhân vật chính"], "Người kể là một vai trò trong văn bản do tác giả xây dựng; không thể tự động coi lời kể là lời tác giả."],
      ["Một tình huống truyện có thể góp phần làm gì?", "Bộc lộ tính cách và lựa chọn của nhân vật", ["Chỉ tăng số trang", "Xóa mọi xung đột", "Thay thế toàn bộ lời kể"], "Tình huống đặt nhân vật vào hoàn cảnh cụ thể, giúp thể hiện tính cách, quan hệ và chủ đề."],
      ["Khi nhận xét giọng điệu một bài thơ, nên dựa vào đâu?", "Từ ngữ, nhịp điệu và cách biểu đạt cảm xúc", ["Chỉ màu bìa sách", "Chỉ giá bán", "Chỉ độ dài tên tác giả"], "Giọng điệu được thể hiện qua lựa chọn ngôn từ, nhịp và thái độ, cảm xúc trong văn bản."],
      ["Lập luận phân tích văn học thuyết phục cần gì?", "Nhận định rõ, dẫn chứng phù hợp và giải thích có cơ sở", ["Chỉ khẳng định mà không có dẫn chứng", "Chỉ kể lại cốt truyện", "Chỉ nêu sở thích không liên quan"], "Dẫn chứng phải được phân tích để cho thấy vì sao chúng hỗ trợ nhận định."],
    ]),
  ],
  english: [
    createStarterTopic("grade-11-english", "Lớp 11 · English development", "Thì hoàn thành, danh động từ và cấu trúc nhấn mạnh", ["ABC", "💬", "11"], [
      ["Điền từ: She ___ for two hours and is still working.", "has been studying", ["study", "have been studying", "was study"], "Hiện tại hoàn thành tiếp diễn nhấn mạnh quá trình bắt đầu trong quá khứ và vẫn tiếp tục; she đi với has."],
      ["Điền từ: They suggested ___ a break.", "taking", ["take", "to taking", "takes"], "Sau suggest có thể dùng danh động từ: suggested taking a break."],
      ["Điền từ: It was Lan ___ helped me yesterday.", "who", ["where", "when", "whose"], "Cấu trúc nhấn mạnh It was ... who ... dùng who để nhấn mạnh người thực hiện hành động."],
      ["Điền từ: By the time we arrived, the film ___ already ___.", "had / started", ["has / start", "was / start", "have / started"], "Quá khứ hoàn thành diễn tả hành động xảy ra trước một thời điểm hoặc hành động khác trong quá khứ."],
      ["Điền từ: This is the first student ___ the task.", "to finish", ["finish", "finishes", "to finishing"], "Sau the first + danh từ, có thể dùng to-infinitive để bổ nghĩa: the first student to finish."],
    ]),
  ],
  history: [
    createStarterTopic("grade-11-history", "Lớp 11 · Cải cách và độc lập", "Cải cách ở Việt Nam và phong trào độc lập Đông Nam Á", ["📜", "🕊", "11"], [
      ["Cuộc cải cách đầu thế kỉ XV gắn với nhân vật nào?", "Hồ Quý Ly", ["Lê Lợi", "Ngô Quyền", "Nguyễn Huệ"], "Hồ Quý Ly tiến hành những cải cách về chính trị, kinh tế, văn hóa và quân sự cuối thế kỉ XIV, đầu thế kỉ XV."],
      ["Vị vua nào gắn với cải cách hành chính quan trọng của Đại Việt trong thế kỉ XV?", "Lê Thánh Tông", ["Gia Long", "Minh Mạng", "Lý Nam Đế"], "Lê Thánh Tông thực hiện cải cách nhằm củng cố bộ máy nhà nước và tổ chức quản lí lãnh thổ."],
      ["Cải cách hành chính chia cả nước thành các tỉnh dưới triều Nguyễn gắn nổi bật với vua nào?", "Minh Mạng", ["Quang Trung", "Trần Nhân Tông", "Lê Đại Hành"], "Minh Mạng tổ chức lại hệ thống hành chính địa phương trong các năm 1831–1832."],
      ["Quốc gia Đông Nam Á nào tuyên bố độc lập ngày 17/8/1945?", "Indonesia", ["Việt Nam", "Lào", "Philippines"], "Indonesia tuyên bố độc lập ngày 17/8/1945, trong làn sóng đấu tranh giải phóng dân tộc sau chiến tranh."],
      ["Khi đánh giá một cuộc cải cách lịch sử, cần xem xét điều gì?", "Bối cảnh, mục tiêu, nội dung, kết quả và hạn chế", ["Chỉ tên người thực hiện", "Chỉ một khẩu hiệu", "Chỉ kết quả được kể từ một nguồn"], "Đánh giá nhiều mặt và đối chiếu tư liệu giúp tránh nhận xét một chiều hoặc tách khỏi hoàn cảnh lịch sử."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-11-world-economy", "Lớp 11 · Kinh tế thế giới", "Toàn cầu hóa, liên kết khu vực và chỉ số phát triển", ["🌍", "📊", "11"], [
      ["Biểu hiện nào gắn với toàn cầu hóa kinh tế?", "Gia tăng trao đổi hàng hóa, đầu tư và liên kết sản xuất quốc tế", ["Mọi quốc gia ngừng thương mại", "Chỉ sản xuất để tự dùng", "Không còn dòng vốn quốc tế"], "Toàn cầu hóa kinh tế thể hiện qua sự gắn kết ngày càng mạnh của các nền kinh tế."],
      ["ASEAN là tổ chức liên kết của khu vực nào?", "Đông Nam Á", ["Bắc Âu", "Nam Mỹ", "Bắc Phi"], "ASEAN là Hiệp hội các quốc gia Đông Nam Á, thúc đẩy hợp tác giữa các thành viên."],
      ["GDP bình quân đầu người được tính cơ bản bằng cách nào?", "GDP chia cho số dân", ["Số dân chia cho GDP", "GDP nhân với số dân", "Chỉ lấy kim ngạch xuất khẩu"], "Chỉ số được tính bằng GDP chia dân số trong cùng kì; không phản ánh đầy đủ phân phối thu nhập."],
      ["Chỉ số HDI kết hợp các phương diện chủ yếu nào?", "Sức khỏe, giáo dục và mức sống", ["Chỉ sản lượng thép", "Chỉ diện tích lãnh thổ", "Chỉ tổng số sân bay"], "HDI tổng hợp các chỉ tiêu đại diện cho tuổi thọ, giáo dục và thu nhập, phản ánh phát triển con người."],
      ["Một thách thức của hội nhập kinh tế đối với doanh nghiệp là gì?", "Cạnh tranh mạnh hơn và yêu cầu nâng cao năng lực", ["Không cần đổi mới công nghệ", "Luôn được bảo đảm lợi nhuận", "Không cần tuân thủ tiêu chuẩn"], "Hội nhập mở cơ hội thị trường nhưng cũng tăng cạnh tranh, đòi hỏi nâng chất lượng và năng suất."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-11-databases", "Lớp 11 · Cơ sở dữ liệu", "Bảng, khóa, truy vấn và bảo vệ dữ liệu", ["SQL", "🔑", "11"], [
      ["Trong bảng dữ liệu quan hệ, một hàng thường biểu diễn điều gì?", "Một bản ghi", ["Toàn bộ cơ sở dữ liệu", "Một hệ quản trị", "Chỉ tên bảng"], "Một hàng chứa các giá trị thuộc tính của một bản ghi; cột biểu diễn thuộc tính."],
      ["Khóa chính có vai trò gì?", "Phân biệt duy nhất từng bản ghi trong bảng", ["Cho phép mọi hàng cùng một mã", "Chỉ đổi màu bảng", "Lưu mọi mật khẩu dưới dạng văn bản"], "Giá trị khóa chính phải duy nhất và không rỗng để nhận diện bản ghi."],
      ["Khóa ngoại giúp thực hiện điều gì?", "Liên kết dữ liệu giữa các bảng", ["Xóa mọi quan hệ giữa bảng", "Chỉ sắp xếp màu chữ", "Thay thế toàn bộ bản ghi"], "Khóa ngoại tham chiếu khóa của bảng liên quan, hỗ trợ liên kết và toàn vẹn dữ liệu."],
      ["Trong SQL, lệnh nào dùng để truy vấn dữ liệu?", "SELECT", ["DELETE", "DROP", "INSERT"], "SELECT đọc dữ liệu; DELETE xóa hàng, DROP xóa đối tượng và INSERT thêm hàng."],
      ["Biện pháp nào giúp bảo vệ dữ liệu và khôi phục khi xảy ra sự cố?", "Phân quyền phù hợp và sao lưu định kì", ["Cho mọi người quyền quản trị", "Không bao giờ sao lưu", "Công khai thông tin cá nhân"], "Phân quyền hạn chế truy cập ngoài ý muốn; bản sao lưu được bảo vệ và kiểm tra hỗ trợ khôi phục."],
    ]),
  ],
};

for (const [subjectId, topics] of Object.entries(gradeTenTopics)) {
  for (const topic of topics) topic.level = "LỚP 10";
  curriculumExtensions[subjectId].push(...topics);
}

const gradeTwelveTopics = {
  math: [
    createStarterTopic("grade-12-function-analysis", "Lớp 12 · Khảo sát hàm số", "Đơn điệu, cực trị và tiệm cận", ["f′", "↗", "12"], [
      ["Nếu f′(x) > 0 với mọi x trên một khoảng thì hàm số có tính chất gì trên khoảng đó?", "Đồng biến", ["Nghịch biến", "Luôn là hàm hằng", "Không xác định"], "Đạo hàm dương trên khoảng cho biết hàm số đồng biến trên khoảng đó."],
      ["Hàm số y = x² − 4x + 5 đạt giá trị nhỏ nhất tại x bằng bao nhiêu?", "2", ["−2", "4", "0"], "Viết y = (x − 2)² + 1; giá trị nhỏ nhất đạt được khi x = 2."],
      ["Đồ thị y = 1/(x − 3) có tiệm cận đứng nào?", "x = 3", ["y = 3", "x = 0", "y = 0"], "Khi x tiến đến 3 từ hai phía, giá trị hàm tăng hoặc giảm không bị chặn, nên x = 3 là tiệm cận đứng."],
      ["Đồ thị y = (2x + 1)/(x + 1) có tiệm cận ngang nào?", "y = 2", ["x = −1", "y = 1", "y = 0"], "Khi x tiến ra vô cực, tỉ số hai đa thức cùng bậc tiến đến tỉ số hệ số bậc cao nhất là 2."],
      ["Khi đi qua x₀, đạo hàm đổi dấu từ dương sang âm. Hàm số liên tục tại x₀ có dạng cực trị nào?", "Cực đại tại x₀", ["Cực tiểu tại x₀", "Không thể có cực trị", "Luôn có tiệm cận đứng"], "Hàm số tăng trước x₀ rồi giảm sau x₀, nên đạt cực đại tại điểm đó."],
    ]),
    createStarterTopic("grade-12-integrals", "Lớp 12 · Nguyên hàm và tích phân", "Nguyên hàm cơ bản và diện tích hình phẳng", ["∫", "x²", "12"], [
      ["Một nguyên hàm của f(x) = 2x là hàm nào?", "F(x) = x²", ["F(x) = 2", "F(x) = x", "F(x) = 2x²"], "Đạo hàm của x² bằng 2x. Mọi nguyên hàm có dạng x² + C."],
      ["Tích phân của hàm f(x) = 2 trên đoạn [0; 3] bằng bao nhiêu?", "6", ["2", "3", "0"], "Tích phân hàm hằng bằng giá trị hằng nhân độ dài đoạn: 2 × (3 − 0) = 6."],
      ["Tích phân của f(x) = x trên đoạn [0; 2] bằng bao nhiêu?", "2", ["4", "1", "0"], "Nguyên hàm là x²/2; lấy giá trị tại 2 trừ giá trị tại 0 được 2."],
      ["Một nguyên hàm của f(x) = cos x là hàm nào?", "F(x) = sin x", ["F(x) = −sin x", "F(x) = cos x", "F(x) = −cos x"], "Đạo hàm của sin x là cos x, nên sin x là một nguyên hàm."],
      ["Diện tích dưới đồ thị y = x, phía trên trục hoành, từ x = 0 đến x = 3 là bao nhiêu?", "4,5 đơn vị diện tích", ["9 đơn vị diện tích", "3 đơn vị diện tích", "6 đơn vị diện tích"], "Miền là tam giác vuông có đáy và chiều cao đều bằng 3; diện tích là 3 × 3/2 = 4,5."],
    ]),
    createStarterTopic("grade-12-space-coordinates", "Lớp 12 · Tọa độ không gian", "Điểm, vectơ, mặt phẳng và mặt cầu trong Oxyz", ["Oxyz", "→", "12"], [
      ["Cho A(1; 2; 3), B(3; 5; 7). Vectơ AB có tọa độ nào?", "(2; 3; 4)", ["(4; 7; 10)", "(−2; −3; −4)", "(3; 2; 4)"], "Lấy từng tọa độ của B trừ tọa độ tương ứng của A: (3 − 1; 5 − 2; 7 − 3)."],
      ["Khoảng cách từ O(0; 0; 0) đến A(1; 2; 2) bằng bao nhiêu?", "3", ["5", "9", "√5"], "Khoảng cách bằng căn bậc hai của 1² + 2² + 2² = 9, tức 3."],
      ["Mặt phẳng 2x − y + 3z − 4 = 0 nhận vectơ nào làm vectơ pháp tuyến?", "(2; −1; 3)", ["(2; 1; 3)", "(−4; 2; −1)", "(0; 0; 0)"], "Vectơ có tọa độ là các hệ số của x, y, z là một vectơ pháp tuyến của mặt phẳng."],
      ["Mặt cầu (x − 1)² + (y + 2)² + z² = 9 có tâm nào?", "(1; −2; 0)", ["(−1; 2; 0)", "(1; 2; 3)", "(0; 0; 9)"], "So với dạng (x − a)² + (y − b)² + (z − c)² = R², tâm là (a; b; c) = (1; −2; 0)."],
      ["Mặt cầu x² + y² + z² = 16 có bán kính bao nhiêu?", "4", ["16", "8", "2"], "Bình phương bán kính bằng 16 nên bán kính là số dương 4."],
    ]),
  ],
  science: [
    createStarterTopic("grade-12-thermal-physics", "Lớp 12 · Nhiệt học và khí", "Nhiệt lượng, nhiệt độ và khí lí tưởng", ["🌡", "Q", "12"], [
      ["Theo công thức chuyển đổi trong hệ SI, 0°C tương ứng với nhiệt độ nào?", "273,15 K", ["0 K", "100 K", "−273,15 K"], "Nhiệt độ kelvin bằng nhiệt độ Celsius cộng 273,15."],
      ["Làm nóng 1 kg nước thêm 10°C, với nhiệt dung riêng 4.200 J/(kg·K), bỏ qua thất thoát. Nhiệt lượng là bao nhiêu?", "42.000 J", ["4.200 J", "420 J", "420.000 J"], "Q = mcΔT = 1 × 4.200 × 10 = 42.000 J; độ tăng 10°C tương ứng 10 K."],
      ["Một lượng khí lí tưởng có nhiệt độ không đổi. Thể tích giảm còn một nửa thì áp suất thay đổi thế nào?", "Tăng gấp đôi", ["Giảm một nửa", "Không đổi", "Tăng gấp bốn"], "Với lượng khí và nhiệt độ không đổi, pV không đổi; thể tích giảm một nửa thì áp suất tăng gấp đôi."],
      ["Trong phương trình pV = nRT, n biểu thị đại lượng nào?", "Số mol khí", ["Khối lượng riêng", "Nhiệt độ Celsius", "Tốc độ phân tử"], "n là lượng chất tính bằng mol; T phải tính bằng kelvin."],
      ["Khi nước tinh khiết đang sôi ở áp suất không đổi, nhiệt lượng cấp thêm chủ yếu dùng để làm gì?", "Chuyển nước lỏng thành hơi", ["Luôn tăng nhiệt độ liên tục", "Làm nước đông đặc", "Biến nước thành kim loại"], "Trong quá trình sôi ở áp suất không đổi, nhiệt độ giữ gần như không đổi; nhiệt lượng dùng cho chuyển thể."],
    ]),
    createStarterTopic("grade-12-organic-chemistry", "Lớp 12 · Hóa học hữu cơ", "Ester, carbohydrate, amino acid và polymer", ["⚗", "C", "12"], [
      ["Phản ứng giữa axit cacboxylic và ancol, trong điều kiện thích hợp, thường tạo sản phẩm nào?", "Ester và nước", ["Chỉ kim loại", "Chỉ ôxi", "Muối ăn và hiđrô"], "Phản ứng ester hóa giữa axit cacboxylic và ancol tạo ester và nước, thường có xúc tác axit."],
      ["Glucose thuộc nhóm chất nào?", "Monosaccharide", ["Protein", "Chất béo", "Polymer tổng hợp"], "Glucose là monosaccharide, không bị thủy phân thành carbohydrate đơn giản hơn."],
      ["Thủy phân hoàn toàn tinh bột trong điều kiện phù hợp thu được chất nào?", "Glucose", ["Ethanol trực tiếp", "Amino acid", "Glycerol"], "Tinh bột được tạo từ các đơn vị glucose; thủy phân hoàn toàn cho glucose."],
      ["Amino acid thường chứa đồng thời các nhóm chức nào?", "Nhóm amino và nhóm carboxyl", ["Chỉ nhóm ester", "Chỉ nhóm aldehyde", "Chỉ liên kết đôi C=C"], "Amino acid có nhóm amino và nhóm carboxyl; cấu trúc này góp phần tạo tính chất axit–bazơ."],
      ["Polyethylene được tạo ra bằng phản ứng trùng hợp monomer nào?", "Ethylene (CH₂=CH₂)", ["Methane (CH₄)", "Ethanol (C₂H₅OH)", "Axit axetic (CH₃COOH)"], "Các phân tử ethylene tham gia trùng hợp tạo chuỗi có mắt xích –CH₂–CH₂–."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-12-literature", "Lớp 12 · Phân tích và so sánh", "So sánh tác phẩm, biểu tượng và lập luận", ["📖", "✎", "12"], [
      ["Khi so sánh hai tác phẩm, nên bắt đầu bằng việc nào?", "Xác định tiêu chí và vấn đề cần so sánh", ["Chỉ đếm số trang", "Khẳng định tác phẩm nào hay hơn mà không phân tích", "Bỏ qua nội dung"], "Tiêu chí rõ ràng giúp so sánh có hệ thống về chủ đề, nhân vật, hình ảnh hoặc cách thể hiện."],
      ["Một biểu tượng nghệ thuật thường có đặc điểm nào?", "Gợi ý nghĩa vượt ra ngoài hình ảnh cụ thể", ["Chỉ có một nghĩa từ điển trong mọi tác phẩm", "Không phụ thuộc ngữ cảnh", "Chỉ là lỗi in"], "Biểu tượng gợi nhiều lớp ý nghĩa; cần giải thích dựa trên ngữ cảnh và chi tiết của tác phẩm."],
      ["Khi bàn về một ý kiến trái chiều trong bài nghị luận, cách nào phù hợp?", "Trình bày công bằng và phản hồi bằng lí lẽ, bằng chứng", ["Công kích người đưa ý kiến", "Cố tình xuyên tạc ý kiến", "Bỏ mọi bằng chứng"], "Phản biện tập trung vào nội dung lập luận, không tấn công cá nhân hay làm sai lệch quan điểm."],
      ["Phân tích bối cảnh sáng tác có thể giúp ích gì?", "Hiểu thêm điều kiện lịch sử, văn hóa liên quan đến tác phẩm", ["Thay thế hoàn toàn việc đọc văn bản", "Bảo đảm mọi cách hiểu đều giống nhau", "Chỉ xác định giá sách"], "Bối cảnh hỗ trợ diễn giải nhưng không thay thế bằng chứng và phân tích ngay trong văn bản."],
      ["Kết luận của bài phân tích văn học nên làm gì?", "Khái quát nhận định và ý nghĩa rút ra từ phần phân tích", ["Đưa hàng loạt luận điểm mới chưa giải thích", "Chép lại toàn bộ tác phẩm", "Chỉ liệt kê số đoạn"], "Kết luận tổng hợp kết quả phân tích, tránh mở thêm vấn đề lớn chưa được triển khai."],
    ]),
  ],
  english: [
    createStarterTopic("grade-12-english", "Lớp 12 · English advanced practice", "Điều kiện quá khứ, động từ khuyết thiếu và liên kết câu", ["ABC", "💬", "12"], [
      ["Điền từ: If I had known, I ___ you.", "would have helped", ["will help", "would help yesterday", "have helping"], "Điều kiện loại ba dùng if + quá khứ hoàn thành và would have + quá khứ phân từ."],
      ["Điền từ: You ___ have told me earlier. Now it is too late.", "should", ["must to", "can to", "ought"], "Should have + quá khứ phân từ diễn tả điều đáng lẽ nên làm trong quá khứ."],
      ["Điền từ: ___ the heavy rain, they continued working.", "Despite", ["Although", "Because", "However"], "Despite đi với cụm danh từ, ở đây là the heavy rain; although thường mở đầu một mệnh đề."],
      ["Điền từ: The more you practise, ___ you become.", "the more confident", ["more confident", "the most confident", "most confidently"], "Cấu trúc so sánh kép the more ..., the more ... diễn tả hai mức độ thay đổi cùng nhau."],
      ["Điền từ: She asked me where I ___.", "lived", ["do live", "did I live", "am live"], "Câu hỏi gián tiếp dùng trật tự chủ ngữ trước động từ; trong ngữ cảnh tường thuật này, live lùi thành lived."],
    ]),
  ],
  history: [
    createStarterTopic("grade-12-postwar-history", "Lớp 12 · Thế giới và Việt Nam sau 1945", "Chiến tranh lạnh, đổi mới và hội nhập", ["📜", "🌍", "12"], [
      ["Chiến tranh lạnh chủ yếu gắn với đối đầu giữa hai nước nào?", "Hoa Kỳ và Liên Xô", ["Việt Nam và Lào", "Anh và Ai Cập", "Nhật Bản và Brazil"], "Hoa Kỳ và Liên Xô là hai trung tâm đối đầu chủ yếu, gắn với các liên minh và cạnh tranh trên nhiều lĩnh vực."],
      ["Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập năm nào?", "1967", ["1945", "1954", "1995"], "ASEAN thành lập năm 1967 tại Bangkok với năm thành viên ban đầu."],
      ["Đại hội nào của Đảng Cộng sản Việt Nam mở đầu đường lối Đổi mới năm 1986?", "Đại hội VI", ["Đại hội III", "Đại hội IV", "Đại hội VII"], "Đại hội VI năm 1986 đề ra đường lối Đổi mới, trước hết là đổi mới tư duy kinh tế."],
      ["Việt Nam gia nhập ASEAN vào năm nào?", "1995", ["1967", "1975", "2007"], "Việt Nam trở thành thành viên ASEAN ngày 28/7/1995."],
      ["Ngày 30/4/1975 gắn với sự kiện nào?", "Giải phóng Sài Gòn, kết thúc cuộc kháng chiến chống Mỹ, cứu nước", ["Thành lập ASEAN", "Bắt đầu Đổi mới", "Việt Nam gia nhập WTO"], "Chiến dịch Hồ Chí Minh kết thúc thắng lợi ngày 30/4/1975, mở đường hoàn thành thống nhất đất nước về mặt nhà nước."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-12-vietnam-development", "Lớp 12 · Phát triển kinh tế Việt Nam", "Cơ cấu kinh tế, vùng sản xuất và phát triển bền vững", ["🇻🇳", "📊", "12"], [
      ["Hoạt động nào thuộc công nghiệp chế biến, chế tạo?", "Chế biến thủy sản", ["Đánh bắt cá", "Trồng cà phê", "Vận tải hành khách"], "Chế biến thủy sản biến nguyên liệu thành sản phẩm; đánh bắt và trồng trọt thuộc khu vực nông, lâm, thủy sản."],
      ["Điều kiện nào thuận lợi cho phát triển thủy điện?", "Sông có lưu lượng và độ chênh cao phù hợp", ["Địa hình hoàn toàn bằng phẳng và không có sông", "Chỉ có đất màu mỡ", "Chỉ có bãi biển rộng"], "Thủy điện khai thác năng lượng dòng nước; lưu lượng và độ chênh cao là các điều kiện quan trọng."],
      ["Đồng bằng sông Cửu Long cần đặc biệt thích ứng với nguy cơ nào?", "Xâm nhập mặn và biến đổi chế độ nước", ["Băng vĩnh cửu mở rộng", "Tuyết lở quanh năm", "Núi lửa phun khắp vùng"], "Vùng thấp ven biển chịu ảnh hưởng của nước biển, dòng chảy thượng nguồn và biến đổi khí hậu, cần quản lí nước và sản xuất thích ứng."],
      ["Yếu tố nào góp phần nâng cao giá trị xuất khẩu nông sản?", "Chất lượng, chế biến và khả năng truy xuất nguồn gốc", ["Chỉ tăng lượng mà bỏ tiêu chuẩn", "Giảm mọi kiểm tra chất lượng", "Không quan tâm thị trường"], "Chế biến, chất lượng và truy xuất nguồn gốc giúp đáp ứng yêu cầu thị trường và tăng giá trị sản phẩm."],
      ["Phát triển bền vững đòi hỏi kết hợp các mặt nào?", "Kinh tế, xã hội và môi trường", ["Chỉ tăng sản lượng", "Chỉ lợi nhuận ngắn hạn", "Chỉ diện tích đô thị"], "Phát triển bền vững cân bằng tăng trưởng, tiến bộ xã hội và bảo vệ môi trường cho hiện tại và tương lai."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-12-web-and-ai", "Lớp 12 · Web và trí tuệ nhân tạo", "HTML, CSS, AI và sử dụng công nghệ có trách nhiệm", ["HTML", "AI", "12"], [
      ["HTML chủ yếu dùng để làm gì trên trang web?", "Mô tả cấu trúc và nội dung", ["Chỉ lưu mật khẩu an toàn", "Thay thế mọi cơ sở dữ liệu", "Chỉ truyền điện"], "HTML đánh dấu các thành phần như tiêu đề, đoạn văn, liên kết và biểu mẫu."],
      ["CSS chủ yếu điều khiển điều gì?", "Cách trình bày và bố cục trang web", ["Số proton của nguyên tử", "Toàn bộ dữ liệu tài khoản trên máy chủ", "Mọi kết nối phần cứng"], "CSS quy định kiểu hiển thị như màu sắc, cỡ chữ, khoảng cách và bố cục."],
      ["Thuộc tính alt của ảnh có vai trò gì?", "Cung cấp văn bản thay thế phù hợp cho nội dung ảnh", ["Luôn tự tăng độ phân giải ảnh", "Mã hóa toàn bộ trang", "Thay thế tên miền"], "Văn bản thay thế giúp người dùng trình đọc màn hình hiểu ảnh có ý nghĩa; ảnh trang trí có thể dùng alt rỗng."],
      ["Nhận định nào đúng về nội dung do AI tạo ra?", "Có thể sai và cần kiểm chứng trước khi sử dụng", ["Luôn đúng tuyệt đối", "Luôn có quyền sử dụng mọi dữ liệu", "Không cần người chịu trách nhiệm"], "AI có thể tạo thông tin sai hoặc thiếu căn cứ; cần kiểm tra nguồn, độ chính xác và tính phù hợp."],
      ["Khi dùng dữ liệu cá nhân để phát triển hệ thống AI, cần chú ý điều gì?", "Quyền riêng tư, sự đồng ý và quy định bảo vệ dữ liệu", ["Thu thập mọi dữ liệu bí mật tùy ý", "Công khai dữ liệu nhạy cảm", "Bỏ qua mục đích sử dụng"], "Dữ liệu cá nhân cần được xử lí đúng mục đích, có cơ sở phù hợp và biện pháp bảo vệ."],
    ]),
  ],
};

for (const [subjectId, topics] of Object.entries(gradeElevenTopics)) {
  for (const topic of topics) topic.level = "LỚP 11";
  curriculumExtensions[subjectId].push(...topics);
}

for (const [subjectId, topics] of Object.entries(gradeTwelveTopics)) {
  for (const topic of topics) topic.level = "LỚP 12";
  curriculumExtensions[subjectId].push(...topics);
}

// --- Extra practice topics for grades 6-9 (168 topics, 840 questions) ---
const gradeSixExtraPractice = {
  math: [
    createStarterTopic("grade-6-gcd-lcm", "Lớp 6 · Ước chung lớn nhất và bội chung nhỏ nhất", "Tìm ƯCLN và BCNN qua phân tích thừa số nguyên tố", ["6", "÷", "×"], [
      ["Ước chung lớn nhất của 12 và 18 là bao nhiêu?", "6", ["3", "12", "36"], "12 = 2² × 3 và 18 = 2 × 3²; chọn thừa số chung với số mũ nhỏ nhất: 2 × 3 = 6."],
      ["Bội chung nhỏ nhất của 12 và 18 là bao nhiêu?", "36", ["18", "24", "72"], "Chọn thừa số chung và riêng với số mũ lớn nhất: 2² × 3² = 36."],
      ["Phân tích 18 ra thừa số nguyên tố được kết quả nào?", "2 × 3²", ["3 × 6", "2² × 3", "2 × 9"], "18 = 2 × 9 = 2 × 3²."],
      ["Số nào là bội chung của 4 và 6?", "12", ["8", "18", "20"], "Bội của 4: 4, 8, 12, ...; bội của 6: 6, 12, 18, ...; 12 là bội chung nhỏ nhất."],
      ["Ước chung lớn nhất của 8 và 12 là bao nhiêu?", "4", ["2", "6", "8"], "Ước của 8: 1, 2, 4, 8; ước của 12: 1, 2, 3, 4, 6, 12; ước chung lớn nhất là 4."],
    ]),
    createStarterTopic("grade-6-angles", "Lớp 6 · Góc: nhận biết, đo và phân loại", "Đỉnh, cạnh, đơn vị độ và các loại góc", ["6", "∠", "°"], [
      ["Góc vuông có số đo bằng bao nhiêu?", "90°", ["60°", "120°", "180°"], "Góc vuông bằng 90°."],
      ["Góc nào sau đây là góc nhọn?", "45°", ["90°", "100°", "180°"], "Góc nhọn nhỏ hơn 90°."],
      ["Góc bẹt có số đo bằng bao nhiêu?", "180°", ["90°", "270°", "360°"], "Góc bẹt bằng 180°."],
      ["Hai tia chung gốc tạo thành hình gì?", "Một góc", ["Một đoạn thẳng", "Một đường tròn", "Một tam giác"], "Góc gồm hai tia chung gốc; gốc chung gọi là đỉnh, hai tia gọi là cạnh của góc."],
      ["Góc 120° thuộc loại góc nào?", "Góc tù", ["Góc nhọn", "Góc vuông", "Góc bẹt"], "Góc tù lớn hơn 90° nhưng nhỏ hơn 180°."],
    ]),
    createStarterTopic("grade-6-3d-volume", "Lớp 6 · Hình hộp chữ nhật và thể tích", "Đỉnh, cạnh, mặt và công thức tính thể tích", ["6", "▭", "㎤"], [
      ["Thể tích hình hộp chữ nhật dài 3 cm, rộng 2 cm, cao 4 cm là bao nhiêu?", "24 cm³", ["12 cm³", "18 cm³", "9 cm³"], "V = dài × rộng × cao = 3 × 2 × 4 = 24 cm³."],
      ["Hình hộp chữ nhật có bao nhiêu mặt?", "6 mặt", ["4 mặt", "8 mặt", "12 mặt"], "Hình hộp chữ nhật có 6 mặt, đều là hình chữ nhật."],
      ["Hình lập phương cạnh 5 cm có thể tích bằng bao nhiêu?", "125 cm³", ["25 cm³", "75 cm³", "15 cm³"], "V = 5 × 5 × 5 = 125 cm³."],
      ["Hình hộp chữ nhật có bao nhiêu đỉnh?", "8 đỉnh", ["6 đỉnh", "12 đỉnh", "4 đỉnh"], "Hình hộp chữ nhật có 8 đỉnh và 12 cạnh."],
      ["Đơn vị nào dùng để đo thể tích?", "cm³", ["cm²", "cm", "kg"], "Thể tích đo bằng đơn vị thể tích như cm³, m³; cm² dùng đo diện tích."],
    ]),
  ],
  science: [
    createStarterTopic("grade-6-matter-changes", "Lớp 6 · Sự biến đổi của chất", "Phân biệt biến đổi vật lí và biến đổi hóa học", ["6", "⚗", "🔥"], [
      ["Hiện tượng nào sau đây là biến đổi hóa học?", "Sắt bị gỉ", ["Nước đá tan", "Giấy bị cắt nhỏ", "Đường tan trong nước"], "Sắt bị gỉ tạo ra chất mới; các hiện tượng còn lại không tạo chất mới."],
      ["Dấu hiệu nào cho thấy đã xảy ra biến đổi hóa học?", "Sủi bọt khí", ["Chất bị chia nhỏ", "Nước chuyển thành đá", "Muối tan trong nước"], "Sủi bọt khí, đổi màu, tỏa nhiệt là dấu hiệu của việc tạo ra chất mới."],
      ["Nước đá tan thành nước là biến đổi gì?", "Biến đổi vật lí", ["Biến đổi hóa học", "Phản ứng cháy", "Sự lên men"], "Nước đá tan chỉ đổi trạng thái từ rắn sang lỏng, không tạo chất mới."],
      ["Khi đốt nến, phần nào là biến đổi hóa học?", "Sáp cháy thành khí", ["Sáp chảy thành lỏng", "Bấc nến ngắn lại", "Nến đổi hình dạng"], "Sáp chảy là biến đổi vật lí; sáp cháy tạo thành khí mới là biến đổi hóa học."],
      ["Nấu chín thức ăn thuộc loại biến đổi nào?", "Biến đổi hóa học", ["Biến đổi vật lí", "Sự nóng chảy", "Sự bay hơi"], "Nấu chín tạo ra chất mới với tính chất khác ban đầu."],
    ]),
    createStarterTopic("grade-6-air-combustion", "Lớp 6 · Không khí và sự cháy", "Thành phần không khí, oxygen và điều kiện cháy", ["6", "💨", "🔥"], [
      ["Khí nào chiếm tỉ lệ lớn nhất trong không khí?", "Nitrogen (khoảng 78%)", ["Oxygen (khoảng 21%)", "Khí carbonic", "Hydrogen"], "Không khí gồm khoảng 78% nitrogen, 21% oxygen và một phần nhỏ khí khác."],
      ["Khí nào duy trì sự cháy?", "Oxygen", ["Nitrogen", "Khí carbonic", "Hơi nước"], "Oxygen duy trì sự cháy; vật cháy trong oxygen tinh khiết cháy mạnh hơn trong không khí."],
      ["Vì sao úp cốc lên nến đang cháy thì nến tắt dần?", "Hết oxygen trong cốc", ["Cốc làm nến lạnh đi", "Nến hết bấc", "Cốc hút hết nhiệt"], "Cháy cần oxygen; úp cốc ngăn không khí vào, hết oxygen thì nến tắt."],
      ["Muốn dập tắt đám cháy nhỏ, có thể làm gì?", "Loại bỏ một trong ba yếu tố: chất cháy, oxygen, nhiệt độ", ["Quạt mạnh vào đám cháy", "Thêm chất cháy", "Tăng nhiệt độ"], "Sự cháy cần đủ ba yếu tố; làm mất một yếu tố thì đám cháy tắt."],
      ["Tỉ lệ oxygen trong không khí khoảng bao nhiêu?", "21%", ["78%", "1%", "50%"], "Không khí có khoảng 21% oxygen và 78% nitrogen."],
    ]),
    createStarterTopic("grade-6-thermal-expansion", "Lớp 6 · Sự nở vì nhiệt", "Chất nở ra khi nóng lên, co lại khi lạnh đi", ["6", "🌡", "📏"], [
      ["Khi bị đun nóng, hầu hết các chất sẽ thế nào?", "Nở ra", ["Co lại", "Không thay đổi", "Biến mất"], "Hầu hết các chất nở ra khi nóng lên và co lại khi lạnh đi."],
      ["Chất nào nở vì nhiệt nhiều nhất?", "Chất khí", ["Chất rắn", "Chất lỏng", "Tất cả như nhau"], "Chất khí nở nhiều nhất, rồi đến chất lỏng, ít nhất là chất rắn."],
      ["Vì sao đường ray xe lửa có khe hở?", "Để ray nở ra khi trời nóng", ["Để tiết kiệm thép", "Để tàu chạy êm", "Để thoát nước mưa"], "Thép nở ra khi nóng; khe hở giúp ray không bị cong vênh."],
      ["Vào mùa hè, dây điện ngoài trời thường thế nào?", "Chùng xuống", ["Căng thẳng", "Đứt ra", "Co ngắn lại"], "Dây điện nở dài ra khi nóng nên chùng xuống vào mùa hè."],
      ["Muốn mở nắp lọ thủy tinh bị kẹt, có thể làm gì?", "Hơ nóng nắp lọ", ["Làm lạnh nắp lọ", "Đổ thêm nước lạnh", "Lắc mạnh lọ"], "Hơ nóng làm nắp nở ra nên dễ mở hơn."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-6-syllable-poems", "Lớp 6 · Thơ bốn chữ và năm chữ", "Thể thơ, nhịp điệu và vần trong thơ", ["6", "📝", "♪"], [
      ["Thơ bốn chữ mỗi dòng có bao nhiêu tiếng?", "4 tiếng", ["5 tiếng", "6 tiếng", "8 tiếng"], "Thơ bốn chữ mỗi dòng bốn tiếng; thơ năm chữ mỗi dòng năm tiếng."],
      ["Nhịp thường gặp của thơ bốn chữ, năm chữ là gì?", "2/2", ["3/3", "2/3", "4/4"], "Hai thể thơ này thường có nhịp 2/2, vần chân ở cuối dòng."],
      ["Bài “Lượm” của Tố Hữu viết theo thể thơ nào?", "Thơ bốn chữ", ["Thơ năm chữ", "Thơ lục bát", "Thơ tự do"], "Bài “Lượm” viết theo thể bốn chữ với nhịp 2/2 rộn ràng."],
      ["Vần trong thơ bốn chữ, năm chữ thường nằm ở đâu?", "Cuối dòng thơ", ["Đầu dòng thơ", "Giữa dòng thơ", "Ngoài bài thơ"], "Vần chân ở cuối dòng giúp các dòng thơ liên kết với nhau."],
      ["Khi đọc thơ bốn chữ cần chú ý điều gì?", "Ngắt nhịp đúng", ["Đọc thật nhanh", "Bỏ qua vần", "Chỉ đọc thầm"], "Ngắt nhịp đúng giúp cảm nhận vẻ đẹp âm thanh của bài thơ."],
    ]),
    createStarterTopic("grade-6-narrative-paragraph", "Lớp 6 · Viết đoạn văn kể chuyện", "Kể sự việc theo thời gian, có mở đầu và kết thúc", ["6", "📖", "✎"], [
      ["Đoạn văn kể chuyện thường sắp xếp sự việc theo gì?", "Theo thời gian", ["Theo bảng chữ cái", "Ngẫu nhiên", "Theo độ dài"], "Kể chuỗi sự việc theo thời gian giúp người đọc dễ theo dõi."],
      ["Từ nào giúp nối các sự việc trong đoạn kể?", "“Sau đó”", ["“Tuy nhiên”", "“Vì vậy”", "“Mặc dù”"], "Từ nối thời gian như “sau đó”, “bỗng nhiên” làm mạch kể rõ ràng."],
      ["Đoạn văn kể chuyện cần có những phần nào?", "Mở đầu, diễn biến, kết thúc", ["Chỉ cần mở đầu", "Chỉ cần kết thúc", "Chỉ cần tên nhân vật"], "Đoạn kể cần mở đầu, diễn biến và kết thúc trọn vẹn."],
      ["Khi kể chuyện nên xen thêm yếu tố nào cho sinh động?", "Miêu tả và cảm xúc vừa phải", ["Thật nhiều số liệu", "Danh sách dài", "Quảng cáo"], "Xen miêu tả và cảm xúc vừa phải giúp đoạn văn sinh động, tránh khô khan."],
      ["Điều gì nên tránh khi viết đoạn văn kể chuyện?", "Kể lan man, thiếu sự việc chính", ["Dùng từ nối", "Có kết thúc", "Chọn sự việc chính"], "Cần chọn sự việc chính, kể ngắn gọn, có đầu có cuối."],
    ]),
    createStarterTopic("grade-6-idioms", "Lớp 6 · Thành ngữ Việt Nam", "Nghĩa khái quát và cách dùng thành ngữ", ["6", "💬", "📚"], [
      ["Thành ngữ “có công mài sắt, có ngày nên kim” khuyên điều gì?", "Kiên trì", ["Thông minh", "May mắn", "Giàu có"], "Thành ngữ khuyên kiên trì thì việc khó cũng thành công."],
      ["“Ếch ngồi đáy giếng” chê người như thế nào?", "Hiểu biết nông cạn mà tự cho mình giỏi", ["Hiền lành", "Chăm chỉ", "Khiêm tốn"], "Ví người hiểu biết hạn hẹp mà tự cao như ếch dưới đáy giếng."],
      ["Đặc điểm của thành ngữ là gì?", "Cụm từ cố định, nghĩa khái quát", ["Từ đơn lẻ", "Câu rất dài", "Luôn có vần"], "Thành ngữ là cụm từ cố định, nghĩa khái quát, giàu hình ảnh."],
      ["Khi dùng thành ngữ cần chú ý điều gì?", "Hiểu đúng nghĩa và hoàn cảnh", ["Dùng càng nhiều càng tốt", "Đổi từ tùy ý", "Chỉ dùng khi viết văn"], "Cần hiểu đúng nghĩa và dùng phù hợp ngữ cảnh, tránh gây hiểu lầm."],
      ["Thành ngữ làm cho câu văn thế nào?", "Sinh động, giàu hình ảnh", ["Khô khan", "Khó hiểu", "Dài dòng"], "Thành ngữ giàu hình ảnh, làm câu văn sinh động."],
    ]),
  ],
  english: [
    createStarterTopic("grade-6-there-is-are", "Lớp 6 · There is / There are", "Miêu tả sự vật ở một nơi", ["6", "ABC", "🏠"], [
      ["Điền từ: ___ a book on the table.", "There is", ["There are", "There am", "There be"], "“A book” là danh từ số ít nên dùng There is."],
      ["Điền từ: ___ three cats in the garden.", "There are", ["There is", "There has", "There was"], "“Three cats” là danh từ số nhiều nên dùng There are."],
      ["Câu hỏi nào viết đúng?", "Is there a park near here?", ["Is there parks near here?", "Are there a park near here?", "There is a park near here?"], "Câu hỏi với danh từ số ít: Is there + a/an + danh từ số ít?"],
      ["Phủ định của “There is a pen” là gì?", "There isn't a pen", ["There aren't a pen", "There not a pen", "There is no a pen"], "Phủ định của There is là There isn't (is not)."],
      ["Trả lời ngắn cho “Are there any apples?”", "Yes, there are.", ["Yes, there is.", "Yes, they are.", "Yes, it is."], "Hỏi Are there thì trả lời Yes, there are. / No, there aren't."],
    ]),
    createStarterTopic("grade-6-descriptive-adjectives", "Lớp 6 · Tính từ miêu tả", "Dùng tính từ tả người và vật", ["6", "ABC", "🎨"], [
      ["Câu nào dùng tính từ đúng?", "She is kind.", ["She is kindly.", "She kind.", "She are kind."], "Tính từ “kind” đứng sau động từ to be để miêu tả."],
      ["Điền từ: My house is ___.", "big", ["bigger than", "bigly", "the biggest house"], "Sau “is” cần tính từ đơn “big”."],
      ["Tính từ trong “a tall boy” đứng ở đâu?", "Trước danh từ", ["Sau danh từ", "Cuối câu", "Đầu câu"], "Tính từ thường đứng trước danh từ nó miêu tả: a tall boy."],
      ["Câu nào đúng ngữ pháp?", "They are happy.", ["They is happy.", "They are happily.", "They happy."], "Chủ ngữ số nhiều “they” đi với “are” + tính từ."],
      ["Tính từ có thêm -s khi danh từ số nhiều không?", "Không", ["Có", "Tùy trường hợp", "Chỉ với người"], "Tính từ không đổi hình thức: happy boys, tall girls."],
    ]),
    createStarterTopic("grade-6-asking-directions", "Lớp 6 · Hỏi và chỉ đường", "Mẫu câu hỏi đường và chỉ hướng đi", ["6", "ABC", "🧭"], [
      ["Câu nào dùng để hỏi đường lịch sự?", "Excuse me, where is the library?", ["Where library?", "You tell me library!", "Library where?"], "Bắt đầu bằng Excuse me và dùng cấu trúc Where is...?"],
      ["“Rẽ trái” trong tiếng Anh là gì?", "Turn left", ["Turn light", "Go left turn", "Left turning"], "Turn left = rẽ trái; Turn right = rẽ phải."],
      ["Điền từ: Go ___, then turn right.", "straight", ["left straight", "straightly", "to straight"], "Go straight nghĩa là đi thẳng."],
      ["Nên nói gì sau khi được chỉ đường?", "Thank you", ["Goodbye forever", "No problem", "See you never"], "Cảm ơn bằng Thank you sau khi được giúp đỡ."],
      ["“It's on your right” nghĩa là gì?", "Nó ở bên phải bạn", ["Nó ở bên trái bạn", "Nó ở phía trước", "Nó ở đằng sau"], "On your right = bên phải bạn; on your left = bên trái bạn."],
    ]),
  ],
  history: [
    createStarterTopic("grade-6-ancient-writing", "Lớp 6 · Chữ viết của người xưa", "Từ hình vẽ đến chữ tượng hình và chữ cái", ["6", "📜", "✒"], [
      ["Ban đầu con người ghi chép bằng gì?", "Hình vẽ trên vách đá, thẻ tre, đất sét", ["Máy tính", "Giấy in", "Điện thoại"], "Thuở ban đầu con người ghi chép bằng hình vẽ trên vách đá, thẻ tre, đất sét."],
      ["Chữ tượng hình dùng hình ảnh để làm gì?", "Biểu thị sự vật", ["Ghi âm thanh", "Trang trí", "Đếm số"], "Chữ tượng hình dùng hình ảnh biểu thị sự vật; chữ cái dùng kí hiệu ghi âm."],
      ["Người Việt xưa đã sáng tạo chữ gì để ghi tiếng Việt?", "Chữ Nôm", ["Chữ Latin", "Chữ số", "Chữ tượng hình Ai Cập"], "Người Việt xưa dùng chữ Hán, sau sáng tạo chữ Nôm từ chữ Hán để ghi tiếng Việt."],
      ["Chữ cái khác chữ tượng hình ở điểm nào?", "Dùng kí hiệu ghi âm", ["Dùng hình vẽ", "Không có quy tắc", "Chỉ dùng cho số"], "Chữ cái dùng kí hiệu ghi âm, chữ tượng hình dùng hình ảnh biểu thị sự vật."],
      ["Vì sao chữ viết quan trọng với lịch sử?", "Giúp lưu giữ và truyền lại tri thức", ["Để trang trí", "Để thay lời nói", "Để tính toán"], "Chữ viết giúp lưu giữ tri thức, kinh nghiệm qua nhiều thế hệ."],
    ]),
    createStarterTopic("grade-6-traditional-festivals", "Lớp 6 · Lễ hội truyền thống", "Phần lễ, phần hội và ý nghĩa cộng đồng", ["6", "🎉", "🏮"], [
      ["Lễ hội gồm những phần nào?", "Phần lễ và phần hội", ["Phần ăn và phần ngủ", "Phần thi và phần thưởng", "Phần mua và phần bán"], "Phần lễ trang nghiêm, phần hội vui chơi."],
      ["Hội Gióng tưởng nhớ ai?", "Thánh Gióng", ["Sơn Tinh", "Thủy Tinh", "Chử Đồng Tử"], "Hội Gióng tưởng nhớ Thánh Gióng, người anh hùng đánh giặc."],
      ["Lễ hội lớn nhất của người Việt là gì?", "Tết Nguyên đán", ["Tết Trung thu", "Lễ Vu Lan", "Tết Đoan Ngọ"], "Tết Nguyên đán là lễ hội lớn nhất, mở đầu năm mới."],
      ["Hội Lim nổi tiếng với loại hình nghệ thuật nào?", "Hát quan họ", ["Hát chèo", "Múa rối", "Đờn ca tài tử"], "Hội Lim (Bắc Ninh) nổi tiếng với hát quan họ."],
      ["Lễ hội thể hiện điều gì của cộng đồng?", "Đời sống tinh thần và sự gắn kết", ["Sự giàu có", "Sức mạnh quân sự", "Kỹ thuật xây dựng"], "Lễ hội thể hiện đời sống tinh thần và sự gắn kết cộng đồng."],
    ]),
    createStarterTopic("grade-6-ancient-trade", "Lớp 6 · Buôn bán thời cổ đại", "Trao đổi hàng hóa và giao lưu văn hóa", ["6", "⚖", "🏺"], [
      ["Hình thức buôn bán đầu tiên của con người là gì?", "Hàng đổi hàng", ["Dùng tiền giấy", "Chuyển khoản", "Dùng thẻ"], "Ban đầu người ta trao đổi hàng hóa trực tiếp (hàng đổi hàng)."],
      ["Sau hàng đổi hàng, người xưa dùng gì làm vật trao đổi?", "Vỏ sò, rồi tiền kim loại", ["Tiền giấy", "Thẻ ngân hàng", "Tiền điện tử"], "Từ hàng đổi hàng, người ta dùng vỏ sò rồi đến tiền kim loại."],
      ["Con đường Tơ lụa nối Trung Quốc với khu vực nào?", "Phương Tây", ["Châu Phi", "Châu Mỹ", "Châu Đại Dương"], "Con đường Tơ lụa nối Trung Quốc với phương Tây."],
      ["Óc Eo là gì thời cổ đại?", "Cảng thị sầm uất của Phù Nam", ["Kinh đô Văn Lang", "Một ngôi chùa", "Một con sông"], "Óc Eo là cảng thị sầm uất của vương quốc Phù Nam."],
      ["Buôn bán thời cổ đại mang lại lợi ích gì ngoài kinh tế?", "Thúc đẩy giao lưu văn hóa", ["Gây chiến tranh", "Làm nghèo dân", "Ngăn cách các vùng"], "Buôn bán thúc đẩy giao lưu văn hóa giữa các vùng."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-6-population", "Lớp 6 · Dân số và phân bố dân cư", "Mật độ dân số và nơi dân cư tập trung", ["6", "👥", "🗺"], [
      ["Mật độ dân số được tính bằng cách nào?", "Dân số chia diện tích", ["Diện tích chia dân số", "Dân số cộng diện tích", "Dân số trừ diện tích"], "Mật độ dân số = dân số ÷ diện tích."],
      ["Vùng nào ở Việt Nam có mật độ dân số cao nhất?", "Đồng bằng sông Hồng", ["Tây Nguyên", "Tây Bắc", "Duyên hải Nam Trung Bộ"], "Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước."],
      ["Dân cư thường tập trung ở đâu?", "Đồng bằng, ven biển", ["Đỉnh núi cao", "Hoang mạc", "Vùng cực"], "Dân cư tập trung nơi có điều kiện thuận lợi: đồng bằng, ven biển."],
      ["Vùng núi thường có đặc điểm dân cư nào?", "Thưa dân", ["Đông đúc", "Không có ai", "Chỉ có thành phố"], "Vùng núi điều kiện khó khăn nên thưa dân hơn đồng bằng."],
      ["Dân số là gì?", "Tổng số người sinh sống trong một khu vực", ["Tổng diện tích đất", "Số nhà trong vùng", "Số trường học"], "Dân số là tổng số người sinh sống trong một khu vực."],
    ]),
    createStarterTopic("grade-6-economic-activities", "Lớp 6 · Hoạt động kinh tế cơ bản", "Nông nghiệp, công nghiệp và dịch vụ", ["6", "🌾", "🏭"], [
      ["Trồng lúa thuộc nhóm kinh tế nào?", "Sản xuất nông nghiệp", ["Công nghiệp", "Dịch vụ", "Thương mại"], "Trồng lúa thuộc nhóm nông nghiệp gắn với đất đai, khí hậu."],
      ["Hoạt động nào thuộc dịch vụ?", "Buôn bán", ["Trồng lúa", "Khai thác than", "Luyện thép"], "Dịch vụ đáp ứng nhu cầu: buôn bán, vận tải, du lịch."],
      ["Công nghiệp có đặc điểm gì?", "Chế biến nguyên liệu thành sản phẩm", ["Trồng cây", "Chăn nuôi", "Dạy học"], "Công nghiệp chế biến nguyên liệu thành sản phẩm."],
      ["Nghề đánh cá ở vùng biển thuộc lĩnh vực nào?", "Nông – lâm – thủy sản", ["Công nghiệp nặng", "Dịch vụ", "Xây dựng"], "Đánh bắt hải sản thuộc nhóm nông – lâm – thủy sản."],
      ["Mỗi vùng thường có đặc điểm kinh tế nào?", "Hoạt động kinh tế thế mạnh riêng", ["Giống hệt nhau", "Không có kinh tế", "Chỉ một nghề"], "Mỗi vùng có hoạt động kinh tế thế mạnh riêng phù hợp điều kiện."],
    ]),
    createStarterTopic("grade-6-environment-protection", "Lớp 6 · Bảo vệ môi trường", "Nguyên nhân ô nhiễm và việc làm bảo vệ", ["6", "🌱", "♻"], [
      ["Môi trường gồm những thành phần nào?", "Đất, nước, không khí và sinh vật", ["Chỉ có đất", "Chỉ có nước", "Chỉ có con người"], "Môi trường gồm đất, nước, không khí và sinh vật."],
      ["Việc nào giúp bảo vệ môi trường?", "Phân loại rác tại nguồn", ["Xả rác bừa bãi", "Đốt rác ngoài trời", "Thải nước bẩn"], "Phân loại rác tại nguồn giúp tái chế dễ dàng, giảm rác chôn lấp."],
      ["Ô nhiễm không khí chủ yếu do đâu?", "Khí thải từ xe cộ, nhà máy", ["Trồng cây", "Đi bộ", "Mưa"], "Khí thải từ giao thông và công nghiệp là nguồn ô nhiễm chính."],
      ["Vì sao nên tiết kiệm điện, nước?", "Bảo vệ tài nguyên, giảm ô nhiễm", ["Để tốn tiền", "Để mất thời gian", "Không có lợi ích"], "Tiết kiệm điện nước giúp bảo vệ tài nguyên và giảm ô nhiễm môi trường."],
      ["Trồng cây xanh có tác dụng gì?", "Lọc không khí, giảm nhiệt", ["Gây ô nhiễm", "Tốn đất", "Không tác dụng"], "Cây xanh lọc không khí, giảm nhiệt, làm đẹp cảnh quan."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-6-personal-info-safety", "Lớp 6 · Bảo vệ thông tin cá nhân", "Nhận biết và giữ an toàn thông tin riêng", ["6", "🔒", "💻"], [
      ["Thông tin nào là thông tin cá nhân?", "Họ tên, địa chỉ, số điện thoại", ["Tên một bài hát", "Tên môn học", "Tên một loài hoa"], "Họ tên, địa chỉ, số điện thoại, trường lớp là thông tin cá nhân cần bảo vệ."],
      ["Có nên chia sẻ địa chỉ nhà với người lạ trên mạng?", "Không", ["Có", "Tùy hứng", "Nên khoe"], "Không chia sẻ thông tin cá nhân với người lạ trên mạng."],
      ["Mật khẩu mạnh nên có đặc điểm nào?", "Dài, có chữ hoa, chữ thường, số và kí tự đặc biệt", ["Ngắn và dễ nhớ", "Chỉ là tên mình", "Dùng chung cho mọi tài khoản"], "Mật khẩu mạnh dài, gồm chữ hoa, chữ thường, số và kí tự đặc biệt."],
      ["Ảnh mặc đồng phục có tên trường đăng công khai có thể gây gì?", "Lộ thông tin cá nhân", ["Không sao cả", "Được nhiều like", "Tăng bảo mật"], "Ảnh có tên trường có thể lộ thông tin nếu đăng công khai."],
      ["Nên làm gì với thông tin cá nhân trên mạng xã hội?", "Ẩn hoặc hạn chế người xem", ["Đăng công khai hết", "Chia sẻ cho người lạ", "Ghi vào phần giới thiệu"], "Nên ẩn hoặc hạn chế người xem các thông tin cá nhân."],
    ]),
    createStarterTopic("grade-6-email-basics", "Lớp 6 · Thư điện tử", "Địa chỉ email và cách viết thư lịch sự", ["6", "📧", "✉"], [
      ["Địa chỉ email có dạng nào?", "ten@nhacungcap", ["ten#nhacungcap", "ten*nhacungcap", "ten nhacungcap"], "Địa chỉ email có dạng tên@nhàcungcấp."],
      ["Khi viết email cần có gì?", "Tiêu đề rõ ràng, nội dung lịch sự", ["Không cần tiêu đề", "Viết tắt tùy ý", "Không cần chào hỏi"], "Email cần tiêu đề rõ ràng, nội dung lịch sự, kiểm tra chính tả."],
      ["Có nên mở tệp đính kèm từ người lạ?", "Không", ["Có", "Mở ngay", "Chia sẻ tiếp"], "Không mở tệp đính kèm từ người lạ vì có thể chứa mã độc."],
      ["Gửi bài tập cho thầy cô qua email, tiêu đề nên ghi gì?", "Họ tên, lớp", ["Chỉ ghi “bài tập”", "Để trống", "Ghi biệt danh"], "Ghi rõ họ tên, lớp ở tiêu đề để thầy cô dễ nhận biết."],
      ["Ưu điểm của thư điện tử là gì?", "Gửi nhận nhanh và rẻ qua Internet", ["Chậm hơn thư giấy", "Tốn nhiều tiền", "Chỉ gửi được văn bản"], "Thư điện tử gửi nhận qua Internet nhanh và rẻ."],
    ]),
    createStarterTopic("grade-6-typing-skills", "Lớp 6 · Gõ phím mười ngón", "Tư thế tay và hàng phím cơ sở", ["6", "⌨", "👆"], [
      ["Hàng phím cơ sở cho tay trái là gì?", "ASDF", ["JKL;", "QWER", "ZXCV"], "Tay trái đặt ở ASDF, tay phải ở JKL;."],
      ["Hai phím nào có gờ nhỏ để định vị ngón trỏ?", "F và J", ["A và S", "G và H", "Q và P"], "Ngón trỏ đặt ở F và J có gờ nhỏ để định vị mà không cần nhìn."],
      ["Khi gõ mười ngón nên nhìn vào đâu?", "Nhìn màn hình", ["Nhìn bàn phím", "Nhìn tay", "Nhắm mắt"], "Nên nhìn màn hình, không nhìn bàn phím để tạo phản xạ."],
      ["Gõ đúng kĩ thuật mang lại lợi ích gì?", "Nhanh và ít mỏi", ["Chậm hơn", "Mỏi tay hơn", "Hay gõ sai"], "Gõ đúng kĩ thuật giúp nhanh và ít mỏi tay."],
      ["Nên luyện gõ thế nào để tiến bộ?", "Khoảng 10 phút đều đặn mỗi ngày", ["5 giờ liên tục một lần", "Một tháng một lần", "Không cần luyện"], "Luyện đều đặn mỗi ngày khoảng 10 phút sẽ tiến bộ rõ sau vài tuần."],
    ]),
  ],
  technology: [
    createStarterTopic("grade-6-plant-care", "Lớp 6 · Trồng và chăm sóc cây xanh", "Chọn giống, đất, nước và các công việc chăm sóc", ["6", "🌱", "🪴"], [
      ["Trồng cây cần những yếu tố nào?", "Giống khỏe, đất tơi xốp, đủ ánh sáng và nước", ["Chỉ cần đất", "Chỉ cần nước", "Không cần gì"], "Trồng cây cần giống khỏe, đất tơi xốp, đủ ánh sáng và nước."],
      ["Công việc nào thuộc chăm sóc cây?", "Tưới nước, làm cỏ, bón phân", ["Chặt cây", "Bẻ cành", "Nhổ rễ"], "Chăm sóc gồm tưới nước, làm cỏ, bón phân, tỉa cành, phòng sâu bệnh."],
      ["Rau mầm trồng trong khay nhỏ thu hoạch sau bao lâu?", "5–7 ngày", ["5–7 tháng", "1 năm", "1 ngày"], "Rau mầm có thể trồng trong khay nhỏ, thu hoạch sau 5–7 ngày."],
      ["Cây xanh có lợi ích gì?", "Lọc không khí, giảm nhiệt", ["Gây bụi", "Tốn nước", "Không có ích"], "Cây xanh làm đẹp cảnh quan, lọc không khí và giảm nhiệt."],
      ["Khi cây bị sâu bệnh nên làm gì?", "Tìm cách phòng trừ phù hợp", ["Nhổ bỏ ngay", "Mặc kệ", "Tưới thật nhiều nước"], "Cần phòng trừ sâu bệnh để cây phát triển tốt."],
    ]),
    createStarterTopic("grade-6-water-saving", "Lớp 6 · Sử dụng nước tiết kiệm", "Các cách tiết kiệm nước trong sinh hoạt", ["6", "💧", "🚰"], [
      ["Nên làm gì khi đánh răng để tiết kiệm nước?", "Khóa vòi khi không cần", ["Mở vòi liên tục", "Dùng vòi hoa sen", "Đánh răng lâu hơn"], "Khóa vòi khi đánh răng giúp tiết kiệm nước."],
      ["Nước vo gạo có thể dùng để làm gì?", "Tưới cây", ["Đổ đi", "Uống", "Rửa mặt"], "Dùng nước vo gạo tưới cây là cách tái sử dụng nước."],
      ["Vòi nước rò rỉ một giọt mỗi giây gây lãng phí bao nhiêu?", "Hàng chục lít mỗi ngày", ["Không đáng kể", "Một cốc nước", "Một xô mỗi năm"], "Rò rỉ một giọt mỗi giây có thể lãng phí hàng chục lít mỗi ngày."],
      ["Nước mưa có thể dùng để làm gì?", "Tưới cây, rửa sân", ["Uống trực tiếp", "Nấu ăn", "Tắm"], "Hứng nước mưa để tưới cây, rửa sân."],
      ["Vì sao cần tiết kiệm nước?", "Nước sạch ngày càng khan hiếm", ["Nước là vô hạn", "Để tốn tiền", "Không cần thiết"], "Nước sạch ngày càng khan hiếm nên cần tiết kiệm."],
    ]),
    createStarterTopic("grade-6-recycling", "Lớp 6 · Phân loại rác và tái chế", "Các loại rác và ý nghĩa của tái chế", ["6", "♻", "🗑"], [
      ["Rác tái chế gồm những gì?", "Giấy, nhựa, kim loại", ["Thức ăn thừa", "Lá cây", "Đất đá"], "Rác tái chế: giấy, nhựa, kim loại; rác hữu cơ: thức ăn thừa."],
      ["Tái chế mang lại lợi ích gì?", "Biến rác thành nguyên liệu mới, giảm khai thác tài nguyên", ["Tốn thêm tài nguyên", "Gây ô nhiễm", "Không có ích"], "Tái chế biến rác thành nguyên liệu mới, giảm khai thác tài nguyên."],
      ["Rác hữu cơ có thể xử lí bằng cách nào?", "Ủ thành phân bón cho cây", ["Đốt bỏ", "Chôn lẫn", "Vứt ra sông"], "Ủ rác hữu cơ thành phân bón cho cây."],
      ["Chai nhựa tái chế có thể thành gì?", "Sợi vải, chậu cây", ["Thức ăn", "Nước uống", "Không khí"], "Chai nhựa tái chế thành sợi vải, thùng rác, chậu cây."],
      ["Vì sao nên phân loại rác tại nguồn?", "Giúp tái chế dễ dàng, giảm rác chôn lấp", ["Để tốn thời gian", "Không cần thiết", "Để rác nhiều hơn"], "Phân loại tại nguồn giúp tái chế dễ dàng và giảm rác chôn lấp."],
    ]),
  ],
  civics: [
    createStarterTopic("grade-6-homeland-pride", "Lớp 6 · Tự hào quê hương", "Tìm hiểu và giữ gìn bản sắc quê hương", ["6", "🏡", "❤"], [
      ["Quê hương gắn với những gì?", "Nơi sinh ra, gia đình, bạn bè và kỉ niệm", ["Chỉ là địa chỉ", "Chỉ là nhà cửa", "Không có ý nghĩa"], "Quê hương là nơi ta sinh ra, gắn với gia đình, bạn bè và kỉ niệm."],
      ["Tự hào quê hương thể hiện qua việc nào?", "Tìm hiểu truyền thống, giữ gìn bản sắc", ["Chê bai quê mình", "Quên nguồn gốc", "Không quan tâm"], "Tự hào qua tìm hiểu truyền thống, giữ gìn bản sắc, đóng góp xây dựng."],
      ["Mỗi địa phương đều có gì đáng trân trọng?", "Nét đẹp riêng", ["Không có gì", "Chỉ có cái xấu", "Giống hệt nhau"], "Mỗi địa phương đều có nét đẹp riêng đáng trân trọng."],
      ["Giới thiệu đặc sản quê mình cho bạn bè thể hiện điều gì?", "Tự hào về quê hương", ["Khoe khoang", "Tự ti", "Không có ý nghĩa"], "Giới thiệu nét đẹp quê hương thể hiện niềm tự hào."],
      ["Đóng góp xây dựng quê hương bằng cách nào?", "Học tốt, giữ gìn môi trường", ["Phá hoại", "Bỏ học", "Xả rác"], "Học tốt, sống đẹp, giữ gìn môi trường là đóng góp thiết thực."],
    ]),
    createStarterTopic("grade-6-respect-differences", "Lớp 6 · Tôn trọng sự khác biệt", "Không phân biệt, giúp nhau tiến bộ", ["6", "🤝", "🌈"], [
      ["Mọi người khác nhau ở những điểm nào?", "Ngoại hình, tính cách, hoàn cảnh", ["Không ai khác nhau", "Chỉ khác tên", "Chỉ khác tuổi"], "Mỗi người có ngoại hình, tính cách, hoàn cảnh khác nhau."],
      ["Tôn trọng sự khác biệt là gì?", "Không chê bai, trêu chọc, phân biệt đối xử", ["Cười nhạo bạn", "Xa lánh bạn", "Bắt nạt bạn"], "Tôn trọng là không chê bai, trêu chọc hay phân biệt đối xử."],
      ["Bạn nói giọng địa phương khác thì nên làm gì?", "Tôn trọng, không cười nhạo", ["Cười nhạo", "Bắt chước trêu", "Xa lánh"], "Giọng địa phương khác không phải điều đáng cười."],
      ["Lớp học vui khi nào?", "Mọi người được là chính mình và giúp nhau tiến bộ", ["Khi giống hệt nhau", "Khi có phân biệt", "Khi im lặng"], "Lớp vui khi mọi người được là chính mình và giúp nhau."],
      ["Thấy bạn bị trêu vì khác biệt, em nên làm gì?", "Can ngăn và an ủi bạn", ["Cười theo", "Mặc kệ", "Trêu cùng"], "Nên can ngăn, an ủi bạn và báo thầy cô nếu cần."],
    ]),
    createStarterTopic("grade-6-diligence", "Lớp 6 · Siêng năng, kiên trì", "Phẩm chất giúp vượt khó và thành công", ["6", "💪", "🎯"], [
      ["Siêng năng là gì?", "Chăm chỉ làm việc không lười biếng", ["Làm việc qua loa", "Trốn việc", "Ỷ lại người khác"], "Siêng năng là chăm chỉ, không lười biếng."],
      ["Kiên trì là gì?", "Bền bỉ theo đuổi mục tiêu dù gặp khó khăn", ["Bỏ cuộc sớm", "Làm cho có", "Thay đổi liên tục"], "Kiên trì là bền bỉ theo đuổi mục tiêu dù khó khăn."],
      ["Mỗi ngày học 20 từ tiếng Anh, sau một năm thuộc khoảng bao nhiêu từ?", "Hơn 7.000 từ", ["20 từ", "365 từ", "100 từ"], "20 × 365 = 7.300 từ — việc nhỏ đều đặn tạo kết quả lớn."],
      ["Để dễ kiên trì, nên làm gì với việc lớn?", "Chia thành việc nhỏ", ["Làm một lần cho xong", "Bỏ qua", "Nhờ người khác"], "Chia việc lớn thành việc nhỏ giúp dễ kiên trì hơn."],
      ["Siêng năng, kiên trì giúp gì trong học tập?", "Vượt qua bài khó, đạt kết quả tốt", ["Không có tác dụng", "Mất thời gian", "Gây mệt mỏi"], "Hai phẩm chất này giúp vượt qua bài khó và đạt kết quả tốt."],
    ]),
  ],
  "physical-education": [
    createStarterTopic("grade-6-jump-rope", "Lớp 6 · Nhảy dây", "Kĩ thuật nhảy và lợi ích sức khỏe", ["6", "🤸", "⏱"], [
      ["Nhảy dây rèn luyện gì?", "Sức bền, sự khéo léo và phối hợp", ["Chỉ cánh tay", "Chỉ mắt", "Không có tác dụng"], "Nhảy dây rèn sức bền, khéo léo và phối hợp."],
      ["Chọn dây nhảy thế nào là vừa?", "Đứng giữa dây, tay cầm ngang hông", ["Dây càng dài càng tốt", "Dây càng ngắn càng tốt", "Dây nào cũng được"], "Đứng giữa dây, tay cầm ngang hông là độ dài vừa."],
      ["Khi nhảy nên tiếp đất bằng phần nào của bàn chân?", "Nửa trước bàn chân", ["Gót chân", "Cả bàn chân", "Mũi chân"], "Nhảy bằng nửa trước bàn chân, gối hơi chùng."],
      ["Để quay dây nên dùng bộ phận nào?", "Xoay cổ tay", ["Xoay cả cánh tay", "Dùng vai", "Dùng hông"], "Xoay cổ tay để quay dây nhẹ nhàng, đều."],
      ["Nhảy dây 5 phút mỗi ngày giúp gì?", "Tim khỏe và phản xạ nhanh", ["Không có ích", "Mệt mỏi", "Chóng mặt"], "Nhảy dây đều đặn giúp tim khỏe, phản xạ nhanh."],
    ]),
    createStarterTopic("grade-6-sitting-posture", "Lớp 6 · Tư thế ngồi học đúng", "Bảo vệ cột sống và mắt khi ngồi học", ["6", "🪑", "👁"], [
      ["Tư thế ngồi học đúng là gì?", "Lưng thẳng, hai chân đặt vững trên sàn", ["Ngồi vẹo", "Nằm học", "Ngồi xổm"], "Lưng thẳng, chân đặt vững, mắt cách sách khoảng 30 cm."],
      ["Mắt nên cách sách bao xa?", "Khoảng 30 cm", ["5 cm", "1 m", "Càng gần càng tốt"], "Mắt cách sách khoảng 30 cm, đủ ánh sáng."],
      ["Ngồi sai tư thế lâu ngày dễ dẫn đến gì?", "Cong vẹo cột sống, cận thị", ["Cao lớn", "Khỏe mạnh", "Thông minh"], "Ngồi sai lâu ngày dễ cong vẹo cột sống, cận thị."],
      ["Sau bao lâu ngồi học nên đứng dậy vận động?", "Sau mỗi 45 phút", ["Sau 5 giờ", "Không cần", "Sau 5 phút"], "Sau mỗi 45 phút nên đứng dậy vận động nhẹ."],
      ["Bàn ghế vừa tầm giúp gì?", "Khuỷu tay tạo góc vuông khi viết", ["Phải với cao", "Phải cúi thấp", "Không quan trọng"], "Bàn ghế vừa tầm giúp khuỷu tay tạo góc vuông khi viết."],
    ]),
    createStarterTopic("grade-6-folk-games", "Lớp 6 · Trò chơi dân gian", "Kéo co, nhảy bao bố và luật chơi an toàn", ["6", "🪢", "🎮"], [
      ["Trò chơi dân gian vừa rèn gì?", "Sức khỏe và gắn kết bạn bè", ["Chỉ tay chân", "Chỉ trí nhớ", "Không có ích"], "Trò chơi dân gian vừa rèn sức khỏe vừa gắn kết bạn bè."],
      ["Đội kéo co thắng thường nhờ điều gì?", "Phối hợp nhịp nhàng", ["Chỉ sức khỏe", "May mắn", "Ăn gian"], "Đội phối hợp nhịp nhàng thường thắng, không chỉ nhờ khỏe."],
      ["Nhảy bao bố cần kĩ năng gì?", "Giữ thăng bằng", ["Chạy nhanh", "Nhảy cao", "Bơi giỏi"], "Nhảy bao bố cần giữ thăng bằng tốt."],
      ["Khi chơi trò chơi dân gian cần chú ý gì?", "Chơi an toàn, đúng luật", ["Chơi gian lận", "Chơi nguy hiểm", "Không cần luật"], "Chơi an toàn, đúng luật, vui là chính."],
      ["“Bịt mắt bắt dê” rèn luyện gì?", "Thính giác và phản xạ", ["Thị giác", "Vị giác", "Khứu giác"], "Bịt mắt nên phải dùng tai nghe và phản xạ nhanh."],
    ]),
  ],
  music: [
    createStarterTopic("grade-6-pitch-dynamics", "Lớp 6 · Âm cao thấp, mạnh nhẹ", "Cao độ, cường độ và sắc thái bài hát", ["6", "🎵", "🔊"], [
      ["Âm cao hay thấp gọi là gì?", "Cao độ", ["Cường độ", "Trường độ", "Tốc độ"], "Cao hay thấp là cao độ; mạnh hay nhẹ là cường độ."],
      ["Đoạn điệp khúc thường được hát thế nào?", "Mạnh và cao hơn đoạn mở đầu", ["Nhẹ và thấp hơn", "Như nhau", "Không hát"], "Điệp khúc thường là cao trào, hát mạnh và cao hơn."],
      ["Để thể hiện đúng sắc thái bài hát, người hát cần điều chỉnh gì?", "Hơi thở", ["Quần áo", "Tóc", "Giày"], "Điều chỉnh hơi thở để thể hiện chỗ mạnh, chỗ nhẹ."],
      ["Chỗ hát nhẹ nhàng trong bài thường tạo cảm giác gì?", "Lắng đọng, sâu sắc", ["Ồn ào", "Vội vã", "Căng thẳng"], "Chỗ nhẹ nhàng tạo cảm giác lắng đọng, sâu sắc."],
      ["Khi tập hát một bài mới nên làm gì trước?", "Đánh dấu chỗ hát mạnh và chỗ hát nhẹ", ["Hát ngay", "Bỏ qua", "Chỉ nghe"], "Đánh dấu sắc thái giúp thể hiện bài hát đúng hơn."],
    ]),
    createStarterTopic("grade-6-percussion", "Lớp 6 · Nhạc cụ gõ", "Các loại nhạc cụ gõ và vai trò giữ nhịp", ["6", "🥁", "🎶"], [
      ["Nhạc cụ gõ tạo âm thanh bằng cách nào?", "Gõ, lắc", ["Thổi", "Kéo", "Gảy"], "Nhạc cụ gõ tạo âm thanh bằng cách gõ, lắc: trống, phách, thanh la."],
      ["Trong dàn nhạc dân tộc, nhạc cụ nào giữ nhịp?", "Trống", ["Sáo", "Đàn bầu", "Đàn tranh"], "Trong dàn nhạc dân tộc, trống giữ nhịp cho cả dàn."],
      ["Trống cơm có đặc điểm gì?", "Hai mặt với cao độ khác nhau", ["Một mặt", "Không có mặt", "Ba mặt"], "Trống cơm có hai mặt cao độ khác nhau, thường đệm cho hát chèo."],
      ["Phách là nhạc cụ thuộc nhóm nào?", "Nhạc cụ gõ", ["Nhạc cụ hơi", "Nhạc cụ dây", "Nhạc cụ phím"], "Phách tạo âm thanh bằng cách gõ nên thuộc nhóm nhạc cụ gõ."],
      ["Kết hợp nhiều nhạc cụ gõ tạo ra gì?", "Tiết tấu sinh động", ["Im lặng", "Hỗn loạn", "Nhàm chán"], "Mỗi nhạc cụ gõ có âm sắc riêng, kết hợp tạo tiết tấu sinh động."],
    ]),
    createStarterTopic("grade-6-school-songs", "Lớp 6 · Bài hát về mái trường", "Những bài ca tri ân thầy cô", ["6", "🏫", "🎤"], [
      ["Bài “Bụi phấn” ca ngợi ai?", "Thầy cô", ["Bạn bè", "Gia đình", "Quê hương"], "“Bụi phấn” là bài hát tri ân thầy cô."],
      ["Khi hát bài về thầy cô cần thể hiện tình cảm gì?", "Biết ơn", ["Vô cảm", "Giận dữ", "Buồn bã"], "Hát với tình cảm biết ơn, phát âm rõ lời, giữ nhịp đều."],
      ["Ngày 20/11 học sinh thường làm gì?", "Hát tặng thầy cô những bài tri ân", ["Đi chơi", "Nghỉ học", "Không làm gì"], "Ngày 20/11 học sinh hát tặng thầy cô bài hát tri ân."],
      ["Hát tập thể bài hát về trường hợp vào dịp nào?", "Các dịp lễ của trường", ["Khi buồn ngủ", "Khi kiểm tra", "Không bao giờ"], "Có thể hát tập thể trong các dịp lễ của trường."],
      ["Để hát hay một bài hát cần chú ý gì?", "Phát âm rõ lời, giữ nhịp đều", ["Hát thật to", "Hát thật nhanh", "Không cần nhịp"], "Phát âm rõ lời, giữ nhịp đều là yêu cầu cơ bản."],
    ]),
  ],
  "visual-arts": [
    createStarterTopic("grade-6-landscape", "Lớp 6 · Vẽ tranh phong cảnh", "Bố cục ba lớp và gam màu cảm xúc", ["6", "🏔", "🎨"], [
      ["Tranh phong cảnh thường vẽ gì?", "Thiên nhiên: núi, sông, cây, nhà", ["Chân dung", "Chữ viết", "Bản đồ"], "Tranh phong cảnh vẽ thiên nhiên."],
      ["Bố cục tranh phong cảnh gồm những phần nào?", "Tiền cảnh, trung cảnh, hậu cảnh", ["Chỉ một phần", "Hai phần", "Bốn phần"], "Bố cục có tiền cảnh, trung cảnh, hậu cảnh."],
      ["Vật ở xa nên vẽ thế nào?", "Nhỏ và nhạt hơn vật gần", ["To và đậm hơn", "Như vật gần", "Không vẽ"], "Vật xa vẽ nhỏ và nhạt hơn vật gần tạo chiều sâu."],
      ["Vẽ hoàng hôn nên chọn gam màu nào?", "Gam màu ấm", ["Gam màu lạnh", "Chỉ màu đen", "Không màu"], "Gam ấm cho hoàng hôn, gam lạnh cho buổi sớm."],
      ["Vẽ cánh đồng quê, ruộng lúa gần nên vẽ thế nào?", "To rõ", ["Nhỏ mờ", "Không vẽ", "Vẽ đen"], "Vật gần vẽ to rõ, dãy núi xa vẽ nhỏ mờ."],
    ]),
    createStarterTopic("grade-6-border-patterns", "Lớp 6 · Trang trí đường diềm", "Họa tiết lặp lại quanh đồ vật", ["6", "🖼", "✏"], [
      ["Đường diềm là gì?", "Dải họa tiết trang trí lặp lại quanh đồ vật", ["Một loại tranh", "Một loại màu", "Một loại giấy"], "Đường diềm là dải họa tiết lặp lại quanh đồ vật, trang vở, khung ảnh."],
      ["Họa tiết đường diềm có thể là gì?", "Hình học, hoa lá cách điệu", ["Chữ viết", "Con số", "Không có gì"], "Họa tiết có thể là hình học, hoa lá cách điệu."],
      ["Vẽ đường diềm cần chú ý gì?", "Đều tay, các đơn vị họa tiết bằng nhau", ["Vẽ nguệch ngoạc", "Mỗi chỗ một kiểu", "Không cần đều"], "Cần đều tay, các đơn vị bằng nhau, màu hài hòa."],
      ["Khăn thổ cẩm có đặc điểm đường diềm nào?", "Hoa văn lặp lại rất đều và đẹp", ["Không có hoa văn", "Hoa văn lộn xộn", "Chỉ một màu"], "Khăn thổ cẩm có đường diềm hoa văn lặp lại đều và đẹp."],
      ["Đường diềm thường trang trí ở đâu?", "Bìa vở, khung ảnh, đồ vật", ["Chỉ trong sách", "Không ở đâu", "Chỉ ngoài trời"], "Đường diềm trang trí quanh đồ vật, trang vở, khung ảnh."],
    ]),
    createStarterTopic("grade-6-folk-art", "Lớp 6 · Mĩ thuật dân gian", "Tranh Đông Hồ và nét đẹp văn hóa Việt", ["6", "🖌", "🏵"], [
      ["Tranh Đông Hồ được in bằng gì?", "Ván khắc gỗ", ["Máy in", "Vẽ tay", "Chụp ảnh"], "Tranh Đông Hồ in từ ván khắc gỗ trên giấy dó."],
      ["Màu của tranh Đông Hồ làm từ đâu?", "Thiên nhiên", ["Hóa chất", "Nhựa", "Sơn công nghiệp"], "Màu từ thiên nhiên: đen từ than, đỏ từ sỏi son."],
      ["Đề tài tranh Đông Hồ thường là gì?", "Gần gũi: lợn, gà, đám cưới chuột", ["Chiến tranh", "Vũ trụ", "Máy móc"], "Đề tài gần gũi đời sống: lợn, gà, đám cưới chuột."],
      ["Tranh “Đám cưới chuột” có ý nghĩa gì?", "Vừa hài hước vừa châm biếm thói xấu", ["Chỉ để cười", "Không có ý nghĩa", "Ca ngợi chuột"], "Vừa hài hước vừa châm biếm thói xấu xã hội."],
      ["Tìm hiểu mĩ thuật dân gian giúp gì?", "Thêm yêu văn hóa Việt", ["Không có ích", "Quên truyền thống", "Chê bai"], "Tìm hiểu mĩ thuật dân gian giúp thêm yêu văn hóa Việt."],
    ]),
  ],
  "national-defense": [
    createStarterTopic("grade-6-home-alone-safety", "Lớp 6 · Ở nhà một mình an toàn", "Quy tắc khi chỉ có một mình ở nhà", ["6", "🏠", "🔐"], [
      ["Khi ở nhà một mình, có nên mở cửa cho người lạ?", "Không", ["Có", "Tùy người", "Mở hé"], "Không mở cửa cho người lạ dù họ nói quen bố mẹ."],
      ["Khi ở nhà một mình cần nhớ số điện thoại của ai?", "Bố mẹ và số khẩn cấp 113, 114, 115", ["Bạn bè", "Không cần nhớ", "Người lạ"], "Nhớ số bố mẹ và số khẩn cấp 113, 114, 115."],
      ["Ở nhà một mình không nên nghịch gì?", "Điện, lửa, vật sắc nhọn", ["Sách vở", "Đồ chơi an toàn", "Bút màu"], "Không nghịch điện, lửa, vật sắc nhọn khi một mình."],
      ["Người giao hàng đến khi chỉ có em ở nhà thì làm gì?", "Nhận qua khe cửa hoặc nhờ hàng xóm", ["Mở cửa đón vào", "Đi theo họ", "Cho họ vào nhà"], "Nhận qua khe cửa hoặc nhờ người lớn, hàng xóm."],
      ["Nên làm gì cùng bố mẹ trước khi ở nhà một mình?", "Lập danh sách việc được làm và không được làm", ["Không cần chuẩn bị", "Tự quyết định", "Hỏi bạn bè"], "Cùng bố mẹ lập danh sách việc được và không được làm."],
    ]),
    createStarterTopic("grade-6-online-stranger-safety", "Lớp 6 · Cảnh giác với người lạ trên mạng", "Nhận biết dụ dỗ và cách ứng phó", ["6", "💻", "⚠"], [
      ["Người lạ trên mạng có thể làm gì?", "Giả làm bạn cùng tuổi để xin ảnh, địa chỉ", ["Luôn tốt bụng", "Không bao giờ lừa", "Chỉ muốn kết bạn"], "Người lạ có thể giả làm bạn cùng tuổi để xin ảnh, địa chỉ hoặc hẹn gặp."],
      ["Có nên gửi ảnh riêng tư cho người chỉ quen qua mạng?", "Không", ["Có", "Tùy ảnh", "Gửi một ít"], "Không gửi ảnh riêng tư, không hẹn gặp người chỉ quen qua mạng."],
      ["Người lạ khen ảnh và xin thêm ảnh riêng tư là dấu hiệu gì?", "Cần cảnh giác", ["Bình thường", "Đáng tin", "Nên vui"], "Đó là dấu hiệu cần cảnh giác, có thể là dụ dỗ."],
      ["Khi bị dụ dỗ, đe dọa trên mạng nên làm gì?", "Báo ngay cho bố mẹ, thầy cô", ["Giấu kín", "Làm theo họ", "Tự giải quyết"], "Báo ngay cho bố mẹ, thầy cô khi bị dụ dỗ, đe dọa."],
      ["Quy tắc an toàn khi dùng mạng xã hội là gì?", "Không kết bạn, không hẹn gặp người lạ", ["Kết bạn thoải mái", "Chia sẻ mọi thứ", "Tin mọi người"], "Không kết bạn, không gửi ảnh riêng tư, không hẹn gặp người lạ."],
    ]),
    createStarterTopic("grade-6-play-injury-prevention", "Lớp 6 · Phòng tránh tai nạn khi vui chơi", "Chọn nơi chơi an toàn và xử lí khi bị thương", ["6", "⚽", "🛡"], [
      ["Nên chọn nơi chơi như thế nào?", "An toàn, tránh ao hồ, công trình đang xây", ["Gần đường xe chạy", "Trên cao", "Chỗ nguy hiểm"], "Chọn nơi an toàn, tránh ao hồ, công trình đang xây, đường xe chạy."],
      ["Không nên làm gì khi chơi?", "Leo trèo nơi cao, đùa giỡn xô đẩy gần cầu thang", ["Chơi nhẹ nhàng", "Tuân thủ luật", "Chơi cùng bạn"], "Không leo trèo nơi cao, không chơi vật sắc nhọn, không xô đẩy."],
      ["Chơi đá bóng ở đâu an toàn hơn?", "Sân bãi trống", ["Lề đường", "Giữa đường", "Trên cầu"], "Chơi ở sân bãi trống an toàn hơn ở lề đường."],
      ["Khi bị thương lúc chơi nên làm gì?", "Báo người lớn ngay", ["Giấu đi", "Tiếp tục chơi", "Tự chữa"], "Khi bị thương, báo người lớn ngay để được giúp đỡ."],
      ["Khảo sát sân chơi nên ghi lại gì?", "Điểm an toàn và điểm nguy hiểm", ["Không cần ghi", "Chỉ ghi điểm vui", "Ghi tên bạn"], "Ghi điểm an toàn và nguy hiểm để chọn chỗ chơi phù hợp."],
    ]),
  ],
  "career-experience": [
    createStarterTopic("grade-6-study-schedule", "Lớp 6 · Lập thời gian biểu học tập", "Phân bổ hợp lí giữa học, nghỉ và chơi", ["6", "📅", "⏰"], [
      ["Thời gian biểu có tác dụng gì?", "Phân bổ hợp lí giữa học, nghỉ ngơi và vui chơi", ["Không có tác dụng", "Gây mệt mỏi", "Mất thời gian"], "Thời gian biểu giúp phân bổ hợp lí các hoạt động."],
      ["Nên xếp môn khó vào lúc nào?", "Lúc tỉnh táo", ["Lúc buồn ngủ", "Lúc mệt", "Nửa đêm"], "Xếp môn khó vào lúc tỉnh táo, xen kẽ môn khác nhau."],
      ["Học thế nào giúp tập trung hơn?", "Học 45 phút rồi nghỉ 10 phút", ["Học liền 3 giờ", "Không nghỉ", "Học thâu đêm"], "Học 45 phút nghỉ 10 phút giúp tập trung hơn học liền."],
      ["Thời gian biểu cần có đặc điểm gì?", "Thực tế và linh hoạt điều chỉnh", ["Cứng nhắc", "Không thể đổi", "Quá sức"], "Thời gian biểu cần thực tế và linh hoạt điều chỉnh."],
      ["Ngoài giờ học, thời gian biểu nên dành thời gian cho gì?", "Ôn bài cũ", ["Chỉ chơi", "Không làm gì", "Thức khuya"], "Dành thời gian ôn bài cũ bên cạnh học bài mới."],
    ]),
    createStarterTopic("grade-6-household-chores", "Lớp 6 · Việc nhà vừa sức", "Chia sẻ việc nhà và rèn tính tự lập", ["6", "🧹", "🏠"], [
      ["Làm việc nhà vừa sức mang lại gì?", "Chia sẻ với gia đình, rèn tính tự lập", ["Mệt mỏi vô ích", "Mất thời gian học", "Không có ích"], "Làm việc nhà giúp chia sẻ và rèn tự lập."],
      ["Việc nào em có thể làm mỗi ngày?", "Rửa rau, lau bàn sau khi ăn", ["Nấu ăn một mình", "Sửa điện", "Leo mái nhà"], "Rửa rau, lau bàn là việc vừa sức mỗi ngày."],
      ["Khi dùng dao, lửa cần chú ý gì?", "Có người lớn hướng dẫn", ["Tự làm", "Không cần ai", "Làm nhanh"], "Dùng dao, lửa cần người lớn hướng dẫn để an toàn."],
      ["Làm việc nhà nên có thái độ nào?", "Cẩn thận, đều đặn", ["Qua loa", "Lười biếng", "Đùn đẩy"], "Làm cẩn thận, đều đặn tạo thói quen tốt."],
      ["Phân công việc nhà trong gia đình giúp gì?", "Mọi người cùng chia sẻ, nhà cửa gọn gàng", ["Gây cãi nhau", "Không cần thiết", "Mất đoàn kết"], "Phân công giúp mọi người cùng chia sẻ trách nhiệm."],
    ]),
    createStarterTopic("grade-6-career-dreams", "Lớp 6 · Ước mơ nghề nghiệp", "Tìm hiểu nghề và rèn luyện từ bây giờ", ["6", "💭", "🌟"], [
      ["Ước mơ nghề nghiệp là gì?", "Mong muốn về công việc tương lai", ["Trò chơi", "Giấc ngủ", "Môn học"], "Ước mơ nghề nghiệp là mong muốn về công việc tương lai."],
      ["Để thực hiện ước mơ nghề nghiệp cần làm gì?", "Tìm hiểu nghề và rèn luyện từ bây giờ", ["Ngồi chờ", "Không cần làm gì", "Mơ thôi"], "Cần tìm hiểu nghề đó làm gì, cần học gì và rèn luyện."],
      ["Muốn làm bác sĩ, từ bây giờ cần học tốt môn nào?", "Các môn khoa học", ["Không cần học", "Chỉ cần chơi", "Học thuộc lòng"], "Muốn làm bác sĩ cần học tốt các môn khoa học ngay từ bây giờ."],
      ["Ước mơ nghề nghiệp có thể thay đổi không?", "Có, khi em hiểu mình hơn", ["Không bao giờ", "Cấm thay đổi", "Phải giữ nguyên"], "Ước mơ có thể thay đổi; quan trọng là luôn cố gắng."],
      ["Điều quan trọng nhất để tiến gần ước mơ là gì?", "Luôn cố gắng mỗi ngày", ["Chờ may mắn", "Không làm gì", "Bỏ cuộc"], "Điều quan trọng là luôn cố gắng mỗi ngày."],
    ]),
  ],
};
for (const [subjectId, topics] of Object.entries(gradeSixExtraPractice)) {
  for (const topic of topics) topic.level = "LỚP 6";
  curriculumExtensions[subjectId].push(...topics);
}

const gradeSevenExtraPractice = {
  math: [
    createStarterTopic("grade-7-equations-intro", "Lớp 7 · Phương trình một ẩn: khái niệm và nghiệm", "Nhận biết phương trình, kiểm tra nghiệm và phương trình tương đương", ["7", "x", "="], [
      ["Đẳng thức nào sau đây là phương trình một ẩn?", "2x + 3 = 7", ["5 + 2 = 7", "x + y = 10", "3 × 4 = 12"], "Phương trình một ẩn là đẳng thức chứa đúng một ẩn số cần tìm; 2x + 3 = 7 chứa ẩn x."],
      ["x = 2 có phải là nghiệm của phương trình 2x + 3 = 7 không?", "Có, vì 2·2 + 3 = 7", ["Không, vì 2·2 + 3 = 8", "Có, vì 2 + 3 = 5", "Không xác định được"], "Thay x = 2 vào vế trái: 2·2 + 3 = 7 bằng vế phải, nên x = 2 là nghiệm."],
      ["Nghiệm của phương trình x + 5 = 9 là bao nhiêu?", "x = 4", ["x = 5", "x = 14", "x = 45"], "x = 9 − 5 = 4; thử lại 4 + 5 = 9 đúng."],
      ["Hai phương trình được gọi là tương đương khi nào?", "Khi chúng có cùng tập nghiệm", ["Khi chúng giống hệt nhau", "Khi chúng có cùng ẩn số", "Khi chúng đều có nghiệm bằng 0"], "Hai phương trình có cùng tập nghiệm gọi là tương đương, dù hình thức có thể khác nhau."],
      ["“Giải phương trình” nghĩa là gì?", "Tìm mọi nghiệm của phương trình", ["Vẽ đồ thị phương trình", "Đoán một nghiệm bất kì", "Viết lại phương trình dài hơn"], "Giải phương trình là tìm mọi giá trị của ẩn làm đẳng thức đúng."],
    ]),
    createStarterTopic("grade-7-statistics-average", "Lớp 7 · Số trung bình cộng", "Tính trung bình cộng và hiểu ý nghĩa của nó", ["7", "∑", "÷"], [
      ["Số trung bình cộng của 8, 7, 9 là bao nhiêu?", "8", ["7", "9", "24"], "(8 + 7 + 9) : 3 = 24 : 3 = 8."],
      ["Muốn tính trung bình cộng của các số, ta làm thế nào?", "Cộng tất cả các số rồi chia cho số lượng số", ["Nhân tất cả các số với nhau", "Lấy số lớn nhất trừ số nhỏ nhất", "Cộng rồi nhân đôi"], "Số trung bình cộng bằng tổng các số chia cho số lượng số."],
      ["Lớp có 40 học sinh, tổng điểm kiểm tra là 320. Điểm trung bình của lớp là bao nhiêu?", "8 điểm", ["7 điểm", "9 điểm", "10 điểm"], "320 : 40 = 8 điểm."],
      ["Số trung bình cộng cho biết điều gì về một nhóm số liệu?", "Mức “điển hình” của nhóm số liệu", ["Số lớn nhất trong nhóm", "Số nhỏ nhất trong nhóm", "Số lượng các số"], "Trung bình cộng cho biết mức “điển hình” của một nhóm số liệu."],
      ["Điểm của An: Toán 9 (hệ số 2), Văn 8, Anh 7. Điểm trung bình là bao nhiêu?", "8,25", ["8", "7,5", "9"], "Tổng có hệ số: 9×2 + 8 + 7 = 33; chia cho 2 + 1 + 1 = 4; 33 : 4 = 8,25."],
    ]),
    createStarterTopic("grade-7-parallel-lines", "Lớp 7 · Hai đường thẳng song song và dấu hiệu", "Nhận biết và chứng minh hai đường thẳng song song", ["7", "∠", "∥"], [
      ["Hai đường thẳng song song có đặc điểm gì?", "Không có điểm chung", ["Có đúng một điểm chung", "Có vô số điểm chung", "Luôn vuông góc với nhau"], "Hai đường thẳng song song không cắt nhau, tức không có điểm chung."],
      ["Khi một đường thẳng cắt hai đường thẳng, dấu hiệu nào cho thấy chúng song song?", "Có cặp góc so le trong bằng nhau", ["Có cặp góc kề bù bằng nhau", "Có cặp góc đối đỉnh khác nhau", "Có đúng một góc vuông"], "Nếu có cặp góc so le trong bằng nhau (hoặc cặp góc đồng vị bằng nhau) thì hai đường thẳng song song."],
      ["Theo tiên đề Euclid, qua một điểm ngoài đường thẳng d vẽ được bao nhiêu đường thẳng song song với d?", "Đúng một đường thẳng", ["Không có đường nào", "Hai đường thẳng", "Vô số đường thẳng"], "Tiên đề Euclid: qua một điểm chỉ vẽ được một đường thẳng song song với đường thẳng cho trước."],
      ["Hình ảnh nào gợi ý hai đường thẳng song song?", "Vạch kẻ đường cho người đi bộ", ["Kim giờ và kim phút lúc 12 giờ", "Hai cạnh kề của quyển vở", "Đường chéo của hình vuông"], "Các vạch kẻ đường cho người đi bộ là những đoạn thẳng song song với nhau."],
      ["Nếu a // b và b // c thì quan hệ giữa a và c là gì?", "a // c", ["a cắt c", "a vuông góc với c", "a trùng với c"], "Hai đường thẳng cùng song song với đường thẳng thứ ba thì song song với nhau."],
    ]),
  ],
  science: [
    createStarterTopic("grade-7-sound-waves", "Lớp 7 · Âm thanh và sự truyền âm", "Nguồn âm, môi trường truyền âm, độ to và độ cao", ["7", "🔊", "〰"], [
      ["Âm thanh do đâu tạo ra?", "Vật dao động", ["Vật đứng yên", "Ánh sáng", "Không khí lạnh"], "Âm thanh do vật dao động tạo ra; vật ngừng dao động thì âm tắt."],
      ["Âm thanh KHÔNG truyền được trong môi trường nào?", "Chân không", ["Chất rắn", "Chất lỏng", "Chất khí"], "Âm cần môi trường vật chất để truyền nên không truyền được trong chân không."],
      ["Âm truyền nhanh nhất trong môi trường nào?", "Chất rắn", ["Chất khí", "Chất lỏng", "Chân không"], "Âm truyền nhanh nhất trong chất rắn, chậm hơn trong chất lỏng và chậm nhất trong chất khí."],
      ["Độ to của âm phụ thuộc vào yếu tố nào?", "Biên độ dao động", ["Tần số dao động", "Màu sắc vật phát âm", "Nhiệt độ môi trường"], "Âm to hay nhỏ phụ thuộc biên độ dao động; biên độ càng lớn âm càng to."],
      ["Vì sao áp tai xuống đất có thể nghe tiếng vó ngựa từ xa?", "Vì âm truyền qua đất nhanh và ít suy giảm", ["Vì đất khuếch đại âm thanh", "Vì ngựa chạy gây rung tai", "Vì âm không truyền trong không khí"], "Âm truyền trong chất rắn nhanh và ít suy giảm nên áp tai xuống đất nghe được tiếng động từ xa."],
    ]),
    createStarterTopic("grade-7-photosynthesis-factors", "Lớp 7 · Quang hợp và các yếu tố ảnh hưởng", "Quá trình quang hợp và điều kiện để cây quang hợp tốt", ["7", "🌱", "☀"], [
      ["Quang hợp là quá trình gì?", "Cây dùng nước, khí carbonic và ánh sáng tạo chất hữu cơ, thải oxygen", ["Cây hút oxygen thải khí carbonic", "Cây hút nước thải chất hữu cơ", "Cây dùng đất tạo ánh sáng"], "Quang hợp dùng nước, khí carbonic và năng lượng ánh sáng để tạo chất hữu cơ, đồng thời thải oxygen."],
      ["Yếu tố nào KHÔNG ảnh hưởng đến cường độ quang hợp?", "Màu sắc của chậu trồng cây", ["Ánh sáng", "Nhiệt độ", "Nồng độ khí carbonic"], "Cường độ quang hợp phụ thuộc ánh sáng, nhiệt độ, nồng độ khí carbonic và nước; màu chậu không ảnh hưởng."],
      ["Vì sao rau trồng nơi thiếu sáng thường còi cọc, lá vàng?", "Vì thiếu ánh sáng nên quang hợp yếu", ["Vì thiếu nước tưới", "Vì đất quá tốt", "Vì rau không cần ánh sáng"], "Thiếu ánh sáng làm quang hợp yếu, cây không tạo đủ chất hữu cơ nên còi cọc, lá vàng."],
      ["Khí nào cây hấp thụ khi quang hợp?", "Khí carbonic", ["Oxygen", "Nitrogen", "Hydrogen"], "Khi quang hợp, cây hấp thụ khí carbonic và nước, thải ra oxygen."],
      ["Muốn cây trồng quang hợp tốt, người trồng cần đảm bảo điều gì?", "Ánh sáng, nước, nhiệt độ phù hợp", ["Để cây trong bóng tối", "Không tưới nước", "Trồng thật dày đặc"], "Cần đảm bảo ánh sáng, nhiệt độ, khí carbonic và nước phù hợp để quang hợp diễn ra mạnh."],
    ]),
    createStarterTopic("grade-7-body-systems", "Lớp 7 · Các hệ cơ quan trong cơ thể người", "Chức năng các hệ cơ quan và sự phối hợp giữa chúng", ["7", "❤", "🦴"], [
      ["Hệ vận động gồm những cơ quan nào?", "Xương và cơ", ["Tim và mạch máu", "Phổi và khí quản", "Dạ dày và ruột"], "Hệ vận động gồm xương và cơ, giúp cơ thể cử động."],
      ["Cơ quan nào bơm máu đi khắp cơ thể?", "Tim", ["Phổi", "Gan", "Dạ dày"], "Tim thuộc hệ tuần hoàn, co bóp nhịp nhàng để bơm máu đi khắp cơ thể."],
      ["Khi chạy, vì sao tim đập nhanh hơn?", "Để đưa nhiều oxygen đến cơ bắp", ["Để làm mát cơ thể", "Để tiêu hóa thức ăn", "Để tăng chiều cao"], "Khi vận động, cơ cần nhiều oxygen nên tim đập nhanh để đưa máu giàu oxygen đến cơ bắp."],
      ["Hệ thần kinh có vai trò gì?", "Điều khiển và phối hợp hoạt động cơ thể", ["Bơm máu", "Tiêu hóa thức ăn", "Trao đổi khí"], "Hệ thần kinh tiếp nhận thông tin và điều khiển, phối hợp hoạt động của các cơ quan."],
      ["Vì sao một hệ cơ quan gặp vấn đề có thể ảnh hưởng các hệ khác?", "Vì các hệ liên hệ chặt chẽ với nhau", ["Vì các hệ hoạt động độc lập", "Vì cơ thể có quá nhiều hệ", "Vì các hệ không cần nhau"], "Các hệ cơ quan phối hợp và liên hệ chặt chẽ nên một hệ gặp vấn đề sẽ ảnh hưởng các hệ khác."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-7-argumentative-writing", "Lớp 7 · Viết đoạn văn nêu ý kiến", "Câu chủ đề, lí lẽ, ví dụ và kết đoạn thuyết phục", ["7", "💬", "✍"], [
      ["Đoạn văn nêu ý kiến cần có những thành phần nào?", "Câu chủ đề, lí lẽ, ví dụ và câu kết", ["Chỉ cần câu chủ đề", "Chỉ cần ví dụ", "Chỉ cần câu kết"], "Đoạn văn nêu ý kiến cần câu chủ đề nêu ý kiến, các câu triển khai lí lẽ, ví dụ và câu kết."],
      ["Câu chủ đề trong đoạn văn nêu ý kiến có nhiệm vụ gì?", "Nêu rõ ý kiến của người viết", ["Kể một câu chuyện", "Tả cảnh vật", "Đặt câu hỏi tu từ"], "Câu chủ đề nêu ý kiến, quan điểm của người viết về vấn đề cần bàn."],
      ["Lí lẽ trong đoạn văn nêu ý kiến cần đạt yêu cầu gì?", "Thuyết phục, tránh chung chung", ["Càng chung chung càng tốt", "Không cần liên quan ý kiến", "Chỉ cần viết thật dài"], "Ý kiến cần rõ ràng, lí lẽ thuyết phục, tránh chung chung, sáo rỗng."],
      ["Ví dụ trong đoạn văn nêu ý kiến có tác dụng gì?", "Làm cho lí lẽ thêm thuyết phục", ["Làm đoạn văn dài hơn", "Thay thế hoàn toàn lí lẽ", "Trang trí cho đẹp"], "Ví dụ cụ thể giúp lí lẽ thêm thuyết phục và dễ hiểu với người đọc."],
      ["Đề nào phù hợp để viết đoạn văn nêu ý kiến?", "Học sinh nên đọc sách mỗi ngày", ["Tả con mèo nhà em", "Kể về một chuyến đi", "Tả cảnh buổi sáng"], "Đề “Học sinh nên đọc sách mỗi ngày” cần nêu ý kiến kèm hai lí lẽ và một ví dụ để bảo vệ quan điểm."],
    ]),
    createStarterTopic("grade-7-folk-poems", "Lớp 7 · Ca dao Việt Nam", "Thể loại, nội dung và vẻ đẹp của ca dao", ["7", "🎭", "📜"], [
      ["Ca dao là gì?", "Thơ dân gian truyền miệng của nhân dân", ["Thơ của các nhà thơ nổi tiếng", "Truyện cổ tích", "Bài hát hiện đại"], "Ca dao là thơ dân gian truyền miệng, diễn tả tình cảm và kinh nghiệm sống của nhân dân."],
      ["Ca dao thường được viết theo thể thơ nào?", "Lục bát", ["Thơ bốn chữ", "Thơ tự do", "Thơ Đường luật"], "Ca dao thường theo thể lục bát, gần gũi với lời ăn tiếng nói dân gian."],
      ["Câu ca dao “Công cha như núi Thái Sơn / Nghĩa mẹ như nước trong nguồn chảy ra” nói về điều gì?", "Công ơn sinh thành của cha mẹ", ["Cảnh đẹp quê hương", "Thói xấu trong xã hội", "Kinh nghiệm lao động"], "Câu ca dao ví công cha như núi Thái Sơn, nghĩa mẹ như nước nguồn để nói công ơn sinh thành, dưỡng dục."],
      ["Cụm mở đầu “Thân em như...” trong ca dao thường dùng để làm gì?", "Ví von thân phận con người", ["Kể tên địa danh", "Chào hỏi người nghe", "Kết thúc bài ca"], "Nhiều câu ca dao mở đầu bằng “Thân em như...” để ví von thân phận, số phận con người."],
      ["Nội dung nào KHÔNG phải của ca dao?", "Thuyết minh cách dùng máy móc", ["Tình yêu quê hương", "Lao động sản xuất", "Châm biếm thói xấu"], "Ca dao diễn tả tình cảm, kinh nghiệm sống và châm biếm thói xấu; không có nội dung thuyết minh máy móc."],
    ]),
    createStarterTopic("grade-7-compound-words", "Lớp 7 · Từ ghép và từ láy", "Phân biệt từ ghép, từ láy và dùng từ chính xác", ["7", "🔤", "🖊"], [
      ["Từ nào sau đây là từ ghép?", "Nhà cửa", ["Xinh xắn", "Lấp lánh", "Rào rào"], "“Nhà cửa” gồm các tiếng có quan hệ về nghĩa nên là từ ghép; các từ còn lại lặp âm, vần nên là từ láy."],
      ["Từ nào sau đây là từ láy?", "Lấp lánh", ["Sách vở", "Mưa rào", "Nhà cửa"], "“Lấp lánh” lặp lại vần nên là từ láy; các từ còn lại gồm các tiếng quan hệ về nghĩa nên là từ ghép."],
      ["Điểm khác nhau cơ bản giữa từ ghép và từ láy là gì?", "Từ ghép quan hệ về nghĩa, từ láy lặp lại âm hoặc vần", ["Từ ghép luôn dài hơn từ láy", "Từ láy luôn có hai tiếng", "Từ ghép không có nghĩa"], "Từ ghép gồm các tiếng có quan hệ về nghĩa; từ láy lặp lại âm, vần hoặc cả âm vần."],
      ["“Rào rào” là từ láy thuộc loại nào?", "Từ láy tượng thanh", ["Từ ghép đẳng lập", "Từ ghép chính phụ", "Từ đơn"], "“Rào rào” mô phỏng âm thanh của mưa nên là từ láy tượng thanh."],
      ["Vì sao cần phân biệt từ ghép và từ láy?", "Để dùng từ chính xác, viết văn giàu hình ảnh", ["Để viết câu dài hơn", "Để thuộc nhiều từ mới", "Để đọc nhanh hơn"], "Phân biệt từ ghép và từ láy giúp dùng từ chính xác, viết văn giàu hình ảnh."],
    ]),
  ],
  english: [
    createStarterTopic("grade-7-comparatives", "Lớp 7 · So sánh hơn với tính từ ngắn", "Cấu trúc -er than, more than và tính từ bất quy tắc", ["7", "ABC", "📈"], [
      ["Chọn câu đúng: My house is ___ than yours.", "bigger", ["big", "biggest", "more big"], "Tính từ ngắn dùng dạng -er trong so sánh hơn: bigger than."],
      ["Chọn câu đúng: This test is ___ difficult than the last one.", "more", ["most", "-er", "difficultest"], "Tính từ dài dùng more + tính từ + than: more difficult than."],
      ["Dạng so sánh hơn của “good” là gì?", "better", ["gooder", "more good", "best"], "Good là tính từ bất quy tắc: good → better → the best."],
      ["Chọn câu đúng: Today is ___ than yesterday.", "hotter", ["hot", "hottest", "more hot"], "Hot là tính từ ngắn, gấp đôi phụ âm cuối khi thêm -er: hotter than."],
      ["Dạng so sánh hơn của “bad” là gì?", "worse", ["badder", "more bad", "worst"], "Bad là tính từ bất quy tắc: bad → worse → the worst."],
    ]),
    createStarterTopic("grade-7-superlatives", "Lớp 7 · So sánh nhất", "Cấu trúc the -est, the most và các dạng bất quy tắc", ["7", "ABC", "🏆"], [
      ["Chọn câu đúng: Mount Everest is ___ mountain in the world.", "the highest", ["higher", "high", "the higher"], "So sánh nhất dùng the + -est khi so sánh một vật với cả nhóm."],
      ["Chọn câu đúng: This is ___ interesting book I have ever read.", "the most", ["more", "most", "the more"], "Tính từ dài dùng the most + tính từ: the most interesting."],
      ["Dạng so sánh nhất của “good” là gì?", "the best", ["the better", "goodest", "better"], "Good là tính từ bất quy tắc: good → better → the best."],
      ["Khi nào dùng so sánh nhất?", "Khi so sánh một vật với cả nhóm", ["Khi so sánh hai vật", "Khi miêu tả một vật", "Khi hỏi đường"], "Dùng so sánh nhất khi so sánh một vật với cả nhóm, ví dụ ngọn núi cao nhất thế giới."],
      ["Dạng so sánh nhất của “bad” là gì?", "the worst", ["the worse", "baddest", "worser"], "Bad là tính từ bất quy tắc: bad → worse → the worst."],
    ]),
    createStarterTopic("grade-7-future-simple", "Lớp 7 · Tương lai đơn với will", "Will + động từ nguyên mẫu cho dự đoán, quyết định, lời hứa", ["7", "ABC", "🔮"], [
      ["Chọn câu đúng: It is raining. I ___ take an umbrella.", "will", ["takes", "taking", "to take"], "Will + động từ nguyên mẫu diễn tả quyết định tức thì."],
      ["Dạng phủ định của “will” là gì?", "won't", ["don't", "not will", "willn't"], "Phủ định của will là won't + động từ nguyên mẫu."],
      ["Câu nào diễn tả một lời hứa?", "I will help you with your homework.", ["I help you yesterday.", "I am helping you now.", "I helped you last week."], "Will + động từ nguyên mẫu diễn tả lời hứa về việc sẽ làm trong tương lai."],
      ["Điểm khác nhau giữa “will” và “be going to” là gì?", "Will cho quyết định tức thì, be going to cho dự định đã có kế hoạch", ["Will dùng cho quá khứ", "Be going to dùng cho hiện tại", "Hai cấu trúc giống hệt nhau"], "Will diễn tả quyết định tức thì và dự đoán; be going to diễn tả dự định đã có kế hoạch từ trước."],
      ["Động từ sau “will” ở dạng nào?", "Nguyên mẫu không to", ["Thêm -s", "Thêm -ing", "Thêm -ed"], "Sau will luôn là động từ nguyên mẫu, không thêm -s, -ing hay -ed."],
    ]),
  ],
  history: [
    createStarterTopic("grade-7-ly-dynasty", "Lớp 7 · Nhà Lý: xây dựng đất nước", "Dời đô Thăng Long, giáo dục và kháng chiến chống Tống", ["7", "🏯", "📜"], [
      ["Ai là người sáng lập triều Lý?", "Lý Công Uẩn", ["Lý Thường Kiệt", "Đinh Bộ Lĩnh", "Lê Hoàn"], "Năm 1009, Lý Công Uẩn lên ngôi, lập triều Lý."],
      ["Năm 1010, nhà Lý dời đô từ đâu đến đâu?", "Từ Hoa Lư ra Đại La (Thăng Long)", ["Từ Thăng Long vào Hoa Lư", "Từ Cổ Loa ra Thăng Long", "Từ Đại La vào Phú Xuân"], "Năm 1010, Lý Công Uẩn dời đô từ Hoa Lư ra Đại La, đổi tên thành Thăng Long."],
      ["Văn Miếu – Quốc Tử Giám được xây dựng dưới thời nào?", "Thời Lý (1070–1076)", ["Thời Đinh", "Thời Trần", "Thời Lê sơ"], "Dưới thời Lý, Văn Miếu (1070) và Quốc Tử Giám (1076) được xây dựng, đánh dấu bước phát triển của giáo dục."],
      ["Ai chỉ huy kháng chiến chống quân Tống năm 1075–1077?", "Lý Thường Kiệt", ["Trần Hưng Đạo", "Ngô Quyền", "Lê Lợi"], "Năm 1075–1077, Lý Thường Kiệt chỉ huy quân dân kháng chiến chống Tống thắng lợi."],
      ["Bài thơ “Nam quốc sơn hà” gắn với sự kiện nào?", "Kháng chiến chống Tống thời Lý", ["Khởi nghĩa Lam Sơn", "Chiến thắng Bạch Đằng 1288", "Dời đô ra Thăng Long"], "Bài thơ “Nam quốc sơn hà” gắn với cuộc kháng chiến chống Tống thời Lý, khẳng định chủ quyền đất nước."],
    ]),
    createStarterTopic("grade-7-tran-dynasty", "Lớp 7 · Nhà Trần và ba lần kháng chiến chống Mông – Nguyên", "Kế sách vườn không nhà trống và tinh thần đoàn kết", ["7", "⚔", "🏯"], [
      ["Nhà Trần thay nhà Lý vào năm nào?", "1226", ["1009", "1010", "1400"], "Nhà Trần thay nhà Lý năm 1226, mở ra triều đại mới."],
      ["Quân Mông – Nguyên xâm lược Đại Việt mấy lần?", "Ba lần (1258, 1285, 1287–1288)", ["Một lần", "Hai lần", "Bốn lần"], "Quân Mông – Nguyên ba lần xâm lược (1258, 1285, 1287–1288) đều bị quân dân ta đánh bại."],
      ["Kế sách “vườn không nhà trống” có nghĩa là gì?", "Rút dân và lương thực để giặc không cướp được gì", ["Trồng cây trong vườn nhà", "Để nhà trống cho giặc ở", "Xây thành cao hào sâu"], "“Vườn không nhà trống” là rút hết người và lương thực, khiến giặc thiếu ăn, kiệt sức rồi phản công."],
      ["Hội nghị Diên Hồng (1284) thể hiện điều gì?", "Quyết tâm đánh giặc của toàn dân", ["Ý định đầu hàng giặc", "Kế hoạch dời đô", "Lễ đăng quang của vua"], "Hội nghị Diên Hồng (1284) tập hợp các bô lão, thể hiện quyết tâm đánh giặc của toàn dân."],
      ["Ai là vị tướng tài chỉ huy kháng chiến chống Mông – Nguyên?", "Trần Hưng Đạo", ["Lý Thường Kiệt", "Nguyễn Huệ", "Lê Hoàn"], "Trần Hưng Đạo là vị tướng tài chỉ huy quân dân ba lần đánh bại quân Mông – Nguyên."],
    ]),
    createStarterTopic("grade-7-champa-culture", "Lớp 7 · Văn hóa Chăm-pa", "Tháp Chàm, tín ngưỡng và di sản Mỹ Sơn", ["7", "🗿", "🏛"], [
      ["Vương quốc Chăm-pa hình thành ở khu vực nào?", "Miền Trung Việt Nam", ["Đồng bằng sông Hồng", "Tây Nguyên", "Đồng bằng sông Cửu Long"], "Vương quốc Chăm-pa hình thành ở miền Trung, nổi tiếng với các tháp Chàm."],
      ["Tháp Chàm được xây bằng vật liệu gì?", "Gạch nung", ["Đá hoa cương", "Gỗ lim", "Bê tông"], "Tháp Chàm xây bằng gạch nung xếp khít mà không cần vữa, bền vững hàng trăm năm."],
      ["Thánh địa Mỹ Sơn nằm ở tỉnh nào?", "Quảng Nam", ["Bình Định", "Ninh Thuận", "Khánh Hòa"], "Thánh địa Mỹ Sơn ở Quảng Nam là trung tâm tôn giáo của vương quốc Chăm-pa."],
      ["Người Chăm-pa xưa chủ yếu theo tôn giáo nào?", "Đạo Hindu", ["Đạo Phật", "Đạo Thiên Chúa", "Đạo Hồi"], "Người Chăm theo đạo Hindu, thể hiện qua các tháp thờ thần Shiva."],
      ["Mỹ Sơn được UNESCO công nhận Di sản văn hóa thế giới vào năm nào?", "1999", ["1993", "2003", "2010"], "Thánh địa Mỹ Sơn được UNESCO công nhận Di sản văn hóa thế giới năm 1999."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-7-vietnam-overview", "Lớp 7 · Việt Nam: vị trí và tự nhiên khái quát", "Vị trí Đông Nam Á, địa hình và khí hậu phân hóa", ["7", "🗺", "🇻🇳"], [
      ["Việt Nam nằm ở khu vực nào của châu Á?", "Đông Nam Á", ["Đông Bắc Á", "Nam Á", "Tây Á"], "Việt Nam nằm ở Đông Nam Á, có đường bờ biển dài."],
      ["Địa hình Việt Nam có đặc điểm gì?", "Đa dạng: núi, trung du, đồng bằng", ["Chỉ có đồng bằng", "Chỉ có núi cao", "Chỉ có cao nguyên"], "Địa hình Việt Nam đa dạng với núi, trung du và đồng bằng."],
      ["Khí hậu Việt Nam thuộc kiểu nào?", "Nhiệt đới ẩm gió mùa", ["Ôn đới hải dương", "Hàn đới", "Địa Trung Hải"], "Việt Nam có khí hậu nhiệt đới ẩm gió mùa, phân hóa theo miền."],
      ["Điểm khác nhau về khí hậu giữa miền Bắc và miền Nam là gì?", "Miền Bắc có mùa đông lạnh, miền Nam nóng quanh năm", ["Miền Bắc nóng quanh năm, miền Nam có tuyết", "Hai miền giống hệt nhau", "Miền Nam lạnh hơn miền Bắc"], "Khí hậu phân hóa theo miền: miền Bắc có mùa đông lạnh, miền Nam nóng quanh năm."],
      ["Thiên nhiên Việt Nam giàu tài nguyên nhưng cũng có mặt hạn chế nào?", "Chịu nhiều thiên tai", ["Không có sông ngòi", "Không có biển", "Không có rừng"], "Thiên nhiên Việt Nam giàu tài nguyên nhưng cũng chịu nhiều thiên tai như bão, lũ."],
    ]),
    createStarterTopic("grade-7-southeast-asia", "Lớp 7 · Đông Nam Á: tự nhiên và dân cư", "Vành đai lửa, khí hậu nóng ẩm và văn hóa đa dạng", ["7", "🌋", "🌏"], [
      ["Đông Nam Á gồm bao nhiêu quốc gia?", "11 quốc gia", ["5 quốc gia", "8 quốc gia", "15 quốc gia"], "Đông Nam Á gồm 11 quốc gia, trong đó có Việt Nam."],
      ["Vì sao Đông Nam Á hay xảy ra động đất, núi lửa?", "Vì nằm trên “vành đai lửa” Thái Bình Dương", ["Vì có nhiều sông lớn", "Vì khí hậu nóng ẩm", "Vì dân số đông"], "Khu vực nằm trên “vành đai lửa” Thái Bình Dương nên nhiều động đất, núi lửa."],
      ["Quốc gia nào được gọi là “quốc gia vạn đảo”?", "Indonesia", ["Thái Lan", "Malaysia", "Philippines"], "Indonesia là quốc gia vạn đảo với hàng nghìn hòn đảo lớn nhỏ."],
      ["Khí hậu đặc trưng của Đông Nam Á là gì?", "Nóng ẩm, rừng rậm phát triển", ["Lạnh khô quanh năm", "Ôn hòa bốn mùa", "Hoang mạc khô hạn"], "Đông Nam Á có khí hậu nóng ẩm, rừng rậm nhiệt đới phát triển."],
      ["Đặc điểm dân cư – xã hội nổi bật của Đông Nam Á là gì?", "Đông dân, đa dạng văn hóa, kinh tế phát triển nhanh", ["Dân số ít, văn hóa đồng nhất", "Kinh tế trì trệ", "Không có giao thương"], "Khu vực đông dân, đa dạng văn hóa và có nền kinh tế đang phát triển nhanh."],
    ]),
    createStarterTopic("grade-7-natural-disasters", "Lớp 7 · Thiên tai và phòng tránh", "Bão, lũ lụt, hạn hán và cách ứng phó an toàn", ["7", "🌀", "⛈"], [
      ["Thiên tai nào thường gặp ở Việt Nam?", "Bão và lũ lụt", ["Động đất mạnh", "Núi lửa phun trào", "Bão tuyết"], "Thiên tai thường gặp ở Việt Nam là bão, lũ lụt, hạn hán và sạt lở đất."],
      ["Bão gây ra những thiệt hại nào?", "Gió mạnh, mưa lớn gây ngập lụt", ["Nắng nóng kéo dài", "Rét đậm rét hại", "Sương mù dày đặc"], "Bão gây gió mạnh, mưa lớn, dẫn đến ngập lụt và thiệt hại nhà cửa, hoa màu."],
      ["Vùng nào dễ bị lũ lụt đe dọa nhất?", "Vùng trũng, ven sông", ["Vùng núi cao", "Cao nguyên đá", "Vùng đồi khô"], "Lũ lụt đe dọa vùng trũng, ven sông nơi nước dễ dâng cao."],
      ["Trước khi bão vào, gia đình cần làm gì?", "Chằng chống nhà cửa, cắt tỉa cây gần nhà", ["Mở toang cửa đón gió", "Ra biển xem sóng", "Chặt hết cây trong vườn"], "Trước khi bão vào cần chằng chống nhà cửa, cắt tỉa cành cây gần nhà để giảm thiệt hại."],
      ["Khi có lệnh sơ tán do lũ lụt, em cần làm gì?", "Nghe theo hướng dẫn, sơ tán ngay đến nơi an toàn", ["Ở lại nhà trông đồ đạc", "Ra sông xem nước lũ", "Chờ nước rút mới đi"], "Khi có lệnh sơ tán, cần nghe theo hướng dẫn và di chuyển ngay đến nơi an toàn."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-7-binary-numbers", "Lớp 7 · Số nhị phân và biểu diễn thông tin", "Bit, byte và cách máy tính mã hóa thông tin", ["7", "💻", "🔢"], [
      ["Máy tính lưu trữ mọi thông tin dưới dạng nào?", "Số nhị phân gồm hai chữ số 0 và 1", ["Số thập phân từ 0 đến 9", "Chữ cái ABC", "Hình vẽ"], "Máy tính lưu trữ mọi thông tin dưới dạng số nhị phân gồm hai chữ số 0 và 1."],
      ["Một bit là gì?", "Một chữ số nhị phân (0 hoặc 1)", ["Tám chữ số nhị phân", "Một chữ cái", "Một con số thập phân"], "Mỗi chữ số nhị phân gọi là một bit; 8 bit tạo thành 1 byte."],
      ["1 byte bằng bao nhiêu bit?", "8 bit", ["2 bit", "10 bit", "16 bit"], "8 bit tạo thành 1 byte, là đơn vị cơ bản để đo dung lượng."],
      ["Số nhị phân 101 đổi sang thập phân bằng bao nhiêu?", "5", ["3", "4", "101"], "101 ở hệ nhị phân = 1×4 + 0×2 + 1×1 = 5 ở hệ thập phân."],
      ["Hình ảnh trong máy tính được lưu trữ như thế nào?", "Mã hóa thành dãy bit", ["Vẽ lại bằng tay", "Chụp ảnh rồi dán giấy", "Lưu bằng lời nói"], "Chữ cái, số, hình ảnh đều được mã hóa thành dãy bit để máy tính lưu trữ và xử lí."],
    ]),
    createStarterTopic("grade-7-flowcharts", "Lớp 7 · Lưu đồ thuật toán", "Các hình khối và cách vẽ lưu đồ mô tả thuật toán", ["7", "📊", "➡"], [
      ["Trong lưu đồ, hình bầu dục dùng để biểu diễn gì?", "Bắt đầu hoặc kết thúc", ["Bước xử lí", "Rẽ nhánh điều kiện", "Nhập dữ liệu"], "Hình bầu dục biểu diễn điểm bắt đầu hoặc kết thúc của thuật toán."],
      ["Hình thoi trong lưu đồ dùng để biểu diễn gì?", "Rẽ nhánh theo điều kiện", ["Bắt đầu chương trình", "Tính toán", "In kết quả"], "Hình thoi biểu diễn rẽ nhánh: kiểm tra điều kiện đúng hay sai để chọn hướng đi tiếp."],
      ["Hình chữ nhật trong lưu đồ dùng để biểu diễn gì?", "Bước xử lí, tính toán", ["Bắt đầu", "Kết thúc", "Rẽ nhánh"], "Hình chữ nhật biểu diễn bước xử lí như tính toán, gán giá trị cho biến."],
      ["Mũi tên trong lưu đồ có ý nghĩa gì?", "Chỉ hướng đi của các bước", ["Trang trí cho đẹp", "Đánh dấu lỗi sai", "Chia lưu đồ thành phần"], "Mũi tên nối các hình khối, chỉ hướng đi từ bước này sang bước tiếp theo."],
      ["Vẽ lưu đồ trước khi viết chương trình có lợi ích gì?", "Nhìn rõ các bước, tránh sót và sai logic", ["Làm chương trình chạy nhanh hơn", "Không cần viết code nữa", "Máy tính tự hiểu ý"], "Vẽ lưu đồ giúp nhìn rõ các bước trước khi viết chương trình, tránh sót bước và sai logic."],
    ]),
    createStarterTopic("grade-7-digital-citizenship", "Lớp 7 · Công dân số có trách nhiệm", "An toàn mạng, chống tin giả và ứng xử văn minh", ["7", "🔒", "🌐"], [
      ["Công dân số có trách nhiệm là người như thế nào?", "Tham gia mạng an toàn, tôn trọng và có trách nhiệm", ["Chia sẻ mọi thứ lên mạng", "Dùng mạng ẩn danh để trêu chọc", "Tải phần mềm lậu"], "Công dân số là người tham gia môi trường mạng một cách an toàn, tôn trọng và có trách nhiệm."],
      ["Thông tin nào KHÔNG nên chia sẻ công khai trên mạng?", "Địa chỉ nhà và số điện thoại", ["Sở thích đọc sách", "Món ăn yêu thích", "Đội bóng yêu thích"], "Cần bảo vệ thông tin cá nhân như địa chỉ nhà, số điện thoại để giữ an toàn cho bản thân."],
      ["Khi thấy một tin giật gân chưa kiểm chứng, em nên làm gì?", "Không chia sẻ, kiểm chứng từ nguồn tin cậy", ["Chia sẻ ngay cho nhiều người", "Bình luận chê bai người đăng", "Gửi cho bạn bè để câu like"], "Không lan truyền tin giả; cần kiểm chứng từ nguồn tin cậy trước khi chia sẻ."],
      ["Khi thấy nội dung xấu trên mạng, em nên làm gì?", "Báo cáo thay vì chia sẻ", ["Chia sẻ để mọi người cùng xem", "Bình luận cổ vũ", "Lưu về máy"], "Khi thấy nội dung xấu, hãy báo cáo cho nền tảng thay vì chia sẻ lan truyền."],
      ["Tôn trọng bản quyền trên mạng thể hiện ở việc nào?", "Không đăng lại bài của người khác khi chưa xin phép", ["Tải nhạc lậu về nghe", "Chép bài văn mẫu nộp cô", "Dùng ảnh người khác làm ảnh đại diện"], "Tôn trọng bản quyền nghĩa là không sao chép, đăng lại sản phẩm của người khác khi chưa được phép."],
    ]),
  ],
  technology: [
    createStarterTopic("grade-7-crop-seasons", "Lớp 7 · Mùa vụ và lịch thời vụ", "Các vụ gieo trồng và lợi ích của đúng thời vụ", ["7", "🌱", "📅"], [
      ["Mùa vụ là gì?", "Khoảng thời gian từ gieo trồng đến thu hoạch của cây", ["Thời gian nghỉ của đất", "Mùa mưa trong năm", "Ngày hội làng"], "Mùa vụ là khoảng thời gian gieo trồng đến thu hoạch của cây."],
      ["Ở miền Bắc có những vụ chính nào?", "Vụ xuân, vụ mùa, vụ đông", ["Vụ hè, vụ thu", "Chỉ có một vụ", "Vụ đông xuân, hè thu"], "Ở miền Bắc có vụ xuân, vụ mùa, vụ đông; miền Nam chủ yếu vụ đông xuân và hè thu."],
      ["Gieo trồng đúng thời vụ mang lại lợi ích gì?", "Cây phát triển tốt, ít sâu bệnh, năng suất cao", ["Không cần chăm sóc", "Cây lớn nhanh gấp đôi", "Không cần tưới nước"], "Gieo trồng đúng thời vụ giúp cây phát triển tốt, ít sâu bệnh, năng suất cao."],
      ["Vì sao miền Bắc và miền Nam có lịch thời vụ khác nhau?", "Vì khí hậu hai miền khác nhau", ["Vì đất hai miền giống nhau", "Vì nông dân thích khác nhau", "Vì giống cây như nhau"], "Khí hậu miền Bắc có mùa đông lạnh, miền Nam nóng quanh năm nên lịch thời vụ khác nhau."],
      ["Nếu gieo trồng trái thời vụ, điều gì có thể xảy ra?", "Cây còi cọc, nhiều sâu bệnh, năng suất thấp", ["Cây vẫn tốt như thường", "Không cần bón phân", "Thu hoạch sớm hơn"], "Trái thời vụ khiến cây gặp thời tiết bất lợi, dễ còi cọc, nhiều sâu bệnh, năng suất thấp."],
    ]),
    createStarterTopic("grade-7-pest-control", "Lớp 7 · Phòng trừ sâu bệnh hại cây", "Biện pháp canh tác, sinh học và dùng thuốc an toàn", ["7", "🐛", "🌿"], [
      ["Biện pháp canh tác nào giúp phòng trừ sâu bệnh?", "Luân canh và vệ sinh đồng ruộng", ["Trồng một loại cây liên tục", "Để cỏ dại mọc tự nhiên", "Không bao giờ làm đất"], "Luân canh, vệ sinh đồng ruộng là biện pháp canh tác giúp cắt đứt nguồn sâu bệnh."],
      ["Biện pháp sinh học trong phòng trừ sâu bệnh là gì?", "Dùng thiên địch tiêu diệt sâu hại", ["Phun thật nhiều thuốc", "Đốt hết đồng ruộng", "Bỏ mặc cây trồng"], "Biện pháp sinh học dùng thiên địch như ong kí sinh, ếch nhái tiêu diệt sâu hại, an toàn cho môi trường."],
      ["Khi dùng thuốc bảo vệ thực vật cần tuân thủ nguyên tắc nào?", "Đúng loại, đúng liều, đúng lúc", ["Càng nhiều càng tốt", "Phun lúc trời mưa to", "Dùng loại nào cũng được"], "Dùng thuốc phải đúng loại, đúng liều, đúng lúc và đảm bảo thời gian cách li."],
      ["“Thời gian cách li” sau khi phun thuốc có nghĩa là gì?", "Khoảng thời gian phải chờ trước khi thu hoạch", ["Thời gian nghỉ của nông dân", "Thời gian cây ra hoa", "Thời gian tưới nước"], "Thời gian cách li là khoảng thời gian phải chờ sau khi phun thuốc mới được thu hoạch để đảm bảo an toàn."],
      ["Vì sao nên ưu tiên biện pháp canh tác và sinh học trước?", "Vì an toàn cho người, cây trồng và môi trường", ["Vì rẻ hơn thuốc", "Vì làm nhanh hơn", "Vì không cần kiến thức"], "Ưu tiên biện pháp an toàn (canh tác, sinh học) để bảo vệ sức khỏe con người và môi trường."],
    ]),
    createStarterTopic("grade-7-livestock-breeds", "Lớp 7 · Giống vật nuôi và chọn giống", "Vai trò của giống và cách chăm sóc vật nuôi", ["7", "🐄", "🥚"], [
      ["Giống vật nuôi có vai trò gì?", "Quyết định năng suất chăn nuôi", ["Quyết định màu chuồng", "Không có vai trò gì", "Chỉ để làm cảnh"], "Giống vật nuôi quyết định năng suất: gà đẻ trứng, lợn thịt, bò sữa."],
      ["Khi chọn giống vật nuôi cần xem xét điều gì?", "Nguồn gốc, sức khỏe, đặc điểm ngoại hình", ["Màu sắc chuồng trại", "Giá thức ăn", "Thời tiết hôm đó"], "Chọn giống cần xem nguồn gốc rõ ràng, con giống khỏe mạnh, ngoại hình đạt chuẩn."],
      ["Chăm sóc vật nuôi tốt gồm những việc nào?", "Chuồng sạch, thức ăn đủ chất, tiêm phòng đầy đủ", ["Nhốt chung thật đông", "Cho ăn thừa thãi", "Không cần vệ sinh"], "Chăm sóc tốt gồm chuồng trại sạch sẽ, thức ăn đủ chất và tiêm phòng đầy đủ."],
      ["Vì sao phải tiêm phòng đầy đủ cho vật nuôi?", "Để phòng bệnh, vật nuôi khỏe mạnh", ["Để vật nuôi lớn nhanh gấp đôi", "Để thịt ngon hơn", "Để không cần cho ăn"], "Tiêm phòng đầy đủ giúp vật nuôi phòng bệnh, phát triển khỏe mạnh."],
      ["Muốn nuôi lấy trứng nên chọn giống gà nào?", "Giống gà đẻ trứng chuyên dụng", ["Giống gà chọi", "Giống gà thịt", "Gà rừng"], "Mỗi giống có thế mạnh riêng: muốn lấy trứng thì chọn giống gà đẻ trứng chuyên dụng."],
    ]),
  ],
  civics: [
    createStarterTopic("grade-7-solidarity", "Lớp 7 · Đoàn kết, tương trợ", "Chung sức vì mục tiêu chung và giúp nhau lúc khó khăn", ["7", "🤝", "💪"], [
      ["Đoàn kết có nghĩa là gì?", "Chung sức vì mục tiêu chung", ["Ai làm việc nấy", "Tranh giành với nhau", "Chỉ lo cho mình"], "Đoàn kết là chung sức, đồng lòng vì mục tiêu chung."],
      ["Tương trợ có nghĩa là gì?", "Giúp đỡ nhau lúc khó khăn", ["Nhờ vả người khác", "Cho vay lấy lãi", "Khen ngợi nhau"], "Tương trợ là giúp đỡ nhau lúc khó khăn, hoạn nạn."],
      ["Câu tục ngữ nào thể hiện tinh thần tương trợ?", "Lá lành đùm lá rách", ["Có công mài sắt", "Ăn quả nhớ kẻ trồng cây", "Uống nước nhớ nguồn"], "“Lá lành đùm lá rách” thể hiện truyền thống giúp đỡ người khó khăn hơn mình."],
      ["Tinh thần đoàn kết trong lớp học thể hiện ở việc nào?", "Cả lớp cùng giúp bạn yếu tiến bộ", ["Chỉ chơi với bạn giỏi", "Giấu bài không cho bạn xem", "Cười khi bạn bị điểm kém"], "Trong lớp, đoàn kết giúp mọi hoạt động thành công, như cùng giúp bạn yếu tiến bộ."],
      ["Khi đồng bào bị thiên tai, tinh thần tương trợ thể hiện thế nào?", "Quyên góp, ủng hộ giúp đồng bào vượt khó khăn", ["Mặc kệ vì ở xa", "Chờ người khác giúp", "Chỉ cầu mong"], "Trong xã hội, tương trợ giúp vượt qua thiên tai, khó khăn như quyên góp ủng hộ đồng bào."],
    ]),
    createStarterTopic("grade-7-self-reliance", "Lớp 7 · Tự lập trong sinh hoạt", "Tự làm việc trong khả năng và rèn tính tự tin", ["7", "💪", "🌟"], [
      ["Tự lập có nghĩa là gì?", "Tự làm những việc trong khả năng, không ỷ lại người khác", ["Không cần ai giúp đỡ bao giờ", "Sống một mình", "Không nghe lời ai"], "Tự lập là tự làm những việc trong khả năng mà không ỷ lại người khác."],
      ["Việc nào thể hiện tính tự lập của học sinh?", "Tự giác học bài, chuẩn bị đồ dùng", ["Chờ bố mẹ nhắc mới học", "Nhờ bạn làm bài hộ", "Đổ lỗi khi làm sai"], "Tự học, tự chăm sóc bản thân, tự giải quyết vấn đề là biểu hiện của tự lập."],
      ["Người tự lập được mọi người đánh giá thế nào?", "Tự tin và được mọi người tin tưởng", ["Kiêu căng, khó gần", "Lười biếng", "Thiếu trách nhiệm"], "Tự lập giúp tự tin, được mọi người tin tưởng và quý mến."],
      ["Nên rèn tính tự lập từ đâu?", "Từ việc nhỏ rồi tăng dần", ["Đợi lớn mới rèn", "Làm ngay việc thật khó", "Chỉ rèn khi bị ép"], "Nên bắt đầu từ việc nhỏ và tăng dần độ khó để rèn tính tự lập bền vững."],
      ["Tự lập có nghĩa là không bao giờ nhờ người khác giúp không?", "Không, vẫn có thể nhờ giúp khi việc quá sức", ["Đúng, tự lập là tự làm tất cả", "Đúng, nhờ giúp là yếu đuối", "Đúng, không được hỏi ai"], "Tự lập là tự làm việc trong khả năng; việc quá sức vẫn nên nhờ người khác giúp đỡ."],
    ]),
    createStarterTopic("grade-7-law-respect", "Lớp 7 · Tôn trọng pháp luật", "Hiểu pháp luật và sống theo pháp luật mỗi ngày", ["7", "⚖", "📜"], [
      ["Pháp luật là gì?", "Quy tắc xử sự chung do Nhà nước ban hành, mọi người phải tuân theo", ["Lời khuyên của thầy cô", "Nội quy của một gia đình", "Thói quen của làng xóm"], "Pháp luật là quy tắc xử sự chung do Nhà nước ban hành, mọi người phải tuân theo."],
      ["Việc nào thể hiện tôn trọng pháp luật khi tham gia giao thông?", "Đội mũ bảo hiểm khi đi xe máy", ["Vượt đèn đỏ khi vội", "Đi ngược chiều cho nhanh", "Không cần bằng lái"], "Đội mũ bảo hiểm là tuân thủ luật giao thông, thể hiện tôn trọng pháp luật."],
      ["Học sinh tôn trọng pháp luật thể hiện ở việc nào?", "Không vi phạm nội quy nhà trường", ["Quay cóp trong giờ kiểm tra", "Xả rác bừa bãi", "Đánh nhau với bạn"], "Không vi phạm nội quy, không xả rác bừa bãi là những việc thể hiện tôn trọng pháp luật."],
      ["Sống theo pháp luật mang lại lợi ích gì cho xã hội?", "Xã hội trật tự, an toàn", ["Mọi người được làm tùy thích", "Không cần công an", "Ai mạnh người đó thắng"], "Sống theo pháp luật giúp xã hội trật tự, an toàn cho mọi người."],
      ["Ai phải tuân theo pháp luật?", "Mọi công dân", ["Chỉ người lớn", "Chỉ học sinh", "Chỉ người vi phạm"], "Pháp luật là quy tắc chung nên mọi công dân đều phải tuân theo."],
    ]),
  ],
  "physical-education": [
    createStarterTopic("grade-7-volleyball-basics", "Lớp 7 · Bóng chuyền: chuyền bóng cơ bản", "Tư thế tay và kĩ thuật chuyền cao tay, thấp tay", ["7", "🏐", "🤾"], [
      ["Khi chuyền bóng cao tay, các ngón tay tạo hình gì?", "Hình tam giác", ["Hình vuông", "Nắm chặt thành nắm đấm", "Duỗi thẳng"], "Các ngón tay xòe tạo hình tam giác để đỡ bóng chắc chắn."],
      ["Chạm bóng bằng bộ phận nào của tay?", "Đầu ngón tay", ["Lòng bàn tay", "Cổ tay", "Khuỷu tay"], "Chạm bóng bằng đầu ngón tay, dùng lực cổ tay và chân đẩy bóng đi."],
      ["Khi chuyền bóng, mắt cần làm gì?", "Nhìn theo bóng", ["Nhắm mắt lại", "Nhìn xuống đất", "Nhìn đồng đội"], "Đứng vững, mắt nhìn bóng để đón và chuyền bóng chính xác."],
      ["Khi nào dùng chuyền thấp tay?", "Khi bóng bay thấp", ["Khi muốn đập bóng", "Khi phát bóng", "Khi bóng bay cao"], "Chuyền cao tay cho đồng đội đập bóng; chuyền thấp tay khi bóng bay thấp."],
      ["Lực chuyền bóng chủ yếu đến từ đâu?", "Cổ tay và chân", ["Chỉ từ cánh tay", "Chỉ từ vai", "Từ đầu"], "Chuyền bóng dùng lực cổ tay kết hợp với chân để bóng đi đúng hướng."],
    ]),
    createStarterTopic("grade-7-high-jump", "Lớp 7 · Nhảy cao và tiếp đất an toàn", "Các giai đoạn nhảy cao và kĩ thuật tiếp đất", ["7", "🦘", "🏃"], [
      ["Nhảy cao gồm những giai đoạn nào?", "Chạy đà, giậm nhảy, bay qua xà, tiếp đất", ["Chạy đà rồi dừng lại", "Nhảy tại chỗ", "Chỉ có tiếp đất"], "Nhảy cao gồm chạy đà lấy đà, giậm nhảy, bay qua xà và tiếp đất an toàn."],
      ["Khi giậm nhảy, dùng chân nào?", "Chân xa xà", ["Chân gần xà", "Cả hai chân", "Chân nào cũng được"], "Giậm nhảy bằng chân xa xà, đồng thời vung chân lăng mạnh để nâng người qua xà."],
      ["Tiếp đất an toàn thực hiện thế nào?", "Chân giậm chạm đất trước rồi đến chân lăng, chùng gối", ["Tiếp đất bằng đầu", "Duỗi thẳng gối", "Nhảy xuống thật mạnh"], "Tiếp đất bằng chân giậm rồi đến chân lăng, chùng gối để giảm chấn động."],
      ["Trước khi tập nhảy cao cần kiểm tra điều gì?", "Đệm đã đặt đúng vị trí", ["Xà phải thật cao", "Sân phải thật trơn", "Không cần kiểm tra gì"], "Chỉ tập khi đệm đã đặt đúng vị trí để đảm bảo an toàn khi tiếp đất."],
      ["Chân lăng trong nhảy cao có tác dụng gì?", "Vung mạnh giúp nâng người qua xà", ["Để trang trí", "Để chạm vào xà", "Không có tác dụng"], "Vung chân lăng mạnh giúp tạo đà nâng người bay qua xà."],
    ]),
    createStarterTopic("grade-7-fitness-testing", "Lớp 7 · Kiểm tra thể lực đơn giản", "Các bài kiểm tra và cách theo dõi tiến bộ", ["7", "⏱", "💪"], [
      ["Bài chạy ngắn dùng để kiểm tra tố chất nào?", "Tốc độ", ["Sức bền", "Sự khéo léo", "Trí nhớ"], "Chạy ngắn đo tốc độ; chạy dài đo sức bền."],
      ["Bài bật xa tại chỗ kiểm tra tố chất nào?", "Sức mạnh của chân", ["Sức mạnh của tay", "Tốc độ chạy", "Sự dẻo dai"], "Bật xa tại chỗ kiểm tra sức mạnh của chân."],
      ["Bài gập bụng kiểm tra tố chất nào?", "Sức mạnh của thân", ["Sức bền tim mạch", "Tốc độ phản xạ", "Chiều cao"], "Gập bụng kiểm tra sức mạnh cơ thân."],
      ["Vì sao nên ghi lại kết quả kiểm tra thể lực định kì?", "Để thấy được sự tiến bộ của bản thân", ["Để khoe với bạn bè", "Để được miễn học", "Để thầy cô khen"], "Ghi kết quả định kì giúp thấy rõ sự tiến bộ của bản thân qua thời gian."],
      ["Khi so sánh kết quả thể lực, em nên so với ai?", "So với chính mình trước đây", ["So với bạn giỏi nhất", "So với vận động viên", "Không cần so sánh"], "So sánh với chính mình trước đây để thấy tiến bộ, không nên so với bạn gây áp lực."],
    ]),
  ],
  music: [
    createStarterTopic("grade-7-g-major", "Lớp 7 · Gam Son trưởng và dấu hóa", "Cấu tạo gam Son trưởng và tác dụng của dấu hóa", ["7", "🎵", "♯"], [
      ["Gam Son trưởng gồm những nốt nào?", "Son, La, Si, Đô, Rê, Mi, Pha thăng, Son", ["Đô, Rê, Mi, Pha, Son, La, Si, Đô", "Son, La, Si, Đô, Rê, Mi, Pha, Son", "La, Si, Đô, Rê, Mi, Pha, Son, La"], "Gam Son trưởng gồm Son, La, Si, Đô, Rê, Mi, Pha thăng, Son."],
      ["Gam Son trưởng có mấy dấu hóa?", "Một dấu thăng (Pha thăng)", ["Không có dấu hóa", "Hai dấu thăng", "Một dấu giáng"], "Gam Son trưởng có một dấu hóa là dấu thăng đặt ở nốt Pha."],
      ["Dấu hóa đặt ở đầu khuông nhạc có tác dụng gì?", "Áp dụng cho mọi nốt đó trong bản nhạc", ["Chỉ áp dụng một lần", "Để trang trí", "Không có tác dụng"], "Dấu thăng đặt ở đầu khuông nhạc (dấu hóa) có tác dụng với mọi nốt Pha trong bản nhạc."],
      ["Nốt nào trong gam Son trưởng bị thăng?", "Nốt Pha", ["Nốt Son", "Nốt Đô", "Nốt La"], "Trong gam Son trưởng, nốt Pha được thăng thành Pha thăng."],
      ["Hát gam Son trưởng giúp em làm quen với điều gì?", "Giọng có một dấu hóa", ["Giọng không dấu hóa", "Nhạc cụ dân tộc", "Hát bè"], "Hát gam Son trưởng giúp làm quen với giọng có một dấu hóa."],
    ]),
    createStarterTopic("grade-7-cai-luong", "Lớp 7 · Cải lương Nam Bộ", "Loại hình sân khấu ca kịch và điệu vọng cổ", ["7", "🎭", "🎶"], [
      ["Cải lương là loại hình nghệ thuật của vùng nào?", "Nam Bộ", ["Bắc Bộ", "Trung Bộ", "Tây Nguyên"], "Cải lương là loại hình sân khấu ca kịch của Nam Bộ."],
      ["Cải lương kết hợp những yếu tố nghệ thuật nào?", "Ca, vũ, nhạc, kịch", ["Chỉ có ca", "Chỉ có kịch nói", "Chỉ có múa"], "Cải lương kết hợp ca, vũ, nhạc, kịch thành loại hình sân khấu tổng hợp."],
      ["Điệu nào được xem là linh hồn của cải lương?", "Vọng cổ (6 câu)", ["Chầu văn", "Quan họ", "Hò khoan"], "Điệu vọng cổ với 6 câu là linh hồn của cải lương."],
      ["Nghệ sĩ nào là tên tuổi lớn của cải lương?", "Út Trà Ôn và Thanh Nga", ["Trần Tiến và Mỹ Linh", "Sơn Tùng và Jack", "Đàm Vĩnh Hưng"], "Nghệ sĩ Út Trà Ôn, Thanh Nga là những tên tuổi lớn của cải lương."],
      ["Nội dung cải lương thường phản ánh điều gì?", "Đời sống và tâm tư người dân Nam Bộ", ["Chuyện cổ tích nước ngoài", "Khoa học vũ trụ", "Thể thao"], "Cải lương phản ánh đời sống và tâm tư, tình cảm của người dân Nam Bộ."],
    ]),
    createStarterTopic("grade-7-rhythm-patterns", "Lớp 7 · Mẫu tiết tấu và gõ đệm", "Tiết tấu, phách mạnh nhẹ và gõ đệm theo nhịp", ["7", "🥁", "👏"], [
      ["Tiết tấu là gì?", "Sự sắp xếp trường độ các âm thanh theo thời gian", ["Độ cao của âm thanh", "Âm lượng của bài hát", "Lời của bài hát"], "Tiết tấu là sự sắp xếp trường độ các âm thanh theo thời gian."],
      ["Gõ đệm theo mẫu tiết tấu có tác dụng gì?", "Giúp bài hát sinh động, giữ nhịp đều", ["Làm bài hát buồn ngủ", "Thay thế giọng hát", "Không có tác dụng"], "Gõ đệm bằng tay, phách theo mẫu tiết tấu giúp bài hát sinh động và giữ nhịp đều."],
      ["Mẫu gõ đệm cơ bản của nhịp 2/4 là gì?", "Mạnh – nhẹ", ["Nhẹ – mạnh", "Mạnh – mạnh", "Nhẹ – nhẹ"], "Mẫu cơ bản nhịp 2/4 là mạnh – nhẹ; nhịp 3/4 là mạnh – nhẹ – nhẹ."],
      ["Mẫu gõ đệm cơ bản của nhịp 3/4 là gì?", "Mạnh – nhẹ – nhẹ", ["Mạnh – mạnh – mạnh", "Nhẹ – nhẹ – mạnh", "Mạnh – nhẹ"], "Nhịp 3/4 có ba phách: phách đầu mạnh, hai phách sau nhẹ."],
      ["Có thể gõ đệm bằng gì?", "Bằng tay, phách hoặc nhạc cụ gõ", ["Chỉ bằng chân", "Chỉ bằng miệng", "Không thể gõ đệm"], "Gõ đệm bằng tay, phách theo mẫu tiết tấu hoặc dùng nhạc cụ gõ."],
    ]),
  ],
  "visual-arts": [
    createStarterTopic("grade-7-still-life", "Lớp 7 · Vẽ tĩnh vật", "Quan sát, phác hình và tạo khối bằng đậm nhạt", ["7", "🖼", "🎨"], [
      ["Tranh tĩnh vật vẽ gì?", "Đồ vật đứng yên như lọ hoa, quả, sách", ["Người đang chạy", "Phong cảnh núi non", "Chân dung"], "Tĩnh vật là tranh vẽ đồ vật đứng yên: lọ hoa, quả, sách."],
      ["Khi vẽ tĩnh vật cần quan sát những gì?", "Hình dáng, tỉ lệ, ánh sáng và bóng đổ", ["Chỉ quan sát màu sắc", "Không cần quan sát", "Chỉ nhìn một lần"], "Vẽ tĩnh vật cần quan sát hình dáng, tỉ lệ, ánh sáng và bóng đổ của vật mẫu."],
      ["Trình tự vẽ tĩnh vật đúng là gì?", "Phác hình khái quát trước, vẽ chi tiết sau", ["Vẽ chi tiết trước", "Tô màu trước", "Vẽ bóng đổ trước"], "Phác hình khái quát trước để đúng bố cục, tỉ lệ rồi mới vẽ chi tiết sau."],
      ["Muốn tạo cảm giác khối cho vật thể, em làm gì?", "Tô đậm nhạt theo ánh sáng", ["Tô một màu đều", "Vẽ viền thật đậm", "Để giấy trắng"], "Tô đậm nhạt theo hướng ánh sáng để tạo cảm giác khối, nổi cho vật thể."],
      ["Bóng đổ trong tranh tĩnh vật cho biết điều gì?", "Hướng của nguồn sáng", ["Màu sắc của vật", "Chất liệu của vật", "Tên của vật"], "Quan sát bóng đổ giúp xác định hướng nguồn sáng để tô đậm nhạt đúng."],
    ]),
    createStarterTopic("grade-7-dong-ho", "Lớp 7 · Tranh dân gian Đông Hồ", "Giấy dó, màu thiên nhiên và đề tài gần gũi", ["7", "🖌", "🏵"], [
      ["Tranh Đông Hồ có nguồn gốc từ đâu?", "Bắc Ninh", ["Huế", "Hội An", "Sa Đéc"], "Tranh Đông Hồ là dòng tranh dân gian của làng Đông Hồ, tỉnh Bắc Ninh."],
      ["Tranh Đông Hồ được in bằng kĩ thuật nào?", "In từ ván khắc gỗ", ["Vẽ bằng cọ", "In máy hiện đại", "Thêu tay"], "Tranh Đông Hồ in từ ván khắc gỗ, mỗi màu một bản khắc riêng."],
      ["Giấy dó quét điệp có đặc điểm gì?", "Óng ánh vì quét vỏ sò nghiền", ["Màu đen sì", "Rất dày và cứng", "Làm từ nhựa"], "Giấy dó quét điệp (vỏ sò nghiền) tạo độ óng ánh đặc trưng cho tranh."],
      ["Màu trong tranh Đông Hồ lấy từ đâu?", "Từ thiên nhiên", ["Màu công nghiệp", "Màu nhập ngoại", "Màu tổng hợp"], "Màu từ thiên nhiên: đen từ than, đỏ từ sỏi son, vàng từ hoa hòe."],
      ["Đề tài nào gần gũi trong tranh Đông Hồ?", "Chăn trâu, đám cưới chuột", ["Tàu vũ trụ", "Thành phố hiện đại", "Máy bay"], "Đề tài tranh Đông Hồ gần gũi đời sống: chăn trâu, đám cưới chuột, vinh hoa phú quý."],
    ]),
    createStarterTopic("grade-7-color-mixing", "Lớp 7 · Pha màu và sắc độ", "Màu thứ cấp, sắc nhạt và sắc đậm", ["7", "🎨", "🌈"], [
      ["Pha màu đỏ với màu vàng được màu gì?", "Màu cam", ["Màu tím", "Màu lục", "Màu nâu"], "Pha hai màu cơ bản được màu thứ cấp: đỏ + vàng = cam."],
      ["Pha màu vàng với màu lam được màu gì?", "Màu lục", ["Màu cam", "Màu tím", "Màu hồng"], "Vàng + lam = lục (xanh lá cây)."],
      ["Pha màu lam với màu đỏ được màu gì?", "Màu tím", ["Màu cam", "Màu lục", "Màu vàng"], "Lam + đỏ = tím."],
      ["Muốn được sắc nhạt của một màu, em thêm gì?", "Thêm màu trắng", ["Thêm màu đen", "Thêm nước lã", "Thêm màu đỏ"], "Thêm trắng được sắc nhạt, thêm đen được sắc đậm."],
      ["Muốn được sắc đậm của một màu, em thêm gì?", "Thêm màu đen", ["Thêm màu trắng", "Thêm màu vàng", "Bớt màu đi"], "Thêm đen được sắc đậm; thêm trắng được sắc nhạt."],
    ]),
  ],
  "national-defense": [
    createStarterTopic("grade-7-fire-drill", "Lớp 7 · Diễn tập chữa cháy ở trường", "Thoát hiểm khi có cháy và kĩ năng tự bảo vệ", ["7", "🧯", "🔥"], [
      ["Khi nghe báo cháy ở trường, việc đầu tiên cần làm là gì?", "Giữ bình tĩnh, nghe theo hướng dẫn của thầy cô", ["Hét toáng lên", "Chạy tán loạn", "Quay lại lấy cặp"], "Khi nghe báo cháy, giữ bình tĩnh và làm theo hướng dẫn của thầy cô."],
      ["Khi di chuyển thoát khỏi đám cháy, tư thế nào đúng?", "Cúi thấp người dưới làn khói", ["Đứng thẳng hít thở sâu", "Nhảy qua đám cháy", "Chạy ngược vào trong"], "Cúi thấp người dưới khói và dùng khăn ướt che mũi miệng để tránh ngạt khói."],
      ["Vì sao không được quay lại lấy đồ khi đang thoát hiểm?", "Vì nguy hiểm, có thể bị kẹt trong đám cháy", ["Vì đồ đạc không quan trọng", "Vì thầy cô cấm", "Vì mất thời gian của bạn"], "Không quay lại lấy đồ vì có thể bị kẹt lại, nguy hiểm đến tính mạng."],
      ["Khi thoát hiểm theo hàng, cần tránh điều gì?", "Chen lấn, xô đẩy", ["Đi theo hàng", "Giữ trật tự", "Giúp bạn yếu"], "Không chen lấn, xô đẩy để tránh giẫm đạp khi thoát hiểm."],
      ["Dùng gì để che mũi miệng khi có nhiều khói?", "Khăn ướt", ["Khăn khô", "Tay không", "Không cần che"], "Dùng khăn ướt che mũi miệng giúp lọc bớt khói độc khi thoát hiểm."],
    ]),
    createStarterTopic("grade-7-storm-preparedness", "Lớp 7 · Chuẩn bị khi có bão", "Theo dõi tin bão và chuẩn bị đồ dùng thiết yếu", ["7", "🌀", "🏠"], [
      ["Khi có tin bão, em cần theo dõi thông tin ở đâu?", "Thông báo chính thức của cơ quan chức năng", ["Tin đồn trên mạng", "Lời hàng xóm", "Đoán theo kinh nghiệm"], "Theo dõi thông báo chính thức để có thông tin chính xác về đường đi của bão."],
      ["Trước khi bão vào, gia đình cần làm gì với nhà cửa?", "Chằng chống nhà cửa, cắt tỉa cành cây gần nhà", ["Mở toang cửa sổ", "Dỡ mái nhà ra", "Không làm gì"], "Chằng chống nhà cửa, cắt tỉa cành cây gần nhà giúp giảm thiệt hại khi bão vào."],
      ["Những đồ dùng thiết yếu nào cần chuẩn bị khi có bão?", "Đèn pin, nước uống, đồ ăn khô, thuốc men", ["Đồ chơi, game", "Quần áo mới", "Mỹ phẩm"], "Chuẩn bị đèn pin, nước uống, đồ ăn khô, thuốc men, sạc dự phòng để dùng khi mất điện."],
      ["Khi bão đang vào, em nên ở đâu?", "Ở trong nhà, tránh xa cửa kính", ["Ra ngoài xem bão", "Đứng gần cửa sổ", "Lên sân thượng"], "Khi bão vào, ở trong nhà kiên cố, tránh xa cửa kính đề phòng gió làm vỡ kính."],
      ["Sau khi bão tan, em cần lưu ý điều gì?", "Cẩn thận với dây điện đứt và cây đổ", ["Ra sông bơi lội", "Chạm vào dây điện", "Đi vào vùng ngập sâu"], "Sau bão cần cẩn thận với dây điện đứt, cây đổ và vùng ngập sâu."],
    ]),
    createStarterTopic("grade-7-traffic-signs", "Lớp 7 · Biển báo giao thông đường bộ", "Nhận biết biển cấm, biển nguy hiểm và biển hiệu lệnh", ["7", "🚦", "🛣"], [
      ["Biển cấm có hình dạng và màu sắc nào?", "Hình tròn viền đỏ", ["Hình tam giác viền đỏ", "Hình tròn nền xanh", "Hình vuông nền vàng"], "Biển cấm có hình tròn viền đỏ, nền trắng, vẽ hình biểu thị điều cấm."],
      ["Biển nguy hiểm có hình dạng nào?", "Hình tam giác viền đỏ", ["Hình tròn viền đỏ", "Hình tròn nền xanh", "Hình chữ nhật"], "Biển nguy hiểm có hình tam giác viền đỏ, báo trước tình huống nguy hiểm phía trước."],
      ["Biển hiệu lệnh có đặc điểm nào?", "Hình tròn nền xanh", ["Hình tròn viền đỏ", "Hình tam giác viền đỏ", "Hình vuông viền đen"], "Biển hiệu lệnh có hình tròn nền xanh, chỉ điều người tham gia giao thông phải làm."],
      ["Biển hình tròn viền đỏ vẽ xe đạp bị gạch chéo có ý nghĩa gì?", "Cấm xe đạp đi vào", ["Cho phép xe đạp", "Đường dành cho xe đạp", "Xe đạp được ưu tiên"], "Biển cấm hình tròn viền đỏ biểu thị điều không được làm: cấm xe đạp đi vào."],
      ["Nhận biết biển báo giao thông có lợi ích gì?", "Giúp tham gia giao thông an toàn", ["Để trang trí đường phố", "Để đi nhanh hơn", "Không có lợi ích"], "Nhận biết biển báo giúp chấp hành đúng luật, tham gia giao thông an toàn."],
    ]),
  ],
  "career-experience": [
    createStarterTopic("grade-7-goal-setting", "Lớp 7 · Đặt mục tiêu học tập", "Mục tiêu cụ thể, chia nhỏ và theo dõi tiến độ", ["7", "🎯", "📅"], [
      ["Mục tiêu học tập tốt cần có đặc điểm gì?", "Cụ thể, đo được và có thời hạn", ["Chung chung, mơ hồ", "Thật to lớn", "Không cần thời hạn"], "Mục tiêu tốt cần cụ thể, đo được và có thời hạn."],
      ["Mục tiêu nào sau đây là mục tiêu tốt?", "Đạt 8 điểm môn Toán cuối kì này", ["Học giỏi", "Cố gắng hơn", "Không bị điểm kém"], "“Đạt 8 điểm môn Toán cuối kì” cụ thể, đo được, có thời hạn; “học giỏi” thì chung chung."],
      ["Với mục tiêu lớn, em nên làm gì?", "Chia thành các bước nhỏ", ["Làm một lần cho xong", "Bỏ qua cho nhẹ", "Chờ đến phút cuối"], "Chia mục tiêu lớn thành bước nhỏ giúp dễ thực hiện và không nản chí."],
      ["Bao lâu nên kiểm tra tiến độ mục tiêu một lần?", "Hằng tuần", ["Không cần kiểm tra", "Một năm một lần", "Khi nào nhớ mới kiểm"], "Kiểm tra tiến độ hằng tuần giúp điều chỉnh kế hoạch kịp thời."],
      ["Khi đạt được mục tiêu, em nên làm gì?", "Tự thưởng và đặt mục tiêu mới", ["Nghỉ ngơi luôn", "Khoe khoang", "Quên mục tiêu cũ"], "Khi đạt mục tiêu, tự thưởng xứng đáng rồi đặt mục tiêu mới cao hơn."],
    ]),
    createStarterTopic("grade-7-helping-others", "Lớp 7 · Giúp đỡ người khó khăn", "Lòng nhân ái, tôn trọng và giúp đỡ đúng cách", ["7", "🤝", "❤"], [
      ["Giúp đỡ người khó khăn thể hiện phẩm chất gì?", "Lòng nhân ái", ["Sự khoe khoang", "Tính tính toán", "Sự thờ ơ"], "Giúp đỡ người khó khăn thể hiện lòng nhân ái, sẻ chia."],
      ["Việc nào là giúp đỡ người khó khăn đúng cách?", "Quyên góp sách vở, quần áo cũ còn dùng được", ["Cho đồ hỏng, đồ bẩn", "Chụp ảnh khoe lên mạng", "Ép người ta nhận"], "Quyên góp sách vở, quần áo cũ còn dùng được là giúp đỡ thiết thực."],
      ["Khi giúp đỡ, cần lưu ý điều gì với người nhận?", "Tôn trọng, không làm họ tủi thân", ["Kể công khắp nơi", "Chê bai hoàn cảnh họ", "Bắt họ mang ơn"], "Giúp đỡ cần tôn trọng, không làm người nhận tủi thân hay mặc cảm."],
      ["Vì sao nên tham gia hoạt động giúp đỡ qua tổ chức của trường, lớp?", "Để đảm bảo an toàn", ["Để được lên báo", "Để khỏi tốn tiền", "Để có điểm cao"], "Nên tham gia qua tổ chức của trường, lớp để đảm bảo an toàn cho bản thân."],
      ["Ngoài vật chất, em có thể giúp đỡ người khó khăn bằng cách nào?", "Thăm hỏi, động viên người già neo đơn", ["Tránh mặt họ", "Cười nhạo họ", "Không quan tâm"], "Thăm hỏi, động viên, chia sẻ tình cảm cũng là cách giúp đỡ ý nghĩa."],
    ]),
    createStarterTopic("grade-7-hobbies-talents", "Lớp 7 · Sở thích và năng khiếu", "Khám phá bản thân qua nhiều hoạt động", ["7", "🌟", "🎨"], [
      ["Sở thích là gì?", "Việc em thích làm lúc rảnh rỗi", ["Việc bắt buộc phải làm", "Bài tập về nhà", "Việc nhà"], "Sở thích là việc em thích làm lúc rảnh như đọc truyện, vẽ, đá bóng."],
      ["Năng khiếu là gì?", "Khả năng nổi trội bẩm sinh", ["Kĩ năng học được", "Sở thích nhất thời", "Điểm số cao"], "Năng khiếu là khả năng nổi trội có từ bẩm sinh, như năng khiếu âm nhạc, thể thao."],
      ["Làm thế nào để phát hiện năng khiếu của bản thân?", "Thử nhiều hoạt động khác nhau", ["Chỉ làm một việc", "Ngồi chờ năng khiếu tự đến", "Hỏi bạn bè đoán hộ"], "Phát hiện năng khiếu qua việc thử nhiều hoạt động: vẽ, hát, thể thao, viết."],
      ["Nuôi dưỡng sở thích lành mạnh mang lại lợi ích gì?", "Cuộc sống vui vẻ, phát triển toàn diện", ["Mất thời gian học", "Tốn tiền vô ích", "Không có lợi ích"], "Nuôi dưỡng sở thích lành mạnh giúp cuộc sống vui và phát triển toàn diện."],
      ["Sở thích và năng khiếu có liên quan với nhau không?", "Có, sở thích giúp phát hiện và nuôi dưỡng năng khiếu", ["Không liên quan", "Sở thích cản trở năng khiếu", "Chỉ chọn một trong hai"], "Thử nhiều sở thích giúp phát hiện năng khiếu; rèn luyện sở thích giúp năng khiếu phát triển."],
    ]),
  ],
};
for (const [subjectId, topics] of Object.entries(gradeSevenExtraPractice)) {
  for (const topic of topics) topic.level = "LỚP 7";
  curriculumExtensions[subjectId].push(...topics);
}

const gradeEightExtraPractice = {
  math: [
    createStarterTopic("grade-8-quadratic-intro", "Lớp 8 · Phương trình bậc hai một ẩn: khái niệm", "Nhận dạng phương trình bậc hai và đoán số nghiệm qua biệt thức Δ", ["8", "x²", "Δ"], [
      ["Phương trình nào sau đây là phương trình bậc hai một ẩn?", "x² − 3x + 2 = 0", ["2x + 5 = 0", "x³ − 1 = 0", "x² + y = 4"], "Phương trình bậc hai một ẩn có dạng ax² + bx + c = 0 với a khác 0; 2x + 5 = 0 là bậc nhất, x³ − 1 = 0 là bậc ba, x² + y = 4 có hai ẩn."],
      ["Trong phương trình 2x² − 5x + 3 = 0, các hệ số a, b, c lần lượt là?", "a = 2, b = −5, c = 3", ["a = 2, b = 5, c = 3", "a = −5, b = 2, c = 3", "a = 3, b = −5, c = 2"], "So với dạng ax² + bx + c = 0 ta có a = 2, b = −5, c = 3; cần chú ý dấu của từng hệ số."],
      ["Biệt thức Δ của phương trình x² − 4x + 4 = 0 bằng bao nhiêu?", "0", ["4", "−4", "16"], "Δ = b² − 4ac = (−4)² − 4·1·4 = 16 − 16 = 0."],
      ["Nếu Δ < 0 thì phương trình bậc hai một ẩn có bao nhiêu nghiệm?", "Vô nghiệm", ["Một nghiệm kép", "Hai nghiệm phân biệt", "Vô số nghiệm"], "Δ < 0 thì phương trình vô nghiệm; Δ = 0 cho một nghiệm kép, Δ > 0 cho hai nghiệm phân biệt."],
      ["Phương trình x² = 9 có nghiệm là?", "x = 3 hoặc x = −3", ["x = 3", "x = −3", "x = 9"], "x² = 9 nên x = ±3; nhiều bạn quên mất nghiệm âm."],
    ]),
    createStarterTopic("grade-8-square-roots", "Lớp 8 · Căn bậc hai và căn thức", "Căn bậc hai số học và điều kiện có nghĩa của căn thức", ["8", "√", "±"], [
      ["Căn bậc hai số học của 25 là?", "5", ["−5", "±5", "10"], "Căn bậc hai số học của số a không âm là số x không âm sao cho x² = a; √25 = 5, không phải ±5."],
      ["Căn thức √(x − 2) có nghĩa khi nào?", "x ≥ 2", ["x > 2", "x ≤ 2", "Mọi giá trị của x"], "Căn thức có nghĩa khi biểu thức trong căn không âm: x − 2 ≥ 0, tức là x ≥ 2."],
      ["√((−7)²) bằng bao nhiêu?", "7", ["−7", "±7", "49"], "√(a²) = |a| nên √((−7)²) = |−7| = 7; kết quả của căn bậc hai số học luôn không âm."],
      ["Rút gọn √48 − √12 được kết quả nào?", "2√3", ["√36", "4√3", "2√6"], "√48 = 4√3 và √12 = 2√3 nên hiệu bằng 4√3 − 2√3 = 2√3."],
      ["Số nào sau đây là số vô tỉ?", "√3", ["√4", "0,5", "−2"], "√3 không viết được dưới dạng phân số nên là số vô tỉ; còn √4 = 2 là số hữu tỉ."],
    ]),
    createStarterTopic("grade-8-circle-basics", "Lớp 8 · Đường tròn: dây cung và đường kính", "Đường tròn, dây cung, đường kính và tính chất", ["8", "○", "⌀"], [
      ["Đường kính của đường tròn bán kính 7 cm dài bao nhiêu?", "14 cm", ["7 cm", "21 cm", "3,5 cm"], "Đường kính dài gấp đôi bán kính: 2 × 7 = 14 cm."],
      ["Dây cung nào dài nhất trong một đường tròn?", "Đường kính", ["Bán kính", "Dây cung không qua tâm", "Dây cung bất kì"], "Đường kính là dây cung đi qua tâm và là dây cung dài nhất trong đường tròn."],
      ["Tâm của đường tròn cách mọi điểm trên đường tròn một khoảng bằng?", "Bán kính", ["Đường kính", "Chu vi", "Dây cung"], "Đường tròn tâm O bán kính R gồm tất cả các điểm cách O một khoảng bằng R."],
      ["Hai đường tròn có cùng bán kính thì chúng thế nào?", "Bằng nhau", ["Đồng tâm", "Luôn cắt nhau", "Luôn tiếp xúc"], "Hai đường tròn bằng nhau khi bán kính bằng nhau; đồng tâm còn cần thêm chung tâm."],
      ["Điểm M cách tâm O một khoảng 4 cm; xét đường tròn (O; 5 cm). Điểm M nằm ở đâu?", "Trong đường tròn", ["Trên đường tròn", "Ngoài đường tròn", "Tại tâm O"], "Vì 4 cm < 5 cm nên M nằm trong đường tròn; chỉ khi khoảng cách bằng 5 cm mới nằm trên."],
    ]),
  ],
  science: [
    createStarterTopic("grade-8-electricity-basics", "Lớp 8 · Dòng điện và hiệu điện thế", "Dòng điện, cường độ, hiệu điện thế và nguồn điện", ["8", "⚡", "🔋"], [
      ["Dòng điện là gì?", "Dòng chuyển dời có hướng của các điện tích", ["Dòng chuyển động hỗn loạn của electron", "Dòng nước chảy trong ống", "Dòng khí chuyển động"], "Dòng điện là dòng chuyển dời có hướng của các điện tích; chuyển động hỗn loạn không tạo thành dòng điện."],
      ["Đơn vị đo cường độ dòng điện là?", "Ampe (A)", ["Vôn (V)", "Oát (W)", "Ôm (Ω)"], "Cường độ dòng điện đo bằng ampe (A); vôn đo hiệu điện thế, oát đo công suất, ôm đo điện trở."],
      ["Hiệu điện thế có tác dụng gì trong mạch điện?", "Tạo ra dòng điện chạy qua đoạn mạch", ["Cản trở dòng điện", "Tiêu thụ điện năng", "Tích trữ điện tích"], "Hiệu điện thế giữa hai đầu đoạn mạch tạo ra dòng điện chạy qua nó."],
      ["Nguồn điện nào sau đây là nguồn điện một chiều?", "Pin", ["Điện lưới gia đình", "Máy phát điện xoay chiều", "Ổ cắm điện trên tường"], "Pin và acquy là nguồn điện một chiều; điện lưới sinh hoạt là điện xoay chiều."],
      ["Dụng cụ nào dùng để đo hiệu điện thế?", "Vôn kế", ["Ampe kế", "Nhiệt kế", "Lực kế"], "Vôn kế đo hiệu điện thế và được mắc song song; ampe kế đo cường độ dòng điện và mắc nối tiếp."],
    ]),
    createStarterTopic("grade-8-genetics-intro", "Lớp 8 · Gene và nhiễm sắc thể", "Gene, nhiễm sắc thể và sự di truyền ở người", ["8", "🧬", "🧫"], [
      ["Gene là gì?", "Đoạn DNA mang thông tin quy định một tính trạng", ["Tế bào sinh dục", "Protein trong máu", "Nhiễm sắc thể giới tính"], "Gene là đoạn DNA nằm trên nhiễm sắc thể, mang thông tin quy định một tính trạng của cơ thể."],
      ["Tế bào bình thường của người có bao nhiêu nhiễm sắc thể?", "46", ["23", "44", "48"], "Người có 46 nhiễm sắc thể xếp thành 23 cặp; 23 là số nhiễm sắc thể trong mỗi giao tử."],
      ["Cặp nhiễm sắc thể nào quyết định giới tính ở người?", "Cặp thứ 23", ["Cặp thứ 1", "Cặp thứ 22", "Mọi cặp đều được"], "Cặp nhiễm sắc thể giới tính là cặp thứ 23: XX là nữ, XY là nam."],
      ["Con nhận nhiễm sắc thể từ bố mẹ như thế nào?", "Một nửa từ bố, một nửa từ mẹ", ["Tất cả từ bố", "Tất cả từ mẹ", "Tự tạo ra mới hoàn toàn"], "Mỗi giao tử mang 23 nhiễm sắc thể; hợp tử nhận một nửa từ bố và một nửa từ mẹ."],
      ["Gene nằm ở đâu trong tế bào?", "Trên nhiễm sắc thể trong nhân tế bào", ["Trong tế bào chất", "Trên màng tế bào", "Tự do trong nhân"], "Gene nằm trên nhiễm sắc thể trong nhân tế bào; một lượng nhỏ DNA còn nằm ở ti thể."],
    ]),
    createStarterTopic("grade-8-human-digestion", "Lớp 8 · Hệ tiêu hóa ở người", "Các cơ quan tiêu hóa và quá trình biến đổi thức ăn", ["8", "🍎", "🫃"], [
      ["Chất dinh dưỡng được hấp thụ chủ yếu ở đâu?", "Ruột non", ["Dạ dày", "Ruột già", "Thực quản"], "Ruột non có nhiều lông ruột giúp hấp thụ chất dinh dưỡng vào máu; dạ dày chủ yếu nghiền và trộn thức ăn."],
      ["Tuyến tiêu hóa nào tiết dịch đổ vào ruột non?", "Gan và tụy", ["Tuyến mồ hôi", "Tuyến giáp", "Tuyến yên"], "Gan tiết mật, tụy tiết dịch tụy đổ vào ruột non; các tuyến còn lại không thuộc hệ tiêu hóa."],
      ["Ở miệng, thức ăn được biến đổi như thế nào?", "Nghiền nhỏ và trộn nước bọt", ["Hấp thụ vào máu", "Biến thành chất bã", "Tiêu hóa hoàn toàn"], "Răng nghiền nhỏ thức ăn, nước bọt làm mềm và bắt đầu tiêu hóa tinh bột."],
      ["Chất bã của thức ăn được thải ra ngoài qua đâu?", "Ruột già", ["Ruột non", "Dạ dày", "Gan"], "Ruột già hấp thụ nốt nước và các chất còn lại rồi thải chất bã ra ngoài."],
      ["Enzyme trong nước bọt giúp tiêu hóa chất nào đầu tiên?", "Tinh bột", ["Chất đạm", "Chất béo", "Vitamin"], "Nước bọt chứa enzyme amylase bắt đầu phân giải tinh bột ngay từ ở miệng."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-8-modern-poetry", "Lớp 8 · Thơ hiện đại Việt Nam", "Phong trào Thơ mới và đặc điểm thơ hiện đại", ["8", "📝", "🌸"], [
      ["Phong trào Thơ mới diễn ra trong khoảng thời gian nào?", "1932–1945", ["1900–1915", "1945–1954", "1975–1986"], "Phong trào Thơ mới nở rộ từ năm 1932 đến năm 1945 với Thế Lữ, Xuân Diệu, Huy Cận."],
      ["Nhà thơ nào sau đây thuộc phong trào Thơ mới?", "Xuân Diệu", ["Nguyễn Du", "Hồ Xuân Hương", "Tố Hữu"], "Xuân Diệu là gương mặt tiêu biểu của Thơ mới; Nguyễn Du và Hồ Xuân Hương thuộc văn học trung đại."],
      ["Thơ mới đề cao điều gì?", "Cái tôi cá nhân", ["Lễ giáo phong kiến", "Chữ Hán", "Thể thơ Đường luật"], "Thơ mới phá cách về thể loại, đề cao cái tôi cá nhân và cảm xúc chân thành."],
      ["Ngôn ngữ của thơ hiện đại có đặc điểm gì?", "Gần gũi đời sống", ["Hoàn toàn bằng chữ Hán", "Khô khan, triết lí", "Chỉ dùng từ cổ"], "Thơ hiện đại dùng ngôn ngữ gần gũi đời sống, giàu hình ảnh, dễ đi vào lòng người."],
      ["“Tràng giang” là bài thơ nổi tiếng của nhà thơ nào?", "Huy Cận", ["Xuân Diệu", "Thế Lữ", "Lưu Trọng Lư"], "“Tràng giang” của Huy Cận với nỗi buồn mênh mang là một kiệt tác của Thơ mới."],
    ]),
    createStarterTopic("grade-8-short-stories", "Lớp 8 · Đọc truyện ngắn", "Tình huống, nhân vật và chi tiết nghệ thuật trong truyện ngắn", ["8", "📖", "🔍"], [
      ["Truyện ngắn thường tập trung vào yếu tố nào?", "Một tình huống", ["Nhiều tuyến truyện", "Hàng trăm nhân vật", "Nhiều thế hệ"], "Truyện ngắn có dung lượng nhỏ, tập trung vào một tình huống với ít nhân vật."],
      ["Cốt truyện của truyện ngắn thường có đặc điểm gì?", "Thắt nút và cởi nút bất ngờ", ["Kể lan man không cao trào", "Không có xung đột", "Kết thúc luôn có hậu"], "Truyện ngắn thường có thắt nút và cởi nút bất ngờ, tạo ấn tượng mạnh cho người đọc."],
      ["Khi đọc truyện ngắn cần đặc biệt chú ý điều gì?", "Chi tiết nghệ thuật đắt giá", ["Đếm số trang", "Bỏ qua nhân vật", "Chỉ đọc đoạn kết"], "Chi tiết nghệ thuật đắt giá hé lộ tính cách nhân vật và thông điệp tác giả gửi gắm."],
      ["“Lão Hạc” là truyện ngắn của nhà văn nào?", "Nam Cao", ["Ngô Tất Tố", "Vũ Trọng Phụng", "Tô Hoài"], "“Lão Hạc” của Nam Cao viết về người nông dân nghèo khổ mà giàu lòng tự trọng."],
      ["Thông điệp của tác phẩm thường được gửi gắm qua đâu?", "Qua tình huống và số phận nhân vật", ["Qua bìa sách", "Qua lời giới thiệu", "Qua giá tiền"], "Tác giả gửi gắm thông điệp qua cách xây dựng tình huống truyện và số phận nhân vật."],
    ]),
    createStarterTopic("grade-8-persuasive-writing", "Lớp 8 · Viết bài văn thuyết phục", "Luận điểm, lí lẽ, bằng chứng và lời kêu gọi hành động", ["8", "✍", "📢"], [
      ["Mục đích của bài văn thuyết phục là gì?", "Khiến người đọc đồng tình và hành động", ["Kể lại một câu chuyện", "Tả cảnh đẹp", "Ghi chép sự kiện"], "Bài văn thuyết phục nhằm khiến người đọc đồng tình với ý kiến và hành động theo."],
      ["Bài văn thuyết phục cần có những yếu tố nào?", "Luận điểm rõ ràng, lí lẽ chặt chẽ, bằng chứng cụ thể", ["Chỉ cần cảm xúc", "Càng dài càng tốt", "Thật nhiều từ khó hiểu"], "Bài văn thuyết phục cần luận điểm rõ ràng, lí lẽ chặt chẽ và bằng chứng cụ thể."],
      ["Phần kết của bài văn thuyết phục thường có gì?", "Lời kêu gọi hành động", ["Tóm tắt lí lịch tác giả", "Danh sách tài liệu", "Lời cảm ơn nhà trường"], "Kết bài thường khẳng định lại luận điểm và có lời kêu gọi hành động."],
      ["Khi viết bài văn thuyết phục cần tránh điều gì?", "Áp đặt và thiếu tôn trọng ý kiến khác", ["Đưa bằng chứng", "Lập luận rõ ràng", "Dùng ví dụ minh họa"], "Cần tránh áp đặt; tôn trọng ý kiến khác biệt giúp tăng sức thuyết phục."],
      ["Bằng chứng trong bài văn thuyết phục nên như thế nào?", "Cụ thể và xác thực", ["Bịa đặt cho hay", "Càng chung chung càng tốt", "Không cần kiểm chứng"], "Bằng chứng phải cụ thể, xác thực; bằng chứng bịa đặt làm mất uy tín của bài viết."],
    ]),
  ],
  english: [
    createStarterTopic("grade-8-passive-voice", "Lớp 8 · Câu bị động thì hiện tại đơn", "Cấu trúc S + am/is/are + V3 và cách dùng", ["8", "ABC", "🔄"], [
      ["Chọn đáp án đúng: “The room ___ every day.”", "is cleaned", ["is clean", "cleans", "cleaned is"], "Câu bị động ở hiện tại đơn có cấu trúc S + am/is/are + V3; “the room” là số ít nên dùng is cleaned."],
      ["“They grow rice in the field.” → câu bị động là?", "Rice is grown in the field.", ["Rice is growed in the field.", "Rice grows in the field.", "Rice are grown in the field."], "Tân ngữ “rice” thành chủ ngữ; dạng V3 của grow là grown; rice không đếm được nên dùng is."],
      ["Khi nào nên dùng câu bị động?", "Khi không cần hoặc không biết ai thực hiện hành động", ["Khi muốn nhấn mạnh người thực hiện", "Trong mọi câu kể", "Khi câu có hai tân ngữ"], "Câu bị động nhấn mạnh đối tượng chịu tác động, dùng khi không cần nêu tác nhân gây ra."],
      ["Điền từ: “English ___ in many countries.”", "is spoken", ["speaks", "is speak", "are spoken"], "“English” là số ít, câu bị động ở hiện tại đơn: is + V3 (spoken)."],
      ["Câu nào viết đúng?", "The letters are delivered at 8 a.m.", ["The letters is delivered at 8 a.m.", "The letters are deliver at 8 a.m.", "The letters delivered at 8 a.m."], "“Letters” là số nhiều nên dùng are + V3 (delivered)."],
    ]),
    createStarterTopic("grade-8-present-perfect", "Lớp 8 · Hiện tại hoàn thành", "Cấu trúc have/has + V3 và các dấu hiệu nhận biết", ["8", "ABC", "⏳"], [
      ["Chọn đáp án đúng: “She ___ just finished her homework.”", "has", ["have", "is", "does"], "Hiện tại hoàn thành có cấu trúc S + have/has + V3; chủ ngữ “she” là số ít nên dùng has."],
      ["Nhóm từ nào là dấu hiệu của hiện tại hoàn thành?", "already, just, ever, never, since, for", ["yesterday, last week, in 2010", "tomorrow, next month", "at the moment, now"], "already, just, ever, never, since và for là những dấu hiệu điển hình của hiện tại hoàn thành."],
      ["“I have lived here ___ 2015.”", "since", ["for", "from", "at"], "since đi với mốc thời gian (since 2015); for đi với khoảng thời gian (for ten years)."],
      ["Dạng V3 của động từ “go” là gì?", "gone", ["went", "goed", "going"], "go – went – gone; trong hiện tại hoàn thành ta dùng dạng V3 là gone."],
      ["Câu nào dùng hiện tại hoàn thành đúng?", "They have never seen snow.", ["They have never saw snow.", "They has never seen snow.", "They never have seen snow yesterday."], "Cấu trúc have/has + V3 (seen); never đứng giữa have/has và V3."],
    ]),
    createStarterTopic("grade-8-conditional-2", "Lớp 8 · Câu điều kiện loại hai", "Giả định trái hiện tại: If + quá khứ đơn, would + V", ["8", "ABC", "❓"], [
      ["Cấu trúc của câu điều kiện loại hai là?", "If + quá khứ đơn, would + động từ nguyên mẫu", ["If + hiện tại đơn, will + động từ", "If + quá khứ đơn, will + động từ", "If + hiện tại đơn, would + động từ"], "Điều kiện loại hai: If + quá khứ đơn, would + V nguyên mẫu, diễn tả giả định trái với hiện tại."],
      ["“If I ___ rich, I would travel the world.”", "were", ["am", "will be", "have been"], "Trong mệnh đề if của điều kiện loại hai, động từ to be thường dùng were cho mọi ngôi: If I were rich..."],
      ["Câu điều kiện loại hai diễn tả điều gì?", "Giả định trái với hiện tại", ["Sự thật hiển nhiên", "Việc chắc chắn xảy ra", "Thói quen trong quá khứ"], "Loại hai diễn tả giả định không có thật ở hiện tại như ước muốn hay tưởng tượng."],
      ["Chọn câu viết đúng:", "If it rained, we would stay at home.", ["If it rains, we would stay at home.", "If it rained, we will stay at home.", "If it would rain, we stayed at home."], "Mệnh đề if dùng quá khứ đơn (rained), mệnh đề chính dùng would + V (would stay)."],
      ["Sau “would” trong câu điều kiện loại hai là dạng động từ nào?", "Động từ nguyên mẫu", ["Động từ thêm -ing", "Động từ thêm -ed", "Động từ thêm -s"], "would đi với động từ nguyên mẫu không to: would go, would buy."],
    ]),
  ],
  history: [
    createStarterTopic("grade-8-nguyen-dynasty", "Lớp 8 · Nhà Nguyễn: thống nhất và cải cách", "Gia Long thống nhất đất nước, Minh Mạng cải cách hành chính", ["8", "🏯", "👑"], [
      ["Năm 1802, ai lên ngôi lập ra triều Nguyễn?", "Nguyễn Ánh (Gia Long)", ["Nguyễn Huệ", "Minh Mạng", "Tự Đức"], "Năm 1802, Nguyễn Ánh lên ngôi lấy niên hiệu Gia Long, lập ra triều Nguyễn."],
      ["Kinh đô của triều Nguyễn đặt ở đâu?", "Phú Xuân (Huế)", ["Thăng Long", "Gia Định", "Cổ Loa"], "Triều Nguyễn đóng đô ở Phú Xuân (Huế), đất nước được thống nhất sau nhiều năm chia cắt."],
      ["Vua Minh Mạng tiến hành cải cách hành chính vào thời gian nào?", "1831–1832", ["1802–1805", "1847–1883", "1885–1895"], "Năm 1831–1832, vua Minh Mạng chia cả nước thành các tỉnh, hoàn thiện bộ máy hành chính."],
      ["Cải cách của Minh Mạng chia cả nước thành bao nhiêu tỉnh?", "30 tỉnh", ["13 tỉnh", "23 tỉnh", "63 tỉnh"], "Minh Mạng chia cả nước thành 30 tỉnh; 63 tỉnh thành là đơn vị hành chính của Việt Nam ngày nay."],
      ["Quần thể di tích nào ở Huế được UNESCO công nhận là Di sản thế giới?", "Quần thể di tích Cố đô Huế", ["Phố cổ Hội An", "Thánh địa Mỹ Sơn", "Hoàng thành Thăng Long"], "Nhà Nguyễn xây dựng nhiều công trình ở Huế, nay là Quần thể di tích Cố đô Huế – Di sản thế giới."],
    ]),
    createStarterTopic("grade-8-can-vuong", "Lớp 8 · Phong trào Cần Vương", "Chiếu Cần Vương và các cuộc khởi nghĩa chống Pháp", ["8", "⚔", "🏴"], [
      ["Chiếu Cần Vương do ai ban ra?", "Vua Hàm Nghi", ["Vua Tự Đức", "Vua Đồng Khánh", "Vua Thành Thái"], "Sau khi kinh thành Huế thất thủ năm 1885, vua Hàm Nghi ra chiếu Cần Vương kêu gọi văn thân, sĩ phu giúp vua cứu nước."],
      ["Phong trào Cần Vương bùng nổ sau sự kiện nào?", "Kinh thành Huế thất thủ (1885)", ["Pháp đánh Đà Nẵng (1858)", "Hòa ước Nhâm Tuất (1862)", "Pháp đánh Hà Nội lần hai (1882)"], "Tháng 7/1885, Tôn Thất Thuyết tấn công Pháp ở Huế không thành, vua Hàm Nghi xuất bôn và xuống chiếu Cần Vương."],
      ["Ai là người lãnh đạo khởi nghĩa Hương Khê?", "Phan Đình Phùng", ["Hoàng Hoa Thám", "Nguyễn Thiện Thuật", "Đinh Công Tráng"], "Phan Đình Phùng lãnh đạo khởi nghĩa Hương Khê suốt 10 năm (1885–1895)."],
      ["Khởi nghĩa Hương Khê kéo dài trong bao lâu?", "10 năm (1885–1895)", ["3 năm", "5 năm", "30 năm"], "Khởi nghĩa Hương Khê là cuộc khởi nghĩa tiêu biểu nhất của phong trào Cần Vương, kéo dài suốt 10 năm."],
      ["Khởi nghĩa Ba Đình do ai lãnh đạo?", "Đinh Công Tráng", ["Phan Đình Phùng", "Nguyễn Thiện Thuật", "Tôn Thất Thuyết"], "Đinh Công Tráng lãnh đạo khởi nghĩa Ba Đình (1886–1887) ở Thanh Hóa với chiến lũy tre độc đáo."],
    ]),
    createStarterTopic("grade-8-wwi-causes", "Lớp 8 · Nguyên nhân Chiến tranh thế giới thứ nhất", "Mâu thuẫn đế quốc và sự kiện Sarajevo 1914", ["8", "🌍", "💥"], [
      ["Nguyên nhân sâu xa của Chiến tranh thế giới thứ nhất là gì?", "Mâu thuẫn giữa các nước đế quốc về thuộc địa và thị trường", ["Thiên tai liên tiếp", "Dịch bệnh lan rộng", "Khủng hoảng lương thực"], "Các nước đế quốc tranh giành thuộc địa và thị trường, dẫn đến mâu thuẫn ngày càng gay gắt."],
      ["Sự kiện trực tiếp châm ngòi cho chiến tranh là gì?", "Vụ ám sát Thái tử Áo – Hung ở Sarajevo (28/6/1914)", ["Pháp tấn công Đức", "Nga rút khỏi chiến tranh", "Mỹ tham chiến"], "Ngày 28/6/1914, Thái tử Áo – Hung bị ám sát ở Sarajevo, trở thành ngòi nổ của chiến tranh."],
      ["Yếu tố nào khiến xung đột lan rộng thành chiến tranh thế giới?", "Chính sách liên minh quân sự", ["Thương mại tự do", "Giao lưu văn hóa", "Du lịch phát triển"], "Các khối liên minh quân sự đối đầu nhau khiến xung đột cục bộ lan rộng thành chiến tranh thế giới."],
      ["Hai khối quân sự đối đầu nhau trước chiến tranh là?", "Khối Liên minh và khối Hiệp ước", ["NATO và Warsaw", "Phe Trục và Đồng minh", "EU và ASEAN"], "Khối Liên minh (Đức, Áo – Hung...) đối đầu với khối Hiệp ước (Anh, Pháp, Nga...)."],
      ["Chiến tranh thế giới thứ nhất diễn ra trong khoảng thời gian nào?", "1914–1918", ["1905–1910", "1918–1922", "1939–1945"], "Chiến tranh bùng nổ năm 1914 và kết thúc năm 1918; giai đoạn 1939–1945 là Chiến tranh thế giới thứ hai."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-8-mekong-delta", "Lớp 8 · Vùng Đồng bằng sông Cửu Long", "Vựa lúa lớn nhất cả nước và thách thức biến đổi khí hậu", ["8", "🌾", "🚣"], [
      ["Đồng bằng sông Cửu Long được mệnh danh là gì?", "Vựa lúa lớn nhất cả nước", ["Vựa cà phê lớn nhất", "Thủ phủ công nghiệp", "Trung tâm tài chính"], "Đồng bằng sông Cửu Long là vùng sản xuất lúa gạo lớn nhất của Việt Nam."],
      ["Đặc điểm sông ngòi của vùng Đồng bằng sông Cửu Long là gì?", "Sông ngòi, kênh rạch chằng chịt", ["Không có sông", "Chỉ có một con sông", "Sông đều chảy ngầm"], "Vùng có hệ thống sông ngòi, kênh rạch chằng chịt, thuận lợi cho giao thông đường thủy."],
      ["Loại rừng đặc trưng ở vùng ven biển của đồng bằng là?", "Rừng đước", ["Rừng thông", "Rừng tre", "Rừng cao su"], "Ven biển có rừng đước và rừng tràm giúp chắn sóng, giữ đất."],
      ["Thách thức lớn nhất của vùng hiện nay là gì?", "Xâm nhập mặn và biến đổi khí hậu", ["Thiếu ánh sáng mặt trời", "Địa hình quá cao", "Thiếu nguồn nước"], "Vùng đang đối mặt với xâm nhập mặn, sụt lún đất và biến đổi khí hậu."],
      ["Sông Cửu Long đổ ra biển bằng mấy cửa?", "9 cửa", ["3 cửa", "6 cửa", "12 cửa"], "Sông Mê Kông khi vào Việt Nam chia thành 9 cửa đổ ra biển nên được gọi là Cửu Long (chín rồng)."],
    ]),
    createStarterTopic("grade-8-northwest-mountains", "Lớp 8 · Vùng núi Tây Bắc", "Địa hình hiểm trở, văn hóa dân tộc và đỉnh Fansipan", ["8", "⛰", "🏔"], [
      ["Đỉnh núi cao nhất Việt Nam là đỉnh nào?", "Fansipan (3.143 m)", ["Bạch Mã", "Lang Biang", "Ngọc Linh"], "Fansipan cao 3.143 m, được mệnh danh là nóc nhà Đông Dương."],
      ["Thế mạnh kinh tế nổi bật của vùng Tây Bắc là gì?", "Thủy điện và du lịch", ["Đánh bắt hải sản", "Trồng lúa quy mô lớn", "Khai thác dầu khí"], "Sông suối dốc tạo tiềm năng thủy điện lớn; cảnh quan đẹp thu hút khách du lịch."],
      ["Khó khăn lớn về giao thông của Tây Bắc là gì?", "Địa hình núi cao, hiểm trở", ["Đồng bằng ngập lụt", "Hoàn toàn không có đường bộ", "Quá nhiều sân bay"], "Địa hình núi cao hiểm trở khiến việc đi lại khó khăn, dễ xảy ra sạt lở."],
      ["Nét văn hóa đặc sắc của đồng bào Tây Bắc là?", "Chợ phiên và lễ hội", ["Lễ hội chọi trâu Đồ Sơn", "Hát quan họ", "Múa rối nước"], "Vùng có nhiều dân tộc thiểu số với chợ phiên, lễ hội mang đậm bản sắc riêng."],
      ["Thiên tai thường xảy ra ở Tây Bắc vào mùa mưa là?", "Lũ quét và sạt lở đất", ["Bão biển", "Hạn hán kéo dài", "Xâm nhập mặn"], "Địa hình dốc kết hợp mưa lớn gây ra lũ quét và sạt lở đất rất nguy hiểm."],
    ]),
    createStarterTopic("grade-8-urbanization", "Lớp 8 · Đô thị hóa ở Việt Nam", "Quá trình đô thị hóa: lợi ích và thách thức", ["8", "🏙", "🚦"], [
      ["Đô thị hóa là quá trình gì?", "Tăng tỉ trọng dân cư đô thị và mở rộng đô thị", ["Giảm dân số thành phố", "Chuyển thành phố về nông thôn", "Xóa bỏ các đô thị"], "Đô thị hóa là quá trình tăng tỉ trọng dân cư đô thị và mở rộng không gian đô thị."],
      ["Đô thị lớn nhất của Việt Nam hiện nay là?", "TP. Hồ Chí Minh", ["Hà Nội", "Đà Nẵng", "Cần Thơ"], "TP. Hồ Chí Minh là đô thị đông dân và có quy mô kinh tế lớn nhất cả nước."],
      ["Đô thị hóa mang lại lợi ích gì?", "Thúc đẩy phát triển kinh tế", ["Giảm việc làm", "Tăng nạn đói", "Ngừng sản xuất"], "Đô thị hóa tập trung lao động, vốn và kĩ thuật, thúc đẩy kinh tế phát triển."],
      ["Đô thị hóa quá nhanh gây ra áp lực nào?", "Nhà ở, giao thông và môi trường quá tải", ["Thừa đất nông nghiệp", "Thiếu người tiêu dùng", "Giá nhà giảm mạnh"], "Đô thị hóa nhanh gây quá tải về nhà ở, kẹt xe và ô nhiễm môi trường."],
      ["Đô thị nào sau đây là trung tâm của Đồng bằng sông Cửu Long?", "Cần Thơ", ["Hải Phòng", "Huế", "Vinh"], "Cần Thơ là đô thị trung tâm, đầu mối kinh tế của Đồng bằng sông Cửu Long."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-8-python-intro", "Lớp 8 · Làm quen với lập trình Python", "Câu lệnh, hàm print() và biến trong Python", ["8", "🐍", "💻"], [
      ["Lệnh nào dùng để in dữ liệu ra màn hình trong Python?", "print()", ["show()", "echo()", "display()"], "Hàm print() được dùng để in dữ liệu ra màn hình trong Python."],
      ["Chương trình Python thực hiện các câu lệnh theo thứ tự nào?", "Từ trên xuống dưới", ["Từ dưới lên trên", "Ngẫu nhiên", "Từ phải sang trái"], "Mặc định, Python thực hiện các câu lệnh lần lượt từ trên xuống dưới."],
      ["Biến trong lập trình được dùng để làm gì?", "Lưu trữ dữ liệu để dùng trong chương trình", ["In ra màn hình", "Kết nối Internet", "Tắt máy tính"], "Biến là tên gọi của vùng nhớ dùng để lưu trữ dữ liệu cho chương trình sử dụng."],
      ["Câu lệnh đúng để gán giá trị 10 cho biến x trong Python là?", "x = 10", ["x == 10", "10 = x", "x := 10"], "Trong Python, phép gán dùng một dấu bằng: x = 10; hai dấu bằng là phép so sánh."],
      ["Python được đánh giá là ngôn ngữ lập trình như thế nào?", "Dễ học và được dùng rộng rãi", ["Chỉ dùng cho siêu máy tính", "Đã lỗi thời", "Không ai sử dụng"], "Python có cú pháp đơn giản, dễ học và được ứng dụng rộng rãi trong nhiều lĩnh vực."],
    ]),
    createStarterTopic("grade-8-data-types", "Lớp 8 · Kiểu dữ liệu và biến", "Các kiểu dữ liệu cơ bản và quy tắc đặt tên biến", ["8", "🔢", "📦"], [
      ["Kiểu dữ liệu nào dùng để lưu số nguyên trong Python?", "int", ["str", "float", "bool"], "int lưu số nguyên; float lưu số thực; str lưu chuỗi kí tự; bool lưu giá trị đúng/sai."],
      ["Giá trị nào sau đây thuộc kiểu bool?", "True", ["“True”", "3.14", "10"], "Kiểu bool chỉ có hai giá trị True và False, viết hoa chữ đầu và không có ngoặc kép."],
      ["Tên biến nào sau đây đặt SAI quy tắc?", "2hoc_sinh", ["hoc_sinh", "diem_trung_binh", "tong2"], "Tên biến không được bắt đầu bằng chữ số; nên đặt tên gợi nhớ ý nghĩa của dữ liệu."],
      ["Kiểu str được dùng để lưu dữ liệu dạng nào?", "Chuỗi kí tự", ["Số nguyên", "Đúng/sai", "Số thực"], "Kiểu str lưu chuỗi kí tự, được viết trong cặp ngoặc kép, ví dụ “EduQuest”."],
      ["Câu nào sau đây đúng về biến?", "Cùng một biến có thể lưu giá trị khác nhau ở thời điểm khác nhau", ["Biến không bao giờ đổi giá trị", "Một biến lưu được nhiều giá trị cùng lúc", "Tên biến phải là chữ số"], "Giá trị của biến có thể thay đổi trong quá trình chương trình chạy."],
    ]),
    createStarterTopic("grade-8-internet-safety", "Lớp 8 · An toàn thông tin trên Internet", "Bảo mật tài khoản, phòng tránh lừa đảo và sao lưu dữ liệu", ["8", "🔒", "🛡"], [
      ["Mật khẩu mạnh nên được đặt như thế nào?", "Dài, gồm chữ hoa, chữ thường, số và kí tự đặc biệt", ["Là ngày sinh của mình", "Càng ngắn càng tốt", "Dùng chung cho mọi tài khoản"], "Mật khẩu mạnh cần dài và phức tạp; tuyệt đối không dùng thông tin cá nhân dễ đoán."],
      ["Khi nhận được đường dẫn lạ từ người không quen, nên làm gì?", "Không bấm vào, xóa hoặc báo cáo", ["Bấm ngay xem thử", "Chia sẻ cho bạn bè", "Nhập mật khẩu vào trang đó"], "Đường dẫn lạ có thể chứa mã độc hoặc trang lừa đảo; tuyệt đối không bấm vào."],
      ["Xác thực hai lớp (2FA) có tác dụng gì?", "Tăng bảo mật, kẻ xấu khó đăng nhập dù biết mật khẩu", ["Làm tài khoản đẹp hơn", "Tăng tốc độ mạng", "Giảm dung lượng lưu trữ"], "Xác thực hai lớp yêu cầu thêm mã xác nhận nên kẻ biết mật khẩu vẫn khó đăng nhập."],
      ["Dữ liệu quan trọng nên được xử lí thế nào định kì?", "Sao lưu", ["Xóa hết", "Đăng công khai", "Gửi cho người lạ"], "Sao lưu dữ liệu định kì giúp khôi phục khi mất máy hoặc bị mã độc tấn công."],
      ["Khi nghi ngờ bị lừa đảo trên mạng, nên làm gì?", "Báo ngay cho người lớn và nhà cung cấp dịch vụ", ["Giấu kín mọi chuyện", "Chuyển thêm tiền", "Xóa mọi bằng chứng"], "Cần báo ngay cho người lớn và nhà cung cấp dịch vụ để được hỗ trợ kịp thời."],
    ]),
  ],
  technology: [
    createStarterTopic("grade-8-measuring-tools", "Lớp 8 · Dụng cụ đo cơ khí", "Thước cặp, panme và cách đọc kết quả đo", ["8", "📏", "🔧"], [
      ["Dụng cụ nào đo kích thước với độ chính xác 0,02 mm?", "Thước cặp", ["Thước dây", "Thước gỗ học sinh", "Thước cuộn"], "Thước cặp đo chính xác đến 0,02 mm hoặc 0,05 mm; thước dây, thước gỗ kém chính xác hơn nhiều."],
      ["Thước cặp có thể đo những loại kích thước nào?", "Kích thước ngoài, kích thước trong và chiều sâu", ["Chỉ đo chiều dài", "Chỉ đo khối lượng", "Chỉ đo góc"], "Thước cặp có mỏ đo ngoài, mỏ đo trong và thanh đo chiều sâu."],
      ["Khi đọc kết quả trên thước cặp cần chú ý điều gì?", "Đặt mắt vuông góc, đọc vạch chính rồi đến vạch du xích", ["Nhìn nghiêng cho nhanh", "Chỉ đọc vạch du xích", "Đoán chừng kết quả"], "Đặt mắt vuông góc để tránh sai số; đọc phần nguyên trên vạch chính rồi cộng phần lẻ ở du xích."],
      ["Panme thường được dùng để đo gì?", "Kích thước rất nhỏ với độ chính xác cao", ["Chiều dài sân bóng", "Khối lượng vật", "Nhiệt độ môi trường"], "Panme đo kích thước nhỏ với độ chính xác đến 0,01 mm."],
      ["Trước khi đo cần kiểm tra gì ở dụng cụ?", "Điểm 0 của dụng cụ", ["Màu sắc dụng cụ", "Giá tiền dụng cụ", "Nơi sản xuất"], "Kiểm tra điểm 0 đảm bảo dụng cụ chưa bị lệch thì kết quả đo mới chính xác."],
    ]),
    createStarterTopic("grade-8-simple-machines", "Lớp 8 · Máy cơ đơn giản: đòn bẩy, ròng rọc", "Đòn bẩy, ròng rọc, mặt phẳng nghiêng giúp lợi về lực", ["8", "⚙", "🏗"], [
      ["Đòn bẩy cho lợi về lực trong trường hợp nào?", "Điểm tựa gần vật nặng", ["Điểm tựa ở chính giữa", "Điểm tựa xa vật nặng", "Không có điểm tựa"], "Điểm tựa càng gần vật nặng thì tay đòn của lực càng dài, càng lợi về lực."],
      ["Ròng rọc động cho lợi bao nhiêu lần về lực?", "2 lần", ["Không lợi về lực", "3 lần", "4 lần"], "Ròng rọc động cho lợi 2 lần về lực nhưng thiệt 2 lần về đường đi."],
      ["Vật nào sau đây hoạt động theo nguyên tắc đòn bẩy?", "Kìm cắt dây", ["Dây thừng", "Bánh xe đạp", "Tấm ván dốc"], "Kìm là đòn bẩy với điểm tựa ở chốt; bập bênh cũng là một đòn bẩy."],
      ["Ròng rọc cố định có tác dụng gì?", "Đổi hướng của lực kéo", ["Lợi 2 lần về lực", "Giảm khối lượng vật", "Tăng tốc độ kéo"], "Ròng rọc cố định chỉ làm đổi hướng của lực kéo, không cho lợi về lực."],
      ["Đưa vật nặng lên cao bằng mặt phẳng nghiêng có lợi gì?", "Lợi về lực, đỡ tốn sức", ["Tốn sức hơn", "Nhanh hơn thang máy", "Không có tác dụng"], "Mặt phẳng nghiêng càng dài, càng thoải thì càng lợi về lực."],
    ]),
    createStarterTopic("grade-8-electrical-devices", "Lớp 8 · Thiết bị điện trong gia đình", "Thiết bị đóng cắt, bảo vệ và sử dụng điện an toàn", ["8", "💡", "🔌"], [
      ["Thiết bị nào dùng để đóng, cắt mạch điện?", "Công tắc và aptomat", ["Bóng đèn", "Quạt điện", "Tủ lạnh"], "Công tắc, aptomat là thiết bị đóng cắt; bóng đèn, quạt điện là thiết bị tiêu thụ điện."],
      ["Cầu chì có tác dụng gì trong mạch điện?", "Bảo vệ mạch khi quá tải hoặc ngắn mạch", ["Tăng điện áp", "Tiết kiệm điện", "Phát sáng"], "Khi dòng điện quá lớn, dây chì nóng chảy làm đứt mạch để bảo vệ thiết bị."],
      ["Vì sao tổng công suất các thiết bị không được vượt quá khả năng chịu tải của đường dây?", "Tránh quá tải gây cháy nổ", ["Để tiết kiệm dây dẫn", "Để đèn sáng hơn", "Để giảm tiền điện"], "Quá tải làm dây dẫn nóng lên, có thể gây cháy; mỗi đường dây chỉ chịu được công suất giới hạn."],
      ["Trước khi sử dụng thiết bị điện mới cần làm gì?", "Đọc kĩ hướng dẫn sử dụng", ["Cắm điện thử ngay", "Tháo ra xem bên trong", "Cho trẻ nhỏ nghịch thử"], "Đọc hướng dẫn để dùng đúng điện áp, đúng cách, đảm bảo an toàn."],
      ["Khi phát hiện dây điện bị hở, nên xử lí thế nào?", "Báo người lớn, tuyệt đối không chạm vào", ["Dùng tay kiểm tra", "Tự quấn băng keo lại", "Tiếp tục sử dụng"], "Dây điện bị hở rất nguy hiểm; cần báo người lớn xử lí, tuyệt đối không tự chạm vào."],
    ]),
  ],
  civics: [
    createStarterTopic("grade-8-uphold-justice", "Lớp 8 · Tôn trọng lẽ phải", "Bảo vệ điều đúng, phê phán điều sai", ["8", "⚖", "💪"], [
      ["Lẽ phải là gì?", "Điều đúng đắn, phù hợp đạo lí và lợi ích chung", ["Ý kiến của số đông", "Điều có lợi cho mình", "Lời của người có quyền"], "Lẽ phải là điều đúng đắn, phù hợp đạo lí và lợi ích chung, không phải cứ số đông là đúng."],
      ["Tôn trọng lẽ phải được thể hiện ở hành động nào?", "Bảo vệ điều đúng, phê phán điều sai", ["A dua theo số đông", "Im lặng trước điều sai", "Bênh bạn dù bạn sai"], "Tôn trọng lẽ phải là dám bảo vệ điều đúng, phê phán điều sai, không a dua theo số đông khi họ sai."],
      ["Khi thấy cả lớp trêu chọc bạn mới, em nên làm gì?", "Can ngăn và bảo vệ bạn", ["Trêu theo cho vui", "Đứng xem", "Bỏ đi chỗ khác"], "Trêu chọc bạn mới là việc sai; tôn trọng lẽ phải là can ngăn và bảo vệ bạn."],
      ["Người tôn trọng lẽ phải được mọi người nhìn nhận thế nào?", "Tin yêu và kính trọng", ["Xa lánh", "Chê cười", "Không quan tâm"], "Người dám bảo vệ lẽ phải luôn được mọi người tin yêu, kính trọng."],
      ["Câu tục ngữ nào thể hiện tinh thần tôn trọng lẽ phải?", "“Cây ngay không sợ chết đứng”", ["“Im lặng là vàng”", "“Dĩ hòa vi quý”", "“Tránh voi chẳng xấu mặt nào”"], "“Cây ngay không sợ chết đứng” ca ngợi người ngay thẳng, dám bảo vệ lẽ phải."],
    ]),
    createStarterTopic("grade-8-integrity", "Lớp 8 · Liêm khiết trong cuộc sống", "Sống trong sạch, trung thực, không vụ lợi", ["8", "🤝", "✨"], [
      ["Liêm khiết là gì?", "Sống trong sạch, không tham lam, không vụ lợi", ["Sống khép kín", "Tiết kiệm tối đa", "Không giao tiếp"], "Liêm khiết là sống trong sạch, không tham lam, không nhận hối lộ, không vụ lợi cá nhân."],
      ["Học sinh rèn luyện liêm khiết qua việc nào?", "Trung thực trong kiểm tra, trả lại đồ nhặt được", ["Quay cóp khi kiểm tra", "Giữ đồ nhặt được làm của mình", "Nhận quà để được nâng điểm"], "Trung thực, không gian lận, trả lại đồ nhặt được là biểu hiện liêm khiết của học sinh."],
      ["Tham nhũng gây hại gì cho đất nước?", "Thất thoát tài sản, kìm hãm phát triển", ["Không gây hại gì", "Giúp kinh tế phát triển", "Tăng uy tín đất nước"], "Tham nhũng làm thất thoát tài sản công, kìm hãm phát triển và làm mất lòng tin của nhân dân."],
      ["Khi nhặt được ví tiền của người khác, em nên làm gì?", "Tìm cách trả lại người đánh mất", ["Giữ lại tiêu", "Vứt đi", "Chia cho bạn bè"], "Nhặt được của rơi mà tìm cách trả lại là hành động liêm khiết, trung thực."],
      ["Người liêm khiết được xã hội nhìn nhận ra sao?", "Kính trọng và tin tưởng", ["Chê là dại dột", "Xa lánh", "Coi thường"], "Người sống liêm khiết, trong sạch luôn được mọi người kính trọng và tin tưởng."],
    ]),
    createStarterTopic("grade-8-self-confidence", "Lớp 8 · Tự tin trong giao tiếp", "Tin vào bản thân, dám trình bày và biết lắng nghe", ["8", "🎤", "🌟"], [
      ["Tự tin là gì?", "Tin vào khả năng của bản thân, dám nghĩ dám làm", ["Cho rằng mình luôn đúng", "Không cần ai góp ý", "Sợ sai nên im lặng"], "Tự tin là tin vào khả năng của bản thân, dám nghĩ, dám làm và không ngại sai."],
      ["Tự tin khác tự cao ở điểm nào?", "Người tự tin biết lắng nghe và sửa sai", ["Không khác gì nhau", "Tự cao tốt hơn", "Tự tin là khoe khoang"], "Tự tin khác tự cao: người tự tin biết lắng nghe, dám nhận và sửa chữa sai lầm."],
      ["Cách nào giúp rèn luyện sự tự tin?", "Chuẩn bị kĩ và tập nói trước đám đông", ["Tránh mọi hoạt động tập thể", "Không bao giờ phát biểu", "Chỉ nói khi bị ép buộc"], "Chuẩn bị kĩ nội dung và tập nói trước đám đông giúp sự tự tin tăng dần lên."],
      ["Khi thuyết trình, người tự tin thường làm gì?", "Trình bày rõ ràng, nhìn vào người nghe", ["Đọc lí nhí, cúi mặt", "Run quá nên bỏ về", "Đổ lỗi cho cả nhóm"], "Người tự tin trình bày rõ ràng và giao tiếp bằng mắt với người nghe."],
      ["Khi được góp ý, người tự tin ứng xử thế nào?", "Lắng nghe và tiếp thu điều đúng", ["Cãi lại ngay lập tức", "Giận dỗi bỏ đi", "Không bao giờ sửa"], "Tự tin là biết lắng nghe góp ý đúng và sửa sai, không tự ái."],
    ]),
  ],
  "physical-education": [
    createStarterTopic("grade-8-table-tennis", "Lớp 8 · Bóng bàn: cầm vợt và đánh cơ bản", "Cách cầm vợt, đánh thuận tay và giao bóng đúng luật", ["8", "🏓", "🎯"], [
      ["Cách cầm vợt phổ biến trong bóng bàn là?", "Cầm kiểu bắt tay (shakehand)", ["Cầm kiểu cầm đũa", "Cầm ngược vợt", "Cầm bằng hai tay"], "Cầm vợt kiểu bắt tay (shakehand) là cách cầm phổ biến, dễ điều khiển vợt."],
      ["Khi đánh thuận tay, vợt được vung theo hướng nào?", "Từ thấp lên cao", ["Từ cao xuống thấp", "Sang ngang", "Vung tròn"], "Đánh thuận tay: đứng nghiêng người, vung vợt từ thấp lên cao, đánh vào bóng khi bóng nảy lên."],
      ["Giao bóng đúng luật cần thực hiện thế nào?", "Tung bóng lên rồi đánh qua lưới sang bàn đối phương", ["Đặt bóng rồi đẩy đi", "Ném bóng sang", "Đánh bóng khi còn trên tay"], "Giao bóng phải tung bóng lên không rồi đánh qua lưới sang phần bàn của đối phương."],
      ["Để bóng nảy mấy lần bên phần sân mình thì bị mất điểm?", "2 lần", ["1 lần", "3 lần", "Không giới hạn"], "Để bóng nảy 2 lần bên phần sân mình là mất điểm; phải đánh trả trước khi bóng nảy lần hai."],
      ["Tư thế chuẩn bị đánh bóng trong bóng bàn là?", "Đứng nghiêng, mắt luôn nhìn bóng", ["Đứng quay lưng lại", "Nhắm mắt lại", "Ngồi xuống"], "Đứng nghiêng người, mắt luôn nhìn theo bóng để phán đoán điểm rơi chính xác."],
    ]),
    createStarterTopic("grade-8-long-distance", "Lớp 8 · Chạy bền và hít thở", "Kĩ thuật hít thở, giữ tốc độ và tăng quãng đường", ["8", "🏃", "💨"], [
      ["Chạy bền chủ yếu rèn luyện cơ quan nào?", "Tim và phổi", ["Mắt", "Tai", "Da"], "Chạy bền rèn sức chịu đựng của tim và phổi, tăng khả năng hô hấp của cơ thể."],
      ["Hít thở đúng khi chạy bền là thế nào?", "Hít vào bằng mũi, thở ra bằng miệng theo nhịp bước", ["Nín thở khi chạy", "Thở gấp bằng miệng", "Hít thở ngẫu nhiên"], "Hít vào bằng mũi, thở ra bằng miệng đều theo nhịp bước giúp cơ thể đủ ôxi."],
      ["Khi chạy bền nên duy trì tốc độ thế nào?", "Ổn định, không chạy quá nhanh đầu buổi", ["Nhanh nhất có thể", "Chạy nhanh rồi dừng hẳn", "Đi bộ hoàn toàn"], "Giữ tốc độ ổn định, tránh bứt tốc ngay đầu buổi vì dễ bị hụt hơi."],
      ["Muốn tăng quãng đường chạy bền nên làm gì?", "Tăng dần quãng đường mỗi tuần", ["Tăng gấp đôi mỗi ngày", "Chạy marathon ngay", "Không cần tăng"], "Tăng dần quãng đường mỗi tuần để cơ thể thích nghi, tránh chấn thương."],
      ["Dấu hiệu nào cho thấy cần dừng chạy để nghỉ ngay?", "Chóng mặt, đau ngực, khó thở", ["Ra mồ hôi", "Tim đập nhanh", "Mệt nhẹ"], "Chóng mặt, đau ngực, khó thở là dấu hiệu nguy hiểm, cần dừng lại nghỉ ngay."],
    ]),
    createStarterTopic("grade-8-strength-training", "Lớp 8 · Rèn luyện sức mạnh cơ bản", "Bài tập cơ bản, kĩ thuật đúng và nghỉ ngơi hợp lí", ["8", "💪", "🏋"], [
      ["Bài tập nào sau đây rèn sức mạnh thân trên?", "Chống đẩy", ["Chạy nước rút", "Nhảy dây", "Đi bộ"], "Chống đẩy rèn cơ tay, vai và ngực; chạy, nhảy dây chủ yếu rèn sức bền."],
      ["Khi tập sức mạnh cần chú ý điều gì nhất?", "Thực hiện đúng kĩ thuật", ["Tập càng nặng càng tốt", "Tập thật nhanh", "Không cần khởi động"], "Đúng kĩ thuật giúp tránh chấn thương; tăng dần mức độ và luôn khởi động trước khi tập."],
      ["Bài tập squat chủ yếu rèn nhóm cơ nào?", "Cơ đùi và cơ mông", ["Cơ tay", "Cơ bụng", "Cơ cổ"], "Squat (ngồi xổm rồi đứng lên) rèn cơ đùi, cơ mông và khả năng giữ thăng bằng."],
      ["Giữa các buổi tập sức mạnh nên làm gì?", "Nghỉ đủ để cơ bắp phục hồi", ["Tập liên tục không nghỉ", "Thức khuya", "Bỏ bữa ăn"], "Cơ bắp cần thời gian nghỉ để phục hồi và phát triển; tập liên tục gây quá tải."],
      ["Không nên tập sức mạnh trong trường hợp nào?", "Khi cơ thể mệt hoặc đang ốm", ["Khi khỏe mạnh", "Khi đã khởi động kĩ", "Khi có người hướng dẫn"], "Không tập quá sức khi cơ thể mệt hoặc đang ốm để tránh chấn thương."],
    ]),
  ],
  music: [
    createStarterTopic("grade-8-minor-scale", "Lớp 8 · Gam thứ và cảm xúc âm nhạc", "Gam trưởng, gam thứ và cảm xúc của bài hát", ["8", "🎵", "🎶"], [
      ["Gam thứ thường gợi cảm xúc gì?", "Trầm lắng, sâu sắc", ["Vui tươi, rộn ràng", "Hài hước", "Dữ dội"], "Gam thứ gợi cảm xúc trầm lắng, sâu sắc; gam trưởng gợi cảm xúc vui tươi, rộn ràng."],
      ["Gam La thứ tự nhiên gồm các nốt nào?", "La, Si, Đô, Rê, Mi, Pha, Son, La", ["Đô, Rê, Mi, Pha, Son, La, Si, Đô", "La, Si, Đô#, Rê, Mi, Pha#, Son#, La", "La, Đô, Rê, Mi, Son, La"], "Gam La thứ tự nhiên: La, Si, Đô, Rê, Mi, Pha, Son, La và không có dấu hóa nào."],
      ["Nhiều bài hát trữ tình thường được viết ở giọng nào?", "Giọng thứ", ["Giọng trưởng", "Không có giọng", "Giọng nói"], "Nhiều bài hát trữ tình, sâu lắng được viết ở giọng thứ."],
      ["Nhận biết được gam trưởng, gam thứ giúp gì cho người nghe?", "Cảm thụ bài hát sâu sắc hơn", ["Hát to hơn", "Nhớ lời nhanh hơn", "Chơi đàn nhanh hơn"], "Nhận biết gam trưởng, gam thứ giúp cảm nhận cảm xúc và cấu trúc của bài hát sâu hơn."],
      ["Bài hát thiếu nhi vui nhộn thường được viết ở giọng nào?", "Giọng trưởng", ["Giọng thứ", "Giọng khàn", "Giọng gió"], "Giọng trưởng có âm sắc tươi sáng, phù hợp với bài hát vui nhộn."],
    ]),
    createStarterTopic("grade-8-folk-songs-regions", "Lớp 8 · Dân ca ba miền", "Quan họ, ví giặm, đờn ca tài tử ba miền", ["8", "🎤", "🏮"], [
      ["Quan họ là dân ca đặc sắc của vùng nào?", "Miền Bắc (Bắc Ninh)", ["Miền Trung", "Miền Nam", "Tây Nguyên"], "Quan họ Bắc Ninh là dân ca đặc sắc của miền Bắc với lối hát đối đáp nam nữ."],
      ["Dân ca ví, giặm Nghệ Tĩnh được UNESCO ghi danh vào năm nào?", "2014", ["2009", "2017", "2020"], "Dân ca ví, giặm Nghệ Tĩnh được UNESCO ghi danh là Di sản văn hóa phi vật thể năm 2014."],
      ["Đờn ca tài tử là loại hình nghệ thuật của vùng nào?", "Miền Nam", ["Miền Bắc", "Miền Trung", "Tây Bắc"], "Đờn ca tài tử Nam Bộ sử dụng đàn tranh, đàn kìm, đàn cò và song loan."],
      ["Các điệu hò là làn điệu dân ca gắn với hoạt động nào?", "Lao động", ["Chiến đấu", "Buôn bán", "Du lịch"], "Các điệu hò như hò kéo pháo, hò giã gạo gắn với lao động và sinh hoạt của người dân."],
      ["Điểm chung của dân ca ba miền là gì?", "Gắn với lao động và sinh hoạt của người dân", ["Đều hát bằng tiếng nước ngoài", "Chỉ hát trong cung đình", "Không dùng nhạc cụ"], "Mỗi làn điệu dân ca đều gắn với lao động, sinh hoạt và tâm tình của người dân vùng đó."],
    ]),
    createStarterTopic("grade-8-music-and-life", "Lớp 8 · Âm nhạc trong đời sống", "Vai trò của âm nhạc và thói quen nghe nhạc an toàn", ["8", "🎧", "❤"], [
      ["Âm nhạc có mặt ở đâu trong đời sống?", "Khắp nơi: lễ hội, sinh hoạt, học tập, quảng cáo", ["Chỉ trong nhà hát", "Chỉ trên truyền hình", "Chỉ ở trường học"], "Âm nhạc có mặt khắp nơi trong đời sống hằng ngày của con người."],
      ["Âm nhạc mang lại lợi ích gì cho con người?", "Thư giãn, gắn kết con người, lưu giữ văn hóa", ["Gây căng thẳng", "Chia rẽ mọi người", "Xóa bỏ văn hóa"], "Âm nhạc giúp thư giãn, gắn kết cộng đồng và lưu giữ bản sắc văn hóa dân tộc."],
      ["Nghe nhạc bằng tai nghe cần chú ý điều gì?", "Giữ âm lượng vừa phải, không nghe quá to", ["Mở to hết cỡ", "Nghe suốt ngày đêm", "Vừa nghe vừa ngủ say"], "Nghe nhạc quá to bằng tai nghe trong thời gian dài gây hại cho thính giác."],
      ["Âm nhạc trong lễ hội có vai trò gì?", "Tạo không khí vui tươi, gắn kết cộng đồng", ["Gây ồn ào", "Không có vai trò gì", "Chỉ để trang trí"], "Âm nhạc tạo không khí vui tươi và gắn kết mọi người trong các lễ hội."],
      ["Vì sao cần bảo vệ thính giác khi nghe nhạc?", "Nghe quá to lâu ngày gây tổn thương khó hồi phục", ["Thính giác không quan trọng", "Tai tự phục hồi hoàn toàn", "Nhạc không ảnh hưởng đến tai"], "Nghe nhạc với âm lượng lớn kéo dài làm tổn thương thính giác rất khó hồi phục."],
    ]),
  ],
  "visual-arts": [
    createStarterTopic("grade-8-perspective-drawing", "Lớp 8 · Vẽ phối cảnh đơn giản", "Điểm tụ, đường chân trời và quy tắc gần to xa nhỏ", ["8", "🎨", "📐"], [
      ["Quy tắc cơ bản của vẽ phối cảnh là?", "Vật gần to, vật xa nhỏ", ["Vật nào cũng bằng nhau", "Vật xa to hơn vật gần", "Không có quy tắc nào"], "Trong phối cảnh, vật càng gần người xem càng to, vật càng xa càng nhỏ."],
      ["Các đường thẳng song song trong thực tế khi vẽ phối cảnh sẽ hội tụ về đâu?", "Điểm tụ", ["Điểm giữa tờ giấy", "Mép giấy", "Luôn nằm ngoài bức vẽ"], "Các đường thẳng song song trong thực tế khi vẽ phối cảnh sẽ hội tụ về điểm tụ."],
      ["Khi vẽ phối cảnh đường phố, nên vẽ gì trước tiên?", "Đường chân trời và điểm tụ", ["Vẽ chi tiết trước", "Tô màu trước", "Vẽ người trước"], "Cần vẽ đường chân trời, xác định điểm tụ rồi vẽ các đường hội tụ làm khung trước."],
      ["Phối cảnh một điểm tụ thường được dùng để vẽ gì?", "Đường phố và hành lang", ["Chân dung", "Tĩnh vật hoa quả", "Chữ viết"], "Phối cảnh một điểm tụ phù hợp để vẽ không gian có chiều sâu như đường phố, hành lang."],
      ["Phối cảnh giúp thể hiện điều gì trên mặt phẳng?", "Chiều sâu ba chiều của vật", ["Màu sắc của vật", "Âm thanh", "Mùi hương"], "Phối cảnh giúp vẽ vật ba chiều có chiều sâu trên mặt phẳng hai chiều."],
    ]),
    createStarterTopic("grade-8-sculpture-vn", "Lớp 8 · Điêu khắc Việt Nam", "Tượng Phật, phù điêu đình chùa và chất liệu điêu khắc", ["8", "🗿", "🏛"], [
      ["Điêu khắc truyền thống Việt Nam thường gắn với đâu?", "Đình và chùa", ["Siêu thị", "Sân bay", "Bến xe"], "Điêu khắc truyền thống gắn với đình chùa: tượng Phật, tượng thánh và phù điêu."],
      ["Chùa Tây Phương nổi tiếng với bộ tượng nào?", "Tượng La Hán", ["Tượng nữ thần", "Tượng chiến binh", "Tượng động vật"], "Chùa Tây Phương có bộ tượng La Hán với vẻ mặt sinh động, nổi tiếng cả nước."],
      ["Tượng Phật thường thể hiện vẻ đẹp nào?", "Từ bi và an nhiên", ["Dữ tợn", "Buồn bã", "Giận dữ"], "Tượng Phật như ở chùa Phật Tích mang vẻ đẹp từ bi, an nhiên, thanh thoát."],
      ["Chất liệu nào thường được dùng trong điêu khắc?", "Đá, gỗ và đồng", ["Giấy và vải", "Nhựa đường", "Thủy tinh lỏng"], "Điêu khắc truyền thống dùng chất liệu bền vững như đá, gỗ và đồng."],
      ["Người xem thưởng thức tượng tròn (tượng đứng) bằng cách nào?", "Đi quanh để quan sát từ mọi góc", ["Chỉ nhìn một mặt", "Sờ nắn thoải mái", "Chụp ảnh là đủ"], "Tượng tròn có thể đi vòng quanh quan sát từ mọi phía, khác với phù điêu chỉ xem mặt trước."],
    ]),
    createStarterTopic("grade-8-graphic-design", "Lớp 8 · Thiết kế đồ họa cơ bản", "Bố cục, màu sắc và nguyên tắc thiết kế áp phích", ["8", "🖥", "✏"], [
      ["Thiết kế đồ họa là gì?", "Sắp xếp chữ và hình để truyền thông điệp", ["Vẽ tranh treo tường", "Chụp ảnh nghệ thuật", "Viết văn"], "Thiết kế đồ họa là việc sắp xếp chữ và hình ảnh để truyền tải thông điệp như áp phích, bìa sách, banner."],
      ["Nguyên tắc nào quan trọng trong bố cục thiết kế?", "Tương phản rõ, căn chỉnh thẳng hàng, khoảng trắng hợp lí", ["Càng rối càng tốt", "Chữ thật nhỏ", "Dùng thật nhiều màu"], "Bố cục tốt cần tương phản rõ ràng, căn chỉnh thẳng hàng, khoảng trắng hợp lí và màu sắc hài hòa."],
      ["Khoảng trắng trong thiết kế có tác dụng gì?", "Giúp mắt nghỉ ngơi, làm nổi bật nội dung chính", ["Lãng phí giấy", "Không có tác dụng", "Làm thiết kế xấu đi"], "Khoảng trắng hợp lí giúp bố cục thoáng đãng và làm nổi bật nội dung chính."],
      ["Khi thiết kế áp phích, tiêu đề nên được trình bày thế nào?", "To, rõ và dễ đọc từ xa", ["Nhỏ và mờ", "Viết tay nguệch ngoạc", "Giấu ở góc khuất"], "Tiêu đề áp phích cần to, rõ và tương phản để thu hút sự chú ý, dễ đọc từ xa."],
      ["Màu sắc trong thiết kế nên được lựa chọn thế nào?", "Hài hòa và phù hợp với thông điệp", ["Càng nhiều màu càng tốt", "Chọn ngẫu nhiên", "Chỉ dùng màu đen"], "Màu sắc hài hòa, phù hợp với thông điệp giúp thiết kế đẹp và dễ hiểu."],
    ]),
  ],
  "national-defense": [
    createStarterTopic("grade-8-earthquake-safety", "Lớp 8 · Tham khảo: an toàn khi động đất", "Cách ứng phó khi động đất trong nhà và ngoài trời", ["8", "🌋", "⚠"], [
      ["Khi động đất xảy ra lúc đang ở trong nhà, nên làm gì?", "Chui xuống gầm bàn chắc chắn và che đầu", ["Chạy ngay ra ban công", "Đứng dưới cửa kính", "Dùng thang máy xuống"], "Chui xuống gầm bàn chắc chắn và che đầu; tránh xa cửa kính, tủ cao; tuyệt đối không dùng thang máy."],
      ["Khi đang ở ngoài trời lúc động đất, nên di chuyển đến đâu?", "Nơi trống trải, tránh xa nhà cao tầng và cột điện", ["Dưới gầm cầu", "Sát chân tòa nhà", "Dưới cột điện"], "Đến nơi trống trải, tránh xa nhà cao tầng và cột điện để đề phòng đổ sập."],
      ["Sau khi động đất xảy ra, cần kiểm tra điều gì?", "Rò rỉ gas và chập điện", ["Tivi có bị hỏng không", "Điện thoại có sóng không", "Tủ lạnh có chạy không"], "Sau động đất cần kiểm tra rò rỉ gas và chập điện để phòng cháy nổ."],
      ["Vì sao không nên đứng gần cửa kính khi động đất?", "Kính vỡ có thể gây thương tích", ["Kính che mất tầm nhìn", "Kính quá nặng", "Kính gây ồn ào"], "Rung lắc mạnh làm kính vỡ, mảnh kính văng ra gây thương tích nguy hiểm."],
      ["Khi bị kẹt sau động đất, nên làm gì?", "Bình tĩnh, gõ vào vật cứng để gây tiếng động", ["La hét liên tục", "Đốt lửa sưởi ấm", "Cố chui ra bằng mọi giá"], "Bình tĩnh gõ vào vật cứng để lực lượng cứu hộ nghe thấy; la hét tốn sức, đốt lửa rất nguy hiểm."],
    ]),
    createStarterTopic("grade-8-food-safety", "Lớp 8 · Tham khảo: an toàn thực phẩm", "Chọn thực phẩm sạch và thói quen ăn uống an toàn", ["8", "🍱", "✅"], [
      ["Khi mua thực phẩm cần chú ý điều gì?", "Nguồn gốc rõ ràng và còn hạn sử dụng", ["Càng rẻ càng tốt", "Bao bì đẹp là được", "Không cần xem hạn dùng"], "Chọn thực phẩm có nguồn gốc rõ ràng, còn hạn sử dụng để đảm bảo an toàn."],
      ["Trước khi ăn cần làm gì?", "Rửa tay và rửa rau quả sạch sẽ", ["Ăn ngay cho nóng", "Thổi phù là được", "Không cần làm gì"], "Rửa tay và rửa rau quả giúp loại bỏ bụi bẩn, vi khuẩn bám trên bề mặt."],
      ["Nguyên tắc ăn uống an toàn là gì?", "Ăn chín, uống sôi", ["Ăn sống cho bổ", "Uống nước lã", "Ăn đồ ôi thiu"], "Ăn chín, uống sôi giúp tiêu diệt vi khuẩn và kí sinh trùng trong thực phẩm."],
      ["Vì sao cần cảnh giác với quà vặt bán trước cổng trường?", "Không rõ nguồn gốc, dễ mất vệ sinh", ["Quá đắt", "Không ngon", "Mất thời gian"], "Quà vặt vỉa hè thường không rõ nguồn gốc, chế biến mất vệ sinh, dễ gây ngộ độc."],
      ["Thực phẩm đã ôi thiu nên xử lí thế nào?", "Bỏ đi, không tiếc", ["Rửa lại rồi ăn tiếp", "Đun kĩ rồi ăn", "Cho người khác ăn"], "Thực phẩm ôi thiu sinh ra độc tố mà đun nấu không loại hết được nên phải bỏ đi."],
    ]),
    createStarterTopic("grade-8-swimming-safety", "Lớp 8 · Tham khảo: an toàn khi bơi lội", "Quy tắc bơi an toàn và xử lí khi bị chuột rút", ["8", "🏊", "🛟"], [
      ["Nên bơi ở đâu?", "Nơi cho phép, có người lớn hoặc nhân viên cứu hộ", ["Ao hồ hoang vắng", "Sông nước chảy xiết", "Khu vực cấm bơi"], "Chỉ bơi ở nơi cho phép, có người lớn hoặc nhân viên cứu hộ để được ứng cứu kịp thời."],
      ["Trước khi xuống nước cần làm gì?", "Khởi động kĩ", ["Ăn no rồi bơi", "Nhảy ùm xuống ngay", "Uống thật nhiều nước lạnh"], "Khởi động kĩ làm nóng cơ thể, tránh chuột rút; không bơi ngay khi vừa ăn no."],
      ["Không nên bơi trong trường hợp nào?", "Khi mệt, no hoặc say nắng", ["Khi khỏe mạnh", "Khi đã khởi động kĩ", "Khi có bạn bơi cùng"], "Bơi khi mệt, no hoặc say nắng dễ gây chuột rút, đuối sức rất nguy hiểm."],
      ["Khi bị chuột rút dưới nước, nên làm gì?", "Bình tĩnh thả lỏng cơ, kêu cứu", ["Vùng vẫy thật mạnh", "Nín thở lặn xuống", "Cố bơi thật nhanh"], "Khi chuột rút cần bình tĩnh thả lỏng cơ và kêu cứu; vùng vẫy mạnh càng nguy hiểm."],
      ["Thấy bạn bị đuối nước mà mình bơi chưa giỏi, nên làm gì?", "Kêu cứu và ném vật nổi cho bạn bám", ["Nhảy xuống cứu ngay", "Bỏ đi", "Đứng quay video"], "Không biết bơi giỏi mà nhảy xuống cứu rất nguy hiểm; hãy kêu cứu và ném phao, vật nổi cho bạn."],
    ]),
  ],
  "career-experience": [
    createStarterTopic("grade-8-part-time-awareness", "Lớp 8 · Hiểu về lao động vừa sức", "Quy định lao động cho người chưa thành niên", ["8", "🧰", "📋"], [
      ["Học sinh nên ưu tiên điều gì trước việc lao động?", "Học tập", ["Kiếm tiền", "Chơi game", "Nghỉ ngơi hoàn toàn"], "Học sinh phải ưu tiên học tập; lao động không được ảnh hưởng đến sức khỏe và việc học."],
      ["Học sinh có thể làm công việc nào sau đây?", "Phụ giúp gia đình việc nhẹ phù hợp sức khỏe", ["Làm việc nặng nhọc", "Làm ca đêm", "Làm việc độc hại"], "Học sinh chỉ làm việc nhẹ, phù hợp sức khỏe; pháp luật cấm dùng lao động chưa thành niên vào việc nặng nhọc, độc hại."],
      ["Khi thấy tin tuyển việc làm trên mạng, cần cảnh giác điều gì?", "Lừa đảo kiểu việc nhẹ lương cao bất thường", ["Không có gì đáng lo", "Cứ chuyển tiền trước", "Cung cấp thông tin cá nhân"], "Tin tuyển dụng kiểu việc nhẹ lương cao, yêu cầu chuyển tiền trước thường là lừa đảo."],
      ["Pháp luật quy định về lao động chưa thành niên nhằm mục đích gì?", "Bảo vệ sức khỏe và quyền học tập", ["Cấm hoàn toàn lao động", "Tăng thu nhập", "Giảm việc làm"], "Các quy định nhằm bảo vệ sức khỏe, sự phát triển và quyền được học tập của người chưa thành niên."],
      ["Khi muốn làm thêm, em nên làm gì trước tiên?", "Hỏi ý kiến bố mẹ và thầy cô", ["Tự quyết định", "Nghỉ học đi làm", "Giấu gia đình"], "Muốn làm thêm cần hỏi ý kiến bố mẹ, thầy cô để được hướng dẫn công việc phù hợp và an toàn."],
    ]),
    createStarterTopic("grade-8-entrepreneurship-intro", "Lớp 8 · Khởi nghiệp là gì", "Ý tưởng kinh doanh và tố chất người khởi nghiệp", ["8", "💡", "🚀"], [
      ["Khởi nghiệp là gì?", "Bắt đầu hoạt động kinh doanh từ ý tưởng mới", ["Đi làm thuê", "Nghỉ hưu sớm", "Chơi chứng khoán"], "Khởi nghiệp là bắt đầu một hoạt động kinh doanh từ ý tưởng mới, sáng tạo."],
      ["Người khởi nghiệp cần những gì?", "Ý tưởng tốt, kiến thức, vốn và sự kiên trì", ["Chỉ cần may mắn", "Chỉ cần nhiều tiền", "Không cần gì cả"], "Khởi nghiệp cần ý tưởng tốt, kiến thức, vốn và đặc biệt là sự kiên trì theo đuổi."],
      ["Ví dụ nào phù hợp với bạn trẻ khởi nghiệp?", "Bán hàng online, làm đồ handmade", ["Mở ngân hàng", "Xây nhà máy", "Mua máy bay"], "Bạn trẻ thường khởi nghiệp từ việc nhỏ phù hợp sức mình như bán hàng online, làm đồ handmade."],
      ["Khi khởi nghiệp thất bại, nên làm gì?", "Coi là bài học để làm tốt hơn", ["Bỏ cuộc vĩnh viễn", "Đổ lỗi cho người khác", "Vay nặng lãi để gỡ gạc"], "Thất bại là bài học quý; người khởi nghiệp kiên trì rút kinh nghiệm để làm tốt hơn lần sau."],
      ["Ý tưởng khởi nghiệp tốt thường xuất phát từ đâu?", "Nhu cầu thực tế của mọi người", ["Sở thích nhất thời", "Bắt chước người khác", "Hoàn toàn ngẫu nhiên"], "Ý tưởng tốt giải quyết nhu cầu thực tế nên được thị trường đón nhận."],
    ]),
    createStarterTopic("grade-8-interview-skills", "Lớp 8 · Kĩ năng phỏng vấn đơn giản", "Chuẩn bị, ứng xử và tạo ấn tượng tốt khi phỏng vấn", ["8", "💼", "🗣"], [
      ["Trước buổi phỏng vấn nên chuẩn bị những gì?", "Tìm hiểu đơn vị, chuẩn bị câu trả lời về bản thân", ["Không cần chuẩn bị gì", "Đến muộn cho ấn tượng", "Ăn mặc luộm thuộm"], "Cần tìm hiểu đơn vị, chuẩn bị phần giới thiệu bản thân, ăn mặc gọn gàng và đến đúng giờ."],
      ["Khi trả lời phỏng vấn nên thể hiện thế nào?", "Trung thực, tự tin, nhìn vào người hỏi", ["Nói dối cho hay", "Cúi mặt lí nhí", "Ngắt lời người hỏi"], "Trả lời trung thực, tự tin và giao tiếp bằng mắt sẽ tạo ấn tượng tốt."],
      ["Trang phục khi đi phỏng vấn nên thế nào?", "Gọn gàng và lịch sự", ["Quần đùi áo phông", "Càng sặc sỡ càng tốt", "Mặc gì cũng được"], "Ăn mặc gọn gàng, lịch sự thể hiện sự tôn trọng và thái độ nghiêm túc."],
      ["Cuối buổi phỏng vấn có thể làm gì?", "Hỏi lại thông tin về công việc", ["Đứng dậy bỏ về ngay", "Xin số điện thoại riêng", "Chê đơn vị"], "Cuối buổi có thể hỏi lại về công việc và cảm ơn người phỏng vấn."],
      ["Điều tối kị khi đi phỏng vấn là gì?", "Nói dối về bản thân", ["Mỉm cười", "Bắt tay chào hỏi", "Cảm ơn"], "Nói dối dễ bị phát hiện và làm mất hoàn toàn cơ hội; trung thực luôn được đánh giá cao."],
    ]),
  ],
};
for (const [subjectId, topics] of Object.entries(gradeEightExtraPractice)) {
  for (const topic of topics) topic.level = "LỚP 8";
  curriculumExtensions[subjectId].push(...topics);
}

const gradeNineExtraPractice = {
  math: [
    createStarterTopic("grade-9-functions-review", "Lớp 9 · Ôn tập hàm số và đồ thị", "Đọc đồ thị, tính tăng giảm và giá trị cực trị", ["9", "ƒ", "📈"], [
      ["Đồ thị của hàm số y = 2x + 1 là hình gì?", "Đường thẳng", ["Parabol", "Đường tròn", "Hình gấp khúc"], "Đồ thị hàm bậc nhất y = ax + b (a ≠ 0) luôn là đường thẳng."],
      ["Hàm số y = x² có đồ thị là hình gì?", "Parabol", ["Đường thẳng", "Đường tròn", "Elip"], "Hàm y = ax² (a ≠ 0) có đồ thị là parabol."],
      ["Điểm nào thuộc đồ thị hàm số y = 2x − 1?", "(2; 3)", ["(1; 1)", "(0; 1)", "(2; 5)"], "Thay x = 2 được y = 3, đúng với điểm (2; 3)."],
      ["Hàm số y = −3x + 2 đồng biến hay nghịch biến?", "Nghịch biến", ["Đồng biến", "Không đổi", "Vừa đồng vừa nghịch"], "Hệ số a = −3 < 0 nên hàm nghịch biến trên R."],
      ["Giá trị nhỏ nhất của hàm số y = x² là bao nhiêu?", "0", ["−1", "1", "Không có"], "x² ≥ 0 với mọi x, đạt giá trị nhỏ nhất 0 tại x = 0."],
    ]),
    createStarterTopic("grade-9-probability-intro", "Lớp 9 · Xác suất của biến cố đơn giản", "Tính xác suất bằng số kết quả thuận lợi", ["9", "🎲", "📊"], [
      ["Xác suất của một biến cố có giá trị trong khoảng nào?", "Từ 0 đến 1", ["Từ 0 đến 10", "Từ −1 đến 1", "Lớn hơn 1"], "Xác suất luôn là số từ 0 đến 1; 0 là không bao giờ xảy ra, 1 là chắc chắn xảy ra."],
      ["Tung một đồng xu cân đối, xác suất mặt ngửa xuất hiện là bao nhiêu?", "1/2", ["1/4", "1/3", "2/3"], "Có 2 kết quả đồng khả năng, 1 kết quả thuận lợi nên xác suất là 1/2."],
      ["Gieo một con xúc xắc cân đối, xác suất ra mặt 6 chấm là bao nhiêu?", "1/6", ["1/2", "1/5", "1/3"], "Có 6 mặt đồng khả năng, chỉ 1 mặt có 6 chấm nên xác suất là 1/6."],
      ["Xác suất của biến cố chắc chắn xảy ra bằng bao nhiêu?", "1", ["0", "0,5", "100"], "Biến cố chắc chắn xảy ra có xác suất bằng 1."],
      ["Một túi có 3 bi đỏ và 2 bi xanh, lấy ngẫu nhiên một viên. Xác suất lấy được bi đỏ là bao nhiêu?", "3/5", ["2/5", "3/2", "1/5"], "Có 5 viên đồng khả năng, 3 viên đỏ nên xác suất là 3/5."],
    ]),
    createStarterTopic("grade-9-similar-triangles", "Lớp 9 · Tam giác đồng dạng", "Dấu hiệu nhận biết và ứng dụng thực tế", ["9", "△", "📐"], [
      ["Hai tam giác đồng dạng thì các cạnh tương ứng của chúng như thế nào?", "Tỉ lệ với nhau", ["Bằng nhau", "Bù nhau", "Gấp đôi nhau"], "Tam giác đồng dạng có các góc tương ứng bằng nhau và các cạnh tương ứng tỉ lệ."],
      ["Tam giác ABC đồng dạng với tam giác DEF, AB tương ứng với DE. Biết AB = 6 cm và DE = 3 cm, tỉ số đồng dạng của ABC so với DEF là bao nhiêu?", "2", ["1/2", "3", "6"], "Tỉ số đồng dạng k = AB / DE = 6 / 3 = 2."],
      ["Dấu hiệu nào sau đây chứng tỏ hai tam giác đồng dạng?", "Hai góc của tam giác này bằng hai góc của tam giác kia", ["Hai tam giác có một cạnh bằng nhau", "Hai tam giác có cùng chu vi", "Hai tam giác có cùng diện tích"], "Hai tam giác có hai cặp góc tương ứng bằng nhau thì đồng dạng với nhau."],
      ["Hai tam giác đồng dạng có diện tích lần lượt là 16 cm² và 36 cm². Tỉ số đồng dạng của tam giác thứ nhất so với tam giác thứ hai là bao nhiêu?", "2/3", ["4/9", "4/3", "1/2"], "Tỉ số diện tích bằng bình phương tỉ số đồng dạng: k² = 16/36 = 4/9, suy ra k = 2/3."],
      ["Nhờ tam giác đồng dạng, người ta có thể tính gián tiếp được gì?", "Chiều cao của vật không đo trực tiếp được", ["Diện tích mặt nước biển", "Tốc độ của ô tô", "Nhiệt độ không khí"], "Nhờ tam giác đồng dạng có thể đo chiều cao cột cờ, cây cao qua bóng nắng mà không cần trèo lên đo trực tiếp."],
    ]),
  ],
  science: [
    createStarterTopic("grade-9-organic-chemistry", "Lớp 9 · Hóa hữu cơ: hydrocarbon", "Hydrocarbon và ứng dụng trong đời sống", ["9", "⚗", "🔥"], [
      ["Hợp chất hữu cơ nhất thiết phải chứa nguyên tố nào?", "Carbon", ["Hydrogen", "Oxygen", "Nitrogen"], "Hợp chất hữu cơ được định nghĩa là hợp chất chứa carbon, thường kèm theo hydrogen, oxygen."],
      ["Methane có công thức hóa học là gì?", "CH4", ["C2H4", "CO2", "H2O"], "Methane là hydrocarbon đơn giản nhất, công thức CH4, là thành phần chính của khí gas."],
      ["Khí nào sau đây làm quả mau chín?", "Ethylene", ["Methane", "Carbon dioxide", "Nitrogen"], "Ethylene (C2H4) là chất khí tự nhiên giúp quả chín, được dùng để ủ chín trái cây."],
      ["Đốt cháy hoàn toàn một hydrocarbon thu được những sản phẩm nào?", "CO2 và hơi nước", ["CO và hơi nước", "O2 và CO2", "Carbon và hơi nước"], "Hydrocarbon chỉ gồm carbon và hydrogen nên đốt cháy hoàn toàn cho ra khí carbon dioxide và hơi nước."],
      ["Hydrocarbon là hợp chất gồm những nguyên tố nào?", "Carbon và hydrogen", ["Carbon và oxygen", "Hydrogen và oxygen", "Carbon, hydrogen và nitrogen"], "Hydrocarbon chỉ gồm hai nguyên tố carbon và hydrogen."],
    ]),
    createStarterTopic("grade-9-electromagnetism", "Lớp 9 · Điện từ và ứng dụng", "Từ trường của dòng điện và nam châm điện", ["9", "🧲", "⚡"], [
      ["Dòng điện chạy qua dây dẫn tạo ra hiện tượng gì xung quanh dây?", "Từ trường", ["Điện trường tĩnh", "Lực ma sát", "Sóng âm"], "Xung quanh dây dẫn có dòng điện chạy qua tồn tại từ trường, tác dụng lực từ lên nam châm đặt gần."],
      ["Nam châm điện gồm những bộ phận nào?", "Lõi sắt quấn dây dẫn có dòng điện", ["Lõi thép và dây không có điện", "Nam châm vĩnh cửu và pin", "Cuộn dây và bóng đèn"], "Nam châm điện là lõi sắt quấn dây dẫn có dòng điện chạy qua; ngắt điện thì mất từ tính."],
      ["Khi ngắt dòng điện qua nam châm điện thì điều gì xảy ra?", "Mất từ tính", ["Từ tính mạnh hơn", "Từ tính không đổi", "Đổi cực từ"], "Từ trường của nam châm điện do dòng điện sinh ra nên ngắt điện là mất từ tính."],
      ["Ứng dụng nào sau đây dùng nam châm điện?", "Chuông điện", ["Bóng đèn sợi đốt", "Ấm đun nước điện", "Đèn LED"], "Chuông điện dùng nam châm điện đóng ngắt liên tục để gõ búa; loa, động cơ điện, cần cẩu điện từ cũng là ứng dụng."],
      ["Làm thế nào để tăng lực từ của nam châm điện?", "Tăng cường độ dòng điện", ["Giảm số vòng dây", "Dùng lõi gỗ thay lõi sắt", "Giảm cường độ dòng điện"], "Lực từ của nam châm điện tăng khi tăng cường độ dòng điện, tăng số vòng dây hoặc dùng lõi sắt tốt."],
    ]),
    createStarterTopic("grade-9-evolution-intro", "Lớp 9 · Tiến hóa và chọn lọc tự nhiên", "Thuyết Darwin và bằng chứng hóa thạch", ["9", "🦴", "🌿"], [
      ["Ai đề xuất thuyết tiến hóa bằng chọn lọc tự nhiên?", "Charles Darwin", ["Isaac Newton", "Albert Einstein", "Louis Pasteur"], "Darwin đề xuất thuyết tiến hóa bằng chọn lọc tự nhiên trong tác phẩm Nguồn gốc các loài."],
      ["Theo chọn lọc tự nhiên, cá thể nào có nhiều cơ hội sống sót và sinh sản hơn?", "Cá thể thích nghi tốt với môi trường", ["Cá thể to lớn nhất", "Cá thể nhanh nhẹn nhất", "Cá thể sống đơn độc"], "Chọn lọc tự nhiên ưu đãi cá thể thích nghi tốt, giúp chúng truyền đặc điểm cho đời sau."],
      ["Bằng chứng quan trọng nhất về quá trình tiến hóa là gì?", "Hóa thạch", ["Đá núi lửa", "Nước biển", "Không khí"], "Hóa thạch lưu giữ hình thái sinh vật cổ, cho thấy sự biến đổi dần dần của các loài."],
      ["Đặc điểm có lợi cho sinh tồn được truyền cho đời sau bằng con đường nào?", "Di truyền", ["Học tập", "Bắt chước", "May mắn"], "Cá thể thích nghi tốt sinh sản nhiều hơn và truyền đặc điểm có lợi qua di truyền cho đời sau."],
      ["Theo quan điểm tiến hóa, con người có nguồn gốc như thế nào?", "Là sản phẩm của quá trình tiến hóa lâu dài", ["Xuất hiện nguyên vẹn từ đầu", "Được tạo ra một lần duy nhất", "Không liên quan đến động vật"], "Con người cũng là sản phẩm của quá trình tiến hóa lâu dài từ tổ tiên chung với các loài linh trưởng."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-9-contemporary-authors", "Lớp 9 · Tác giả văn học hiện đại", "Tác giả tiêu biểu và phong cách sáng tác", ["9", "✍", "📚"], [
      ["Nguyễn Tuân nổi tiếng với thể loại nào?", "Tùy bút", ["Truyện cổ tích", "Thơ lục bát", "Kịch nói"], "Nguyễn Tuân là bậc thầy tùy bút với phong cách tài hoa, uyên bác."],
      ["“Dế Mèn phiêu lưu kí” là tác phẩm của ai?", "Tô Hoài", ["Nguyễn Tuân", "Nguyễn Nhật Ánh", "Nam Cao"], "Tô Hoài là tác giả của “Dế Mèn phiêu lưu kí”, tác phẩm thiếu nhi kinh điển."],
      ["Nguyễn Nhật Ánh nổi tiếng với dòng truyện nào?", "Truyện thiếu nhi", ["Tiểu thuyết lịch sử", "Thơ tình", "Ký sự chiến tranh"], "Nguyễn Nhật Ánh được yêu mến qua các truyện thiếu nhi giàu cảm xúc tuổi thơ."],
      ["Tìm hiểu tác giả giúp người đọc điều gì?", "Hiểu sâu hơn về tác phẩm", ["Nhớ được năm sinh của tác giả", "Đoán được giá sách", "Thuộc lòng mọi tác phẩm"], "Biết hoàn cảnh, phong cách của tác giả giúp hiểu sâu tác phẩm và lí giải cách viết."],
      ["Phong cách của mỗi tác giả được thể hiện rõ nhất qua yếu tố nào?", "Cách dùng ngôn từ và hình ảnh riêng", ["Số lượng tác phẩm đã in", "Độ dài của tác phẩm", "Màu bìa sách"], "Mỗi tác giả có phong cách riêng thể hiện qua cách dùng ngôn từ, hình ảnh và giọng điệu."],
    ]),
    createStarterTopic("grade-9-film-adaptation", "Lớp 9 · Từ văn học đến điện ảnh", "Chuyển thể văn học và so sánh truyện – phim", ["9", "🎬", "📖"], [
      ["“Tôi thấy hoa vàng trên cỏ xanh” là tác phẩm của ai trước khi được chuyển thể thành phim?", "Nguyễn Nhật Ánh", ["Tô Hoài", "Nguyễn Tuân", "Xuân Diệu"], "Truyện dài “Tôi thấy hoa vàng trên cỏ xanh” của Nguyễn Nhật Ánh được Victor Vũ chuyển thể thành phim điện ảnh."],
      ["Khi chuyển thể sang phim, nhà làm phim thường làm gì với chi tiết truyện?", "Thay đổi cho phù hợp ngôn ngữ điện ảnh", ["Giữ nguyên từng câu chữ", "Bỏ hết nhân vật phụ", "Thêm kết thúc bi thảm"], "Phim có thể thay đổi, lược bớt hoặc thêm chi tiết cho phù hợp với ngôn ngữ hình ảnh của điện ảnh."],
      ["So sánh truyện và phim chuyển thể giúp người học điều gì?", "Thấy cách kể chuyện khác nhau của hai loại hình", ["Biết diễn viên nào đẹp nhất", "Đoán doanh thu phòng vé", "Học thuộc lời thoại phim"], "So sánh giúp thấy văn học kể bằng ngôn từ còn điện ảnh kể bằng hình ảnh, âm thanh."],
      ["“Dế Mèn phiêu lưu kí” được biết đến đầu tiên dưới hình thức nào?", "Truyện viết", ["Phim hoạt hình", "Kịch sân khấu", "Game điện tử"], "“Dế Mèn phiêu lưu kí” của Tô Hoài là tác phẩm văn học, sau này mới được chuyển thể sang nhiều loại hình khác."],
      ["Điểm khác biệt cơ bản giữa truyện và phim là gì?", "Truyện dùng ngôn từ, phim dùng hình ảnh và âm thanh", ["Truyện luôn hay hơn phim", "Phim không có nhân vật", "Truyện không có cốt truyện"], "Văn học xây dựng thế giới bằng ngôn từ để người đọc tưởng tượng; điện ảnh hiện thực hóa bằng hình ảnh, âm thanh."],
    ]),
    createStarterTopic("grade-9-poetry-analysis", "Lớp 9 · Phân tích một bài thơ", "Các bước phân tích thơ có dẫn chứng", ["9", "🖋", "🌙"], [
      ["Bước đầu tiên khi phân tích một bài thơ là gì?", "Nêu cảm nhận chung về bài thơ", ["Đếm số chữ trong mỗi câu", "Tìm năm sinh tác giả", "Dịch thơ sang tiếng Anh"], "Phân tích thơ đi từ cảm nhận chung, sau đó mới đi sâu vào từng khổ, từng hình ảnh."],
      ["Khi nhận xét về một hình ảnh thơ, cần có yếu tố nào?", "Dẫn chứng từ văn bản", ["Cảm xúc cá nhân suông", "Lời khen chung chung", "So sánh với bài khác"], "Mọi nhận xét trong phân tích thơ cần có dẫn chứng từ văn bản mới thuyết phục."],
      ["Biện pháp tu từ nào so sánh hai sự vật có nét tương đồng?", "So sánh", ["Nhân hóa", "Ẩn dụ", "Điệp ngữ"], "So sánh đối chiếu hai sự vật có nét tương đồng qua từ so sánh như như, là, tựa."],
      ["Mạch cảm xúc trong bài thơ thường diễn biến như thế nào?", "Phát triển theo trình tự các khổ thơ", ["Ngẫu nhiên không theo quy luật", "Chỉ tập trung ở khổ đầu", "Không bao giờ thay đổi"], "Cảm xúc trữ tình thường vận động, phát triển dần qua từng khổ thơ."],
      ["Kết bài phân tích thơ nên làm gì?", "Khái quát giá trị nội dung và nghệ thuật", ["Kể lại toàn bộ nội dung", "Chép lại bài thơ", "Phê bình tác giả"], "Kết bài khái quát giá trị nội dung, nghệ thuật và ý nghĩa của bài thơ."],
    ]),
  ],
  english: [
    createStarterTopic("grade-9-wish-clauses", "Lớp 9 · Câu ước với wish", "Wish + quá khứ đơn, would và quá khứ hoàn thành", ["9", "ABC", "💭"], [
      ["Chọn câu đúng: ___", "I wish I were taller.", ["I wish I am taller.", "I wish I will be taller.", "I wish I have been taller."], "Ước trái với hiện tại dùng wish + quá khứ đơn (were với mọi ngôi)."],
      ["Điền từ: I wish you ___ stop talking.", "would", ["will", "can", "shall"], "Wish + would diễn tả mong muốn ai đó thay đổi hành động."],
      ["Câu nào diễn tả tiếc nuối quá khứ?", "I wish I had studied harder.", ["I wish I study harder.", "I wish I would study harder.", "I wish I studied harder yesterday."], "Tiếc nuối quá khứ dùng wish + quá khứ hoàn thành."],
      ["Chọn câu đúng: ___", "I wish it would rain.", ["I wish it rains.", "I wish it will rain.", "I wish it is raining."], "Mong điều gì đó xảy ra/thay đổi dùng wish + would."],
      ["“I wish I were rich” diễn tả điều gì?", "Ước trái với hiện tại", ["Tiếc nuối quá khứ", "Mong ai đó thay đổi", "Dự định tương lai"], "Wish + quá khứ đơn diễn tả ước muốn trái với hiện tại."],
    ]),
    createStarterTopic("grade-9-reported-questions", "Lớp 9 · Câu tường thuật dạng câu hỏi", "Câu hỏi Yes/No với if/whether và câu hỏi Wh-", ["9", "ABC", "💬"], [
      ["Chọn câu tường thuật đúng: “Are you tired?” → She asked me ___", "if I was tired.", ["that I am tired.", "if am I tired.", "whether was I tired."], "Tường thuật câu hỏi Yes/No dùng if/whether, lùi thì và không đảo trợ động từ."],
      ["Chọn câu đúng: “Where do you live?” → He asked me ___", "where I lived.", ["where did I live.", "where do I live.", "where I live."], "Tường thuật câu hỏi Wh- giữ từ để hỏi, lùi thì và không đảo trợ động từ."],
      ["“Did you finish your homework?” → She asked me ___", "whether I had finished my homework.", ["whether did I finish my homework.", "that I finished my homework.", "if I have finished my homework."], "Câu hỏi Yes/No ở quá khứ đơn khi tường thuật lùi về quá khứ hoàn thành."],
      ["Câu nào SAI khi tường thuật câu hỏi?", "He asked what did she want.", ["He asked what she wanted.", "He asked if she was happy.", "She asked where I was going."], "Trong câu tường thuật không đảo trợ động từ lên trước chủ ngữ."],
      ["“Why are you late?” → The teacher asked ___", "why I was late.", ["why was I late.", "why am I late.", "that why I was late."], "Tường thuật câu hỏi Wh-: giữ từ để hỏi, lùi thì, không đảo trợ động từ."],
    ]),
    createStarterTopic("grade-9-tag-questions", "Lớp 9 · Câu hỏi đuôi", "Đuôi xác nhận: khẳng định–phủ định và ngược lại", ["9", "ABC", "🏷️"], [
      ["Điền đuôi câu: You like coffee, ___?", "don't you?", ["do you?", "doesn't you?", "aren't you?"], "Mệnh đề khẳng định đi với đuôi phủ định, dùng trợ động từ do với you."],
      ["Điền đuôi câu: She can't swim, ___?", "can she?", ["can't she?", "could she?", "does she?"], "Mệnh đề phủ định đi với đuôi khẳng định, dùng lại trợ động từ can."],
      ["Điền đuôi câu: I am late, ___?", "aren't I?", ["amn't I?", "isn't I?", "don't I?"], "Trường hợp đặc biệt: I am đi với đuôi aren't I."],
      ["Điền đuôi câu: Let's go out, ___?", "shall we?", ["will we?", "don't we?", "shan't we?"], "Let's... luôn đi với đuôi shall we."],
      ["Điền đuôi câu: They have finished, ___?", "haven't they?", ["don't they?", "hasn't they?", "didn't they?"], "Mệnh đề khẳng định với have (hiện tại hoàn thành) đi với đuôi phủ định haven't they."],
    ]),
  ],
  history: [
    createStarterTopic("grade-9-doi-moi", "Lớp 9 · Công cuộc Đổi mới", "Đại hội VI (1986) và đường lối Đổi mới toàn diện", ["9", "📜", "🌾"], [
      ["Đại hội nào đề ra đường lối Đổi mới?", "Đại hội VI (tháng 12/1986)", ["Đại hội V (1982)", "Đại hội VII (1991)", "Đại hội IV (1976)"], "Đại hội VI của Đảng (12/1986) đề ra đường lối Đổi mới toàn diện đất nước."],
      ["Kinh tế Việt Nam chuyển sang cơ chế nào sau Đổi mới?", "Kinh tế thị trường định hướng xã hội chủ nghĩa", ["Kinh tế kế hoạch hóa tập trung", "Kinh tế bao cấp", "Kinh tế tự cung tự cấp"], "Đổi mới chuyển nền kinh tế sang cơ chế thị trường định hướng xã hội chủ nghĩa."],
      ["Đổi mới đã xóa bỏ chế độ nào?", "Chế độ bao cấp", ["Chế độ tư hữu", "Chế độ hợp tác xã", "Chế độ thuế nông nghiệp"], "Đổi mới xóa bỏ cơ chế bao cấp, chuyển sang hạch toán kinh doanh."],
      ["Thành tựu nổi bật của Đổi mới trong nông nghiệp là gì?", "Việt Nam trở thành nước xuất khẩu gạo hàng đầu", ["Xóa bỏ hoàn toàn nông nghiệp", "Chỉ trồng cây công nghiệp", "Nhập khẩu gạo mỗi năm"], "Đổi mới giúp nông nghiệp phát triển, Việt Nam trở thành nước xuất khẩu gạo hàng đầu thế giới."],
      ["Ý nghĩa lớn nhất của công cuộc Đổi mới là gì?", "Đưa đất nước thoát khỏi khủng hoảng kinh tế – xã hội", ["Đưa Việt Nam gia nhập ASEAN ngay", "Thay đổi hoàn toàn chế độ chính trị", "Chấm dứt quan hệ với các nước"], "Đổi mới đưa Việt Nam thoát khỏi khủng hoảng, tạo tiền đề phát triển và hội nhập."],
    ]),
    createStarterTopic("grade-9-asean", "Lớp 9 · Việt Nam và ASEAN", "Lịch sử ASEAN và sự tham gia của Việt Nam", ["9", "📜", "🤝"], [
      ["ASEAN được thành lập năm nào?", "1967", ["1995", "1976", "2015"], "ASEAN thành lập năm 1967 với 5 nước sáng lập."],
      ["Việt Nam gia nhập ASEAN vào thời gian nào?", "28/7/1995", ["28/7/1997", "7/11/2007", "31/12/2015"], "Việt Nam chính thức gia nhập ASEAN ngày 28/7/1995."],
      ["Cộng đồng ASEAN (2015) gồm mấy trụ cột?", "Ba trụ cột", ["Hai trụ cột", "Bốn trụ cột", "Năm trụ cột"], "Cộng đồng ASEAN gồm ba trụ cột: chính trị – an ninh, kinh tế, văn hóa – xã hội."],
      ["Trụ cột nào KHÔNG thuộc Cộng đồng ASEAN?", "Quân sự chung", ["Chính trị – an ninh", "Kinh tế", "Văn hóa – xã hội"], "Ba trụ cột của ASEAN là chính trị – an ninh, kinh tế và văn hóa – xã hội; không có trụ cột quân sự chung."],
      ["Tham gia ASEAN mang lại lợi ích nào cho Việt Nam?", "Hội nhập khu vực, thu hút đầu tư", ["Đóng cửa biên giới", "Cấm xuất khẩu gạo", "Rút khỏi các tổ chức khác"], "Tham gia ASEAN giúp Việt Nam hội nhập, mở rộng hợp tác và thu hút đầu tư."],
    ]),
    createStarterTopic("grade-9-vietnam-integration", "Lớp 9 · Việt Nam hội nhập quốc tế", "Bình thường hóa quan hệ, APEC và WTO", ["9", "📜", "🌐"], [
      ["Việt Nam bình thường hóa quan hệ với Mỹ năm nào?", "1995", ["1975", "1986", "2007"], "Việt Nam và Mỹ bình thường hóa quan hệ ngoại giao năm 1995."],
      ["Việt Nam gia nhập APEC năm nào?", "1998", ["1995", "2007", "2015"], "Việt Nam gia nhập Diễn đàn hợp tác kinh tế châu Á – Thái Bình Dương (APEC) năm 1998."],
      ["Việt Nam trở thành thành viên WTO năm nào?", "2007", ["1995", "1998", "2015"], "Việt Nam chính thức gia nhập Tổ chức Thương mại Thế giới (WTO) năm 2007."],
      ["Hội nhập quốc tế mang lại cơ hội nào cho Việt Nam?", "Mở rộng thị trường, thu hút đầu tư", ["Đóng cửa thị trường trong nước", "Giảm xuất khẩu", "Hạn chế du lịch"], "Hội nhập giúp mở rộng thị trường, thu hút đầu tư và chuyển giao công nghệ."],
      ["Thách thức của hội nhập đối với Việt Nam là gì?", "Cạnh tranh gay gắt với hàng hóa nước ngoài", ["Không có đối tác thương mại", "Bị cấm xuất khẩu", "Mất hoàn toàn chủ quyền"], "Hội nhập đặt ra thách thức cạnh tranh; người trẻ cần ngoại ngữ và kĩ năng để thích ứng."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-9-northern-midlands", "Lớp 9 · Vùng Trung du và miền núi Bắc Bộ", "Địa hình, tài nguyên và thế mạnh kinh tế", ["9", "🗺️", "⛰️"], [
      ["Đặc điểm địa hình nổi bật của vùng là gì?", "Núi cao, chia cắt mạnh", ["Đồng bằng rộng lớn", "Cao nguyên bằng phẳng", "Đồi thấp lượn sóng"], "Vùng Trung du và miền núi Bắc Bộ có địa hình núi cao, bị chia cắt mạnh."],
      ["Khoáng sản nào là thế mạnh của vùng?", "Than và apatit", ["Dầu mỏ và khí đốt", "Bôxit và vàng", "Đá vôi và cát"], "Vùng giàu tài nguyên khoáng sản, nổi bật là than (Quảng Ninh) và apatit (Lào Cai)."],
      ["Nhà máy thủy điện nào nằm ở vùng này?", "Hòa Bình và Sơn La", ["Trị An và Thác Mơ", "Yaly và Sê San", "Hàm Thuận và Đa Nhim"], "Các nhà máy thủy điện lớn Hòa Bình, Sơn La khai thác tiềm năng sông Đà của vùng."],
      ["Thế mạnh kinh tế nào KHÔNG phải của vùng?", "Đánh bắt hải sản xa bờ", ["Khai thác khoáng sản", "Phát triển thủy điện", "Trồng cây công nghiệp"], "Vùng không giáp biển nên đánh bắt hải sản không phải thế mạnh; thế mạnh là khoáng sản, thủy điện, cây công nghiệp."],
      ["Khó khăn lớn của vùng là gì?", "Giao thông khó khăn, thiên tai thường xuyên", ["Thiếu hoàn toàn tài nguyên", "Dân cư quá đông đúc", "Không có tiềm năng du lịch"], "Địa hình hiểm trở khiến giao thông khó khăn, thiên tai (lũ quét, sạt lở) thường xuyên xảy ra."],
    ]),
    createStarterTopic("grade-9-south-central-coast", "Lớp 9 · Vùng Duyên hải Nam Trung Bộ", "Bờ biển dài, hải sản và du lịch biển", ["9", "🗺️", "🏖️"], [
      ["Đặc điểm tự nhiên nổi bật của vùng là gì?", "Đường bờ biển dài, nhiều vũng vịnh", ["Núi cao chia cắt mạnh", "Đồng bằng châu thổ rộng", "Cao nguyên đất đỏ"], "Vùng có đường bờ biển dài với nhiều vũng, vịnh và đảo."],
      ["Khí hậu vùng về mùa hè có đặc điểm gì?", "Khô hạn, thiếu nước", ["Mưa nhiều quanh năm", "Lạnh giá kéo dài", "Ẩm ướt liên tục"], "Vùng chịu ảnh hưởng của gió phơn nên mùa hè khô hạn, thiếu nước ngọt."],
      ["Địa danh du lịch biển nào thuộc vùng?", "Nha Trang và Mũi Né", ["Hạ Long và Cát Bà", "Phú Quốc và Côn Đảo", "Sầm Sơn và Cửa Lò"], "Nha Trang (Khánh Hòa) và Mũi Né (Bình Thuận) là các điểm du lịch biển nổi tiếng của vùng."],
      ["Thế mạnh kinh tế nào của vùng?", "Đánh bắt hải sản và du lịch biển", ["Trồng lúa nước thâm canh", "Khai thác than đá", "Chăn nuôi bò sữa"], "Với bờ biển dài, vùng phát triển mạnh đánh bắt hải sản và du lịch biển."],
      ["Thiên tai nào thường đe dọa vùng?", "Bão và hạn hán", ["Lũ quét và sạt lở đất", "Động đất mạnh", "Rét đậm kéo dài"], "Vùng thường chịu bão từ Biển Đông và tình trạng hạn hán, thiếu nước ngọt về mùa khô."],
    ]),
    createStarterTopic("grade-9-sustainable-development", "Lớp 9 · Phát triển bền vững", "Hài hòa kinh tế – xã hội – môi trường", ["9", "🗺️", "🌱"], [
      ["Phát triển bền vững là gì?", "Đáp ứng nhu cầu hiện tại mà không ảnh hưởng thế hệ tương lai", ["Phát triển kinh tế bằng mọi giá", "Chỉ bảo vệ môi trường, bỏ qua kinh tế", "Khai thác tối đa tài nguyên hiện có"], "Phát triển bền vững hài hòa ba mặt: kinh tế, xã hội và môi trường, không ảnh hưởng thế hệ tương lai."],
      ["Biểu hiện nào của phát triển bền vững?", "Dùng năng lượng tái tạo, sản xuất sạch", ["Chặt rừng lấy gỗ xuất khẩu", "Xả thải chưa xử lý ra sông", "Khai thác khoáng sản bừa bãi"], "Dùng năng lượng tái tạo, sản xuất sạch và bảo vệ tài nguyên là biểu hiện của phát triển bền vững."],
      ["Năng lượng nào là năng lượng tái tạo?", "Năng lượng mặt trời", ["Than đá", "Dầu mỏ", "Khí đốt"], "Năng lượng mặt trời (cùng với gió, thủy triều) là năng lượng tái tạo, không cạn kiệt."],
      ["Mỗi cá nhân góp phần phát triển bền vững bằng cách nào?", "Sống xanh, tiết kiệm tài nguyên", ["Dùng túi ni lông một lần", "Xả rác bừa bãi", "Lãng phí điện nước"], "Mỗi người góp phần bằng lối sống xanh: tiết kiệm điện nước, giảm rác thải, bảo vệ môi trường."],
      ["Ba trụ cột của phát triển bền vững là gì?", "Kinh tế – xã hội – môi trường", ["Công nghiệp – nông nghiệp – dịch vụ", "Đô thị – nông thôn – miền núi", "Sản xuất – phân phối – tiêu dùng"], "Phát triển bền vững là sự hài hòa giữa phát triển kinh tế, tiến bộ xã hội và bảo vệ môi trường."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-9-html-basics", "Lớp 9 · Làm quen với HTML", "Thẻ HTML cơ bản tạo cấu trúc trang web", ["9", "<>", "🌐"], [
      ["Thẻ nào tạo tiêu đề lớn nhất trong HTML?", "<h1>", ["<p>", "<img>", "<h6>"], "Thẻ h1 tạo tiêu đề cấp 1, lớn nhất; p là đoạn văn, img chèn ảnh, h6 là tiêu đề nhỏ nhất."],
      ["Thẻ <p> dùng để làm gì?", "Tạo đoạn văn bản", ["Tạo tiêu đề", "Chèn ảnh", "Tạo liên kết"], "Thẻ p (paragraph) bao quanh một đoạn văn bản trên trang web."],
      ["Một thẻ HTML thường gồm những gì?", "Thẻ mở và thẻ đóng", ["Chỉ thẻ mở", "Chỉ thẻ đóng", "Hai thẻ mở"], "Hầu hết các thẻ có thẻ mở <tên> và thẻ đóng </tên> bao quanh nội dung."],
      ["Thẻ nào chèn ảnh vào trang web?", "<img>", ["<pic>", "<photo>", "<image>"], "Thẻ img dùng để chèn ảnh; thuộc tính src chỉ đường dẫn tới ảnh."],
      ["HTML là loại ngôn ngữ gì?", "Ngôn ngữ đánh dấu", ["Ngôn ngữ lập trình", "Hệ điều hành", "Phần mềm vẽ"], "HTML (HyperText Markup Language) là ngôn ngữ đánh dấu tạo cấu trúc trang web."],
    ]),
    createStarterTopic("grade-9-databases-intro", "Lớp 9 · Cơ sở dữ liệu đơn giản", "Bảng, bản ghi và trường lưu trữ thông tin", ["9", "🗂️", "📊"], [
      ["Trong cơ sở dữ liệu dạng bảng, mỗi hàng được gọi là gì?", "Bản ghi", ["Trường", "Truy vấn", "Bảng"], "Mỗi hàng của bảng là một bản ghi, mô tả một đối tượng cụ thể như một học sinh."],
      ["Mỗi cột trong bảng cơ sở dữ liệu được gọi là gì?", "Trường", ["Bản ghi", "Hàng", "Ô dữ liệu"], "Mỗi cột là một trường, mô tả một thuộc tính như họ tên, lớp, điểm."],
      ["Muốn tìm nhanh học sinh có điểm cao nhất trong bảng, em dùng gì?", "Truy vấn", ["Ghi tay toàn bộ", "Xóa bảng", "Đổi tên bảng"], "Truy vấn giúp tìm và lọc nhanh thông tin cần thiết trong cơ sở dữ liệu."],
      ["Bảng Học sinh có các trường họ tên, lớp, điểm. Trường nào hợp nhất để định danh mỗi học sinh?", "Mã học sinh", ["Họ tên", "Lớp", "Điểm"], "Họ tên có thể trùng, lớp và điểm thay đổi; mã học sinh là duy nhất cho mỗi bản ghi."],
      ["Cơ sở dữ liệu lưu trữ thông tin dưới dạng nào?", "Các bảng có tổ chức", ["Văn bản lộn xộn", "Ảnh chụp màn hình", "Từng file rời rạc"], "Cơ sở dữ liệu lưu trữ thông tin có tổ chức dưới dạng bảng với hàng và cột rõ ràng."],
    ]),
    createStarterTopic("grade-9-ai-intro", "Lớp 9 · Trí tuệ nhân tạo quanh ta", "AI học từ dữ liệu, dùng cần tỉnh táo", ["9", "🤖", "🧠"], [
      ["Trí tuệ nhân tạo (AI) là gì?", "Công nghệ giúp máy thực hiện việc cần trí tuệ con người", ["Robot biết suy nghĩ như người", "Phần mềm diệt virus", "Mạng xã hội"], "AI giúp máy tính nhận diện giọng nói, gợi ý video, dịch thuật — những việc cần trí tuệ con người."],
      ["AI trở nên thông minh hơn nhờ điều gì?", "Học từ dữ liệu tốt", ["Càng nhiều nút bấm", "Màn hình càng lớn", "Giá càng đắt"], "AI học từ dữ liệu; dữ liệu càng tốt và càng nhiều, AI càng thông minh."],
      ["Ví dụ nào sau đây là ứng dụng của AI?", "Gợi ý video trên mạng xã hội", ["Bàn phím cơ", "Ổ cứng SSD", "Cáp mạng"], "Gợi ý video, nhận diện giọng nói, dịch thuật là những ứng dụng quen thuộc của AI."],
      ["Khi dùng AI, điều nào sau đây là đúng?", "Kiểm chứng lại thông tin AI đưa ra", ["Tin tuyệt đối mọi câu trả lời", "Chia sẻ mật khẩu cho AI", "Nhờ AI làm bài hộ mọi lúc"], "AI có thể đưa thông tin sai; cần kiểm chứng lại và không chia sẻ dữ liệu nhạy cảm."],
      ["Dữ liệu nhạy cảm nào KHÔNG nên chia sẻ cho AI?", "Mật khẩu tài khoản cá nhân", ["Tên một thành phố", "Một công thức nấu ăn", "Tên loài hoa"], "Không chia sẻ dữ liệu nhạy cảm như mật khẩu, địa chỉ nhà, số điện thoại cho AI."],
    ]),
  ],
  technology: [
    createStarterTopic("grade-9-project-design", "Lớp 9 · Thiết kế dự án kĩ thuật", "Các bước thiết kế kĩ thuật và làm việc nhóm", ["9", "📐", "🛠️"], [
      ["Bước đầu tiên của quy trình thiết kế kĩ thuật là gì?", "Xác định nhu cầu", ["Chế tạo thử", "Chọn vật liệu", "Đánh giá sản phẩm"], "Thiết kế bắt đầu từ xác định nhu cầu, sau đó tìm hiểu thông tin rồi mới đề xuất phương án."],
      ["Bản vẽ kĩ thuật có vai trò gì?", "Thể hiện ý tưởng thiết kế", ["Trang trí sản phẩm", "Thay thế sản phẩm thật", "Quảng cáo bán hàng"], "Bản vẽ kĩ thuật thể hiện ý tưởng thiết kế một cách chính xác để chế tạo."],
      ["Sau khi đề xuất nhiều phương án, cần làm gì tiếp theo?", "Chọn phương án tối ưu", ["Làm tất cả các phương án", "Bỏ qua bước đánh giá", "Chọn phương án rẻ nhất"], "Cần so sánh các phương án rồi chọn phương án tối ưu trước khi chế tạo thử."],
      ["Chế tạo thử (mô hình thử nghiệm) nhằm mục đích gì?", "Kiểm tra và đánh giá thiết kế", ["Bán ngay ra thị trường", "Khoe với bạn bè", "Thay cho bản vẽ"], "Chế tạo thử để kiểm tra thiết kế có hoạt động đúng không, từ đó điều chỉnh cho tốt hơn."],
      ["Điều nào giúp dự án làm việc nhóm thành công?", "Ghi chép cẩn thận và phân công rõ ràng", ["Một người làm hết", "Không cần ghi chép", "Tranh cãi xem ai đúng"], "Làm việc nhóm hiệu quả cần phân công rõ ràng và ghi chép cẩn thận quá trình thực hiện."],
    ]),
    createStarterTopic("grade-9-automation", "Lớp 9 · Tự động hóa trong sản xuất", "Cảm biến, bộ điều khiển và robot", ["9", "🦾", "⚙️"], [
      ["Tự động hóa trong sản xuất là gì?", "Dùng máy móc, robot thay con người làm việc lặp lại", ["Thuê thêm nhiều công nhân", "Làm mọi việc bằng tay", "Tắt hết máy móc"], "Tự động hóa dùng máy móc, robot thay con người làm các công việc lặp lại hoặc nguy hiểm."],
      ["Cảm biến trong hệ thống tự động có nhiệm vụ gì?", "Thu thập thông tin từ môi trường", ["Ra lệnh cho robot", "Cung cấp điện năng", "Đóng gói sản phẩm"], "Cảm biến thu thập thông tin như nhiệt độ, ánh sáng, vị trí để bộ điều khiển xử lí."],
      ["Bộ điều khiển trong hệ thống tự động làm gì?", "Xử lí thông tin và ra lệnh", ["Thu thập thông tin", "Chỉ hiển thị đèn báo", "Cắt điện toàn hệ thống"], "Bộ điều khiển xử lí thông tin từ cảm biến rồi ra lệnh cho cơ cấu chấp hành hoạt động."],
      ["Lợi ích của tự động hóa là gì?", "Tăng năng suất, chất lượng ổn định", ["Giảm hết mọi chi phí ngay", "Không cần con người nữa", "Sản phẩm xấu đi"], "Tự động hóa tăng năng suất và cho chất lượng sản phẩm ổn định, đồng đều."],
      ["Trước làn sóng tự động hóa, người lao động nên làm gì?", "Học kĩ năng mới", ["Ngừng học tập", "Chỉ làm việc chân tay", "Tránh xa công nghệ"], "Máy móc thay thế việc lặp lại nên người lao động cần học kĩ năng mới để thích ứng."],
    ]),
    createStarterTopic("grade-9-green-technology", "Lớp 9 · Công nghệ xanh", "Năng lượng sạch và bảo vệ môi trường", ["9", "🌱", "♻️"], [
      ["Công nghệ xanh là gì?", "Công nghệ giảm tác động xấu tới môi trường", ["Công nghệ sơn màu xanh", "Công nghệ giá rẻ nhất", "Công nghệ chỉ dùng ban đêm"], "Công nghệ xanh giảm tác động môi trường: năng lượng tái tạo, vật liệu tái chế, sản xuất sạch."],
      ["Nguồn năng lượng nào sau đây là tái tạo?", "Năng lượng mặt trời", ["Than đá", "Dầu mỏ", "Khí đốt"], "Mặt trời, gió, nước là năng lượng tái tạo; than đá, dầu mỏ, khí đốt là nhiên liệu hóa thạch."],
      ["Xe điện góp phần bảo vệ môi trường vì sao?", "Giảm khí thải độc hại", ["Chạy nhanh hơn xe xăng", "Không cần sạc điện", "Rẻ hơn mọi loại xe"], "Xe điện không thải khí như xe xăng nên giảm ô nhiễm không khí ở đô thị."],
      ["Nhà thông minh tiết kiệm năng lượng bằng cách nào?", "Tự tắt thiết bị khi không dùng", ["Bật đèn cả ngày", "Mở điều hòa tối đa", "Dùng càng nhiều điện càng tốt"], "Nhà thông minh tự tắt đèn, điều hòa khi không có người, giúp tiết kiệm năng lượng."],
      ["Hành động nào của học sinh là lựa chọn xanh?", "Ưu tiên sản phẩm tái chế, tiết kiệm điện", ["Xả rác bừa bãi", "Dùng túi nilon một lần", "Quên tắt đèn khi ra khỏi phòng"], "Lựa chọn sản phẩm xanh, tiết kiệm điện nước là cách thiết thực bảo vệ Trái Đất."],
    ]),
  ],
  civics: [
    createStarterTopic("grade-9-selflessness", "Lớp 9 · Chí công vô tư", "Đặt lợi ích chung lên trên hết", ["9", "⚖️", "🤝"], [
      ["Chí công vô tư là gì?", "Đặt lợi ích chung lên trên lợi ích cá nhân", ["Chỉ lo cho bản thân", "Thiên vị người thân", "Làm việc vì tiền thưởng"], "Chí công vô tư là đặt lợi ích chung lên trên lợi ích cá nhân, công bằng, không thiên vị."],
      ["Người chí công vô tư thường được mọi người thế nào?", "Tin tưởng giao việc quan trọng", ["Xa lánh", "Nghi ngờ", "Chê cười"], "Người công bằng, không thiên vị được tin tưởng giao những việc quan trọng."],
      ["Là lớp trưởng, em xử lí thế nào khi bạn thân vi phạm nội quy?", "Xử lí công bằng như mọi bạn khác", ["Bỏ qua cho bạn thân", "Phạt nặng hơn để làm gương", "Giấu giúp bạn"], "Chí công vô tư là không bênh bạn thân khi bạn sai, xử lí công bằng với tất cả mọi người."],
      ["Hành vi nào thể hiện chí công vô tư?", "Chia việc công bằng khi làm việc nhóm", ["Nhận hết công về mình", "Đổ lỗi cho bạn", "Lấy phần dễ nhất"], "Công bằng trong chia việc và ghi nhận công sức của từng người là chí công vô tư."],
      ["Thái độ nào trái với chí công vô tư?", "Thiên vị, vụ lợi cá nhân", ["Siêng năng học tập", "Giúp đỡ bạn bè", "Tôn trọng thầy cô"], "Thiên vị người thân, đặt lợi ích cá nhân lên trên lợi ích chung là trái với chí công vô tư."],
    ]),
    createStarterTopic("grade-9-cultural-heritage", "Lớp 9 · Kế thừa và phát huy truyền thống", "Giữ gìn và làm rạng rỡ truyền thống dân tộc", ["9", "🏛️", "🎎"], [
      ["Truyền thống tốt đẹp nào sau đây của dân tộc Việt Nam?", "Yêu nước, đoàn kết, hiếu học", ["Lười biếng", "Ích kỉ", "Vô lễ"], "Yêu nước, đoàn kết, hiếu học, tôn sư trọng đạo là truyền thống tốt đẹp của dân tộc."],
      ["Kế thừa truyền thống có nghĩa là gì?", "Giữ gìn những giá trị tốt đẹp", ["Quên hết cái cũ", "Chỉ giữ cho riêng mình", "Chê bai quá khứ"], "Kế thừa là giữ gìn những giá trị tốt đẹp mà cha ông để lại cho thế hệ sau."],
      ["Phát huy truyền thống có nghĩa là gì?", "Làm cho truyền thống rạng rỡ hơn trong thời đại mới", ["Giữ nguyên không đổi mới", "Chỉ nhắc trong sách vở", "Để truyền thống mai một"], "Phát huy là làm cho truyền thống rạng rỡ, lan tỏa và phù hợp hơn trong thời đại mới."],
      ["Học sinh góp phần kế thừa truyền thống bằng cách nào?", "Học tốt, sống đẹp, kính thầy mến bạn", ["Học đối phó cho qua", "Coi thường bạn bè", "Bỏ bê việc học"], "Mỗi học sinh góp phần bằng việc học tốt, sống đẹp, giữ nếp tôn sư trọng đạo."],
      ["Tôn sư trọng đạo thể hiện qua hành động nào?", "Lễ phép, biết ơn thầy cô", ["Cãi lại thầy cô", "Quên ơn người dạy dỗ", "Coi thường tri thức"], "Tôn sư trọng đạo là kính trọng, biết ơn thầy cô — nét đẹp hiếu học của dân tộc."],
    ]),
    createStarterTopic("grade-9-peace-friendship", "Lớp 9 · Hòa bình và tình hữu nghị", "Yêu chuộng hòa bình, sống hòa thuận", ["9", "🕊️", "🌍"], [
      ["Hòa bình là gì?", "Trạng thái không chiến tranh, mọi người sống an lành", ["Ai mạnh thì thắng", "Im lặng chịu đựng", "Tránh mặt nhau"], "Hòa bình là khát vọng của nhân loại; chiến tranh gây đau thương, mất mát."],
      ["Chiến tranh gây ra hậu quả gì?", "Đau thương, mất mát cho con người", ["Mọi người giàu lên", "Đất nước phát triển nhanh", "Tình bạn thêm bền chặt"], "Chiến tranh gây đau thương, mất mát về người và của — vì thế nhân loại khát khao hòa bình."],
      ["Việt Nam thể hiện tinh thần yêu chuộng hòa bình qua việc gì?", "Làm bạn, hợp tác với các nước", ["Gây hấn với láng giềng", "Đóng cửa với thế giới", "Chạy đua vũ trang"], "Việt Nam yêu chuộng hòa bình, làm bạn với các nước và tích cực hợp tác quốc tế."],
      ["Học sinh góp phần gìn giữ hòa bình bằng cách nào?", "Sống hòa thuận, tôn trọng bạn bè", ["Gây gổ đánh nhau", "Kì thị bạn khác vùng", "Bắt nạt bạn yếu"], "Học sinh góp phần bằng sống hòa thuận, tôn trọng, giúp đỡ bạn bè, kể cả bạn bè quốc tế."],
      ["Tình hữu nghị giữa các dân tộc có ý nghĩa gì?", "Hiểu biết, giúp đỡ nhau cùng phát triển", ["Ai lo việc nấy", "Cạnh tranh triệt hạ", "Chỉ chơi với người giống mình"], "Tình hữu nghị giúp các dân tộc hiểu biết, giúp đỡ nhau cùng phát triển trong hòa bình."],
    ]),
  ],
  "physical-education": [
    createStarterTopic("grade-9-volleyball-serve", "Lớp 9 · Bóng chuyền: phát bóng", "Kĩ thuật phát bóng thấp tay và cao tay", ["9", "🏐", "💪"], [
      ["Phát bóng thấp tay thực hiện như thế nào?", "Tung bóng, vung tay thẳng đánh bóng qua lưới", ["Tung bóng rồi đập mạnh xuống đất", "Ném bóng bằng hai tay qua đầu", "Đá bóng qua lưới"], "Phát bóng thấp tay: một tay tung bóng, tay kia vung thẳng đánh vào bóng để đưa qua lưới."],
      ["Phát bóng cao tay khác phát bóng thấp tay ở điểm nào?", "Mạnh hơn nhưng khó thực hiện hơn", ["Yếu hơn và dễ thực hiện hơn", "Chỉ dùng khi tập luyện một mình", "Không được phép dùng khi thi đấu"], "Phát bóng cao tay tạo lực mạnh hơn nhưng đòi hỏi kĩ thuật cao hơn phát bóng thấp tay."],
      ["Mục đích của một quả phát bóng tốt là gì?", "Gây khó khăn cho đối phương ngay từ đầu", ["Ghi điểm trực tiếp trong mọi tình huống", "Để bóng bay ra ngoài sân", "Làm đối phương mất tập trung nói chuyện"], "Phát bóng tốt tạo lợi thế, gây khó khăn cho hàng phòng ngự của đối phương."],
      ["Khi phát bóng, bóng phải đi như thế nào mới hợp lệ?", "Qua lưới sang sân đối phương", ["Chạm lưới rồi rơi xuống sân mình", "Bay ra ngoài đường biên", "Rơi ngay trong sân đội mình"], "Bóng phát phải qua lưới và rơi trong sân đối phương thì mới được tính hợp lệ."],
      ["Tư thế chuẩn bị khi phát bóng thấp tay là gì?", "Chân trước chân sau, người hơi nghiêng", ["Đứng thẳng hai chân chụm sát nhau", "Ngồi xổm thấp xuống đất", "Nhảy lên cao rồi mới đánh bóng"], "Đứng chân trước chân sau, người hơi nghiêng về trước để giữ thăng bằng khi đánh bóng."],
    ]),
    createStarterTopic("grade-9-martial-arts-intro", "Lớp 9 · Võ thuật cơ bản và kỉ luật", "Lợi ích, lễ nghi và đạo đức khi học võ", ["9", "🥋", "🤝"], [
      ["Học võ thuật mang lại lợi ích nào quan trọng nhất?", "Rèn sức khỏe, ý chí và kỉ luật", ["Để khoe khoang với bạn bè", "Để bắt nạt kẻ yếu hơn mình", "Để được miễn học thể dục"], "Võ thuật rèn luyện sức khỏe, ý chí vượt khó và tính kỉ luật cho người học."],
      ["Buổi học võ cơ bản thường bắt đầu bằng nội dung nào?", "Chào hỏi, thế đứng và các đòn tay chân cơ bản", ["Thi đấu đối kháng ngay lập tức", "Học các đòn đánh nguy hiểm trước", "Tự tập theo ý thích cá nhân"], "Người mới học võ bắt đầu từ lễ chào hỏi, thế đứng vững rồi mới học các đòn tay chân cơ bản."],
      ["Võ đạo dạy người học võ điều gì?", "Tôn trọng thầy, bạn và không dùng võ bắt nạt người khác", ["Dùng võ để chứng tỏ mình mạnh nhất", "Thách đấu với bất kì ai gặp trên đường", "Giấu kĩ thuật không dạy cho bạn mới"], "Tinh thần võ đạo đề cao sự tôn trọng thầy cô, bạn bè và cấm dùng võ để bắt nạt người khác."],
      ["Khi tập luyện võ thuật, người học nên tập cùng ai?", "Huấn luyện viên có chuyên môn", ["Tự xem video rồi tập một mình", "Nhờ bạn chưa từng học võ chỉ dẫn", "Tập theo cảm tính không cần ai hướng dẫn"], "Chỉ nên tập võ với huấn luyện viên có chuyên môn để đảm bảo kĩ thuật đúng và an toàn."],
      ["Hành động nào sau đây vi phạm tinh thần võ đạo?", "Dùng võ để bắt nạt bạn bè", ["Chào thầy cô trước khi vào lớp", "Giúp bạn mới tập đúng động tác", "Kiên trì tập luyện mỗi ngày"], "Dùng võ để bắt nạt người khác đi ngược lại hoàn toàn với tinh thần võ đạo."],
    ]),
    createStarterTopic("grade-9-endurance-running", "Lớp 9 · Chạy dài và ý chí", "Kĩ thuật, ý chí và lợi ích của chạy bền", ["9", "🏃", "❤️"], [
      ["Chạy dài thường được tính từ cự li nào trở lên?", "1.500 m trở lên", ["100 m trở lên", "400 m trở lên", "800 m trở lên"], "Chạy dài là các cự li từ 1.500 m trở lên, đòi hỏi sức bền của người chạy."],
      ["Khi đang chạy dài mà cảm thấy mệt, nên làm gì?", "Giữ nhịp thở đều, nghĩ về mục tiêu để tiếp tục", ["Nín thở để tiết kiệm sức", "Bỏ cuộc ngay khi thấy mệt", "Chạy nước rút hết sức rồi dừng"], "Khi mệt, giữ nhịp thở đều và nghĩ về mục tiêu sẽ giúp cơ thể vượt qua giai đoạn khó khăn."],
      ["Chạy dài rèn luyện cho người tập phẩm chất nào?", "Sức bền và ý chí vượt khó", ["Sức bật nhảy cao tại chỗ", "Tốc độ phản xạ trong tích tắc", "Khả năng ném xa chính xác"], "Chạy dài là môn rèn sức bền của tim phổi và ý chí không bỏ cuộc."],
      ["Khi gần về đích trong bài chạy dài, nên xử lí thế nào?", "Chạy chậm dần rồi mới dừng hẳn", ["Dừng đột ngột ngay tại vạch đích", "Ngồi xuống nghỉ ngay lập tức", "Quay đầu chạy ngược trở lại"], "Về đích cần chạy chậm dần để cơ thể thích nghi, tránh dừng đột ngột gây choáng."],
      ["Lợi ích của việc chạy dài đều đặn là gì?", "Tim phổi khỏe, cơ thể dẻo dai", ["Chân to ra trông thấy ngay", "Không bao giờ bị ốm vặt nữa", "Chạy nhanh bằng vận động viên"], "Chạy dài đều đặn giúp tim phổi khỏe mạnh, tăng sức bền và sự dẻo dai của cơ thể."],
    ]),
  ],
  music: [
    createStarterTopic("grade-9-rap-hiphop", "Lớp 9 · Nhạc rap và hip-hop Việt", "Nguồn gốc, nội dung và cách nghe rap văn minh", ["9", "🎤", "🎧"], [
      ["Rap là hình thức âm nhạc như thế nào?", "Đọc có nhịp trên nền nhạc", ["Hát không cần nhạc đệm", "Nhảy theo điệu nhạc nhanh", "Đánh trống theo nhịp mạnh"], "Rap là cách đọc lời có nhịp điệu trên nền nhạc, khác với hát giai điệu thông thường."],
      ["Rap xuất phát từ nền văn hóa nào?", "Văn hóa hip-hop", ["Văn hóa nhạc đồng quê", "Văn hóa nhạc thính phòng", "Văn hóa nhạc dân gian"], "Rap ra đời từ văn hóa hip-hop, sau đó lan rộng và phát triển mạnh ở nhiều nước."],
      ["Lời rap Việt của nhiều nghệ sĩ trẻ thường mang nội dung gì?", "Kể chuyện đời, truyền cảm hứng sống", ["Chỉ ca ngợi bản thân mình", "Chép lại lời bài hát nước ngoài", "Toàn những câu vô nghĩa"], "Nhiều nghệ sĩ rap Việt viết lời kể chuyện đời thường, truyền cảm hứng tích cực cho người nghe."],
      ["Khi nghe rap, học sinh nên có thái độ như thế nào?", "Nghe chọn lọc, tránh lời lẽ thô tục", ["Nghe mọi bài rap không cần chọn", "Học thuộc cả những lời thô tục", "Chê bai mọi bài rap mình nghe"], "Nên nghe rap một cách chọn lọc, tránh những sản phẩm có lời lẽ thô tục, thiếu văn hóa."],
      ["Người nghe nhạc cần tôn trọng điều gì của nghệ sĩ?", "Bản quyền các sản phẩm âm nhạc", ["Đời tư cá nhân của nghệ sĩ", "Phong cách ăn mặc của nghệ sĩ", "Mọi phát ngôn của nghệ sĩ"], "Tôn trọng bản quyền là cách ủng hộ công sức sáng tạo của nghệ sĩ và ê-kíp."],
    ]),
    createStarterTopic("grade-9-orchestra", "Lớp 9 · Dàn nhạc giao hưởng", "Các nhóm nhạc cụ và văn hóa nghe nhạc", ["9", "🎻", "🎺"], [
      ["Dàn nhạc giao hưởng gồm mấy nhóm nhạc cụ chính?", "Bốn nhóm: dây, gỗ, đồng, gõ", ["Hai nhóm: dây và gõ", "Ba nhóm: dây, gỗ, đồng", "Năm nhóm kể cả nhạc cụ điện tử"], "Dàn nhạc giao hưởng gồm bốn nhóm nhạc cụ: dây, gỗ, đồng và gõ."],
      ["Nhạc cụ nào sau đây thuộc nhóm dây?", "Violin và cello", ["Sáo và kèn oboe", "Kèn trumpet", "Trống định âm"], "Violin, cello là nhạc cụ dây vì âm thanh phát ra từ dây đàn rung."],
      ["Nhạc trưởng điều khiển dàn nhạc bằng công cụ gì?", "Đũa chỉ huy", ["Micro thu âm", "Bản nhạc in sẵn", "Điện thoại bấm nhịp"], "Nhạc trưởng dùng đũa chỉ huy để ra hiệu nhịp độ, cường độ cho toàn dàn nhạc."],
      ["Khi nghe nhạc giao hưởng trong nhà hát, khán giả cần làm gì?", "Giữ yên lặng và vỗ tay đúng lúc", ["Nói chuyện thoải mái suốt buổi", "Vỗ tay ầm ĩ giữa bản nhạc", "Dùng điện thoại quay phim liên tục"], "Nghe nhạc giao hưởng cần giữ yên lặng để thưởng thức và chỉ vỗ tay khi bản nhạc kết thúc."],
      ["Nhóm nhạc cụ gỗ trong dàn nhạc giao hưởng gồm những nhạc cụ nào?", "Sáo và kèn oboe", ["Violin và cello", "Kèn trumpet và kèn trombone", "Trống và chiêng"], "Sáo, kèn oboe thuộc nhóm gỗ vì âm thanh tạo ra nhờ luồng hơi qua ống nhạc cụ."],
    ]),
    createStarterTopic("grade-9-music-therapy", "Lớp 9 · Âm nhạc và sức khỏe tinh thần", "Tác động của âm nhạc tới tâm trạng", ["9", "🎵", "🧘"], [
      ["Âm nhạc ảnh hưởng đến tâm trạng con người như thế nào?", "Nhạc vui giúp phấn chấn, nhạc nhẹ giúp thư giãn", ["Mọi loại nhạc đều gây buồn ngủ", "Nhạc chỉ làm người nghe mệt mỏi", "Âm nhạc không ảnh hưởng tâm trạng"], "Nhạc vui, sôi động giúp tinh thần phấn chấn; nhạc nhẹ, êm dịu giúp thư giãn."],
      ["Khi cảm thấy căng thẳng, nên nghe loại nhạc nào?", "Nhạc nhẹ để thư giãn, giảm căng thẳng", ["Nhạc ồn ào với âm lượng lớn", "Nhạc có tiết tấu dồn dập mạnh", "Không nghe nhạc gì cả"], "Nhạc nhẹ, êm dịu giúp tâm trí thả lỏng và giảm bớt căng thẳng hiệu quả."],
      ["Nhiều người có thói quen nghe nhạc vào lúc nào?", "Khi học và khi làm việc", ["Khi đang thi cử trong phòng thi", "Khi đang ngủ say giữa đêm", "Khi đang nói chuyện với người khác"], "Nhiều người nghe nhạc khi học hoặc làm việc để tạo cảm hứng và tập trung hơn."],
      ["Khi nghe nhạc bằng tai nghe, cần lưu ý điều gì?", "Tránh mở âm lượng quá lớn", ["Mở càng to nghe càng rõ", "Đeo tai nghe suốt cả ngày", "Vừa nghe vừa chạy ngoài đường đông"], "Nghe tai nghe âm lượng lớn trong thời gian dài có thể gây hại cho thính giác."],
      ["Nên chọn nhạc nghe như thế nào cho phù hợp?", "Phù hợp với tâm trạng của bản thân", ["Càng ồn ào càng tốt", "Chỉ nghe một thể loại duy nhất", "Nghe theo nhạc bạn bè ép buộc"], "Chọn nhạc phù hợp tâm trạng giúp âm nhạc phát huy tác dụng tích cực với tinh thần."],
    ]),
  ],
  "visual-arts": [
    createStarterTopic("grade-9-photography", "Lớp 9 · Nhiếp ảnh cơ bản", "Bố cục, ánh sáng và đạo đức khi chụp ảnh", ["9", "📷", "🌅"], [
      ["Nhiếp ảnh được hiểu là nghệ thuật gì?", "Ghi lại khoảnh khắc bằng ánh sáng", ["Vẽ lại cảnh vật bằng màu nước", "Dựng mô hình thu nhỏ của sự vật", "Chép lại hình ảnh bằng tay"], "Nhiếp ảnh là nghệ thuật ghi lại khoảnh khắc của cuộc sống thông qua ánh sáng."],
      ["Quy tắc một phần ba trong nhiếp ảnh dùng để làm gì?", "Sắp xếp bố cục ảnh cân đối và đẹp", ["Chia ảnh thành ba màu khác nhau", "Chụp đúng ba tấm ảnh liên tiếp", "Cắt ảnh chỉ giữ lại một phần ba"], "Quy tắc một phần ba giúp sắp xếp chủ thể vào vị trí đẹp, tạo bố cục cân đối cho ảnh."],
      ["Một bức ảnh đẹp thường cần những yếu tố nào?", "Bố cục đẹp, ánh sáng tốt, chủ thể rõ", ["Máy ảnh đắt tiền nhất", "Chụp thật nhiều rồi chọn bừa", "Chỉnh màu thật lòe loẹt"], "Ảnh đẹp cần bố cục hợp lý, ánh sáng tốt và chủ thể được thể hiện rõ ràng."],
      ["Trước khi chụp ảnh người khác, người chụp cần làm gì?", "Xin phép người được chụp", ["Chụp lén để được ảnh tự nhiên", "Đăng ảnh lên mạng ngay lập tức", "Chụp xong rồi mới hỏi ý kiến"], "Chụp ảnh người khác cần xin phép trước để tôn trọng quyền riêng tư của họ."],
      ["Điều nào sau đây không được phép khi chỉnh sửa ảnh?", "Chỉnh sửa ảnh để bôi nhọ người khác", ["Cắt cúp cho bố cục đẹp hơn", "Chỉnh sáng tối cho rõ nét hơn", "Chuyển ảnh màu sang đen trắng"], "Tuyệt đối không chỉnh sửa ảnh nhằm bôi nhọ, xúc phạm danh dự người khác."],
    ]),
    createStarterTopic("grade-9-fashion-design", "Lớp 9 · Thiết kế thời trang", "Quy trình thiết kế và bản sắc văn hóa", ["9", "👗", "✂️"], [
      ["Nhà thiết kế thời trang thực hiện những công việc nào?", "Vẽ phác thảo, chọn vải và màu sắc", ["Chỉ may quần áo theo mẫu có sẵn", "Chỉ bán quần áo tại cửa hàng", "Chỉ chụp ảnh người mẫu"], "Nhà thiết kế vẽ phác thảo ý tưởng, sau đó chọn chất liệu vải và màu sắc phù hợp."],
      ["Áo dài có ý nghĩa gì đối với thời trang Việt Nam?", "Niềm tự hào của thời trang Việt Nam", ["Trang phục chỉ mặc trong lễ hội", "Mẫu áo đã lỗi thời hiện nay", "Trang phục của riêng người già"], "Áo dài là biểu tượng, niềm tự hào của thời trang và văn hóa Việt Nam."],
      ["Khi thiết kế thời trang, nhà thiết kế cần tôn trọng điều gì?", "Văn hóa và không sao chép ý tưởng người khác", ["Xu hướng sao chép mẫu nổi tiếng", "Thiết kế càng phản cảm càng tốt", "Bỏ qua mọi giá trị văn hóa"], "Thiết kế cần tôn trọng bản sắc văn hóa và tuyệt đối không sao chép ý tưởng của người khác."],
      ["Trang phục do nhà thiết kế tạo ra cần đảm bảo yêu cầu gì?", "Đẹp và phù hợp với người mặc", ["Càng đắt tiền càng tốt", "Càng cầu kì càng đẹp", "Chỉ cần lạ mắt là đủ"], "Trang phục đẹp phải hài hòa, phù hợp với vóc dáng và hoàn cảnh của người mặc."],
      ["Bước đầu tiên khi thiết kế một bộ trang phục là gì?", "Vẽ phác thảo ý tưởng", ["Cắt vải ngay lập tức", "May thử không cần bản vẽ", "Chụp ảnh quảng cáo trước"], "Mọi thiết kế đều bắt đầu từ bản phác thảo ý tưởng trên giấy trước khi thực hiện."],
    ]),
    createStarterTopic("grade-9-street-art", "Lớp 9 · Nghệ thuật đường phố", "Các hình thức và quy tắc sáng tác", ["9", "🎨", "🧱"], [
      ["Nghệ thuật đường phố gồm những hình thức nào?", "Graffiti, tranh tường, biểu diễn nơi công cộng", ["Vẽ tranh sơn dầu trong phòng tranh", "Chụp ảnh cưới trong studio", "Vẽ minh họa sách giáo khoa"], "Nghệ thuật đường phố gồm graffiti, tranh tường và các màn biểu diễn ở nơi công cộng."],
      ["Những bức tranh tường có tác dụng gì với không gian công cộng?", "Biến không gian công cộng thành nơi nghệ thuật", ["Làm tường nhanh xuống cấp hơn", "Che khuất biển chỉ dẫn giao thông", "Khiến người đi đường khó chịu"], "Tranh tường ở nhiều nơi đã biến những bức tường đơn điệu thành không gian nghệ thuật."],
      ["Khi sáng tác nghệ thuật ở nơi công cộng, nghệ sĩ cần gì?", "Được phép của cơ quan quản lý", ["Tự ý vẽ bất cứ nơi nào thích", "Vẽ vào ban đêm để không ai thấy", "Không cần hỏi ý kiến ai cả"], "Sáng tác ở nơi công cộng phải được sự cho phép của cơ quan quản lý địa điểm đó."],
      ["Điều nào sau đây bị cấm trong nghệ thuật đường phố?", "Vẽ bậy lên di tích và tài sản chung", ["Vẽ tranh tường được cấp phép", "Biểu diễn nghệ thuật có giấy phép", "Vẽ trên tường nhà mình"], "Vẽ bậy lên di tích lịch sử và tài sản chung là hành vi vi phạm pháp luật."],
      ["Điểm khác biệt lớn nhất của nghệ thuật đường phố so với triển lãm trong phòng tranh là gì?", "Tác phẩm gắn với không gian công cộng mở", ["Tác phẩm luôn được bán giá cao", "Người xem phải mua vé vào cửa", "Chỉ nghệ sĩ nổi tiếng được tham gia"], "Nghệ thuật đường phố đưa tác phẩm ra không gian công cộng mở, ai cũng có thể thưởng thức."],
    ]),
  ],
  "national-defense": [
    createStarterTopic("grade-9-national-sovereignty", "Lớp 9 · Chủ quyền quốc gia", "Quyền tối cao của đất nước và trách nhiệm công dân", ["9", "🇻🇳", "🛡"], [
      ["Chủ quyền quốc gia là gì?", "Quyền tối cao của một nước trên lãnh thổ của mình", ["Quyền của một tỉnh", "Quyền của cá nhân", "Quyền của tổ chức quốc tế"], "Chủ quyền quốc gia là quyền tối cao của một nước trên lãnh thổ gồm vùng đất, vùng trời, vùng biển."],
      ["Lãnh thổ quốc gia gồm những bộ phận nào?", "Vùng đất, vùng trời, vùng biển", ["Chỉ vùng đất", "Vùng đất và vùng trời", "Chỉ vùng biển"], "Lãnh thổ gồm vùng đất, vùng trời và vùng biển thuộc chủ quyền quốc gia."],
      ["Học sinh góp phần bảo vệ chủ quyền bằng cách nào?", "Học tốt, chấp hành pháp luật, không chia sẻ tin sai lệch", ["Bỏ học đi làm sớm", "Chia sẻ mọi tin trên mạng", "Không quan tâm thời sự"], "Mỗi công dân, kể cả học sinh, bảo vệ chủ quyền bằng việc làm phù hợp lứa tuổi."],
      ["Vì sao không nên chia sẻ thông tin sai lệch về biển đảo?", "Gây hoang mang, ảnh hưởng an ninh quốc gia", ["Không ai đọc", "Mất thời gian", "Tốn dung lượng mạng"], "Tin sai lệch về chủ quyền gây hoang mang dư luận, ảnh hưởng an ninh quốc gia."],
      ["Vì sao cần tìm hiểu về chủ quyền quốc gia?", "Để biết quyền và trách nhiệm công dân với đất nước", ["Để khoe với bạn bè", "Vì là tin giải trí", "Để phản đối nhà trường"], "Hiểu chủ quyền giúp học sinh nhận rõ trách nhiệm bảo vệ Tổ quốc."],
    ]),
    createStarterTopic("grade-9-military-tradition", "Lớp 9 · Truyền thống quân đội", "Ngày thành lập và truyền thống của Quân đội nhân dân", ["9", "⭐", "🎖"], [
      ["Quân đội nhân dân Việt Nam ra đời ngày nào?", "22/12/1944", ["2/9/1945", "30/4/1975", "19/5/1890"], "Quân đội nhân dân Việt Nam ra đời ngày 22/12/1944."],
      ["Truyền thống nổi bật của bộ đội ta là gì?", "Vì nhân dân phục vụ", ["Chỉ lo chiến đấu", "Phục vụ lợi ích cá nhân", "Đứng ngoài xã hội"], "Bộ đội ta có truyền thống “vì nhân dân phục vụ”, gắn bó mật thiết với nhân dân."],
      ["Bộ đội giúp dân trong thời bình bằng việc gì?", "Phòng chống thiên tai, xây dựng nông thôn", ["Chỉ ở trong doanh trại", "Kinh doanh làm giàu", "Không làm gì cả"], "Bộ đội tích cực giúp dân phòng chống thiên tai và xây dựng nông thôn mới."],
      ["Học sinh tìm hiểu truyền thống quân đội qua đâu?", "Sách báo, bảo tàng, gặp gỡ cựu chiến binh", ["Chỉ qua tin đồn", "Không cần tìm hiểu", "Qua trò chơi điện tử"], "Có thể tìm hiểu qua sách báo, bảo tàng và gặp gỡ các cựu chiến binh."],
      ["Học tập truyền thống quân đội giúp học sinh điều gì?", "Rèn tính kỉ luật, lòng yêu nước", ["Trở nên hung hăng", "Coi thường người khác", "Né tránh trách nhiệm"], "Truyền thống quân đội giáo dục lòng yêu nước và tính kỉ luật cho thế hệ trẻ."],
    ]),
    createStarterTopic("grade-9-disaster-relief", "Lớp 9 · Cứu trợ thiên tai", "Tinh thần chung tay giúp vùng bị thiên tai", ["9", "🤝", "⛈"], [
      ["Khi thiên tai xảy ra, cả nước thể hiện điều gì?", "Tinh thần chung tay cứu trợ", ["Thờ ơ bỏ mặc", "Đổ lỗi cho nhau", "Chỉ lo cho mình"], "Khi thiên tai xảy ra, cả nước chung tay cứu trợ bằng nhiều hình thức."],
      ["Học sinh góp phần cứu trợ thiên tai bằng cách nào?", "Quyên góp sách vở, quần áo cũ qua nhà trường", ["Tự ý đến vùng lũ", "Đóng góp tiền không có", "Phớt lờ lời kêu gọi"], "Học sinh có thể quyên góp sách vở, quần áo cũ qua phong trào nhà trường."],
      ["Việc cứu trợ cần đảm bảo điều gì?", "Đúng nhu cầu, đúng địa chỉ", ["Càng nhanh càng tốt, mặc kệ", "Càng nhiều càng tốt, mặc kệ", "Ai cũng được nhận"], "Cứu trợ cần đúng nhu cầu và đúng địa chỉ để hiệu quả."],
      ["Vì sao nên quyên góp qua tổ chức uy tín?", "Để hàng cứu trợ đến đúng người cần", ["Để được khen", "Vì bắt buộc", "Để khoe trên mạng"], "Quyên góp qua tổ chức uy tín giúp hàng cứu trợ đến đúng người cần."],
      ["Ngoài vật chất, có thể giúp vùng thiên tai bằng gì?", "Động viên tinh thần, tình nguyện khi đủ tuổi", ["Chê bai họ nghèo", "Lan truyền tin đồn", "Quên lãng nhanh chóng"], "Động viên tinh thần và tình nguyện (khi đủ điều kiện) cũng là giúp đỡ quý giá."],
    ]),
  ],
  "career-experience": [
    createStarterTopic("grade-9-cv-writing", "Lớp 9 · Viết CV xin việc đơn giản", "Giới thiệu bản thân ngắn gọn với nhà tuyển dụng", ["9", "📄", "✍"], [
      ["CV là gì?", "Sơ yếu lí lịch nghề nghiệp giới thiệu bản thân với nhà tuyển dụng", ["Bài kiểm tra IQ", "Giấy khám sức khỏe", "Đơn xin nghỉ học"], "CV là sơ yếu lí lịch nghề nghiệp, giới thiệu ngắn gọn về bản thân với nhà tuyển dụng."],
      ["CV thường gồm những mục nào?", "Thông tin liên hệ, học vấn, kĩ năng, kinh nghiệm", ["Món ăn yêu thích, màu sắc", "Tên bạn bè, biệt danh", "Mật khẩu tài khoản"], "CV gồm thông tin liên hệ, học vấn, kĩ năng và kinh nghiệm."],
      ["Một CV tốt cần đáp ứng tiêu chí nào?", "Ngắn gọn một trang, trung thực, không lỗi chính tả", ["Càng dài càng tốt", "Viết sai chính tả thoải mái", "Thêu dệt thành tích"], "CV tốt ngắn gọn khoảng một trang, trung thực và không có lỗi chính tả."],
      ["Học sinh có thể đưa gì vào CV của mình?", "Hoạt động ngoại khóa, kĩ năng đã học", ["Điểm số bịa ra", "Bằng cấp giả", "Kinh nghiệm không có"], "Học sinh có thể tập viết CV từ hoạt động ngoại khóa và kĩ năng đã học."],
      ["Vì sao CV không được nói dối?", "Nhà tuyển dụng sẽ phát hiện và mất niềm tin", ["Nói dối giúp được tuyển", "Ai cũng nói dối", "Không ai kiểm tra"], "CV không trung thực bị phát hiện sẽ khiến nhà tuyển dụng mất niềm tin."],
    ]),
    createStarterTopic("grade-9-job-interview", "Lớp 9 · Chuẩn bị phỏng vấn", "Kĩ năng cơ bản khi đi phỏng vấn", ["9", "💼", "🗣"], [
      ["Trước phỏng vấn nên làm gì?", "Tìm hiểu đơn vị tuyển dụng, chuẩn bị câu trả lời", ["Không cần chuẩn bị gì", "Đến hỏi gì trả lời nấy", "Nhờ người trả lời hộ"], "Chuẩn bị phỏng vấn gồm tìm hiểu đơn vị tuyển dụng và chuẩn bị câu trả lời."],
      ["Nên đến buổi phỏng vấn lúc nào?", "Đến sớm khoảng 10 phút", ["Đến muộn cho oai", "Đến đúng giờ chót", "Không cần để ý giờ"], "Nên đến sớm khoảng 10 phút để thể hiện sự nghiêm túc và chuẩn bị tâm thế."],
      ["Trang phục khi đi phỏng vấn nên thế nào?", "Ăn mặc gọn gàng, lịch sự", ["Mặc đồ ngủ cho thoải mái", "Ăn mặc rách rưới", "Mặc đồ thể thao"], "Ăn mặc gọn gàng, lịch sự thể hiện sự tôn trọng nhà tuyển dụng."],
      ["Trong phỏng vấn cần ứng xử ra sao?", "Chào hỏi lễ phép, trả lời rõ ràng, trung thực", ["Ngắt lời người hỏi", "Trả lời ấp úng, quanh co", "Nói dối để gây ấn tượng"], "Trong phỏng vấn cần chào hỏi lễ phép, trả lời rõ ràng và trung thực."],
      ["Sau phỏng vấn có thể làm gì?", "Gửi thư cảm ơn nhà tuyển dụng", ["Quên luôn buổi phỏng vấn", "Gọi điện đòi kết quả", "Chê bai công ty"], "Sau phỏng vấn có thể gửi thư cảm ơn để thể hiện sự chuyên nghiệp."],
    ]),
    createStarterTopic("grade-9-financial-literacy", "Lớp 9 · Hiểu biết tài chính cơ bản", "Quản lí tiền: chi tiêu, tiết kiệm, tránh lừa đảo", ["9", "💰", "📊"], [
      ["Hiểu biết tài chính là gì?", "Biết quản lí tiền: thu nhập, chi tiêu, tiết kiệm", ["Biết đếm tiền nhanh", "Biết làm giàu nhanh", "Biết xin tiền giỏi"], "Hiểu biết tài chính là biết quản lí tiền: thu nhập, chi tiêu, tiết kiệm và đầu tư đơn giản."],
      ["Quy tắc 50-30-20 nghĩa là gì?", "50% nhu cầu, 30% mong muốn, 20% tiết kiệm", ["50% tiết kiệm, 50% tiêu xài", "30% ăn, 70% chơi", "20% học, 80% mua sắm"], "Quy tắc 50-30-20: 50% cho nhu cầu, 30% cho mong muốn, 20% để tiết kiệm."],
      ["Vì sao nên tránh vay nợ tiêu dùng?", "Lãi cao, dễ rơi vào nợ nần", ["Vay nợ rất dễ trả", "Ai cũng vay được", "Nợ không ảnh hưởng gì"], "Vay nợ tiêu dùng lãi cao, dễ khiến người vay rơi vào vòng nợ nần."],
      ["Cần làm gì khi gặp lời mời đầu tư lợi nhuận cao bất thường?", "Cảnh giác, đó có thể là lừa đảo tài chính", ["Vay tiền đầu tư ngay", "Rủ bạn bè cùng đầu tư", "Bỏ học đi đầu tư"], "Cần cảnh giác với lừa đảo tài chính khi thấy lợi nhuận cao bất thường."],
      ["Học sinh nên bắt đầu tiết kiệm bằng cách nào?", "Để riêng một phần tiền tiêu vặt mỗi tuần", ["Tiêu hết rồi tính", "Giấu tiền dưới gối", "Không bao giờ tiêu"], "Học sinh có thể tập tiết kiệm bằng cách để riêng một phần tiền tiêu vặt mỗi tuần."],
    ]),
  ],
};
for (const [subjectId, topics] of Object.entries(gradeNineExtraPractice)) {
  for (const topic of topics) topic.level = "LỚP 9";
  curriculumExtensions[subjectId].push(...topics);
}


// --- Extra practice topics for grades 10-12 (126 topics, 630 questions) ---
const gradeTenExtraPractice = {
  math: [
    createStarterTopic("grade-10-vector-operations", "Lớp 10 · Phép toán vectơ", "Cộng, trừ vectơ và nhân vectơ với một số", ["10", "→", "∑"], [
      ["Vectơ có đặc điểm nào?", "Có hướng và độ dài", ["Chỉ có độ dài", "Chỉ có hướng", "Không có hướng"], "Vectơ là đoạn thẳng có hướng, đặc trưng bởi hướng và độ dài."],
      ["Tổng của hai vectơ cùng hướng được tính thế nào?", "Cộng độ dài, giữ nguyên hướng", ["Trừ độ dài", "Nhân độ dài", "Đổi hướng"], "Hai vectơ cùng hướng thì vectơ tổng có độ dài bằng tổng độ dài và cùng hướng."],
      ["Nhân vectơ a với số −2 thì vectơ mới thế nào?", "Dài gấp đôi và ngược hướng", ["Dài gấp đôi, cùng hướng", "Ngắn đi một nửa", "Không đổi"], "Nhân với số âm thì đổi hướng; |−2| = 2 nên độ dài gấp đôi."],
      ["Hiệu a − b bằng gì?", "a + (−b)", ["b − a", "a + b", "−a − b"], "Trừ vectơ b nghĩa là cộng với vectơ đối của b."],
      ["Hợp lực của lực 3 N hướng đông và lực 4 N hướng bắc là bao nhiêu?", "5 N", ["7 N", "1 N", "12 N"], "Hai lực vuông góc nên độ lớn hợp lực = √(3² + 4²) = 5 N."],
    ]),
    createStarterTopic("grade-10-inequalities", "Lớp 10 · Bất đẳng thức", "Biến đổi bất đẳng thức và bất đẳng thức Cô-si", ["10", "≥", "≤"], [
      ["Nhân cả hai vế của bất đẳng thức với −3 thì sao?", "Đổi chiều bất đẳng thức", ["Giữ nguyên chiều", "Bất đẳng thức vô nghiệm", "Thành đẳng thức"], "Nhân hoặc chia cả hai vế với số âm thì phải đổi chiều bất đẳng thức."],
      ["Nghiệm của bất phương trình 2x − 3 < 7 là gì?", "x < 5", ["x > 5", "x < 2", "x > 2"], "Chuyển vế: 2x < 10 nên x < 5."],
      ["|x| < 3 tương đương với điều gì?", "−3 < x < 3", ["x < −3 hoặc x > 3", "x > 3", "x < 3"], "Giá trị tuyệt đối nhỏ hơn 3 nghĩa là x nằm giữa −3 và 3."],
      ["Bất đẳng thức Cô-si cho a, b ≥ 0 phát biểu thế nào?", "a + b ≥ 2√(ab)", ["a + b ≤ √(ab)", "ab ≥ 2(a + b)", "a − b ≥ 2√(ab)"], "Với a, b ≥ 0: a + b ≥ 2√(ab), dấu bằng xảy ra khi a = b."],
      ["Cộng cùng một số vào hai vế của bất đẳng thức thì sao?", "Không đổi chiều", ["Đổi chiều", "Mất nghiệm", "Thành đẳng thức"], "Cộng hoặc trừ cùng một số vào hai vế không làm đổi chiều bất đẳng thức."],
    ]),
    createStarterTopic("grade-10-probability-basics", "Lớp 10 · Xác suất cơ bản", "Định nghĩa cổ điển và tính chất của xác suất", ["10", "🎲", "%"], [
      ["Gieo một xúc xắc cân đối, xác suất ra mặt 6 chấm là bao nhiêu?", "1/6", ["1/3", "1/2", "1"], "Có 1 kết quả thuận lợi trong 6 kết quả đồng khả năng."],
      ["Xác suất của biến cố chắc chắn bằng bao nhiêu?", "1", ["0", "1/2", "Không xác định"], "Biến cố chắc chắn luôn xảy ra nên có xác suất bằng 1."],
      ["Rút ngẫu nhiên một lá từ bộ bài 52 lá, xác suất được lá Át là bao nhiêu?", "1/13", ["1/52", "1/4", "4/13"], "Có 4 lá Át trong 52 lá: 4/52 = 1/13."],
      ["Hai biến cố xung khắc là hai biến cố thế nào?", "Không thể cùng xảy ra", ["Luôn cùng xảy ra", "Độc lập với nhau", "Có xác suất bằng nhau"], "Xung khắc nghĩa là không thể đồng thời xảy ra trong một phép thử."],
      ["Tung một đồng xu 3 lần, xác suất cả 3 lần đều ra ngửa là bao nhiêu?", "1/8", ["1/6", "1/4", "3/8"], "Mỗi lần xác suất ngửa là 1/2; ba lần độc lập: (1/2)³ = 1/8."],
    ]),
  ],
  science: [
    createStarterTopic("grade-10-waves-intro", "Lớp 10 · Sóng cơ bản", "Sóng ngang, sóng dọc và công thức v = λf", ["10", "〜", "λ"], [
      ["Sóng ngang có đặc điểm gì?", "Phương dao động vuông góc phương truyền sóng", ["Phương dao động trùng phương truyền", "Không có phương dao động", "Dao động theo vòng tròn"], "Sóng ngang: dao động vuông góc phương truyền; sóng dọc: dao động trùng phương truyền."],
      ["Công thức liên hệ tốc độ, bước sóng và tần số là gì?", "v = λf", ["v = λ/f", "v = f/λ", "v = λ + f"], "Tốc độ truyền sóng bằng bước sóng nhân với tần số."],
      ["Sóng âm trong không khí là loại sóng nào?", "Sóng dọc", ["Sóng ngang", "Sóng điện từ", "Sóng dừng"], "Sóng âm là sóng cơ dọc: phân tử không khí dao động dọc theo phương truyền sóng."],
      ["Tần số của sóng cho biết điều gì?", "Số dao động toàn phần trong một giây", ["Quãng đường sóng đi được", "Độ cao của sóng", "Thời gian của một dao động"], "Tần số f là số dao động toàn phần trong một giây, đơn vị héc (Hz)."],
      ["Vì sao âm thanh không truyền được trong chân không?", "Không có môi trường vật chất để dao động lan truyền", ["Âm thanh bị hấp thụ hết", "Chân không quá lạnh", "Sóng âm quá yếu"], "Sóng cơ cần môi trường vật chất; chân không không có phân tử nào để truyền dao động."],
    ]),
    createStarterTopic("grade-10-periodic-table-intro", "Lớp 10 · Bảng tuần hoàn", "Nhóm, chu kì và dự đoán tính chất nguyên tố", ["10", "⚗", "⊞"], [
      ["Các nguyên tố trong bảng tuần hoàn được sắp xếp theo gì?", "Số hiệu nguyên tử tăng dần", ["Khối lượng giảm dần", "Tên gọi", "Màu sắc"], "Bảng tuần hoàn hiện đại sắp xếp theo số hiệu nguyên tử (số proton) tăng dần."],
      ["Các nguyên tố cùng một nhóm có điểm chung gì?", "Tính chất hóa học tương tự nhau", ["Cùng khối lượng", "Cùng màu sắc", "Cùng trạng thái"], "Cùng nhóm thì cùng số electron lớp ngoài cùng nên tính chất hóa học tương tự."],
      ["Na và K cùng nhóm IA nên có tính chất nào?", "Đều là kim loại kiềm, dễ nhường 1 electron", ["Đều là khí hiếm", "Đều khó phản ứng", "Đều nhận 1 electron"], "Kim loại kiềm có 1 electron lớp ngoài cùng, dễ nhường để đạt cấu hình bền vững."],
      ["Số thứ tự chu kì cho biết điều gì về nguyên tử?", "Số lớp electron", ["Số proton", "Số neutron", "Hóa trị"], "Số thứ tự của chu kì bằng số lớp electron của nguyên tử nguyên tố đó."],
      ["Nguyên tố nào sau đây là khí hiếm?", "Neon (Ne)", ["Natri (Na)", "Clo (Cl)", "Sắt (Fe)"], "Neon thuộc nhóm khí hiếm, lớp electron ngoài cùng đã bão hòa nên rất khó phản ứng."],
    ]),
    createStarterTopic("grade-10-genetics-mendel", "Lớp 10 · Di truyền Mendel", "Quy luật phân li và tỉ lệ 3 : 1", ["10", "🧬", "🌱"], [
      ["Mendel làm thí nghiệm di truyền trên đối tượng nào?", "Đậu Hà Lan", ["Ruồi giấm", "Cây ngô", "Chuột bạch"], "Mendel chọn đậu Hà Lan vì có nhiều tính trạng tương phản rõ rệt và dễ lai tạo."],
      ["Kiểu gen nào cho kiểu hình lặn?", "aa", ["AA", "Aa", "Cả AA và Aa"], "Tính trạng lặn chỉ biểu hiện ở thể đồng hợp lặn aa."],
      ["Phép lai Aa × Aa cho tỉ lệ kiểu hình nào?", "3 trội : 1 lặn", ["1 trội : 1 lặn", "1 trội : 3 lặn", "Toàn trội"], "Kiểu gen thu được 1AA : 2Aa : 1aa nên kiểu hình là 3 trội : 1 lặn."],
      ["Quy luật phân li nói về điều gì?", "Cặp nhân tố di truyền phân li khi tạo giao tử", ["Các gen luôn đi cùng nhau", "Tính trạng trội át tính trạng lặn", "Con giống hệt bố mẹ"], "Mỗi giao tử chỉ nhận một nhân tố trong cặp nhân tố di truyền của bố hoặc mẹ."],
      ["Vì sao bố mẹ mắt nâu vẫn có thể sinh con mắt xanh?", "Bố mẹ đều mang gen lặn, con nhận được aa", ["Gen bị đột biến", "Môi trường thay đổi", "Con nhận gen trội"], "Nếu cả hai bố mẹ đều có kiểu gen Aa (mắt nâu), con có thể nhận aa và biểu hiện mắt xanh."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-10-nom-poetry", "Lớp 10 · Thơ chữ Nôm", "Chữ Nôm và các nhà thơ Nôm tiêu biểu", ["10", "📜", "✒"], [
      ["Chữ Nôm được sáng tạo từ đâu?", "Từ chữ Hán để ghi tiếng Việt", ["Từ chữ Latin", "Từ chữ Phạn", "Tự nghĩ ra hoàn toàn"], "Người Việt dùng chữ Hán làm cơ sở, sáng tạo chữ Nôm để ghi âm tiếng Việt."],
      ["“Truyện Kiều” của Nguyễn Du được viết bằng chữ gì?", "Chữ Nôm", ["Chữ Hán", "Chữ quốc ngữ", "Chữ Phạn"], "Nguyễn Du viết Truyện Kiều bằng chữ Nôm với 3.254 câu lục bát."],
      ["Nhà thơ nào được mệnh danh là “bà chúa thơ Nôm”?", "Hồ Xuân Hương", ["Nguyễn Trãi", "Nguyễn Du", "Bà Huyện Thanh Quan"], "Hồ Xuân Hương nổi tiếng với thơ Nôm trào phúng sắc sảo, táo bạo."],
      ["Thơ Nôm mang đặc điểm nào?", "Đậm hồn Việt, gần gũi đời sống", ["Khô khan, xa rời thực tế", "Chỉ viết về vua chúa", "Không có vần điệu"], "Thơ Nôm viết về đời sống, tình cảm của người Việt nên gần gũi, đậm đà bản sắc."],
      ["Việc sáng tạo chữ Nôm thể hiện điều gì của dân tộc?", "Tinh thần độc lập văn hóa", ["Sự lệ thuộc", "Sự bảo thủ", "Sự sao chép"], "Sáng tạo chữ riêng để ghi tiếng mẹ đẻ thể hiện ý thức độc lập về văn hóa."],
    ]),
    createStarterTopic("grade-10-character-analysis", "Lớp 10 · Phân tích nhân vật", "Các phương diện khắc họa và vai trò chi tiết", ["10", "👤", "📖"], [
      ["Phân tích nhân vật cần làm rõ những yếu tố nào?", "Ngoại hình, hành động, lời nói, nội tâm", ["Chỉ ngoại hình", "Chỉ tên tuổi", "Chỉ nghề nghiệp"], "Nhân vật được khắc họa qua nhiều phương diện; cần phân tích tổng hợp, tránh phiến diện."],
      ["Chi tiết nghệ thuật có vai trò gì?", "Góp phần thể hiện tính cách và tư tưởng tác giả", ["Chỉ để trang trí", "Không có ý nghĩa", "Để tăng số trang"], "Mỗi chi tiết đều được tác giả lựa chọn có chủ ý nghệ thuật."],
      ["Chi tiết Chí Phèo đòi lương thiện cho thấy điều gì?", "Khát vọng làm người lương thiện", ["Sự hung dữ", "Sự giàu có", "Sự ngu dốt"], "Tiếng kêu đòi lương thiện là khát vọng chính đáng của con người bị xã hội chà đạp."],
      ["Khi phân tích nhân vật nên tránh điều gì?", "Kể lại cốt truyện suông", ["Nêu dẫn chứng", "Phân tích chi tiết", "Liên hệ tư tưởng tác giả"], "Phân tích khác với kể chuyện; cần đi sâu vào ý nghĩa của từng chi tiết."],
      ["Lời nói của nhân vật giúp ta hiểu điều gì?", "Tính cách, suy nghĩ và quan hệ", ["Tuổi tác chính xác", "Quê quán", "Thu nhập"], "Cách nói năng bộc lộ tính cách, trình độ, tâm trạng và mối quan hệ của nhân vật."],
    ]),
    createStarterTopic("grade-10-essay-structure", "Lớp 10 · Bố cục bài văn", "Mở bài, thân bài, kết bài và cách dùng dẫn chứng", ["10", "📝", "📑"], [
      ["Bài văn nghị luận gồm mấy phần?", "Ba phần: mở bài, thân bài, kết bài", ["Một phần", "Hai phần", "Bốn phần"], "Mở bài nêu vấn đề, thân bài triển khai luận điểm, kết bài khái quát và mở rộng."],
      ["Luận điểm trong bài văn cần có đặc điểm gì?", "Rõ ràng, có lí lẽ và dẫn chứng", ["Mơ hồ", "Không cần chứng minh", "Càng dài càng tốt"], "Mỗi luận điểm phải rõ ràng và được làm sáng tỏ bằng lí lẽ, dẫn chứng."],
      ["Dẫn chứng trong bài văn phải thế nào?", "Tiêu biểu và được phân tích", ["Càng nhiều càng tốt", "Liệt kê suông", "Bịa đặt"], "Dẫn chứng cần tiêu biểu, phù hợp và phải được phân tích chứ không liệt kê suông."],
      ["Mở bài có thể bắt đầu bằng gì?", "Câu chuyện hoặc nhận định rồi dẫn đến vấn đề", ["Kết luận", "Lời chào", "Danh sách"], "Mở bài dẫn dắt tự nhiên từ câu chuyện, nhận định đến vấn đề nghị luận."],
      ["Kết bài nên làm gì?", "Khái quát và mở rộng vấn đề", ["Lặp lại mở bài", "Nêu vấn đề mới", "Kết thúc đột ngột"], "Kết bài khái quát ý chính, có thể mở rộng và liên hệ thực tế."],
    ]),
  ],
  english: [
    createStarterTopic("grade-10-reported-speech", "Lớp 10 · Câu tường thuật", "Lùi thì, đổi đại từ và câu hỏi tường thuật", ["10", "ABC", "💬"], [
      ["Chuyển: “I am tired,” she said.", "She said she was tired.", ["She said she is tired.", "She says she was tired.", "She said I was tired."], "Lùi thì hiện tại đơn thành quá khứ đơn, đổi I thành she."],
      ["Câu hỏi Yes/No trong câu tường thuật dùng từ nào?", "if/whether", ["that", "what", "because"], "Câu hỏi Yes/No chuyển thành mệnh đề phụ thuộc với if hoặc whether."],
      ["Trạng từ “tomorrow” trong câu tường thuật đổi thành gì?", "the next day", ["yesterday", "today", "now"], "tomorrow → the next day; yesterday → the day before; now → then."],
      ["Chuyển: “Where do you live?” he asked.", "He asked where I lived.", ["He asked where do I live.", "He asked where I live.", "He asked me where did I live."], "Câu hỏi có từ để hỏi giữ nguyên từ để hỏi, lùi thì và bỏ trợ động từ do."],
      ["Chuyển: “I will help you,” Lan said.", "Lan said she would help me.", ["Lan said she will help me.", "Lan says she would help me.", "Lan said she helps me."], "will lùi thành would; you đổi thành me tùy theo người nghe."],
    ]),
    createStarterTopic("grade-10-wish-clauses", "Lớp 10 · Câu ước với wish", "Wish ở hiện tại, quá khứ và tương lai", ["10", "ABC", "🌠"], [
      ["Ước muốn trái với hiện tại dùng cấu trúc nào?", "wish + quá khứ đơn", ["wish + hiện tại đơn", "wish + tương lai đơn", "wish + hiện tại hoàn thành"], "Ví dụ: I wish I had more time (thực tế tôi không có nhiều thời gian)."],
      ["Diễn tả sự tiếc nuối về quá khứ dùng cấu trúc nào?", "wish + quá khứ hoàn thành", ["wish + quá khứ đơn", "wish + hiện tại đơn", "wish + will"], "Ví dụ: I wish I had studied harder (tiếc vì đã không học chăm)."],
      ["“If only” khác “wish” ở điểm nào?", "Nhấn mạnh cảm xúc hơn", ["Nghĩa hoàn toàn khác", "Không dùng được", "Chỉ dùng cho tương lai"], "If only nghĩa là “giá mà”, diễn đạt ước muốn với cảm xúc mạnh mẽ hơn wish."],
      ["Điền từ: I wish it ___ raining. (trời đang mưa, tôi muốn tạnh)", "would stop", ["stops", "will stop", "has stopped"], "wish + would diễn tả mong muốn điều gì đó thay đổi trong tương lai gần."],
      ["Câu nào diễn tả ước muốn trái với hiện tại?", "I wish I were taller.", ["I wish I am taller.", "I wish I will be taller.", "I wish I have been taller."], "Trong câu ước trang trọng, were dùng cho mọi chủ ngữ; văn nói cũng chấp nhận was."],
    ]),
    createStarterTopic("grade-10-phrasal-verbs", "Lớp 10 · Cụm động từ", "Nghĩa cụm động từ và tính tách được", ["10", "ABC", "🔗"], [
      ["“give up” có nghĩa là gì?", "Từ bỏ", ["Tiếp tục", "Nhận lấy", "Trì hoãn"], "give up = từ bỏ (một thói quen, một cố gắng)."],
      ["“look after” có nghĩa là gì?", "Chăm sóc", ["Tìm kiếm", "Nhìn qua", "Bỏ qua"], "look after = chăm sóc; còn look for mới là tìm kiếm."],
      ["Cụm động từ nào TÁCH ĐƯỢC tân ngữ ở giữa?", "turn off", ["look after", "run into", "get over"], "turn off the light hay turn the light off đều đúng; look after và run into không tách được."],
      ["“put off” có nghĩa là gì?", "Trì hoãn", ["Mặc vào", "Dập tắt", "Nổi bật"], "put off = trì hoãn; put on = mặc vào; put out = dập tắt."],
      ["“take off” khi nói về máy bay có nghĩa là gì?", "Cất cánh", ["Hạ cánh", "Chuyển hướng", "Gặp sự cố"], "take off = cất cánh (máy bay); ngoài ra còn có nghĩa là cởi (quần áo)."],
    ]),
  ],
  history: [
    createStarterTopic("grade-10-ly-tran-dynasties", "Lớp 10 · Nhà Lý – Trần", "Thăng Long, khoa thi và kháng chiến Nguyên – Mông", ["10", "🏛", "⚔"], [
      ["Nhà Lý dời đô về Thăng Long năm nào?", "1010", ["1009", "1075", "1225"], "Lý Thái Tổ dời đô từ Hoa Lư về Đại La (đặt tên Thăng Long) năm 1010."],
      ["Khoa thi đầu tiên của Đại Việt được tổ chức năm nào?", "1075", ["1010", "1070", "1226"], "Khoa thi đầu tiên tổ chức năm 1075 dưới thời vua Lý Nhân Tông."],
      ["Nhà Trần đã mấy lần đánh thắng quân Nguyên – Mông?", "Ba lần", ["Một lần", "Hai lần", "Bốn lần"], "Ba lần kháng chiến thắng lợi vào các năm 1258, 1285 và 1287–1288."],
      ["Hội nghị Diên Hồng đã triệu tập những ai?", "Các bô lão", ["Các tướng lĩnh", "Các quan văn", "Sứ thần"], "Trần Nhân Tông triệu tập hội nghị Diên Hồng để hỏi ý các bô lão về chủ trương đánh hay hòa."],
      ["Chiến thắng Bạch Đằng năm 1288 do ai chỉ huy?", "Trần Hưng Đạo", ["Trần Quang Khải", "Trần Khánh Dư", "Phạm Ngũ Lão"], "Trần Hưng Đạo (Trần Quốc Tuấn) chỉ huy trận Bạch Đằng 1288, dùng cọc gỗ đánh đắm thuyền giặc."],
    ]),
    createStarterTopic("grade-10-nguyen-lords", "Lớp 10 · Chúa Nguyễn – Đàng Trong", "Mở cõi phương Nam và thương cảng Hội An", ["10", "⛵", "🗺"], [
      ["Các chúa Nguyễn cát cứ vùng nào?", "Đàng Trong", ["Đàng Ngoài", "Bắc Bộ", "Tây Nguyên"], "Từ thế kỉ XVI, chúa Nguyễn cát cứ Đàng Trong, từ sông Gianh trở vào Nam."],
      ["Nguyễn Hữu Cảnh lập phủ Gia Định năm nào?", "1698", ["1598", "1798", "1699"], "Năm 1698, Nguyễn Hữu Cảnh vào Nam lập phủ Gia Định, đặt nền móng cho vùng đất Sài Gòn sau này."],
      ["Thương cảng quốc tế sầm uất của Đàng Trong là gì?", "Hội An", ["Phố Hiến", "Vân Đồn", "Cửa Lò"], "Hội An là thương cảng quốc tế sầm uất, tàu thuyền Nhật Bản, Trung Quốc và phương Tây tấp nập."],
      ["Chúa Nguyễn mở rộng lãnh thổ chủ yếu về hướng nào?", "Phương Nam", ["Phương Bắc", "Phương Tây", "Phương Đông"], "Công cuộc Nam tiến từng bước mở rộng đến tận Hà Tiên, Phú Quốc."],
      ["Ranh giới giữa Đàng Trong và Đàng Ngoài là ở đâu?", "Sông Gianh", ["Sông Hồng", "Sông Lam", "Sông Hương"], "Sông Gianh (Quảng Bình) là ranh giới thời Trịnh – Nguyễn phân tranh."],
    ]),
    createStarterTopic("grade-10-french-invasion", "Lớp 10 · Pháp xâm lược Việt Nam", "Từ Đà Nẵng 1858 đến hiệp ước 1884", ["10", "📜", "🔥"], [
      ["Pháp nổ súng tấn công Đà Nẵng năm nào?", "1858", ["1859", "1884", "1885"], "Ngày 1/9/1858, Pháp tấn công Đà Nẵng, mở đầu cuộc xâm lược Việt Nam."],
      ["Hiệp ước Pa-tơ-nốt năm 1884 đánh dấu điều gì?", "Việt Nam hoàn toàn rơi vào tay Pháp", ["Pháp rút quân", "Triều Nguyễn thắng lớn", "Kí hòa ước bình đẳng"], "Sau hiệp ước 1884, Việt Nam trở thành nước thuộc địa, nửa phong kiến."],
      ["Nghĩa quân Trương Định kháng chiến ở đâu?", "Gò Công", ["Ba Đình", "Bãi Sậy", "Yên Thế"], "Trương Định kháng chiến ở Gò Công, không tuân theo lệnh bãi binh của triều đình."],
      ["Nguyên nhân sâu xa khiến triều Nguyễn thất bại là gì?", "Bảo thủ, không chịu cải cách đất nước", ["Thiếu tướng tài", "Nhân dân không đoàn kết", "Địa hình bất lợi"], "Triều Nguyễn bảo thủ, bạc nhược, không chịu cải cách để tăng cường sức mạnh đất nước."],
      ["Phong trào kháng chiến của nhân dân có đặc điểm gì?", "Nổ ra khắp nơi nhưng thiếu lãnh đạo thống nhất", ["Do triều đình lãnh đạo", "Nhanh chóng thắng lợi", "Không ai tham gia"], "Nhân dân khắp nơi anh dũng đứng lên nhưng thiếu sự lãnh đạo thống nhất nên đều thất bại."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-10-atmosphere-climate", "Lớp 10 · Khí quyển và khí hậu", "Các tầng khí quyển và quy luật nhiệt độ", ["10", "🌡", "☁"], [
      ["Mọi hiện tượng thời tiết diễn ra chủ yếu ở tầng khí quyển nào?", "Tầng đối lưu", ["Tầng bình lưu", "Tầng trung lưu", "Tầng nhiệt"], "Tầng đối lưu là tầng thấp nhất của khí quyển, nơi diễn ra mọi hiện tượng thời tiết."],
      ["Tầng ôzôn nằm ở tầng khí quyển nào?", "Tầng bình lưu", ["Tầng đối lưu", "Tầng trung lưu", "Tầng ngoài"], "Tầng bình lưu chứa tầng ôzôn có tác dụng hấp thụ tia cực tím từ Mặt Trời."],
      ["Nhiệt độ giảm bao nhiêu khi lên cao 100 m?", "0,6°C", ["1°C", "0,1°C", "6°C"], "Trung bình nhiệt độ giảm 0,6°C mỗi khi lên cao thêm 100 m."],
      ["Khí hậu khác thời tiết ở điểm nào?", "Là chế độ thời tiết trung bình trong nhiều năm", ["Thay đổi từng giờ", "Chỉ nói về mưa", "Không liên quan nhiệt độ"], "Khí hậu là quy luật thời tiết trung bình trong thời gian dài của một vùng."],
      ["Vì sao Sa Pa mát mẻ quanh năm dù nằm trong vùng nhiệt đới?", "Vì ở độ cao lớn", ["Vì gần biển", "Vì nhiều rừng", "Vì gần xích đạo"], "Sa Pa ở độ cao khoảng 1.500 m nên nhiệt độ thấp dù nằm trong vùng nhiệt đới."],
    ]),
    createStarterTopic("grade-10-soil-biomes", "Lớp 10 · Đất và sinh vật", "Sự hình thành đất và các vành đai sinh vật", ["10", "🌍", "🌿"], [
      ["Đất được hình thành từ những yếu tố nào?", "Đá mẹ, khí hậu, sinh vật, địa hình, thời gian", ["Chỉ từ đá", "Chỉ từ nước", "Chỉ từ con người"], "Đất là kết quả tác động lâu dài của đá mẹ, khí hậu, sinh vật, địa hình và thời gian."],
      ["Vành đai sinh vật nào đa dạng sinh học nhất?", "Rừng nhiệt đới", ["Hoang mạc", "Đài nguyên", "Thảo nguyên"], "Rừng nhiệt đới nóng ẩm quanh năm, tầng tán nhiều lớp, đa dạng sinh học cao nhất hành tinh."],
      ["Xa van có đặc điểm gì?", "Đồng cỏ với cây bụi, cây gỗ thưa", ["Rừng rậm rạp", "Băng tuyết phủ", "Toàn cát"], "Xa van là đồng cỏ nhiệt đới với cây bụi và cây gỗ mọc thưa."],
      ["Hoang mạc hình thành chủ yếu do đâu?", "Lượng mưa rất ít", ["Quá lạnh", "Nhiều gió", "Đất xấu"], "Hoang mạc là vùng khô hạn, lượng mưa rất ít nên thực vật thưa thớt."],
      ["Mối quan hệ giữa khí hậu, đất và thực vật là gì?", "Tác động qua lại lẫn nhau", ["Độc lập với nhau", "Tác động một chiều", "Không liên quan"], "Khí hậu ảnh hưởng đến đất và thực vật; thực vật cũng góp phần tạo đất và điều hòa khí hậu."],
    ]),
    createStarterTopic("grade-10-agriculture-industry", "Lớp 10 · Nông nghiệp và công nghiệp", "Chuỗi giá trị từ đồng ruộng đến xuất khẩu", ["10", "🌾", "🏭"], [
      ["Nông nghiệp phụ thuộc chủ yếu vào yếu tố nào?", "Đất đai và khí hậu", ["Máy móc", "Điện năng", "Vốn lớn"], "Nông nghiệp gắn chặt với điều kiện tự nhiên: đất đai, nước và khí hậu."],
      ["Công nghiệp có vai trò gì đối với nông sản?", "Chế biến để nâng cao giá trị", ["Thay thế nông nghiệp", "Làm giảm giá trị", "Không liên quan"], "Công nghiệp chế biến giúp nông sản bảo quản lâu hơn và nâng cao giá trị."],
      ["Khu công nghiệp thường tập trung ở đâu?", "Gần đô thị, giao thông thuận lợi", ["Vùng núi cao", "Hải đảo xa", "Nơi hoang vắng"], "Khu công nghiệp cần gần nguồn lao động, giao thông thuận lợi và thị trường tiêu thụ."],
      ["Chuỗi giá trị của hạt lúa gạo gồm những khâu nào?", "Trồng – xay xát – đóng gói – xuất khẩu", ["Chỉ trồng", "Chỉ xuất khẩu", "Trồng rồi ăn ngay"], "Từ đồng ruộng qua chế biến đến tiêu thụ tạo thành chuỗi giá trị hoàn chỉnh."],
      ["Vì sao công nghiệp chế biến nông sản quan trọng với Việt Nam?", "Nông sản dồi dào, cần nâng giá trị xuất khẩu", ["Việt Nam thiếu nông sản", "Không cần thiết", "Chỉ để tiêu dùng nội địa"], "Việt Nam là nước nông nghiệp; chế biến sâu giúp tăng giá trị và sức cạnh tranh của nông sản."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-10-python-loops", "Lớp 10 · Vòng lặp trong Python", "for, while, break và continue", ["10", "🔁", "🐍"], [
      ["for i in range(5): print(i) sẽ in ra gì?", "0 1 2 3 4", ["1 2 3 4 5", "0 1 2 3 4 5", "5 4 3 2 1"], "range(5) tạo ra dãy số từ 0 đến 4."],
      ["Khi nào nên dùng vòng lặp while thay vì for?", "Khi chưa biết trước số lần lặp", ["Khi biết trước số lần lặp", "Không bao giờ", "Chỉ khi duyệt list"], "while lặp chừng nào điều kiện còn đúng; for dùng khi biết trước số lần hoặc duyệt dãy."],
      ["Lệnh break có tác dụng gì?", "Thoát khỏi vòng lặp ngay lập tức", ["Bỏ qua lần lặp hiện tại", "Dừng chương trình", "Lặp lại từ đầu"], "break thoát hẳn khỏi vòng lặp; continue chỉ bỏ qua phần còn lại của lần lặp hiện tại."],
      ["Nguy cơ lớn nhất khi dùng vòng lặp while là gì?", "Vòng lặp vô hạn nếu điều kiện luôn đúng", ["Chạy quá nhanh", "Tốn nhiều bộ nhớ", "Không lặp được"], "Nếu điều kiện của while không bao giờ sai, vòng lặp sẽ chạy mãi không dừng."],
      ["continue khác break ở điểm nào?", "continue chỉ bỏ qua lần lặp hiện tại, break thoát hẳn", ["Hai lệnh giống nhau", "continue thoát hẳn vòng lặp", "break chỉ bỏ qua một lần lặp"], "continue nhảy sang lần lặp tiếp theo; break kết thúc toàn bộ vòng lặp."],
    ]),
    createStarterTopic("grade-10-python-dict", "Lớp 10 · Từ điển trong Python", "Cặp khóa – giá trị và các phương thức", ["10", "📖", "🐍"], [
      ["Dict trong Python lưu trữ dữ liệu dưới dạng gì?", "Các cặp khóa – giá trị", ["Danh sách các số", "Xâu kí tự", "Tập hợp"], "Dict lưu cặp key–value, cho phép truy xuất rất nhanh thông qua khóa."],
      ["hs = {“ten”: “An”, “diem”: 9}. Giá trị của hs[“diem”] là gì?", "9", ["“An”", "“ten”", "Báo lỗi"], "Truy xuất giá trị thông qua khóa “diem” được kết quả là 9."],
      ["Khóa của dict phải có đặc điểm gì?", "Duy nhất và không thay đổi được", ["Được trùng nhau", "Phải là số", "Thay đổi tùy ý"], "Mỗi khóa trong dict là duy nhất; thường dùng số, xâu kí tự hoặc tuple (kiểu bất biến)."],
      ["Phương thức nào lấy ra tất cả các khóa của dict?", "keys()", ["values()", "get()", "add()"], "keys() lấy các khóa; values() lấy các giá trị; items() lấy từng cặp khóa – giá trị."],
      ["Khi nào nên dùng dict thay vì list?", "Khi cần tra cứu nhanh theo tên hoặc khóa", ["Khi cần giữ thứ tự", "Khi dữ liệu ít", "Luôn dùng list"], "Dict tra cứu theo khóa rất nhanh; list phù hợp khi cần thứ tự và truy xuất theo chỉ số."],
    ]),
    createStarterTopic("grade-10-file-handling", "Lớp 10 · Tệp trong Python", "open, các chế độ và with", ["10", "📁", "🐍"], [
      ["Mở tệp với chế độ “w” có nghĩa là gì?", "Ghi mới, xóa nội dung cũ", ["Chỉ đọc", "Ghi thêm vào cuối", "Không làm gì"], "“w” (write) ghi đè và xóa nội dung cũ; “a” ghi thêm; “r” chỉ đọc."],
      ["Vì sao nên dùng cấu trúc with open(...)?", "Tệp tự động đóng, tránh bị quên", ["Chạy nhanh hơn", "Tệp to hơn", "Không cần thiết"], "with đảm bảo tệp được đóng ngay cả khi chương trình gặp lỗi giữa chừng."],
      ["Phương thức readline() làm gì?", "Đọc một dòng của tệp", ["Đọc toàn bộ tệp", "Ghi một dòng", "Xóa một dòng"], "readline() đọc một dòng; read() đọc toàn bộ; readlines() đọc tất cả các dòng thành list."],
      ["Muốn ghi thêm vào cuối tệp mà không xóa nội dung cũ, dùng chế độ nào?", "“a”", ["“w”", "“r”", "“x”"], "“a” (append) ghi thêm vào cuối tệp, giữ nguyên nội dung cũ."],
      ["Gọi open() mà không chỉ rõ chế độ thì mặc định là gì?", "“r” (chỉ đọc)", ["“w”", "“a”", "Báo lỗi"], "Mặc định open() mở tệp ở chế độ đọc “r”."],
    ]),
  ],
  technology: [
    createStarterTopic("grade-10-hand-tools", "Lớp 10 · Dụng cụ cầm tay", "Chọn đúng dụng cụ và an toàn lao động", ["10", "🔨", "🪛"], [
      ["Chọn đúng dụng cụ cho công việc mang lại lợi ích gì?", "An toàn và hiệu quả", ["Nhanh hỏng dụng cụ", "Tốn nhiều sức", "Không quan trọng"], "Đúng dụng cụ giúp làm việc an toàn, hiệu quả và giữ dụng cụ bền lâu."],
      ["Dùng kìm cắt dây điện cần chú ý điều gì?", "Đảm bảo đã ngắt nguồn điện", ["Cắt thật nhanh", "Dùng tay trần", "Không cần chú ý"], "Phải ngắt nguồn điện trước khi thao tác để tránh bị giật điện."],
      ["Bảo quản dụng cụ kim loại thế nào cho bền?", "Giữ sạch sẽ, khô ráo", ["Để ngoài mưa", "Ngâm trong nước", "Để rỉ sét"], "Giữ dụng cụ sạch, khô ráo để tránh rỉ sét; có thể tra dầu định kì."],
      ["Khi cưa hoặc khoan cần đeo gì để bảo vệ mắt?", "Kính bảo hộ", ["Găng tay len", "Khẩu trang vải", "Không cần gì"], "Kính bảo hộ giúp tránh mạt cưa và bụi bắn vào mắt."],
      ["Tua vít dùng để làm gì?", "Vặn ốc vít", ["Đóng đinh", "Cắt dây điện", "Đo đạc"], "Tua vít dùng để vặn ốc vít; búa dùng đóng đinh; kìm dùng cắt và giữ."],
    ]),
    createStarterTopic("grade-10-irrigation-systems", "Lớp 10 · Hệ thống tưới", "Các kiểu tưới và tưới tự động", ["10", "💧", "🌱"], [
      ["Kiểu tưới nào tiết kiệm nước nhất?", "Tưới nhỏ giọt", ["Tưới tràn", "Tưới phun mưa", "Tưới bằng xô"], "Tưới nhỏ giọt đưa nước trực tiếp đến gốc cây, giảm thất thoát do bốc hơi tối đa."],
      ["Ưu điểm nổi bật của tưới nhỏ giọt là gì?", "Đưa nước trực tiếp đến gốc cây", ["Tưới được diện tích lớn rất nhanh", "Không cần ống dẫn", "Chi phí rẻ nhất"], "Nước đến trực tiếp gốc cây nên hầu như không bị thất thoát."],
      ["Hệ thống tưới tự động dùng gì để biết khi nào cần tưới?", "Cảm biến độ ẩm đất", ["Đồng hồ treo tường", "Nhiệt kế", "Đoán mò"], "Cảm biến đo độ ẩm đất, kết hợp van hẹn giờ để tưới đúng lúc, đúng lượng."],
      ["Tưới tràn có nhược điểm gì?", "Tốn nước và dễ gây úng rễ", ["Tiết kiệm nước", "Tốn ít công sức", "Tốt cho mọi loại cây"], "Tưới tràn thất thoát nhiều do bốc hơi và thấm sâu; nước đọng dễ gây úng rễ."],
      ["Thiết kế hệ thống tưới cho vườn rau gia đình cần những gì?", "Nguồn nước, ống dẫn và béc tưới phù hợp", ["Máy bơm công nghiệp", "Hệ thống điều khiển lớn", "Không cần gì"], "Vườn rau nhỏ chỉ cần nguồn nước, ống dẫn và béc tưới đơn giản với chi phí thấp."],
    ]),
    createStarterTopic("grade-10-food-preservation", "Lớp 10 · Bảo quản thực phẩm", "Nguyên nhân hỏng và các phương pháp bảo quản", ["10", "🥫", "❄"], [
      ["Thực phẩm bị hỏng chủ yếu do đâu?", "Vi sinh vật, enzyme và quá trình ôxi hóa", ["Nhiệt độ thấp", "Thiếu ánh sáng", "Để yên không động"], "Vi khuẩn, nấm mốc, enzyme và ôxi hóa làm thực phẩm biến chất, mất an toàn."],
      ["Muối dưa chua là cách bảo quản dựa trên nguyên lí nào?", "Tạo môi trường ức chế vi sinh vật có hại", ["Làm lạnh", "Sấy khô", "Hút chân không"], "Muối tạo môi trường ức chế vi khuẩn gây hỏng; đây là cách bảo quản truyền thống của người Việt."],
      ["Bảo quản đông lạnh có tiêu diệt hết vi khuẩn không?", "Không, chỉ làm chậm hoạt động của chúng", ["Có, giết hết", "Không, còn làm tăng", "Tùy loại thực phẩm"], "Nhiệt độ thấp chỉ làm vi sinh vật ngừng hoặc chậm phát triển chứ không tiêu diệt hết."],
      ["Ưu điểm của phương pháp sấy khô là gì?", "Bảo quản lâu, nhẹ và dễ vận chuyển", ["Giữ nguyên vị tươi", "Thực hiện nhanh chóng", "Không tốn công sức"], "Sấy khô loại bỏ nước nên thực phẩm nhẹ, để được lâu và dễ vận chuyển."],
      ["So sánh bảo quản lạnh với đóng hộp?", "Lạnh giữ vị tươi ngắn hạn; đóng hộp để được lâu", ["Hai cách giống nhau", "Lạnh để được lâu hơn", "Đóng hộp không an toàn"], "Bảo quản lạnh giữ vị tươi nhưng thời gian ngắn; đóng hộp tiệt trùng thì để được rất lâu."],
    ]),
  ],
  civics: [
    createStarterTopic("grade-10-consumer-rights", "Lớp 10 · Quyền người tiêu dùng", "Các quyền cơ bản và cách khiếu nại", ["10", "🛒", "⚖"], [
      ["Người tiêu dùng có những quyền cơ bản nào?", "Được thông tin trung thực, an toàn và khiếu nại", ["Được miễn phí mọi thứ", "Được đổi ý tùy thích", "Không có quyền gì"], "Quyền được thông tin đầy đủ, hàng hóa an toàn, được lựa chọn và được khiếu nại, bồi thường."],
      ["Mua điện thoại bị lỗi trong thời gian bảo hành thì làm gì?", "Yêu cầu sửa chữa hoặc đổi sản phẩm mới", ["Chịu thiệt", "Vứt đi", "Tự sửa chữa"], "Trong thời gian bảo hành, người mua được quyền yêu cầu sửa chữa hoặc đổi mới theo cam kết."],
      ["Vì sao cần giữ lại hóa đơn khi mua hàng?", "Làm bằng chứng khi khiếu nại hoặc bảo hành", ["Để khoe với bạn", "Không cần thiết", "Để trang trí"], "Hóa đơn chứng minh giao dịch đã diễn ra, là căn cứ để khiếu nại và bảo hành."],
      ["Phát hiện mua phải hàng giả, hàng kém chất lượng nên làm gì?", "Khiếu nại người bán và báo cơ quan chức năng", ["Im lặng cho qua", "Bán lại cho người khác", "Tiếp tục sử dụng"], "Khiếu nại để được bồi thường; báo cơ quan chức năng để xử lí hành vi vi phạm."],
      ["Quảng cáo sai sự thật vi phạm quyền nào của người tiêu dùng?", "Quyền được cung cấp thông tin trung thực", ["Quyền sở hữu", "Quyền tự do", "Không vi phạm quyền nào"], "Người tiêu dùng có quyền được thông tin đúng về hàng hóa, dịch vụ mình mua."],
    ]),
    createStarterTopic("grade-10-labor-rights", "Lớp 10 · Quyền lao động", "Giờ làm việc, tiền lương và bảo hiểm", ["10", "👷", "📋"], [
      ["Giờ làm việc tiêu chuẩn mỗi ngày là bao nhiêu?", "Không quá 8 giờ", ["12 giờ", "Không giới hạn", "4 giờ"], "Giờ làm việc không quá 8 giờ mỗi ngày; làm thêm giờ phải được trả lương cao hơn."],
      ["Trẻ em dưới 15 tuổi có được làm công việc nặng nhọc không?", "Không, pháp luật nghiêm cấm", ["Được", "Tùy ý chủ sử dụng", "Được nếu trả lương cao"], "Pháp luật nghiêm cấm sử dụng lao động dưới 15 tuổi vào công việc nặng nhọc, nguy hiểm."],
      ["Người lao động có quyền nào về tiền lương?", "Hưởng lương xứng đáng, không thấp hơn lương tối thiểu", ["Nhận bao nhiêu cũng được", "Không có quyền gì", "Tùy chủ quyết định"], "Tiền lương không được thấp hơn mức lương tối thiểu do nhà nước quy định."],
      ["Bảo hiểm xã hội mang lại gì cho người lao động?", "Hỗ trợ khi ốm đau, thai sản và lúc về hưu", ["Không có ích gì", "Chỉ có lợi cho chủ", "Tốn tiền vô ích"], "Bảo hiểm xã hội chi trả khi ốm đau, thai sản, tai nạn lao động và chế độ hưu trí."],
      ["Đảm bảo an toàn lao động là trách nhiệm của ai?", "Cả người sử dụng và người lao động", ["Chỉ người lao động", "Không ai cả", "Chỉ nhà nước"], "Chủ sử dụng phải đảm bảo điều kiện an toàn; người lao động phải tuân thủ quy định an toàn."],
    ]),
    createStarterTopic("grade-10-environmental-law", "Lớp 10 · Luật bảo vệ môi trường", "Trách nhiệm và xử phạt vi phạm", ["10", "🌱", "⚖"], [
      ["Ai phải chịu trách nhiệm khi gây ô nhiễm môi trường?", "Người gây ô nhiễm phải khắc phục hậu quả", ["Không ai cả", "Nhà nước chịu", "Người dân chịu"], "Theo nguyên tắc “người gây ô nhiễm phải trả tiền”, ai gây ô nhiễm phải khắc phục."],
      ["Hành vi nào vi phạm luật bảo vệ môi trường?", "Xả thải vượt chuẩn ra sông", ["Trồng cây xanh", "Phân loại rác", "Tiết kiệm nước"], "Xả thải vượt quy chuẩn, phá rừng, săn bắt động vật hoang dã đều bị xử phạt."],
      ["Nhà máy xả nước thải chưa xử lí ra sông sẽ bị gì?", "Phạt tiền và buộc khắc phục", ["Khen thưởng", "Không sao cả", "Được hỗ trợ"], "Hành vi vi phạm bị phạt hành chính, buộc khắc phục hậu quả, thậm chí đình chỉ hoạt động."],
      ["Luật Bảo vệ môi trường quy định trách nhiệm cho ai?", "Mọi tổ chức và cá nhân", ["Chỉ các nhà máy", "Chỉ chính quyền", "Không ai cả"], "Bảo vệ môi trường là trách nhiệm của mọi tổ chức và cá nhân trong xã hội."],
      ["Là học sinh, em có thể bảo vệ môi trường bằng cách nào?", "Không xả rác, tiết kiệm và tuyên truyền", ["Không liên quan đến mình", "Chờ người lớn làm", "Chỉ cần học bài"], "Học sinh có thể không xả rác bừa bãi, tiết kiệm điện nước, tham gia trồng cây và tuyên truyền."],
    ]),
  ],
  "physical-education": [
    createStarterTopic("grade-10-warm-up", "Lớp 10 · Khởi động trước khi tập", "Khởi động chung, chuyên môn và phòng chấn thương", ["10", "🏃", "💪"], [
      ["Khởi động có tác dụng gì?", "Làm nóng cơ thể, tăng linh hoạt khớp", ["Làm mệt trước khi tập", "Không cần thiết", "Giảm sức mạnh"], "Khởi động tăng nhịp tim, nhiệt độ cơ và độ linh hoạt, giảm nguy cơ chấn thương."],
      ["Khởi động gồm những loại nào?", "Khởi động chung và khởi động chuyên môn", ["Một loại duy nhất", "Ba loại", "Không phân loại"], "Khởi động chung như chạy nhẹ toàn thân; khởi động chuyên môn mô phỏng kĩ thuật sắp tập."],
      ["Không khởi động kĩ trước khi vận động mạnh dễ bị gì?", "Chấn thương cơ và khớp", ["Khỏe hơn", "Nhanh hơn", "Không sao cả"], "Cơ và khớp chưa sẵn sàng mà vận động mạnh dễ bị căng cơ, bong gân."],
      ["Xoay khớp cổ tay, cổ chân, gối thuộc loại khởi động nào?", "Khởi động chung", ["Khởi động chuyên môn", "Thả lỏng", "Không phải khởi động"], "Xoay các khớp là khởi động chung, chuẩn bị cho toàn bộ cơ thể."],
      ["Vì sao vận động viên chuyên nghiệp luôn khởi động rất kĩ?", "Để đạt phong độ tốt nhất và tránh chấn thương", ["Cho đẹp mắt", "Theo thói quen", "Để tốn thời gian"], "Khởi động kĩ giúp cơ thể đạt trạng thái tốt nhất và phòng tránh chấn thương."],
    ]),
    createStarterTopic("grade-10-badminton-basics", "Lớp 10 · Cầu lông cơ bản", "Cầm vợt, di chuyển và các cú đánh", ["10", "🏸", "🎯"], [
      ["Cầm vợt cầu lông đúng cách thế nào?", "Như bắt tay", ["Nắm chặt cả cán vợt", "Cầm đầu vợt", "Cầm bằng hai tay"], "Cầm vợt như bắt tay giúp cổ tay linh hoạt, điều khiển cầu tốt."],
      ["Các kĩ thuật cơ bản của cầu lông gồm gì?", "Phát cầu, đánh cao sâu, bỏ nhỏ, đập cầu", ["Chỉ phát cầu", "Chỉ đập cầu", "Chạy bộ"], "Các kĩ thuật cơ bản tạo nền tảng vững chắc cho lối chơi."],
      ["Khi đánh cầu cần quan sát điều gì?", "Vị trí đối thủ để chọn điểm đánh", ["Khán giả", "Trọng tài", "Đồng hồ"], "Quan sát đối thủ để đánh vào chỗ trống, tạo sự bất ngờ."],
      ["Di chuyển trong cầu lông cần nguyên tắc gì?", "Chân linh hoạt, luôn về vị trí trung tâm", ["Đứng yên một chỗ", "Chạy lung tung", "Nhảy liên tục"], "Di chuyển nhanh gọn và trở về vị trí trung tâm sau mỗi pha cầu."],
      ["Luyện phát cầu 20 lần liên tiếp để làm gì?", "Rèn độ chính xác và ổn định", ["Cho vui", "Tốn thời gian", "Không có ích"], "Luyện tập lặp lại giúp động tác chuẩn xác và ổn định dần."],
    ]),
    createStarterTopic("grade-10-sleep-recovery", "Lớp 10 · Giấc ngủ và phục hồi", "Vai trò của giấc ngủ với vận động", ["10", "😴", "🔋"], [
      ["Thanh thiếu niên cần ngủ bao nhiêu giờ mỗi đêm?", "8–10 giờ", ["4–5 giờ", "12 giờ", "Càng ít càng tốt"], "Tuổi teen cần 8–10 giờ ngủ mỗi đêm để phát triển thể chất và trí não."],
      ["Giấc ngủ giúp gì cho người tập thể thao?", "Phục hồi cơ bắp và củng cố trí nhớ", ["Không có tác dụng", "Làm yếu cơ", "Gây mệt mỏi"], "Khi ngủ, cơ thể tiết hormone tăng trưởng giúp phục hồi cơ; não củng cố kĩ năng đã học."],
      ["Thiếu ngủ ảnh hưởng thế nào khi vận động?", "Giảm tập trung và dễ chấn thương", ["Tăng sức mạnh", "Nhanh nhẹn hơn", "Không ảnh hưởng"], "Thiếu ngủ làm phản xạ chậm, mất tập trung nên dễ gặp chấn thương."],
      ["Muốn buổi tập sáng hôm sau hiệu quả, tối hôm trước nên làm gì?", "Đi ngủ đúng giờ, đủ giấc", ["Thức khuya", "Ngủ bù vào sáng", "Uống cà phê"], "Ngủ đúng giờ và đủ giấc giúp cơ thể phục hồi tốt nhất."],
      ["Dấu hiệu nào cho thấy em đang thiếu ngủ?", "Mệt mỏi, khó tập trung vào ban ngày", ["Tỉnh táo", "Học giỏi hơn", "Khỏe mạnh"], "Mệt mỏi, buồn ngủ và khó tập trung vào ban ngày là dấu hiệu thiếu ngủ."],
    ]),
  ],
  music: [
    createStarterTopic("grade-10-vietnamese-folk", "Lớp 10 · Dân ca Việt Nam", "Các làn điệu dân ca ba miền", ["10", "🎵", "🏮"], [
      ["Dân ca là gì?", "Bài hát dân gian truyền miệng", ["Nhạc hiện đại", "Nhạc nước ngoài", "Nhạc cung đình"], "Dân ca là sáng tác dân gian, được truyền miệng qua nhiều thế hệ."],
      ["Quan họ là dân ca của vùng nào?", "Bắc Ninh", ["Nghệ Tĩnh", "Nam Bộ", "Tây Nguyên"], "Quan họ Bắc Ninh được UNESCO công nhận là di sản văn hóa phi vật thể."],
      ["Ví, dặm là dân ca của vùng nào?", "Nghệ Tĩnh", ["Bắc Bộ", "Nam Bộ", "Tây Bắc"], "Ví, dặm là làn điệu dân ca Nghệ Tĩnh, cũng được UNESCO công nhận."],
      ["“Trống cơm” là làn điệu dân ca của vùng nào?", "Đồng bằng Bắc Bộ", ["Nam Bộ", "Tây Nguyên", "Miền Trung"], "Trống cơm là điệu dân ca vui nhộn của vùng đồng bằng Bắc Bộ."],
      ["Dân ca phản ánh điều gì?", "Đời sống và tình cảm của nhân dân lao động", ["Đời sống cung đình", "Chiến tranh", "Thương mại"], "Dân ca ra đời từ lao động và sinh hoạt nên phản ánh đời sống của nhân dân."],
    ]),
    createStarterTopic("grade-10-rhythm-reading", "Lớp 10 · Đọc nhịp trong âm nhạc", "Số chỉ nhịp và tiết tấu", ["10", "🥁", "🎼"], [
      ["Số chỉ nhịp 3/4 có nghĩa là gì?", "Mỗi ô nhịp có 3 phách", ["Mỗi phách dài 3 giây", "Có 3 ô nhịp", "Tốc độ bằng 3"], "Số ở trên là số phách trong một ô nhịp; số ở dưới cho biết loại nốt tính là một phách."],
      ["Nhịp 3/4 thường được dùng trong điệu nhạc nào?", "Valse", ["March", "Rock", "Rap"], "Điệu valse có 3 phách với phách đầu mạnh và hai phách sau nhẹ."],
      ["Sự xen kẽ phách mạnh – nhẹ tạo nên yếu tố nào của âm nhạc?", "Tiết tấu", ["Cao độ", "Âm sắc", "Cường độ"], "Sự xen kẽ phách mạnh và phách nhẹ tạo nên tiết tấu cho bản nhạc."],
      ["Đọc nhịp kết hợp vỗ tay có tác dụng gì?", "Giữ đúng tốc độ của bài hát", ["Hát to hơn", "Nhớ lời nhanh", "Không có ích"], "Vỗ tay theo phách giúp cảm nhận nhịp và giữ tốc độ chính xác."],
      ["Nhịp 2/4 khác nhịp 4/4 ở điểm nào?", "Số phách trong mỗi ô nhịp", ["Tốc độ", "Cao độ", "Nhạc cụ"], "Nhịp 2/4 có 2 phách mỗi ô nhịp; nhịp 4/4 có 4 phách mỗi ô nhịp."],
    ]),
    createStarterTopic("grade-10-music-emotions", "Lớp 10 · Âm nhạc và cảm xúc", "Nhịp độ, giọng nhạc và tâm trạng", ["10", "🎧", "💛"], [
      ["Nhạc nhịp nhanh kết hợp giọng trưởng thường tạo cảm giác gì?", "Vui tươi, sôi động", ["Buồn bã", "Sợ hãi", "Buồn ngủ"], "Nhịp nhanh cùng giọng trưởng gợi cảm xúc tích cực, vui tươi."],
      ["Nhạc nhịp chậm với giọng thứ thường gợi cảm giác gì?", "Buồn và sâu lắng", ["Vui vẻ", "Hào hứng", "Tức giận"], "Nhịp chậm, giọng thứ thường diễn tả nỗi buồn và sự suy tư."],
      ["Nghe nhạc phù hợp có tác dụng gì?", "Thư giãn và giảm căng thẳng", ["Tăng căng thẳng", "Gây mất ngủ", "Không có tác dụng"], "Âm nhạc tác động đến cảm xúc; nhạc phù hợp giúp thư giãn sau giờ học mệt mỏi."],
      ["Khi cần tập trung học bài nên nghe nhạc thế nào?", "Nhạc nhẹ, không lời", ["Nhạc rap nhanh", "Nhạc dance sôi động", "Mở thật to"], "Nhạc nhẹ không lời ít gây xao nhãng, hỗ trợ sự tập trung tốt hơn."],
      ["Yếu tố nào của âm nhạc ảnh hưởng đến cảm xúc mạnh nhất?", "Nhịp độ và giọng trưởng hay thứ", ["Tên bài hát", "Ca sĩ thể hiện", "Năm sáng tác"], "Nhịp độ nhanh hay chậm và giọng trưởng hay thứ quyết định sắc thái cảm xúc chính."],
    ]),
  ],
  "visual-arts": [
    createStarterTopic("grade-10-color-theory-adv", "Lớp 10 · Màu sắc nâng cao", "Vòng tròn màu, tương phản và tương đồng", ["10", "🎨", "🔴"], [
      ["Ba màu bậc một là những màu nào?", "Đỏ, vàng, lam", ["Cam, lục, tím", "Đen, trắng, xám", "Hồng, nâu, be"], "Đỏ, vàng, lam là ba màu gốc; pha trộn chúng tạo ra màu bậc hai và bậc ba."],
      ["Cặp màu tương phản là gì?", "Hai màu đối nhau trên vòng tròn màu", ["Hai màu cạnh nhau", "Hai màu giống nhau", "Màu đen và trắng"], "Hai màu đối nhau đặt cạnh nhau sẽ tạo ấn tượng mạnh mẽ, nổi bật."],
      ["Đỏ – lục là cặp màu gì?", "Màu tương phản", ["Màu tương đồng", "Màu trung tính", "Màu đơn sắc"], "Đỏ và lục đối nhau trên vòng tròn màu nên là cặp màu tương phản."],
      ["Nhóm màu tương đồng tạo cảm giác gì?", "Hài hòa và dễ chịu", ["Chói chang", "Lộn xộn", "Buồn bã"], "Các màu cạnh nhau như cam – vàng – đỏ tạo sự hài hòa, dễ chịu."],
      ["Sắc độ và cường độ của màu ảnh hưởng đến điều gì?", "Cảm xúc của bức tranh", ["Kích thước tranh", "Giá bán tranh", "Tuổi thọ tranh"], "Màu tươi rực gợi sự vui tươi; màu trầm và nhạt gợi cảm giác dịu dàng, buồn."],
    ]),
    createStarterTopic("grade-10-logo-design", "Lớp 10 · Thiết kế logo", "Nguyên tắc và quy trình thiết kế", ["10", "✏", "©"], [
      ["Một logo tốt cần có đặc điểm gì?", "Đơn giản, dễ nhớ và đặc trưng", ["Càng phức tạp càng tốt", "Nhiều chi tiết", "Khó hiểu"], "Logo đơn giản mới dễ nhận diện và ghi nhớ lâu dài."],
      ["Thiết kế logo nên bắt đầu từ bước nào?", "Tìm hiểu về thương hiệu", ["Vẽ ngay lập tức", "Sao chép mẫu có sẵn", "Chọn màu trước"], "Phải hiểu thương hiệu (ngành nghề, đối tượng) rồi mới phác thảo ý tưởng."],
      ["Vì sao không nên sao chép logo có sẵn?", "Vi phạm bản quyền và thiếu đặc trưng", ["Nhanh hơn", "Đẹp hơn", "Không sao cả"], "Sao chép vừa vi phạm bản quyền vừa làm mất bản sắc riêng của thương hiệu."],
      ["Logo của Apple có đặc điểm gì?", "Đơn giản, ai cũng nhận ra", ["Phức tạp", "Nhiều màu sắc", "Khó nhớ"], "Logo quả táo cắn dở cực kì đơn giản nhưng có độ nhận diện toàn cầu."],
      ["Phác thảo nhiều ý tưởng logo để làm gì?", "Chọn được phương án tốt nhất", ["Tốn thời gian", "Khoe kĩ năng", "Không cần thiết"], "Càng nhiều ý tưởng càng dễ chọn được thiết kế độc đáo và phù hợp."],
    ]),
    createStarterTopic("grade-10-art-critique", "Lớp 10 · Thưởng thức nghệ thuật", "Bốn bước cảm nhận một bức tranh", ["10", "🖼", "👁"], [
      ["Thưởng thức một bức tranh gồm mấy bước?", "Bốn bước: mô tả, phân tích, diễn giải, đánh giá", ["Một bước", "Hai bước", "Không cần bước nào"], "Mô tả những gì thấy → phân tích bố cục, màu sắc → diễn giải ý nghĩa → đánh giá."],
      ["Bước phân tích trong thưởng thức tranh làm gì?", "Xem xét bố cục, màu sắc và đường nét", ["Kể tên họa sĩ", "Đoán giá tranh", "Chụp ảnh lại"], "Phân tích các yếu tố tạo hình: bố cục, màu sắc, đường nét và ánh sáng."],
      ["Đánh giá một bức tranh nên dựa vào điều gì?", "Cảm nhận chân thành và có lí lẽ", ["Giá bán của tranh", "Ý kiến của số đông", "Tuổi tác họa sĩ"], "Không có đáp án đúng duy nhất; quan trọng là cảm nhận chân thành và có lí lẽ thuyết phục."],
      ["Bức “Thiếu nữ bên hoa huệ” là của họa sĩ nào?", "Tô Ngọc Vân", ["Nguyễn Gia Trí", "Bùi Xuân Phái", "Trần Văn Cẩn"], "Đây là tác phẩm nổi tiếng của Tô Ngọc Vân với vẻ đẹp dịu dàng trong gam màu nhẹ nhàng."],
      ["Vì sao cùng một bức tranh mà mỗi người cảm nhận khác nhau?", "Trải nghiệm và góc nhìn mỗi người khác nhau", ["Tranh bị lỗi", "Mọi người đều sai", "Tranh quá khó hiểu"], "Cảm nhận nghệ thuật mang tính chủ quan, phụ thuộc vào trải nghiệm của mỗi người."],
    ]),
  ],
  "national-defense": [
    createStarterTopic("grade-10-map-reading", "Lớp 10 · Đọc bản đồ địa hình", "Tỉ lệ, kí hiệu và đường đồng mức", ["10", "🗺", "🧭"], [
      ["Bản đồ thể hiện địa hình bằng những yếu tố nào?", "Kí hiệu, tỉ lệ và hướng", ["Màu sắc tùy thích", "Chữ viết", "Hình ảnh thật"], "Bản đồ dùng hệ thống kí hiệu chuẩn, tỉ lệ thu nhỏ và hướng bắc."],
      ["Đường đồng mức càng gần nhau cho biết điều gì?", "Địa hình càng dốc", ["Địa hình bằng phẳng", "Có sông chảy qua", "Có đường đi"], "Đường đồng mức càng gần nhau thì độ dốc địa hình càng lớn."],
      ["Bản đồ tỉ lệ 1:25.000, 1 cm trên bản đồ bằng bao nhiêu mét thực tế?", "250 m", ["25 m", "2,5 km", "25 km"], "1 cm × 25.000 = 25.000 cm = 250 m thực tế."],
      ["Đọc bản đồ thành thạo giúp ích gì?", "Xác định vị trí, khoảng cách và đường đi", ["Dự báo thời tiết", "Đếm dân số", "Không có ích"], "Đọc bản đồ giúp định vị, ước tính khoảng cách và lựa chọn đường đi hợp lí."],
      ["Kí hiệu trên bản đồ có đặc điểm gì?", "Thống nhất theo quy ước chung", ["Tùy người vẽ", "Thay đổi liên tục", "Không cần học"], "Kí hiệu bản đồ được quy ước thống nhất để ai cũng đọc hiểu được."],
    ]),
    createStarterTopic("grade-10-camouflage", "Lớp 10 · Ngụy trang trong quân sự", "Nguyên lí ngụy trang trong quân sự và tự nhiên", ["10", "🦎", "🌿"], [
      ["Ngụy trang là gì?", "Che giấu để hòa lẫn với môi trường xung quanh", ["Trang điểm cho đẹp", "Mặc đồ mới", "Tập thể dục"], "Ngụy trang dùng màu sắc và vật liệu để hòa lẫn vào xung quanh, khó bị phát hiện."],
      ["Tắc kè hoa ngụy trang bằng cách nào?", "Đổi màu da theo môi trường", ["Chạy thật nhanh", "Bay đi chỗ khác", "Kêu thật to"], "Tắc kè hoa đổi màu da để lẫn vào cành cây, vừa rình mồi vừa tránh kẻ thù."],
      ["Ngụy trang trong quân sự có tác dụng gì?", "Ẩn nấp và tạo yếu tố bất ngờ", ["Trang trí", "Diễu hành", "Tập luyện"], "Ngụy trang giúp ẩn nấp an toàn và tiếp cận mục tiêu một cách bất ngờ."],
      ["Động vật ngụy trang để làm gì?", "Săn mồi hiệu quả hoặc tránh kẻ thù", ["Làm đẹp", "Giao tiếp", "Di cư"], "Ngụy trang giúp động vật săn mồi hiệu quả hơn và tránh bị kẻ thù phát hiện."],
      ["Ngụy trang thường tận dụng yếu tố nào?", "Màu sắc và vật liệu tự nhiên", ["Âm thanh lớn", "Ánh sáng mạnh", "Mùi thơm"], "Dùng màu sắc, lá cây, bùn đất để hòa lẫn với môi trường xung quanh."],
    ]),
    createStarterTopic("grade-10-disaster-first-response", "Lớp 10 · Ứng phó thiên tai", "Xử lí khi bão lũ và ba lô khẩn cấp", ["10", "⛑", "🌊"], [
      ["Khi thiên tai xảy ra, điều đầu tiên cần làm là gì?", "Bình tĩnh và làm theo hướng dẫn", ["Hoảng loạn", "Chạy lung tung", "Quay video"], "Giữ bình tĩnh và làm theo hướng dẫn của người lớn, lực lượng cứu hộ."],
      ["Ba lô khẩn cấp của gia đình nên có những gì?", "Nước, đồ ăn khô, đèn pin, thuốc men", ["Quần áo đẹp", "Đồ chơi", "Sách vở"], "Chuẩn bị sẵn nước uống, đồ ăn khô, đèn pin, thuốc men và giấy tờ quan trọng."],
      ["Khi lũ lên, cần xử lí hệ thống điện thế nào?", "Tắt nguồn điện, tránh xa vùng ngập nước", ["Bật thêm đèn", "Sờ vào ổ điện", "Không quan tâm"], "Nước dẫn điện nên phải tắt nguồn điện và tránh xa khu vực ngập nước."],
      ["Bị cô lập do lũ, nên làm gì?", "Di chuyển lên nơi cao và gọi cứu hộ", ["Bơi qua dòng lũ", "Ở yên chỗ thấp", "Tự đi bộ trong nước"], "Di chuyển lên nơi cao ráo, gọi số cứu hộ, tuyệt đối không tự bơi qua dòng nước xiết."],
      ["Sau thiên tai cần đề phòng những nguy hiểm nào?", "Điện rò rỉ, nước bẩn, nhà cửa hư hỏng", ["Đi chơi ngay", "Ăn uống thoải mái", "Không cần đề phòng"], "Sau thiên tai cần đề phòng điện rò rỉ, nguồn nước ô nhiễm và công trình hư hỏng."],
    ]),
  ],
  "career-experience": [
    createStarterTopic("grade-10-note-taking", "Lớp 10 · Ghi chép hiệu quả", "Phương pháp Cornell và sơ đồ tư duy", ["10", "📓", "✎"], [
      ["Ghi chép tốt mang lại lợi ích gì?", "Nhớ lâu và ôn tập nhanh", ["Không cần học nữa", "Mất thời gian", "Quên nhanh hơn"], "Ghi chép bằng lời của mình giúp hiểu sâu, nhớ lâu và ôn tập hiệu quả."],
      ["Phương pháp Cornell chia trang giấy thành mấy phần?", "Ba phần: ghi chú, từ khóa, tóm tắt", ["Một phần", "Hai phần", "Năm phần"], "Cột ghi chú chính, cột từ khóa bên trái và phần tóm tắt ở dưới cùng."],
      ["Khi nghe giảng nên ghi chép thế nào?", "Chỉ ghi ý chính và ví dụ", ["Chép từng chữ", "Không ghi gì", "Vẽ tranh"], "Chép từng chữ thì không kịp hiểu bài; ghi ý chính giúp vừa nghe vừa tư duy."],
      ["Sau khi ghi chép nên làm gì?", "Xem lại trong vòng 24 giờ", ["Bỏ xó", "Xé đi", "Để đó"], "Ôn lại trong 24 giờ giúp chuyển kiến thức vào trí nhớ dài hạn."],
      ["Nên dùng sơ đồ tư duy trong trường hợp nào?", "Khi kiến thức phức tạp, nhiều ý nhánh", ["Mọi lúc", "Không bao giờ", "Chỉ khi vẽ đẹp"], "Sơ đồ tư duy phù hợp với kiến thức có nhiều ý nhánh liên hệ với nhau."],
    ]),
    createStarterTopic("grade-10-presentation-skills", "Lớp 10 · Thuyết trình", "Chuẩn bị, trình bày và trả lời câu hỏi", ["10", "🎤", "📊"], [
      ["Mở đầu bài thuyết trình thế nào để gây chú ý?", "Bằng câu hỏi hoặc câu chuyện", ["Đọc slide", "Im lặng", "Xin lỗi khán giả"], "Câu hỏi hay câu chuyện khơi gợi tò mò tốt hơn đọc slide khô khan."],
      ["Slide thuyết trình nên được thiết kế thế nào?", "Đơn giản và ít chữ", ["Đầy chữ", "Nhiều hiệu ứng", "Không cần slide"], "Slide chỉ là dàn ý gợi nhớ; nhiều chữ khiến khán giả đọc slide thay vì nghe nói."],
      ["Khi thuyết trình nên nhìn vào đâu?", "Nhìn khán giả", ["Nhìn sàn nhà", "Nhìn chằm chằm slide", "Nhắm mắt"], "Giao tiếp bằng mắt với khán giả tạo sự kết nối và tự tin."],
      ["Được hỏi điều mình chưa biết, nên xử lí thế nào?", "Thừa nhận và hứa tìm hiểu thêm", ["Bịa ra đáp án", "Lảng tránh", "Cãi lại"], "Thành thật thừa nhận và hứa tìm hiểu thêm thể hiện sự chuyên nghiệp."],
      ["Tốc độ nói khi thuyết trình nên thế nào?", "Vừa phải và rõ ràng", ["Thật nhanh", "Thật chậm", "Tùy hứng"], "Nói vừa phải, rõ ràng và nhấn nhá đúng chỗ giúp khán giả dễ theo dõi."],
    ]),
    createStarterTopic("grade-10-mentoring", "Lớp 10 · Học hỏi từ người đi trước", "Cách hỏi, lắng nghe và biết ơn", ["10", "🤝", "🌟"], [
      ["Người đi trước có thể giúp gì cho em?", "Chia sẻ kinh nghiệm quý giá từ thực tế", ["Làm bài hộ", "Cho tiền", "Không giúp được gì"], "Người đi trước đã trải qua nên có kinh nghiệm và lời khuyên thực tế."],
      ["Khi được người đi trước chia sẻ, em nên làm gì?", "Lắng nghe chăm chú và ghi chép", ["Ngắt lời", "Bỏ ngoài tai", "Chê bai"], "Lắng nghe chăm chú và ghi chép thể hiện sự tôn trọng, đồng thời giúp nhớ lâu."],
      ["Muốn hỏi về cách ôn thi hiệu quả, nên hỏi ai?", "Anh chị khóa trên và thầy cô", ["Người lạ", "Không hỏi ai", "Tự đoán mò"], "Anh chị khóa trên và thầy cô có kinh nghiệm thực tế và phù hợp nhất."],
      ["Thái độ đúng đắn với người đã giúp đỡ mình là gì?", "Biết ơn và giữ liên lạc", ["Quên ngay", "Vô ơn", "Lợi dụng"], "Biết ơn, giữ liên lạc và sau này giúp lại người khác là đạo lí tốt đẹp."],
      ["Trước khi gặp gỡ người thành công để học hỏi, nên chuẩn bị gì?", "Liệt kê các câu hỏi cụ thể", ["Không chuẩn bị gì", "Hỏi lung tung", "Chỉ ngồi nghe"], "Chuẩn bị câu hỏi cụ thể giúp buổi trò chuyện hiệu quả, không lãng phí thời gian."],
    ]),
  ],
};
for (const [subjectId, topics] of Object.entries(gradeTenExtraPractice)) {
  for (const topic of topics) topic.level = "LỚP 10";
  curriculumExtensions[subjectId].push(...topics);
}

const gradeElevenExtraPractice = {
  math: [
    createStarterTopic("grade-11-derivatives-applications", "Lớp 11 · Ứng dụng đạo hàm", "Cực trị, tính đơn điệu và bài toán tối ưu", ["11", "ƒ′", "📈"], [
      ["Đạo hàm của hàm số y = x³ là gì?", "3x²", ["x²", "3x", "x³/3"], "Áp dụng công thức (x^n)' = n·x^(n−1): (x³)' = 3x²."],
      ["Hàm số y = x² − 4x + 3 đạt cực tiểu tại x bằng bao nhiêu?", "2", ["0", "4", "−2"], "y' = 2x − 4 = 0 cho x = 2; y'' = 2 > 0 nên đây là điểm cực tiểu."],
      ["Hàm số nào đồng biến trên ℝ?", "y = x³", ["y = −x³", "y = x²", "y = −x"], "y = x³ có y' = 3x² ≥ 0 với mọi x nên đồng biến trên ℝ."],
      ["Giá trị lớn nhất của y = −x² + 4x + 1 là bao nhiêu?", "5", ["1", "4", "9"], "Parabol bề lõm xuống, đỉnh tại x = 2; giá trị lớn nhất y(2) = −4 + 8 + 1 = 5."],
      ["Đạo hàm của y = sin x là gì?", "cos x", ["−cos x", "−sin x", "tan x"], "(sin x)' = cos x."],
    ]),
    createStarterTopic("grade-11-integrals-intro", "Lớp 11 · Nguyên hàm cơ bản", "Họ nguyên hàm và các công thức cơ bản", ["11", "∫", "dx"], [
      ["Nguyên hàm của f(x) = 2x là gì?", "x² + C", ["2x² + C", "x + C", "2 + C"], "∫2x dx = 2·x²/2 + C = x² + C."],
      ["∫x³ dx bằng gì?", "x⁴/4 + C", ["3x² + C", "x⁴ + C", "4x³ + C"], "∫x^n dx = x^(n+1)/(n+1) + C nên ∫x³ dx = x⁴/4 + C."],
      ["Vì sao họ nguyên hàm có hằng số C?", "Vì đạo hàm của hằng số bằng 0", ["Vì tích phân luôn dương", "Vì C là biến số", "Vì công thức yêu cầu"], "Nhiều hàm chỉ khác nhau ở hằng số có cùng đạo hàm, nên họ nguyên hàm gồm F(x) + C."],
      ["Nguyên hàm của e^x là gì?", "e^x + C", ["x·e^x + C", "e^(x+1) + C", "ln x + C"], "∫e^x dx = e^x + C."],
      ["Đạo hàm của F(x) = x² + 5 là gì?", "2x", ["x²", "2x + 5", "5"], "F'(x) = 2x; hằng số 5 có đạo hàm bằng 0."],
    ]),
    createStarterTopic("grade-11-complex-numbers", "Lớp 11 · Số phức và phép toán", "Dạng a+bi, môđun và các phép toán", ["11", "i", "ℂ"], [
      ["i² bằng bao nhiêu?", "−1", ["1", "0", "i"], "Theo định nghĩa đơn vị ảo, i² = −1."],
      ["Môđun của số phức z = 3 + 4i là bao nhiêu?", "5", ["7", "25", "12"], "|z| = √(3² + 4²) = √25 = 5."],
      ["Số phức liên hợp của 2 − 5i là gì?", "2 + 5i", ["−2 + 5i", "2 − 5i", "−2 − 5i"], "Số phức liên hợp đổi dấu phần ảo: z̄ = 2 + 5i."],
      ["(1 + 2i) + (3 − i) bằng bao nhiêu?", "4 + i", ["4 + 3i", "2 + i", "4 − i"], "Cộng phần thực với phần thực, phần ảo với phần ảo: (1+3) + (2−1)i = 4 + i."],
      ["Nghiệm của phương trình x² + 9 = 0 trên tập số phức là gì?", "x = ±3i", ["x = ±3", "Vô nghiệm", "x = 9i"], "x² = −9 nên x = ±3i."],
    ]),
  ],
  science: [
    createStarterTopic("grade-11-magnetism", "Lớp 11 · Từ trường và lực từ", "Nam châm, đường sức từ và ứng dụng", ["11", "🧲", "🧭"], [
      ["Đường sức từ đi ra từ cực nào của nam châm?", "Cực Bắc", ["Cực Nam", "Cả hai cực", "Không cực nào"], "Đường sức từ là đường cong khép kín đi ra từ cực Bắc, đi vào cực Nam."],
      ["Nơi nào từ trường mạnh nhất quanh nam châm thẳng?", "Gần hai cực", ["Ở giữa thanh", "Xa nam châm", "Mọi nơi như nhau"], "Nơi đường sức từ mau (gần các cực) thì từ trường mạnh."],
      ["Kim la bàn chỉ hướng Bắc – Nam vì sao?", "Do từ trường Trái Đất", ["Do gió thổi", "Do trọng lực", "Do ánh sáng Mặt Trời"], "Trái Đất có từ trường như một nam châm khổng lồ, kim la bàn định hướng theo nó."],
      ["Thiết bị nào hoạt động dựa trên lực từ?", "Động cơ điện", ["Bóng đèn sợi đốt", "Ấm đun nước", "Bàn là"], "Động cơ điện biến điện năng thành cơ năng nhờ lực từ tác dụng lên dòng điện."],
      ["Vật liệu nào bị nam châm hút mạnh?", "Sắt", ["Đồng", "Nhôm", "Nhựa"], "Sắt là vật liệu từ, bị nam châm hút mạnh; đồng và nhôm hầu như không bị hút."],
    ]),
    createStarterTopic("grade-11-organic-chemistry", "Lớp 11 · Hóa hữu cơ cơ bản", "Hiđrocacbon và các nhóm chức", ["11", "⚗", "🧪"], [
      ["Hợp chất hữu cơ là hợp chất của nguyên tố nào?", "Carbon", ["Oxygen", "Nitrogen", "Hydrogen"], "Hợp chất hữu cơ là hợp chất của carbon (trừ CO, CO₂ và muối carbonate)."],
      ["Công thức phân tử chung của ankan là gì?", "CₙH₂ₙ₊₂", ["CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"], "Ankan chỉ có liên kết đơn, công thức chung là CₙH₂ₙ₊₂."],
      ["Metan có công thức phân tử là gì?", "CH₄", ["C₂H₆", "CH₂", "CO₂"], "Metan là ankan đơn giản nhất với công thức CH₄."],
      ["Nhóm chức −OH đặc trưng cho loại hợp chất nào?", "Alcohol", ["Acid carboxylic", "Aldehyde", "Ester"], "Nhóm −OH là nhóm chức đặc trưng của alcohol."],
      ["Chất nào sau đây là hiđrocacbon?", "C₂H₄", ["C₂H₅OH", "CH₃COOH", "CO₂"], "Hiđrocacbon chỉ gồm C và H; các chất còn lại đều chứa oxygen."],
    ]),
    createStarterTopic("grade-11-human-nervous", "Lớp 11 · Hệ thần kinh", "Nơron, não bộ và cung phản xạ", ["11", "🧠", "⚡"], [
      ["Đơn vị cấu tạo của hệ thần kinh là gì?", "Nơron", ["Tế bào cơ", "Hồng cầu", "Tế bào xương"], "Nơron là đơn vị cấu tạo và chức năng của hệ thần kinh."],
      ["Hệ thần kinh trung ương gồm những bộ phận nào?", "Não và tủy sống", ["Dây thần kinh và hạch", "Não và dây thần kinh", "Tủy sống và cơ"], "Hệ thần kinh trung ương gồm não và tủy sống."],
      ["Phản xạ rụt tay khi chạm vật nóng do bộ phận nào xử lí chủ yếu?", "Tủy sống", ["Đại não", "Tiểu não", "Dây thần kinh thị giác"], "Phản xạ diễn ra qua cung phản xạ, tủy sống xử lí mà não chưa kịp tham gia."],
      ["Xung thần kinh truyền theo chiều nào trên nơron?", "Một chiều", ["Hai chiều", "Ngẫu nhiên", "Không truyền"], "Xung thần kinh truyền theo một chiều, từ sợi nhánh qua thân đến sợi trục."],
      ["Bộ phận nào giữ thăng bằng cho cơ thể?", "Tiểu não", ["Đại não", "Tủy sống", "Hành não"], "Tiểu não phối hợp vận động và giữ thăng bằng cơ thể."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-11-novel-analysis", "Lớp 11 · Tiểu thuyết", "Cốt truyện, nhân vật và điểm nhìn", ["11", "📖", "✒"], [
      ["Khi phân tích tiểu thuyết cần chú ý những yếu tố nào?", "Tình huống truyện, nhân vật, điểm nhìn trần thuật", ["Số trang sách", "Giá bìa", "Năm tái bản"], "Phân tích tiểu thuyết chú ý tình huống truyện, tính cách nhân vật và điểm nhìn trần thuật."],
      ["“Tắt đèn” của Ngô Tất Tố khắc họa nhân vật nào?", "Chị Dậu", ["Chí Phèo", "Xuân Tóc Đỏ", "Lão Hạc"], "“Tắt đèn” khắc họa bi kịch người nông dân qua nhân vật chị Dậu."],
      ["Tính cách nhân vật tiểu thuyết được thể hiện qua đâu?", "Hành động, lời nói, nội tâm", ["Lời giới thiệu sách", "Ảnh bìa", "Lời tựa"], "Tính cách nhân vật bộc lộ qua hành động, lời nói và diễn biến nội tâm."],
      ["Điểm nhìn trần thuật là gì?", "Vị trí người kể quan sát và kể câu chuyện", ["Nơi in sách", "Giá bán sách", "Số chương"], "Điểm nhìn là vị trí người kể quan sát, ảnh hưởng đến cách câu chuyện được kể."],
      ["Chủ đề của tác phẩm thường được gửi gắm qua đâu?", "Toàn bộ tác phẩm", ["Nhan đề", "Một câu văn", "Lời bạt"], "Chủ đề, tư tưởng được gửi gắm qua toàn bộ tác phẩm chứ không chỉ một chi tiết."],
    ]),
    createStarterTopic("grade-11-satire", "Lớp 11 · Văn học trào phúng", "Nghệ thuật châm biếm trong văn học", ["11", "🎭", "😏"], [
      ["Trào phúng khác với hài hước thuần túy ở điểm nào?", "Mang thái độ phê phán rõ rệt", ["Không gây cười", "Không có nhân vật", "Luôn bi thảm"], "Trào phúng dùng tiếng cười để phê phán thói hư tật xấu."],
      ["Thủ pháp nào thường được dùng trong văn trào phúng?", "Phóng đại, giễu nhại", ["Miêu tả chân thực", "Kể lể dài dòng", "Tránh né vấn đề"], "Trào phúng dùng phóng đại, giễu nhại, nghịch lí để châm biếm."],
      ["“Số đỏ” của Vũ Trọng Phụng trào phúng đối tượng nào?", "Xã hội thượng lưu giả dối", ["Người nông dân", "Công nhân", "Học sinh"], "“Số đỏ” châm biếm xã hội thượng lưu giả dối qua nhân vật Xuân Tóc Đỏ."],
      ["Chi tiết đám ma cụ cố Hồng trong “Số đỏ” có ý nghĩa gì?", "Đám tang biến thành dịp khoe mẽ", ["Đám tang rất trang nghiêm", "Mọi người đều đau buồn", "Không có ý nghĩa"], "Đám ma biến thành dịp khoe mẽ, châm biếm thói giả dối của giới thượng lưu."],
      ["Đọc văn trào phúng cần nhận ra điều gì?", "Đối tượng bị châm biếm và thông điệp", ["Tên tác giả", "Số trang sách", "Năm xuất bản"], "Cần nhận ra đối tượng bị châm biếm và thông điệp phía sau tiếng cười."],
    ]),
    createStarterTopic("grade-11-memoir-writing", "Lớp 11 · Viết hồi kí", "Ghi chép chân thực về người thật việc thật", ["11", "📝", "📜"], [
      ["Hồi kí khác tự truyện ở điểm nào?", "Hồi kí có thể chỉ tập trung một giai đoạn, sự kiện", ["Hồi kí viết về người khác", "Hồi kí là hư cấu", "Tự truyện ngắn hơn"], "Hồi kí có thể chỉ tập trung vào một giai đoạn hay sự kiện đáng nhớ."],
      ["Hồi kí thường được kể ở ngôi nào?", "Ngôi thứ nhất", ["Ngôi thứ ba", "Ngôi thứ hai", "Không có ngôi"], "Hồi kí thường kể ở ngôi thứ nhất, từ góc nhìn của người trong cuộc."],
      ["Giá trị cốt lõi của hồi kí là gì?", "Tính chân thực và góc nhìn riêng", ["Cốt truyện gay cấn", "Nhân vật hư cấu", "Ngôn ngữ hoa mĩ"], "Giá trị của hồi kí nằm ở tính chân thực và góc nhìn riêng của người trong cuộc."],
      ["“Những ngày thơ ấu” của Nguyên Hồng thuộc thể loại nào?", "Hồi kí", ["Tiểu thuyết", "Thơ", "Kịch"], "“Những ngày thơ ấu” là hồi kí về tuổi thơ cay đắng của tác giả."],
      ["Khi viết hồi kí cần chú ý điều gì?", "Kể trung thực, bộc lộ cảm xúc chân thành", ["Bịa thêm cho hấp dẫn", "Viết thật dài", "Tránh bộc lộ cảm xúc"], "Cần chọn sự việc tiêu biểu, kể trung thực và bộc lộ cảm xúc chân thành."],
    ]),
  ],
  english: [
    createStarterTopic("grade-11-participle-clauses", "Lớp 11 · Mệnh đề phân từ", "Rút gọn mệnh đề bằng V-ing và V3", ["11", "ABC", "📝"], [
      ["Rút gọn: The boy who is standing there is my brother.", "The boy standing there is my brother.", ["The boy stands there is my brother.", "The boy stood there is my brother.", "The boy to stand there is my brother."], "Mệnh đề quan hệ mang nghĩa chủ động rút gọn bằng V-ing."],
      ["Rút gọn: The road which was built last year is wide.", "The road built last year is wide.", ["The road building last year is wide.", "The road builds last year is wide.", "The road to build last year is wide."], "Mệnh đề quan hệ mang nghĩa bị động rút gọn bằng V3."],
      ["Trong câu “Having finished homework, she went out”, cụm “having finished” nhấn mạnh điều gì?", "Hành động xảy ra trước", ["Hành động đang diễn ra", "Hành động sẽ xảy ra", "Hành động bị động"], "Dạng hoàn thành having + V3 nhấn mạnh hành động xảy ra trước hành động chính."],
      ["Câu nào mắc lỗi treo phân từ?", "Walking home, the rain started.", ["Walking home, I got wet.", "Tired, she went to bed.", "Built in 1900, the house is old."], "Chủ ngữ “the rain” không thể thực hiện hành động “walking home” — đây là lỗi treo phân từ."],
      ["V-ing trong mệnh đề phân từ diễn tả nghĩa gì?", "Chủ động", ["Bị động", "Hoàn thành", "Tương lai"], "V-ing diễn tả nghĩa chủ động; V3 diễn tả nghĩa bị động."],
    ]),
    createStarterTopic("grade-11-inversion-emphasis", "Lớp 11 · Đảo ngữ nhấn mạnh", "Nhấn mạnh với Never, Not only, Hardly", ["11", "ABC", "🔄"], [
      ["Viết lại dùng đảo ngữ: I have never seen such a beautiful view.", "Never have I seen such a beautiful view.", ["Never I have seen such a beautiful view.", "Never have seen I such a beautiful view.", "I never have seen such a beautiful view."], "Sau Never đứng đầu câu, đảo trợ động từ ra trước chủ ngữ."],
      ["Điền dạng đúng: No sooner ___ than it started to rain.", "had she arrived", ["she had arrived", "she arrives", "did she arrived"], "Cấu trúc cố định: No sooner + had + S + V3 + than..."],
      ["Điền từ: Not only did he sing ___ he also danced.", "but", ["and", "or", "so"], "Cấu trúc cố định: Not only... but also..."],
      ["Viết lại dùng đảo ngữ: If I had known the truth, I would have helped.", "Had I known the truth, I would have helped.", ["If had I known the truth, I would have helped.", "Had known I the truth, I would have helped.", "I had known the truth, I would have helped."], "Câu điều kiện loại 3 đảo “had” ra trước chủ ngữ và bỏ “if”."],
      ["Đảo ngữ thường được dùng trong văn phong nào?", "Văn viết trang trọng", ["Tin nhắn với bạn bè", "Lời nói đùa", "Ghi chú nhanh"], "Đảo ngữ tạo sắc thái trang trọng, thường gặp trong văn viết."],
    ]),
    createStarterTopic("grade-11-collocations", "Lớp 11 · Cụm từ cố định", "Kết hợp từ tự nhiên như người bản ngữ", ["11", "ABC", "🧩"], [
      ["Cụm từ nào đúng?", "make a decision", ["do a decision", "take a decision making", "have a decision to do"], "Người bản ngữ nói “make a decision”, không dùng “do” trong cụm này."],
      ["Điền từ: pay ___ to", "attention", ["mind", "care", "look"], "Cụm cố định: pay attention to (chú ý tới điều gì)."],
      ["Động từ nào kết hợp với “photo”?", "take", ["make", "do", "have"], "Take a photo là collocation chuẩn của người bản ngữ."],
      ["“Succeed ___” đi với giới từ nào?", "in", ["on", "at", "for"], "Cụm cố định: succeed in (thành công trong lĩnh vực nào đó)."],
      ["Vì sao nên học collocation theo cụm?", "Giúp nói viết tự nhiên, tránh lỗi dịch từng từ", ["Để thuộc nhiều từ đơn lẻ", "Để làm bài trắc nghiệm", "Không mang lại lợi ích"], "Học theo cụm giúp diễn đạt tự nhiên như người bản ngữ."],
    ]),
  ],
  history: [
    createStarterTopic("grade-11-wwi-aftermath", "Lớp 11 · Sau Thế chiến I", "Hòa ước Versailles và trật tự thế giới mới", ["11", "🕊", "📜"], [
      ["Thế chiến I kết thúc năm nào?", "1918", ["1914", "1919", "1939"], "Thế chiến I (1914–1918) kết thúc năm 1918 với thất bại của phe Liên minh."],
      ["Hòa ước Versailles (1919) áp đặt điều khoản nặng nề lên nước nào?", "Đức", ["Pháp", "Anh", "Nga"], "Hòa ước Versailles áp đặt điều khoản nặng nề lên Đức, gieo mầm bất mãn."],
      ["Hội Quốc Liên ra đời nhằm mục đích gì?", "Gìn giữ hòa bình thế giới", ["Phát động chiến tranh", "Buôn bán vũ khí", "Chia thuộc địa"], "Hội Quốc Liên ra đời nhằm gìn giữ hòa bình nhưng hoạt động thiếu hiệu quả."],
      ["Vì sao Hội Quốc Liên hoạt động thiếu hiệu quả?", "Mỹ không tham gia", ["Quá nhiều thành viên", "Thiếu kinh phí", "Không có trụ sở"], "Mỹ không tham gia khiến Hội Quốc Liên thiếu sức mạnh thực thi."],
      ["Một hậu quả lớn của Thế chiến I là gì?", "Hàng chục triệu người chết, kinh tế châu Âu suy sụp", ["Dân số tăng nhanh", "Kinh tế phát triển mạnh", "Hòa bình vĩnh viễn"], "Chiến tranh để lại hàng chục triệu người chết và kinh tế châu Âu suy sụp."],
    ]),
    createStarterTopic("grade-11-vietnam-1930-1945", "Lớp 11 · Việt Nam 1930–1945", "Từ thành lập Đảng đến Cách mạng tháng Tám", ["11", "🇻🇳", "⭐"], [
      ["Đảng Cộng sản Việt Nam được thành lập năm nào?", "1930", ["1925", "1935", "1945"], "Năm 1930, Đảng Cộng sản Việt Nam ra đời."],
      ["Phong trào Xô viết Nghệ Tĩnh diễn ra trong thời gian nào?", "1930–1931", ["1936–1939", "1939–1945", "1945–1946"], "Phong trào Xô viết Nghệ Tĩnh (1930–1931) do Đảng lãnh đạo."],
      ["Mặt trận Việt Minh được thành lập khi nào?", "Tháng 5/1941", ["Tháng 8/1945", "Năm 1930", "Năm 1954"], "Tháng 5/1941, Mặt trận Việt Minh được thành lập."],
      ["Tổng khởi nghĩa tháng Tám thắng lợi năm nào?", "1945", ["1930", "1954", "1975"], "Tháng 8/1945, chớp thời cơ Nhật đầu hàng, Tổng khởi nghĩa thắng lợi."],
      ["Ngày 2/9/1945 diễn ra sự kiện trọng đại nào?", "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập", ["Thành lập Đảng", "Giải phóng miền Nam", "Kí hiệp định Genève"], "Ngày 2/9/1945, Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa."],
    ]),
    createStarterTopic("grade-11-cold-war", "Lớp 11 · Chiến tranh lạnh", "Đối đầu Xô – Mỹ và thế giới hai cực", ["11", "🌍", "⚔"], [
      ["Chiến tranh lạnh diễn ra trong khoảng thời gian nào?", "1947–1991", ["1914–1918", "1939–1945", "1991–2000"], "Chiến tranh lạnh (1947–1991) là cuộc đối đầu giữa Mỹ và Liên Xô."],
      ["Khối quân sự của phe do Mỹ đứng đầu là gì?", "NATO", ["Warszawa", "SEATO", "CENTO"], "NATO (1949) là khối quân sự của phe Mỹ; khối Warszawa (1955) của phe Liên Xô."],
      ["Cuộc khủng hoảng nào năm 1962 suýt gây chiến tranh hạt nhân?", "Khủng hoảng tên lửa Cuba", ["Khủng hoảng Berlin", "Chiến tranh Triều Tiên", "Khủng hoảng Suez"], "Khủng hoảng tên lửa Cuba năm 1962 là đỉnh điểm căng thẳng của Chiến tranh lạnh."],
      ["Chiến tranh lạnh kết thúc khi nào?", "Liên Xô tan rã năm 1991", ["Năm 1945", "Năm 1975", "Năm 2001"], "Chiến tranh lạnh kết thúc khi Liên Xô tan rã năm 1991."],
      ["Đặc điểm nổi bật của Chiến tranh lạnh là gì?", "Đối đầu căng thẳng nhưng không chiến tranh trực tiếp", ["Hai bên đánh nhau trực tiếp", "Chỉ cạnh tranh kinh tế", "Hợp tác toàn diện"], "Hai siêu cường đối đầu mọi mặt nhưng tránh chiến tranh trực tiếp với nhau."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-11-eu-economy", "Lớp 11 · Kinh tế Liên minh châu Âu", "Thị trường chung và đồng euro", ["11", "🇪🇺", "💶"], [
      ["EU hiện có bao nhiêu quốc gia thành viên?", "27", ["28", "25", "30"], "EU có 27 thành viên sau khi Anh rời đi năm 2020."],
      ["Thị trường chung EU cho phép tự do lưu chuyển những yếu tố nào?", "Hàng hóa, dịch vụ, vốn và lao động", ["Chỉ hàng hóa", "Chỉ vốn", "Không yếu tố nào"], "Thị trường chung cho phép tự do lưu chuyển cả bốn yếu tố."],
      ["Đồng tiền chung của đa số nước EU là gì?", "Đồng euro", ["Đồng đô la", "Đồng bảng Anh", "Đồng yên"], "Đồng euro là tiền tệ chung của đa số thành viên EU."],
      ["EU mạnh về những lĩnh vực kinh tế nào?", "Công nghiệp công nghệ cao, dịch vụ tài chính", ["Khai thác dầu mỏ", "Đánh bắt cá", "Khai khoáng"], "EU mạnh về công nghiệp công nghệ cao, dịch vụ tài chính và thương mại."],
      ["Chính sách nông nghiệp chung của EU nhằm mục đích gì?", "Hỗ trợ nông dân", ["Cấm sản xuất nông nghiệp", "Xuất khẩu vũ khí", "Tăng thuế nông sản"], "Chính sách nông nghiệp chung hỗ trợ nông dân các nước thành viên."],
    ]),
    createStarterTopic("grade-11-china-economy", "Lớp 11 · Kinh tế Trung Quốc", "Cải cách mở cửa và công xưởng thế giới", ["11", "🇨🇳", "🏭"], [
      ["Trung Quốc bắt đầu cải cách mở cửa năm nào?", "1978", ["1949", "1997", "2001"], "Từ cải cách mở cửa năm 1978, kinh tế Trung Quốc tăng trưởng nhanh nhiều thập kỉ."],
      ["Vì sao Trung Quốc được gọi là “công xưởng thế giới”?", "Lao động dồi dào, thu hút đầu tư nước ngoài", ["Tài nguyên vô hạn", "Dân số ít", "Không có công nghiệp"], "Lực lượng lao động dồi dào giúp Trung Quốc thu hút đầu tư, trở thành công xưởng thế giới."],
      ["Hiện nay Trung Quốc vươn lên trong những lĩnh vực nào?", "Công nghệ cao: 5G, xe điện", ["Khai thác than", "Đánh bắt cá", "Nông nghiệp lạc hậu"], "Trung Quốc vươn lên trong 5G, xe điện và thương mại điện tử."],
      ["Sáng kiến Vành đai và Con đường nhằm mục đích gì?", "Mở rộng ảnh hưởng kinh tế toàn cầu", ["Bảo vệ môi trường", "Hạn chế thương mại", "Xây tường biên giới"], "Sáng kiến này mở rộng ảnh hưởng kinh tế của Trung Quốc trên toàn cầu."],
      ["Thâm Quyến là ví dụ cho điều gì?", "Từ làng chài thành trung tâm công nghệ", ["Từ thành phố thành làng quê", "Không phát triển", "Chỉ làm nông nghiệp"], "Thâm Quyến từ làng chài trở thành trung tâm công nghệ chỉ trong vài thập kỉ."],
    ]),
    createStarterTopic("grade-11-middle-east", "Lớp 11 · Khu vực Trung Đông", "Dầu mỏ, vị trí chiến lược và OPEC", ["11", "🛢", "🗺"], [
      ["Trung Đông có trữ lượng lớn nhất thế giới về tài nguyên nào?", "Dầu mỏ", ["Than đá", "Vàng", "Kim cương"], "Trung Đông có trữ lượng dầu mỏ lớn nhất thế giới."],
      ["OPEC là tổ chức gì?", "Tổ chức các nước xuất khẩu dầu mỏ", ["Tổ chức y tế", "Tổ chức giáo dục", "Tổ chức du lịch"], "OPEC là tổ chức các nước xuất khẩu dầu mỏ, chi phối thị trường năng lượng."],
      ["Kênh đào Suez có ý nghĩa gì?", "Rút ngắn hải trình Á – Âu", ["Nối hai đại dương ở châu Mỹ", "Chỉ phục vụ du lịch", "Không có ý nghĩa"], "Kênh đào Suez rút ngắn hải trình Á – Âu, có ý nghĩa chiến lược rất lớn."],
      ["Kinh tế nhiều nước Trung Đông phụ thuộc chủ yếu vào gì?", "Xuất khẩu dầu mỏ", ["Du lịch", "Công nghệ", "Nông nghiệp"], "Kinh tế nhiều nước phụ thuộc vào xuất khẩu dầu mỏ, đang đa dạng hóa sang du lịch, tài chính."],
      ["Nguyên nhân chính gây bất ổn ở Trung Đông là gì?", "Xung đột sắc tộc, tôn giáo kéo dài", ["Thiên tai", "Dân số quá ít", "Thiếu nước ngọt"], "Xung đột sắc tộc, tôn giáo kéo dài gây bất ổn cho khu vực."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-11-recursion", "Lớp 11 · Đệ quy trong lập trình", "Hàm gọi lại chính nó và điều kiện dừng", ["11", "🔁", "💻"], [
      ["Đệ quy là gì?", "Hàm gọi lại chính nó", ["Vòng lặp for", "Hàm không có tham số", "Biến toàn cục"], "Đệ quy là kĩ thuật trong đó hàm gọi lại chính nó để giải bài toán nhỏ hơn cùng dạng."],
      ["Điều gì bắt buộc phải có trong hàm đệ quy?", "Điều kiện dừng", ["Biến toàn cục", "Vòng lặp", "Mảng"], "Hàm đệ quy phải có điều kiện dừng, nếu không sẽ lặp vô hạn gây tràn ngăn xếp."],
      ["4! bằng bao nhiêu?", "24", ["12", "16", "10"], "4! = 4 × 3 × 2 × 1 = 24."],
      ["0! bằng bao nhiêu?", "1", ["0", "Không xác định", "Vô hạn"], "Theo quy ước 0! = 1; đây là điều kiện dừng của đệ quy tính giai thừa."],
      ["Nhược điểm của đệ quy so với vòng lặp là gì?", "Có thể tốn bộ nhớ hơn", ["Code luôn dài hơn", "Chạy luôn nhanh hơn", "Không có nhược điểm"], "Đệ quy giúp code ngắn gọn nhưng có thể tốn bộ nhớ hơn vòng lặp."],
    ]),
    createStarterTopic("grade-11-sql-basics", "Lớp 11 · Truy vấn SQL", "SELECT, WHERE và JOIN cơ bản", ["11", "🗄", "🔍"], [
      ["Mệnh đề nào trong SQL dùng để lọc bản ghi?", "WHERE", ["SELECT", "FROM", "ORDER"], "WHERE dùng để lọc bản ghi theo điều kiện."],
      ["Câu lệnh nào lấy tên và điểm của học sinh từ 8 điểm trở lên, sắp xếp giảm dần?", "SELECT name, score FROM students WHERE score >= 8 ORDER BY score DESC", ["SELECT * FROM students", "DELETE FROM students", "UPDATE students SET score = 8"], "Cần SELECT đúng cột, WHERE lọc điều kiện và ORDER BY ... DESC để sắp giảm dần."],
      ["ORDER BY trong SQL dùng để làm gì?", "Sắp xếp kết quả truy vấn", ["Lọc bản ghi", "Xóa bảng", "Tạo bảng mới"], "ORDER BY dùng để sắp xếp kết quả truy vấn."],
      ["JOIN trong SQL dùng để làm gì?", "Kết hợp dữ liệu từ nhiều bảng", ["Xóa dữ liệu", "Tạo cơ sở dữ liệu", "Sao lưu dữ liệu"], "JOIN kết hợp dữ liệu từ nhiều bảng thông qua khóa liên kết."],
      ["Câu lệnh SELECT COUNT(*) FROM students WHERE class = '11A1'; cho kết quả gì?", "Số học sinh của lớp 11A1", ["Danh sách tên học sinh", "Điểm trung bình", "Xóa dữ liệu lớp 11A1"], "COUNT(*) đếm số bản ghi thỏa mãn điều kiện WHERE."],
    ]),
    createStarterTopic("grade-11-networks", "Lớp 11 · Mạng máy tính", "LAN, WAN và mô hình client-server", ["11", "🌐", "🔗"], [
      ["LAN là loại mạng nào?", "Mạng cục bộ trong một tòa nhà hay trường học", ["Mạng toàn cầu", "Mạng vệ tinh", "Mạng điện thoại"], "LAN là mạng cục bộ; WAN phủ phạm vi rộng, điển hình là Internet."],
      ["Trong mô hình client – server, máy chủ có vai trò gì?", "Cung cấp dịch vụ", ["Gửi yêu cầu dịch vụ", "Ngắt kết nối", "Tắt nguồn"], "Máy chủ cung cấp dịch vụ, máy khách gửi yêu cầu tới máy chủ."],
      ["Địa chỉ IP dùng để làm gì?", "Định danh thiết bị trên mạng", ["Lưu trữ dữ liệu", "Tăng tốc độ mạng", "Chặn virus"], "Địa chỉ IP định danh mỗi thiết bị trên mạng."],
      ["Giao thức chuẩn của Internet là gì?", "TCP/IP", ["HTTP", "FTP", "SMTP"], "TCP/IP là chuẩn giao tiếp của Internet."],
      ["Biện pháp nào giúp bảo mật mạng?", "Tường lửa và mã hóa", ["Tắt máy tính", "Không dùng mạng", "Chia sẻ mật khẩu"], "Bảo mật mạng gồm tường lửa, mã hóa và phân quyền truy cập."],
    ]),
  ],
  technology: [
    createStarterTopic("grade-11-renewable-tech", "Lớp 11 · Công nghệ năng lượng tái tạo", "Pin mặt trời, tuabin gió và lưu trữ", ["11", "☀", "🌬"], [
      ["Pin mặt trời chuyển dạng năng lượng nào thành điện năng?", "Quang năng", ["Nhiệt năng", "Hóa năng", "Cơ năng"], "Pin mặt trời chuyển quang năng thành điện năng."],
      ["Thách thức lớn của năng lượng tái tạo là gì?", "Phụ thuộc thời tiết, cần hệ thống lưu trữ", ["Giá quá rẻ", "Không bao giờ cạn", "Không cần bảo trì"], "Hiệu suất và tính phụ thuộc thời tiết là thách thức; pin lưu trữ giúp khắc phục."],
      ["Tuabin gió chuyển dạng năng lượng nào thành điện?", "Động năng của gió", ["Quang năng", "Hóa năng", "Nhiệt năng"], "Tuabin gió chuyển động năng của gió thành điện năng."],
      ["Việt Nam có tiềm năng lớn về những loại năng lượng tái tạo nào?", "Điện mặt trời và điện gió", ["Địa nhiệt", "Thủy triều", "Năng lượng sóng"], "Việt Nam có tiềm năng lớn về điện mặt trời và điện gió."],
      ["Ưu điểm nổi bật của năng lượng tái tạo là gì?", "Không cạn kiệt, ít phát thải", ["Rẻ hơn mọi nguồn khác", "Ổn định tuyệt đối", "Không cần đầu tư"], "Năng lượng tái tạo không cạn kiệt và ít phát thải khí nhà kính."],
    ]),
    createStarterTopic("grade-11-robotics-intro", "Lớp 11 · Robot cơ bản", "Cảm biến, điều khiển và chấp hành", ["11", "🤖", "⚙"], [
      ["Robot gồm ba bộ phận chính nào?", "Cảm biến, bộ điều khiển, cơ cấu chấp hành", ["Pin, dây điện, vỏ máy", "Màn hình, loa, micro", "Bánh xe, tay, chân"], "Ba bộ phận: cảm biến thu nhận thông tin, bộ điều khiển ra quyết định, cơ cấu chấp hành hành động."],
      ["Cảm biến của robot có chức năng gì?", "Thu nhận thông tin môi trường", ["Thực hiện hành động", "Lưu trữ dữ liệu", "Phát nhạc"], "Cảm biến thu nhận thông tin môi trường như khoảng cách hay ánh sáng."],
      ["Robot hút bụi tránh được vật cản nhờ bộ phận nào?", "Cảm biến", ["Người điều khiển", "Sự may mắn", "Dây dẫn"], "Robot hút bụi dùng cảm biến phát hiện và tránh vật cản khi di chuyển."],
      ["Robot hoạt động dựa trên cơ sở nào?", "Chương trình được lập trình", ["Cảm xúc", "Sự ngẫu nhiên", "Ý muốn riêng"], "Robot hoạt động theo chương trình được lập trình sẵn hoặc trí tuệ nhân tạo."],
      ["Ứng dụng nào sau đây của robot trong y tế?", "Phẫu thuật", ["Nấu ăn", "Dạy học", "Chơi game"], "Robot được dùng trong phẫu thuật nhờ độ chính xác cao."],
    ]),
    createStarterTopic("grade-11-3d-printing", "Lớp 11 · Công nghệ in 3D", "Nguyên lí đắp lớp và ứng dụng", ["11", "🖨", "📦"], [
      ["Nguyên lí cơ bản của in 3D là gì?", "Đắp từng lớp vật liệu theo mô hình số", ["Cắt gọt khối vật liệu", "Đúc trong khuôn", "Nung chảy kim loại"], "In 3D đắp từng lớp vật liệu theo mô hình số, ngược với gia công cắt gọt."],
      ["Vật liệu phổ biến trong in 3D là gì?", "Nhựa PLA, ABS", ["Gỗ tự nhiên", "Vải", "Giấy"], "Vật liệu phổ biến là nhựa PLA, ABS; kim loại dùng cho công nghiệp."],
      ["Ưu điểm nổi bật của in 3D là gì?", "Tạo hình phức tạp, ít phế liệu", ["Sản xuất hàng loạt rất nhanh", "Rẻ hơn mọi phương pháp", "Không cần thiết kế"], "In 3D tạo được hình phức tạp, sản xuất đơn chiếc nhanh và ít phế liệu."],
      ["Ứng dụng của in 3D trong y tế là gì?", "In mô hình xương phục vụ phẫu thuật", ["Sản xuất thuốc uống", "Khám bệnh", "Tiêm chủng"], "Bác sĩ in mô hình 3D xương của bệnh nhân để lập kế hoạch phẫu thuật."],
      ["Hạn chế của in 3D là gì?", "Chậm khi sản xuất hàng loạt", ["Không tạo được hình phức tạp", "Tốn nhiều phế liệu", "Chỉ in được trên giấy"], "In 3D chậm với sản xuất hàng loạt và độ bền vật liệu còn hạn chế."],
    ]),
  ],
  civics: [
    createStarterTopic("grade-11-civil-contracts", "Lớp 11 · Hợp đồng dân sự", "Điều kiện hiệu lực và trách nhiệm", ["11", "📄", "✍"], [
      ["Hợp đồng dân sự là gì?", "Sự thỏa thuận về quyền và nghĩa vụ giữa các bên", ["Mệnh lệnh của tòa án", "Giấy khen", "Đơn xin việc"], "Hợp đồng dân sự là sự thỏa thuận xác lập, thay đổi hoặc chấm dứt quyền và nghĩa vụ."],
      ["Điều kiện nào để hợp đồng dân sự có hiệu lực?", "Tự nguyện, nội dung không vi phạm pháp luật", ["Bị ép buộc", "Nội dung trái luật", "Chữ kí giả mạo"], "Cần: chủ thể có năng lực pháp luật, hoàn toàn tự nguyện, nội dung hợp pháp, hình thức phù hợp."],
      ["Bên vi phạm hợp đồng phải làm gì?", "Bồi thường thiệt hại", ["Không phải làm gì", "Bỏ trốn", "Đổ lỗi cho bên kia"], "Bên vi phạm hợp đồng phải bồi thường thiệt hại cho bên kia."],
      ["Trước khi kí hợp đồng nên làm gì?", "Đọc kĩ các điều khoản", ["Kí ngay lập tức", "Nhờ người khác kí hộ", "Không cần đọc"], "Đọc kĩ các điều khoản trước khi kí giúp tránh tranh chấp về sau."],
      ["Hợp đồng mua bán xe máy nên ghi rõ những gì?", "Giá, thời hạn giao xe, bảo hành", ["Màu sắc yêu thích", "Biển số đẹp", "Quê quán người bán"], "Hợp đồng mua bán cần ghi rõ giá, thời hạn giao xe và điều kiện bảo hành."],
    ]),
    createStarterTopic("grade-11-intellectual-property", "Lớp 11 · Sở hữu trí tuệ", "Bản quyền, nhãn hiệu và sáng chế", ["11", "©", "💡"], [
      ["Bản quyền bảo hộ đối tượng nào?", "Tác phẩm văn học, nghệ thuật, phần mềm", ["Ý tưởng chung chung", "Tên riêng của người", "Món ăn"], "Bản quyền bảo hộ tác phẩm văn học, nghệ thuật và phần mềm máy tính."],
      ["Tải phần mềm crack về dùng là hành vi gì?", "Xâm phạm bản quyền", ["Hoàn toàn hợp pháp", "Được khuyến khích", "Không vi phạm gì"], "Tải phần mềm crack về dùng là hành vi xâm phạm bản quyền."],
      ["Đăng kí bảo hộ sở hữu trí tuệ có tác dụng gì?", "Độc quyền khai thác và xử lí hành vi xâm phạm", ["Được miễn thuế", "Trở nên nổi tiếng", "Không có tác dụng"], "Đăng kí giúp chủ sở hữu độc quyền khai thác và xử lí hành vi xâm phạm."],
      ["Học sinh tôn trọng bản quyền bằng cách nào?", "Không sao chép lậu, trích dẫn nguồn", ["Chia sẻ đề thi lậu", "Tải nhạc lậu", "Photo sách lậu"], "Không sao chép lậu và trích dẫn nguồn khi sử dụng tài liệu của người khác."],
      ["Vi phạm sở hữu trí tuệ có thể bị xử lí thế nào?", "Xử phạt hành chính hoặc truy cứu hình sự", ["Được khen thưởng", "Không bị xử lí", "Được bỏ qua"], "Vi phạm sở hữu trí tuệ có thể bị xử phạt hành chính hoặc truy cứu hình sự."],
    ]),
    createStarterTopic("grade-11-civic-participation", "Lớp 11 · Tham gia xã hội", "Bầu cử, tình nguyện và trách nhiệm công dân", ["11", "🤝", "🗳"], [
      ["Tham gia xã hội gồm những hoạt động nào?", "Bầu cử, tình nguyện, góp ý chính sách", ["Trốn học", "Phá hoại tài sản", "Không quan tâm"], "Tham gia xã hội: bầu cử, hoạt động tình nguyện, góp ý chính sách, bảo vệ môi trường."],
      ["Thanh niên có thể tham gia xã hội qua kênh nào?", "Đoàn, Hội, chiến dịch tình nguyện", ["Hoạt động một mình", "Không có kênh nào", "Bỏ học"], "Thanh niên tham gia qua tổ chức Đoàn, Hội và các chiến dịch tình nguyện."],
      ["Tham gia xã hội mang lại lợi ích gì?", "Kĩ năng, quan hệ và trách nhiệm công dân", ["Mất thời gian vô ích", "Không có lợi ích", "Bị xử phạt"], "Tham gia xã hội giúp rèn kĩ năng, mở rộng quan hệ và thể hiện trách nhiệm công dân."],
      ["Ví dụ nào sau đây là hoạt động tình nguyện của thanh niên?", "Chiến dịch Mùa hè xanh", ["Đi chơi xa", "Nghỉ hè ở nhà", "Xem phim"], "Chiến dịch Mùa hè xanh là hoạt động tình nguyện tiêu biểu của thanh niên."],
      ["Tham gia các hoạt động xã hội cần tuân thủ điều gì?", "Pháp luật và tôn trọng người khác", ["Tùy ý thích", "Bất chấp quy định", "Gây rối"], "Mọi hình thức tham gia xã hội đều cần tuân thủ pháp luật và tôn trọng người khác."],
    ]),
  ],
  "physical-education": [
    createStarterTopic("grade-11-soccer-basics", "Lớp 11 · Bóng đá cơ bản", "Kĩ thuật đá, chuyền và luật việt vị", ["11", "⚽", "🥅"], [
      ["Chuyền bóng ngắn chính xác nên dùng bộ phận nào của bàn chân?", "Lòng trong", ["Mũi chân", "Gót chân", "Đầu gối"], "Chuyền bóng bằng lòng trong cho độ chính xác cao ở cự li gần."],
      ["Luật việt vị được tính tại thời điểm nào?", "Khi đồng đội chuyền bóng cho cầu thủ tấn công đứng sau hậu vệ cuối", ["Khi thủ môn bắt bóng", "Khi đá phạt góc", "Khi bóng ra ngoài biên"], "Việt vị khi cầu thủ tấn công đứng phía sau hậu vệ cuối cùng (trừ thủ môn) lúc đồng đội chuyền bóng."],
      ["Đá bóng mạnh thường dùng bộ phận nào?", "Mu trong", ["Lòng trong", "Gót chân", "Đầu"], "Đá bóng bằng mu trong tạo ra lực mạnh."],
      ["Chơi bóng đá cần những phẩm chất nào?", "Phối hợp đồng đội và fair play", ["Chơi cá nhân", "Phạm lỗi đối phương", "Tranh cãi với trọng tài"], "Bóng đá cần phối hợp đồng đội, tuân thủ luật và tinh thần fair play."],
      ["Trước khi thi đấu bóng đá nên làm gì?", "Khởi động kĩ", ["Ăn thật no", "Đi ngủ", "Không cần chuẩn bị"], "Khởi động kĩ trước trận giúp phòng tránh chấn thương."],
    ]),
    createStarterTopic("grade-11-swimming-strokes", "Lớp 11 · Các kiểu bơi", "Bơi sải, ếch, ngửa, bướm và an toàn", ["11", "🏊", "🌊"], [
      ["Kiểu bơi nào nhanh nhất trong thi đấu?", "Bơi sải", ["Bơi ếch", "Bơi ngửa", "Bơi bướm"], "Bơi sải là kiểu bơi nhanh nhất trong các nội dung thi đấu."],
      ["Kiểu bơi nào có kĩ thuật khó nhất?", "Bơi bướm", ["Bơi ếch", "Bơi ngửa", "Bơi sải"], "Bơi bướm đòi hỏi phối hợp toàn thân nên kĩ thuật khó nhất."],
      ["Bơi ếch phù hợp với mục đích nào?", "Bơi đường dài, tiết kiệm sức", ["Bơi tốc độ", "Lặn sâu", "Nhảy cầu"], "Bơi ếch tiết kiệm sức, phù hợp bơi đường dài."],
      ["Quy tắc an toàn nào quan trọng khi đi bơi?", "Không bơi một mình ở nơi vắng", ["Bơi ngay sau khi ăn no", "Nhảy xuống vùng nước lạ", "Bơi thật xa bờ"], "Không bơi một mình ở nơi vắng và tuân thủ nội quy hồ bơi."],
      ["Trước khi xuống nước nên làm gì?", "Khởi động kĩ", ["Ăn thật no", "Uống nước lạnh", "Chạy nước rút"], "Khởi động kĩ trước khi bơi giúp phòng tránh chuột rút."],
    ]),
    createStarterTopic("grade-11-yoga-stretching", "Lớp 11 · Giãn cơ yoga", "Tư thế, hít thở và thư giãn", ["11", "🧘", "🌿"], [
      ["Giãn cơ yoga kết hợp những yếu tố nào?", "Tư thế, hít thở sâu và thư giãn", ["Chạy nhanh", "Nâng tạ nặng", "Đấm bốc"], "Yoga kết hợp các tư thế với hít thở sâu và thư giãn."],
      ["Nguyên tắc quan trọng khi tập yoga là gì?", "Từ dễ đến khó, không cố quá sức", ["Cố chịu đau", "Tập thật nhanh", "Nhịn thở"], "Thực hiện từ dễ đến khó, giữ tư thế ổn định, hít thở đều, không cố quá sức gây đau."],
      ["Tư thế em bé có tác dụng gì?", "Thư giãn lưng", ["Tăng chiều cao nhanh", "Giảm cân cấp tốc", "Chữa bách bệnh"], "Tư thế em bé giúp thư giãn lưng sau giờ ngồi học lâu."],
      ["Tập yoga đều đặn mang lại lợi ích gì?", "Dẻo dai, giảm căng thẳng, ngủ ngon", ["Mệt mỏi kéo dài", "Đau nhức", "Không có tác dụng"], "Tập đều đặn giúp cải thiện độ dẻo dai, tư thế và giấc ngủ."],
      ["Khi tập yoga nên hít thở thế nào?", "Đều và sâu", ["Nhanh và gấp", "Nhịn thở lâu", "Thở bằng miệng"], "Hít thở đều và sâu là nguyên tắc quan trọng của yoga."],
    ]),
  ],
  music: [
    createStarterTopic("grade-11-vietnamese-instruments", "Lớp 11 · Nhạc cụ dân tộc", "Đàn bầu, đàn tranh, sáo trúc", ["11", "🎶", "🪕"], [
      ["Đàn bầu có đặc điểm gì nổi bật?", "Chỉ có một dây", ["Có 16 dây", "Không có dây", "Có 36 dây"], "Đàn bầu chỉ có một dây nhưng diễn tả được nhiều cung bậc cảm xúc."],
      ["Đàn tranh có bao nhiêu dây?", "16 dây", ["1 dây", "4 dây", "6 dây"], "Đàn tranh có 16 dây."],
      ["Đàn tính gắn với loại hình nghệ thuật nào?", "Hát Then", ["Ca trù", "Quan họ", "Chèo"], "Đàn tính gắn với hát Then của người Tày, Nùng, Thái."],
      ["Cồng chiêng gắn với lễ hội của vùng nào?", "Tây Nguyên", ["Đồng bằng sông Hồng", "Đồng bằng sông Cửu Long", "Đông Bắc"], "Cồng chiêng Tây Nguyên gắn với lễ hội, được UNESCO ghi danh di sản."],
      ["Bảo tồn nhạc cụ dân tộc có ý nghĩa gì?", "Giữ gìn bản sắc văn hóa", ["Không có ý nghĩa", "Tốn kém vô ích", "Lạc hậu"], "Bảo tồn nhạc cụ dân tộc là giữ gìn bản sắc văn hóa Việt Nam."],
    ]),
    createStarterTopic("grade-11-song-structure", "Lớp 11 · Cấu trúc bài hát", "Verse, chorus, bridge trong nhạc pop", ["11", "🎵", "🎤"], [
      ["Phần nào của bài hát thường là cao trào và được lặp lại?", "Chorus (điệp khúc)", ["Verse", "Intro", "Outro"], "Chorus là điệp khúc, lời lặp lại, thường là cao trào của bài hát."],
      ["Verse trong bài hát có đặc điểm gì?", "Kể chuyện, lời thay đổi mỗi lần xuất hiện", ["Lời lặp lại", "Không có lời", "Chỉ có nhạc"], "Verse là đoạn kể chuyện, lời ca thay đổi mỗi lần xuất hiện."],
      ["Bridge trong bài hát có vai trò gì?", "Tạo sự mới lạ, làm đoạn chuyển", ["Mở đầu bài hát", "Kết thúc bài hát", "Lặp lại điệp khúc"], "Bridge là đoạn chuyển, tạo sự mới lạ trước khi trở lại điệp khúc."],
      ["Phần nào của bài hát khán giả thường nhớ nhất và hát theo?", "Điệp khúc", ["Intro", "Verse", "Outro"], "Điệp khúc thường là phần khán giả nhớ nhất và hát theo."],
      ["Hiểu cấu trúc bài hát giúp ích gì?", "Hát đúng, nhớ lời nhanh, sáng tác có bố cục", ["Không giúp ích gì", "Chỉ để đi thi", "Làm khó nhớ hơn"], "Hiểu cấu trúc giúp hát đúng, nhớ lời nhanh và sáng tác có bố cục."],
    ]),
    createStarterTopic("grade-11-film-music", "Lớp 11 · Âm nhạc trong phim", "Vai trò nhạc nền và leitmotif", ["11", "🎬", "🎼"], [
      ["Nhạc phim có vai trò gì?", "Tạo cảm xúc, khắc họa nhân vật, dẫn dắt câu chuyện", ["Gây ồn ào", "Không có vai trò", "Chỉ để lấp chỗ trống"], "Nhạc phim tạo cảm xúc, khắc họa nhân vật và dẫn dắt câu chuyện."],
      ["Leitmotif là gì?", "Mô-típ âm nhạc gắn với nhân vật hoặc ý tưởng", ["Một loại nhạc cụ", "Một ca sĩ", "Một rạp chiếu phim"], "Leitmotif là mô-típ âm nhạc gắn với nhân vật hay ý tưởng, lặp lại để gợi nhớ."],
      ["Nhạc phim có thể tồn tại dưới những dạng nào?", "Ca khúc hoặc nhạc nền không lời", ["Chỉ ca khúc", "Chỉ nhạc không lời", "Không dạng nào"], "Nhạc phim có thể là ca khúc hoặc nhạc nền không lời."],
      ["Khi xem phim nên chú ý gì về phần nhạc?", "Nhạc thay đổi theo diễn biến tâm lí nhân vật", ["Tắt nhạc đi", "Không để ý", "Chỉ nghe lời hát"], "Hãy chú ý cách nhạc nền thay đổi theo diễn biến tâm lí nhân vật."],
      ["Nhiều bản nhạc phim có đặc điểm gì đặc biệt?", "Nổi tiếng độc lập với bộ phim", ["Không ai nhớ đến", "Chỉ nghe một lần", "Không có giá trị"], "Nhiều bản nhạc phim trở nên nổi tiếng độc lập với bộ phim."],
    ]),
  ],
  "visual-arts": [
    createStarterTopic("grade-11-typography", "Lớp 11 · Chữ trong thiết kế", "Phông chữ và thứ bậc thông tin", ["11", "🔤", "✏"], [
      ["Phông chữ serif có đặc điểm gì?", "Có chân, trang trọng, cổ điển", ["Không có chân", "Hiện đại", "Chỉ dùng trên web"], "Phông serif có chân, tạo cảm giác trang trọng và cổ điển."],
      ["Phông sans-serif phù hợp sử dụng ở đâu?", "Màn hình, phong cách hiện đại, dễ đọc", ["Sách cổ", "Văn bản luật", "Thiệp cưới"], "Phông sans-serif không chân, hiện đại và dễ đọc trên màn hình."],
      ["Thứ bậc thông tin trong thiết kế được tạo bằng gì?", "Kích cỡ, độ đậm, màu sắc và vị trí", ["Chỉ màu sắc", "Chỉ kích cỡ", "Sắp xếp ngẫu nhiên"], "Thứ bậc thông tin được tạo bằng kích thước, độ đậm, màu sắc và vị trí."],
      ["Khoảng cách dòng và chữ ảnh hưởng đến điều gì?", "Độ dễ đọc của văn bản", ["Màu sắc", "Loại phông", "Không ảnh hưởng gì"], "Khoảng cách dòng và khoảng cách chữ ảnh hưởng trực tiếp đến độ dễ đọc."],
      ["Tiêu đề báo thường được thiết kế thế nào?", "Chữ đậm, cỡ lớn", ["Chữ nhỏ, mờ nhạt", "Không có tiêu đề", "Chữ nghiêng"], "Tiêu đề báo thường dùng chữ đậm, cỡ lớn để thu hút sự chú ý."],
    ]),
    createStarterTopic("grade-11-packaging-design", "Lớp 11 · Thiết kế bao bì", "Chức năng, thương hiệu và thông tin", ["11", "📦", "🎨"], [
      ["Bao bì có những chức năng nào?", "Bảo vệ, cung cấp thông tin, thu hút người mua", ["Chỉ để trang trí", "Chỉ để đựng", "Không có chức năng"], "Bao bì bảo vệ sản phẩm, cung cấp thông tin và thu hút người mua."],
      ["Thiết kế bao bì thể hiện thương hiệu qua những gì?", "Màu sắc, logo, hình ảnh nhất quán", ["Giá bán rẻ", "Kích thước lớn", "Chữ thật nhỏ"], "Thiết kế thể hiện thương hiệu qua màu sắc, logo và hình ảnh nhất quán."],
      ["Thông tin bắt buộc trên bao bì thực phẩm là gì?", "Tên, thành phần, hạn sử dụng", ["Giá cổ phiếu", "Tiểu sử tác giả", "Truyện cười"], "Bao bì cần ghi: tên sản phẩm, thành phần, hạn sử dụng, hướng dẫn bảo quản."],
      ["Xu hướng bao bì hiện nay là gì?", "Thân thiện với môi trường", ["Dùng nhiều nhựa", "Dùng một lần", "Bỏ bao bì"], "Bao bì thân thiện môi trường (ít nhựa, tái chế được) là xu hướng hiện nay."],
      ["Thiết kế bao bì cần trung thực về điều gì?", "Không gây hiểu lầm về sản phẩm", ["Phóng đại sự thật", "Che giấu thông tin", "Nói sai sự thật"], "Thiết kế đẹp nhưng phải trung thực, không gây hiểu lầm về sản phẩm."],
    ]),
    createStarterTopic("grade-11-mural-art", "Lớp 11 · Tranh tường", "Tranh công cộng và nghệ thuật bích họa", ["11", "🧱", "🖌"], [
      ["Tranh tường có đặc điểm gì?", "Vẽ trực tiếp lên tường, kích thước lớn", ["Vẽ trên giấy nhỏ", "Chỉ vẽ trong nhà", "Không dùng màu"], "Tranh tường vẽ trực tiếp lên tường trong nhà hoặc ngoài trời, kích thước thường lớn."],
      ["Vật liệu nào phù hợp vẽ tranh tường ngoài trời?", "Sơn acrylic bền màu", ["Màu nước", "Bút chì", "Phấn viết bảng"], "Sơn acrylic bền màu được dùng cho tranh tường ngoài trời."],
      ["Tranh tường công cộng thường mang thông điệp gì?", "Văn hóa, môi trường, lịch sử địa phương", ["Quảng cáo sản phẩm", "Chính trị", "Không có thông điệp"], "Tranh tường công cộng thường mang thông điệp văn hóa, môi trường hoặc lịch sử địa phương."],
      ["Làng bích họa nổi tiếng ở Quảng Nam là đâu?", "Tam Thanh", ["Hội An", "Mỹ Sơn", "Cù Lao Chàm"], "Làng bích họa Tam Thanh (Quảng Nam) nổi tiếng với những bức tranh tường rực rỡ."],
      ["Vẽ tranh tường cần thực hiện bước nào trước tiên?", "Phác thảo ý tưởng", ["Vẽ ngay lên tường", "Không cần chuẩn bị", "Thuê người khác vẽ"], "Vẽ tranh tường cần phác thảo ý tưởng, chia lưới phóng to hình và phối hợp nhóm."],
    ]),
  ],
  "national-defense": [
    createStarterTopic("grade-11-border-defense", "Lớp 11 · Bảo vệ biên giới", "Cột mốc và bảo vệ chủ quyền lãnh thổ", ["11", "🗺", "🚩"], [
      ["Biên giới quốc gia gồm những bộ phận nào?", "Trên bộ, trên biển và trên không", ["Chỉ trên bộ", "Chỉ trên biển", "Không có bộ phận"], "Biên giới quốc gia gồm biên giới trên bộ, trên biển và trên không."],
      ["Cột mốc biên giới có tác dụng gì?", "Đánh dấu đường biên giới trên bộ", ["Trang trí cảnh quan", "Chắn gió", "Làm nhà"], "Cột mốc biên giới đánh dấu đường biên giới trên bộ."],
      ["Việt Nam có đường biên giới đất liền với những nước nào?", "Trung Quốc, Lào, Campuchia", ["Thái Lan, Myanmar", "Chỉ Trung Quốc", "Không có nước nào"], "Việt Nam có đường biên giới đất liền với Trung Quốc, Lào và Campuchia."],
      ["Lực lượng nòng cốt bảo vệ biên giới là ai?", "Bộ đội biên phòng", ["Công an xã", "Dân quân tự vệ", "Học sinh"], "Bộ đội biên phòng là lực lượng nòng cốt bảo vệ biên giới."],
      ["Công dân góp phần bảo vệ biên giới bằng cách nào?", "Không tự ý qua lại, báo khi phát hiện vi phạm", ["Tự ý vượt biên", "Phá hoại cột mốc", "Không quan tâm"], "Công dân không tự ý qua lại biên giới; phát hiện dấu hiệu vi phạm thì báo cơ quan chức năng."],
    ]),
    createStarterTopic("grade-11-cybersecurity-basics", "Lớp 11 · An ninh mạng cơ bản", "Mật khẩu, phishing và bảo vệ dữ liệu", ["11", "🔒", "💻"], [
      ["Mật khẩu an toàn nên được đặt thế nào?", "Mạnh và khác nhau cho từng tài khoản", ["Dễ nhớ, dùng chung mọi nơi", "Thật ngắn", "Ghi ra giấy dán màn hình"], "Dùng mật khẩu mạnh, khác nhau cho từng tài khoản và bật xác thực hai lớp."],
      ["Phishing là hình thức tấn công nào?", "Lừa đảo giả danh để chiếm đoạt thông tin", ["Câu cá giải trí", "Chơi game", "Mua sắm trực tuyến"], "Phishing giả danh ngân hàng hay cơ quan để chiếm đoạt thông tin, mật khẩu."],
      ["Email giả danh ngân hàng yêu cầu nhập mật khẩu là gì?", "Lừa đảo phishing", ["Email thật", "Chương trình khuyến mãi", "Thông báo thường"], "Đó là chiêu lừa đảo phishing; tuyệt đối không nhập thông tin."],
      ["Khi nghi ngờ bị tấn công mạng nên làm gì?", "Đổi mật khẩu ngay và báo quản trị viên", ["Mặc kệ", "Xóa hết dữ liệu", "Tắt máy vĩnh viễn"], "Đổi mật khẩu ngay và báo quản trị viên khi nghi bị tấn công."],
      ["Học sinh cần bảo vệ những gì trên mạng?", "Tài khoản học tập và thông tin cá nhân", ["Không cần bảo vệ gì", "Chỉ tài khoản game", "Chỉ phim ảnh"], "Học sinh cần bảo vệ tài khoản học tập và thông tin cá nhân."],
    ]),
    createStarterTopic("grade-11-survival-skills", "Lớp 11 · Kĩ năng sinh tồn", "Ứng phó khi gặp tình huống nguy hiểm", ["11", "🏕", "🧭"], [
      ["Khi gặp tình huống nguy hiểm, ưu tiên đầu tiên là gì?", "Giữ bình tĩnh", ["Hoảng loạn", "Chạy lung tung", "Khóc lóc"], "Giữ bình tĩnh là ưu tiên đầu tiên khi gặp tình huống nguy hiểm."],
      ["Tín hiệu cầu cứu quốc tế bằng còi là gì?", "Thổi còi ba hồi liên tiếp", ["Thổi một hồi", "Không thổi còi", "Thổi liên tục"], "Thổi còi ba hồi liên tiếp là tín hiệu cầu cứu được công nhận quốc tế."],
      ["Cách nào tạo tín hiệu cầu cứu bằng vật liệu tự nhiên?", "Xếp đá thành chữ SOS", ["Nằm im một chỗ", "Trốn vào hang", "Không làm gì"], "Xếp đá thành chữ SOS hoặc dùng gương phản chiếu ánh sáng để cầu cứu."],
      ["Bộ sinh tồn mini khi đi dã ngoại nên có gì?", "Nước, đèn pin, còi, băng cá nhân", ["Đồ chơi", "Mỹ phẩm", "Sách truyện"], "Nên mang theo: nước, đèn pin, còi và băng cá nhân khi đi dã ngoại."],
      ["Khi bị lạc trong rừng nên ưu tiên tìm gì?", "Nơi trú ẩn và nước sạch", ["Thức ăn ngon", "Chỗ đẹp để chụp ảnh", "Đường tắt"], "Ưu tiên hàng đầu: tìm nơi trú ẩn, nước sạch và giữ ấm cơ thể."],
    ]),
  ],
  "career-experience": [
    createStarterTopic("grade-11-freelancing", "Lớp 11 · Làm việc tự do", "Ưu điểm và thách thức của freelancer", ["11", "💼", "🏠"], [
      ["Freelancer là người như thế nào?", "Làm việc tự do, nhận dự án từ nhiều khách hàng", ["Nhân viên công ty", "Chủ doanh nghiệp", "Người thất nghiệp"], "Freelancer làm việc tự do, nhận dự án từ nhiều khách hàng thay vì một công ty."],
      ["Ưu điểm của làm việc tự do là gì?", "Chủ động thời gian và địa điểm", ["Lương cao cố định", "Được nghỉ phép năm", "Có bảo hiểm đầy đủ"], "Ưu điểm: chủ động về thời gian và địa điểm làm việc."],
      ["Thách thức lớn của freelancer là gì?", "Thu nhập không ổn định, tự lo bảo hiểm", ["Công việc quá nhàn", "Không cần kĩ năng", "Luôn ổn định"], "Nhược điểm: thu nhập không ổn định, tự lo bảo hiểm và thuế."],
      ["Những lĩnh vực nào phổ biến với freelancer?", "Thiết kế, viết lách, lập trình", ["Khai thác mỏ", "Lái máy bay", "Phẫu thuật"], "Các lĩnh vực phổ biến: thiết kế đồ họa, viết lách, lập trình, dịch thuật."],
      ["Muốn làm freelancer cần chuẩn bị gì?", "Kĩ năng chuyên môn vững và quản lí tài chính", ["Không cần chuẩn bị gì", "Chỉ cần máy tính", "Chờ việc tự đến"], "Cần kĩ năng chuyên môn vững, kĩ năng tìm khách hàng và quản lí tài chính cá nhân."],
    ]),
    createStarterTopic("grade-11-startup-basics", "Lớp 11 · Khởi nghiệp", "Ý tưởng, MVP và gọi vốn", ["11", "🚀", "💡"], [
      ["Khởi nghiệp là gì?", "Xây dựng mô hình kinh doanh mới từ ý tưởng", ["Đi xin việc", "Đi làm thuê", "Nghỉ hưu sớm"], "Khởi nghiệp là xây dựng mô hình kinh doanh mới từ một ý tưởng, thường bắt đầu nhỏ."],
      ["MVP trong khởi nghiệp có nghĩa là gì?", "Sản phẩm thử nghiệm tối thiểu", ["Máy tính đắt tiền", "Văn phòng sang trọng", "Logo thật đẹp"], "MVP là sản phẩm thử nghiệm tối thiểu để thử nghiệm thị trường."],
      ["Bước quan trọng đầu tiên khi khởi nghiệp là gì?", "Xác định vấn đề của khách hàng", ["Thuê văn phòng đẹp", "In danh thiếp", "Tổ chức tiệc"], "Bước đầu: xác định vấn đề của khách hàng, tạo MVP rồi thử thị trường."],
      ["Thất bại trong khởi nghiệp có ý nghĩa gì?", "Bài học để thử lại tốt hơn", ["Dấu chấm hết", "Điều xấu hổ", "Vô ích"], "Thất bại là bài học phổ biến; nhiều startup thành công sau nhiều lần thử."],
      ["Học sinh có thể tập khởi nghiệp bằng cách nào?", "Thực hiện dự án nhỏ ở trường", ["Chờ đến khi tốt nghiệp", "Vay vốn lớn", "Không thể thực hiện"], "Học sinh có thể tập khởi nghiệp qua dự án nhỏ ở trường để rèn tư duy."],
    ]),
    createStarterTopic("grade-11-work-life-balance", "Lớp 11 · Cân bằng công việc", "Quản lí thời gian và sức khỏe", ["11", "⚖", "🌿"], [
      ["Cân bằng công việc – cuộc sống là gì?", "Phân bổ hợp lí thời gian cho công việc, gia đình, sức khỏe", ["Chỉ tập trung làm việc", "Chỉ nghỉ ngơi", "Không cần quan tâm"], "Là phân bổ hợp lí thời gian cho công việc, gia đình, sức khỏe và sở thích cá nhân."],
      ["Làm việc quá sức kéo dài gây hậu quả gì?", "Kiệt sức, ảnh hưởng sức khỏe", ["Thăng tiến nhanh", "Khỏe mạnh hơn", "Luôn vui vẻ"], "Làm việc quá sức kéo dài gây kiệt sức, ảnh hưởng nghiêm trọng đến sức khỏe."],
      ["Biện pháp nào giúp cân bằng hiệu quả?", "Lập kế hoạch, ưu tiên việc quan trọng", ["Làm mọi thứ cùng lúc", "Thức khuya triền miên", "Bỏ qua nghỉ ngơi"], "Lập kế hoạch, ưu tiên việc quan trọng, dành thời gian nghỉ ngơi và vận động."],
      ["Với học sinh, cân bằng giữa học và chơi giúp gì?", "Học hiệu quả, tinh thần thoải mái", ["Học kém đi", "Mệt mỏi hơn", "Không có tác dụng"], "Cân bằng giữa học tập và vui chơi giúp học hiệu quả hơn, tinh thần thoải mái."],
      ["Thói quen nào tốt cho sự cân bằng mỗi ngày?", "Dành 30 phút thể thao", ["Thức đến 2 giờ sáng", "Bỏ bữa sáng", "Ngồi lì một chỗ"], "Dành 30 phút thể thao mỗi ngày giúp học tập tập trung hơn."],
    ]),
  ],
};
for (const [subjectId, topics] of Object.entries(gradeElevenExtraPractice)) {
  for (const topic of topics) topic.level = "LỚP 11";
  curriculumExtensions[subjectId].push(...topics);
}

const pracA1 = {
  math: [
    createStarterTopic("grade-12-sphere-oxyz", "Lớp 12 · Mặt cầu Oxyz", "Phương trình mặt cầu, tâm, bán kính và điều kiện tồn tại", ["12", "◯", "📐"], [
      ["Mặt cầu (x − 1)² + (y + 2)² + z² = 9 có tâm và bán kính là gì?", "I(1; −2; 0) và R = 3", ["I(−1; 2; 0) và R = 3", "I(1; −2; 0) và R = 9", "I(1; −2; 0) và R = √3"], "Tâm lấy số đối của hệ số trong ngoặc: I(1; −2; 0); bán kính R = √9 = 3, nhiều bạn nhầm R = 9."],
      ["Bán kính của mặt cầu x² + y² + z² − 4x + 6y − 4z + 4 = 0 bằng bao nhiêu?", "√13", ["√17", "13", "√21"], "So với dạng tổng quát: a = 2, b = −3, c = 2, d = 4; R² = a² + b² + c² − d = 4 + 9 + 4 − 4 = 13."],
      ["Điều kiện để phương trình x² + y² + z² − 2ax − 2by − 2cz + d = 0 là một mặt cầu là gì?", "a² + b² + c² > d", ["d > a² + b² + c²", "a² + b² + c² = d", "a, b, c, d đều dương"], "Vì R² = a² + b² + c² − d phải dương nên cần a² + b² + c² > d; khi bằng nhau chỉ còn một điểm."],
      ["Điểm nào sau đây thuộc mặt cầu tâm O bán kính 2?", "(2; 0; 0)", ["(1; 1; 1)", "(0; 2; 2)", "(2; 2; 0)"], "Mặt cầu là x² + y² + z² = 4; chỉ điểm (2; 0; 0) thỏa 4 + 0 + 0 = 4, các điểm còn lại cho tổng lớn hơn 4."],
      ["Phương trình của mặt cầu tâm I(0; 0; 1), bán kính 5 là gì?", "x² + y² + (z − 1)² = 25", ["x² + y² + (z − 1)² = 5", "x² + y² + (z + 1)² = 25", "(x − 1)² + y² + z² = 25"], "Thay tâm vào (x − 0)² + (y − 0)² + (z − 1)² = 5²; chú ý vế phải là R² = 25 chứ không phải R."],
    ]),
    createStarterTopic("grade-12-statistics-inference", "Lớp 12 · Thống kê suy luận", "Ước lượng, khoảng tin cậy và kiểm định giả thuyết", ["12", "📊", "🎯"], [
      ["Thống kê suy luận khác thống kê mô tả ở điểm nào?", "Suy luận dùng mẫu để kết luận về tổng thể, mô tả chỉ tóm tắt dữ liệu đang có", ["Mô tả dùng mẫu để dự đoán tổng thể", "Suy luận chỉ vẽ biểu đồ minh họa", "Hai cách gọi khác nhau của cùng một việc"], "Thống kê mô tả dừng ở bảng biểu, số đặc trưng của tập dữ liệu; suy luận đi xa hơn: từ mẫu suy ra quy luật của cả tổng thể."],
      ["Khoảng tin cậy 95% cho chiều cao trung bình là 160–170 cm có nghĩa là gì?", "Nếu lặp lại việc lấy mẫu nhiều lần, khoảng 95% các khoảng tính được sẽ chứa chiều cao trung bình thật", ["95% học sinh có chiều cao từ 160 đến 170 cm", "Chắc chắn 100% giá trị thật nằm trong khoảng này", "Chiều cao trung bình của mẫu đúng bằng 165 cm"], "Khoảng tin cậy nói về độ tin cậy của quy trình ước lượng, không phải tỉ lệ cá thể trong khoảng; đừng nhầm với “95% học sinh”."],
      ["Mức ý nghĩa α = 0,05 trong kiểm định giả thuyết nghĩa là gì?", "Chấp nhận tối đa 5% khả năng bác bỏ nhầm một giả thuyết H₀ đúng", ["Xác suất giả thuyết H₀ đúng là 5%", "Kết quả kiểm định luôn đúng 95%", "Phải thu thập đúng 5% tổng thể làm mẫu"], "α là ngưỡng rủi ro sai lầm loại I mà ta chấp nhận: kết luận có hiệu ứng trong khi thực ra không có."],
      ["Muốn thu hẹp khoảng tin cậy mà vẫn giữ nguyên độ tin cậy, cách hiệu quả nhất là gì?", "Tăng cỡ mẫu", ["Giảm cỡ mẫu", "Tăng độ tin cậy lên 99%", "Đổi đơn vị đo của dữ liệu"], "Sai số chuẩn tỉ lệ nghịch với √n nên mẫu càng lớn, ước lượng càng chính xác và khoảng càng hẹp."],
      ["Trong một kiểm định, p-value = 0,03 với mức ý nghĩa α = 0,05 thì kết luận nào đúng?", "Bác bỏ H₀", ["Không bác bỏ H₀", "Chưa đủ thông tin để kết luận", "H₀ chắc chắn sai hoàn toàn"], "Vì p-value = 0,03 < α = 0,05 nên bác bỏ H₀; lưu ý “bác bỏ” khác với “chứng minh H₀ sai hoàn toàn”."],
    ]),
    createStarterTopic("grade-12-optimization", "Lớp 12 · Bài toán tối ưu hóa", "Cực trị bằng đạo hàm và bài toán thực tế", ["12", "📈", "⚙"], [
      ["Để tìm giá trị lớn nhất của hàm f trên đoạn [a; b], bước nào KHÔNG thể bỏ qua?", "So sánh giá trị tại các điểm tới hạn với giá trị tại hai đầu mút", ["Chỉ cần giải f′(x) = 0", "Chỉ cần tính f(a) và f(b)", "Chỉ cần tìm điểm mà f(x) = 0"], "Cực trị trên đoạn đóng có thể rơi đúng vào đầu mút; bỏ qua bước so sánh là lỗi phổ biến nhất."],
      ["Hàm số f(x) = x³ − 3x² đạt cực đại tại điểm nào?", "x = 0", ["x = 2", "x = 1", "x = 3"], "f′(x) = 3x² − 6x = 0 cho x = 0 hoặc x = 2; f′ đổi dấu từ dương sang âm tại x = 0 nên đó là điểm cực đại."],
      ["Giá trị lớn nhất của f(x) = −x² + 4x + 1 trên đoạn [0; 3] bằng bao nhiêu?", "5", ["4", "1", "9"], "Đỉnh parabol tại x = 2 cho f(2) = 5; so với f(0) = 1 và f(3) = 4 nên giá trị lớn nhất là 5."],
      ["Dấu hiệu nhận biết điểm cực tiểu qua đạo hàm cấp một là gì?", "f′ đổi dấu từ âm sang dương khi qua điểm đó", ["f′ đổi dấu từ dương sang âm khi qua điểm đó", "Chỉ cần f′ = 0 tại điểm đó là đủ", "f′ luôn dương ở cả hai phía"], "f′ = 0 mới chỉ là điểm tới hạn; phải có sự đổi dấu từ âm sang dương mới khẳng định là cực tiểu."],
      ["Một công ty muốn dùng ít vật liệu nhất để làm chiếc hộp kín có thể tích cho trước; đây là bài toán gì?", "Bài toán tối ưu: cực tiểu hóa diện tích với ràng buộc thể tích", ["Bài toán xác suất thống kê", "Bài toán đếm của tổ hợp", "Bài toán giải phương trình bậc hai"], "Đặt một cạnh là x, biểu diễn diện tích toàn phần theo x rồi tìm giá trị nhỏ nhất trên miền x > 0."],
    ]),
  ],
  science: [
    createStarterTopic("grade-12-quantum-intro", "Lớp 12 · Lượng tử cơ bản", "Planck, quang điện, lưỡng tính sóng – hạt và bất định", ["12", "⚛", "💡"], [
      ["Công thức Planck E = hf cho biết điều gì?", "Năng lượng của một photon tỉ lệ thuận với tần số của ánh sáng", ["Năng lượng tỉ lệ nghịch với tần số", "Mọi photon đều có năng lượng bằng nhau", "Tần số càng cao thì năng lượng càng thấp"], "h = 6,626×10⁻³⁴ J·s là hằng số; f càng lớn thì mỗi “gói” năng lượng càng lớn."],
      ["Hiện tượng quang điện chứng tỏ ánh sáng có tính chất gì?", "Tính hạt: ánh sáng tồn tại dưới dạng các photon", ["Chỉ có tính sóng", "Là dòng electron phát ra từ kim loại", "Không mang theo năng lượng"], "Electron chỉ bật ra khi tần số ánh sáng đủ lớn, bất kể cường độ — điều thuyết sóng cổ điển không giải thích được."],
      ["Nguyên lý bất định Heisenberg phát biểu điều gì?", "Không thể đồng thời xác định chính xác cả vị trí và động lượng của hạt vi mô", ["Mọi phép đo ở cấp vi mô đều hoàn toàn chính xác", "Nguyên lý chỉ áp dụng cho vật vĩ mô", "Năng lượng của hạt vi mô luôn bằng 0"], "Việc đo vị trí càng chính xác thì càng làm nhiễu động lượng của hạt, và ngược lại."],
      ["Thí nghiệm nhiễu xạ của electron chứng tỏ điều gì?", "Hạt vi mô như electron cũng có tính sóng (lưỡng tính sóng – hạt)", ["Electron chỉ là hạt cổ điển", "Sóng ánh sáng không có tính hạt", "Electron nặng hơn proton"], "Chùm electron qua khe hẹp tạo vân nhiễu xạ như sóng; giả thuyết de Broglie được thực nghiệm xác nhận."],
      ["Trong các bức xạ sau, photon của bức xạ nào mang năng lượng lớn nhất?", "Tia tử ngoại", ["Ánh sáng đỏ", "Tia hồng ngoại", "Sóng vô tuyến"], "Theo E = hf, tần số càng cao năng lượng càng lớn: tử ngoại > ánh sáng nhìn thấy > hồng ngoại > sóng vô tuyến."],
    ]),
    createStarterTopic("grade-12-electrochemistry", "Lớp 12 · Điện hóa và pin", "Pin Galvani, điện phân và dãy điện hóa", ["12", "🔋", "⚗"], [
      ["Trong pin Galvani Zn–Cu, điện cực kẽm (Zn) đóng vai trò gì?", "Cực âm, nơi xảy ra quá trình oxi hóa", ["Cực dương, nơi xảy ra quá trình khử", "Cực dương, nơi xảy ra quá trình oxi hóa", "Điện cực không tham gia phản ứng"], "Zn → Zn²⁺ + 2e: Zn nhường electron nên bị oxi hóa và là cực âm của pin."],
      ["Sức điện động chuẩn của pin Zn–Cu bằng bao nhiêu?", "1,10 V", ["0,76 V", "0,34 V", "1,86 V"], "E° = E°(cathode) − E°(anode) = 0,34 − (−0,76) = 1,10 V; đừng lấy riêng một nửa pin."],
      ["Khi điện phân nước, khí H₂ thoát ra ở điện cực nào?", "Cathode (cực âm)", ["Anode (cực dương)", "Cả hai điện cực", "Không có khí nào thoát ra"], "Ở cathode xảy ra quá trình khử: 2H₂O + 2e → H₂ + 2OH⁻; ở anode thoát ra O₂."],
      ["Dãy điện hóa của kim loại cho phép dự đoán điều gì?", "Chiều của phản ứng oxi hóa – khử và sức điện động của pin", ["Màu sắc của mọi dung dịch", "Tốc độ của mọi phản ứng hóa học", "Nhiệt độ nóng chảy của kim loại"], "Kim loại đứng trước đẩy được ion kim loại đứng sau ra khỏi dung dịch muối của nó."],
      ["Vì sao khi điện phân dung dịch CuSO₄ với điện cực trơ, đồng bám vào cathode?", "Ion Cu²⁺ nhận electron và bị khử thành Cu kim loại", ["Ion Cu²⁺ bị oxi hóa thành Cu", "Nước bị khử tạo ra đồng", "CuSO₄ tự phân hủy khi có dòng điện"], "Tại cathode: Cu²⁺ + 2e → Cu; đó là quá trình khử, không phải oxi hóa."],
    ]),
    createStarterTopic("grade-12-ecology-systems", "Lớp 12 · Hệ sinh thái", "Chuỗi thức ăn, tháp sinh thái và diễn thế", ["12", "🌿", "🦁"], [
      ["Vì sao chuỗi thức ăn thường không vượt quá 5–6 bậc dinh dưỡng?", "Mỗi bậc chỉ giữ lại khoảng 10% năng lượng của bậc ngay dưới", ["Năng lượng được cộng thêm ở mỗi bậc dinh dưỡng", "Sinh vật bậc cao không cần ăn sinh vật bậc thấp", "Số bậc không liên quan gì đến năng lượng"], "Phần lớn năng lượng mất đi qua hô hấp và chất thải nên càng lên cao năng lượng càng cạn kiệt."],
      ["Sinh vật nào sau đây thuộc nhóm phân giải?", "Nấm và vi khuẩn hoại sinh", ["Cây xanh quang hợp", "Châu chấu ăn cỏ", "Rắn ăn ếch"], "Sinh vật phân giải phân hủy xác sinh vật thành chất vô cơ, khép kín chu trình vật chất."],
      ["Diễn thế nguyên sinh bắt đầu từ môi trường nào?", "Môi trường chưa từng có sinh vật, như đảo núi lửa mới hay bãi đá trần", ["Khu rừng bị chặt phá nhưng còn đất và hạt", "Ruộng bỏ hoang nhiều năm", "Ao hồ bị ô nhiễm rồi phục hồi"], "Diễn thế nguyên sinh khởi đầu từ nơi trống trơn; còn nơi từng có sinh vật là diễn thế thứ sinh, diễn ra nhanh hơn."],
      ["Loại tháp sinh thái nào luôn có dạng chuẩn (đáy rộng, đỉnh hẹp)?", "Tháp năng lượng", ["Tháp số lượng", "Tháp sinh khối", "Mọi loại tháp sinh thái"], "Tháp số lượng và sinh khối có thể bị lộn ngược (ví dụ sinh vật ký sinh, hệ đại dương), chỉ tháp năng lượng luôn chuẩn."],
      ["Nếu thuốc trừ sâu tích lũy qua chuỗi thức ăn, sinh vật nào bị nhiễm độc nặng nhất?", "Sinh vật ở đỉnh chuỗi (bậc dinh dưỡng cao nhất)", ["Cây trồng bị phun thuốc", "Côn trùng ăn lá", "Sinh vật phân giải"], "Hiện tượng khuếch đại sinh học: chất độc khó phân giải tích lũy dần và đậm đặc nhất ở bậc cao nhất."],
    ]),
  ],
  literature: [
    createStarterTopic("grade-12-wartime-prose", "Lớp 12 · Văn xuôi kháng chiến", "Nguyễn Thi, Anh Đức và khuynh hướng sử thi", ["12", "📖", "🔥"], [
      ["Truyện ngắn “Người mẹ cầm súng” của Nguyễn Thi khắc họa nhân vật nào?", "Má Út Tịch", ["Chị Sứ", "Chị Dậu", "Chị Chiến"], "Má Út Tịch là hình tượng người mẹ Nam Bộ vừa tần tảo vừa anh dũng; chị Sứ thuộc về “Hòn Đất” của Anh Đức."],
      ["Câu nói “Còn cái lai quần cũng đánh” thể hiện điều gì ở má Út Tịch?", "Quyết tâm đánh giặc đến cùng, không chịu đầu hàng", ["Sự giàu có của gia đình bà", "Nỗi sợ hãi trước chiến tranh", "Mong muốn hòa bình bằng mọi giá"], "Câu nói mộc mạc mà đanh thép, kết tinh tinh thần quật khởi của người nông dân Nam Bộ."],
      ["Tiểu thuyết “Hòn Đất” của Anh Đức viết về nhân vật nào?", "Chị Sứ", ["Má Út Tịch", "Chị Dậu", "Anh hùng Núp"], "Chị Sứ kiên cường bám đất, giữ làng Hòn Đất (Kiên Giang) trong kháng chiến chống Mỹ."],
      ["Khuynh hướng nổi bật của văn xuôi Việt Nam giai đoạn 1945–1975 là gì?", "Khuynh hướng sử thi, ngợi ca con người anh hùng", ["Chủ nghĩa hiện thực phê phán", "Khuynh hướng lãng mạn thoát ly", "Văn học phi lý, hiện sinh"], "Văn học thời kỳ này lấy cái ta cộng đồng, số phận dân tộc làm trung tâm thay vì cái tôi cá nhân."],
      ["Chi tiết má Út Tịch đếm số giặc đã diệt bằng ngón tay có ý nghĩa gì?", "Niềm tin chiến thắng giản dị, chắc chắn của người nông dân", ["Bà không biết đếm những số lớn", "Bà thích khoe chiến tích với mọi người", "Bà sợ quên nên phải đếm cho nhớ"], "Cách đếm mộc mạc cho thấy với bà, đánh giặc là việc chắc chắn làm được, như đếm việc nhà."],
    ]),
    createStarterTopic("grade-12-postwar-poetry", "Lớp 12 · Thơ sau 1975", "Hữu Thỉnh, Thanh Thảo và cảm hứng đời thường", ["12", "🍂", "🖋"], [
      ["Bài “Sang thu” của Hữu Thỉnh nhận ra mùa thu qua những tín hiệu nào?", "Hương ổi phả trong gió se, sương chùng chình qua ngõ", ["Lá vàng rơi đầy sân", "Tiếng ve sầu râm ran", "Hoa đào nở rộ"], "Bài thơ cảm nhận giao mùa bằng khứu giác và thị giác tinh tế, không dùng hình ảnh ước lệ."],
      ["Thanh Thảo được nhắc đến nhiều nhất với bài thơ nào?", "“Đàn ghi-ta của Lor-ca”", ["“Sang thu”", "“Tây Tiến”", "“Đất nước”"], "Bài thơ viết năm 1979 về nhà thơ Tây Ban Nha Lor-ca, tiêu biểu cho hướng thơ hiện đại giàu liên tưởng."],
      ["Điểm mới của thơ sau 1975 so với thơ thời kháng chiến là gì?", "Hướng vào đời sống thường nhật, chiêm nghiệm cá nhân về hòa bình", ["Hoàn toàn quay lại thơ Đường luật", "Chỉ viết về đề tài chiến tranh", "Bỏ hẳn hình ảnh thiên nhiên"], "Con người trở về với đời sống bình dị nên thơ cũng chuyển từ cảm hứng sử thi sang thế sự, đời tư."],
      ["Hình ảnh “sương chùng chình qua ngõ” gợi cảm giác gì?", "Sự giao mùa chậm rãi, dùng dằng nửa ở nửa đi", ["Cơn bão lớn sắp ập đến", "Mùa đông đã về hẳn", "Trời đang nắng gắt"], "Từ láy “chùng chình” nhân hóa làn sương như còn lưu luyến, chưa muốn rời đi."],
      ["Vì sao thơ sau 1975 chuộng những hình ảnh đời thường?", "Con người trở về với cuộc sống bình dị sau những năm chiến tranh", ["Nhà thơ đã cạn vốn từ ngữ", "Chiến tranh bị cấm nhắc đến", "Thơ ca không còn độc giả"], "Hòa bình đưa con người về với mái nhà, cánh đồng, góc phố — chất liệu gần gũi nhất của đời sống."],
    ]),
    createStarterTopic("grade-12-author-ho-chi-minh", "Lớp 12 · Phong cách Hồ Chí Minh", "Giản dị, dân tộc – hiện đại qua các tác phẩm", ["12", "📜", "⭐"], [
      ["Đặc điểm nổi bật nhất trong phong cách văn chính luận của Hồ Chí Minh là gì?", "Giản dị, trong sáng, lập luận chặt chẽ, dễ hiểu", ["Cầu kỳ, hoa mỹ, khó hiểu", "Dài dòng, lan man", "Chỉ dùng từ Hán Việt cổ"], "Người viết cho quần chúng nên câu văn ngắn gọn, hình ảnh gần gũi mà lý lẽ sắc bén."],
      ["“Tuyên ngôn Độc lập” (1945) mở đầu bằng cách nào?", "Trích dẫn Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền của Pháp (1791)", ["Tường thuật trận Điện Biên Phủ", "Đọc một bài thơ chúc Tết", "Kể lại chuyện đời mình"], "Dùng chính lời lẽ của đối phương để buộc họ phải thừa nhận quyền độc lập của dân tộc ta — nghệ thuật “gậy ông đập lưng ông”."],
      ["“Nhật kí trong tù” được sáng tác trong hoàn cảnh nào?", "Khi Người bị chính quyền Tưởng Giới Thạch giam giữ ở Trung Quốc (1942–1943)", ["Khi Người hoạt động ở Pháp năm 1920", "Khi Người về thăm quê Nghệ An", "Sau ngày độc lập 1945"], "Tập thơ chữ Hán khoảng 133 bài, ghi lại tâm thế ung dung, lạc quan ngay trong ngục tù."],
      ["Câu “Không có gì quý hơn độc lập tự do” xuất hiện trong văn kiện nào?", "Lời kêu gọi chống Mỹ ngày 17/7/1966", ["Tuyên ngôn Độc lập 1945", "Di chúc 1969", "“Nhật kí trong tù”"], "Nhiều bạn nhầm câu này với Tuyên ngôn Độc lập; thực ra nó thuộc Lời kêu gọi đồng bào cả nước kháng chiến chống Mỹ."],
      ["Phong cách Hồ Chí Minh là sự kết hợp của hai yếu tố nào?", "Truyền thống dân tộc và tinh thần hiện đại", ["Cổ điển phương Đông và lãng mạn Pháp", "Thuần Việt và bài ngoại", "Học theo hoàn toàn văn phong phương Tây"], "Văn của Người vừa đậm đà bản sắc dân tộc vừa tiếp thu tinh hoa nhân loại, hướng tới quần chúng."],
    ]),
  ],
  english: [
    createStarterTopic("grade-12-academic-writing", "Lớp 12 · Viết học thuật", "Cấu trúc bài luận, thesis statement và văn phong trang trọng", ["12", "🎓", "✍"], [
      ["Câu nào sau đây phù hợp với văn phong học thuật?", "Pollution poses a serious threat to public health.", ["I think pollution is really bad, you know?", "Lots of people hate pollution a lot.", "Pollution is bad. It is very very bad."], "Văn học thuật dùng từ ngữ trang trọng, chính xác; tránh đại từ ngôi thứ nhất, từ cảm thán và lặp từ."],
      ["Thesis statement (luận điểm) thường nằm ở vị trí nào trong bài luận?", "Cuối đoạn mở bài", ["Đầu đoạn mở bài", "Giữa đoạn thân bài", "Cuối đoạn kết bài"], "Sau khi giới thiệu chủ đề, câu cuối mở bài nêu rõ quan điểm mà toàn bài sẽ chứng minh."],
      ["Từ nào thể hiện cách diễn đạt thận trọng (hedging) trong viết học thuật?", "suggests", ["definitely", "obviously", "everybody knows"], "Hedging dùng các từ như may, might, suggests, indicates để tránh khẳng định tuyệt đối khi chưa đủ bằng chứng."],
      ["Vì sao không nên dùng đại từ “I” và dạng viết tắt như “don’t” trong bài học thuật?", "Vì văn phong học thuật yêu cầu trang trọng và khách quan", ["Vì bài luận sẽ bị trừ hết điểm ngay lập tức", "Vì tiếng Anh học thuật cấm mọi loại đại từ", "Vì viết tắt làm cho bài luận dài dòng hơn"], "Viết đầy đủ “do not”, dùng cấu trúc bị động hoặc chủ ngữ chung giúp bài viết khách quan hơn."],
      ["Câu chủ đề (topic sentence) có vai trò gì trong đoạn văn?", "Nêu ý chính của đoạn, các câu sau triển khai ý đó", ["Tóm tắt toàn bộ bài luận", "Đặt câu hỏi cho độc giả", "Liệt kê tài liệu tham khảo"], "Mỗi đoạn thân bài chỉ trình bày một ý chính, mở đầu bằng topic sentence rồi giải thích, dẫn chứng."],
    ]),
    createStarterTopic("grade-12-idioms-advanced", "Lớp 12 · Thành ngữ nâng cao", "Nghĩa bóng và cách dùng thành ngữ thông dụng", ["12", "💬", "🌟"], [
      ["Thành ngữ “break the ice” có nghĩa là gì?", "Phá tan sự ngượng ngùng, bắt đầu trò chuyện", ["Đập vỡ tảng băng", "Làm lạnh đồ uống", "Trượt băng nghệ thuật"], "Đừng dịch từng từ: thành ngữ chỉ việc làm quen, mở đầu cuộc trò chuyện trong buổi gặp gỡ."],
      ["“A blessing in disguise” có nghĩa là gì?", "Điều tưởng xui hóa ra lại may (trong họa có phúc)", ["Món quà được gói kín", "Lời chúc phúc trong lễ cưới", "Sự ngụy trang hoàn hảo"], "Ví dụ: mất việc nhưng nhờ đó tìm được công việc tốt hơn — điều xui đội lốt điều may."],
      ["“Hit the nail on the head” có nghĩa là gì?", "Nói trúng phóc, chạm đúng vấn đề", ["Đóng đinh vào tường", "Bị đau đầu dữ dội", "Là thợ mộc lành nghề"], "Hình ảnh búa đóng trúng đầu đinh diễn tả sự chính xác tuyệt đối trong nhận xét."],
      ["Trong cuộc họp bế tắc, ai đó nói “The ball is in your court” — ý họ là gì?", "Đến lượt bạn phải hành động hoặc quyết định", ["Mời bạn chơi bóng rổ", "Quả bóng đang ở sân của bạn", "Họ muốn nghỉ giải lao"], "Mượn hình ảnh tennis: bóng sang sân ai thì người đó phải đánh trả, tức phải chịu trách nhiệm tiếp theo."],
      ["Vì sao không nên dịch thành ngữ theo nghĩa từng từ?", "Vì nghĩa của thành ngữ không suy ra từ nghĩa các từ riêng lẻ", ["Vì thành ngữ nào cũng chứa từ khó", "Vì từ điển không hề có thành ngữ", "Vì thành ngữ chỉ dùng trong văn nói"], "Phải học cả cụm như một đơn vị nghĩa độc lập và ghi nhớ qua ví dụ cụ thể."],
    ]),
    createStarterTopic("grade-12-debate-english", "Lớp 12 · Tranh biện tiếng Anh", "Motion, phe ủng hộ – phản đối và phản biện", ["12", "🎤", "⚖"], [
      ["Trong tranh biện, “motion” là gì?", "Kiến nghị mà hai phe sẽ tranh luận ủng hộ hoặc phản đối", ["Chuyển động cơ thể của diễn giả", "Cảm xúc của khán giả", "Tốc độ nói của thí sinh"], "Ví dụ: “This house believes that homework should be abolished” — cả cuộc tranh biện xoay quanh kiến nghị này."],
      ["Phe proposition trong tranh biện có nhiệm vụ gì?", "Ủng hộ và bảo vệ motion", ["Phản đối motion", "Làm trọng tài chấm điểm", "Đặt câu hỏi cho khán giả"], "Phe proposition đưa luận cứ chứng minh motion đúng; phe opposition làm điều ngược lại."],
      ["Cụm từ nào phù hợp để phản biện một cách lịch sự?", "I see your point; however, …", ["You are completely wrong!", "Shut up and listen!", "That is so stupid."], "Phản biện hay là ghi nhận ý đối thủ trước rồi mới đưa luận cứ bác bỏ, giữ thái độ tôn trọng."],
      ["Câu nào là cách mở bài tranh biện tốt?", "Today we strongly believe that school uniforms limit students’ self-expression.", ["Um, I do not know what to say.", "Hello everyone, I like pizza.", "I will talk about something important maybe."], "Mở bài tốt nêu rõ lập trường của phe mình về motion ngay từ đầu, dùng ngôn ngữ chắc chắn."],
      ["“Rebuttal” trong tranh biện nghĩa là gì?", "Phần bác bỏ luận cứ của phe đối thủ", ["Phần chào hỏi khán giả", "Phần đọc lại bài đã chuẩn bị", "Phần bỏ cuộc giữa chừng"], "Rebuttal hiệu quả chỉ ra điểm yếu trong lập luận đối phương rồi đưa bằng chứng phản bác."],
    ]),
  ],
};

const pracA2 = {
  history: [
    createStarterTopic("grade-12-august-revolution-1945", "Lớp 12 · Cách mạng tháng Tám 1945", "19/8, Tuyên ngôn Độc lập và ý nghĩa lịch sử", ["12", "🇻🇳", "✊"], [
      ["Ngày 19/8/1945 diễn ra sự kiện lịch sử nào?", "Khởi nghĩa giành chính quyền thắng lợi ở Hà Nội", ["Đọc Tuyên ngôn Độc lập", "Thành lập Đảng Cộng sản", "Chiến thắng Điện Biên Phủ"], "Từ Hà Nội, khởi nghĩa lan nhanh ra cả nước; 19/8 trở thành ngày truyền thống của lực lượng công an."],
      ["Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đã làm gì tại Quảng trường Ba Đình?", "Đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa", ["Tuyên bố kháng chiến chống Pháp", "Ký hiệp định với Pháp", "Đọc thơ chúc Tết"], "Bản Tuyên ngôn khẳng định quyền độc lập của dân tộc và sự ra đời của nhà nước Việt Nam mới."],
      ["Thời cơ của Cách mạng tháng Tám được tạo ra bởi sự kiện nào?", "Nhật đầu hàng Đồng minh, chính quyền tay sai rệu rã", ["Mỹ ném bom nguyên tử xuống Hà Nội", "Pháp tự nguyện trao trả độc lập", "Liên Xô đưa quân vào Việt Nam"], "Nhật đầu hàng ngày 15/8/1945 tạo khoảng trống quyền lực — thời cơ “ngàn năm có một” mà Đảng đã chớp lấy."],
      ["Ý nghĩa lớn nhất của Cách mạng tháng Tám 1945 là gì?", "Giành độc lập dân tộc, lập nên nhà nước dân chủ nhân dân đầu tiên ở Đông Nam Á", ["Chỉ thay đổi chính quyền ở Hà Nội", "Giúp Pháp quay lại cai trị", "Kết thúc hoàn toàn chiến tranh thế giới"], "Lần đầu tiên trong lịch sử, người Việt Nam làm chủ vận mệnh đất nước mình."],
      ["Lực lượng nào lãnh đạo Cách mạng tháng Tám thành công?", "Đảng Cộng sản Đông Dương", ["Chính phủ Pháp", "Phát xít Nhật", "Một đảng phái lưu vong"], "Đảng đã chuẩn bị lực lượng, căn cứ và chớp đúng thời cơ; không có lãnh đạo đúng đắn thì thời cơ cũng trôi qua."],
    ]),
    createStarterTopic("grade-12-vietnam-war", "Lớp 12 · Kháng chiến chống Mỹ", "Điện Biên Phủ trên không, Paris 1973 và 30/4/1975", ["12", "🕊", "📅"], [
      ["Chiến thắng “Điện Biên Phủ trên không” diễn ra khi nào?", "Tháng 12/1972", ["Tháng 5/1954", "Tháng 1/1973", "Tháng 4/1975"], "Trong 12 ngày đêm cuối năm 1972, quân dân miền Bắc đánh bại cuộc tập kích B-52 của Mỹ; đừng nhầm với Điện Biên Phủ 1954."],
      ["Hiệp định Paris về Việt Nam được ký vào ngày nào?", "27/1/1973", ["27/1/1972", "30/4/1975", "2/9/1945"], "Hiệp định buộc Mỹ rút hết quân khỏi miền Nam — mốc ghi nhớ: tháng 1 năm 1973."],
      ["Nội dung cốt lõi của Hiệp định Paris 1973 là gì?", "Mỹ rút hết quân khỏi miền Nam, tôn trọng độc lập, chủ quyền của Việt Nam", ["Việt Nam bị chia cắt vĩnh viễn", "Mỹ được ở lại miền Nam", "Miền Bắc phải giải giáp quân đội"], "Đây là thắng lợi buộc Mỹ “cút” khỏi miền Nam, tạo điều kiện cho tổng tiến công giải phóng hoàn toàn."],
      ["Chiến dịch Hồ Chí Minh kết thúc thắng lợi vào thời điểm nào?", "30/4/1975, giải phóng Sài Gòn", ["30/4/1974", "27/1/1973", "19/8/1945"], "Xe tăng tiến vào Dinh Độc Lập trưa 30/4/1975 đánh dấu miền Nam hoàn toàn giải phóng."],
      ["Vì sao thắng lợi 30/4/1975 có ý nghĩa lịch sử trọng đại?", "Kết thúc 30 năm chiến tranh, non sông thu về một mối", ["Chỉ giải phóng được một thành phố", "Mở đầu một cuộc kháng chiến mới", "Việt Nam gia nhập Liên hợp quốc ngay hôm sau"], "Từ đây đất nước thống nhất, cả nước đi lên xây dựng chủ nghĩa xã hội; Việt Nam gia nhập Liên hợp quốc năm 1977."],
    ]),
    createStarterTopic("grade-12-asean-vietnam", "Lớp 12 · Việt Nam và ASEAN", "Gia nhập 1995, hội nhập và vai trò của Việt Nam", ["12", "🤝", "🌏"], [
      ["ASEAN được thành lập khi nào và ở đâu?", "8/8/1967 tại Bangkok", ["28/7/1995 tại Hà Nội", "8/8/1976 tại Jakarta", "15/12/2008 tại Singapore"], "5 nước sáng lập: Indonesia, Malaysia, Philippines, Singapore, Thái Lan; mốc 8/8/1967 cần nhớ chính xác."],
      ["Việt Nam gia nhập ASEAN vào thời điểm nào?", "28/7/1995, trở thành thành viên thứ bảy", ["8/8/1967", "28/7/1997", "31/12/2015"], "Sau Việt Nam còn Lào, Myanmar (1997) và Campuchia (1999); đừng nhầm năm gia nhập với năm thành lập."],
      ["Việc gia nhập ASEAN năm 1995 có ý nghĩa gì với Việt Nam?", "Phá thế bao vây, cấm vận và mở ra thời kỳ hội nhập khu vực", ["Rời khỏi Liên hợp quốc", "Chấm dứt quan hệ với các nước ngoài ASEAN", "Chỉ để tham dự SEA Games"], "Đây là bước ngoặt đưa Việt Nam từ đối đầu sang hội nhập, đa phương hóa quan hệ quốc tế."],
      ["Hiến chương ASEAN có hiệu lực vào năm nào?", "2008", ["1967", "1995", "2015"], "Hiến chương tạo nền tảng pháp lý cho ASEAN; năm 2015 là mốc hình thành Cộng đồng ASEAN."],
      ["Việt Nam đã đảm nhiệm vai trò nào trong ASEAN?", "Chủ tịch luân phiên ASEAN các năm 1998, 2010 và 2020", ["Tổng thư ký thường trực", "Thành viên sáng lập", "Quan sát viên"], "Vai trò Chủ tịch luân phiên cho thấy vị thế và đóng góp chủ động của Việt Nam trong khu vực."],
    ]),
  ],
  geography: [
    createStarterTopic("grade-12-mekong-economy", "Lớp 12 · Kinh tế Đồng bằng sông Cửu Long", "Vựa lúa, cá tra và thích ứng với biến đổi", ["12", "🌾", "🐟"], [
      ["Đồng bằng sông Cửu Long được mệnh danh là gì?", "Vựa lúa lớn nhất của cả nước", ["Vựa cà phê của cả nước", "Thủ phủ công nghiệp nặng", "Trung tâm tài chính quốc gia"], "Vùng cung cấp phần lớn sản lượng lúa gạo xuất khẩu của Việt Nam; cà phê là thế mạnh của Tây Nguyên."],
      ["Mặt hàng thủy sản xuất khẩu chủ lực của Đồng bằng sông Cửu Long là gì?", "Cá tra, cá basa", ["Cá ngừ đại dương", "Tôm hùm", "Cá hồi"], "Cá tra nuôi lồng bè dọc sông Tiền, sông Hậu rồi chế biến xuất khẩu đi khắp thế giới."],
      ["Thách thức lớn nhất với nông nghiệp ven biển Đồng bằng sông Cửu Long hiện nay là gì?", "Xâm nhập mặn và sạt lở bờ sông", ["Thiếu ánh nắng mặt trời", "Đất quá cao so với mực nước biển", "Không có sông ngòi"], "Nước biển dâng và đập thượng nguồn làm mặn lấn sâu vào nội đồng mỗi mùa khô."],
      ["Mô hình “lúa – tôm” giúp nông dân thích ứng với xâm nhập mặn như thế nào?", "Luân canh theo mùa: mùa khô nước mặn nuôi tôm, mùa mưa nước ngọt trồng lúa", ["Trồng lúa trên nước mặn quanh năm", "Nuôi tôm trong ruộng lúa cùng một lúc", "Bỏ lúa, chỉ nuôi tôm quanh năm"], "Mô hình thuận theo chu kỳ mặn – ngọt tự nhiên thay vì cố ngăn mặn tuyệt đối."],
      ["Hướng phát triển “thuận thiên” ở Đồng bằng sông Cửu Long nghĩa là gì?", "Phát triển phù hợp với điều kiện tự nhiên thay vì chống lại nó", ["Xây đê bao kín toàn vùng", "Ngăn mặn tuyệt đối bằng mọi giá", "Chuyển hết đất nông nghiệp sang công nghiệp"], "Nghị quyết 120 của Chính phủ định hướng phát triển bền vững, thích ứng với biến đổi khí hậu."],
    ]),
    createStarterTopic("grade-12-climate-resilience", "Lớp 12 · Thích ứng biến đổi khí hậu", "Thích ứng – giảm nhẹ và giải pháp của Việt Nam", ["12", "🌊", "🌱"], [
      ["“Thích ứng” biến đổi khí hậu khác “giảm nhẹ” ở điểm nào?", "Thích ứng là điều chỉnh để sống chung và giảm thiệt hại; giảm nhẹ là cắt giảm phát thải", ["Hai khái niệm hoàn toàn giống nhau", "Thích ứng là tăng phát thải khí nhà kính", "Giảm nhẹ là bỏ mặc thiên nhiên"], "Ví dụ: trồng rừng ngập mặn là thích ứng; chuyển sang năng lượng mặt trời là giảm nhẹ."],
      ["Vì sao Việt Nam được xếp vào nhóm dễ tổn thương trước biến đổi khí hậu?", "Bờ biển dài, đồng bằng thấp, dân cư đông ở ven biển", ["Vì nằm gần xích đạo nên không có bão", "Vì không có sông ngòi lớn", "Vì khí hậu quá lạnh"], "Nước biển dâng đe dọa trực tiếp đồng bằng sông Cửu Long và dải ven biển miền Trung."],
      ["Trồng và bảo vệ rừng ngập mặn mang lại lợi ích nào?", "Chắn sóng, chống xói lở và là nơi ươm nuôi thủy sản", ["Lấy gỗ xuất khẩu là chính", "Làm nước biển dâng nhanh hơn", "Ngăn tàu thuyền ra khơi"], "Rừng ngập mặn Cần Giờ là “lá chắn xanh” đồng thời lưu trữ carbon rất hiệu quả."],
      ["Biện pháp thích ứng nào phù hợp với nông dân vùng nhiễm mặn?", "Dùng giống lúa chịu mặn và chuyển đổi cơ cấu mùa vụ", ["Tưới thêm nước mặn cho lúa", "Bón thật nhiều phân đạm", "Trồng lúa 3 vụ liên tục"], "Các giống lúa chịu mặn và mô hình lúa – tôm giúp duy trì thu nhập khi mặn xâm nhập."],
      ["Hệ thống cảnh báo sớm thiên tai có tác dụng gì?", "Giúp người dân sơ tán và bảo vệ tài sản kịp thời", ["Ngăn không cho bão hình thành", "Làm bão đổi hướng đi", "Thay thế hoàn toàn hệ thống đê điều"], "Cảnh báo sớm không ngăn được thiên tai nhưng giảm đáng kể thiệt hại về người."],
    ]),
    createStarterTopic("grade-12-global-supply", "Lớp 12 · Chuỗi cung ứng toàn cầu", "Phân công sản xuất, vị thế Việt Nam và rủi ro đứt gãy", ["12", "🚢", "🏭"], [
      ["Chuỗi cung ứng toàn cầu là gì?", "Hệ thống phân công các công đoạn sản xuất qua nhiều quốc gia", ["Một công ty bán hàng online", "Đường dây buôn lậu xuyên quốc gia", "Hệ thống kho của một siêu thị"], "Mỗi nước đảm nhận công đoạn mình có lợi thế để tối ưu chi phí toàn chuỗi."],
      ["Việt Nam tham gia chuỗi cung ứng toàn cầu mạnh nhất ở khâu nào?", "Lắp ráp điện tử, dệt may, da giày", ["Thiết kế chip bán dẫn", "Sản xuất máy bay", "Khai thác dầu khí"], "Nguồn lao động và thu hút FDI giúp Việt Nam trở thành công xưởng lắp ráp của nhiều tập đoàn."],
      ["Đại dịch COVID-19 cho thấy rủi ro nào của chuỗi cung ứng toàn cầu?", "Phụ thuộc vào một nguồn cung dễ bị đứt gãy khi có biến động", ["Chuỗi cung ứng không bao giờ gián đoạn", "Vận tải biển luôn rẻ và ổn định", "Mọi nước đều tự cung tự cấp được"], "Thiếu chip, tắc cảng biển năm 2021 cho thấy chỉ một mắt xích trục trặc cả chuỗi lao đao."],
      ["Xu hướng “nearshoring” (sản xuất gần bờ) nghĩa là gì?", "Chuyển sản xuất về gần thị trường tiêu thụ để giảm rủi ro", ["Đóng cửa mọi nhà máy trên thế giới", "Mỗi nước chỉ sản xuất cho mình", "Tăng phụ thuộc vào một quốc gia"], "Doanh nghiệp chấp nhận chi phí cao hơn để đổi lấy chuỗi cung ứng bền vững, ít đứt gãy."],
      ["Lợi thế cạnh tranh của Việt Nam trong chuỗi cung ứng toàn cầu là gì?", "Lao động dồi dào, chi phí hợp lý, vị trí gần các trung tâm sản xuất châu Á", ["Trữ lượng dầu mỏ vô tận", "Không cần đầu tư hạ tầng", "Đã tự động hóa 100%"], "Muốn tiến sâu hơn vào chuỗi giá trị, Việt Nam cần nâng chất lượng lao động và công nghiệp hỗ trợ."],
    ]),
  ],
  informatics: [
    createStarterTopic("grade-12-javascript-basics", "Lớp 12 · JavaScript cơ bản", "let/const, arrow function và thao tác DOM", ["12", "💻", "⚡"], [
      ["Điểm khác nhau cơ bản giữa let và const là gì?", "let cho phép gán lại giá trị, const không cho gán lại sau khi khởi tạo", ["const cho phép gán lại còn let thì không", "let chỉ dùng cho số, const chỉ dùng cho chuỗi", "Hai từ khóa hoàn toàn giống nhau"], "Dùng const cho giá trị cố định như const PI = 3.14; nhầm ngược hai từ khóa là lỗi rất phổ biến."],
      ["Cách viết hàm mũi tên (arrow function) nào sau đây là đúng?", "const cong = (a, b) => a + b;", ["function cong(a, b) = a + b;", "const cong => (a, b) a + b;", "cong(a, b) -> a + b;"], "Cú pháp chuẩn: tên hàm = (tham số) => biểu thức; thiếu dấu => hoặc sai vị trí ngoặc đều sai."],
      ["Lệnh document.querySelector(‘#nut’) dùng để làm gì?", "Lấy phần tử có id là nut trên trang để thao tác", ["Tạo ra một nút bấm mới", "Xóa toàn bộ nội dung trang web", "Tải lại trang web"], "Đây là cách truy cập DOM bằng bộ chọn CSS: #nut nghĩa là phần tử có id = nut."],
      ["Đoạn code nào gắn xử lý sự kiện khi người dùng bấm vào nút?", "nut.addEventListener(‘click’, () => alert(‘Xin chào’));", ["nut.onClick = ‘click’;", "addEventListener(nut);", "nut.click == true;"], "addEventListener nhận tên sự kiện và hàm xử lý; hàm mũi tên giúp code gọn khi xử lý đơn giản."],
      ["Khi mở một trang web thông thường, code JavaScript chạy ở đâu?", "Trong trình duyệt của người dùng (phía client)", ["Trên máy chủ của Google", "Bên trong file CSS", "Chỉ chạy khi có kết nối internet"], "Trình duyệt có sẵn JavaScript engine nên code chạy ngay trên máy người dùng, không cần cài thêm."],
    ]),
    createStarterTopic("grade-12-cybersecurity-intro", "Lớp 12 · An toàn thông tin", "Bộ ba CIA, phishing, ransomware và biện pháp bảo vệ", ["12", "🔒", "🛡"], [
      ["Ba yếu tố CIA trong an toàn thông tin là gì?", "Bảo mật, toàn vẹn, sẵn sàng", ["Máy tính, Internet, Antivirus", "Tên đăng nhập, mật khẩu, email", "Phần cứng, phần mềm, mạng máy tính"], "Confidentiality – Integrity – Availability: chỉ người được phép mới đọc, dữ liệu không bị sửa trái phép, hệ thống hoạt động khi cần."],
      ["Email giả mạo ngân hàng yêu cầu nhập mã OTP là hình thức tấn công nào?", "Phishing (lừa đảo)", ["Virus máy tính", "Tấn công từ chối dịch vụ", "Sao lưu dữ liệu"], "Ngân hàng thật không bao giờ hỏi OTP hay mật khẩu qua email; luôn kiểm tra địa chỉ người gửi."],
      ["Biện pháp nào giúp bảo vệ tài khoản tốt nhất?", "Mật khẩu mạnh kết hợp xác thực hai lớp (2FA)", ["Dùng một mật khẩu chung cho mọi tài khoản", "Ghi mật khẩu rồi dán lên màn hình", "Tắt hết các bản cập nhật phần mềm"], "Mật khẩu mạnh (dài, đủ loại ký tự) cộng 2FA khiến kẻ xấu khó chiếm tài khoản dù lộ mật khẩu."],
      ["Ransomware gây hại bằng cách nào?", "Mã hóa dữ liệu của nạn nhân rồi đòi tiền chuộc", ["Xóa hết ảnh trên điện thoại", "Làm cho máy tính chạy nhanh hơn", "Gửi email chúc mừng nạn nhân"], "Khi đã bị mã hóa mà không có bản sao lưu, nạn nhân gần như mất trắng dữ liệu."],
      ["Vì sao cần sao lưu (backup) dữ liệu định kỳ?", "Để khôi phục khi bị mất, hỏng thiết bị hoặc mã độc tấn công", ["Để máy tính chạy nhanh hơn", "Để tăng dung lượng ổ cứng", "Để chia sẻ dữ liệu cho nhiều người"], "Quy tắc 3-2-1: 3 bản sao, 2 loại phương tiện khác nhau, 1 bản ở nơi khác."],
    ]),
    createStarterTopic("grade-12-data-visualization", "Lớp 12 · Trực quan hóa dữ liệu", "Chọn biểu đồ đúng và tránh gây hiểu lầm", ["12", "📊", "🎨"], [
      ["Muốn so sánh doanh thu của 4 quý trong năm, nên dùng biểu đồ nào?", "Biểu đồ cột", ["Biểu đồ tròn", "Biểu đồ phân tán", "Sơ đồ tư duy"], "Biểu đồ cột giúp so sánh trực quan độ lớn giữa các nhóm độc lập như các quý."],
      ["Biểu đồ đường phù hợp nhất để thể hiện điều gì?", "Xu hướng thay đổi của dữ liệu theo thời gian", ["Tỉ lệ thành phần tại một thời điểm", "So sánh hai nhóm độc lập", "Danh sách các công việc"], "Đường nối các điểm theo trục thời gian làm nổi bật xu hướng tăng, giảm hay dao động."],
      ["Muốn thể hiện tỉ lệ các hệ điều hành điện thoại đang dùng, chọn biểu đồ nào?", "Biểu đồ tròn", ["Biểu đồ đường", "Biểu đồ cột 3D nhiều lớp", "Bảng số liệu thô"], "Biểu đồ tròn thể hiện các phần của một tổng thể 100%, mỗi lát cắt là một tỉ lệ."],
      ["Thủ thuật nào sau đây khiến biểu đồ gây hiểu lầm?", "Trục tung không bắt đầu từ 0, phóng đại chênh lệch nhỏ", ["Dùng màu sắc hài hòa, dễ nhìn", "Ghi chú thích và đơn vị rõ ràng", "Sắp xếp các cột theo thứ tự"], "Chênh lệch 2% có thể trông như gấp đôi nếu trục tung bị cắt ngắn — luôn kiểm tra gốc trục."],
      ["Trước khi vẽ biểu đồ, việc quan trọng nhất là gì?", "Xác định thông điệp muốn truyền tải rồi chọn loại biểu đồ phù hợp", ["Chọn màu sắc đẹp nhất", "Thêm càng nhiều hiệu ứng 3D càng tốt", "Vẽ xong rồi mới nghĩ thông điệp"], "Biểu đồ đẹp mà sai loại sẽ truyền đạt sai thông điệp; mục đích luôn đi trước hình thức."],
    ]),
  ],
};
const pracB1 = {
  technology: [
    createStarterTopic("grade-12-smart-home", "Lớp 12 · Nhà thông minh", "IoT, cảm biến và kịch bản tự động trong nhà", ["12", "🏠", "📡"], [
      ["Thiết bị nào sau đây là ví dụ về cảm biến trong nhà thông minh?", "Cảm biến chuyển động tự bật đèn khi có người", ["Bóng đèn dây tóc thông thường", "Công tắc bật tắt thủ công", "Ổ cắm hẹn giờ cơ học"], "Cảm biến chuyển động nhận biết sự hiện diện của người và ra lệnh bật đèn; các thiết bị còn lại không có khả năng cảm nhận môi trường."],
      ["IoT trong nhà thông minh có nghĩa là gì?", "Các thiết bị kết nối Internet và trao đổi dữ liệu với nhau", ["Điện thoại điều khiển tivi bằng hồng ngoại", "Camera ghi hình lưu vào thẻ nhớ, không cần mạng", "Máy tính nối mạng để học online"], "IoT là mạng lưới thiết bị kết nối Internet, trao đổi dữ liệu với nhau; điều khiển hồng ngoại hay camera offline không phải IoT."],
      ["“Kịch bản” trong nhà thông minh hoạt động như thế nào?", "Cảm biến nhận biết điều kiện rồi tự động điều khiển thiết bị", ["Người dùng phải bấm nút cho từng thiết bị", "Thiết bị tự hoạt động ngẫu nhiên không theo quy tắc", "Chỉ hoạt động khi điện thoại ở trong nhà"], "Kịch bản là quy tắc “nếu – thì”: cảm biến đo điều kiện môi trường, hệ thống tự điều khiển thiết bị theo quy tắc đã đặt."],
      ["Rủi ro lớn nhất khi dùng nhiều thiết bị thông minh là gì?", "Bị kẻ xấu xâm nhập qua mạng nếu bảo mật kém", ["Thiết bị tiêu thụ điện nhiều hơn hẳn đồ thường", "Thiết bị nhanh hỏng hơn đồ cơ học", "Phải thay toàn bộ dây điện trong nhà"], "Thiết bị IoT kết nối mạng nên có thể bị tấn công; cần đổi mật khẩu mặc định, cập nhật phần mềm và dùng mạng an toàn."],
      ["Muốn đèn sân tự bật khi trời tối, cần kết hợp những gì?", "Cảm biến ánh sáng và công tắc thông minh", ["Camera an ninh và loa thông minh", "Điều hòa và cảm biến nhiệt độ", "Rèm tự động và micro thu âm"], "Cảm biến ánh sáng đo độ tối, công tắc thông minh nhận tín hiệu và bật đèn; các cặp còn lại không liên quan đến việc bật đèn theo ánh sáng."],
    ]),
    createStarterTopic("grade-12-ev-technology", "Lớp 12 · Công nghệ xe điện", "Pin lithium-ion, sạc và phanh tái tạo", ["12", "🚗", "🔋"], [
      ["Loại pin phổ biến nhất trên xe điện hiện nay là gì?", "Pin lithium-ion", ["Ắc quy chì-axit", "Pin kiềm dùng một lần", "Tấm pin mặt trời"], "Pin lithium-ion có mật độ năng lượng cao, nhẹ và sạc lại được nhiều lần; ắc quy chì quá nặng, tấm pin mặt trời không phải pin tích trữ."],
      ["Phanh tái tạo trên xe điện có tác dụng chính là gì?", "Chuyển động năng khi phanh thành điện nạp lại pin", ["Giúp má phanh không bao giờ bị mòn", "Tăng tốc xe nhanh hơn khi đạp ga", "Giảm tiếng ồn của mô-tơ điện"], "Khi phanh, mô-tơ hoạt động như máy phát, thu hồi một phần động năng thành điện; giảm mòn má phanh chỉ là tác dụng phụ."],
      ["Mức độ thân thiện môi trường của xe điện còn phụ thuộc vào yếu tố nào?", "Nguồn điện dùng để sạc pin", ["Loại lốp xe sử dụng", "Hãng sản xuất xe", "Tốc độ sạc pin"], "Xe điện không xả khí thải tại chỗ, nhưng nếu điện sạc từ nhiệt điện than thì dấu chân carbon vẫn lớn; sạc bằng điện tái tạo mới thật sự sạch."],
      ["Ưu điểm nổi bật của xe điện khi chạy trong phố là gì?", "Không xả khí thải tại chỗ và vận hành êm", ["Sạc đầy nhanh hơn đổ xăng", "Giá mua ban đầu luôn rẻ hơn xe xăng", "Không bao giờ cần bảo dưỡng"], "Xe điện giúp giảm ô nhiễm không khí đô thị và tiếng ồn; sạc vẫn lâu hơn đổ xăng, giá mua ban đầu thường cao hơn."],
      ["Vì sao pin dung lượng lớn cũng có mặt trái?", "Pin lớn nặng hơn và cần thời gian sạc lâu hơn", ["Pin lớn làm xe chạy chậm hơn hẳn", "Pin lớn gây ồn khi vận hành", "Pin lớn không dùng được sạc nhanh"], "Dung lượng lớn đồng nghĩa khối lượng lớn và thời gian nạp đầy lâu hơn; đây là sự đánh đổi khi thiết kế xe điện."],
    ]),
    createStarterTopic("grade-12-biotech-intro", "Lớp 12 · Công nghệ sinh học", "DNA tái tổ hợp, CRISPR và ứng dụng", ["12", "🧬", "🔬"], [
      ["Kỹ thuật DNA tái tổ hợp là gì?", "Đưa gene mong muốn vào sinh vật để tạo sản phẩm mới", ["Nhân bản toàn bộ cơ thể sinh vật", "Ghép hai loài khác nhau thành một loài mới", "Gây đột biến gene ngẫu nhiên bằng hóa chất"], "DNA tái tổ hợp cắt, nối đoạn gene mong muốn vào hệ gene vật chủ; khác với nhân bản vô tính hay đột biến ngẫu nhiên."],
      ["Insulin chữa tiểu đường hiện nay được sản xuất bằng cách nào?", "Vi khuẩn mang gene người tổng hợp insulin", ["Chiết xuất từ tuyến tụy của lợn", "Tổng hợp hoàn toàn bằng phản ứng hóa học", "Chiết xuất từ cây thuốc nam"], "Trước đây insulin chiết từ tụy lợn, nay dùng vi khuẩn E. coli mang gene người cho sản lượng lớn và ít gây dị ứng hơn."],
      ["Công nghệ CRISPR nổi bật ở điểm nào?", "Chỉnh sửa gene với độ chính xác cao", ["Tạo ra sinh vật hoàn toàn mới từ đầu", "Sao chép toàn bộ bộ gene của sinh vật", "Đọc trình tự gene nhanh nhất"], "CRISPR cắt DNA đúng vị trí mong muốn như “kéo phân tử”, cho phép sửa gene bệnh chính xác hơn các kỹ thuật cũ."],
      ["Ứng dụng nào sau đây thuộc công nghệ sinh học?", "Giống lúa chịu hạn, kháng sâu bệnh", ["Máy gặt đập liên hợp", "Phân bón hóa học NPK", "Hệ thống tưới nhỏ giọt"], "Tạo giống bằng can thiệp gene là công nghệ sinh học; máy móc, phân bón, hệ thống tưới thuộc kỹ thuật nông nghiệp cơ khí, hóa học."],
      ["Vấn đề đạo đức lớn nhất của chỉnh sửa gene người là gì?", "Thay đổi di truyền có thể truyền cho thế hệ sau ngoài ý muốn", ["Chi phí nghiên cứu quá cao", "Kỹ thuật thực hiện quá phức tạp", "Thiếu nhân lực phòng thí nghiệm"], "Sửa gene dòng mầm ảnh hưởng con cháu mà họ không được lựa chọn; chi phí hay độ phức tạp chỉ là khó khăn kỹ thuật."],
    ]),
  ],
  civics: [
    createStarterTopic("grade-12-voting-rights", "Lớp 12 · Quyền bầu cử", "Tuổi bầu cử, ứng cử và nguyên tắc bầu cử", ["12", "🗳", "⚖"], [
      ["Theo Hiến pháp 2013, công dân từ bao nhiêu tuổi có quyền bầu cử?", "Đủ 18 tuổi", ["Đủ 16 tuổi", "Đủ 20 tuổi", "Đủ 21 tuổi"], "Đủ 18 tuổi được bầu cử; đủ 21 tuổi mới được ứng cử. Nhiều bạn nhầm hai độ tuổi này với nhau."],
      ["Công dân từ bao nhiêu tuổi có quyền ứng cử đại biểu Quốc hội?", "Đủ 21 tuổi trở lên", ["Đủ 18 tuổi trở lên", "Đủ 25 tuổi trở lên", "Đủ 30 tuổi trở lên"], "Hiến pháp quy định quyền ứng cử từ đủ 21 tuổi, cao hơn tuổi bầu cử (18 tuổi)."],
      ["Nhiệm kỳ mỗi khóa Quốc hội là bao lâu?", "5 năm", ["4 năm", "6 năm", "3 năm"], "Hiến pháp 2013 quy định nhiệm kỳ mỗi khóa Quốc hội là 5 năm."],
      ["Nguyên tắc nào KHÔNG đúng về bầu cử ở Việt Nam?", "Bỏ phiếu công khai trước cử tri", ["Phổ thông", "Bình đẳng", "Trực tiếp và bỏ phiếu kín"], "Bầu cử phải bỏ phiếu kín để cử tri tự do thể hiện ý chí; bỏ phiếu công khai vi phạm nguyên tắc này."],
      ["Mỗi cử tri được ghi tên vào bao nhiêu danh sách cử tri?", "Một danh sách ở nơi cư trú", ["Hai danh sách: quê quán và nơi ở", "Không giới hạn số danh sách", "Danh sách của đơn vị công tác"], "Mỗi cử tri chỉ ghi tên một danh sách cử tri nơi cư trú để bảo đảm nguyên tắc bình đẳng, một người một phiếu."],
    ]),
    createStarterTopic("grade-12-consumer-protection", "Lớp 12 · Bảo vệ người tiêu dùng", "Quyền lợi, đổi trả và khiếu nại", ["12", "🛒", "🧾"], [
      ["Luật Bảo vệ quyền lợi người tiêu dùng hiện hành được ban hành năm nào?", "Năm 2023", ["Năm 2010", "Năm 2018", "Năm 2020"], "Luật năm 2010 đã được thay thế bằng Luật Bảo vệ quyền lợi người tiêu dùng năm 2023 với nhiều quy định mới, nhất là về mua bán online."],
      ["Mua điện thoại bị lỗi phần cứng trong thời gian bảo hành, bạn có quyền gì?", "Yêu cầu sửa chữa hoặc đổi máy theo chính sách bảo hành", ["Được hoàn tiền trong mọi trường hợp", "Tự sửa ở cửa hàng khác rồi đòi tiền hãng", "Đổi sang mẫu đắt tiền hơn miễn phí"], "Người tiêu dùng được đổi, trả, bảo hành theo cam kết của người bán; hoàn tiền mọi trường hợp hay đổi mẫu đắt hơn không phải quyền mặc định."],
      ["Khi khiếu nại, chứng từ quan trọng nhất cần giữ là gì?", "Hóa đơn, chứng từ mua hàng", ["Ảnh chụp mặt tiền cửa hàng", "Tin nhắn chào hàng của shop", "Danh thiếp nhân viên bán hàng"], "Hóa đơn chứng minh giao dịch mua bán, là căn cứ pháp lý khi khiếu nại; các thứ còn lại chỉ mang tính tham khảo."],
      ["Quyền nào sau đây của người tiêu dùng được luật quy định?", "Được cung cấp thông tin đầy đủ, trung thực về hàng hóa", ["Được mua hàng rẻ hơn giá niêm yết", "Được đổi trả hàng trong mọi trường hợp", "Được miễn phí vận chuyển khi mua online"], "Người bán phải cung cấp thông tin trung thực; đổi trả, miễn phí vận chuyển tùy chính sách từng nơi, không phải quyền đương nhiên."],
      ["Khi quyền lợi bị xâm phạm, người tiêu dùng có thể làm gì?", "Khiếu nại, hòa giải hoặc khởi kiện theo quy định", ["Đăng tin vu khống người bán trên mạng", "Tự ý lấy hàng khác của cửa hàng", "Chặn mọi liên lạc với người bán"], "Pháp luật cho người tiêu dùng nhiều kênh bảo vệ quyền lợi; vu khống hay tự ý lấy hàng là hành vi vi phạm pháp luật."],
    ]),
    createStarterTopic("grade-12-anti-corruption", "Lớp 12 · Phòng chống tham nhũng", "Luật PCTN 2018, kê khai tài sản, tố giác", ["12", "⚖", "🛡"], [
      ["Tham nhũng là hành vi của đối tượng nào?", "Người có chức vụ, quyền hạn lợi dụng chức vụ vì vụ lợi", ["Bất kỳ công dân nào vi phạm pháp luật", "Doanh nghiệp trốn thuế", "Người dân không tố giác tội phạm"], "Tham nhũng gắn với người có chức vụ, quyền hạn; các hành vi còn lại là vi phạm pháp luật nhưng không phải tham nhũng."],
      ["Luật Phòng, chống tham nhũng hiện hành được ban hành năm nào?", "Năm 2018", ["Năm 2005", "Năm 2012", "Năm 2022"], "Luật PCTN năm 2005 đã được thay thế bằng Luật Phòng, chống tham nhũng năm 2018."],
      ["Việc kê khai tài sản, thu nhập của cán bộ nhằm mục đích gì?", "Giám sát, phát hiện tài sản bất minh", ["Tính thuế thu nhập cá nhân", "Xếp hạng thi đua cán bộ", "Cung cấp tin cho báo chí"], "Kê khai tài sản là công cụ giám sát để phát hiện tài sản tăng bất thường, không giải trình được; khác với kê khai thuế."],
      ["Người tố cáo hành vi tham nhũng được pháp luật đối xử thế nào?", "Được bảo vệ danh tính và các quyền lợi hợp pháp", ["Không được pháp luật bảo vệ", "Chỉ được tố cáo ẩn danh", "Bị buộc phải ra làm chứng công khai"], "Luật PCTN quy định bảo vệ người tố cáo; tố cáo có thể bằng nhiều hình thức và danh tính được giữ bí mật khi có yêu cầu."],
      ["Hành vi nào sau đây là tham nhũng?", "Nhận tiền để “làm nhanh” thủ tục hành chính", ["Nhận quà Tết của người thân trong gia đình", "Làm thêm ngoài giờ hành chính", "Từ chối nhận quà biếu của doanh nghiệp"], "Lợi dụng chức vụ để nhận tiền làm nhanh thủ tục là tham nhũng; nhận quà của người thân hay từ chối quà biếu không vi phạm."],
    ]),
  ],
  "physical-education": [
    createStarterTopic("grade-12-tennis-basics", "Lớp 12 · Tennis cơ bản", "Giao bóng, cách tính điểm và deuce", ["12", "🎾", "🏅"], [
      ["Khi giao bóng, người chơi phải đứng ở đâu?", "Sau đường biên ngang (baseline)", ["Trong ô giao bóng", "Ngay sát lưới", "Giữa sân"], "Người giao bóng đứng sau đường biên ngang; bóng phải rơi vào ô giao bóng chéo sân bên kia."],
      ["Bóng giao hợp lệ phải rơi vào vị trí nào?", "Ô giao bóng chéo sân của đối thủ", ["Bất kỳ vị trí nào bên sân đối thủ", "Ô giao bóng cùng phía với người giao", "Ngay chân lưới bên sân mình"], "Luật yêu cầu bóng giao rơi vào ô chéo sân; rơi sai ô là lỗi giao bóng."],
      ["Deuce là tỉ số nào trong một game?", "40–40", ["30–30", "15–40", "40–15"], "Khi hai bên cùng 40 điểm gọi là deuce; từ đây phải thắng cách biệt hai điểm mới thắng game."],
      ["Muốn thắng game từ điểm deuce cần điều kiện gì?", "Thắng hai điểm liên tiếp", ["Thắng thêm một điểm", "Thắng ba điểm liên tiếp", "Chờ đối thủ tự đánh hỏng"], "Từ deuce, thắng một điểm được “lợi thế”, phải thắng thêm điểm nữa; nếu thua điểm lợi thế thì quay lại deuce."],
      ["Muốn thắng một set tennis cần điều kiện nào?", "Thắng 6 game và hơn đối thủ ít nhất 2 game", ["Thắng 5 game là đủ", "Thắng nhiều hơn đối thủ 1 game", "Thắng 4 game liên tiếp"], "Set thường kết thúc 6–4, 6–3...; nếu 5–5 phải đánh tiếp đến khi cách biệt 2 game hoặc loạt tie-break theo điều lệ giải."],
    ]),
    createStarterTopic("grade-12-martial-arts-adv", "Lớp 12 · Võ thuật nâng cao", "Chuỗi đòn liên hoàn, đối kháng và võ đức", ["12", "🥋", "💪"], [
      ["Ở trình độ nâng cao, võ sinh tập trung vào điều gì?", "Kết hợp đòn thành chuỗi liên hoàn và đối kháng có kiểm soát", ["Chỉ tập các thế đứng cơ bản", "Học thuộc tên các đòn võ", "Tập một mình không cần đối tác"], "Trình độ nâng cao là biến đòn rời rạc thành chuỗi liên hoàn và áp dụng trong đối kháng có kiểm soát."],
      ["Ngoài kỹ thuật, yếu tố nào quyết định hiệu quả của đòn thế?", "Thể lực, tốc độ phản xạ và khả năng đọc đòn", ["Trang phục võ phục đẹp", "Chiều cao vượt trội", "Biết càng nhiều đòn càng tốt"], "Đòn đẹp mà chậm, yếu và không đọc được đối thủ thì không hiệu quả; thể lực và phản xạ là nền tảng."],
      ["“Võ đức” trong võ thuật có nghĩa là gì?", "Kỷ luật, tôn trọng đối thủ và không dùng võ gây gổ", ["Tuyệt chiêu bí truyền của môn phái", "Nghi lễ chào trước khi thi đấu", "Cấp đai cao nhất trong võ thuật"], "Võ đức là đạo đức người học võ: kỷ luật, tôn trọng, bảo vệ kẻ yếu; tuyệt đối không dùng võ để bắt nạt."],
      ["Khi đối kháng tập luyện, nguyên tắc an toàn quan trọng là gì?", "Kiểm soát lực đòn và dùng đồ bảo hộ", ["Đánh hết sức để quen đòn thật", "Không cần khởi động kỹ", "Cố chịu đau để tăng sức chịu đựng"], "Đối kháng tập luyện phải kiểm soát lực, đeo bảo hộ và khởi động kỹ; đánh hết sức dễ gây chấn thương cho bạn tập."],
      ["Ví dụ nào sau đây là một chuỗi đòn liên hoàn?", "Đỡ đòn tay, xoay người đá vòng cầu, lùi về thế thủ", ["Đứng tấn 10 phút không di chuyển", "Chào đối thủ rồi kết thúc buổi tập", "Đấm một cú duy nhất thật mạnh"], "Chuỗi liên hoàn nối nhiều động tác thành một mạch: phòng thủ – phản công – trở về thế thủ an toàn."],
    ]),
    createStarterTopic("grade-12-athlete-nutrition", "Lớp 12 · Dinh dưỡng thể thao", "Protein, carbohydrate và bù nước", ["12", "🍎", "💧"], [
      ["Chất nào là nhiên liệu chính cho buổi tập luyện?", "Carbohydrate", ["Protein", "Chất béo", "Vitamin"], "Carbohydrate chuyển hóa thành năng lượng nhanh nhất cho cơ bắp; protein chủ yếu để phục hồi, xây dựng cơ."],
      ["Vận động viên cần bao nhiêu protein cho mỗi kg cân nặng mỗi ngày?", "Khoảng 1,2–2 g", ["Khoảng 0,5 g", "Khoảng 3–4 g", "Càng nhiều càng tốt"], "Nhu cầu protein của VĐV khoảng 1,2–2 g/kg/ngày; ăn quá nhiều không giúp cơ to nhanh hơn mà gây lãng phí."],
      ["Vận động viên 60 kg tập sức bền cần khoảng bao nhiêu protein mỗi ngày?", "72–120 g", ["30–40 g", "150–200 g", "200–250 g"], "Lấy 60 kg nhân với 1,2–2 g/kg được 72–120 g protein mỗi ngày."],
      ["Vì sao phải uống nước trước, trong và sau khi tập?", "Bù lượng nước mất qua mồ hôi, giữ sức bền", ["Để tăng cân nhanh hơn", "Để cơ bắp to ra ngay lập tức", "Để giảm cảm giác đói"], "Mất nước làm giảm sức bền, khả năng tập trung và tăng nguy cơ chuột rút, say nóng."],
      ["Trước giờ thi đấu 1–2 giờ nên ăn như thế nào?", "Ăn nhẹ, dễ tiêu, giàu carbohydrate", ["Ăn thật no để có sức", "Nhịn ăn để người nhẹ", "Chỉ uống nước ngọt có gas"], "Bữa nhẹ giàu carbohydrate dễ tiêu cung cấp năng lượng mà không gây nặng bụng; ăn quá no hay nhịn ăn đều làm giảm phong độ."],
    ]),
  ],
  music: [
    createStarterTopic("grade-12-music-production", "Lớp 12 · Sản xuất âm nhạc", "DAW, mixing và mastering", ["12", "🎧", "🎚"], [
      ["DAW trong sản xuất âm nhạc là gì?", "Phần mềm phòng thu số để thu âm và dựng nhạc", ["Loại micro thu âm chuyên nghiệp", "Định dạng file nhạc chất lượng cao", "Thiết bị loa kiểm âm"], "DAW (Digital Audio Workstation) như FL Studio, Cubase là phần mềm dựng nhạc; micro và loa là thiết bị phần cứng."],
      ["Mixing (hòa âm phối khí) là công đoạn nào?", "Cân bằng âm lượng, vị trí các nhạc cụ trong bản nhạc", ["Viết giai điệu cho ca khúc", "Quay MV cho bài hát", "Đăng nhạc lên nền tảng số"], "Mixing chỉnh âm lượng, tần số, hiệu ứng của từng track để bản nhạc hài hòa; khác với sáng tác hay phát hành."],
      ["Mastering là bước nào trong quy trình sản xuất?", "Hoàn thiện âm thanh cuối cùng trước khi phát hành", ["Thu âm giọng hát đầu tiên", "Sáng tác lời bài hát", "Chọn ca sĩ thể hiện"], "Mastering là khâu cuối: chuẩn hóa âm lượng, độ sáng để bài hát nghe tốt trên mọi thiết bị."],
      ["Phần mềm nào sau đây là DAW?", "FL Studio", ["Spotify", "Photoshop", "PowerPoint"], "FL Studio là phần mềm dựng nhạc; Spotify là nền tảng nghe nhạc, Photoshop và PowerPoint không liên quan âm thanh."],
      ["Vì sao cùng một bài hát, bản mix khác nhau cho cảm xúc khác nhau?", "Cách cân bằng nhạc cụ và hiệu ứng thay đổi điểm nhấn", ["Lời bài hát bị thay đổi", "Ca sĩ hát khác nhau", "Tốc độ bài hát luôn đổi"], "Mixing quyết định nhạc cụ nào nổi bật, không gian âm thanh ra sao nên cùng bản thu vẫn cho cảm xúc khác nhau."],
    ]),
    createStarterTopic("grade-12-vietnamese-pop", "Lớp 12 · Nhạc trẻ Việt", "V-pop, nghệ sĩ và bản quyền", ["12", "🎤", "🎶"], [
      ["V-pop là cách gọi của dòng nhạc nào?", "Nhạc trẻ Việt Nam hiện đại", ["Nhạc dân ca Việt Nam", "Nhạc cổ điển Việt Nam", "Nhạc thiếu nhi Việt Nam"], "V-pop (Vietnamese pop) chỉ dòng nhạc trẻ Việt hiện đại, kết hợp pop, R&B, hip-hop với màu sắc dân gian."],
      ["Dòng nhạc nào thường được kết hợp trong V-pop hiện nay?", "Pop, R&B, hip-hop cùng màu sắc dân gian", ["Chỉ nhạc thính phòng", "Chỉ nhạc giao hưởng", "Chỉ nhạc không lời"], "V-pop đặc trưng bởi sự pha trộn hiện đại và chất liệu dân gian Việt Nam."],
      ["Cách nào thể hiện sự ủng hộ đúng đắn với nghệ sĩ V-pop?", "Nghe nhạc có bản quyền trên nền tảng hợp pháp", ["Tải nhạc lậu về máy miễn phí", "Dùng nhạc của họ làm nền video kiếm tiền không xin phép", "Chia sẻ file nhạc crack cho bạn bè"], "Lượt nghe hợp pháp mang lại thu nhập cho nghệ sĩ; dùng nhạc có bản quyền làm nền video thương mại cần xin phép."],
      ["Điểm chung của nhiều bản hit V-pop là gì?", "Giai điệu bắt tai, dễ nhớ", ["Lời ca thật dài và khó hiểu", "Chỉ dùng một nhạc cụ duy nhất", "Không có phần điệp khúc"], "Điệp khúc bắt tai, dễ thuộc là “vũ khí” của nhạc pop; lời khó hiểu hay thiếu điệp khúc khó thành hit."],
      ["Nghệ sĩ V-pop cần chú ý điều gì về bản quyền?", "Xin phép khi dùng nhạc của người khác", ["Cứ dùng nhạc ngoại vì không ai biết", "Bản quyền chỉ áp dụng cho nhạc nước ngoài", "Nhạc trên mạng là miễn phí bản quyền"], "Dùng beat, sample của người khác mà không xin phép là vi phạm bản quyền, có thể bị gỡ nhạc và bồi thường."],
    ]),
    createStarterTopic("grade-12-concert-etiquette", "Lớp 12 · Văn hóa nghe nhạc", "Ứng xử khi xem hòa nhạc, liveshow", ["12", "🎟", "🤫"], [
      ["Vì sao nên đến xem concert sớm?", "Ổn định chỗ ngồi, không làm phiền người khác", ["Để được gặp riêng nghệ sĩ", "Để được giảm giá vé", "Để chọn bài hát biểu diễn"], "Đến sớm giúp ổn định chỗ ngồi trước giờ diễn; đến muộn chen lấn làm phiền khán giả xung quanh."],
      ["Trước khi hòa nhạc bắt đầu, cần làm gì với điện thoại?", "Tắt hoặc để chế độ im lặng", ["Nghe máy nhanh rồi tắt", "Để chuông to cho vui", "Mở loa ngoài xem video"], "Tiếng chuông giữa buổi diễn phá vỡ không khí và thiếu tôn trọng nghệ sĩ, khán giả."],
      ["Hành vi nào thể hiện văn hóa khi xem concert?", "Tắt chuông điện thoại, không che tầm nhìn người khác", ["Livestream toàn bộ buổi diễn lên mạng", "Bật flash chụp ảnh liên tục", "Nói chuyện to lúc nghệ sĩ biểu diễn"], "Tôn trọng bản quyền chương trình và không gian chung của khán giả là phép lịch sự cơ bản."],
      ["Ở hòa nhạc cổ điển, khán giả thường làm gì giữa các chương nhạc?", "Giữ im lặng tuyệt đối", ["Vỗ tay thật to", "Hò reo cổ vũ", "Đứng dậy đi lại"], "Khán giả nhạc cổ điển giữ im lặng giữa các chương, chỉ vỗ tay khi tác phẩm kết thúc hoàn toàn."],
      ["Vỗ tay đúng lúc trong concert thể hiện điều gì?", "Sự tôn trọng và cổ vũ nghệ sĩ", ["Muốn chương trình kết thúc sớm", "Muốn được nghệ sĩ chú ý riêng", "Thể hiện mình hiểu nhạc hơn người khác"], "Tràng pháo tay là cách khán giả bày tỏ sự trân trọng với phần trình diễn của nghệ sĩ."],
    ]),
  ],
  "visual-arts": [
    createStarterTopic("grade-12-digital-illustration", "Lớp 12 · Minh họa số", "Đồ họa vector, raster và bản quyền", ["12", "🎨", "🖌"], [
      ["Ưu điểm của đồ họa vector so với raster là gì?", "Phóng to không bị vỡ hình", ["Màu sắc rực rỡ hơn", "Vẽ tay tự do hơn", "File luôn nhẹ hơn"], "Vector dùng công thức toán học nên phóng to bao nhiêu cũng sắc nét; raster phóng to quá sẽ thấy điểm ảnh."],
      ["Đồ họa raster phù hợp với loại tranh nào?", "Tranh chi tiết, chuyển màu mượt như vẽ tay", ["Logo cần in mọi kích cỡ", "Chữ viết cần phóng to", "Biểu tượng đơn sắc"], "Raster thể hiện tốt tranh chi tiết, đổ bóng mượt; logo và biểu tượng cần phóng to thì dùng vector."],
      ["Điểm khác biệt lớn của minh họa số so với tranh khắc gỗ Đông Hồ là gì?", "Dễ chỉnh sửa, nhân bản và chia sẻ", ["Luôn đẹp hơn tranh truyền thống", "Không cần kỹ năng vẽ", "In ra giấy dó được ngay"], "File số sửa, sao chép, gửi đi dễ dàng; tranh khắc gỗ in thủ công từng bản, mỗi bản đều tốn công."],
      ["Dụng cụ nào dùng để vẽ minh họa số?", "Bảng vẽ và bút cảm ứng", ["Khung cửi dệt vải", "Dao khắc gỗ", "Khuôn in lụa"], "Họa sĩ số vẽ bằng bút cảm ứng trên bảng vẽ kết nối máy tính; dao khắc, khuôn in thuộc nghề thủ công truyền thống."],
      ["Khi muốn dùng tranh của họa sĩ khác, điều đúng về bản quyền là gì?", "Xin phép hoặc dùng tranh được cấp phép", ["Cứ dùng vì trên mạng là miễn phí", "Sửa một chút là thành của mình", "Chỉ cần không in ra là được"], "Tranh đăng trên mạng vẫn có bản quyền; sửa nhỏ không xóa quyền tác giả, dùng sai mục đích vẫn vi phạm."],
    ]),
    createStarterTopic("grade-12-fashion-history", "Lớp 12 · Lịch sử thời trang", "Các trào lưu và bối cảnh xã hội", ["12", "👗", "📜"], [
      ["Trang phục nào đã trở thành biểu tượng văn hóa Việt Nam?", "Áo dài", ["Quần âu", "Váy xòe phương Tây", "Comple"], "Áo dài từ trang phục thường ngày đầu thế kỷ XX trở thành biểu tượng văn hóa, được cách tân cho đời sống hiện đại."],
      ["Thập niên 1970 ở phương Tây nổi bật với kiểu trang phục nào?", "Quần ống loe", ["Váy bút chì công sở", "Áo dài cách tân", "Comple ba mảnh"], "Quần ống loe là biểu tượng thời trang thập niên 1970, gắn với văn hóa nhạc rock và phong trào hippie."],
      ["Chất liệu và công nghệ dệt may ảnh hưởng thời trang thế nào?", "Tạo ra kiểu dáng mới trước đây không may được", ["Không ảnh hưởng gì đến kiểu dáng", "Chỉ làm quần áo đắt hơn", "Chỉ dùng cho thời trang cao cấp"], "Vải co giãn, vải kỹ thuật mới cho phép những phom dáng mà chất liệu cũ không làm được."],
      ["Phong cách tối giản (minimalism) thịnh hành vào thập niên nào?", "Thập niên 1990", ["Thập niên 1960", "Thập niên 1970", "Thập niên 2010"], "Thập niên 1990 nổi bật với thời trang tối giản: đường cắt gọn, màu trung tính, ít chi tiết rườm rà."],
      ["Tìm hiểu lịch sử thời trang giúp ích gì?", "Hiểu bối cảnh xã hội đằng sau mỗi xu hướng", ["Biết cách may mọi loại trang phục", "Đoán được giá quần áo tương lai", "Trở thành nhà thiết kế ngay"], "Mỗi trào lưu thời trang đều phản ánh kinh tế, văn hóa của thời kỳ đó; hiểu bối cảnh mới hiểu vì sao xu hướng cũ quay lại."],
    ]),
    createStarterTopic("grade-12-public-art", "Lớp 12 · Nghệ thuật công cộng", "Tranh tường, tượng đài và không gian chung", ["12", "🖼", "🏙"], [
      ["Nghệ thuật công cộng khác triển lãm trong bảo tàng ở điểm nào?", "Đặt ở không gian chung, mọi người xem miễn phí", ["Chỉ nghệ sĩ nổi tiếng được tham gia", "Tác phẩm luôn nhỏ hơn", "Không cần xin phép trưng bày"], "Tranh tường, tượng đài ngoài trời ai cũng thưởng thức được miễn phí; triển lãm bảo tàng thường cần vé và không gian kín."],
      ["Tác phẩm nghệ thuật công cộng tốt cần gắn với điều gì?", "Câu chuyện, lịch sử của địa phương", ["Giá trị tiền tệ thật cao", "Kích thước càng lớn càng tốt", "Màu sắc thật lòe loẹt"], "Tác phẩm kể câu chuyện của cộng đồng nơi nó đứng thì được người dân yêu mến và giữ gìn lâu dài."],
      ["Vì sao chất liệu của tác phẩm ngoài trời cần đặc biệt?", "Chịu được nắng mưa, thời tiết", ["Để trông đắt tiền hơn", "Để dễ di chuyển", "Để nhẹ khi treo lên"], "Tác phẩm ngoài trời phơi nắng mưa quanh năm nên cần chất liệu bền, chống ăn mòn, phai màu."],
      ["Ví dụ nào sau đây là nghệ thuật công cộng?", "Tranh tường ở con hẻm thành phố", ["Tranh treo trong phòng khách nhà riêng", "Bộ sưu tập tem cá nhân", "Ảnh nền điện thoại"], "Tranh tường nơi công cộng mọi người cùng xem là nghệ thuật công cộng; tranh trong nhà riêng hay ảnh nền điện thoại thì không."],
      ["Hành vi đúng với tác phẩm nghệ thuật công cộng là gì?", "Thưởng thức, giữ gìn, không vẽ bậy", ["Vẽ thêm cho đẹp hơn", "Khắc tên mình lên tác phẩm", "Mang một phần về làm kỷ niệm"], "Tác phẩm công cộng là tài sản chung; vẽ bậy, khắc tên hay lấy cắp đều là phá hoại."],
    ]),
  ],
  "national-defense": [
    createStarterTopic("grade-12-military-tech", "Lớp 12 · Công nghệ quân sự", "Drone, radar, vệ tinh và tác chiến mạng", ["12", "🛰", "🤖"], [
      ["Drone quân sự có ưu điểm gì so với máy bay có người lái?", "Trinh sát, tấn công từ xa không gây nguy hiểm cho phi công", ["Bay nhanh hơn mọi loại máy bay", "Không bao giờ bị phát hiện", "Rẻ như đồ chơi"], "Drone do người điều khiển từ xa nên phi công không đối mặt nguy hiểm; nó vẫn có thể bị phát hiện và bắn hạ."],
      ["Radar trong quân sự dùng để làm gì?", "Phát hiện và theo dõi mục tiêu từ xa", ["Gây nhiễu sóng điện thoại", "Liên lạc với vệ tinh", "Chụp ảnh mặt đất chi tiết"], "Radar phát sóng vô tuyến và thu tín hiệu phản xạ để xác định vị trí, tốc độ mục tiêu; liên lạc vệ tinh và chụp ảnh thuộc hệ thống khác."],
      ["Tác chiến mạng được coi là mặt trận mới vì sao?", "Tấn công hệ thống thông tin có thể làm tê liệt hoạt động", ["Vì hacker nào cũng là quân nhân", "Vì chỉ diễn ra trên mạng xã hội", "Vì không gây thiệt hại thật"], "Đánh sập hệ thống chỉ huy, điện lưới qua mạng gây thiệt hại thật mà không cần một viên đạn."],
      ["Vì sao quốc gia cần tự chủ công nghệ quốc phòng?", "Chủ động khi bị cấm vận, phù hợp điều kiện đất nước", ["Vì công nghệ nhập khẩu luôn lạc hậu", "Vì tự sản xuất luôn rẻ hơn", "Vì không cần hợp tác quốc tế"], "Phụ thuộc nhập khẩu thì khi bị cấm vận sẽ thiếu vũ khí; tự chủ còn giúp vũ khí phù hợp địa hình, cách đánh của mình."],
      ["Vệ tinh hỗ trợ quân sự trong việc nào?", "Dẫn đường, liên lạc và trinh sát", ["Bắn hạ máy bay địch", "Chở quân ra chiến trường", "Thay thế hoàn toàn radar"], "Vệ tinh cung cấp định vị, liên lạc và ảnh trinh sát; nó không trực tiếp chiến đấu hay thay thế radar mặt đất."],
    ]),
    createStarterTopic("grade-12-peacekeeping", "Lớp 12 · Gìn giữ hòa bình", "Việt Nam tham gia lực lượng LHQ từ 2014", ["12", "🕊", "🌍"], [
      ["Việt Nam chính thức tham gia gìn giữ hòa bình Liên Hợp Quốc từ năm nào?", "Năm 2014", ["Năm 1977", "Năm 2007", "Năm 2020"], "Năm 1977 là năm Việt Nam gia nhập LHQ; tham gia lực lượng gìn giữ hòa bình bắt đầu từ năm 2014."],
      ["Việt Nam đã cử lực lượng nào tới Nam Sudan?", "Bệnh viện dã chiến cấp 2", ["Tàu chiến hải quân", "Phi đội tiêm kích", "Lữ đoàn xe tăng"], "Việt Nam cử bệnh viện dã chiến cấp 2 làm nhiệm vụ y tế nhân đạo tại Nam Sudan, không phải lực lượng chiến đấu."],
      ["Đội công binh Việt Nam làm nhiệm vụ gìn giữ hòa bình ở đâu?", "Khu vực Abyei", ["Biên giới Campuchia", "Vùng Vịnh", "Châu Âu"], "Đội công binh Việt Nam triển khai tại Abyei, khu vực tranh chấp giữa Sudan và Nam Sudan."],
      ["Nhiệm vụ chính của lực lượng gìn giữ hòa bình là gì?", "Bảo vệ dân thường, hỗ trợ ổn định và nhân đạo", ["Tham chiến cùng một phe", "Chiếm đóng lãnh thổ", "Buôn bán vũ khí"], "Lực lượng mũ nồi xanh giữ vai trò trung lập: bảo vệ dân thường, hỗ trợ nhân đạo, giúp các bên giữ hòa bình."],
      ["Tham gia gìn giữ hòa bình mang ý nghĩa gì với Việt Nam?", "Thể hiện trách nhiệm quốc tế, nâng cao vị thế đất nước", ["Để được LHQ trả lương cao", "Để mở rộng lãnh thổ", "Để thử nghiệm vũ khí mới"], "Đóng góp cho hòa bình thế giới khẳng định Việt Nam là thành viên có trách nhiệm, nâng cao uy tín quốc tế."],
    ]),
    createStarterTopic("grade-12-veterans-honor", "Lớp 12 · Tri ân thương binh liệt sĩ", "Ngày 27/7 và đạo lý uống nước nhớ nguồn", ["12", "🕯", "🇻🇳"], [
      ["Ngày Thương binh – Liệt sĩ là ngày nào?", "27/7", ["22/12", "30/4", "19/8"], "27/7 là Ngày Thương binh – Liệt sĩ; 22/12 là Ngày thành lập Quân đội nhân dân Việt Nam."],
      ["Học sinh có thể tri ân thương binh, liệt sĩ bằng việc nào?", "Chăm sóc nghĩa trang liệt sĩ, thăm Mẹ Việt Nam anh hùng", ["Nghỉ học ở nhà để tưởng niệm", "Chỉ học thuộc ngày 27/7", "Đợi nhà trường tổ chức mới tham gia"], "Tri ân bằng việc làm cụ thể: dọn nghĩa trang, thăm hỏi gia đình chính sách, nghe kể chuyện truyền thống."],
      ["Danh hiệu “Mẹ Việt Nam anh hùng” dành cho ai?", "Mẹ có nhiều con hy sinh vì Tổ quốc", ["Mẹ của anh hùng lao động", "Mẹ nuôi dạy con thành đạt", "Mẹ có con làm lãnh đạo"], "Danh hiệu tôn vinh những người mẹ có chồng, con hy sinh vì độc lập, tự do của Tổ quốc."],
      ["Lễ thắp nến tri ân thường được tổ chức khi nào?", "Tối 26/7 tại các nghĩa trang liệt sĩ", ["Sáng 27/7 tại trường học", "Tối 22/12", "Ngày Tết Nguyên đán"], "Tối 26/7, các địa phương đồng loạt thắp nến tri ân tại nghĩa trang liệt sĩ trước Ngày Thương binh – Liệt sĩ."],
      ["Tri ân thương binh, liệt sĩ đúng nghĩa là gì?", "Ghi nhớ công ơn và sống xứng đáng, không chỉ trong một ngày", ["Chỉ cần nhớ đúng ngày 27/7", "Đăng một bài viết mỗi năm", "Tặng quà một lần là đủ"], "Tri ân thật sự là sống, học tập xứng đáng với sự hy sinh của thế hệ đi trước, quanh năm chứ không chỉ dịp lễ."],
    ]),
  ],
  "career-experience": [
    createStarterTopic("grade-12-networking", "Lớp 12 · Xây dựng mối quan hệ", "Cho đi giá trị trước và duy trì lâu dài", ["12", "🤝", "🌐"], [
      ["Nguyên tắc quan trọng nhất khi xây dựng mối quan hệ là gì?", "Cho đi giá trị trước, chân thành và giữ lời hứa", ["Kết bạn càng nhiều càng tốt", "Chỉ quan hệ với người nổi tiếng", "Nhờ vả ngay khi mới quen"], "Mối quan hệ bền vững xây trên sự cho đi và tin cậy; kết bạn ồ ạt hay nhờ vả ngay chỉ tạo quan hệ hời hợt."],
      ["Networking khác “xin xỏ” ở điểm nào?", "Cùng hỗ trợ nhau lâu dài, hai chiều", ["Không khác gì nhau", "Networking chỉ cần gặp một lần", "Xin xỏ lịch sự hơn"], "Networking là quan hệ hai chiều, cùng có lợi và lâu dài; xin xỏ là nhờ vả một chiều, xong là hết."],
      ["Nên bắt đầu xây dựng mối quan hệ từ đâu?", "Thầy cô, bạn bè, anh chị khóa trên", ["Người nổi tiếng trên mạng", "Lãnh đạo cấp cao", "Chỉ người giàu có"], "Mạng lưới tốt nhất bắt đầu từ những người gần gũi, tin cậy; với tới người xa lạ, nổi tiếng khi chưa có gì để cho đi thường vô ích."],
      ["Ví dụ nào thể hiện networking tốt?", "Chia sẻ tài liệu ôn thi, sau này được giới thiệu cơ hội", ["Xin bài tập về nhà của bạn giỏi", "Nhờ người quen xin việc dù thiếu năng lực", "Kết bạn chỉ để khoe"], "Giúp đỡ chân thành hôm nay tạo niềm tin, mai sau cơ hội tự đến; lợi dụng quan hệ thì mất cả quan hệ lẫn uy tín."],
      ["Để duy trì mối quan hệ lâu dài cần gì?", "Quan tâm thường xuyên, giữ liên lạc", ["Chỉ liên lạc khi cần nhờ vả", "Tặng quà đắt tiền", "Gặp nhau mỗi ngày"], "Hỏi thăm, chia sẻ đều đặn giữ mối quan hệ ấm; chỉ xuất hiện khi cần nhờ khiến người ta cảm thấy bị lợi dụng."],
    ]),
    createStarterTopic("grade-12-personal-branding", "Lớp 12 · Thương hiệu cá nhân", "Trung thực, nhất quán và giá trị thật", ["12", "⭐", "💼"], [
      ["Thương hiệu cá nhân là gì?", "Ấn tượng người khác có về năng lực, tính cách của em", ["Logo công ty em thiết kế", "Số lượt theo dõi trên mạng", "Tên thương hiệu quần áo"], "Thương hiệu cá nhân là danh tiếng của chính em trong mắt người khác, không phải logo hay số follow."],
      ["Nền tảng của thương hiệu cá nhân bền vững là gì?", "Trung thực và làm tốt việc của mình", ["Tô vẽ bản thân thật ấn tượng", "Mua lượt theo dõi ảo", "Nói xấu đối thủ"], "Năng lực thật và sự trung thực là gốc; tô vẽ, mua follow chỉ tạo vỏ bọc dễ vỡ."],
      ["Vì sao không nên tô vẽ quá mức về bản thân?", "Sự thật sớm lộ ra và làm mất uy tín", ["Vì tốn thời gian chỉnh ảnh", "Vì không ai quan tâm", "Vì vi phạm pháp luật"], "Khoe khoang quá mức đến lúc bị phát hiện sẽ mất niềm tin, mà niềm tin mất đi rất khó lấy lại."],
      ["Cách xây dựng thương hiệu cá nhân đúng đắn là gì?", "Chia sẻ kiến thức chân thành, hình ảnh nhất quán", ["Đăng thật nhiều ảnh sang chảnh", "Gây tranh cãi để nổi tiếng", "Bắt chước y hệt người nổi tiếng"], "Giá trị thật chia sẻ đều đặn tạo danh tiếng bền; nổi bằng tranh cãi hay bắt chước thì nhanh tàn."],
      ["Thương hiệu cá nhân tốt mang lại lợi ích gì?", "Mở ra cơ hội học tập và việc làm", ["Được miễn thi đại học", "Tự động có việc lương cao", "Không cần học thêm gì nữa"], "Người có uy tín được thầy cô, nhà tuyển dụng tin tưởng và chủ động mời cơ hội; không có chuyện tự động miễn thi hay có việc."],
    ]),
    createStarterTopic("grade-12-gap-year", "Lớp 12 · Năm trải nghiệm", "Ưu điểm, rủi ro và kế hoạch gap year", ["12", "🧭", "🎒"], [
      ["Gap year là gì?", "Một năm tạm dừng học chính quy để trải nghiệm có mục đích", ["Một năm nghỉ học để chơi", "Kỳ nghỉ hè kéo dài", "Năm học lại lớp 12"], "Gap year là lựa chọn chủ động: đi làm, tình nguyện, học kỹ năng với mục tiêu rõ ràng, không phải nghỉ chơi."],
      ["Ưu điểm lớn nhất của gap year là gì?", "Trưởng thành hơn, hiểu bản thân, chọn ngành đúng hơn", ["Được miễn thi đại học", "Chắc chắn có việc làm", "Không tốn chi phí"], "Một năm trải nghiệm giúp hiểu mình hợp gì trước khi chọn ngành, tránh học sai ngành tốn 4 năm."],
      ["Rủi ro lớn nhất của gap year là gì?", "Mất đà học tập nếu không có kế hoạch rõ ràng", ["Bị cấm thi đại học", "Không được đi làm thêm", "Mất hết bạn bè"], "Không có kế hoạch, gap year dễ thành một năm trì hoãn; quay lại học sẽ vất vả hơn bạn bè cùng lứa."],
      ["Hoạt động nào phù hợp trong gap year?", "Tình nguyện, đi làm, học kỹ năng mới", ["Chơi game cả ngày", "Ngủ nướng cả năm", "Chờ thời gian trôi qua"], "Gap year đáng giá khi mỗi tháng đều có việc cụ thể: kỹ năng mới, trải nghiệm mới, thu nhập hoặc đóng góp."],
      ["Gap year có ý nghĩa khi nào?", "Có mục tiêu cụ thể và kế hoạch rõ ràng", ["Khi không biết làm gì", "Khi muốn trốn học", "Khi bạn bè cũng nghỉ"], "Viết ra mục tiêu từng quý và cách đo lường, gap year mới là đầu tư; nghỉ vì không biết làm gì chỉ là trì hoãn."],
    ]),
  ],
};
const gradeTwelveExtraPractice = { ...pracA1, ...pracA2, ...pracB1 };
for (const [subjectId, topics] of Object.entries(gradeTwelveExtraPractice)) {
  for (const topic of topics) topic.level = "LỚP 12";
  curriculumExtensions[subjectId].push(...topics);
}

for (const [subjectId, topics] of Object.entries(curriculumExtensions)) {
  const subject = subjects.find((item) => item.id === subjectId);
  subject.topics.push(...topics);
}

export const matchSets = {
  algebra: [
    { term: "3x + 5 = 20", meaning: "Phương trình có nghiệm x = 5", explanation: "Trừ 5 hai vế rồi chia cho 3: x = 5." },
    { term: "Giảm 25% chiếc áo giá 240.000đ", meaning: "Giảm 60.000đ; giá mới 180.000đ", explanation: "25% là một phần tư: giảm 60.000đ, vậy giá mới còn 180.000đ." },
    { term: "2(a + 3) − a", meaning: "a + 6", explanation: "Phân phối 2 rồi thu gọn: 2a + 6 − a = a + 6." },
    { term: "2y² khi y = 4", meaning: "32", explanation: "Thay y = 4: 2 × 4² = 2 × 16 = 32." },
    { term: "7x − 3 = 39", meaning: "x = 6", explanation: "Cộng 3 rồi chia cho 7: x = 42 ÷ 7 = 6." },
  ],
  geometry: [
    { term: "Hình lập phương", meaning: "6 mặt vuông bằng nhau", explanation: "Hình lập phương có 6 mặt, tất cả đều là hình vuông bằng nhau." },
    { term: "Diện tích hình tròn", meaning: "πr²", explanation: "Diện tích hình tròn được tính bằng pi nhân bình phương bán kính." },
    { term: "Tổng ba góc tam giác", meaning: "180°", explanation: "Tổng số đo ba góc trong của mọi tam giác luôn là 180°." },
    { term: "Hình hộp chữ nhật", meaning: "12 cạnh", explanation: "Hình hộp chữ nhật có 4 cạnh trên, 4 cạnh dưới và 4 cạnh đứng." },
    { term: "Chu vi hình vuông cạnh 7 cm", meaning: "28 cm", explanation: "Chu vi bằng 4 lần cạnh: 4 × 7 = 28 cm." },
  ],
  fractions: [
    { term: "Phân số bằng 3/4", meaning: "9/12", explanation: "Nhân cả tử và mẫu của 3/4 với 3 được 9/12." },
    { term: "1/2 + 1/4", meaning: "3/4", explanation: "Quy đồng 1/2 thành 2/4 rồi cộng: 2/4 + 1/4 = 3/4." },
    { term: "2/3 của 18", meaning: "12", explanation: "18 chia 3 được 6; 6 nhân 2 được 12." },
    { term: "Rút gọn 15/25", meaning: "3/5", explanation: "Chia cả tử và mẫu cho ước chung lớn nhất là 5." },
    { term: "0,2 dưới dạng phân số", meaning: "1/5", explanation: "0,2 = 2/10; rút gọn được 1/5." },
  ],
  physics: [
    { term: "Ánh sáng Mặt Trời đến Trái Đất", meaning: "Khoảng 8 phút 20 giây", explanation: "Ánh sáng truyền khoảng 150 triệu km trong gần 8 phút 20 giây." },
    { term: "Cường độ dòng điện", meaning: "Ampe (A)", explanation: "Ampe, ký hiệu A, là đơn vị đo cường độ dòng điện trong hệ SI." },
    { term: "Âm thanh trong chân không", meaning: "Không thể truyền", explanation: "Âm thanh cần môi trường vật chất để truyền, nên không đi qua chân không." },
    { term: "Lực giữ hành tinh quanh Mặt Trời", meaning: "Lực hấp dẫn", explanation: "Lực hấp dẫn giữa Mặt Trời và các hành tinh giữ chúng trên quỹ đạo." },
    { term: "Nhiệt độ sôi của nước tinh khiết", meaning: "100°C ở áp suất tiêu chuẩn", explanation: "Ở áp suất khí quyển tiêu chuẩn, nước sôi tại 100°C." },
  ],
  biology: [
    { term: "Cơ quan bơm máu đi khắp cơ thể", meaning: "Tim", explanation: "Tim co bóp nhịp nhàng để đưa máu đến phổi và các cơ quan." },
    { term: "Khí cây xanh hấp thụ khi quang hợp", meaning: "Cacbon điôxít (CO₂)", explanation: "Cây hấp thụ CO₂ và nước để tạo chất hữu cơ, đồng thời thải ôxi." },
    { term: "Đơn vị cơ bản của sự sống", meaning: "Tế bào", explanation: "Tế bào là đơn vị cấu tạo và chức năng cơ bản của mọi cơ thể sống." },
    { term: "Xương dài nhất cơ thể người", meaning: "Xương đùi", explanation: "Xương đùi là xương dài và khỏe nhất trong bộ xương người." },
    { term: "Cơ quan trao đổi khí khi hô hấp", meaning: "Phổi", explanation: "Tại phổi, ôxi đi vào máu và cacbon điôxít được thải ra." },
  ],
  chemistry: [
    { term: "Ký hiệu hóa học của vàng", meaning: "Au", explanation: "Au bắt nguồn từ tên Latin của vàng là aurum." },
    { term: "Công thức hóa học của nước", meaning: "H₂O", explanation: "Mỗi phân tử nước gồm hai nguyên tử hiđrô và một nguyên tử ôxi." },
    { term: "Dung dịch có pH nhỏ hơn 7", meaning: "Có tính axit", explanation: "Ở điều kiện thông thường, dung dịch có pH nhỏ hơn 7 là axit." },
    { term: "Khí chiếm tỉ lệ lớn nhất trong không khí", meaning: "Nitơ (khoảng 78%)", explanation: "Nitơ chiếm khoảng 78% thể tích không khí khô." },
    { term: "Công thức hóa học của muối ăn", meaning: "NaCl", explanation: "Muối ăn thông thường là natri clorua, có công thức NaCl." },
  ],
};

for (const subject of additionalSubjects) {
  for (const topic of subject.topics) {
    matchSets[topic.id] = topic.questions.map((question) => ({
      term: question.prompt,
      meaning: question.answers[question.correct],
      explanation: question.explanation,
    }));
  }
}

for (const topics of Object.values(curriculumExtensions)) {
  for (const topic of topics) {
    matchSets[topic.id] = topic.questions.map((question) => ({
      term: question.prompt,
      meaning: question.answers[question.correct],
      explanation: question.explanation,
    }));
  }
}
