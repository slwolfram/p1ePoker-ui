(function() {
    'use strict';

    angular
        .module('app')
        .component('register', {
            templateUrl: 'app/components/core/register/register.view.html',
            controller: Controller,
            controllerAs: 'vm'
        });

    function Controller($location, $scope) {
        var vm = this;
        function register() {
        }
    }
})();