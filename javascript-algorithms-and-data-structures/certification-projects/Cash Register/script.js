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

// Handle Transactions
const handleTransaction = (cashGiven, price, cid) => {
  // cash less than price
  if (cashGiven < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  // cash equals price
  if (cashGiven === price) {
    changeDueDisplay.textContent = "No change due - customer paid with exact cash";
    return;
  }

  // alculate change due
  let changeDue = Math.round((cashGiven - price) * 100) / 100;
  let totalCashInDrawer = cid.reduce((sum, [_, amount]) => sum + amount, 0);
  totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;

  // check for insufficient cid
  if (changeDue > totalCashInDrawer) {
    changeDueDisplay.textContent = 'Status: INSUFFICIENT_FUNDS';
    return;
  }

  // check for exact change
  if (changeDue === totalCashInDrawer) {
    let sortedCid = cid.filter(([_, amount]) => amount > 0)
                       .map(([name, amount]) => `${name}: $${amount.toFixed(2)}`)
                       .join(', ');

    changeDueDisplay.textContent = `Status: CLOSED ${sortedCid}`;
    return;
  }

  // calculate exact change (for OPEN status)
  let change = [];
  let remainingChangeDue = changeDue;

  for (let i = cid.length - 1; i >= 0; i--) {
    const coinValue = getCoinValue(cid[i][0]);
    let coinAmount = cid[i][1];

    if (remainingChangeDue >= coinValue && coinAmount > 0) {
      let coinCount = 0;
      while (remainingChangeDue >= coinValue && coinAmount >= coinValue) {
        remainingChangeDue = Math.round((remainingChangeDue - coinValue) * 100) / 100;
        coinAmount = Math.round((coinAmount - coinValue) * 100) / 100;
        coinCount++;
      }
      if (coinCount > 0) {
        change.push([cid[i][0], coinCount * coinValue]);
      }
    }
  }

  // check if change can be given
  if (remainingChangeDue > 0.01) {
    changeDueDisplay.textContent = 'Status: INSUFFICIENT_FUNDS';
  } else {
    const changeDisplay = change.map(([coin, amount]) => `${coin}: $${amount.toFixed(2)}`).join(', ');
    changeDueDisplay.textContent = `Status: OPEN Change: ${changeDisplay}`;
  }
};

// Get Coin Values
const getCoinValue = (coinName) => {
  const coinValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "HUNDRED": 100
  };
  return coinValues[coinName];
};

// Event listener to call handleTransaction on button click
purchaseBtn.addEventListener('click', () => {
  const cashGiven = parseFloat(cashInput.value);
  handleTransaction(cashGiven, price, cid);
  updateCidDisplay();
});
