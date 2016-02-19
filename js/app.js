var app = angular.module('myApp', ['infoBox']);

//infobox controls all data put into table

//basecontroller controls colors for table / map and setting classes for map
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


    //for setting map colors (needs to be different because style must be COLOR?=)
    this.getMapColor = function(state) {
      for (var i = 0; i < this.states.length; i++) {

        if (state === this.states[i].state) {

               //if a state is Democrat
               if (this.states[i].controllingParty == "Democrat") {
                 //and contested
                 if (this.states[i].contested) {
                   return {"color": "#6AB6EB"}
                 }
                 //if not contested
                 else {
                   return{"color": "#ABC8E4"}
                 }
               }

               else if (this.states[i].controllingParty == "Republican") {
                 if (this.states[i].contested) {
                   return {"color": "#CF5064"}
                 }
                 else {
                   return{"color": "#E7A8B2"}
                 }
               }

               else if (this.states[i].controllingParty == "tie") {
                 if (this.states[i].contested) {
                   return {"color": "#A78CB9"}
                 }
                 else {
                   return{"color": "#C9B8CB"}
                 }
               }

               else {
                 if (this.states[i].contested) {
                   return {"color": "#817982"}
                 }
                 else {
                   return{"color": "#ABA0A0"}
                 }
               }
        }
      }
    };

    //for setting backgrounds of table elements
    this.getStateColor = function(state) {
          for (var i = 0; i < this.states.length; i++) {

            if (state === this.states[i].state) {

                   //if a state is Democrat
                   if (this.states[i].controllingParty == "Democrat") {
                     //and contested
                     if (this.states[i].contested) {
                       return {"background-color": "#7EB5EB"}
                     }
                     //if not contested
                     else {
                       return{"background-color": "#ABC8E4"}
                     }
                   }

                   else if (this.states[i].controllingParty == "Republican") {
                     if (this.states[i].contested) {
                       return {"background-color": "#CF5064"}
                     }
                     else {
                       return{"background-color": "#E7A8B2"}
                     }
                   }

                   else if (this.states[i].controllingParty == "tie") {
                     if (this.states[i].contested) {
                       return {"background-color": "#937197"}
                     }
                     else {
                       return{"background-color": "#C9B8CB"}
                     }
                   }

                   else {
                     if (this.states[i].contested) {
                       return {"background-color": "#817982"}
                     }
                     else {
                       return{"background-color": "#ABA0A0"}
                     }
                   }
            }
          }
      };

/*get Class for map - map classes are state abbreviations*/
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
