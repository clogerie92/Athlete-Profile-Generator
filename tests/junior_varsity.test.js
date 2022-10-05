// import corresponding class
const Junior_Varsity = require("../lib/Junior_Varsity");
// create Athlete test suite
    // describe Athlete test
describe("Junior_Varsity", () => {
    // describe object that is returned
    describe("Object", () => {
        it("Should return a Junior Varsity object", () => {
            // create new instance of Athlete
            const junior_varsity = new Junior_Varsity(3, "Russel Westbrook", "rw@lakers.com", 0);
            // use expect method to test expected data that is returned
            expect(junior_varsity.id).toEqual(3);
            expect(junior_varsity.name).toEqual("Russel Westbrook");
            expect(junior_varsity.jerseyNumber).toEqual(0);
        });
    });
    // describe methods
    // getJerseyNumber
    describe("get jersey number", () => {
        it("Should return the athlete's jersey number", () => {
            // create new instance of Athlete
            const junior_varsity = new Junior_Varsity(3, "Russel Westbrook", "rw@lakers.com", 0);
            // use expect method to test expected data that is returned
            expect(junior_varsity.getJerseyNumber()).toEqual(0); 
        });
    });
    // getRole()
    describe("get role", () => {
        it("Should return the athlete's role", () => {
            // create new instance of Athlete
            const junior_varsity = new Junior_Varsity(3, "Russel Westbrook", "rw@lakers.com", 0);
            // use expect method to test expected data that is returned
            expect(junior_varsity.getRole()).toEqual("Junior Varsity"); 
        });
    });
});