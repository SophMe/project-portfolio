// Price and cid provided by freeCodeCamp
let price = 3.26;
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

// Access DOM Elements
const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDisplay = document.getElementById('change-due');
const cidDisplay = document.getElementById('cid-display');
const totalDisplay = document.getElementById('total');

totalDisplay.textContent = `Total: $${price.toFixed(2)}`;

const updateCidDisplay = () => {
  cidDisplay.textContent = '';
  let totalCidAmount = 0;

  cid.forEach(([name, amount]) => {
    const coinElement = document.createElement('p');
    coinElement.textContent = `${name}: $${amount.toFixed(2)}`;
    cidDisplay.appendChild(coinElement);
    totalCidAmount += amount;
  });
  const totalAmount = Math.round((totalCidAmount + price) * 100) / 100;
};

// Get Coin Values
const getCoinValue = (coinName) => {
  const coinValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "HALF DOLLAR": 0.5,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "HUNDRED": 100
  };

  return coinValues[coinName];
}

const handleTransaction = (cashGiven, price, cid) => {
  if (cashGiven < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
};
