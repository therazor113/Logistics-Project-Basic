
// Query classes
const promptWindow = document.querySelector('.prompt')
const previousProWindow = document.querySelector('.previous-pro-prompt')
const manualProWindow = document.querySelector('.manual-pro-prompt')

// live clock - temp 2nd clock
const clock = document.querySelector('.clock')
const clock2 = document.querySelector('.clock2')
window.onload = () => {setInterval(() => {
  let date = new Date()
  let time = date.toDateString() + " " + date.toLocaleTimeString()
  clock.textContent = time
  clock2.textContent = time, 1000}
)}

// add HU count
const counter = document.querySelector('.counter-span')
document.querySelector('.plus').addEventListener('mousedown', () => {
  if (counter.textContent < 999) {
    counter.textContent = parseInt(counter.textContent) + 1
  }
})

// subtract HU count
document.querySelector('.minus').addEventListener('mousedown', () => {
  if (counter.textContent > 1) {
    counter.textContent = parseInt(counter.textContent) - 1
  }
})

// DMS function
document.querySelector('.dms').addEventListener('mousedown', () => {
  promptWindow.style.display = 'grid'
})

// Prompt continue
document.querySelector('.prompt-ok').addEventListener('mousedown', () => {
  promptWindow.style.display = 'none'
  location.href = 'move-shipment.html'
})

// Previous pro button
document.querySelector('.previous-pro').addEventListener('mousedown', () => {
  previousProWindow.style.display = 'grid'
})
// Previous pro close
document.querySelector('.previous-cancel').addEventListener('mousedown', () => {
  previousProWindow.style.display = 'none'
})

// Manual pro entry
document.querySelector('.manual-pro').addEventListener('mousedown', () => {
  manualProWindow.style.display = 'grid'
})
// Manual pro close
document.querySelector('.manual-cancel').addEventListener('mousedown', () => {
  manualProWindow.style.display = 'none'
})
// Manual pro functions
const changeKeypad = document.querySelector('.manual-change-keys')
let numberKeys = document.querySelector('.number-key-panel')
let letterKeys = document.querySelector('.letter-key-panel')
changeKeypad.addEventListener('mousedown', () => {
  changeKeypad.textContent = changeKeypad.textContent === 'ABC' ? '123' : 'ABC'
  letterKeys.style.display = letterKeys.style.display === 'grid' ? 'none' : 'grid'
  numberKeys.style.display = numberKeys.style.display === 'none' ? 'grid' : 'none'
})
