(function() {
  "use strict";

  angular.module("app").factory("AuthService", Service);

  function Service($http, $localStorage) {
    var service = {};
    service.login = login;
    service.logout = logout;
    service.loginState = isLoggedIn();
    return service;

    function login(username, password, callback) {
      $http
        .post(
          "http://localhost:5000/api/auth/login",
          {
            Identifier: username,
            Password: password
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            transformRequest: function(obj) {
              var str = [];
              for (var p in obj)
                str.push(
                  encodeURIComponent(p) + "=" + encodeURIComponent(obj[p])
                );
              return str.join("&");
            }
          }
        )
        .then(function(response) {
          console.log(response);
          console.log(response.data.token);
          $localStorage.currentUser = (
            {
              "id" : response.data.user.GUID,
              "username": response.data.user.Username,
              "screenName": response.data.user.ScreenName,
              "bankroll": response.data.user.Bankroll,
              "createDttm": response.data.user.CreateDTTM,
              "updateDttm": response.data.user.UpdateDTTM,
              "token": response.data.token
            }
          );
          service.loginState = true;
          callback(response);
        })
        .catch(function(error) {
          service.loginState = false;
          console.log(error);
          callback(null);
        });
    }

    function logout() {
      delete $localStorage.currentUser;
      $http.defaults.headers.common.Authorization = "";
      service.loginState = false;
    }

    function isLoggedIn() {
      console.log($localStorage.currentUser);
      if ($localStorage.currentUser)
        return true;
      return false;
    }
  }
})();
