
// live clock - temp 2nd clock
const clock = document.querySelectorAll('.clock')
window.onload = () => {setInterval(() => {
  let date = new Date()
  let time = date.toDateString() + " " + date.toLocaleTimeString()
  clock.forEach(el => {el.textContent = time}), 1000}
)}

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

// Manual pro keypad
const manualProWindow = document.querySelector('.manual-pro-prompt')
document.querySelector('.manual-pro').addEventListener('mousedown', () => {
  manualProWindow.style.display = 'grid'
})
// Manual pro enter
document.querySelector('.manual-enter').addEventListener('mousedown', () => {
  manualProWindow.style.display = 'none'
})
// Manual pro close
document.querySelector('.manual-cancel').addEventListener('mousedown', () => {
  manualProWindow.style.display = 'none'
})
// Manual pro functions
const changeKeypad = document.querySelector('.manual-change-keys')
const numberKeys = document.querySelector('.number-key-panel')
const letterKeys = document.querySelector('.letter-key-panel')
changeKeypad.addEventListener('mousedown', () => {
  changeKeypad.textContent = changeKeypad.textContent === 'ABC' ? '123' : 'ABC'
  letterKeys.style.display = letterKeys.style.display === 'grid' ? 'none' : 'grid'
  numberKeys.style.display = numberKeys.style.display === 'none' ? 'grid' : 'none'
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