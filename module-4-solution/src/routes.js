(function() {
  "use strict";

  angular.module("MenuApp").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "src/templates/home.html"
      })
      .state("categories", {
        url: "/categories",
        templateUrl: "src/templates/main-categories.html",
        controller: "MainCategoriesController as categoryCtrl",
        resolve: {
          categoriesResult: [
            "MenuDataService",
            function(MenuDataService) {
              return MenuDataService.getAllCategories();
            }
          ]
        }
      })
      .state("items", {
        url: "/categories/{category}/items",
        templateUrl: "src/templates/main-items.html",
        controller: "MainItemsController as itemsCtrl",
        resolve: {
          itemsResult: [
            "$stateParams",
            "MenuDataService",
            function($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.category);
            }
          ]
        }
      });
  }
})();
