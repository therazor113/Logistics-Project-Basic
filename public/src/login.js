import { liveClock, openKeypad } from './modules/index.js'
import { toggleKeypad, numPad, letPad, enterButton, backspaceButton, keypadCancel } from './modules/keypad.js'

// live clock
liveClock()

// Open Login keypad
openKeypad()
// Number pad
numPad()
// Letter pad
letPad()
// Back
backspaceButton()
// Enter
let exid = 1234
enterButton(exid)
// Cancel
keypadCancel()
// Toggle keypad
toggleKeypad()