
var SpinningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 1000);
  this.$node.addClass('spinning-dancer');
}

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.lineUp = function() {
  this.$node.css({
    left: '50px'
  })
}