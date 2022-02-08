class BankTransaction extends Transaction {
    #accountNumber;


    /**
     * 
     * @param {Number} id 
     * @param {Date} dateOfTransaction 
     * @param {User} sender 
     * @param {User} receiver 
     * @param {Number} accountNumber 
     * @param {Number} amount 
     * @param {String} currency, like "USD"
     */
    constructor(id , dateOfTransaction , sender, receiver , accountNumber, amount,currency) {
        this.#id = id ;
        this.#date = dateOfTransaction;
        this.#sender = sender;
        this.#receiver = receiver;
        this.#accountNumber = accountNumber;
        this.#amount =amount;
        this.#currency = currency;
    }
    getTransaction() {
        return {
            id:this.id,
            dateOfTransaction: this.#date,
            from: this.#sender,
            to: this.#receiver,
            method:"Bank Transaction",
            accountNumber: this.#accountNumber,
            amount: this.#amount
        }
    }
}

module.exports =BankTransaction