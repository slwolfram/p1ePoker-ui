(function() {
    'use strict';

    angular
        .module('app')
        .component('game', {
            templateUrl: 'app/components/poker/game/game.view.html',
            controller: Controller,
            controllerAs: 'vm',
            bindings: {
                'player': '<',
                'table': '<',
                'buyin': '<',
            }
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
                    var seats = new Array(result.data.NumSeats) 
                    vm.game = (
                    {
                        "name" : result.data.Name,
                        "id" : result.data.GUID,
                        "stateCd" : result.data.GameState.StateCd,
                        "blinds" : result.data.Blinds[result.data.GameState.BlindLevel],
                        "buyin" : result.data.Buyin,
                        "seats" : seats,
                        "table" : (
                            {
                                "board" : result.data.GameState.TableState.Board,
                                "pot" : result.data.GameState.TableState.Pot
                            }),
                        "turnTime" : result.data.TurnTime,
                        "timestamp" : result.data.UpdateDTTM
                    });
                    console.log(vm.game)
                } else {

                }
            });
        }


        function joinGame(gameId, seatId) {

        }
    }
}());