import { get } from './util'
import { cards } from './card'

export function initFormSubmit() {
  const form = get('form')

  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const { question, answer, tags } = form
    cards.push({
      question: question.value,
      answer: answer.value,
      tags: tags.value.split(',').map((tag) => tag.trim()),
    })
    console.log('card created')
    form.reset()
  })
}
