(function() {
    'use strict';

    angular
        .module('app')
        .component('game', {
            templateUrl: 'app/components/poker/game/game.view.html',
            controller: Controller,
            controllerAs: 'vm'
        });


    function Controller($stateParams, GameService) {
        var vm = this;
        vm.game = {};
        vm.fetchGame = fetchGame;
        vm.joinGame = joinGame;
        vm.$onInit = () => {
            vm.game = fetchGame($stateParams.gameId);
        };


        function fetchGame(gameId) {
            GameService.fetchGame(gameId, function(result) {
                if (result) {
                    vm.game = result.data;
                } else {

                }
            });
        }
    }
}());