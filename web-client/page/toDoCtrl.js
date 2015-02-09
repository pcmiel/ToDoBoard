'use strict';

angular.module('myApp.toDoCtrl', [])

    .controller('View1Ctrl', ['$http', '$scope', '$modal', function ($http, $scope, $modal) {
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
            $scope.lastId++;
            var task = {'id': $scope.lastId, content: description, type: 1}
            $scope.tasks.push(task);
        };
        $scope.openModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'page/new-task-modal.html',
                size: 'sm',
                controller: 'NewTaskCtrl'
            });
            modalInstance.result.then(function (result) {
                addNewToDoTask(result);
            })
        };


        $scope.lastId = 6;
        $scope.tasks = [
            {
                'id': 0,
                'content': 'Backlog1',
                'type': 0
            },
            {
                'id': 1,
                'content': 'Todo',
                'type': 1
            },
            {
                'id': 2,
                'content': 'In progess',
                'type': 2
            },
            {
                'id': 3,
                'content': 'In progress2',
                'type': 2
            },
            {
                'id': 4,
                'content': 'In progress3',
                'type': 2
            },
            {
                'id': 5,
                'content': 'Done',
                'type': 3
            },
            {
                'id': 6,
                'content': 'Done2',
                'type': 3
            },
        ];
    }])

    .controller('NewTaskCtrl', function ($scope, $modalInstance) {

        $scope.ok = function (value) {
            $modalInstance.close(value);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    })

    .directive('singleTask', function () {
        return {
            restrict: 'E',
            templateUrl: 'page/single-task.html'
        };
    });