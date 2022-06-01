
// refresh clock ever second
const clock = document.querySelector('.clock')
let time = new Date().toDateString() + " " + new Date().toLocaleTimeString()
clock.textContent = time
setInterval(() => {
  let time = new Date().toDateString() + " " + new Date().toLocaleTimeString();
  clock.textContent = time
}, 1000)

const checkbox = document.querySelector('.checkbox')
checkbox.addEventListener('mousedown', () => {
  checkbox.textContent = checkbox.textContent === 'X' ? '' : 'X'
})