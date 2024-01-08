const id = Number(new URLSearchParams(window.location.search).get('id'))

const posts = JSON.parse(localStorage.getItem('posts')) || []

const post = posts.find((post) => post.id === id)

const title = document.querySelector('title')
const sectionTitle = document.querySelector('.section__title')
const sectionImage = document.querySelector('.section__image')
const sectionContent = document.querySelector('.section__content')

title.textContent = post.title
sectionTitle.textContent = post.title
sectionImage.src = post.image
sectionContent.textContent = post.content
