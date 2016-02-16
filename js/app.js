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

/* other to do :

map: create for loop that goes through state names and if state name is the same as
div id, assign the data to that state?

add more data to json file
*/
