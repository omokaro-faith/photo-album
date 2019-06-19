[![Coverage Status](https://coveralls.io/repos/github/omokaro-faith/photo-album/badge.svg?branch=develop)](https://coveralls.io/github/omokaro-faith/photo-album?branch=develop)
[![Coverage Status](https://travis-ci.org/omokaro-faith/photo-album.svg?branch=develop)](https://travis-ci.org/omokaro-faith/photo-album.svg?branch=develop)

# Alabin
Alabin is an Application that displays albums of users using data gotten from:

[https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5](https://jsonplaceholder.typicode.com/albums?_start=0&_limit=10)

[https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=10](https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=5)

[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)


***
#### Technology
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
- To start the app run `npm run build`.
- View app in port 3000.
- Run `npm run test` to run test.
- To view coverage gotten from coveralls run `npm run coveralls`.

#### Running Project with DOCKER
- Make sure you have docker installed
- Navigate to project directory on your terminal
- Run `docker build -t photo-album-app .`
- Run `docker run -it -p 8080:80 photo-album-app`
- View app in port 8080



 