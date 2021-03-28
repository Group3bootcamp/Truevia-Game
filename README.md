<h1 align="center">Truevia</h1>
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/Group3bootcamp/Truevia-Game" />
    <img src="https://img.shields.io/github/languages/top/Group3bootcamp/Truevia-Game"  />
    <img src="https://img.shields.io/github/issues/Group3bootcamp/Truevia-Game" />
    <img src="https://img.shields.io/github/last-commit/Group3bootcamp/Truevia-Game" >
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/javascript-red" />
    <img src="https://img.shields.io/badge/express-orange" />
    <img src="https://img.shields.io/badge/sequelize-yellow"  />
    <img src="https://img.shields.io/badge/handlebars-green"  />
    <img src="https://img.shields.io/badge/dotenv-celadon"  />
    <img src="https://img.shields.io/badge/opentdb_api-blue"  />
    <img src="https://img.shields.io/badge/bycrpt-purple" />
    <img src="https://img.shields.io/badge/mySQL-magenta" />
</p>

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Contributing](#contributing)

-----

# Description

🔍 A Trivia game application made using node.js, express.js, mySQL, handlebars.js, Open Trivia DB API, bycrypt.js, and Sequelize ORM that challenges users in a time limited Trivia game. After the game is finished, their high score is posted to a leader board and emailed to them. Also, users can comment on each others high scores.

![Image 1](./public/images/truevia-game.gif)

[Truevia application deployment](https://mysterious-coast-93940.herokuapp.com/)

-----

# Installation

💾 npm dependencies installation

`npm init`

`npm i handlebars`

`npm i bcrypt`

`npm i express`

`npm i opentdb-api`

`npm i sequelize`

`npm i dotenv`

-----

# Usage

💻 To run on your localhost, run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

Enter PW when prompted

`source db/schema.sql`

`quit`

Create a .env file at the root of your project with the following variables. Set DB_User and DB_PW with your username and password.

`DB_NAME=trivia_game_site_db`

`DB_USER=`

`DB_PW=`

Run the following command at the root of your project:

`npm start`

Open up a browser and go to http://localhost:3001/.

Make an account and enjoy the game!

## User Stories

AS A User I want to play a trivia game,

I WANT to see how I compare to others on a leader board
SO THAT I can improve and move up the leader board

WHEN I visit the site for the first time,

THEN I am presented with a homepage, which has the leader board and navigation links to login or sign up

WHEN I choose to sign up,

THEN I am prompted to create a username, password and give my email address.

WHEN I click the sign up button,

THEN my user information is saved and I am logged into the site and am sent an email thanking me for signing up.

WHEN I revisit the site later and choose to login,

THEN I am prompted for my login information.

WHEN I am signed into the site,

THEN I see navigation links for the homepage, dashboard, Invite a friend and an option to logout.

WHEN  I click the dashboard link,

THEN I am shown the leader board,

WHEN  I click on a high score,

THEN  I am able to comment on that score.

WHEN I click play a game,

THEN I am taken into the game and will be asked a series of questions.

WHEN I complete a game,

THEN my high score is saved to the database and an email with my score is sent.

WHEN I click logout,

THEN I am logged out and can no longer comment on high scores.


-----

# Testing
✏️ <!--Any testing done?-->

-----

# License
📝 This project is [MIT](https://opensource.org/licenses/MIT) licensed.<br />

-----

# Contributing
✉️ Contact us with any questions ❓ <br>
✔️ [Raed Altaki](https://github.com/raedaltaki) <br>
✔️ [Jon Shallcross](https://github.com/jshallcross) <br>
✔️ [Matt Bianco](https://github.com/matthewAbianco) <br>
✔️ [Nathan McCaw](https://github.com/checkers-GM)<br>
✔️ [Richard Lim](https://github.com/lim95)