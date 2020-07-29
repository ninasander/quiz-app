import { initNavigation } from './navigation'
import { initCards } from './card'
import { initFormSubmit } from './form'
import { initDarkmode } from './darkmode'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    initCards()
    initNavigation()
    initFormSubmit()
    initDarkmode()
  })
})
