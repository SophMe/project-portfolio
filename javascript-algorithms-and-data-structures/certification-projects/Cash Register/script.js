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

const cashInput = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDueDisplay = document.getElementById('change-due');
const cidDisplay = document.getElementById('cid-display');

function calculateChange(cashGiven) {
  let changeDue = Math.round((cashGiven - price) * 100) / 100;
  let change = [];
  let totalCashInDrawer = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1];
  }
  totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;

  if (changeDue > totalCashInDrawer) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  if (changeDue < 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  if (changeDue === 0) {
    return { status: 'OPEN', change: [] };
  }
};