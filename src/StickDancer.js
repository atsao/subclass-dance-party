
var StickDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('stick-dancer');
}

StickDancer.prototype = Object.create(Dancer.prototype);
StickDancer.prototype.constructor = StickDancer;

StickDancer.prototype.step = function(timeBetweenSteps) {
  //this.$node.toggle();
  //Dancer.prototype.step.call(this, timeBetweenSteps);
}

StickDancer.prototype.lineUp = function() {
  this.$node.css({
    left: '90%'
  })
}

var makeStickDancer = function(top, left, timeBetweenSteps) {
  var newStickDancer = new StickDancer(top, left, timeBetweenSteps);

  return newStickDancer;
}