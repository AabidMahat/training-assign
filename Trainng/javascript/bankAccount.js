class Bank {
  #balance;

  constructor(initialBalance) {
    this.initialBalance = initialBalance;
    this.#balance = initialBalance;
  }

  deposite(amount) {
    if (amount < 0) {
      throw new Error("Ammount Can't be less than 0");
    }
    this.#balance = this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient Balance");
    }
    this.#balance = this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const bank = new Bank(1000);

bank.deposite(1000);
bank.withdraw(5000);

console.log(bank.getBalance());
