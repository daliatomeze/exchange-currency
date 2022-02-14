

class CashTransaction extends Transaction {
    #referenceNumber ;

    /**
     * Creates A new Cash Transaction 
     * @param {Date} dateOfTransaction 
     * @param {User} sender 
     * @param {User} receiver 
     * @param {Number} referenceNumber 
     * @param {Number} amount 
     * @param {String} currency , like "USD"
     */
    constructor( dateOfTransaction , sender, receiver , referenceNumber, amount,currency) {
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

    /**
     * Adds the transaction to the database
     * @returns status of the operation
     */
    async addTransaction() {
        
      
        const sqlQuery = `INSERT INTO transaction (ID,SENDER_EMAIL,RECEIVER_EMAIL,TYPE, AMOUNT , CURRENCY) VALUES (NULL,'${this.sender.email
            }', '${this.receiver.email}','bank-transaction', '${this.amount}'   , '${this.currency}' )`;
    
        
        return await connection.query(sqlQuery)
            .then(([rows, fields]) => {
            return 'successfully added a new transaction ';
            })
            .catch((err) => err);
    }
}

module.exports = CashTransaction