requirejs.config({
    paths: {
        plugins: 'plugins',
        jquery: '../bower_components/jquery/dist/jquery',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
    },
    packages: [

    ]
});


require(["plugins", "jquery"], function (undefined, $) {

    // Your code here

});