var app = angular.module('myApp', ['infoBox']);

app.controller('BaseController', ['$http', function($http) {

    this.states = [];

    var _this = this;

    this.isContested = false;

    $http.get('js/states.json')

        .success(function(data) {
          _this.states = data;
        })
        .error(function(msg) {
          console.log("this request failed.\n" + msg);
        });

    this.getStateColor = function(state) {
          for (var i = 0; i < this.states.length; i++) {

            if (state === this.states[i].state) {

                   if (this.states[i].controllingParty == "Democrat") {
                     if (this.states[i].contested) {
                       return {"background-color": "blue", "box-shadow": "0px 0px 10px green"}
                     }
                     else {
                       return{"background-color": "blue"}
                     }
                   }

                   else if (this.states[i].controllingParty == "Republican") {
                     if (this.states[i].contested) {
                       return {"background-color": "red", "box-shadow": "0px 0px 10px green"}
                     }
                     else {
                       return{"background-color": "red"}
                     }
                   }

                   else if (this.states[i].controllingParty == "tie") {
                     if (this.states[i].contested) {
                       return {"background-color": "purple", "box-shadow": "0px 0px 10px green"}
                     }
                     else {
                       return{"background-color": "purple"}
                     }
                   }

                   else {
                     if (this.states[i].contested) {
                       return {"background-color": "gray", "box-shadow": "0px 0px 10px green"}
                     }
                     else {
                       return{"background-color": "gray"}
                     }
                   }
            }
          }
      };

      /*this.getSenatorColor = function(senator) {
             if (this.states.senators[0].party == "Democrat") {
               return 'blue';
             }

             else {
               return 'red';
             }
          };*/



this.getClass = function(state) {
  for (var i = 0; i < this.states.length; i++) {
    if (state === this.states[i].state) {
           return this.states[i].abbreviation;
    }
  }
}

}

]);

/* other to do :

get it to nicely display all necessary stuff; maybe make a click div? - MODALS http://v4-alpha.getbootstrap.com/components/modal/

map: create for loop that goes through state names and if state name is the same as
div id, assign the data to that state?

see https://intridea.github.io/stately/

add more data to json file - images and platform points

create rough design prototype?

step 1 - design prototype
step 2 - display / click
         function for displaying senator as challenger? or just as incumbent
step 3 - add all data
step 4 - map????

color function based on who's in control;

MORE NOTES = http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/2/section/2/tabs-inside-out - tabs-inside-out

TABS = http://campus.codeschool.com/courses/shaping-up-with-angular-js/level/2/section/2/using-tab-controller for setting map view / list view maybe??????? or SOrTing?

COLORS = https://docs.angularjs.org/api/ng/directive/ngStyle
*/
