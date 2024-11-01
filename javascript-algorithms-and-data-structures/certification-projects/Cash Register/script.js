// price and cash in drawer provided by freeCodeCamp

let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

// Access DOM elements
const changeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn')
const total = document.getElementById('total');

total.textContent = `Total: $${price}`;

class CashRegister {
  // Initialize objects with default values using the constructor
  constructor(price, cid) {
    this.price = price;
    this.cid = cid;
    this.denominations = [
      { name: "ONE HUNDRED", value: 100 },
      { name: "TWENTY", value: 20 },
      { name: "TEN", value: 10 },
      { name: "FIVE", value: 5 },
      { name: "ONE", value: 1 },
      { name: "QUARTER", value: 0.25 },
      { name: "DIME", value: 0.1 },
      { name: "NICKEL", value: 0.05 },
      { name: "PENNY", value: 0.01 }
    ]
  }
  // "Calculate the change due by subtracting the price from the cash given."
  calculateChange(cashGiven) {
    let changeDue = cashGiven - this.price;
    let changeDueArray = [];
    let cidCopy = JSON.parse(JSON.stringify(this.cid));

  // "Loop through each currency denomination from largest to smallest."
    for (let denom of this.denominations) {
      let amountAvailable = cidCopy.find(item => item[0] === denom.name)[1];
      let amountToReturn = 0;
      
      // "If the denomination can be used to cover part of the change, add it to the change array."
      while (changeDue >= denom.value && amountAvailable >= denom.value) {
        changeDue -= denom.value;
        amountAvailable -= denom.value;
        amountToReturn += denom.value;
      }
      if (amountToReturn > 0) {
        changeDueArray.push([denom.name, amountToReturn]);
      }
    }
    // If change cannot be fully met, return a message
    if (changeDue > 0) {
      return 'Insufficient funds in register to make change.';
    }
    return changeDueArray.length > 0 ? changeDueArray : 'No change needed.'
  }
}

const register = new CashRegister(price, cid);
console.log(register);

purchaseBtn.addEventListener('click', () => {
  const cashGiven = parseFloat(cash.value);
  if (cashGiven < price) {
    alert('Customer does not have enough money to purchase the item');
  } else if (cashGiven === price) {
    changeDue.textContent = 'No change due - customer paid with exact cash';
  }
  return;
});