
// live clock
const clock = document.querySelector('.clock')
window.onload = () => {setInterval(() => {
  let date = new Date()
  let time = date.toDateString() + " " + date.toLocaleTimeString()
  clock.textContent = time, 1000}
)}

// add HU count
const counter = document.querySelector('.counter-span')
document.querySelector('.plus').addEventListener('mousedown', () => {
  counter.textContent = parseInt(counter.textContent) + 1
})

// subtract HU count
document.querySelector('.minus').addEventListener('mousedown', () => {
  if (counter.textContent > 1) {
    counter.textContent = parseInt(counter.textContent) - 1
  }
})