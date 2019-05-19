(function() {
    'use strict';

    angular
        .module('app')
        .component('pot', {
            templateUrl: 'app/components/poker/pot/pot.view.html',
            controller: Controller,
            controllerAs: 'vm'
        });


    function Controller($stateParams, GameService) {
        var vm = this;
        vm.pot = {};
        vm.$onInit = () => {
            vm.pot = {};
        };
    }
}());