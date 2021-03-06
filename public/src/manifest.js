
// *temp* data pulled from server
let billData = [
  ['I000000000','&#128293;'],
  ['CUSTOMER NAME','ADDRESS','CITY, ST, ZIPCODE'],
  ['SHIPPER NAME','ADDRESS','CITY, ST, ZIPCODE'],
  ['NULL', 'NULL'],
  ['NULL', '00/00/0000'],
  ['N/A'],
  ['*A*'],
  ['NULL', '(N/A)']
]

// *temp* for each bill import, create row template
let createBill = `
  <td><button class="pro-number">${billData[0][0]}<br>${billData[0][1]}</button></td>
  <td><p><span class="customer-name">${billData[1][0]}</span><br>${billData[1][1]}<br>${billData[1][2]}</p></td>
  <td><p><span class="shipper-name">${billData[2][0]}</span><br>${billData[2][1]}<br>${billData[2][2]}</p></td>
  <td><p>${billData[3][0]} hu(s)<br>${billData[3][1]} lbs</p></td>
  <td><p>${billData[4][0]}<br>${billData[4][1]}</p></td>
  <td><p>${billData[5][0]}</p></td>
  <td class="flag"><p>${billData[6][0]}<br></p></td>
  <td><p>Door: ${billData[7][0]}<br>${billData[7][1]}</p></td>`;

// *temp* add data row - for testing
const tableSection = document.querySelector('.table-section')
const noRecords = document.querySelector('.no-records')
let data = true
let table = document.createElement("table")
table.className = 'bill-table'
let tableBody = document.createElement("tbody")
tableBody.className = 'table-body'

document.querySelector('.test').addEventListener('mousedown', () => {
  switch(data) {
    case true:
      noRecords.style.display = 'none'
      tableSection.appendChild(table)
      table.appendChild(tableBody)
      data = false
    default:
      let newRow = table.insertRow()
      newRow.className = 'bill-row'
      tableBody.appendChild(newRow).innerHTML = createBill
      break
  }
})

// *temp* Page navigation
const billList = document.querySelector(".bill-list-container")
document.querySelector('.next').addEventListener('mousedown', () => {
  billList.scrollBy({ top: 1000, left: 0, behavior: 'auto' })
})
document.querySelector('.prev').addEventListener('mousedown', () => {
  billList.scrollBy({ top: -1000, left: 0, behavior: 'auto' })
})