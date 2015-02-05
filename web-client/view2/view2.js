'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', ['$http', '$scope', function ($http, $scope) {
        var apiKey = "xxx";
        $scope.city = 'xxx';

        var addParameter = function (key, value) {
            return key + '=' + value + '&';
        };

        var generateUrl = function () {
            return 'http://api.worldweatheronline.com/free/v2/weather.ashx?' +
                addParameter('key', apiKey) +
                addParameter('format', 'json') +
                addParameter('q', $scope.city);
        };

        $http.get(generateUrl()).success(function (data) {
            $scope.weather = data;
        });

        $scope.current = angular.fromJson($scope.weather);
    }]);