# Solita Dev Academy pre-assignment

The project has been made as a part of Solita's Dev Acamedy applying process.

The full pre-assignment description can be found here:

**https://github.com/solita/dev-academy-2022-exercise**

### Description of the Project

The purpose of the Frontend project was to show farm data in graphs and in table format with filtering options. My project has the following features:

- Startpage
- Farms: display farms with details and location in Google Maps
- My Farm for users logged in
- Farm Data: dispay either all data from chosen farm or monthly data from chosen farm and sensor
- Contact

### Technologies used

Frontend is created with React. Application uses provided simple server as a backend. I have used MUI component library for UI and showing data in tables. I have not used any React component libraries before this project and it feels like a new world has opened up for me. I can hardly wait to get to know all the possibilities better.

## Cloning and Running the Application in local

For running the server install Java runtime environment (version 8 or newer).

For the frontend you will need `node` and `npm` installed globally on your machine.

Clone the project into local

`git clone https://github.com/AnneRuo/farmhub.git`

Install all the npm packages. Go into the project folder

`cd farmhub`

and type the following command to install all npm packages

`npm install`

Start the server with command

`java -jar bin/exercise-server.jar`

In order to run the application type the following command

`npm start`

The application runs on **http://localhost:3000**

You can view OpenApi-documentation from **http://localhost:8080**

## Project Status

This project is still in development. Things to do:

- [ ] Tests
- [ ] Show data in graphs
- [ ] User login and sign up
- [ ] User management
- [ ] UI for adding data to farms and creating new farms
