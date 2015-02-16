angular
    .module('page.singleTaskDirective', [])
    .directive('singleTask', [function(){
        return {
            restrict: 'E',
            templateUrl: 'page/html/single-task.html'
        };
    }]);