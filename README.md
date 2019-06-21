***
#### Coverage and Build badges gotten from TravisCI and Coveralls for Alabin

[![Coverage Status](https://coveralls.io/repos/github/omokaro-faith/photo-album/badge.svg?branch=develop)](https://coveralls.io/github/omokaro-faith/photo-album?branch=develop)
[![Coverage Status](https://travis-ci.org/omokaro-faith/photo-album.svg?branch=develop)](https://travis-ci.org/omokaro-faith/photo-album.svg?branch=develop)

# Alabin
Alabin is an Application that displays albums of users using data gotten from:

[https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5](https://jsonplaceholder.typicode.com/albums)

[https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=10](https://jsonplaceholder.typicode.com/photos)

[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)


***
#### Technology
Application is bootstrapped using `Create React App`.

Application was developed using:
- Javascript
- React/Redux.
- CSS
- HTML


***
#### Installation and Setup
- Navigate to a directory within your terminal
- Clone the project from repository
- Using HTTP; $ git clone [https://github.com/omokaro-faith/photo-album](https://github.com/omokaro-faith/photo-album)
- Navigate to the root directory e.g $ cd photo-album
- Run `npm install`. This installs all the app's dependencies.
- Run `npm start` to start the application
- View app in port 3000.
- Run `npm run test` to run test.
- Run `npm run coverage` to view coverage.

#### To view the production build 
- To build the app run `npm run build`.
- Run `npm install -g serve`
- Run `serve -s build` in your terminal
- View App in port provided `http://172.20.10.3:${provided}`


#### Running Project with DOCKER
- Navigate to a directory within your terminal
- Clone the project from repository
- Using HTTP; $ git clone [https://github.com/omokaro-faith/photo-album](https://github.com/omokaro-faith/photo-album)
- Navigate to the root directory e.g $ cd photo-album
- Make sure you have docker installed
- Navigate to project directory on your terminal
- Run `docker build -t photo-album-app .`
- Run `docker run -it -p 8080:80 photo-album-app`
- View app in port 8080
