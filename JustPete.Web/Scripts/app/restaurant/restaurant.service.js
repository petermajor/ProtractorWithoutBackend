angular.module('justpete.restaurant.service', ['restangular'])
    .factory('RestaurantService', ['Restangular',
        function (restangular) {
            return {

                getRestaurants: function (postcode) {
                    return restangular.all('restaurants').getList({ postcode: postcode });
                },
            }
        }]);