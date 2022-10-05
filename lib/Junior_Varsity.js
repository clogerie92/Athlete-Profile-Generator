// import parent class (Athlete)
const Athelte = require("./Athlete");
// create Junior_Varsity class
    // Use extend keyword to gain access to parent class
class Junior_Varsity extends Athelte {
    // Use constructor to create template for Junior_Varsity
    constructor(id, name, email, jerseyNumber) {
        // Use super keyword to gain access to parent class properties
        super(id, name, email, jerseyNumber);
    }
// add methods to get Junior_Varsity data
    getRole() {
        return "Junior Varsity";
    }
}
// export class
module.exports = Junior_Varsity;