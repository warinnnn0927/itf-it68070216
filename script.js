const acc = document.getElementById("accountBalance");
const cash = document.getElementById("cashBalance");
function updateBalance() {
  if (acc.disabled) {
    acc.disabled = false;
    cash.disabled = false;}
  else {
    acc.disabled = true;
    cash.disabled = true;}
}

const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const amount = document.getElementById("operationAmount");
const show = document.getElementById("history");
function bankOperation() {
  let x = Number(amount.value);
  let accValue = Number(acc.value);
  let cashValue = Number(cash.value);
  const operation = document.getElementById("operationType").value;
  if (operation === "deposit") {
    if (cashValue >= x) {
      accValue += x;
      cashValue -= x;
      show.value += `Deposited ${x}. Current account balance: ${accValue}, Current cash balance: ${cashValue}\n`;
    } else {
      show.value += `Couldn't deposit entered balance. (Insufficient cash balance)\n`;
    }
  } 
  else if (operation === "withdraw") {
    if (accValue >= x) {
      accValue -= x;
      cashValue += x;
      show.value += `Withdrew ${x}. Current account balance: ${accValue}, Current cash balance: ${cashValue}\n`;
    } else {
      show.value += `Couldn't withdraw entered balance. (Insufficient account balance)\n`;
    }
  }
  acc.value = accValue;
  cash.value = cashValue;
  amount.value = "";
}
