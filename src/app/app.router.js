(function () {
    'use strict';

    angular
        .module('app')
        .config(config)


    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            })
            .state('dashboard', {
                url: 'dashboard', 
                component: 'dashboard'
            });
    }
})();