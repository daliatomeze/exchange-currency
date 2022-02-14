
class EmailService {
    #API_KEY = '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'
    #sgMail;

    #from = "omar.aburish@gmail.com"

    constructor() {
        this.#sgMail = require('@sendgrid/mail')

        this.#sgMail.setApiKey(this.#API_KEY)
    }

    async #sendEmail(to , subject , text ,html ) {
        const msg = {
            to: to, // Change to your recipient
            from: this.#from, // Change to your verified sender
            subject: subject,
            text: text,
            html: html,
        }

        try {
            await sgMail.send(msg)
            
            return "email has been sent"
        }
        catch(e) {
            console.error(e)
            return e
        }
    }


    /**
     * 
     * @param {User} moneySender  
     * @param {User} moneyReciever 
     * @param {Number} amonut 
     * @param {String} currency , like "USD" 
     */
    async sendTransactionEmail(moneySender , moneyReciever , amonut , currency) {
        let html = `
            <strong>
                ${moneyReciever.name}  , you have recieved ${amonut} ${currency} from ${moneySender.name}
            </strong>
        `
        try {
            
            await this.#sendEmail(moneySender.email , "Transaction has been Made" ,"" , html)
        }
        catch(e) {
            console.error(e)
        }

    }
}

module.exports = EmailService