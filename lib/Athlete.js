// create Athelte class
class Athelte {
    // use constructor to create template for Athelte
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    // add methods to get Athlete data
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
        return "Athlete";
    }

}
// export class
module.exports = Athelte;
