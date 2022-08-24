# Javascript File Explorer

## Description

This is a frontend web application that provides a simple UI for exploring a mock file system. A basic JSON data scructure with nested children is [included](./js/main.js) and serves as a mock data source. The project uses no framework or libraries outside of code linting, formatting, testing, and spinning up a development server. No libraries or dependencies are used in the deployed version of the application (all dependencies are dev dependencies).

The UI features a sidebar with the folder tree containing nested folders that can collapse/expand and a table that displays the contents of the selected folder (files and folders). Clicking a folder from either the folder tree or the folder contents table selects that folder for display.

Some basic unit tests for helper functions are included (instructions to run these tests can be found below).

## Demo

This application is deployed on Netlify and can be accessed at: https://dapper-buttercream-2d6a94.netlify.app/

The Netlify project is pointed at the `main` branch of this repo. Any new commits will trigger a new deploy automatically.

## Build

### Clone this repo

```sh
$ git clone https://github.com/ctopheryoung/vanilla-js-file-explorer
$ cd vanilla-js-file-explorer
```

_Note: This projects dependencies are development tools only (for linting, formatting, live development server, and testing) and are not necesary to run the application. To run the applicaiton without installing dependencies, simply open `index.html` in a web browser._

### Requirements for installing development tools

- [Node.js](https://nodejs.org/) >= 14

### Install dependencies

Use [npm](https://www.npmjs.com/) (included with Node.js) to install dependencies:

```sh
$ npm install
```

### Run Unit Tests

```sh
$ npm test
```

### Run

```sh
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
