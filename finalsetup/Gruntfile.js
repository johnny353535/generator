module.exports = function (grunt) {

    // Configurable paths
    var config = {
        dist: 'dist'
    };

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Creates a local, static server with livereload
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

        // Watches HTML, JS, CSS and reloads the page
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
                tasks: ['less:dev']
            }
        },

        // Compiles LESS
        less: {
            options: {
                compress: true,
                yuicompress: true,
                optimization: 2
            },
            dev: {
                files: [
                    // target.css file: source.less file
                    { src: "css/style.less", dest: "less/style.css"}
                ]
            },
            dist: {
                files: [
                    // target.css file: source.less file
                    { src: "less/style.less", dest: config.dist + "/css/style.css"}
                ]
            }
        },

        // Checks for JS errors
        jshint: {
            options: {
                ignores: []
            },
            all: [
                'Gruntfile.js',
                'js/**/*.js',
                '!js/vendor/**/*.js'
            ]

        },

        // Empties the /dist directory
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            config.dist,
                                '!' + config.dist + '.git*'
                        ]
                    }
                ]
            }
        },

        // Concatinates and compresses the JS files
        requirejs: {
            compile: {
                options: {
                    name: 'main',
                    mainConfigFile: 'js/main.js',
                    baseUrl: 'js',
                    out: config.dist + '/js/main.js',
                    optimize: 'uglify2',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    inlineText: true,
                    findNestedDependencies: true
                }
            }
        },

        // Compresses index.html
        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [
                    {
                        src: 'index.html',
                        dest: config.dist + '/index.html'
                    }
                ]
            }
        },

        // Adds vendor-prefixes to style.css
        autoprefixer: {
            options: {
                browsers: ['last 3 version']
            },
            dist: {
                files: [
                    {
                        src: config.dist + '/css/style.css',
                        dest: config.dist + '/css/style.css'
                    }
                ]
            }
        },

        // Compresses style.css
        cssmin: {
            dist: {
                files: [
                    {
                        src: config.dist + '/css/style.css',
                        dest: config.dist + '/css/style.css'
                    }
                ]
            }
        },

        // Copies all specified folders and files over to /dist
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        dest: config.dist,
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            '{,*/}*.html',
                            'img/{,*/}*.*',
                            'fonts/{,*/}*.*'
                        ]
                    }
                ]

            }
        }
    });

    // Load the plugin that provides the "less" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

// Default task(s).
    //grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('build', ['clean:dist', 'copy:dist','requirejs', 'htmlmin:dist', 'less:dist', 'autoprefixer:dist', 'cssmin:dist']);

};