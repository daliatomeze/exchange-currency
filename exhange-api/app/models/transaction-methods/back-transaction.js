const Transaction = require('../transaction')
const connection = require('../../connection/connection')
class BankTransaction extends Transaction {
    #accountNumber;
    /**
     * 
     * @param {Date} dateOfTransaction 
     * @param {User} sender 
     * @param {User} receiver 
     * @param {Number} accountNumber 
     * @param {Number} amount 
     * @param {String} currency, like "USD"
     */
    constructor(dateOfTransaction , sender, receiver , accountNumber, amount,currency) {
        super(0 , dateOfTransaction, sender , receiver , amount , currency)
       
        
        this.accountNumber = accountNumber;
       
    }
    getTransaction() {
        return {
            dateOfTransaction: this.date,
            from: this.sender.getUser(),
            to: this.receiver.getUser(),
            method:"Bank Transaction",
            accountNumber: this.accountNumber,
            amount: this.amount
        }
    }

    /**
     * Adds the transaction to the database 
     */
    async addTransaction() {
        
      
        const sqlQuery = `INSERT INTO transaction (SENDER_EMAIL,RECEIVER_EMAIL,TYPE, AMOUNT , CURRENCY) VALUES ('${this.sender.getUser().email
        }', '${this.receiver.getUser().email}','bank-transaction', '${this.amount}' , '${this.currency}' )`;
        
        return await connection.query(sqlQuery)
            .then(([rows, fields]) => {
            return 'successfully added a new transaction ';
            })
            .catch((err) => err);
    }
}

module.exports =BankTransaction