var BankAccount = /** @class */ (function () {
    function BankAccount(money) {
        this.money = money;
    }
    BankAccount.prototype.deposit = function (value) {
        this.money += value;
    };
    return BankAccount;
}());
var BankInfo = /** @class */ (function () {
    function BankInfo(name, bankAccount, hobbies) {
        this.name = name;
        this.bankAccount = bankAccount;
        this.hobbies = hobbies;
    }
    return BankInfo;
}());
var bankAccount = new BankAccount(2000);
var myself = new BankInfo("Asaad", bankAccount, ["Voilin", "Cooking"]);
myself.bankAccount.deposit(3000);
console.log(myself);
