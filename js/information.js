const posts = JSON.parse(localStorage.getItem('posts')) || []

const postsElement = document.getElementById('posts')

const informationPosts = posts.filter((post) => post.category === 0)

informationPosts.reverse().forEach((post) => {
  const postElement = document.createElement('div')
  postElement.classList.add('post')
  postElement.innerHTML = `
            <a href="information.html" class="post__category">Thông tin</a>
            <a href="detail.html?id=${post.id}" class="post__title">${
    post.title
  }</a>
            <p class="post__text">
            ${post.content.slice(0, 100)}...
            </p>
        `
  postsElement.appendChild(postElement)
})
