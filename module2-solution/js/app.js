(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // 9- sharing data between these controllers

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var itemtobye = this;

        itemtobye.items = ShoppingListCheckOffService.getItems();
        itemtobye.buyItem = function(itemIndex) {

            ShoppingListCheckOffService.buyItem(itemIndex);

        };

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var itembought = this;
        var item = "";
        itembought.items = ShoppingListCheckOffService.getItems2();

    };

    // service definition
    function ShoppingListCheckOffService() {
        var service = this;
        // list item to buy
        var tobyelist = ["Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"];
        // list of bought item
        var boughtlist = [];

        service.getItems = function() {

            return tobyelist;
        };

        service.getItems2 = function() {

            return boughtlist;
        };
        service.buyItem = function(itemIndex) {
            boughtlist.push(tobyelist[itemIndex]);

            tobyelist.splice(itemIndex, 1);


        };

        service.addItem = function(item) {

            boughtlist.push(item);
        };

    };



})();
