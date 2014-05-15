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
         * Copy HTML5boilerplate directories+files
         *
         */


        var ignores = [
            '.git',
            'CHANGELOG.md',
            'CONTRIBUTING.md',
            'LICENSE.md',
            'README.md',
            'crossdomain.xml',
            'humans.txt',
            'robots.txt',
            'apple-touch-icon-precomposed.png',
            'favicon.ico',
            'tile.png',
            'tile-wide.png',
            'browserconfig.xml'
        ];

        // TODO Detect all files that are custom automatically from the templates/custom directory
        var overrides = [
            '.gitignore'
        ]

		this.directory('h5bp/css','css');
		this.directory('h5bp/img','img');
		this.directory('h5bp/js','js');

		this.expandFiles('*', {
			cwd: this.sourceRoot()+'/h5bp',
			dot: true
		}).forEach(function (el) {
            console.log(el);

			if (ignores.indexOf(el) === -1 && overrides.indexOf(el) === -1) {
				this.copy('h5bp/'+el, el);
			}
		}, this);

        /**
         *
         * Replace custom gosub files
         *
         */

        this.expandFiles('*', {
            cwd: this.sourceRoot()+'/custom',
            dot: true
        }).forEach(function (el) {
            console.log(el);

                this.copy('custom/'+el, el, {
                    forceOverwrite: true,
                    force: true
                });

        }, this);

		cb();

	}.bind(this));

};

Generator.name = 'Gosub\'s HTML5 Boilerplate';
