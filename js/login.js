const users = JSON.parse(localStorage.getItem('users')) || []
const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (form.password.value.length < 6) {
    showToast('Mật khẩu phải có ít nhất 6 ký tự')
    return
  }

  const user = users.find((user) => user.email === form.email.value)
  if (!user) {
    showToast('Email không tồn tại')
    return
  }

  if (user.password !== form.password.value) {
    showToast('Mật khẩu không chính xác')
    return
  }

  localStorage.setItem('user', JSON.stringify(user))
  showToast('Đăng nhập thành công')
  setTimeout(() => {
    window.location.href = 'index.html'
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
