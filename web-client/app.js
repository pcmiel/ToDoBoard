'use strict';

angular.module('myApp', [
        'ngRoute',
        'myApp.view1',
        'myApp.view2',
        'ui.bootstrap'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
