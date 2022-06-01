
// live clock
const clock = document.querySelector('.clock')
let time = new Date().toDateString() + " " + new Date().toLocaleTimeString()
clock.textContent = time
setInterval(() => {
  time = new Date().toDateString() + " " + new Date().toLocaleTimeString();
  clock.textContent = time
}, 500)

// checkbox
let check = null
const checkbox = document.querySelector('.checkbox')
checkbox.addEventListener('mousedown', () => {
  check = check === false ? true : false
  checkbox.textContent = check === true ? '' : 'X'
  checkbox.style.backgroundColor = check === true ? 'skyblue' : 'yellow'
})