(function() {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.entry = "";
        $scope.msg = "";
        // the methode verifying the text
        $scope.verify_nbr = function() {
            var list = [];
            // transforming the entry in a list which element are separated by ,
            if ($scope.entry.length > 0) {
                list = $scope.entry.split(',');
            }
            //Text is empty
            if (list.length == 0) {
                $scope.msg = "Please enter data first";
            } else {
                // handling a case where there is no item between some commas
                var len = 0;
                for (var i = 0; i < list.length; i++) {
                    if (list[i].trim().length !== 0) {
                        len++;
                    }
                };

                // the other cases
                if (len <= 3) {
                    $scope.msg = "Enjoy!";
                } else {
                    $scope.msg = "Too much!";
                }
            }


        };

    };

})();
