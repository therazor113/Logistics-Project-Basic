
// live clock
const clock = document.querySelector('.clock')
window.onload = () => {setInterval(() => {
  let date = new Date()
  let time = date.toDateString() + " " + date.toLocaleTimeString()
  clock.textContent = time, 1000}
)}

// checkbox
let check = null
const checkbox = document.querySelector('.checkbox')
checkbox.addEventListener('mousedown', () => {
  check = check === false ? true : false
  checkbox.textContent = check === true ? '' : 'X'
  checkbox.style.backgroundColor = check === true ? 'skyblue' : 'orange'
})