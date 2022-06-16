import { liveClock } from './modules/index.js'

// live clock
liveClock()

// Scale NOT working prompt
const promptWindow = document.querySelector('.prompt')
document.querySelector('.scale-nw').addEventListener('mousedown', () => {
  promptWindow.style.display = 'grid'
})
// Prompt clear
document.querySelector('.prompt-no').addEventListener('mousedown', () => {
  promptWindow.style.display = 'none'
})