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

// Update CID
const updateCidDisplay = () => {
  cidDisplay.textContent = '';
  cid.forEach(([name, amount]) => {
    const coinElement = document.createElement('p');
    coinElement.textContent = `${name}: $${amount.toFixed(2)}`;
    cidDisplay.appendChild(coinElement);
  });
};
updateCidDisplay();

// Calculate Change
const calculateChange = (cashGiven) => {
  let changeDue = Math.round((cashGiven - price) * 100) / 100;
  let change = [];
  let totalCashInDrawer = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1];
  }
  totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;
  console.log(`Total cash in drawer: ${totalCashInDrawer}`);
  console.log(`Change due: ${changeDue}`);

  // insufficient funds
  if (changeDue > totalCashInDrawer) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  if (changeDue < 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  // exact change
  if (changeDue === 0) {
    return { status: 'OPEN', change: [] };
  }
  // change due
  for (let i = cid.length - 1; i >= 0; i--) {
    let coinValue = getCoinValue(cid[i][0]);
    let coinAmount = cid[i][1];
    let coinCount = 0;
    while (changeDue >= coinValue && coinAmount > 0) {
      changeDue = Math.round((changeDue - coinValue) * 100) / 100;
      coinAmount = Math.round((coinAmount - coinValue) * 100) / 100;
      coinCount++;
    }
    if (coinCount > 0) {
      change.push([cid[i][0], coinCount * coinValue]);
    }
  }
  if (changeDue > 0.01) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  return { status: 'OPEN', change: change };
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