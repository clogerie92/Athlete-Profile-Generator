// import corresponding class
const Varsity = require("../lib/Varsity");
// create Athlete test suite
    // describe Athlete test
describe("Varsity", () => {
    // describe object that is returned
    describe("Object", () => {
        it("Should return a Varsity object", () => {
            // create new instance of Athlete
            const varsity = new Varsity(2, "Anthony Davis", "ad@lakers.com", 3);
            // use expect method to test expected data that is returned
            expect(varsity.jerseyNumber).toEqual(3);
        });
    });
    // describe methods
    // getJerseyNumber()
    describe("get jerseyNumber", () => {
        it("Should return the athlete's jersey number", () => {
            // create new instance of Athlete
            const varsity = new Varsity(2, "Anthony Davis", "ad@lakers.com", 3);
            // use expect method to test expected data that is returned
            expect(varsity.getJerseyNumber()).toEqual(3); 
        });
    });
    // getRole()
    describe("get role", () => {
        it("Should return the athlete's role", () => {
            // create new instance of Athlete
            const varsity = new Varsity(2, "Anthony Davis", "ad@lakers.com", 3);
            // use expect method to test expected data that is returned
            expect(varsity.getRole()).toEqual("Varsity"); 
        });
    });
});