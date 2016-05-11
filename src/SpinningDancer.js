
var SpinningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinning-dancer');
}

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function() {
  //this.$node.toggle();
  //Dancer.prototype.step.call(this, timeBetweenSteps);
}

SpinningDancer.prototype.lineUp = function() {
  this.$node.css({
    left: '50px'
  })
}