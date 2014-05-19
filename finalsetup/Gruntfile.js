module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            connect: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    open: true,
                    livereload: 35729
                },
                livereload: {
                    options: {
                        open: true
                    }
                }

            },
            watch: {
                options: {
                    nospawn: true,
                    livereload: true
                },
                html: {
                    files: ['*.html']
                },
                js: {
                    files: ['js/**/*.js'],
                    tasks: ['jshint']
                },
                less: {
                    files: ['less/**/*.less'],
                    tasks: ['less']
                }
            },
            less: {
                development: {
                    options: {
                        compress: true,
                        yuicompress: true,
                        optimization: 2
                    },
                    files: {
                        // target.css file: source.less file
                        "css/style.css": "less/style.less"
                    }
                }
            },
            jshint: {
                options: {
                    ignores: []
                },
                all: [
                    'Gruntfile.js',
                    'js/**/*.js',
                    '!js/vendor/**/*.js'
                ]

            }
        }
    );

//    files: ['index.html', 'js/**/*.js', 'css/style.css']

// Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');

// Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('build', ['']);

}
;