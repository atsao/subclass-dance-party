
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  this.$node.toggle();
  Dancer.prototype.step.call(this, timeBetweenSteps);
}

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var newBlinkyDancer = new BlinkyDancer(top, left, timeBetweenSteps);

  return newBlinkyDancer;
}