import User from "./user"

export default class Customer extends User{
    constructor(id,firstname,lastname,city,age,creditcardNumber){
        super(id,firstname,lastname,city,age)
        this.creditcardNumber=creditcardNumber 

    }

}