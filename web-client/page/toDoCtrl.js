'use strict';

angular.module('myApp.toDoCtrl', ['page.service'])

    .controller('View1Ctrl', ['$http', '$scope', '$modal', 'service', function ($http, $scope, $modal, service) {

        $scope.init = function () {
            $scope.tasks = [];
            service.getAllTasks().success(function (data) {
                $scope.tasks = data.tasks;
            }).error(function (data) {
                console.log('problem: ' + data);
                $scope.openErrorModal();
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
            var task = {'id': 1, description: description, type: 1}
            $scope.tasks.push(task);
            postNewTask(task);
        };

        var postNewTask = function (task) {
            service.postNewTask(task).success(function (data) {
                console.log(data);
            });
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

        $scope.openErrorModal = function () {
            var modalInstance = $modal.open({
                templateUrl: 'page/error-modal.html',
                size: 'sm' ,
                controller: 'View1Ctrl'
            });
            $scope.close = function () {
                modalInstance.dismiss('close');
            };
        };
    }]
)

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