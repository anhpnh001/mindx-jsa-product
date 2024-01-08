const user = JSON.parse(localStorage.getItem('user'))

if (!user) {
  window.location.href = '/login.html'
}

const posts = JSON.parse(localStorage.getItem('posts')) || [
  {
    id: 1,
    title:
      'Giáo viên tham gia trực tết vào thời điểm nào thì được hưởng tiền làm thêm giờ?',
    content: `Thời điểm này, đa phần các địa phương đã có lịch nghỉ tết Nguyên đán Giáp Thìn (2024) và thông báo đến các nhà trường. Đa phần, học sinh mầm non và học sinh phổ thông sẽ được nghỉ từ 10-15 ngày liên tục.

            Học sinh nghỉ Tết cũng dẫn đến hoạt động dạy và học ở nhà trường tạm nghỉ nhưng điều này không có nghĩa là học sinh nghỉ thì giáo viên cũng được nghỉ như học sinh. Bởi, lịch nghỉ Tết của giáo viên theo lịch nghỉ chung của cán bộ, công chức, viên chức.`,
    image: 'https://picsum.photos/seed/picsum/200/300',
    category: 0,
    author: 'admin@gmail.com',
  },
]
const categories = ['Thông tin', 'Đồ ăn', 'Đồ uống', 'Trang trí']
const form = document.querySelector('form')
const table = document.querySelector('table')
const tbody = table.querySelector('tbody')

form.image.addEventListener('change', function () {
  const file = this.files[0]
  const reader = new FileReader()
  reader.onloadend = function () {
    form.preview.src = reader.result
  }
  reader.readAsDataURL(file)
})

form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (form.id.value !== '') {
    const index = posts.findIndex((post) => post.id === Number(form.id.value))
    posts[index] = {
      id: Number(form.id.value),
      title: form.title.value,
      content: form.content.value,
      image: form.preview.src,
      category: form.category.value,
      author: user.email,
    }
    localStorage.setItem('posts', JSON.stringify(posts))
    showToast('Cập nhật bài viết thành công')
  } else {
    const id = Date.now()
    const newPost = {
      id,
      title: form.title.value,
      content: form.content.value,
      image: form.preview.src,
      category: Number(form.category.value),
      author: user.email,
    }
    posts.push(newPost)
    localStorage.setItem('posts', JSON.stringify(posts))
    showToast('Đăng bài thành công')
  }
  setTimeout(() => {
    window.location.reload()
  }, 3000)
})

const myPosts = posts.filter((post) => post.author === user.email)

myPosts.forEach((post) => {
  const tr = document.createElement('tr')
  tr.innerHTML = `
    <td class="table__data">${post.title}</td>
    <td class="table__data">${post.content.slice(0, 100)}...</td>
    <td class="table__data">${categories[post.category]}</td>
    <td class="table__data">
      <button class="table__button" onclick="handleEditPost(${
        post.id
      })">Sửa</button>
      <button class="table__button" onclick="handleDeletePost(${
        post.id
      })">Xóa</button>
    </td>
    `
  tbody.appendChild(tr)
})

function handleEditPost(id) {
  const post = posts.find((post) => post.id === id)
  if (!post) {
    return
  }
  form.title.value = post.title
  form.content.value = post.content
  form.preview.src = post.image
  form.category.value = post.category
  form.id.value = post.id
  form.button.innerHTML = 'Cập nhật'
  form.title.focus()

  // move to top of class form
  form.scrollIntoView({ behavior: 'smooth' })
}

function handleDeletePost(id) {
  const index = posts.findIndex((post) => post.id === id)
  posts.splice(index, 1)
  localStorage.setItem('posts', JSON.stringify(posts))
  window.location.reload()
}
