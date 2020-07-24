import { get } from './util'

export function initNavigation() {
  // Navigation
  const buttonIndex = get('.nav__home')
  const buttonBookmarks = get('.nav__bookmarks')
  const buttonCreate = get('.nav__create')
  const buttonProfile = get('.nav__profile')
  const pageIndex = get('.page__index')
  const pageBookmarks = get('.page__bookmarks')
  const pageCreate = get('.page__create')
  const pageProfile = get('.page__profile')

  // Navigation
  buttonIndex.addEventListener('click', () => {
    nav(pageIndex)
  })

  buttonBookmarks.addEventListener('click', () => {
    nav(pageBookmarks)
  })

  buttonCreate.addEventListener('click', () => {
    nav(pageCreate)
  })

  buttonProfile.addEventListener('click', () => {
    nav(pageProfile)
  })

  function nav(currentPage) {
    pageIndex.classList.add('hidden')
    pageBookmarks.classList.add('hidden')
    pageCreate.classList.add('hidden')
    pageProfile.classList.add('hidden')
    currentPage.classList.remove('hidden')
  }
}
