import { get } from './util'

export function initCardToggle() {
  // Bookmark Toggle
  const bookmark = get('.card__bookmark')
  // Show Answer Button
  const buttonAnswer = get('.card__button')
  const answerText = get('.card__answer')

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
}
