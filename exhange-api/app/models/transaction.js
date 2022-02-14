
class Transaction {

    date;
    sender;

    receiver;
    amount;
    currency;

    constructor( date , sender , receiver , amount , currency) {
        this.date = date ;
        this.sender = sender ;
        this.receiver = receiver;
        this.amount = amount ;
        this.currency = currency
    }
}

module.exports =Transaction