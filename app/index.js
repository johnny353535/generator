'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator () {
	yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.copyFiles = function () {

	var cb = this.async();

    var prompts = [
        {
            name: 'projectName',
            message: 'What is the name of your project?',
            default: 'h5bp-gosub'
        },

        {
            name: 'bootstrap',
            message: 'Do you want to include Bootstrap?',
            type: 'confirm',
            default: false
        }
    ]

    prompts = [];

	this.prompt(prompts, function (props) {

        console.log(props);


        /**
         *
         * Replace custom gosub files
         *
         */

        this.expandFiles('*', {
            cwd: this.sourceRoot(),
            dot: true
        }).forEach(function (el) {
            console.log(el);

                this.copy(el, el, {
                    forceOverwrite: true,
                    force: true
                });

        }, this);

		cb();

	}.bind(this));

};

Generator.name = 'Gosub\'s HTML5 Boilerplate';
