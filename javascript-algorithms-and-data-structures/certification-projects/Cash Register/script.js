// price and cid provided by freeCodeCamp

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

const change = document.getElementById('change-due');
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
// "Loop through each currency denomination from largest to smallest."
// "If the denomination can be used to cover part of the change, add it to the change array."
}

purchaseBtn.addEventListener('click', () => {
  if (cash.value < price) {
    alert('Customer does not have enough money to purchase the item');
  } else if (cash.value === price) {
    change.textContent = 'No change due - customer paid with exact cash';
  }
  return;
});