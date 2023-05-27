"use strict";
class Account {
    constructor(bankName, owner, pin, accNumber) {
        this._balance = 200;
        this._bankName = bankName;
        this._owner = owner;
        this.pin = pin;
        this._accountNumber = accNumber;
    }
    get bankName() {
        return this._bankName;
    }
    get owner() {
        return this._owner;
    }
    get balance() {
        return this._balance;
    }
    get accountNumber() {
        return this._accountNumber;
    }
    deposit(amount) {
        if (amount <= 0) {
            return 'Amount must be greater than zero.';
        }
        this._balance += amount;
        console.log(`Deposit of $${amount} successful. New balance is $${this._balance}.`);
        return this._balance;
    }
    withdraw(amount) {
        if (amount > this._balance) {
            return 'Insufficient funds.';
        }
        this._balance -= amount;
        return `Withdrawal of $${amount} successful. New balance is $${this._balance}.`;
    }
    transfer(amount, recipientAccount) {
        if (amount > this._balance) {
            console.log(`Insufficient funds for account number ${this.accountNumber}.`);
            return;
        }
        this._balance -= amount;
        recipientAccount._balance += amount;
        console.log(`Transferred ${amount} from account number ${this.accountNumber} to account number ${recipientAccount.accountNumber}.`);
    }
}
const depositButton = document.getElementById("deposit-btn");
depositButton === null || depositButton === void 0 ? void 0 : depositButton.addEventListener('click', depositAmount);
function depositAmount() {
    const userDepositAmount = Number(document.getElementById('deposit-amt').value);
    const balance1 = document.getElementById("bal1");
    let newBalance = newAccount.deposit(userDepositAmount);
    console.log(newBalance);
    balance1.innerText = JSON.stringify(newBalance);
}
const newAccount = new Account("AYBank", "Ayson", 1212, "123456789");
const transfer = new Account("Anonymous", "Anonymous", 1234, "123454321");
const transferButton = document.getElementById("transfer-btn");
transferButton === null || transferButton === void 0 ? void 0 : transferButton.addEventListener('click', transferAmount);
const balance1 = document.getElementById("bal1");
function transferAmount(e) {
    e.preventDefault();
    const userTransferAmount = Number(document.getElementById('transfer-amt').value);
    let newBalance = newAccount.transfer(userTransferAmount, transfer);
    console.log(newBalance);
    balance1.innerText = JSON.stringify(newBalance);
    console.log(balance1.innerText);
}
const sendBtn = document.querySelector(".sendbtn");
sendBtn === null || sendBtn === void 0 ? void 0 : sendBtn.addEventListener('click', testTransferAmount);
function testTransferAmount(e) {
    e.preventDefault();
    const testAmount = document.getElementById("amnt");
    balance1.innerText = testAmount.value;
}
//# sourceMappingURL=bank.js.map