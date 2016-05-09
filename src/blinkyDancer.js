// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };
var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.setPosition(top, left);
}

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  this.$node.toggle();
}

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var newBlinkyDancer = new BlinkyDancer(top, left, timeBetweenSteps);

  return newBlinkyDancer;
}