const table = document.querySelector('.bill-table')
let proData = 'I000000000' // pulled from server
let proHeat = '&#128293;' // pulled from server
let customerData = 'CUSTOMER NAME' // pulled from server
let addressData = 'ADDRESS' // pulled from server
let areaData = 'CITY, ST, ZIPCODE' // pulled from server
// *for each bill pulled from server -> create table element

let proColumn = `<button class="pro-number">${proData}<br>${proHeat}</button>`
let customerColumn = `<p><span class="customer-name">${customerData}</span><br>${addressData}<br>${areaData}</p>`

let newBill = `<table></>`

document.querySelector('.test').addEventListener('mousedown', () => {
  let newRow = table.insertRow()
  let newCell = newRow.insertCell(-1)
  newCell.innerHTML = proColumn + customerColumn
  console.log(table)
})

