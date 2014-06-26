requirejs.config({
    paths: {
        plugins: 'plugins',
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        html5shiv: '../bower_components/html5shiv/dist/html5shiv',
        almond: '../bower_components/almond/almond'
    },
    packages: [

    ]
});


require(["plugins", "jquery"], function (undefined, $) {

    // Your code here
    $('body').append('<span>It works!</span>')

});