(function() {
  "use strict";

  angular.module("app").factory("GameService", Service);

  function Service($http) {
    var service = {};
    service.games = [];
    service.fetchGameDetails = fetchGameDetails;
    service.fetchGame = fetchGame;
    service.getGame = getGame;
    service.removeGame = removeGame;
    service.joinGame = joinGame;
    return service;

    function fetchGameDetails(callback) {
      $http
        .get("http://localhost:5000/api/games/all")
        .then(function(response) {
          callback(response.data);
        })
        .catch(function(response) {
          console.log(response);
          callback(null);
        });
    }

    function fetchGame(gameId, callback) {
      $http
        .get("http://localhost:5000/api/games/" + gameId)
        .then(function(response) {
          callback(response.data);
        })
        .catch(function(response) {
          console.log(response);
          callback(null);
        });
    }

    function joinGame(gameId, callback) {
      if (
        $localStorage.currentUser === undefined ||
        $localStorage.currentUser === null
      ) {
        return callback(null);
      }
      $http
        .get("http://localhost:5000/api/game/join" + gameId, {
          headers: {
            Authentication: $localStorage.currentUser.token
          }
        })
        .then(function(response) {
          callback(response);
        })
        .catch(function(response) {
          console.log(response);
          callback(null);
        });
    }
  }
})();
