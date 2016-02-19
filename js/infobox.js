  var app = angular.module('infoBox', []);


    app.controller('InfoController', ['$http', function($http) {

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
      console.log(state);
      for (var i = 0; i < this.states.length; i++) {
        if (state === this.states[i].state) {

          console.log("You clicked state: " + this.states[i].state);
          //if the state is the same as the state name at position i in the array,
          //then set the current state to that

          //creating variables that will store information about state / senator
          var stateInfo = "";


          //controlling party
          console.log("Controlling Party: " + this.states[i].controllingParty);

          stateInfo += '<div class="panel-body">';
          //loop for printing senator info
          for (var j = 0; j < this.states[i].senators.length; j++) {
            console.log(this.states[i].senators[j].image);
            stateInfo += '<div class="text-center col-md-6 col-sm-12 col-xs-12"><img src="../'+
            this.states[i].senators[j].image+'"class="image"/>';
            stateInfo += '<h3>Senator ' +
            this.states[i].senators[j].firstName + ' ' + this.states[i].senators[j].lastName + '</h3>';
            stateInfo += '<b>Party:</b> ' + this.states[i].senators[j].party;
            stateInfo += '<br><b>Status:</b> ' + this.states[i].senators[j].status;

            //print a bio if there is one
            if (this.states[i].senators[j].bio != 0) {
                stateInfo += '<br><b>Biography: </b>' + this.states[i].senators[j].bio;
            }

            //loop through platform points
            for (var k = 0; k < this.states[i].senators[j].platforms.length; k++) {

              if (this.states[i].senators[j].platforms[k] != 0) {
              stateInfo += '<br><b>Platform point ' + (k+1) + ':</b> ' + this.states[i].senators[j].platforms[k].platform;
              //this doesn't work for kansas and south dakota
              }

            }
            stateInfo += '</div>';
          }


        if (this.states[i].contested == true) {
          //only need to print challengers if this state is contested
          console.log("This state is contested");
          //if contested, add color / highlight? / border?

          //if there the challengers array is empty there are no challengers
          if (this.states[i].challengers[0] === undefined) {
            console.log("As of February, there are no challengers to the incumbent!");
          }

          //otherwise, loop through the challengers array and print all challengers info
          else {
            for (var j = 0; j < this.states[i].challengers.length; j++) {

              console.log("Challenger #" + (j+1) + " " + this.states[i].challengers[j].firstName + " " + this.states[i].challengers[j].lastName);
              console.log("Party: " + this.states[i].challengers[j].party);

            }
          }
        }
        //if it's not contested, it has no challengers
        else {
          console.log("This state is not contested!");
        }
          stateInfo += '</div>';
          document.getElementById(this.states[i].abbreviation).innerHTML = stateInfo;

          //need to make a loop that goes through all senators in the loop and prints out info for that senator.....
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
    ]);
