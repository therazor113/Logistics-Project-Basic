import { liveClock, multiOpenKeypad } from './modules/index.js'
import { numPad, enterButton, backspaceButton, keypadCancel } from './modules/keypad.js'

// live clock
liveClock()

// load button
const keypadTitle = document.querySelector('.input-title')
const keypadHeader = document.querySelector('.input-header')
document.querySelector('.load').addEventListener('mousedown', () => {
  keypadTitle.textContent = 'Door Selection'
  keypadHeader.textContent = 'Enter Door #: '
  multiOpenKeypad('.keypad-container')
})
//dock button
document.querySelector('.dock').addEventListener('mousedown', () => {
  keypadTitle.textContent = 'Bay Selection'
  keypadHeader.textContent = 'Enter Bay #: '
  multiOpenKeypad('.keypad-container')
})

// Number pad
numPad()
// Back
backspaceButton()
// Enter
enterButton()
// Cancel
keypadCancel()

// Write on prompt
const promptWindow = document.querySelector('.prompt')
document.querySelector('.write').addEventListener('mousedown', () => {
  promptWindow.style.display = 'grid'
})
// Prompt ok
document.querySelector('.prompt-ok').addEventListener('mousedown', () => {
  promptWindow.style.display = 'none'
})

// Temp for tags
const tags = document.querySelector('.tags-container')
document.querySelector('.testing').addEventListener('mousedown', () => {
  tags.style.display = tags.style.display == 'block' ? 'none' : 'block'
})