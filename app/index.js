'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');


var Generator = module.exports = function Generator() {
    yeoman.generators.Base.apply(this, arguments);
};


util.inherits(Generator, yeoman.generators.NamedBase);

// These following functions are run by Yeoman in order of declaration

Generator.prototype.initializing = function () {

    console.log('----- Gosub\'s HTML5 Boilerplate Generator -----');

}

Generator.prototype.prompting = function () {

    var done = this.async();


    // All installation options for bower
    var prompts = [
        {
            type: 'checkbox',
            name: 'features',
            message: 'What packages would you like to install? Pick options with \'space\' and confirm with \'enter\'.',
            choices: [
                {
                    name: 'jQuery.Validation',
                    value: 'jquery.validation',
                    checked: false
                },
                {
                    name: 'FlexSlider',
                    value: 'flexslider',
                    checked: false
                },
                {
                    name: 'Backbone.js',
                    value: 'backbone',
                    checked: false
                }
            ]
        }
    ];

    this.prompt(prompts, function (answers) {
        this.answers = answers;
        done();
    }.bind(this));
}

Generator.prototype.copyFiles = function () {

    // Copy all files recursively

    this.expandFiles('**', {
        cwd: this.sourceRoot(),
        dot: true
    }).forEach(function (el) {

        this.copy(el, el);

    }, this);

    this.mkdir('fonts');

};

Generator.prototype.install = function () {

    /*        this.spawnCommand('bower', ['install'], function () {
     console.log('done');
     });*/

    /*this.spawnCommand('npm', ['install']);
     this.spawnCommand('bower', ['install']);
     this.spawnCommand('grunt', ['less:dev']);

     // Install optional bower components
     for(var i = 0; i < answers.features; i++) {
     this.spawnCommand('bower', ['install', answers.features[i], '--save']);
     }*/

};

Generator.prototype.end = function () {
    console.log('Done.');
};