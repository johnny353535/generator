# Gosub's HTML5 Boilerplate generator

Scaffolds out a [gosub](http://gosub.de/)-flavored [HTML5 Boilerplate](http://html5boilerplate.com)

## Getting started

- Install [Node.js](http://nodejs.org/) and [Bower](http://bower.io/#installing-bower)
- Install: `npm install -g generator-h5bp-gosub`
- Run it with [yo](https://github.com/yeoman/yo): `yo h5bp-gosub`


## Components


[Grunt](http://gruntjs.com/) is the tool to ...

[NPM](https://www.npmjs.org/), the Node Package Manager, is used to search, install and uninstall Grunt plugins.

[Bower](bower.io) is used to manage search, install and uninstall frameworks and libraries used in frontend development (like jQuery, modernirz, HTML5shiv etc.).


## File structure

```
.
+-- index.html
+-- js
|   main.js
|   +-- vendor
+-- less
|   +-- vendor
|   +-- style.less
+-- css
|   style.css
+-- node_modules
+-- bower_components
+-- dist
```

## Working with Grunt.js


### Running tasks

There are two default tasks available:

- dev: ...
- build: ...


### Adding plugins

- Find available Grunt plugins [here](http://gruntjs.com/plugins). Plugins with the `contrib-` prefix are officially supported and should be favored over other plugins.
- Install Grunt-plugins via `npm install [plugin name] --save-dev`. The optional parameter `--save-dev` tells NPM to save the plugin as a dependency of the project.
- Make the plugin available in your Gruntfile via grunt.loadNpmTasks('[plugin name]')`
- Consult the plugin's website for usage instructions

For further information consult the [Grunt website](http://gruntjs.com/getting-started).

Note: Grunt plugins should never be commited to version control, which is why their directories are excluded by the `.gitignore`.

### Adding tasks


## Development

###JavaSript


- Install Bower packages via `bower install [package name] --save`. The optional parameter `--save` tells Bower to save the package as a dependency of the project.

For further information consult the [Bower website](http://bower.io/#usage).

Note: Bower packages should never be commited to version control, which is why their directories are excluded by the `.gitignore`.

Plugins that can't be found on Bower have to be added manually.
Therefore ..

###Less

[LESS](http://lesscss.org) is blablabla

External CSS has to be placed in the `less/vendor` folder and should be imported in the `style.less` file via `@import (inline) "vendor/[filename].css"`.



## Build

- JavaScript-files get concatinated and minified using [r.js](https://github.com/jrburke/r.js), creating one file that contains all the code. The require.js library is being replaced with [almond](https://github.com/jrburke/almond), a minimal module loader that only contins the code necessary in production.
- The <script>-tag in the `index.html` is updated to include the generated `main.min.js` file.
