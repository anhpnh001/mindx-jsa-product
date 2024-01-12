if (!user) {
  window.location.href = '/mindx-jsa-product/login.html'
}

const users = JSON.parse(localStorage.getItem('users')) || []
const form = document.querySelector('form')

form.name.value = user.name
form.email.value = user.email

form.addEventListener('submit', function (e) {
  e.preventDefault()

  let newPassword = user.password

  if (form.password.value !== user.password) {
    showToast('Mật khẩu không chính xác')
    return
  }

  if (form.password.value.length < 6) {
    showToast('Mật khẩu phải có ít nhất 6 ký tự')
    return
  }

  if (form.newPassword.value.length > 0) {
    if (form.newPassword.value.length < 6) {
      showToast('Mật khẩu phải có ít nhất 6 ký tự')
      return
    }
    newPassword = form.newPassword.value
  }

  const newUser = {
    name: form.name.value,
    email: form.email.value,
    password: newPassword,
  }
  const index = users.findIndex((user) => user.email === newUser.email)
  users[index] = newUser
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('user', JSON.stringify(newUser))
  showToast('Cập nhật thành công')
  setTimeout(() => {
    window.location.href = '/index.html'
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
