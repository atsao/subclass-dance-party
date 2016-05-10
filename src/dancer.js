var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span>').addClass('dancer');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(function() {
    this.step(timeBetweenSteps);
  }.bind(this), timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left) {
  var styles = {
    top: top,
    left: left
  };

  this.$node.css(styles);
}

Dancer.prototype.partyTime = function() {
  var $currentDancer = this.$node;
  console.log('CURRENT DANCER:', $currentDancer);
  var currentDancerX = $currentDancer.offset().left;
  var currentDancerY = $currentDancer.offset().top;
  var otherDancers = window.dancers.slice();
  otherDancers.splice(otherDancers.indexOf($currentDancer), 1);
  console.log('Original dancers:',window.dancers);
  // window.dancers.splice(window.dancers.indexOf($currentDancer), 1);
  console.log('other dancers', otherDancers);

  var nextDancer = otherDancers[0].$node;
  var nextDancerX = nextDancer.offset().left;
  var nextDancerY = nextDancer.offset().top;

  var distance = Math.sqrt(Math.pow(currentDancerX - nextDancerX, 2) + Math.pow(currentDancerY - nextDancerY, 2));
  console.log(distance);

  nextDancer.css('background', 'red');

  // var offsetLeft = this.$node.offset().left;
  // var offsetTop = this.$node.offset().top;
  // var currentDancer = this.$node;
  // var currentDancerPos = Math.sqrt(Math.pow(offsetLeft, 2) + Math.pow(offsetTop, 2));
  // var closestDancer;

  // console.log('Pythagorean:', Math.sqrt(Math.pow(offsetLeft, 2) + Math.pow(offsetTop, 2)));

  // window.dancers.forEach(function(dancer) {
  //   var $dancer = dancer.$node;
  //   var dancerDist = Math.sqrt(Math.pow($dancer.offset().left, 2) + Math.pow($dancer.offset().top, 2));
    
  //   if (dancerDist <= currentDancerPos) {
  //     closestDancer = $dancer;
  //     $dancer.css('background', 'red');
  //   }

  //   console.log('Closest dancer', closestDancer);
  // })
}