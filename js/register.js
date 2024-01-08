const users = JSON.parse(localStorage.getItem('users')) || [
  {
    name: 'admin',
    email: 'admin@gmail.com',
  },
]
const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const user = users.find((user) => user.email === form.email.value)
  if (user) {
    showToast('Email đã tồn tại')
    return
  }

  if (form.password.value.length < 6) {
    showToast('Mật khẩu phải có ít nhất 6 ký tự')
    return
  }

  if (form.password.value !== form.confirmPassword.value) {
    showToast('Mật khẩu không khớp')
    return
  }

  const newUser = {
    name: form.fullName.value,
    email: form.email.value,
    password: form.password.value,
  }
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  showToast('Đăng ký thành công')
  setTimeout(() => {
    window.location.href = '/mindx-jsa-product/login.html'
  }, 3000)
})

function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    position: 'center',
    backgroundColor: '#820300',
  }).showToast()
}
