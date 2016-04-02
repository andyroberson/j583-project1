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

               //if it's not primarily democrat or republican it must be mixed
               else {
                 if (this.states[i].contested) {
                   return {"color": "#A78CB9"}
                 }
                 else {
                   return{"color": "#C9B8CB"}
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

                   else {
                     if (this.states[i].contested) {
                       return {"background-color": "#937197"}
                     }
                     else {
                       return{"background-color": "#C9B8CB"}
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
