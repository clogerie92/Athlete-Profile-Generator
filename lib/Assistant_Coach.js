// import parent class (Athlete)
const Coach = require("./Coach");
// create Assistant_Coach class
    // Use extend keyword to gain access to parent class
class Assistant_Coach extends Coach {
    // use constructor to create template for Assistant_Coach
    constructor(id, name, email, officeNumber) {
      // Use super keyword to gain access to parent class properties
      super(id, name, email, officeNumber);
    }
    // add methods to get Assistant Coach data
    getRole() {
        return "Assistant Coach";
    }
}
// export class
module.exports = Assistant_Coach;