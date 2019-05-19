(function() {
  "use strict";

  angular.module("app").component("dashboard", {
    templateUrl: "app/components/core/dashboard/dashboard.view.html",
    controller: Controller,
    controllerAs: "vm"
  });

  function Controller(GameService) {
    var vm = this;
    vm.$onInit = () => {
      GameService.fetchGameDetails(function(result) {
        if (result) {
          console.log(result);
          vm.gameDetails = result.data;
        }
      });
    };
  }
})();
