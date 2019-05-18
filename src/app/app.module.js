(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'ngMessages', 'ngStorage', 'smart-table'])
        .run(run);

    
    function run($rootScope, $localStorage, $location) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = (
                'Bearer ' + $localStorage.currentUser.token);
        }

        // redirect to login page if not logged in and trying
        // to access a restricted page
        $rootScope.$on(
            '$locationChangeStart', function(event, next, current) {
            var publicPages = ['/', '/login', '/register', '/dashboard'];
            var location = $location.path();
            if ($location.path().includes('/user/')) {
                location = '/user';
            }
            var restrictedPage = (
                publicPages.indexOf(location) === -1);
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });

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