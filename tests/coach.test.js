// import corresponding class
const Coach = require("../lib/Coach");

// create coach test suite
    // describe coach test
describe("Coach", () => {
    // describe object that is returned
    describe("Object", () => {
        it("Should return a Coach object", () => {
            // create new instance of coach
            const coach = new Coach(4, "Darvin Ham", "dh@lakers.com");
            // use expect method to test expected data that is returned
            expect(coach.id).toEqual(4);
            expect(coach.name).toEqual("Darvin Ham");
            expect(coach.email).toEqual("dh@lakers.com");

        });
    });
    // describe methods
    // getId()
    describe("get id", () => {
        it("Should return the coach's id", () => {
            // create new instance of coach
            const coach = new Coach(4, "Darvin Ham", "dh@lakers.com");
            // use expect method to test expected data that is returned
            expect(coach.getId()).toEqual(4); 
        });
    });
    // getName()
    describe("get name", () => {
        it("Should return the coach's name", () => {
            // create new instance of coach
            const coach = new Coach(4, "Darvin Ham", "dh@lakers.com");
            // use expect method to test expected data that is returned
            expect(coach.getName()).toEqual("Darvin Ham"); 
        });
    });
    // getEmail()
    describe("get email", () => {
        it("Should return the coach's email", () => {
            // create new instance of coach
            const coach = new Coach(4, "Darvin Ham", "dh@lakers.com");
            // use expect method to test expected data that is returned
            expect(coach.getEmail()).toEqual("dh@lakers.com"); 
        });
    });
    // getOfficeNumber()
    describe("get office number", () => {
        it("Should return the coach's office numebr", () => {
            const coach = new Coach(4, "Darvin Ham", "dh@lakers.com", 7);
            // use expect method to test expected data that is returned
            expect(coach.getOfficeNumber()).toEqual(7);
        });
    });
    // getRole()
    describe("get role", () => {
        it("Should return the coach's role", () => {
            // create new instance of coach
            const coach = new Coach(4, "Darvin Ham", "dh@lakers.com");
            // use expect method to test expected data that is returned
            expect(coach.getRole()).toEqual("Coach"); 
        });
    });
});