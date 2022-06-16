import { liveClock } from './modules/index.js'

// live clock
liveClock()

// Write on prompt
const promptWindow = document.querySelector('.prompt')
document.querySelector('.write').addEventListener('mousedown', () => {
  promptWindow.style.display = 'grid'
})
// Prompt ok
document.querySelector('.prompt-ok').addEventListener('mousedown', () => {
  promptWindow.style.display = 'none'
})

// Temp for tags
const tags = document.querySelector('.tags-container')
document.querySelector('.empty').addEventListener('mousedown', () => {
  tags.style.display = tags.style.display == 'block' ? 'none' : 'block'
})