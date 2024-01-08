const posts = JSON.parse(localStorage.getItem('posts')) || [
  {
    id: 1,
    title:
      'Giáo viên tham gia trực tết vào thời điểm nào thì được hưởng tiền làm thêm giờ?',
    content: `Thời điểm này, đa phần các địa phương đã có lịch nghỉ tết Nguyên đán Giáp Thìn (2024) và thông báo đến các nhà trường. Đa phần, học sinh mầm non và học sinh phổ thông sẽ được nghỉ từ 10-15 ngày liên tục.

            Học sinh nghỉ Tết cũng dẫn đến hoạt động dạy và học ở nhà trường tạm nghỉ nhưng điều này không có nghĩa là học sinh nghỉ thì giáo viên cũng được nghỉ như học sinh. Bởi, lịch nghỉ Tết của giáo viên theo lịch nghỉ chung của cán bộ, công chức, viên chức.`,
    image:
      'https://photo-cms-giaoduc.epicdn.me/w700/Uploaded/2024/yrfjpyvslys/2024_01_04/416907467-3557677967777791-4259564939994739621-n-7707.jpg',
    category: 0,
    author: 'admin@gmail.com',
  },
  {
    id: 2,
    title: "Thưởng Tết 'tùy tâm'",
    content: `Tôi nghĩ, sợ năm nay không có thưởng Tết chính là nỗi niềm của nhiều người, đang ở thời điểm này. Đặc thù văn hóa, người lao động Việt Nam đi làm quần quật cả năm, chỉ trông mong vào thưởng Tết, đây là khoản dư của người lao động. Bởi, tiền lương 12 tháng đã vừa y vào các khoản: chi tiêu, thuê nhà, sinh hoạt, nuôi con ăn học...

    Nhưng ở mặt khác, có lẽ nhiều chủ doanh nghiệp cũng đang đau đầu xoay xở lo tiền Tết cho nhân viên của mình. Bởi thế, mới có người hỏi: 'Nếu không có thưởng Tết, em vẫn gắn bó với công ty chứ?'.
    `,
    image: '',
    category: 0,
    author: 'admin@gmail.com',
  },
  {
    id: 3,
    title: 'Gắng gượng thưởng Tết',
    content: `Đắn đo gần tháng, giám đốc một doanh nghiệp sản xuất giày ở TP HCM chưa dám công bố mức thưởng Tết dự kiến - giảm 10% so với năm ngoái. Sợ công nhân phản ứng.

    Mức thưởng Tết năm nay được chốt sau rất nhiều phiên giằng co giữa lãnh đạo doanh nghiệp và đại diện công đoàn. Phía công ty đưa lý do tình hình 2023 khó khăn không kém gì lúc thành phố bùng dịch, giãn cách suốt ba tháng - năm đó, lợi nhuận và doanh thu đều giảm, tiền thưởng thấp hơn 30% so với lúc sản xuất thuận lợi.`,
    image: '',
    category: 0,
    author: 'admin@gmail.com',
  },
  {
    id: 4,
    title: 'Bánh Chưng',
    content: `Bánh chưng là món đã có lịch sử lâu đời trong văn hóa ẩm thực Việt Nam. Do đó trong mâm cỗ ngày Tết của người miền bắc sẽ không thể thiếu món ăn này. Bánh tượng trưng cho mặt đất, được dùng để thể hiện lòng biết ơn của hoàng tử Lang Liêu với Vua Hùng đời thứ 16 và đất trời.`,
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/noi-banh-chung-xanh-tai-mien-bac.png',
    category: 1,
    author: 'admin@gmail.com',
  },
  {
    id: 5,
    title: 'Xôi gấc',
    content: `Theo quan niệm của người xưa cho biết thì màu đỏ là màu của may mắn, màu của hạnh phúc lứa đôi. Vì vậy mà trong những ngày rằm, ngày lễ, đặc biệt là ngày Tết thì nhất định phải có 1 đĩa xôi gấc.
    Xôi gấc được nấu từ gạo nếp ngon và được trộn với gấc tươi rồi cho vào nồi hấp. Sau khi được đun chín thì xôi sẽ có màu đỏ tươi rất đẹp và hấp dẫn. Khi ăn, bạn sẽ cảm nhận được vị dẻo của gạo nếp, vị béo của nước cốt dừa và vị ngọt của đường.`,
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/xoi-gac-la-mon-an-khong-the-thieu-trong-mam-co-ngay-tet.png',
    category: 1,
    author: 'admin@gmail.com',
  },
  {
    id: 6,
    title: 'Giò',
    content: `Với vị trí trung tâm của mâm cỗ ngày Tết nên giò dường như là một trong những món ăn chắc chắn phải có. Có ý nghĩa là “trong ấm ngoài êm, phúc lộc đầy nhà”, một phần không thể thiếu của ẩm thực Việt.
    Món ăn ngon này được làm từ thịt heo, giã nhuyễn trong cối đá và gói bằng lá chuối rồi luộc chín. Những miếng giò trắng mịn, giòn dai, thơm ngon không chỉ là món ăn ngon mà có thể dành tặng cho những thành viên trong gia đình mình.`,
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/12/mon-gio.png',
    category: 1,
    author: 'admin@gmail.com',
  },
  {
    id: 7,
    title: 'Trà xanh',
    content: `Theo một nghiên cứu của Healthline cho thấy, chiết xuất trà xanh có thể làm tăng 27% khả năng đốt cháy chất béo của người trưởng thành. Một số hợp chất của trà xanh như catechin có thể giúp cơ thể đào thải một số chất độc trong cơ thể và giảm trọng lượng cơ thể.

    Ngoài ra, trà xanh còn giúp bạn phòng ngừa những bệnh lý như nóng gan, xơ gan, gan nhiễm mỡ, huyết áp cao,... - những căn bệnh tìm ẩn bởi nhiều lý do trong đó có thức ăn nhiều dầu mỡ và những thức uống có cồn, có gas gây nên.`,
    image:
      'https://cdn.tgdd.vn/Files/2021/01/12/1319775/14-loai-thuc-uong-thanh-mat-giup-thanh-loc-co-the-nen-uong-vao-dip-tet-202101121531588812.png',
    category: 2,
    author: 'admin@gmail.com',
  },
  {
    id: 8,
    title: 'Nước hoa atiso đỏ',
    content: `Hoa atiso đỏ (hay còn gọi là hoa bụp giấm) có tác dụng lợi tiểu, mát gan, lọc thận,... Hoa này được trồng lấy ngọn và đài hoa có màu đỏ tím sẫm thì pha nước uống để giải khát.

    Thành phần của atiso đỏ cũng rất có lợi cho sức khoẻ của chúng ta, ví dụ như acid ascorbic trong chúng giúp ta tăng sức đề kháng. Tuy nhiên, do có tính acid khá cao nên những người bị chứng đau dạ dày cần phải lưu ý khi sử dụng.`,
    image:
      'https://cdn.tgdd.vn/Files/2021/01/12/1319775/14-loai-thuc-uong-thanh-mat-giup-thanh-loc-co-the-nen-uong-vao-dip-tet-202101121532127178.png',
    category: 2,
    author: 'admin@gmail.com',
  },
  {
    id: 9,
    title: 'Trà sả',
    content: `Trà thơm ngọt hòa quyện cùng vị ấm nồng của sả chắc chắn là một sự trải nghiệm đáng có mà bạn nên thử một lần. Tinh chất sả, kết hợp với lá trà sẽ có tác dụng thải độc tốt, giúp thanh lọc, làm mát cơ thể.

    Ngoài ra, trà sả còn có tác dụng hạn chế việc hấp thụ cholesterol và kiểm soát lượng cholesterol trong cơ thể. Đây sẽ là một vị cứu tinh cho những ngày Tết ăn uống thả ga của bạn.`,
    image:
      'https://cdn.tgdd.vn/Files/2021/01/12/1319775/14-loai-thuc-uong-thanh-mat-giup-thanh-loc-co-the-nen-uong-vao-dip-tet-202101121534033660.png',
    category: 2,
    author: 'admin@gmail.com',
  },
  {
    id: 10,
    title: 'Cây cảnh, hoa kiểng - đào, mai',
    content: `Đây chính là thứ không thể thiếu nhất trong những ngày Tết rộn ràng. Những loại cây tươi tốt, giàu ý nghĩa, cùng những cánh hoa rực rỡ, giàu sức sống, không chỉ khiến không khí ngày xuân thêm tưng bừng, mà còn gieo vào lòng người niềm tin, hi vọng về những điều tốt đẹp trong tương lai.`,
    image:
      'https://vietfoundation.com.vn/files/folder_32/images/Hoa-trang-tr%C3%AD-t%E1%BA%BFt-o9o000.jpg',
    category: 3,
    author: 'admin@gmail.com',
  },
  {
    id: 11,
    title: 'Các loại dây may mắn',
    content: `Các loại dây may mắn kết từ phong bao lì xì, hay những đồng tiền vàng kết dây chỉ đỏ, khắc kèm dòng chữ may mắn thường được treo trong nhà hoặc trên cây hoa mai, hoa đào ... Với đủ hình dáng, chất liệu, màu sắc, ngày càng phong phú về thiết kế.`,
    image:
      'https://vietfoundation.com.vn/files/folder_32/images/d%C3%A2y-treo-%C4%91%E1%BB%93ng-ti%E1%BB%81n-t%E1%BA%BFt-E8O600.jpg',
    category: 3,
    author: 'admin@gmail.com',
  },
  {
    id: 12,
    title: 'Mâm ngũ quả',
    content: `Ý nghĩa các loại quả trong Mâm Ngũ Quả
    Chuối xanh: Màu xanh tượng trưng cho hành Mộc, tượng trưng cho con cháu sum vầy, quây quần, đầm ấm.
    Quả phật thủ: Được đặt ở trung tâm, nơi cao nhất trong mâm ngũ quả_ Bàn tay phật che chở cho cả gia đình.
    Quýt/quất: Ăn nên làm ra, sung túc, dồi dào sức sống.
    Bưởi: Phúc lộc, viên mãn.
    Đu đủ: Là biểu tượng của sự thịnh vượng, đủ đầy.
    Sung: Gắn với biểu tượng sung mãn, sức khỏe và tiền bạc.
    Dưa hấu: Căng tròn, mát lành, hứa hẹn sự ngọt ngào, may mắn.
    Xoài (phát âm giống như “xài”): Cầu mong cho việc tiêu xài không thiếu thốn`,
    image:
      'https://vietfoundation.com.vn/files/folder_32/images/b%C3%A0y-bi%E1%BB%87n-m%C3%A2m-ng%C5%A9-qu%E1%BA%A3-deG100.jpg',
    category: 3,
    author: 'admin@gmail.com',
  },
]

