(function() {
    'use strict';

    angular
        .module('app')
        .component('pokertable', {
            templateUrl: 'app/components/poker/board/board.view.html',
            controller: Controller,
            controllerAs: 'vm'
        });


    function Controller($stateParams, GameService) {
        var vm = this;
        vm.board = {};
        vm.getBoard = getBoard;
        vm.$onInit = () => {
            vm.board = getBoard($stateParams.gameId);
        };


        function getBoard(gameId) {
            return GameService.getBoard(gameId);
        }
    }
}());