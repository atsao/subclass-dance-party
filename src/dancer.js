var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span>').addClass('dancer');

  this.setPosition(top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  var context = this;

  setTimeout(function() {
    this.step(timeBetweenSteps);
  }.bind(context), timeBetweenSteps);
}

Dancer.prototype.setPosition = function(top, left) {
  var styles = {
    top: top,
    left: left
  };

  this.$node.css(styles);
}