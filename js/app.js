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

this.infoBox = function(state) {
  //if state name is clicked, show state info

  for (var i = 0; i < this.states.length; i++) {

    if (state === this.states[i].state) {
      //if the state is the same as the state name at position i in the array,
      //then set the current state to that
      var stateInfo = "";
      var senatorInfo = "";

      /*loop for printing senator info
      for (var j = 0; j < this.states[i].senators.length; j++) {
        console.log(this.states[i].senators[j].firstName + " " + this.states[i].senators[j].lastName);
        console.log("Party: " + this.states[i].senators[j].party);
        console.log(this.states[i].senators[j].status);
        console.log("Bio: " + this.states[i].senators[j].bio);
        for (var k = 0; k < this.states[i].senators[j].platforms.length; k++) {
          console.log("Platform point " + (k+1) + ": " + this.states[i].senators[j].platforms[k].platform);
          //(this doesn't work for kansas and south dakota
        }
      }*/


    if (this.states[i].contested == true) {
      //only need to print challengers if this state is contested
      console.log("This state is contested");
      //loop for printing challengers
      for (var j = 0; j < this.states[i].challengers.length; j++) {

          if (this.states[i].challengers[j].length == 0) {
            console.log("As of February, there are no challengers!");
          }

          else {
          console.log("Challenger #" + (j+1) + this.states[i].challengers[j].firstName + " " + this.states[i].challengers[j].lastName);
          console.log("Party: " + this.states[i].challengers[j].party);
          }
      }

    }

    //if it's not contested, it has no challengers
    else {
      console.log("This state is not contested!");
    }

      stateInfo += '<h3>' + this.states[i].state + 's Senator: ' + this.states[i].senators[0].firstName +  '</h3>';

      document.getElementById("stateInfo").innerHTML = stateInfo;

      //need to make a loop that goes through all senators in the loop and prints out info for that senator.....
      if (this.states[i].image !== undefined) {
        //<img ng-src="{{image}}" />

        /*
click and show notes = ng-show="product.images.length"      -- only show images if there are images... but how to click and show stuff?
        */
      }

    /*
      if(this.states[i].bio !== undefined) {
        //if there's a bio, print it
      }

      if(this.states[i].platformPoints[] !== undefined) {
        //if there are platform points, print them
      }
 */
     // add all of this to an ID


    }
  }
}
/*lindsay's click example: not sure if will use
this.isBoxOpen = false;
this.chosenState = null;
this.clickedStateCount = 0;

this.clickedState = [];

//shows party info box based on if a party was clicked
this.showInfoBox = function(clickedState){

  console.log("CLICK:");

  //push the clicked pokemon into an array
  this.clickedState.push(clickedState);

  //get the previously clicked pokemon
  this.previousState = this.clickedState[this.clickedState.length-2];
  //there is only a previously clicked pokemon if...
  this.isPreviousExists = this.clickedState.length >= 2;

  console.log("you clicked on: " + clickedState);
  console.log("previously you clicked on: " + this.previousState);
  console.log("isBoxOpen: " + this.isBoxOpen);

  this.chosenState = clickedState;

  //if statement to overcome problem of box closing and not showing new pokemon data
  if(this.isPreviousExists && this.isBoxOpen && this.previousState != clickedState){
      this.isBoxOpen = !this.isBoxOpen;
  }

  //normal behavior if above criteria isn't met
  this.isBoxOpen = !this.isBoxOpen;

  console.log("automatically switch to: " + this.isBoxOpen);
  console.log("isBoxOpen: " + this.isBoxOpen);
}

this.generateInfoBox = function(){
  //console.log("generate");
  return '<p>' + this.chosenState + '</p>';
  console.log(this.chosenState);
}*/

}]);

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
