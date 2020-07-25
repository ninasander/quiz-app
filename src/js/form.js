import { get } from './util'

export function initFormReset() {
  const form = get('form')
  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    form.reset()
  })
}
