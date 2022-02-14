
class Transaction {
    id;
    date;
    sender;

    receiver;
    amount;
    currency;

    constructor(id,  date , sender , receiver , amount , currency) {
        this.id = id ;
        this.date = date ;
        this.sender = sender ;
        this.receiver = receiver;
        this.amount = amount ;
        this.currency = currency
    }
}

module.exports =Transaction