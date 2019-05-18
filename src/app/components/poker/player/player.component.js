(function() {
    'use strict';

    angular
        .module('appGame')
        .component('player', {
            templateUrl: 'app/game/components/player/player.view.html',
            controller: Controller,
            controllerAs: 'vm',
            bindings: {
                seatId: '@',
                gameId: '<'
            }
        });


    function Controller(GameService) {
        var vm = this;
        vm.player = {};
        vm.joinGame = joinGame;
        vm.getPlayer = getPlayer;
        vm.$onInit = () => {
            vm.player = getPlayer(vm.gameId, vm.seatId);
        };


        function joinGame() {
            GameService.joinGame(vm.gameId, vm.seatId, function (result) {
            });
        }


        function getPlayer(gameId, seatId) {
            return GameService.getPlayer(gameId, seatId);
        }
    }
}());