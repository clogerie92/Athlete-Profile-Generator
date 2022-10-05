// import parent class (Athlete)
const Athlete = require("./Athlete");
// create Varsity class
    // Use extend keyword to gain access to parent class
class Varsity extends Athlete {
    // Use constructor to create template for Varsity
    constructor(id, name, email, jerseyNumber) {
         // Use super keyword to gain access to parent class properties
         super(id, name , email);
        this.jerseyNumber = jerseyNumber;
    }
    // add methods to get Varsity data
    getJerseyNumber() {
        return this.jerseyNumber;
    }
    getRole() {
        return "Varsity";
    }
}
// export class
module.exports = Varsity;