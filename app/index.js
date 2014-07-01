'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator () {
	yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.copyFiles = function () {

    // Copy all files recursively
    this.expandFiles('**', {
        cwd: this.sourceRoot(),
        dot: true
    }).forEach(function (el) {

        this.copy(el, el);

    }, this);

    console.log('Boilerplate created. Please run "npm install" and "bower install" as administrator to finish setup.');

};