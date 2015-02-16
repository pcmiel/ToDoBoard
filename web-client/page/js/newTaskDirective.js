angular
    .module('page.newTaskDirective', [])
.directive('newTask', [function(){
        return {
            restrict: 'E',
            templateUrl: 'page/html/single-task.html'
        };

    }]) ;