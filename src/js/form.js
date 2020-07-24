import { get } from './util'

export function resetForm() {
  //Clear Form on Submit
  const form = get('form')
  const formSubmit = get('.form__button')

  //Clear Form on Submit
  formSubmit.addEventListener('click', () => {
    form.reset()
    form.preventDefault()
  })
}
