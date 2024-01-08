const posts = JSON.parse(localStorage.getItem('posts')) || []

const postsElement = document.getElementById('posts')

const foodsPosts = posts.filter((post) => post.category === 1)

foodsPosts.reverse().forEach((post) => {
  const postElement = document.createElement('div')
  postElement.classList.add('post')
  postElement.innerHTML = `
            <a href="/mindx-jsa-product/doods.html" class="post__category">Ẩm thực</a>
            <a href="/mindx-jsa-product/detail.html?id=${
              post.id
            }" class="post__title">${post.title}</a>
            <p class="post__text">
            ${post.content.slice(0, 100)}...
            </p>
        `
  postsElement.appendChild(postElement)
})
