describe("spinningDancer", function() {

  var spinningDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinningDancer = new SpinningDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(spinningDancer.$node).to.be.an.instanceof(jQuery);
  });
});
