class BankAccount {
     public readonly id: number;
     public name: string;
     private _balance: number;

     constructor(id: number, name: string, balance: number){
          this.id = id;
          this.name = name;
          this._balance= balance;
     }

     Balance():number{
          return this._balance;
     }

     get balance():number{
          return this._balance;
     }

     set deposit(amount: number){
          this._balance = this.balance + amount;
     }
}

const myAccount = new BankAccount(444, "saadi", 30);
console.log(myAccount);