
var StickDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('stick-dancer');
}

StickDancer.prototype = Object.create(Dancer.prototype);
StickDancer.prototype.constructor = StickDancer;

StickDancer.prototype.lineUp = function() {
  this.$node.css({
    left: '90%'
  })
}