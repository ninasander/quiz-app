import { get, getAll } from './util'

export function initShowAnswer() {
  const cardList = getAll('section.card')
  cardList.forEach((card) => {
    addToggleLogic(card)
  })
  function addToggleLogic(card) {
    const textShowAnswer = card.querySelector('.card__answer')
    const buttonShowAnswer = card.querySelector('.card__button')
    buttonShowAnswer?.addEventListener('click', () => {
      textShowAnswer.classList.toggle('hidden')
      buttonShowAnswer.textContent =
        buttonShowAnswer.textContent === 'Hide answer'
          ? 'Show answer'
          : 'Hide answer'
    })
  }
}

export function initBookmarkToggle() {
  const bookmarks = getAll('.card__bookmark')

  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener(
      'click',
      bookmarkToggle(bookmark, 'card__bookmark--active')
    )
  })

  function bookmarkToggle(bookmark, classname) {
    return () => {
      bookmark.classList.toggle(classname)
    }
  }
}

const cardArray = [
  {
    question: 'Dies ist unsere Frage Nummer 1',
    answer: 'Dies ist unsere schlaue Antwort',
  },
  {
    question: 'Dies ist unsere Frage Nummer 2',
    answer: 'Dies ist unsere schlaue Antwort',
  },
  {
    question: 'Dies ist unsere Frage Nummer 3',
    answer: 'Dies ist unsere schlaue Antwort',
  },
]

export function initCard() {
  cardArray.forEach(createCard)
}

export function createCard({
  question = 'lorem ipsum dolor',
  answer = 'sit amet, consetetur sadipscing',
} = {}) {
  const newCard = document.createElement('section')
  newCard.className = 'card s-box p-l-r-20 m-t-b-20 b-4-blue'
  const target = get('.page__index')
  target.appendChild(newCard)
  newCard.innerHTML =
    /*html*/
    `<button class="card__bookmark">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      class="w-h-60"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        fill="currentcolor"
      />
    </svg>
  </button>
  <h2 class="m-t-b-10">QUESTION:</h2>
  <p class="m-t-b-10">
    ${question}
  </p>
  <button class="card__button b-4-blue m-10 p-10">SHOW ANSWER</button>
  <p class="card__answer hidden">
    ${answer}
  </p>
  <ul class="card__tags p-0">
    <li>lorem</li>
    <li>ipsum</li>
    <li>dolor</li>
    <li>sit</li>
  </ul>`
}
