module.exports = function (grunt) {

    // Configurable paths
    var config = {
        dist: 'dist'
    };


    /**
     *
     * Project configuration
     *
     */

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
                files: ['{,*/}*.html']
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
                    { src: "less/style.less", dest: "css/style.css"}
                ]
            },
            dist: {
                files: [
                    { src: "less/style.less", dest: config.dist + "/css/style.css"}
                ]
            }
        },

        // Checks for JS errors
        jshint: {
            options: {
                ignores: [],
                jshintrc: true
            },
            all: [
                'Gruntfile.js',
                'js/**/*.js',
                '!bower_components/**/*.js',
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
                            '{,*/}*.html', // Copy all HTML files
                            'img/{,*/}*.*', // Copy all pictures
                            'fonts/{,*/}*.*', // Copy all fonts
                            'js/vendor/require.js' // Copy require.js
                        ]
                    }
                ]

            }
        },
        bower: {
            all: {
                rjsConfig: 'js/main.js',
                options: {
                    transitive: true
                }
            }
        }
    });


    /**
     *
     * Load plugins
     *
     */

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-bower-requirejs');


    /**
     *
     * Register tasks
     *
     */

    grunt.registerTask('default', ['dev']); // The default task just runs the dev task
    grunt.registerTask('dev', ['connect', 'watch']);
    grunt.registerTask('build', ['clean:dist', 'copy:dist', 'requirejs', 'htmlmin:dist', 'less:dist', 'autoprefixer:dist', 'cssmin:dist']);

};