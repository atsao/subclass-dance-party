
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky-dancer');
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  this.$node.fadeToggle();
  this.$node.css({
    opacity: Math.random()
  })
  Dancer.prototype.step.call(this, timeBetweenSteps);
}

BlinkyDancer.prototype.lineUp = function() {
  // var newLeft = this.$node.css('left').replace(/[^-\d\.]/g, ''); // use parseFloat?
  this.$node.css({
    top: '50px'//,
    // left: newLeft + 10 + 'px'
  })
}

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var newBlinkyDancer = new BlinkyDancer(top, left, timeBetweenSteps);

  return newBlinkyDancer;
}