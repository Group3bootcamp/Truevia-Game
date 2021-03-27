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

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)
- [Contributing](#contributing)

-----

## Description

🔍 A Trivia game application made using node.js, express.js, mySQL, handlebars.js, Open Trivia DB API, bycrypt.js, and Sequelize ORM that challenges users in a time limited Trivia game. After the game is finished, their high score is posted to a leaderboard and emailed to them. Also, users can comment on each others high scores.

![Truevia app] <!--(./URL of the screenshot of the game)-->

[Truevia application deployment]() <!--heroku url-->     

-----

## Installation

💾 npm dependencies installation

`npm init`

`npm i handlebars`

`npm i bcrypt`

`npm i express`

`npm i opentdb-api`

`npm i sequelize`

`npm i dotenv`

-----

## Usage

💻 To run on your localhost, run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

Enter PW when promted

`source db/schema.sql`

`quit`

Create a .env file at the root of your project with the following variables. Set DB_User and DB_PW with your username and password.

`DB_NAME=trivia_game_site_db`

`DB_USER=`

`DB_PW=`

Run the following command at the root of your project:

`npm server.js` <!--Mabye change this to "npm start" later?-->

Open up a browser and go to http://localhost:3001/.

Make an account and enjoy the game!

-----

## Testing
✏️ <!--Any testing done?-->

-----

## License
📝 This project is [MIT](https://opensource.org/licenses/MIT) licensed.<br />

-----

## Contributing
✉️ Contact us with any questions ❓ <br>
✔️ [Raed Altaki](https://github.com/raedaltaki) <br>
✔️ [Jon Shallcross](https://github.com/jshallcross) <br>
✔️ [Matt Bianco](https://github.com/) <br> <!--add your github-->
✔️ [Nathan McCaw](https://github.com/)<br> <!--add your github-->
✔️ [Richard Lim](https://github.com/lim95)