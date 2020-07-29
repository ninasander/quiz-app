import { get, getAll } from './util'
import { initNavigation } from './navigation'
import { initBookmarkToggle, initShowAnswer, initCards } from './card'
import { initFormReset } from './form'
import { initDarkmode } from './darkmode'

get()
getAll()
initCards()
initShowAnswer()
initNavigation()
initBookmarkToggle()
initFormReset()
initDarkmode()
