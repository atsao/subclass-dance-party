
var SpinningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, 1000);
  this.$node.addClass('spinning-dancer');
}

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function() {
  var topPos = $("body").height() * Math.random() * 0.5;
  var leftPos = $("body").width() * Math.random() * 0.5;

  this.$node.css({
    top: topPos,
    left: leftPos
  });
  Dancer.prototype.step.call(this);
}

SpinningDancer.prototype.lineUp = function() {
  this.$node.css({
    left: '50px'
  })
}