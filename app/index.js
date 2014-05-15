'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var Generator = module.exports = function Generator () {
	yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.copyFiles = function () {

	var cb = this.async();
	var ignores = [
		'.git',
		'CHANGELOG.md',
		'CONTRIBUTING.md',
		'LICENSE.md',
		'README.md'
	];

	this.prompt([{
		type: 'confirm',
		name: 'docs',
		message: 'Would you like docs included?',
		default: false
	}], function (props) {
		if (props.docs) {
			this.directory('doc');
		}

		this.directory('css');
		this.directory('img');
		this.directory('js');
		this.expandFiles('*', {
			cwd: this.sourceRoot(),
			dot: true
		}).forEach(function (el) {
			if (ignores.indexOf(el) === -1) {
				this.copy(el, el);
			}
		}, this);

		cb();
	}.bind(this));

};

Generator.name = 'Gosub\'s HTML5 Boilerplate';
