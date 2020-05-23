$(window).resize();

$(document).ready(function() {
    if(projectsPage){
        let personal = projects.filter(project => project.professional == false);
        displayTitle();
        personal.forEach(((project, index) => {
            displayProject(project, index);
        }));
    }else if(professionalPage){
        let profs = projects.filter(project => project.professional == true);
        displayTitle();
        profs.forEach(((project, index) => {
            displayProject(project, index);
        }));
    }else{
        displayProject('index');
    }
});

let projectsPage = this.location.pathname.includes('projects.html');
let professionalPage = this.location.pathname.includes('professional.html');
let projects = [
    {
        name: 'Madmonnaie',
        url: 'http://www.madmonnaie.fr',
        description: 'A simple blogging site built for a real estate agent. Built with React, styled with Bulma and populated with Contentful.',
        imagePath : 'madmonnaie',
        professional : true
    },
    {
        name: 'CB Inventory Server',
        url: 'https://url.coderbunker.com/search',
        description : 'An in house CMS built for CoderBunker to be used by staff and vistors to request rentals, get info on items & rooms and report problems. Built with Express, Bootstrap, Google Sheets API & utilizing QR codes for real-world user-item interactions.',
        imagePath : 'coderbunker-inventory',
        professional : true
    },
    {
        name: 'Covid-19 Tracker',
        url: 'http://covidtracker-us.com',
        description: 'Web app offering current State-by-State data related to the Covid-19 pandemic. Built with jQuery, styled with Bulma & utilizing HighCharts API for data visualization.',
        imagePath : 'covid-tracker',
        professional : false
    },
    {
        name: 'Weather Dashboard',
        url: '/weather-dashboard',
        description: 'Simple weather app offering geolocation forecast on intial visit, search functionality, current & five-day forecasts. Built with jQuery, Material Design Lite & utilizing TomTom, OpenWeather & IP-Info APIs for data.',
        imagePath : 'weather-dashboard',
        professional : false
    },
    {
        name: 'Day Planner',
        url: '/day-planner',
        description : 'Plan your day past, present & future. Basic task scheduler offering create & delete functionality for each hour of any day the user chooses. Built with jQuery, Bootstrap and Moment.js.',
        imagePath : 'day-planner',
        professional : false
    },
    {
        name: 'Password Generator',
        url: '/password-generator',
        description: 'Create a randomized & complex password easily. Takes multiple user inputs & efficietnly computes a password that is offered and ready to copy. Built with jQuery & Bootstrap.',
        imagePath : 'password-generator',
        professional : false
    },
    {
        name: 'jQuery Calculator',
        url: '/calculator',
        description: 'A basic JS powered & Bootstrap styled calculator. One of my first projects, be gentle.',
        imagePath : 'calculator',
        professional : false
    },
    {
        name: 'Pomodoro Timer',
        url: '/pomodoro',
        description : 'A pomodoro (i.e. tomato) timer to nudge you into starting any kind of task. Includes time-set & pausing functionality. Built with jQuery & styled with Bootstrap.',
        imagePath : 'pomodoro',
        professional : false
    },
    {
        name: 'Repsonsive Portfolio',
        url: '/responsive-portfolio',
        description: 'Simple demo site displaying the use of responsive design. Built with Bootstrap & utilizing NASA\'s APOD API.',
        imagePath : 'responsive-portfolio',
        professional : false
    },
    {
        name: 'NASA Quiz',
        url: '/nasa-quiz',
        description : 'An interactive NASA-themed multiple choice quiz. Built with jQuery, styled with Bootstrap & utilizing the JSONBin API.',
        imagePath : 'nasa-quiz',
        professional : false
    },
    {
        name: 'Hexy Simon',
        url: '/simonGame',
        description: 'The game of Simon where the user must follow the order of sequences presented to them by their computer opponent. Built with jQuery & Bootstrap.',
        imagePath : 'simonGame',
        professional : false
    },
    {
        name: 'Tic Tac Toe',
        url: '/ticTacToe',
        description: 'Battle against the computer in this classic game. Built with jQuery & Bootstrap.',
        imagePath : 'ticTacToe',
        professional : false
    },
    {
        name: 'Markdown Previewer',
        url: '/markdown',
        description: 'Checkout what you\'re writing in Markdown. This simple app allows the user to preview their Markdown document in realtime. Built with React.',
        imagePath : 'markdown',
        professional : false
    },
    {
        name: 'Leaderboard',
        url: '/leaderboard',
        description: 'A simple leaderboard. Built with React.',
        imagePath : 'leaderboard',
        professional : false
    }
];

function displayTitle(){
    let title;
    if(projectsPage){ title = 'Personal Projects'};
    if(professionalPage){ title = 'Professional Projects'};
    $("#page-header").text(title)
}

function displayProject(project, time){
    if(projectsPage || professionalPage){
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
                        <a href=${project.url}>${project.name}</a>
                    </div>
                </div>
            </div>`
    }else{
        card =
            `<div class="card-event mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--12-col-phone">
                <div class="mdl-grid" style=" width: 100%;">
                    <div class="mdl-cell mdl-cell--3-col mdl-cell--12-col-phone"></div>
                    <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone">
                        <div class="timeBlock" style="max-height: 80%; width: 100%;">
                            <h2 style='position: absolute; margin-top: 2px; width: 100%; text-align: right;' title='DOUG'>
                                DOUG       
                            </h2>
                            <div class="screenshot">
                                <img src='../imgs/body/seriousDoug.jpg' width='100%' style=/>
                            </div>
                        </div>
                    </div>
                    <div class='mdl-cell mdl-cell--3-col mdl-cell--12-col-phone'>
                        <div class="description spotlight">
                            <h3>DOUG</h3>
                            <hr/>
                            <ul>
                                <li>DOUG</li>
                                <li>Wind: DOUG</li>
                                <li>Humidity: DOUG</li>
                                <li>UV Index: 
                                    <span id='uvIndex' style='background-color: red;'>   
                                        DOUG
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
    }
    time = (time + 1) * 500;
    $(card).hide().appendTo('.blocks').delay(time).fadeIn('slow')
    // TODO SWAP OUT IMGS FOR GIF ON CARD CLICK
    // $(card).on('click', ()=>{
        // dig down to img change src to gif
        // <img src='../imgs/projects/${project.imagePath}/mobile.png' width='100%' />
    // })
}

    

                                          
