$(document).ready(function() {
    displayTitle();
    let arr = projects.filter(project => project.professional == (projectsPage ? false : true)); 
    arr.forEach(((project, index) => {
        displayProject(project, index);
    }));
});

let projectsPage = this.location.pathname.includes('projects.html');
let professionalPage = this.location.pathname.includes('professional.html');
let projects = [
    {
        name: 'Madmonnaie',
        url: 'http://www.madmonnaie.fr',
        repo: 'https://github.com/Spazcool/madmoney',
        description: 'A simple blogging site built for a real estate agent. Built with React, styled with Bulma and populated with Contentful.',
        imagePath : 'madmonnaie',
        professional : true
    },
    {
        name: 'CB Inventory Server',
        url: 'https://url.coderbunker.com/search',
        repo: 'https://github.com/coderbunker/inventory-server',
        description : 'An in house CMS built for CoderBunker to be used by staff and vistors to request rentals, get info on items & rooms and report problems. Built with Express, Bootstrap, Google Sheets API & utilizing QR codes for real-world user-item interactions.',
        imagePath : 'coderbunker-inventory',
        professional : true
    },
    {
      name: 'Digital Dude',
      url: 'http://www.digital-dude.com',
      repo: 'https://github.com/megan-pg/tamagotchi',
      description: 'A retro full-stack clone of the original Tamagotchi game from the 80\'s. Create an account, add some pets & keep them alive as long as you can.',
      imagePath : 'digital-dude',
      professional : false
    },
    {
      name: 'Burger App',
      url: 'https://add-devour-vomit-burger.herokuapp.com',
      repo: 'https://github.com/Spazcool/burger-app',
      description: 'A simple demo of a fullstack application, Eat-Da-Burger! is hosted in Heroku & utilizes a Node backend, using a RESTful API routed with Express that makes requests to a MySQL database & ultimately serves the user a view using Handlebars templates.',
      imagePath : 'burger-app',
      professional : false
    },
    {
      name: 'Leaderboard',
      url: '/leaderboard',
      repo: 'https://github.com/Spazcool/leaderboard',
      description: 'A React-based leaderboard app, pulling data from freeCodeCamp\'s most recent forum users.',
      imagePath : 'leaderboard',
      professional : false
    },
    {
      name: 'Covid-19 Tracker',
      url: 'http://covidtracking-us.com',
      repo: 'https://github.com/Spazcool/covid-data-collector',
      description: 'Web app offering current State-by-State data related to the Covid-19 pandemic. Built with jQuery, styled with Bulma & utilizing HighCharts API for data visualization.',
      imagePath : 'covid-tracker',
      professional : false
    },
    {
      name: 'Weather Dashboard',
      url: '/weather-dashboard',
      repo: 'https://github.com/Spazcool/weather-dashboard',
      description: 'Simple weather app offering geolocation forecast on intial visit, search functionality, current & five-day forecasts. Built with jQuery, Material Design Lite & utilizing TomTom, OpenWeather & IP-Info APIs for data.',
      imagePath : 'weather-dashboard',
      professional : false
    },
    {
      name: 'Day Planner',
      url: '/day-planner',
      repo: 'https://github.com/Spazcool/day-planner',
      description : 'Plan your day past, present & future. Basic task scheduler offering create & delete functionality for each hour of any day the user chooses. Built with jQuery, Bootstrap and Moment.js.',
      imagePath : 'day-planner',
      professional : false
    },
    {
      name: 'Password Generator',
      url: '/password-generator',
      repo: 'https://github.com/Spazcool/password-generator',
      description: 'Create a randomized & complex password easily. Takes multiple user inputs & efficietnly computes a password that is offered and ready to copy. Built with jQuery & Bootstrap.',
      imagePath : 'password-generator',
      professional : false
    },
    {
      name: 'Markdown Previewer',
      url: '/markdown',
      repo: 'https://github.com/Spazcool/markdown',
      description: 'Checkout what you\'re writing in Markdown. This simple app allows the user to preview their Markdown document in realtime. Built with React.',
      imagePath : 'markdown',
      professional : false
    },
  {
      name: 'jQuery Calculator',
      url: '/calculator',
      repo: 'https://github.com/Spazcool/calculator',
      description: 'A basic JS powered & Bootstrap styled calculator. One of my first projects, be gentle.',
      imagePath : 'calculator',
      professional : false
    },
    {
      name: 'Pomodoro Timer',
      url: '/pomodoro',
      repo: 'https://github.com/Spazcool/pomodoro',
      description : 'A pomodoro (i.e. tomato) timer to nudge you into starting any kind of task. Includes time-set & pausing functionality. Built with jQuery & styled with Bootstrap.',
      imagePath : 'pomodoro',
      professional : false
    },
    {
      name: 'Repsonsive Portfolio',
      url: '/responsive-portfolio',
      repo: 'https://github.com/Spazcool/responsive-portfolio',
      description: 'Simple demo site displaying the use of responsive design. Built with Bootstrap & utilizing NASA\'s APOD API.',
      imagePath : 'responsive-portfolio',
      professional : false
    },
    {
      name: 'NASA Quiz',
      url: '/nasa-quiz',
      repo: 'https://github.com/Spazcool/nasa-quiz',
      description : 'An interactive NASA-themed multiple choice quiz. Built with jQuery, styled with Bootstrap & utilizing the JSONBin API.',
      imagePath : 'nasa-quiz',
      professional : false
    },
    {
      name: 'Tic Tac Toe',
      url: '/ticTacToe',
      repo: 'https://github.com/Spazcool/ticTacToe',
      description: 'Battle against the computer in this classic game. Built with jQuery & Bootstrap.',
      imagePath : 'ticTacToe',
      professional : false
    },

// TODO UNCOMMENT WHEN THEY'VE BEEN FIXED UP
    // {
    //     name: 'Hexy Simon',
    //     url: '/simonGame',
    //     repo: 'https://github.com/Spazcool/simonGame',
    //     description: 'The game of Simon where the user must follow the order of sequences presented to them by their computer opponent. Built with jQuery & Bootstrap.',
    //     imagePath : 'simonGame',
    //     professional : false
    // },
    // {
    //     name: 'Recipe Board',
    //     url: '/react-recipe',
    //     repo: 'https://github.com/Spazcool/react-recipe',
    //     description: 'A simple recipe board. Built with React.',
    //     imagePath : 'react-recipe',
    //     professional : false
    // }
];

