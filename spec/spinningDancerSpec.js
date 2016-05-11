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

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(spinningDancer, "step");
      expect(spinningDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps);

      expect(spinningDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinningDancer.step.callCount).to.be.equal(2);

    });
  });
});
