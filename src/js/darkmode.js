import { get } from './util'

export function initDarkmode() {
  // Darkmode Switch
  const main = get('main')
  const header = get('header')
  const footer = get('footer')
  const svg = get('svg')
  const darkmodeSwitch = get('.button__darkmode')

  // Darkmode Switch
  darkmodeSwitch.addEventListener('click', () => {
    main.classList.toggle('darkmode')
    header.classList.toggle('darkmode')
    footer.classList.toggle('darkmode')
    svg.classList.toggle('svg__darkmode')
  })
}
