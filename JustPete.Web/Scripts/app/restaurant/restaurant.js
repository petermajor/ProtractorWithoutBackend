angular.module('justpete.restaurant', ['justpete.restaurant.service'])
    .controller('RestaurantListController', ['$scope', '$location', 'RestaurantService',
        function ($scope, $location, restaurantService) {

            $scope.lastPostcode = "";

            $scope.postcode = $location.search().q;

            $scope.onPostcodeSearch = function() {

                if ($scope.postcode === $scope.lastPostcode) {
                    return;
                };

                $scope.lastPostcode = $scope.postcode;
                $scope.searchInProgress = true;
                $location.search({ q: $scope.postcode });

                restaurantService.getRestaurants($scope.postcode).then(
                    function (rs) {

                        $scope.searchInProgress = false;

                        $scope.restaurants = rs;
                    },
                    function(error) {

                        $scope.searchInProgress = false;

                        console.log(error);
                    });

            };

            if ($scope.postcode) {
                $scope.onPostcodeSearch();
            }
        }]);