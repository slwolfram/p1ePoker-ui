(function() {
    'use strict';

    angular
        .module('app')
        .component('board', {
            templateUrl: 'app/components/poker/board/board.view.html',
            controller: Controller,
            controllerAs: 'vm'
        });


    function Controller($stateParams, GameService) {
        var vm = this;
        vm.board = {};
        vm.$onInit = () => {
            vm.board = {};
        };
    }
}());