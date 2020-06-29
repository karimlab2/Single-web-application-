(function() {
  "use strict";

  angular
    .module("MenuApp")
    .controller("MainItemsController", MainItemsController);

  MainItemsController.$inject = ["MenuDataService", "itemsResult"];
  function MainItemsController(MenuDataService, itemsResult) {
    var itemsCtrl = this;
    itemsCtrl.itemsResult = itemsResult;
  }
})();
