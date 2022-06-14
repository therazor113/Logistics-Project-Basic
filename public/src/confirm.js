
// live clock
const clock = document.querySelector('.clock')
window.onload = () => {setInterval(() => {
  let date = new Date()
  let time = date.toDateString() + " " + date.toLocaleTimeString()
  clock.textContent = time, 1000}
)}

// checkbox
let check = false
const checkbox = document.querySelector('.checkbox')
checkbox.addEventListener('mousedown', () => {
  check = check === true ? false : true
  checkbox.textContent = check === false ? '' : 'X'
  checkbox.style.backgroundColor = check === false ? 'skyblue' : 'orange'
})

// device setup route
document.querySelector('.yes').addEventListener('mousedown', () => {
  location.href = check === false ? 'survey.html' : 'device-setup.html'
})