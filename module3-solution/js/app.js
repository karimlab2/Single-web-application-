(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', foundItemsDirective);

    // Directive definition
    function foundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&',
                emptyList: '<'
            }
        };
        return ddo;
    }
    // Control Definition
    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.found = [];

        menu.getMatchedMenuItems = function(searchTerm) {
            menu.empty_search = searchTerm == ("" || undefined) ? true : false;
            if (!menu.empty_search) {
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
                menu.found = [];
                promise.then(function(response) {
                        menu.found = response;
                        console.log(menu.found.length);
                        menu.empty_search = menu.found.length > 0 ? false : true;
                        //console.log(menu.found.length);
                    })
                    .catch(function(error) {
                        console.log("Something went terribly wrong.");
                    })

            }
        };
        menu.removeItem = function(index) {
            return menu.found.splice(index, 1);
        };

    };

    // service definition

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(result) {
                // process result and only keep items that match
                var foundItems = [];
                //
                var temp = result.data.menu_items;
                if ((searchTerm != "") && (searchTerm != undefined)) {
                    searchTerm =
                        foundItems = temp.filter(item => item.description.toLowerCase().search(searchTerm.toLowerCase()) >= 0);

                    //console.log(foundItems);
                }

                // return processed items
                return foundItems;
            }).catch(function(error) {
                console.log("ERROR, GETt request failed");
            });

        };
    }
})();
