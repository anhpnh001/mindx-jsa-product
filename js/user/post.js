if (!user) {
  window.location.href = '/login.html'
}

const posts = JSON.parse(localStorage.getItem('posts')) || []
const categories = ['Thông tin', 'Ẩm thực', 'Đồ uống', 'Trang trí']
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
      category: Number(form.category.value),
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
