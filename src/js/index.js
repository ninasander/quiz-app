// Navigation
const buttonIndex = get('.nav__home')
const buttonBookmarks = get('.nav__bookmarks')
const buttonCreate = get('.nav__create')
const buttonProfile = get('.nav__profile')
const pageIndex = get('.page__index')
const pageBookmarks = get('.page__bookmarks')
const pageCreate = get('.page__create')
const pageProfile = get('.page__profile')
// Bookmark Toggle
const bookmark = get('.card__bookmark')
// Show Answer Button
const buttonAnswer = get('.card__button')
const answerText = get('.card__answer')
// Darkmode Switch
const main = get('main')
const header = get('header')
const footer = get('footer')
const svg = get('svg')
const darkmodeSwitch = get('.button__darkmode')
//Clear Form on Submit
const form = get('form')
const formSubmit = get('.form__button')

// Darkmode Switch
darkmodeSwitch.addEventListener('click', () => {
  main.classList.toggle('darkmode')
  header.classList.toggle('darkmode')
  footer.classList.toggle('darkmode')
  svg.classList.toggle('svg__darkmode')
})

// Bookmark Toggle
bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('card__bookmark--active')
})

// Show Answer Button
buttonAnswer.addEventListener('click', () => {
  answerText.classList.toggle('hidden')
  if (buttonAnswer.textContent === 'SHOW ANSWER') {
    buttonAnswer.textContent = 'HIDE ANSWER'
  } else {
    buttonAnswer.textContent = 'SHOW ANSWER'
  }
})

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

//Clear Form on Submit
formSubmit.addEventListener('click', () => {
  form.reset()
})

function nav(currentPage) {
  pageIndex.classList.add('hidden')
  pageBookmarks.classList.add('hidden')
  pageCreate.classList.add('hidden')
  pageProfile.classList.add('hidden')
  currentPage.classList.remove('hidden')
}

function get(selector) {
  return document.querySelector(selector)
}
