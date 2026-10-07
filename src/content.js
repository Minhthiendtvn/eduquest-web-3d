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
