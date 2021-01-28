import React from "react";

function ProjectCard(){
    return(
        <div>
    
            <div className="container">
            
            <div className="card">  
            <h1 className="card-title ml-2 mt-3"><u>Recent Projects</u></h1>
            <br/>
                <h3 className="card-title ml-2 mt-2">Cup of Sugar <hr/></h3>
                
            
                <img className="w-75 p-2 h-75 d-inline-block ml-3" src={process.env.PUBLIC_URL + "/photoAssets/cupofsugar.JPG"} alt="cupofsugarentry" />
               
                <div className="card-body">
                <h5 className="ml-3">Description:</h5>
                    <h6 className="card-text ml-4">
                    This website is a peer to peer rental application where users can post, rent, update, and delete items. For users to use the website, they must first create an account by signing up with Auth0 authentication (There is a known error where if the user signs in through Google, they will not get a valid JSON Web Token. Please "sign-up" with your google account). Once signed in, the user will be able to view rentable items in their area. The user will also be able to post a new item using the "Post an Item" link in the side nav-menu. After the user has posted an item, they can view a list of the items that belong to them which are rentable by viewing the "My Listings" link in the side nav-menu.</h6>
                    <h5 className="card-text m-3">Technology used:</h5>
                    <div className="card-text m-3 ml-4">
                    <p>Back-End</p>
                    <ul>
                        <li>Node.js - Used to install dependencies and to make command line scripts.</li>
                        <li>Express - Used in conjunction with MongoDB to create the backend of the website.</li>
                        <li>MySQL - Used as our Database</li>
                        <li>Sequelize - ORM used to communicate with MySQL</li>
                        <li>JawsDB - Used to connect MySQL to Heroku</li>
                        <li>Heroku - Used to host our application</li>
                    </ul>
                    <p>Front-End</p>
                    <ul>
                        <li>React - Used to create components and the front end of the website</li>
                        <li>JSX - Used in conjunction with React to create the front end of the website</li>
                        <li>CSS 3 - Used to style the website</li>
                        <li>Tailwind CSS - Used to structure the design of the site</li>
                        <li>Axios - Used to make API calls to our server</li>
                        <li>Auth0 - Used to authenticate users</li>
                        <li>Formspree - Used to handle form submissions</li>
                    </ul>
                 </div>
                </div>
                <div className="col-sm-6 ml-4">
                    <a type="button" className="btn btn-info" href="https://github.com/acm4219/Cup-of-Sugar">Github Repo</a>
                    <a type="button" className="btn btn-info ml-2" href="https://fierce-inlet-58475.herokuapp.com/">Live Site</a>
                </div>
                    <br />
            </div>
                <br />
                <div className="card">  
                
                    <h3 className="card-title ml-2 mt-2">Dad Jokes!<hr/></h3>
                    
                
                    <img className="w-75 p-3 h-75 d-inline-block ml-3" src={process.env.PUBLIC_URL + "/photoAssets/dadJokes1.JPG"} alt="Dadjokes1" />
                   
                    <div className="card-body">
                    <h5 className="ml-3">Description:</h5>
                        <h6 className="card-text ml-4">Do you ever feel that there aren't enough dad jokes in the world? Do you want to do your part to get more out there for people to see? Then the Dad Jokes! site is perfect for you. Add, rate and view other people's jokes with our intuitive bar of jokes. When you're done you can simply log out and come back later to see if the ratings have changed on your joke. You can become the Dadliest Dad out there with Dad Jokes!</h6>
                        <h5 className="card-text m-3">Technologies used:
                        </h5>
                        <div className="card-text m-3">
                            <ul>
                                <li>Handlebars</li>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>Bootstrap</li>
                                <li>Node.js</li>
                                <li>JQuery</li>
                                <li>Heroku</li>
                            </ul>
                        </div>                 
                    </div>
                    <div className="col-sm-6 ml-4">
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/peony">Github Repo</a>
                        <a type="button" className="btn btn-info ml-2" href="https://vast-gorge-32848.herokuapp.com/">Live Site</a>
                    </div>
                        <br />
                </div>
                    <br />
                <div className="card">
                    <h3 className="card-title pl-2 pt-2">CLI Employee Tracker <hr /></h3>
                   
                     <img className="w-75 p-3 h-75 d-inline-block ml-3" src={process.env.PUBLIC_URL + "/photoAssets/employeetracker.JPG"} alt="employee-tracker" />
                    <div className="card-body">
                    <h5 className="ml-3">Description:</h5>
                        <h6 className="card-text ml-4">This application is a recording application to keep track of your employee records. With this application you'll be able to view your employees, view the departments they're in, add more employees, update their info and remove them if needed. The CLI is really streamlined with a simple to use interface that anyone can use.</h6>
                        <h5 className="card-text ml-3">Technologies used:
                    </h5>
                    <div className="card-text ml-3">
                        <ul>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>MySQL</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    </div>
                    

                    <div className="col-sm-6 ml-4">
                        <a type="button" className="btn btn-info " href="https://github.com/acm4219/My-Employee-Tracker">Github Repo</a>
                        <a type="button" className="btn btn-info ml-2" href="https://acm4219.github.io/My-Employee-Tracker/MyEmployeeTrackerDemo.mp4">Live Demo</a>
                    </div>
                     <br />
                </div>
                 <br />
                <div className="card">
                     <h3 className="card-title ml-2 mt-2">Note Taker App <hr /></h3>
                         
                     <img className="w-75 p-3 h-75 d-inline-block ml-3" src={process.env.PUBLIC_URL + "/photoAssets/NoteTaker2.JPG"} alt="NoteTaker" />
                     <div className="card-body">
                     <h5 className="ml-3">Description:</h5>
                        <h6 className="card-text ml-3">This application can be utilized to take notes and keep them saved on your desktop. When you enter the application you can get started with a click of a button and begin to write notes on the following page. After you write them out you can save it and start writing more notes. It's fun for everyone!</h6>
                        <h5 className="card-text ml-3">Technologies used:
                    </h5>
                    <div className="card-text ml-3">
                        <ul>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>JavaScript</li>
                            <li>JQuery</li>
                        </ul>
                    </div>
                     </div>
                     <div className="col-sm-6 ml-4">
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/TakeMyNotesApp">Github Repo</a>
                        <a type="button" className="btn btn-info ml-2" href="https://whispering-gorge-41182.herokuapp.com/">Live Site</a>
                     </div>
                        <br />
                </div>
                    <br />
                <div className="card">
                    <h3 className="card-title ml-2 mt-2">Movie Hub<hr /></h3>
                    
                    <img className="w-75 p-3 h-75 d-inline-block ml-3" src={process.env.PUBLIC_URL + "/photoAssets/movie-hub-search.JPG"} alt="MovieHub" />
                    <div className="card-body">
                    <h5 className="ml-3">Description:</h5>
                        <h6 className="card-text ml-3">Welcome to Movie Hub! Where you can expand your movie horizons at the click of a button. We have a diverse selection of films you can search through by title, but if you want something more specific we provide that. Once you select a film you are able to also look for specific actors, directors and genres to influence what we recommend for you at the bottom of the page. We provide up to 3 suggestions based off what you are looking for, and from there you will be able to select the new film of your choice and fall down the rabbit hole of cinema. Who knows you may find something new that you've never heard of before.</h6>
                        <h5 className="card-text ml-3">Technologies used:
                    </h5>
                    <div className="card-text ml-3">
                        <ul>
                            <li>Materialize</li>
                            <li>API's</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-6 ml-4">
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/SAFT">Github Repo</a>
                        <a type="button" className="btn btn-info ml-2" href="https://acm4219.github.io/SAFT/">Live Site</a>
                    </div>   
                        <br />
                </div>
                    <br />
                <div className="card">
                    <h3 className="card-title pl-2 pt-2">Five Day Weather Forecast <hr /></h3>
                    
                    <img className="w-75 p-3 h-75 d-inline-block ml-3" src={process.env.PUBLIC_URL + "/photoAssets/five-day-weather.JPG"} alt="weatherforecast" />
                
                    <div className="card-body">
                    <h5 className="ml-3">Description:</h5>
                        <h6 className="card-text p-3">This application is used to look into the upcoming weather for your city up to five days. For every city that you look up you're able to go back to for the weather and cycle between the searches at a click. In the weather section you'll be able to see: the date, current weather condition, the icon, the temperature, humidity and windspeed.</h6>
                        <h5 className="card-text ml-3">Technologies used:
                    </h5>
                    <div className="card-text ml-3">
                        <ul>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>JavaScript</li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-6 ml-4">
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/Five-Day-Weather-Forecast-App">Github Repo</a>
                        <a type="button" className="btn btn-info ml-2" href="https://acm4219.github.io/Five-Day-Weather-Forecast-App/Assets/">Live Site</a>
                    </div>
                        <br />
                </div>
                    <br />
                <div className="card">
                    <h3 className="card-title pl-2 pt-2">Daily Planner <hr /></h3>
                       
                    <img className="w-75 p-3 h-75 d-inline-block ml-3" src={process.env.PUBLIC_URL + "/photoAssets/Daily Planner.JPG"} alt="Dailyplanner" />
                
                    <div className="card-body">
                    <h5 className="ml-3">Description:</h5>
                        <h6 className="card-text p-3">This application is a daily planner where you can save your daily plans and clear out the old ones. You use the application by entering in your plans for the day in the allotted slot of time and hit the save button to save it. It remains on the page until you clear the local storage and refresh for new slots to fill for your day.</h6>
                        <h5 className="card-text ml-3">Technologies used:
                    </h5>
                    <div className="card-text ml-3">
                        <ul>
                            <li>Local Storage</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>BootStrap</li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-6 ml-4">
                        <a type="button" className="btn btn-info" href="https://github.com/acm4219/Bootcamp-Daily-Planner-Project">Github Repo</a>
                        <a type="button" className="btn btn-info ml-2" href="https://acm4219.github.io/Bootcamp-Daily-Planner-Project/02-Homework/Develop/">Live Site</a>
                    </div>
                       <br />
                </div>
                    <br />
            </div>
        </div>

    )
}

export default ProjectCard;