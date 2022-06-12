export let enter, minus

// Calling classes
const input = document.querySelector('.input-box')
const message = document.querySelector('.message')
const lPanel = document.querySelector('.lpanel')
const Panel = document.querySelector('.panel')

// Example id
let exid = 1234
let tKeys

// calling keys
const key = document.querySelectorAll('.key')
key.forEach(el => el.addEventListener('mousedown', () => {
  input.value += parseInt(el.textContent)
}))

// Checking input is equal to an id#
document.querySelector('#enter').addEventListener('mousedown', enter = () => {
  setTimeout(() => {location.href = ""}, 750)
})

// Toggle keypad type
document.querySelector('#tKeypad').addEventListener('mousedown', () => {
  tKeys = tKeys === false ? true : false
  lPanel.style.display = tKeys === false ? 'block' : 'none'
  Panel.style.display = tKeys === true ? 'block' : 'none'
  tKeypad.textContent = tKeys === true ? 'ABC' : '123'
})


// Backspace
document.querySelector('#minus').addEventListener('mousedown', minus = () => {
  input.value = input.value.substring(0, input.value.length - 1)
})
