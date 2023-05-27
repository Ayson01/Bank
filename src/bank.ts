// import './css/style.css'
// type Axx = {
//     bankName: string, owner: string, balance: number, accountNumber: string

// }

// interface AccountProps {
//   bankName: string, owner: string, balance: number, accountNumber: string
// }
class Account {
private _bankName: string;
private _owner: string;
private pin: number;
private _accountNumber: string;
private _balance: number = 2_00;

constructor(bankName: string, owner: string, pin: number, accNumber: string) {
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

deposit(amount: number) {
  if (amount <= 0) {
    return 'Amount must be greater than zero.';
  }

  this._balance += amount;
  console.log(`Deposit of $${amount} successful. New balance is $${this._balance}.`);
  return this._balance;
}

withdraw(amount: number) {
  if (amount > this._balance) {
    return 'Insufficient funds.';
  }

  this._balance -= amount;
  return `Withdrawal of $${amount} successful. New balance is $${this._balance}.`;
}

transfer(amount: number, recipientAccount: any) {
  // const newrAcc = new Account( )
    if (amount > this._balance) {
            console.log(`Insufficient funds for account number ${this.accountNumber}.`);
            return;
        }
        // const newAcc = new recipientAccount()
    this._balance -= amount;
    recipientAccount._balance += amount;
    // recipientAccount.deposit(amount);
    console.log(`Transferred ${amount} from account number ${this.accountNumber} to account number ${recipientAccount.accountNumber}.`);
    }

}


// function createNewAcc(props: AccountProps){
//     const newAccount = new Account(props)
// }
// createNewAcc({bankName: "Ayss", owner: "hhhhh", balance: 6000, accountNumber: "66666666666666"});

const depositButton = document.getElementById("deposit-btn");

depositButton?.addEventListener('click', depositAmount);

function depositAmount(){
    const userDepositAmount = Number((document.getElementById('deposit-amt') as HTMLInputElement).value);
    const balance1 = document.getElementById("bal1") as HTMLParagraphElement;

    let newBalance = newAccount.deposit(userDepositAmount)
    console.log(newBalance)
    balance1.innerText = JSON.stringify(newBalance);
}

const newAccount = new Account("AYBank", "Ayson", 1212, "123456789");
const transfer = new Account("Anonymous", "Anonymous", 1234, "123454321")

// transfer
const transferButton = document.getElementById("transfer-btn");

transferButton?.addEventListener('click', transferAmount);
const balance1 = document.getElementById("bal1") as HTMLParagraphElement;

function transferAmount(e: any){
    e.preventDefault();

    const userTransferAmount = Number((document.getElementById('transfer-amt') as HTMLInputElement).value);

    let newBalance = newAccount.transfer(userTransferAmount , transfer) 
    console.log(newBalance)
    balance1.innerText = JSON.stringify(newBalance);
    console.log(balance1.innerText)
}
const sendBtn = document.querySelector(".sendbtn");

sendBtn?.addEventListener('click', testTransferAmount)

function testTransferAmount(e: any){
    e.preventDefault();
    const testAmount = document.getElementById("amnt") as HTMLInputElement;
    balance1.innerText = testAmount.value;
    
}

// function transAmount(){
//   const userTransferAmount = Number((document.getElementById('.sendbtn') as HTMLInputElement).value);
//   const balance1 = document.getElementById("userBalance") as HTMLParagraphElement;

//   let newTransfer = newAccount.transfer( 12345678, userTransferAmount)
//   console.log(newTransfer)
//   balance1.innerText = JSON.stringify(newTransfer);
// }
// console.log(ne)


// console.log(newAccount);
// console.log(newAccount.transfer(500, 10000000));
// console.log(newAccount.deposit(500))
// console.log(newAccount);