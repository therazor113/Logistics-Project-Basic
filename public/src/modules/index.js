
// live clock export
export const liveClock = () => {
  const clock = document.querySelectorAll('.clock')
  setInterval(() => {
    let date = new Date()
    let time = date.toDateString() + " " + date.toLocaleTimeString()
    clock.forEach(el => {el.textContent = time}), 1000}
)}

// Button exports

// Open keyPad
const keypadWindow = document.querySelector('.keypad-container')
export const openKeypad = () => {
  document.querySelector('.keypad-button').addEventListener('mousedown', () => {
    keypadWindow.style.display = 'grid'
  })
}

// Open keyPad if multiple on page
export const multiOpenKeypad = (container) => {
  const keypadWindow = document.querySelector(container)
  keypadWindow.style.display = 'grid'
}