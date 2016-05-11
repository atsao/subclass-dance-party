$(document).ready(function(){
  window.dancers = [];

  generateDancers();

  $(".dancer-button").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

    window.dancers.push(dancer);
  });

  $('#line-up').on("click", function(e) {
    e.preventDefault();

    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
    });
  });

  $('#scatter').on("click", function(e) {
    e.preventDefault();

    window.dancers.forEach(function(dancer) {
      var scatter = setInterval(function() {
        dancer.move();
      }, 1000);
      setTimeout(function() {
        clearInterval(scatter);
      }, 5000);
    });
  });

  $('#party-time').on('click', function(e) {
    e.preventDefault();

    window.dancers.forEach(function(dancer) {
      dancer.partyTime();
    })
  });

  $('#bash').on('click', function(e) {
    e.preventDefault();

    generateDancers();
  });

  $('#blinky').on('click', function(e) {
    e.preventDefault();

    window.dancers.forEach(function(dancer) {
      var $dancer = dancer.$node;
      if ($dancer.hasClass('blinky-dancer')) {
        $dancer.addClass('blinky');
      }
    })
  });

  function generateDancers() {
    var dancerFactories = document.getElementsByClassName('dancer-button');
    var dancerFactoriesFunctions = [];
    
    for (var i = 0; i < dancerFactories.length; i++) {
      dancerFactoriesFunctions.push(dancerFactories[i].getAttribute('data-dancer-maker-function-name'));
    }

    for (var i = 0; i < 10; i++) {
      var random = Math.floor(Math.random() * dancerFactoriesFunctions.length);
      var randomFunc = window[dancerFactoriesFunctions[random]];
      var dancer = new randomFunc(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );

      $('body').append(dancer.$node);

      window.dancers.push(dancer);
    }
  }

  function getRandomColor () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
  }
  
  setInterval(function() {
    $('body').css('background', getRandomColor);
    $('.spinning-dancer, .blinky-dancer').css({
      'border-color': getRandomColor
    });
    $('.stick-dancer').css({
      'background-color': getRandomColor
    });
  }, 1000);
});

