
class User {
    #id;
    #email;

    constructor(id , email) {
        this.#id = id ;
        this.#email = email;
        
    }

    getUser() {
        return {
            id :this.#id,
            email:this.#email
        }
    }
}

module.exports =User