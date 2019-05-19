(function() {
    'use strict';

    angular
        .module('app')
        .component('login', {
            templateUrl: 'app/components/core/login/login.view.html',
            controller: Controller,
            controllerAs: 'vm'
        });


    function Controller($location, $scope, AuthService) {
        var vm = this;
        vm.login = login;
        vm.logout = logout;
        initController();

        function initController() {
            vm.logout();
        }

        function login() {
            vm.loading = true;
            AuthService.login(vm.username, vm.password, function(result) {
                console.log(result);
                if (result) {
                    $scope.$emit('loginChange', {"state": true});
                    $location.path('/');
                } else {
                    vm.error = "Login failed"                    
                    vm.loading = false;
                }
            });
        }

        function logout() {
            AuthService.logout();
            $scope.$emit('loginChange', {"state": false});
        }
    }
})();