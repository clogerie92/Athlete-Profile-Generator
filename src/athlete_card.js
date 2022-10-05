const createCoachCard = function(coach) {
    return `
    <div class="col-6 mt-2">
        <div class="card">
            <div class="card-header bg-secondary">
                <h5>${coach.name}</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">Manager<i class="bi bi-clipboard2"></i></h5>
                <p class="id">ID: ${coach.id}</p>
                <p class="email">Email:<a href="${coach.email}">${coach.email}</a></p>
                <p class="office-number">Office Number: ${coach.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const createAssistantCoachCard = function(assistant_coach) {
    return `
    <div class="col-6 mt-2">
        <div class="card">
            <div class="card-header bg-secondary">
                <h5>${assistant_coach.name}</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">Manager<i class="bi bi-clipboard2"></i></h5>
                <p class="id">ID: ${assistant_coach.id}</p>
                <p class="email">Email:<a href="${coassistant_coachach.email}">${coach.email}</a></p>
                <p class="office-number">Office Number: ${assistant_coach.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const createVarsityCard = function(varisty) {
    return `
    <div class="col-6 mt-2">
        <div class="card">
            <div class="card-header bg-secondary">
                <h5>${varisty.id}</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">Intern<i class="bi bi-person-badge"></i></h5>
                <p class="id">ID: ${varisty.name}</p>
                <p class="email">Email:<a href="email at:${varisty.email}">${varisty.email}</a></p>
                <p class="school">Number: ${varisty.jerseyNumber}</p>
            </div>
        </div>
    </div>
    `;
};

const createJuniorVarsityCard = function(junior_varisty) {
    return `
    <div class="col-6 mt-2">
        <div class="card">
            <div class="card-header bg-secondary">
                <h5>${junior_varisty.id}</h5>
            </div>
            <div class="card-body">
                <h5 class="card-title">Intern<i class="bi bi-person-badge"></i></h5>
                <p class="id">ID: ${junior_varisty.name}</p>
                <p class="email">Email:<a href="email at:${junior_varisty.email}">${junior_varisty.email}</a></p>
                <p class="school">Number: ${junior_varisty.jerseyNumber}</p>
            </div>
        </div>
    </div>
    `;
};

createHtml = (athleteData) => {
    cardsArray = [];

    for (let i = 0; i < athleteData.length; i++) {
        const employee = athleteData[i];
        const role = athlete.getRole();

        if (role === "Coach") {
            const coachCard = createCoachCard(coach);
            console.log(coachCard);
            cardsArray.push(coachCard);
        } else if (role === "Assistant Coach") {
            const assistantCoachCard = createAssistantCoachCard(assistant_coach);
            cardsArray.push(assistantCoachCard);
            
        } else if (role === "Varisty") {
            const varistyCard = createVarsityCard(varsity);
            cardsArray.push(varistyCard);
        } else if (role === "Junior Varisty") {
            const juniorVarsityCard = createJuniorVarsityCard(junior_varsity);
            cardsArray.push(juniorVarsityCard);
        }
    }

    const teamCards = cardsArray.join("");
    const teamPage = teamWebPage(teamCards);
    return teamPage;
}

// creates team webpage
const teamWebPage = function(athleteCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Abel&family=Macondo&family=Montserrat:wght@700&display=swap" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-md">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile Generator</span>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="employee-cards">
                    ${athleteCards}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = createHtml;