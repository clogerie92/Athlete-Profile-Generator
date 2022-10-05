// import corresponding class
const Assistant_Coach = require("../lib/Assistant_Coach");

// create coach test suite
    // describe coach test
describe("Assistant_Coach", () => {
    // describe object that is returned
    describe("Object", () => {
        it("Should return an Assistant Coach object", () => {
            // create new instance of coach
            const assistant_coach = new Assistant_Coach(5, "Chris Jent", "cj@lakers.com", 8);
            // use expect method to test expected data that is returned
            expect(assistant_coach.id).toEqual(5);
            expect(assistant_coach.name).toEqual("Chris Jent");
            expect(assistant_coach.email).toEqual("cj@lakers.com");

        });
    });
    // describe methods
    // getId()
    describe("get id", () => {
        it("Should return the assistant_coach's id", () => {
            // create new instance of assistant_coach
            const assistant_coach = new Assistant_Coach(5, "Chris Jent", "cj@lakers.com", 8);
            // use expect method to test expected data that is returned
            expect(assistant_coach.getId()).toEqual(5); 
        });
    });
    // getName()
    describe("get name", () => {
        it("Should return the assistant_coach's name", () => {
            // create new instance of assistant_coach
            const assistant_coach = new Assistant_Coach(5, "Chris Jent", "cj@lakers.com", 8);
            // use expect method to test expected data that is returned
            expect(assistant_coach.getName()).toEqual("Chris Jent"); 
        });
    });
    // getEmail()
    describe("get email", () => {
        it("Should return the assistant_coach's email", () => {
            // create new instance of assistant_coach
            const assistant_coach = new Assistant_Coach(5, "Chris Jent", "cj@lakers.com", 8);
            // use expect method to test expected data that is returned
            expect(assistant_coach.getEmail()).toEqual("cj@lakers.com"); 
        });
    });
    // getOfficeNumber()
    describe("get office number", () => {
        it("Should return the assistant_coach's office numebr", () => {
            const assistant_coach = new Assistant_Coach(5, "Chris Jent", "cj@lakers.com", 8);
            // use expect method to test expected data that is returned
            expect(assistant_coach.getOfficeNumber()).toEqual(8);
        });
    });
    // getRole()
    describe("get role", () => {
        it("Should return the assistant_coach's role", () => {
            // create new instance of assistant_coach
            const assistant_coach = new Assistant_Coach(5, "Chris Jent", "cj@lakers.com", 8);
            // use expect method to test expected data that is returned
            expect(assistant_coach.getRole()).toEqual("Assistant Coach"); 
        });
    });
});