localStorage.setItem('posts', JSON.stringify(posts))

const information = document.getElementById('information')
const foods = document.getElementById('foods')
const drinks = document.getElementById('drinks')
const decorations = document.getElementById('decorations')

const topInformationPosts = posts
  .reverse()
  .filter((post) => post.category === 0)
  .slice(0, 3)
const topFoodPosts = posts
  .reverse()
  .filter((post) => post.category === 1)
  .slice(0, 3)
const topDrinkPosts = posts
  .reverse()
  .filter((post) => post.category === 2)
  .slice(0, 3)
const topDecorationPosts = posts
  .reverse()
  .filter((post) => post.category === 3)
  .slice(0, 3)

topInformationPosts.forEach((post) => {
  const postElement = document.createElement('div')
  postElement.classList.add('post')
  postElement.innerHTML = `
        <a href="/mindx-jsa-product/information.html" class="post__category">Thông tin</a>
        <a href="/mindx-jsa-product/detail.html?id=${
          post.id
        }" class="post__title">${post.title}</a>
        <p class="post__text">${post.content.slice(0, 100)}...</p>
    `
  information.appendChild(postElement)
})

topFoodPosts.forEach((post, index) => {
  const foodPosts = foods.querySelectorAll('.card')
  foodPosts[index].querySelector('.card__image').src = post.image
  foodPosts[index].querySelector('.card__title').innerText = post.title
  foodPosts[index].querySelector('.card__category').innerText =
    categories[post.category]
  foodPosts[index].querySelector(
    '.card__title'
  ).href = `/mindx-jsa-product/detail.html?id=${post.id}`
  foodPosts[index].querySelector('.card__category').href =
    '/mindx-jsa-product/foods.html'
})

