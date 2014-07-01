# Gosub's HTML5 Boilerplate generator

Scaffolds out a [gosub](http://gosub.de/)-flavored [HTML5 Boilerplate](http://html5boilerplate.com)

## Getting started

Note: Most of the actions will be performed via the console/command-line/terminal. You should be familiar with opening the console, traversing directories and running commands.

- Install [Node.js](http://nodejs.org/) and [Bower](http://bower.io/#installing-bower) (`npm install bower -g`)
- Install: `npm install -g generator-h5bp-gosub`
- Run it with [yo](https://github.com/yeoman/yo): `yo h5bp-gosub`

Windows users:

Make sure that [git](http://git-scm.com/) is installed properly. To check that open a command line window and type `git`. It should show you a list of available git commands. If not, consult almighty Tom or Google.

## Components


- [Grunt](http://gruntjs.com/) is the tool to that does the dirty work for you. Compiling LESS files, concatinating and minifying JavaScript files, error checking and much more.

- [NPM](https://www.npmjs.org/), the Node Package Manager, is used to search, install and uninstall Grunt plugins.

- [Bower](bower.io) is used to manage search, install and uninstall frameworks and libraries used in frontend development (like jQuery, modernirz, HTML5shiv etc.).


## File structure

```
.
+-- bower_components/ (do not modify!)
+-- css/
|   style.css
+-- dist/
+-- fonts/
+-- js/
|   main.js
|   +-- vendor
+-- less/
|   +-- vendor
|   +-- style.less
+-- node_modules/ (do not modify!)
+-- .bowerrc
+-- .gitignore
+-- .htaccess
+-- .jshintrc
+-- 404.html
+-- bower.json
+-- Gruntfile.js
+-- index.html
+-- package.json
```

## Working with Grunt.js

To run a task use `grunt [task name]`. There are two default tasks available - *dev* and *build*. They will be explained in the following


### grunt dev: Development

The task used during development is called 'dev'. Run it with `grunt dev`.

#### JavaScript


- Install Bower packages via `bower install [package name] --save`. The optional parameter `--save` tells Bower to save the package as a dependency of the project.

For further information consult the [Bower website](http://bower.io/#usage).

Note: Bower packages should never be commited to version control, which is why their directories are excluded by the `.gitignore`.

Plugins that can't be found on Bower have to be added manually.
Therefore ..

#### LESS

[LESS](http://lesscss.org) is blablabla

External CSS has to be placed in the `less/vendor` folder and should be imported in the `style.less` file via `@import (inline) "vendor/[filename].css"`.

##### Bootstrap

[Bootstrap](http://getbootstrap.com) is blablabla
To add components you have to blablabla

### grunt build: Building the project

The task used to create a deployable version of the project is called 'build'. Run it with `grunt build`. It will export to the `dist` repository

- JavaScript-files get concatinated and minified using [r.js](https://github.com/jrburke/r.js), creating one file that contains all the code. The require.js library is being replaced with [almond](https://github.com/jrburke/almond), a minimal module loader that only contins the code necessary in production.
- The `<script>-tag in the `index.html` is updated to include the generated `main.min.js` file.


## Adding your own tasks

To add your own tasks ...

- Find available Grunt plugins [here](http://gruntjs.com/plugis). Plugins with the `contrib-` prefix are maintained by the Grunt team.
- Install Grunt-plugins via `npm install [plugin name] --save-dev`. The optional parameter `--save-dev` tells NPM to save the plugin as a dependency of the project.
- Make the plugin available in your Gruntfile via grunt.loadNpmTasks('[plugin name]')`
- Consult the plugin's website for usage instructions

For further information consult the [Grunt website](http://gruntjs.com/getting-started).

Note: Grunt plugins should never be commited to version control, which is why their directories are excluded by the `.gitignore`.
