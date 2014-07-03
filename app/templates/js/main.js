requirejs.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        html5shiv: '../bower_components/html5shiv/dist/html5shiv',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        respond: '../bower_components/respond/dest/respond.src',
        plugins: 'plugins'
    },
    packages: [

    ]
});


require(["jquery", "html5shiv", "respond", "plugins"], function (/* args */) {

    // Your code here
    $('body').append('<span>It works!</span>');

});