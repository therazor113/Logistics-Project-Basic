
// live clock
const clock = document.querySelector('.clock')
window.onload = () => {setInterval(() => {
  let date = new Date()
  let time = date.toDateString() + " " + date.toLocaleTimeString()
  clock.textContent = time, 1000}
)}
