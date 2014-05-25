angular.module('justpete', ['ngRoute', 'restangular', 'justpete.restaurant'])

    .constant('ApiBaseUrl', '/api')

    .config(['$routeProvider', '$locationProvider', 'RestangularProvider', 'ApiBaseUrl',
        function ($routeProvider, $locationProvider, restangularProvider, apiBaseUrl) {

            $routeProvider.when('/', { redirectTo: '/restaurant' });

            $routeProvider.when('/restaurant',
                {
                    reloadOnSearch: false,
                    controller: 'RestaurantListController',
                    templateUrl: '/scripts/app/restaurant/restaurant-list.html'
                });


            $locationProvider.html5Mode(true);

            restangularProvider.setBaseUrl(apiBaseUrl);
            restangularProvider.setRestangularFields({ id: "Id" });
        }]);
