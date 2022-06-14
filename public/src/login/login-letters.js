import { enter, minus } from './login-numbers.js'

// Misc variables
const input = document.querySelector('.input-box')
let xValue
let myTimer

// enter button function & reset letter key
document.querySelector('#enter').addEventListener('mousedown', () => {
  clearTimeout(myTimer), xValue = ''}, enter)

// back button function & reset letter key
document.querySelector('#minus').addEventListener('mousedown', () => {
  clearTimeout(myTimer), xValue = ''}, minus)

// for each key pressed, input selected letter
const lkey = document.querySelectorAll('.lkey')
lkey.forEach(el => el.addEventListener('mousedown', () => {

  clearTimeout(myTimer)
  myTimer = setTimeout(() => {xValue = null}, 750)

  if (!el.textContent) return
  else if (el.textContent.length >= 5) {
    input.value += el.textContent
    return
  }

    // input next letter on button pushed || input button pressed
    switch(xValue){
      case '':
      default:
        xValue = el.textContent.charAt(0)
        input.value += xValue
      break
      
      case el.textContent.charAt(0):
        input.value = input.value.slice(0, -1)
        xValue = el.textContent.charAt(1)
        input.value += xValue
      break

      case el.textContent.charAt(1):
          input.value = input.value.slice(0, -1)
          xValue = el.textContent.charAt(2)
          input.value += xValue
      break

      case el.textContent.charAt(2):
        if (el.textContent.length == 4) {
          input.value = input.value.slice(0, -1)
          xValue = el.textContent.charAt(3)
          input.value += xValue
        break
        }
        else {
          input.value = input.value.slice(0, -1)
          xValue = el.textContent.charAt(0)
          input.value += xValue
        }
      break
      case el.textContent.charAt(3):
        input.value = input.value.slice(0, -1)
        xValue = el.textContent.charAt(0)
        input.value += xValue
      break
    }
}))