// create Coach class
class Coach {
    // use constructor to create template for Coach
    constructor(id, name, email, officeNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    // add methods to get Coach data
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Coach";
    }
}
// export class
module.exports = Coach;