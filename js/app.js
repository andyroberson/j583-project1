var app = angular.module('myApp', []);

app.controller('BaseController', ['$http', function($http) {

    this.message = "Ready";

    this.states = [];

    var _this = this;

    $http.get('js/states.json')

        .success(function(data) {
          _this.states = data;
        })
        .error(function(msg) {
          console.log("this request failed.\n" + msg);
        });

}]);

/* other to do :

get it to nicely display all necessary stuff; maybe make a click div?

map: create for loop that goes through state names and if state name is the same as
div id, assign the data to that state?

see https://intridea.github.io/stately/

add more data to json file - images and platform points

create rough design prototype?
*/
