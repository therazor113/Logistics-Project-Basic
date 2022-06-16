import { liveClock, openKeypad } from './modules/index.js'
import { numPad, letPad, backspaceButton, enterButton, keypadCancel, toggleKeypad } from './modules/keypad.js'

// live clock
liveClock()

// Open keypad
openKeypad()
// Number pad
numPad()
// Letter pad
letPad()
// Back
backspaceButton()
// Enter
enterButton()
// Cancel
keypadCancel()
// Toggle keypad
toggleKeypad()


// Add HU count
const counter = document.querySelector('.counter-span')
document.querySelector('.add').addEventListener('mousedown', () => {
  if (counter.textContent < 999) {
    counter.textContent = parseInt(counter.textContent) + 1
  }
})

// Subtract HU count
document.querySelector('.sub').addEventListener('mousedown', () => {
  if (counter.textContent > 1) {
    counter.textContent = parseInt(counter.textContent) - 1
  }
})

// DMS function
document.querySelector('.dms').addEventListener('mousedown', () => {
  promptWindow.style.display = 'grid'
})

// Prompt continue
const promptWindow = document.querySelector('.prompt')
document.querySelector('.prompt-ok').addEventListener('mousedown', () => {
  promptWindow.style.display = 'none'
  location.href = 'move-shipment.html'
})

// Previous pro button
const previousProWindow = document.querySelector('.previous-pro-prompt')
document.querySelector('.previous-pro').addEventListener('mousedown', () => {
  previousProWindow.style.display = 'grid'
})
// Previous pro close
document.querySelector('.previous-cancel').addEventListener('mousedown', () => {
  previousProWindow.style.display = 'none'
})

// Complete temp function
const reweighWindow = document.querySelector('.reweigh-prompt')
document.querySelector('.complete').addEventListener('mousedown', () => {
  reweighWindow.style.display = 'grid'
})
// Reweigh confirm
document.querySelector('.reweigh-confirm').addEventListener('mousedown', () => {
  location.href='weight-check.html'
})
// Reweigh cancel
document.querySelector('.reweigh-cancel').addEventListener('mousedown', () => {
  reweighWindow.style.display = 'none'
})