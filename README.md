# Weather-Journal App Project

## Table of content
* [overview](#Overview)
* [HowtoRuntheProject](#HowToRunTheProject)
* [Instructions](#Instructions)
* [Extras](#Extras)
* [Finished](#Finished)
## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## HowToRunTheProject

open terminal and write the following code:

1- to install json package write the command line `npm init -y`.

2- make sure that `node.js` is installed by writing the  command line `npm node --v` it showing you the last version it it's not in your device please install it by the command line `npm install node.js`

3- install express by `npm install express`

4- install body-parser by `npm install body-parser`

5- install cors by `npm install cors`

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.

## Finished
What was done? I enhanced the `server.js` with two endpoints and required middleware to enable `body-parser` and `cors`.

In `website/app.js` I created several functions for fetching weather data from OpenWeatherAPI, saving the data through the post request and updating the UI dynamically.
