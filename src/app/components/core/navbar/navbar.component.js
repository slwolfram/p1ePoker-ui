(function () {
    'use strict';

    angular
        .module('app')
        .component('navbar', {
            templateUrl: 'app/components/core/navbar/navbar.view.html',
            controller: Controller,
            controllerAs: 'vm'
        });


    function Controller($scope, AuthService) {
        var vm = this;
        vm.loginState = false;

        vm.$onInit = () => {
            vm.loginState = AuthService.loginState;
        };

        $scope.$on('switchLoginStatus', function(event, obj) {
            console.log('navbar controller: switching login status');
            vm.loginState = obj.state;
        });


        function logout() {
            AuthService.logout();
        }
    }
}());