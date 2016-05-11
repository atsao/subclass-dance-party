describe("stickDancer", function() {

  var stickDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    stickDancer = new StickDancer(10, 20, timeBetweenSteps);
  });

  it("should have a line up function that makes its node align to one side", function() {
    // sinon.spy(blinkyDancer.$node, 'fadeToggle');
    // blinkyDancer.step();
    // expect(blinkyDancer.$node.fadeToggle.called).to.be.true;
    expect(stickDancer.lineUp).to.be.function;
  });
});
