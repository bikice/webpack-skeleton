# Webpack Skeleton with Express

This is a basic webpack skeleton with an express middleware.

## Features

- Babel to transpile ES6/ES7
- SASS
- Hot Module Reload
- Eslint
- Development/Production modes
- JEST for testing

## Getting Started

### Prerequisites

This boilerplate was created with NodeJS v14 

```
$ node --version
v14.2.0
```

### Installing

Get a copy of this repository with git clone

```
$ git clone https://github.com/bikice/webpack-skeleton.git
$ cd webpack-skeleton
```

Install all dependencies with npm.

```
$ npm install
```

Now you can compile the sources with npm.

```
$ npm run build:dev
```

And start the server with a file watcher with npm.

```
$ npm start
```

If you want to use the filewatcher and nodemon.

```
$ npm run start:all
```

The source files are located in the src folder. And the entry file is src/index.js

## Running the tests

Run the Jest Tests also with npm

```
$ npm run test
```

## Deployment

To create the production build run:

```
$ npm run build:prod
```

## Built With

* [NodeJS](https://nodejs.org/dist/latest-v14.x/docs/api/) - JavaScript Runtime
* [Webpack](https://webpack.js.org/concepts/) - The module bundler
* [JEST](https://jestjs.io/docs/en/getting-started) - Javascript Testing Framework

## Authors

* **Kristof Kamin** - *Initial work*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Amend

```
$ git commit --amend
$ git push -u origin master --force
```