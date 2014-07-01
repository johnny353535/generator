# Gosub's HTML5 Boilerplate generator

Scaffolds out a [gosub](http://gosub.de/)-flavored [HTML5 Boilerplate](http://html5boilerplate.com).

Note: Most of the actions will be performed via the console/command-line/terminal. You should be familiar with opening the console, traversing directories and running commands.

## Initial setup

Windows users: Download and install [git](http://git-scm.com/). To check, whether it's installed properly open a command line window and type `git`. It should show you a list of available git commands. If not, consult Tom or Google.

- Download and install [Node.js](http://nodejs.org/)
- Install [Yeoman](http://yeoman.io) (`npm install -g yo`)
- Install [Grunt](http://gruntjs.com) (`npm install -g grunt-cli`)
- Install [Bower](http://bower.io/#installing-bower) (`npm install -g bower`)
- Install the generator (`npm install -g https://github.com/gosub-communications/generator-gosub/tarball/master`). Make sure that you are a verified to access the repository.

## Setting up a new project

- Open a terminal window and go to the project folder you want to work in. Make sure it's empty.
- Create a project with the help of [Yeoman](https://github.com/yeoman/yo): `yo gosub`
- Install the required Grunt plugins (`npm install`)
- Install the required Bower plugins (`bower install`)

## Components

- [Grunt](http://gruntjs.com/) is the tool to that does the dirty work for you. Compiling LESS files, concatinating and minifying JavaScript files, error checking and much more.

- [NPM](https://www.npmjs.org/), the Node Package Manager, is used to search, install and uninstall Grunt plugins.

- [Bower](bower.io) is used to manage search, install and uninstall frameworks and libraries used in frontend development (like jQuery, modernizr, HTML5shiv etc.).


## Working with Grunt.js

To run a task use `grunt [task name]`. There are two default tasks available - *dev* and *build*. They will be explained in the following.


### grunt dev: Development

The task used during development is called 'dev'. Run it with `grunt dev`.
It starts a static webserver with autoreload enabled, compiles LESS files into CSS and checks JavaScript files for errors using [JSHint](http://jshint.com).


### grunt build: Building the project

The task used to create a deployable version of the project is called 'build'. Run it with `grunt build`. It will export to the `dist` repository

- JavaScript-files get concatinated and minified using [r.js](https://github.com/jrburke/r.js), creating one file that contains all the code. The require.js library is being replaced with [almond](https://github.com/jrburke/almond), a minimal module loader that only contains the code necessary in production.
- The `<script>`-tag in the `index.html` is updated to include the generated `main.min.js` file.
- LESS blablabla

## Adding JavaScript and CSS libraries

#### JavaScript

JavaScript plugins, libraries and frameworks can either be installed using Bower or by hand.
To check whether a package is available on Bower check the [Bower website](bower.io/search/) or use `bower search [package name]`. If it's not available you have to install it by hand.

##### Installing packages via Bower

- Install Bower packages via `bower install [package name] --save`. The optional parameter `--save` tells Bower to save the package as a dependency of the project.

For further information consult the [Bower website](http://bower.io/#usage).

Note: Bower packages should never be commited to version control, which is why their directories are excluded by the `.gitignore`.

##### Adding packages manually

Adding a package by hand is similiar to the "old way" of adding a JavaScript library to a project. It only differs in the way it's being referenced. This isn't done with a `<script>`-tag in the `index.html`, but rather with [RequireJS](http://requirejs.org).

- Download the package and copy it to the `js/vendor` folder.
- Reference it in the require.js-config file, which can usually be found at `js/main.js` ([link](http://requirejs.org/docs/api.html#usage)).
- To use it wrap your code in a `require`-block ([link](http://requirejs.org/docs/api.html#data-main)) or define a RequireJS/AMD-module ([link](http://requirejs.org/docs/api.html#define)).

For a more comprehensive introduction to RequireJS check out the [API docs](http://requirejs.org/docs/api.html).

#### LESS

CSS-libraries have to be placed in the `less/vendor` folder and should be imported in the `style.less` file via `@import (inline) "vendor/[filename].css"`. Some libraries (like Bootstrap) can also be found on Bower. These can be referenced as well (i.e. `@import (inline) "../bower_components/bootstrap/css/bootstrap.css";`).

##### Adding Bootstrap components

[Bootstrap](http://getbootstrap.com) is always installed. However, to use it the required components have to be referenced in the `less/style.less`-file, so they will be compiled into CSS. The location of the components is `bower_components/bootstrap/less`. You can find a list of all components on the [Bootstrap website](http://getbootstrap.com/components/). Bootstrap variables, normalize and mixins are added as a standard feature.

To use Bootstrap's variables you have to add your own `variables.less`-file and override the desired variables.


## Adding your own tasks

To add your own tasks to Grunt you have to install the desired Grunt plugin with NPM and configure it with the `Gruntfile.js`.

- Find available Grunt plugins [here](http://gruntjs.com/plugis). Plugins with the `contrib-` prefix are maintained by the Grunt team.
- Install Grunt-plugins via `npm install [plugin name] --save-dev`. The optional parameter `--save-dev` tells NPM to save the plugin as a dependency of the project.
- Make the plugin available in your Gruntfile via `grunt.loadNpmTasks('[plugin name]')`
- Consult the plugin's website for usage instructions

For further information consult the [Grunt website](http://gruntjs.com/getting-started).

Note: Grunt plugins should never be commited to version control, which is why their directories are excluded by the `.gitignore`.
