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
                url: '/dashboard', 
                component: 'dashboard'
            })
            .state('login', {
                url: '/login',
                component: 'login'
            })
            .state('register', {
                url: '/register',
                component: 'register'
            })
            .state('game', {
                url: '/game/:gameId',
                component: 'game'
            })
            .state('account', {
                url: '/account/:username',
                component: 'account'
            });
    }
})();