# Javascript File Explorer

## Description

This is a frontend web application that provides a simple UI for exploring a file system. Mock data is [included](./js/main.js) in the project as a basic JSON data scructure with nested children. The project uses no framework or libraries outside of code linting and formatting, testing, and spinning up a development server. No libraries or dependencies are used in the deployed application.

The UI features a sidebar with the folder tree containing nested folders and a table that displays the contents of the selected folder (files and folders). Clicking a folder from either the folder tree or the folder contents table will display that folders contents in the folder contents table.

Some basic unit tests are included to test a couple of helper functions (instructions to run these tests below).

<!-- TODO: Note on scalability, different data scructures with ID which would allow for highlighting the active folder, and more efficient DOM manipulation, getters/setters, etc. -->

## Demo

This application is deployed on Netlify and can be accessed at: https://peaceful-empanada-c814a0.netlify.app/

The Netlify project is pointed at the `main` branch of this repo. Any new commits will trigger a new deploy automatically.

## Build

### Requirements

- [Node.js](https://nodejs.org/) >= 14

### Clone this repo

```sh
$ git clone https://github.com/ctopheryoung/vanilla-js-file-explorer
$ cd vanilla-js-file-explorer
```

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
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
