// import corresponding class
const Athlete = require("../lib/Athlete");

// create Athlete test suite
    // describe Athlete test
describe("Athlete", () => {
    // describe object that is returned
    describe("Object", () => {
        it("Should return an Athlete object", () => {
            // create new instance of Athlete
            const athlete = new Athlete(1, "LeBron James", "lb@lakers.com");
            // use expect method to test expected data that is returned
            expect(athlete.id).toEqual(1);
            expect(athlete.name).toEqual("LeBron James");
            expect(athlete.email).toEqual("lb@lakers.com");

        });
    });
    // describe methods
    // getId()
    describe("get id", () => {
        it("Should return the athlete's id", () => {
            // create new instance of Athlete
            const athlete = new Athlete(1, "LeBron James", "lb@lakers.com");
            // use expect method to test expected data that is returned
            expect(athlete.getId()).toEqual(1); 
        });
    });
    // getName()
    describe("get name", () => {
        it("Should return the athlete's name", () => {
            // create new instance of Athlete
            const athlete = new Athlete(1, "LeBron James", "lb@lakers.com");
            // use expect method to test expected data that is returned
            expect(athlete.getName()).toEqual("LeBron James"); 
        });
    });
    // getEmail()
    describe("get email", () => {
        it("Should return the athlete's email", () => {
            // create new instance of Athlete
            const athlete = new Athlete(1, "LeBron James", "lb@lakers.com");
            // use expect method to test expected data that is returned
            expect(athlete.getName()).toEqual("LeBron James"); 
        });
    });
    // getRole()
    describe("get role", () => {
        it("Should return the athlete's role", () => {
            // create new instance of Athlete
            const athlete = new Athlete(1, "LeBron James", "lb@lakers.com");
            // use expect method to test expected data that is returned
            expect(athlete.getRole()).toEqual("Athlete"); 
        });
    });
});