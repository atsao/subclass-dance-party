
var RadarDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('radar-dancer');
}

RadarDancer.prototype = Object.create(Dancer.prototype);
RadarDancer.prototype.constructor = RadarDancer;

RadarDancer.prototype.step = function(timeBetweenSteps) {
  //this.$node.toggle();
  //Dancer.prototype.step.call(this, timeBetweenSteps);
}

RadarDancer.prototype.lineUp = function() {
  this.$node.css({
    left: '50px'
  })
}

var makeRadarDancer = function(top, left, timeBetweenSteps) {
  var newRadarDancer = new RadarDancer(top, left, timeBetweenSteps);

  return newRadarDancer;
}