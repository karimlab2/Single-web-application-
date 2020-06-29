(function() {
  "use strict";

  angular
    .module("MenuApp")
    .controller("MainCategoriesController", MainCategoriesController);

  MainCategoriesController.$inject = ["MenuDataService", "categoriesResult"];
  function MainCategoriesController(MenuDataService, categoriesResult) {
    var categoryCtrl = this;
    categoryCtrl.categoriesResult = categoriesResult;
  }
})();