function displayTitle(){
    let title;
    if(projectsPage){ title = 'Personal Projects'};
    if(professionalPage){ title = 'Professional Projects'};
    $("#page-header").text(title)
}

function displayProject(project, time){
    card = 
        `<div class="card-event mdl-card mdl-shadow--2dp mdl-cell mdl-cell--2-col mdl-cell--12-col-phone project-card" style="border-radius: 5px">
            <div class="timeBlock mdl-cell mdl-cell--12-col mdl-cell--12-col-phone" style="max-height: 100%;">
                <h4 style="text-align:center;">${project.name}</h4>
                <hr/>
                <div class="screenshot">
                    <img src='../imgs/projects/${project.imagePath}/mobile.png' width='100%' />
                </div>
            </div>
            <div class="mdl-card__actions mdl-card--border center-items">
                <div class="description">
                    <p>${project.description}</p>
                    <div style="text-align:center;">
                        <a href=${project.url}><i class="fas fa-globe"></i> ${project.name}</a>
                        <br/>
                        <br/>
                        <a href=${project.repo}><i class="fab fa-github-square"></i> Repo</a>
                    </div>
                </div>
            </div>
        </div>`;

    time = (time + 1) * 100;
    $(card).hide().appendTo('.blocks').delay(time).fadeIn('slow')
    $(".screenshot").mouseenter(function(){
        let imgSrc = $(this).children().attr("src");
        let gifSrc = imgSrc.slice(0, -3) + 'gif';
        $(this).children().attr("src", gifSrc);
    })
}