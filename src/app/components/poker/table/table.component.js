(function() {
    'use strict';

    angular
        .module('app')
        .component('pokertable', {
            templateUrl: 'app/components/poker/table/table.view.html',
            controller: Controller,
            controllerAs: 'vm',
            bindings: {
                table: '='
            }
        });


    function Controller($stateParams, GameService) {
        var vm = this;
        vm.table = {};
        vm.$onInit = () => {
            console.log(vm.table)
        };
    }
}());