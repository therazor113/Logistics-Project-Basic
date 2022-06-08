import { enter, minus } from './index.js'

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

  // runout timer
  clearTimeout(myTimer)
  myTimer = setTimeout(() => {xValue = null}, 750)

  // if Null return
  if (!el.textContent) return
  // if > 5 input all
  else if (el.textContent.length >= 5) {
    input.value += el.textContent
    return
  }

    // switch letter on button pushed
    switch(xValue){
      // null -> A
      case '':
      default:
        xValue = el.textContent.charAt(0)
        input.value += xValue
      break
      // A -> B
      case el.textContent.charAt(0):
        input.value = input.value.slice(0, -1)
        xValue = el.textContent.charAt(1)
        input.value += xValue
      break
      // B -> C
      case el.textContent.charAt(1):
          input.value = input.value.slice(0, -1)
          xValue = el.textContent.charAt(2)
          input.value += xValue
      break
      // C -> A || C -> !!D 
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
      // D -> A
      case el.textContent.charAt(3):
        input.value = input.value.slice(0, -1)
        xValue = el.textContent.charAt(0)
        input.value += xValue
      break
    }
}))