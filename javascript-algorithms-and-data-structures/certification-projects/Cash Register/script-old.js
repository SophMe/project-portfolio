// DOM Elements
const changeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const total = document.getElementById('total');

// Price and Cash-in-Drawer Setup
let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
];
total.textContent = `Total: $${price}`;

// Cash Register Class
class CashRegister {
  constructor(price, cid) {
    this.price = price;
    this.cid = cid;
    this.cash = 0;
  }

  calculateChange() {
    return this.cash - this.price;
  }

  checkDrawerStatus(changeDue) {
    let totalInDrawer = this.cid.reduce((sum, currencyUnit) => sum + currencyUnit[1], 0);
    if (totalInDrawer < changeDue) return "INSUFFICIENT_FUNDS";
    if (totalInDrawer === changeDue) return "CLOSED";
    return "OPEN";
  }

  calculateAvailableChange(changeDue) {
    let availableChange = [];
    for (let i = this.cid.length - 1; i >= 0; i--) {
      let currencyUnit = this.cid[i];
      let currencyValue = this.getCurrencyValue(currencyUnit[0]);
      let amount = currencyUnit[1];
      let toGive = 0;
      while (changeDue >= currencyValue && amount > 0) {
        changeDue = (changeDue - currencyValue).toFixed(2);
        amount -= currencyValue;
        toGive += currencyValue;
      }
      if (toGive > 0) availableChange.push([currencyUnit[0], toGive]);
    }
    return changeDue == 0 ? availableChange : "INSUFFICIENT_FUNDS";
  }
}

// Instantiate and Event Listener
let register = new CashRegister(price, cid);

purchaseBtn.addEventListener('click', () => {
  const cashGiven = parseFloat(cash.value);
  register.cash = cashGiven;
  if (cashGiven < price) {
    alert('Customer does not have enough money to purchase the item');
  } else if (cashGiven === price) {
    changeDue.textContent = 'No change due - customer paid with exact cash';
  } else {
    let change = register.calculateChange();
    changeDue.textContent = `Change Due: $${change.toFixed(2)}`;
  }
});