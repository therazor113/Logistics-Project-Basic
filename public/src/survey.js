
// live clock
const clock = document.querySelector('.clock')
window.onload = () => {setInterval(() => {
  let date = new Date()
  let time = date.toDateString() + " " + date.toLocaleTimeString()
  clock.textContent = time, 1000}
)}

// Query classes
const promptWindow = document.querySelector('.prompt')

// Scale NOT working prompt
document.querySelector('.scale-nw').addEventListener('mousedown', () => {
  promptWindow.style.display = 'grid'
})
// Prompt clear
document.querySelector('.prompt-no').addEventListener('mousedown', () => {
  promptWindow.style.display = 'none'
})