class Account {
    constructor(acctNum, acctHolder, address, balance)
    {
        this.acctNum = acctNum;
        this.acctHolder = acctHolder;
        this.address = address;
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    withdraw(amount) {
        this.amount = amount;

        console.log(this.balance - this.amount);
    }

    deposit(amount) {
        this.amount = amount;

        console.log(this.balance + this.amount);

    }
}

class Savings extends Account {
    constructor(acctNum, acctHolder, address, balance, interest) {
        super(acctNum, acctHolder, address, balance);
        this.interest = interest;
    }
    
    accumulateInterest() {
        return this.balance = this.amount + this.interest;
    }
}

class Checking extends Account {
    constructor(acctNum, acctHolder, address, balance, minBalance) {
        super(acctNum, acctHolder, address, balance);
        this.minBalance = minBalance;
    }

    checkMinBalance() {
        if (this.balance >= this.minBalance) {
            return this.balance;            
        } else {
            return `You are below the minimum balance.`;
        }
    }
}

let account1 = new Account('123456789', 'Dennis Allen', '1313 Shadowbrook Ln', 4675);
let savings1 = new Savings('123456789', 'Dennis Allen', '1313 Shadowbrook Ln', 4675, 400);
let checking1 = new Checking('123456789', 'Dennis Allen', '1313 Shadowbrook Ln', 4675, 300)

console.log(account1);
console.log(savings1);
console.log(checking1);