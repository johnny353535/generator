requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        html5shiv: '../bower_components/html5shiv/dist/html5shiv',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        plugins: 'plugins'
    },
    packages: [

    ]
});


require(["jquery", "html5shiv", "plugins"], function ($, undefined, undefined) {

    // Your code here
    $('body').append('<span>It works!</span>');

});