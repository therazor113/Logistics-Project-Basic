const input = document.querySelector('.input-box')

// Backspace
document.querySelector('#minus').addEventListener('mousedown', () => {
  input.value = input.value.substring(0, input.value.length - 1)
})

// Checking input is equal to an id#
document.querySelector('#enter').addEventListener('mousedown', () => {
  setTimeout(() => {location.href = ""}, 750)
})

// calling keys
const key = document.querySelectorAll('.key')
key.forEach(el => el.addEventListener('mousedown', () => {
  input.value += parseInt(el.textContent)
}))
