// import inquirer dependency
const inquirer = require("inquirer");
// import file systems to dynamically create html file
const fs = require("fs");
// import file to generate athlete cards
const athleteCard = require("./src/athlete_card");
// import classes
const Athlete = require("./lib/Athlete");
const Coach = require("./lib/Coach");
const Assistant_Coach = require("./lib/Assistant_Coach");
const Varsity = require("./lib/Varsity");
const Junior_Varsity = require("./lib/Junior_Varsity");
// create array to hold athlete profile cards
const athletes = [];
// prompt coach/assistant coach
const addCoach = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please enter the coach's role.",
            choices: ["Coach", "Assistant Coach"],
            name: "role"
        },
        {
            type: "input",
            message: "Please enter the coach's id.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the coach's name.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the coach's email.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the coach's office number.",
            name: "officeNumber"
        },
    ]).then(coachInfo => {
        // destructor properties from coach object
        const { id, name, email, officeNumber } = coachInfo;
        // create new instance of coach
        const coach = new Coach(id, name, email, officeNumber);
        // push coach into athletes array
        athletes.push(coach);
    });
}
// prompt varisty/junior varsity
const addAthlete = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please enter the athlete's role.",
            choices: ["Varsity", "Junior Varsity"],
            name: "role"
        },
        {
            type: "input",
            message: "Please enter the athlete's id.",
            name: "id"
        },
        {
            type: "input",
            message: "Please enter the athlete's name.",
            name: "name"
        },
        {
            type: "input",
            message: "Please enter the athlete's email.",
            name: "email"
        },
        {
            type: "input",
            message: "Please enter the athlete's jersey number.",
            name: "jerseyNumber"
        },
    ]).then(athleteInfo => {
        // destructor properties from coach object
        const { id, name, email, jerseyNumber } = athleteInfo;
        let newAthlete;
        
        if (role === "Varsity") {
            newVarsityAthlete = new Athlete(id, name, email, jerseyNumber);
            console.log(`Added : ${newVarsityAthlete}`);
        } else if (role === "Junior Varsity") {
            newJuniorVarsityAthlete = new Athlete(id, name, email, jerseyNumber);
            console.log(`Added Varisty Athlete: ${newJuniorVarsityAthlete}`);
        }
        athletes.push(newVarsityAthlete);
        athletes.push(newJuniorVarsityAthlete);
    });
}
// create funtion to create html file
const htmlFile = teamData => {
    fs.writeFile("./dist/index.html", teamData, error => {
        if (error) {
            console.log(error);
        } else {
            console.log("index.html file created in dist folder!");
        }
    })
};
// create funtion to send athlete data to html file
addManager().then(addAthlete).then(athletes => {
    return createHTML(athletes);
}).then(htmlPage => {
    return htmlFile(htmlPage);
}).catch(error => {
    console.log(error);
});