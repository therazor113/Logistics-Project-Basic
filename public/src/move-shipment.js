
// live clock
const clock = document.querySelector('.clock')
window.onload = () => {setInterval(() => {
  let date = new Date()
  let time = date.toDateString() + " " + date.toLocaleTimeString()
  clock.textContent = time, 1000}
)}

// Query classes
const promptWindow = document.querySelector('.prompt')
const tags = document.querySelector('.tags-container')

// Write on function
document.querySelector('.write').addEventListener('mousedown', () => {
  promptWindow.style.display = 'grid'
})

// Prompt clear
document.querySelector('.prompt-ok').addEventListener('mousedown', () => {
  promptWindow.style.display = 'none'
})

// Temp for tags
document.querySelector('.empty').addEventListener('mousedown', () => {
  tags.style.display = tags.style.display == 'block' ? 'none' : 'block'
})