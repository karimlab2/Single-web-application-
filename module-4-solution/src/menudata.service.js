(function() {
  "use strict";

  angular
    .module("MenuData")
    .constant(
      "ApiCategoryPath",
      "https://davids-restaurant.herokuapp.com/categories.json"
    )
    .constant(
      "ApiItemPath",
      "https://davids-restaurant.herokuapp.com/menu_items.json?category="
    )
    .service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ["$http", "ApiCategoryPath", "ApiItemPath"];
  function MenuDataService($http, ApiCategoryPath, ApiItemPath) {
    var service = this;

    service.getAllCategories = function() {
      return $http.get(ApiCategoryPath).then(function(result) {
        if (result.status !== 200) {
          console.error(`Bad status code ${result.status}`);
          return [];
        } else {
          return result.data;
        }
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http.get(ApiItemPath + categoryShortName).then(function(result) {
        if (result.status !== 200) {
          console.error(`Bad status code ${result.status}`);
          return [];
        } else {
          return result.data;
        }
      });
    };
  }
})();
