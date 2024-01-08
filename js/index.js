const posts = JSON.parse(localStorage.getItem('posts')) || []

const information = document.getElementById('information')
const foods = document.getElementById('foods')
const drinks = document.getElementById('drinks')
const decorations = document.getElementById('decorations')

const topInformationPosts = posts
  .filter((post) => post.category === 0)
  .slice(0, 3)
const topFoodPosts = posts.filter((post) => post.category === 1).slice(0, 3)
const topDrinkPosts = posts.filter((post) => post.category === 2).slice(0, 3)
const topDecorationPosts = posts
  .filter((post) => post.category === 3)
  .slice(0, 3)

topInformationPosts.forEach((post) => {
  const postElement = document.createElement('div')
  postElement.classList.add('post')
  postElement.innerHTML = `
        <a href="detail.html?id=${post.id}" class="post__category">Thông tin</a>
        <a href="information.html?id=${post.id}" class="post__title">${
    post.title
  }</a>
        <p class="post__text">
        ${post.content.slice(0, 100)}...
        </p>
    `
  information.appendChild(postElement)
})

topFoodPosts.forEach((post, index) => {
  const foodPosts = foods.querySelectorAll('.card')
  foodPosts[index].querySelector('.card__image').src = post.image
  foodPosts[index].querySelector('.card__title').innerText = post.title
  foodPosts[index].querySelector('.card__category').innerText =
    categories[post.category]
})
