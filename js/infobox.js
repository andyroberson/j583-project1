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

          stateInfo += '<div class="panel-body">';
          //loop for printing senator info
          for (var j = 0; j < this.states[i].senators.length; j++) {
            stateInfo += '<div class="text-center senator col-md-6 col-sm-12 col-xs-12"><img src="../'+
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
          stateInfo += '<div class="col-xs-12 text-center state-contested">This state is contested!';

          //if there the challengers array is empty there are no challengers
          if (this.states[i].challengers[0] === undefined) {
            stateInfo += ' As of February, there are no challengers to the incumbent!</div>';
          }

          //otherwise, loop through the challengers array and print all challengers info
          else {
            stateInfo += '<div class="col-xs-12">';
              stateInfo += '<div class="panel-group">';
                  stateInfo += '<div class="panel panel-default" >';
                    stateInfo += '<div class="panel-heading">';
                      stateInfo += '<h4 class="panel-title">';
                      //giving it a unique ID that hasn't been used, applying filter of no spaces
                        stateInfo += '<a data-toggle="collapse" href="#'+this.states[i].abbreviation+'2">Click to view challengers</a>';
                      stateInfo += '</h4>';
                    stateInfo += '</div>';
                    //using abbreviations as id again and adding "2" to the end since abbreviations alone was already used
                    stateInfo += '<div id="'+this.states[i].abbreviation+'2" class="panel-collapse collapse">';
                  stateInfo += '<div class="panel-body"> '
            for (var j = 0; j < this.states[i].challengers.length; j++) {
                        stateInfo += '<b>Challenger #' + (j+1) + ':</b> '+ this.states[i].challengers[j].firstName + ' ' + this.states[i].challengers[j].lastName;
                        stateInfo += '<br><b>Party: </b>' + this.states[i].challengers[j].party +'<br>';
            }
                  //end panel-body div after for loop because want all challengers repeated within panel body
                  stateInfo += '</div>';
                  //end panel-collapse
                stateInfo += '</div>';
                //end panel default
              stateInfo += '</div>';
              //end panel group
            stateInfo += '</div>';
            //end col-xs-12
          stateInfo += '</div>';
          }
        }
        //if it's not contested, it has no challengers
        else {
            stateInfo += '<div class="col-xs-12 text-center state-contested">This state is not contested.</div>';
        }

          stateInfo += '</div>';
          document.getElementById(this.states[i].abbreviation).innerHTML = stateInfo;

          }

        }
      }
    }
    ]);
