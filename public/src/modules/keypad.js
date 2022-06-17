// Document queries
  const inputBox = document.querySelector('.input-box')
  const numberPanel = document.querySelector('.number-panel')
  const letterPanel = document.querySelector('.letter-panel')
  const keypadButton = document.querySelector('.change-keypad')
  const keypadWindow = document.querySelector('.keypad-container')

// Number keys
export const numPad = () => {
  document.querySelectorAll('.numkey').forEach(el => el.addEventListener('mousedown', () => {
    inputBox.value += parseInt(el.textContent)
  }))
}
// Letter keys
let myTimer
let xValue
export const letPad = () => {
  document.querySelectorAll('.letkey').forEach(el => el.addEventListener('mousedown', () => {

    clearTimeout(myTimer)
    myTimer = setTimeout(() => {xValue = null}, 750)

    if (!el.textContent) {
      xValue = null 
      return
    }
    else if (el.textContent.length >= 5) {
      inputBox.value += el.textContent
      xValue = null
      return
    }
    // *temp* Input next letter on button pushed || input button pressed
    switch(xValue){
      case '':
      default:
        xValue = el.textContent.charAt(0)
        inputBox.value += xValue
      break
      
      case el.textContent.charAt(0):
        inputBox.value = inputBox.value.slice(0, -1)
        xValue = el.textContent.charAt(1)
        inputBox.value += xValue
      break

      case el.textContent.charAt(1):
          inputBox.value = inputBox.value.slice(0, -1)
          xValue = el.textContent.charAt(2)
          inputBox.value += xValue
      break

      case el.textContent.charAt(2):
        if (el.textContent.length == 4) {
          inputBox.value = inputBox.value.slice(0, -1)
          xValue = el.textContent.charAt(3)
          inputBox.value += xValue
        break
        }
        else {
          inputBox.value = inputBox.value.slice(0, -1)
          xValue = el.textContent.charAt(0)
          inputBox.value += xValue
        }
      break
      case el.textContent.charAt(3):
        inputBox.value = inputBox.value.slice(0, -1)
        xValue = el.textContent.charAt(0)
        inputBox.value += xValue
      break
    }
  }))
}
// Backspace
export const backspaceButton = () => {
  document.querySelector('.backspace').addEventListener('mousedown', () => {
    clearTimeout(myTimer)
    xValue = ''
    inputBox.value = inputBox.value.substring(0, inputBox.value.length - 1)
  })
}
// *temp* Enter
export const enterButton = (exid) => {
  document.querySelector('.enter').addEventListener('mousedown', () => {
    clearTimeout(myTimer)
    xValue = ''
    if (inputBox.value == exid) {
      location.href = "confirm.html"
    }
    else if (inputBox.value == 5678) { // *temp* needs to be changed
      location.href = "move-confirmation.html"
    }
  })
}
// Cancel
export const keypadCancel = () => {
  document.querySelector('.cancel').addEventListener('mousedown', () => {
    keypadWindow.style.display = 'none'
    inputBox.value = ''
  })
}
// Toggle keypad type
export const toggleKeypad = () => {
  keypadButton.addEventListener('mousedown', () => {
    letterPanel.style.display = letterPanel.style.display === 'grid' ? 'none' : 'grid'
    numberPanel.style.display = numberPanel.style.display === 'none' ? 'grid' : 'none'
    keypadButton.textContent = keypadButton.textContent === '123' ? 'ABC' : '123'
  })
}