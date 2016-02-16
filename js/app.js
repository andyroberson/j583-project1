var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {

    this.message = "Ready";

    this.states = [];

    $http.get('js/states.json')

        .success(function(data) {
          _this.states = data;
        })
        .error(function(msg) {
          console.log("this request failed.\n" + msg);
        });
}]);
