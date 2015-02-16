angular
    .module('page.controller', ['page.service'])

    .controller('pageCtrl', ['$http', '$scope', '$modal', 'pageService', function ($http, $scope, $modal, service) {
        var newTaskScope = $scope.$new();
        var newTaskModal = $modal({
            show: false,
            template: 'page/html/new-task-modal.html',
            scope: newTaskScope
        });

        $scope.init = function () {
            $scope.tasks = [];
            service.getAllTasks().success(function (data) {
                $scope.tasks = data.tasks;
            }).error(function (data) {
                console.log('problem: ' + data);
            });
        };

        $scope.moveToBacklog = function (task) {
            task.type = 0;
        };
        $scope.moveToToDo = function (task) {
            task.type = 1;
        };
        $scope.moveToInProgress = function (task) {
            task.type = 2;
        };
        $scope.moveToDone = function (task) {
            task.type = 3;
        };

        $scope.isInBacklog = function (task) {
            return task.type === 0;
        };

        $scope.isToDo = function (task) {
            return task.type === 1;
        };

        $scope.isInProgress = function (task) {
            return task.type === 2;
        };

        $scope.isDone = function (task) {
            return task.type === 3;
        };
        var addNewToDoTask = function (description) {
            var task = {'id': 1, description: description, type: 1};
            $scope.tasks.push(task);
            postNewTask(task);
        };

        var postNewTask = function (task) {
            service.postNewTask(task).success(function (data) {
                console.log(data);
            });
        };
        $scope.addNewTask = function () {
            newTaskModal.$promise.then(newTaskModal.show);
        };

        $scope.ok = function (value) {
            addNewToDoTask(value);
            newTaskModal.$promise.then(newTaskModal.hide);
        };
    }]);

