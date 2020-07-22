const buttonIndex = document.querySelector('.nav__home')
const buttonBookmarks = document.querySelector('.nav__bookmarks')
const buttonCreate = document.querySelector('.nav__create')
const buttonProfile = document.querySelector('.nav__profile')
const pageIndex = document.querySelector('.page__index')
const pageBookmarks = document.querySelector('.page__bookmarks')
const pageCreate = document.querySelector('.page__create')
const pageProfile = document.querySelector('.page__profile')

// buttonNav.addEventListener('click', () => {
//     pageBookmarks.classList.add('hidden')
//     pageCreate.classList.add('hidden')
//     pageProfile.classList.add('hidden')
//     pageIndex.classList.remove('hidden')
//   })

buttonIndex.addEventListener('click', () => {
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
  pageIndex.classList.remove('hidden')
})

buttonBookmarks.addEventListener('click', () => {
  pageBookmarks.classList.remove('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
  pageIndex.classList.add('hidden')
})

buttonCreate.addEventListener('click', () => {
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.remove('hidden')
  pageProfile.classList.add('hidden')
  pageIndex.classList.add('hidden')
})

buttonProfile.addEventListener('click', () => {
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.remove('hidden')
  pageIndex.classList.add('hidden')
})
