/*
2️⃣ Task: Implement a BankAccount Class
Concepts Covered: Encapsulation (private variables), getters, setters.

🔹 Task:
Create a BankAccount class that:

Has private property _balance (use # in ES6 or _ convention).
Has a getter getBalance() to check balance.
Has methods deposit(amount) and withdraw(amount).
Throws an error if the withdrawal amount is greater than the balance.
Example usage:
*/

class BankAccount{
    constructor(amount){
        this.Balance = amount
    }

   
    add(amount){
        this.Balance+=amount;
        return this;
    }
    withdraw(amount){
        if(amount>this.Balance){
            throw new Error;
        }
        this.Balance -=amount;
        return this;
    }
    getBalance(){
        console.log(this.Balance)
        return this.Balance
    }
}

const myAccount = new BankAccount(4500);

myAccount.add(200).withdraw(5000).getBalance();


// Right One 
class BankAccount {
    #balance; // Private variable
  
    constructor(amount) {
        this.#balance = amount;
    }

    deposit(amount) {
        this.#balance += amount;
        return this;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.error("Error: Insufficient funds!");
            return this;
        }
        this.#balance -= amount;
        return this;
    }

    getBalance() {
        console.log("Balance:", this.#balance);
        return this.#balance;
    }
}

const myAccount1 = new BankAccount(4500);
myAccount1.deposit(200).withdraw(5000).getBalance(); // Should log an error but not break.
