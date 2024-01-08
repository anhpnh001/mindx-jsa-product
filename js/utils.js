const user = JSON.parse(localStorage.getItem('user'))

const logged = document.getElementById('logged')
const notLogged = document.getElementById('not-logged')
if (user) {
  logged.style.display = 'flex'
  notLogged.style.display = 'none'
} else {
  logged.style.display = 'none'
  notLogged.style.display = 'flex'
}

const logout = document.getElementById('logout')
logout.addEventListener('click', function () {
  localStorage.removeItem('user')
  window.location.href = '/login.html'
})

categories = ['Thông tin', 'Ẩm thực', 'Đồ uống', 'Trang trí']

function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    position: 'center',
    backgroundColor: '#820300',
  }).showToast()
}
