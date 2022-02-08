

class CashTransaction extends Transaction {
    #referenceNumber ;

    /**
     * Creates A new Cash Transaction 
     * @param {Number} id 
     * @param {Date} dateOfTransaction 
     * @param {User} sender 
     * @param {User} receiver 
     * @param {Number} referenceNumber 
     * @param {Number} amount 
     * @param {String} currency , like "USD"
     */
    constructor(id , dateOfTransaction , sender, receiver , referenceNumber, amount,currency) {
        this.#id = id ;
        this.#date = dateOfTransaction;
        this.#sender = sender;
        this.#receiver = receiver;
        this.#referenceNumber = referenceNumber;
        this.#amount =amount;
        this.#currency = currency;
    }

    /**
     * 
     * @returns Transaction Object
     */
    getTransaction() {
        return {
            id:this.id,
            dateOfTransaction: this.#date,
            from: this.#sender,
            to: this.#receiver,
            method:"Cash Transaction",
            referenceNumber: this.#referenceNumber,
            amount: this.#amount
        }
    }
}

module.exports = CashTransaction