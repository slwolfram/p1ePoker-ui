(function() {
    'use strict';

    angular
        .module('app')
        .component('pokertable', {
            templateUrl: 'app/components/poker/table/table.view.html',
            controller: Controller,
            controllerAs: 'vm'
        });


    function Controller($stateParams, GameService) {
        var vm = this;
        vm.table = {};
        vm.getTable = getTable;
        vm.$onInit = () => {
            vm.table = getTable($stateParams.gameId);
        };


        function getTable(gameId) {
            return GameService.getTable(gameId);
        }
    }
}());