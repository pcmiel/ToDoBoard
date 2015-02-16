angular.module('page.service', [])
    .factory('pageService', ['$http', function ($http) {

        var URL = 'http://10.57.168.3:8080/';
        return {
            getAllTasks: function () {
                console.log('downoloaded all tasks');
                var tasks = {};
                return $http.get(URL + 'tasks');
            },

            postNewTask: function (data) {
                console.log('added new task');
                //return $http.post(URL + 'newTask', data);
                return $http({
                    url: URL + 'newTask',
                    method: "POST",
                    data: data,
                    withCredentials: false,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                });
            }
        }
    }]);