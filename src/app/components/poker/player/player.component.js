(function() {
    'use strict';

    angular
        .module('app')
        .component('player', {
            templateUrl: 'app/components/poker/player/player.view.html',
            controller: Controller,
            controllerAs: 'vm',
            bindings: {
                player: '=',
                buyin: '='
            }
        });


    function Controller(GameService, AuthService, $localStorage) {
        var vm = this;
        vm.player = {};
        vm.joinGame = joinGame;
        vm.loginState = AuthService.loginState;
        console.log(vm.loginState)
        vm.$onInit = () => {
            console.log(vm.player)
            vm.bankroll = $localStorage.currentUser.bankroll;
        };


        function joinGame() {
            GameService.joinGame(vm.gameId, vm.seatId, function (result) {
            });
        }
    }
}());