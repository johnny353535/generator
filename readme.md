# Gosub's HTML5 Boilerplate generator

Scaffolds out a [gosub](http://gosub.de/)-flavored [HTML5 Boilerplate](http://html5boilerplate.com)

## Getting started

- Install [Node.js](http://nodejs.org/) and [Bower](http://bower.io/#installing-bower)
- Install: `npm install -g generator-h5bp-gosub`
- Run it with [yo](https://github.com/yeoman/yo): `yo h5bp-gosub`


## Components

### Grunt

[Grunt](http://gruntjs.com/) is the tool to ...

[NPM](https://www.npmjs.org/), the Node Package Manager, is used to search, install and uninstall Grunt plugins.

- Find available Grunt plugins [here](http://gruntjs.com/plugins). Plugins with the `contrib-` prefix are officially supported and should be favored over other plugins.
- Install Grunt-plugins via `npm install [plugin name] --save-dev`. The parameter `--save-dev` tells NPM to save the plugin as a dependency of the project.

For further information consult the [Grunt website](http://gruntjs.com/getting-started).

Note: Grunt plugins should never be commited to version control, which is why their directories are excluded by the `.gitignore`.


#### LESS/CSS

External CSS has to be placed in the `less/vendor` folder and should be imported in the `style.less` file via `@import (inline) "vendor/[filename].css"`.



### Bower

[Bower](bower.io) is used to manage search, install and uninstall frameworks and libraries used in frontend development (like jQuery, modernirz, HTML5shiv etc.).

- Install Bower packages via `bower install [package name]`

For further information consult the [Bower website](http://bower.io/#usage).

Note: Bower packages should never be commited to version control, which is why their directories are excluded by the `.gitignore`.
