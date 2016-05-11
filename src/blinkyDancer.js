
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky-dancer');
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  this.$node.fadeToggle(500);
  // this.$node.css({
  //   opacity: Math.random()
  // });
  Dancer.prototype.step.call(this);
}

BlinkyDancer.prototype.lineUp = function() {
  this.$node.css({
    top: '50px'
  })
}