topDrinkPosts.forEach((post, index) => {
  const drinkPosts = drinks.querySelectorAll('.card')
  drinkPosts[index].querySelector('.card__image').src = post.image
  drinkPosts[index].querySelector('.card__title').innerText = post.title
  drinkPosts[index].querySelector('.card__category').innerText =
    categories[post.category]
  drinkPosts[index].querySelector(
    '.card__title'
  ).href = `/mindx-jsa-product/detail.html?id=${post.id}`
  drinkPosts[index].querySelector('.card__category').href =
    '/mindx-jsa-product/drinks.html'
})

topDecorationPosts.forEach((post, index) => {
  const decorationPosts = decorations.querySelectorAll('.card')
  decorationPosts[index].querySelector('.card__image').src = post.image
  decorationPosts[index].querySelector('.card__title').innerText = post.title
  decorationPosts[index].querySelector('.card__category').innerText =
    categories[post.category]
  decorationPosts[index].querySelector(
    '.card__title'
  ).href = `/mindx-jsa-product/detail.html?id=${post.id}`
  decorationPosts[index].querySelector('.card__category').href =
    '/mindx-jsa-product/decorations.html'
})

const countdownNumberDays = document.querySelector('.countdown__number--days')
const countdownNumberHours = document.querySelector('.countdown__number--hours')
const countdownNumberMinutes = document.querySelector(
  '.countdown__number--minutes'
)
const countdownNumberSeconds = document.querySelector(
  '.countdown__number--seconds'
)

const countDownDate = new Date('Feb 2, 2024 00:00:00').getTime()

const x = setInterval(() => {
  const now = new Date().getTime()
  const distance = countDownDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  countdownNumberDays.innerText = days
  countdownNumberHours.innerText = hours
  countdownNumberMinutes.innerText = minutes
  countdownNumberSeconds.innerText = seconds

  if (distance < 0) {
    clearInterval(x)
    countdownNumberDays.innerText = 0
    countdownNumberHours.innerText = 0
    countdownNumberMinutes.innerText = 0
    countdownNumberSeconds.innerText = 0
  }
}, 1000)
