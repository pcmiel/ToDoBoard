var myApp = angular.module('myApp', [
        'myApp.toDoCtrl',
        'page.service',
        'ui.bootstrap']
)

//myApp.config(['$httpProvider', function($httpProvider) {
//    $httpProvider.defaults.useXDomain = true;
//    delete $httpProvider.defaults.headers.common['X-Requested-With'];
//}
//]);