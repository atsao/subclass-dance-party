describe("stickDancer", function() {

  var stickDancer;
  var timeBetweenSteps = 1000;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    stickDancer = new StickDancer(10, 20, timeBetweenSteps);
  });

  it("should have a line up function that makes its node align to one side", function() {
    expect(stickDancer.lineUp).to.be.function;
  });
});
