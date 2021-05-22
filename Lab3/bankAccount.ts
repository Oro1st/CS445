class BankAccount {
    money: number;
    constructor(money: number) {
        this.money = money;
    }
    deposit(value: number): void {
        this.money += value;
    }
}

class BankInfo {
    name: string;
    bankAccount: BankAccount;
    hobbies: Array<string>;
    constructor(name: string, bankAccount: BankAccount, hobbies: Array<string>) {
        this.name = name;
        this.bankAccount = bankAccount;
        this.hobbies = hobbies;
    }
}


var bankAccount = new BankAccount(2000);

var myself = new BankInfo("Asaad", bankAccount, ["Voilin", "Cooking"]);
myself.bankAccount.deposit(3000);
console.log(myself);