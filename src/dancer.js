var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span>').addClass('dancer');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  var context = this;
  context.callCount = 0;

  // setTimeout(function() {
  //   this.step(timeBetweenSteps);
  //   // context.callCount++;
  // }.bind(context), timeBetweenSteps);
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left) {
  var styles = {
    top: top,
    left: left
  };

  this.$node.css(styles);
}