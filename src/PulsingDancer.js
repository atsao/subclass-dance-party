
var PulsingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pulsing-dancer');
}

PulsingDancer.prototype = Object.create(Dancer.prototype);
PulsingDancer.prototype.constructor = PulsingDancer;

PulsingDancer.prototype.step = function(timeBetweenSteps) {
  //this.$node.toggle();
  //Dancer.prototype.step.call(this, timeBetweenSteps);
}

PulsingDancer.prototype.lineUp = function() {
  this.$node.css({
    left: '50px'
  })
}

var makePulsingDancer = function(top, left, timeBetweenSteps) {
  var newPulsingDancer = new PulsingDancer(top, left, timeBetweenSteps);

  return newPulsingDancer;
}