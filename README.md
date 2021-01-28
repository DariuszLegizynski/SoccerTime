# SoccerTime

Reac-redux application to browse your favorite football leagues and teams.

https://soccer-time-ea700.web.app/home

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What is needed for the software to run.

* npm

`npm i npm@latest -g`

## Installing

1. Clone the repository

`git clone https://github.com/DariuszLegizynski/SoccerTime.git`

2. Run npm install inside project root directory

`npm install`

3. Start the server

`npm run start`

4. Enjoy! :-)

# Built with

* React

* Redux

* SCSS

* Firebase


## Brief summary

1. The application makes an API call to the "TheSportsDB" to get all of the supported countries.
2. The country names are taken and each is checked, if it has a footbal league.
3. Each country with a football league = null is filtered out.
4. Every non-null result is presented.
5. The leagues table (season) gets changed on the 1.08 of each year (leagueTable.js -> const seasonChangeDate).
