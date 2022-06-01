
// live clock
const clock = document.querySelector('.clock')
let time = new Date().toDateString() + " " + new Date().toLocaleTimeString()
clock.textContent = time
setInterval(() => {
  time = new Date().toDateString() + " " + new Date().toLocaleTimeString();
  clock.textContent = time
}, 500)
