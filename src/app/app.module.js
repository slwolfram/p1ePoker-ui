(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'ngMessages', 'ngStorage', 'smart-table'])
        .run(run);

    
    function run($rootScope, $localStorage, $location, $http) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = (
                'Bearer ' + $localStorage.currentUser.token);
        }

        $rootScope.$on(
            'loginChange', function(event, obj) {
                console.log('Broadcasting login change');
                $rootScope.loggedIn = obj.state;
                $rootScope.$broadcast(
                    'switchLoginStatus', {'state': obj.state});
            }
        );
    }
})();