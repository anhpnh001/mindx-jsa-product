const posts = JSON.parse(localStorage.getItem('posts')) || []

const postsElement = document.getElementById('posts')

const decorationsPosts = posts.filter((post) => post.category === 3)

decorationsPosts.reverse().forEach((post) => {
  const postElement = document.createElement('div')
  postElement.classList.add('post')
  postElement.innerHTML = `
            <a href="decorations.html" class="post__category">Trang trí</a>
            <a href="detail.html?id=${post.id}" class="post__title">${
    post.title
  }</a>
            <p class="post__text">
            ${post.content.slice(0, 100)}...
            </p>
        `
  postsElement.appendChild(postElement)
})
