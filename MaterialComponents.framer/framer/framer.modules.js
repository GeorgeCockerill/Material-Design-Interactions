require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"colors":[function(require,module,exports){
exports.white = "#ffffff";

exports.black = "#000000";

exports.seekPink = "#E60278";

exports.cardBackground = "#fafafa";

exports.screenBackground = "#f9f9f9";

exports.cardShadow = "rgba(0,0,0,0.2)";



},{}],"materialInteractions":[function(require,module,exports){
exports.raiseAndLowerLayer = function(layer) {
  var lowerlayerAnimation, raiseLayerAnimation;
  raiseLayerAnimation = new Animation({
    layer: layer,
    properties: {
      scale: 1.01,
      shadowBlur: 20,
      shadowSpread: 4
    },
    time: 0.2,
    curve: "ease-in-out"
  });
  lowerlayerAnimation = new Animation({
    layer: layer,
    properties: {
      scale: 1,
      shadowBlur: 10,
      shadowSpread: 0
    },
    delay: 0.4,
    time: 0.4,
    curve: "ease-in-out"
  });
  raiseLayerAnimation.start();
  return raiseLayerAnimation.on("end", function() {
    return lowerlayerAnimation.start();
  });
};

exports.raiseLayer = function(layer) {
  var raiseLayerAnimation;
  raiseLayerAnimation = new Animation({
    layer: layer,
    properties: {
      scale: 1.01,
      shadowBlur: 20,
      shadowSpread: 4
    },
    time: 0.2,
    curve: "ease-in-out"
  });
  return raiseLayerAnimation.start();
};

exports.expandHorizontally = function(layer, animationDelay) {
  var exandHorizontallyAnimation;
  exandHorizontallyAnimation = new Animation({
    layer: layer,
    properties: {
      width: layer.superLayer.width,
      x: layer.superLayer.x
    },
    delay: animationDelay,
    time: 0.2,
    curve: "ease-in-out"
  });
  return exandHorizontallyAnimation.start();
};

exports.expandVertically = function(layer, animationDelay) {
  var expandVerticallyAnimation;
  expandVerticallyAnimation = new Animation({
    layer: layer,
    properties: {
      height: layer.superLayer.height,
      y: layer.superLayer.y
    },
    delay: animationDelay,
    time: 0.2,
    curve: "ease-in-out"
  });
  return expandVerticallyAnimation.start();
};

exports.rotateLayer = function(layer, rotationAngle) {
  var rotateAnimation;
  rotateAnimation = new Animation({
    layer: layer,
    properties: {
      rotation: rotationAngle
    },
    time: 0.2,
    curve: "ease-in-out"
  });
  return rotateAnimation.start();
};

exports.moveLayer = function(layer, moveByX, moveByY, moveDelay) {
  var moveAnimation;
  moveAnimation = new Animation({
    layer: layer,
    properties: {
      x: layer.x + moveByX,
      y: layer.y + moveByY
    },
    delay: moveDelay,
    time: 0.2,
    curve: "ease-in-out"
  });
  return moveAnimation.start();
};

exports.rippleEffect = function(touchX, touchY, layer) {
  var ripple, rippleAnimation;
  layer.clip = true;
  ripple = new Layer({
    borderRadius: "50%",
    scale: 0,
    opacity: .5,
    superLayer: layer,
    backgroundColor: layer.backgroundColor,
    brightness: 75,
    midX: touchX,
    midY: touchY,
    index: 0,
    force2d: true
  });
  rippleAnimation = ripple.animate({
    properties: {
      scale: layer.width / 50,
      clip: true,
      opacity: 0
    },
    curve: "ease-out",
    time: .3
  });
  return rippleAnimation.on("end", function() {
    return ripple.destroy();
  });
};



},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];



},{}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvdmFybmF1dG92aWMvRHJvcGJveC8wNiAtIFRoYXRCYWxkVVhHdXkvTWF0ZXJpYWxDb21wb25lbnRzLmZyYW1lci9tb2R1bGVzL2NvbG9ycy5jb2ZmZWUiLCIvVXNlcnMvdmFybmF1dG92aWMvRHJvcGJveC8wNiAtIFRoYXRCYWxkVVhHdXkvTWF0ZXJpYWxDb21wb25lbnRzLmZyYW1lci9tb2R1bGVzL21hdGVyaWFsSW50ZXJhY3Rpb25zLmNvZmZlZSIsIi9Vc2Vycy92YXJuYXV0b3ZpYy9Ecm9wYm94LzA2IC0gVGhhdEJhbGRVWEd1eS9NYXRlcmlhbENvbXBvbmVudHMuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsU0FBaEIsQ0FBQTs7QUFBQSxPQUNPLENBQUMsS0FBUixHQUFnQixTQURoQixDQUFBOztBQUFBLE9BRU8sQ0FBQyxRQUFSLEdBQW1CLFNBRm5CLENBQUE7O0FBQUEsT0FJTyxDQUFDLGNBQVIsR0FBeUIsU0FKekIsQ0FBQTs7QUFBQSxPQUtPLENBQUMsZ0JBQVIsR0FBMkIsU0FMM0IsQ0FBQTs7QUFBQSxPQU9PLENBQUMsVUFBUixHQUFxQixpQkFQckIsQ0FBQTs7Ozs7QUNDQSxPQUFPLENBQUMsa0JBQVIsR0FBNkIsU0FBQyxLQUFELEdBQUE7QUFHNUIsTUFBQSx3Q0FBQTtBQUFBLEVBQUEsbUJBQUEsR0FBMEIsSUFBQSxTQUFBLENBQ3pCO0FBQUEsSUFBQSxLQUFBLEVBQU8sS0FBUDtBQUFBLElBQ0EsVUFBQSxFQUNDO0FBQUEsTUFBQSxLQUFBLEVBQU8sSUFBUDtBQUFBLE1BQ0EsVUFBQSxFQUFXLEVBRFg7QUFBQSxNQUVBLFlBQUEsRUFBYSxDQUZiO0tBRkQ7QUFBQSxJQUtBLElBQUEsRUFBTSxHQUxO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QVNBLE9BQUEsRUFBUyxJQVRUO0dBRFksQ0FGYixDQUFBO0FBQUEsRUFjQSxlQUFBLEdBQWtCLE1BQU0sQ0FBQyxPQUFQLENBQ2pCO0FBQUEsSUFBQSxVQUFBLEVBQ0M7QUFBQSxNQUFBLEtBQUEsRUFBTyxLQUFLLENBQUMsS0FBTixHQUFjLEVBQXJCO0FBQUEsTUFDQSxJQUFBLEVBQU0sSUFETjtBQUFBLE1BRUEsT0FBQSxFQUFTLENBRlQ7S0FERDtBQUFBLElBSUEsS0FBQSxFQUFPLFVBSlA7QUFBQSxJQUtBLElBQUEsRUFBTSxFQUxOO0dBRGlCLENBZGxCLENBQUE7U0FzQkEsZUFBZSxDQUFDLEVBQWhCLENBQW1CLEtBQW5CLEVBQTBCLFNBQUEsR0FBQTtXQUN6QixNQUFNLENBQUMsT0FBUCxDQUFBLEVBRHlCO0VBQUEsQ0FBMUIsRUF4QnNCO0FBQUEsQ0E5R3ZCLENBQUE7Ozs7O0FDR0EsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsWUFBaEIsQ0FBQTs7QUFBQSxPQUVPLENBQUMsVUFBUixHQUFxQixTQUFBLEdBQUE7U0FDcEIsS0FBQSxDQUFNLHVCQUFOLEVBRG9CO0FBQUEsQ0FGckIsQ0FBQTs7QUFBQSxPQUtPLENBQUMsT0FBUixHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxsQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydHMud2hpdGUgPSBcIiNmZmZmZmZcIlxuZXhwb3J0cy5ibGFjayA9IFwiIzAwMDAwMFwiXG5leHBvcnRzLnNlZWtQaW5rID0gXCIjRTYwMjc4XCJcblxuZXhwb3J0cy5jYXJkQmFja2dyb3VuZCA9IFwiI2ZhZmFmYVwiXG5leHBvcnRzLnNjcmVlbkJhY2tncm91bmQgPSBcIiNmOWY5ZjlcIlxuXG5leHBvcnRzLmNhcmRTaGFkb3cgPSBcInJnYmEoMCwwLDAsMC4yKVwiIiwiIyBSYWlzZSBhbmQgbG93ZXIgYSBsYXllciBieSBhbmltYXRpbmcgaXQncyBzaXplIGFuZCBzaGFkb3cgcHJvcGVydGllc1xuZXhwb3J0cy5yYWlzZUFuZExvd2VyTGF5ZXIgPSAobGF5ZXIpIC0+XG5cdFxuXHQjIGRlZmluZSB0aGUgYW5pbWF0aW9ucyBcblx0cmFpc2VMYXllckFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25cblx0XHRsYXllcjogbGF5ZXJcblx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0c2NhbGU6IDEuMDFcblx0XHRcdHNoYWRvd0JsdXI6MjBcblx0XHRcdHNoYWRvd1NwcmVhZDo0XG5cdFx0dGltZTogMC4yXG5cdFx0Y3VydmU6IFwiZWFzZS1pbi1vdXRcIlxuXG5cdGxvd2VybGF5ZXJBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG5cdFx0bGF5ZXI6IGxheWVyXG5cdFx0cHJvcGVydGllczpcblx0XHRcdHNjYWxlOiAxXG5cdFx0XHRzaGFkb3dCbHVyOjEwXG5cdFx0XHRzaGFkb3dTcHJlYWQ6MFxuXHRcdGRlbGF5OiAwLjRcblx0XHR0aW1lOiAwLjRcblx0XHRjdXJ2ZTogXCJlYXNlLWluLW91dFwiXG5cblx0XG5cdHJhaXNlTGF5ZXJBbmltYXRpb24uc3RhcnQoKVxuXHRcblx0cmFpc2VMYXllckFuaW1hdGlvbi5vbiBcImVuZFwiLCAtPiBcblx0XHRsb3dlcmxheWVyQW5pbWF0aW9uLnN0YXJ0KClcblxuIyBSYWlzZSBhIGxheWVyIGJ5IGFuaW1hdGluZyBpdCdzIHNpemUgYW5kIHNoYWRvdyBwcm9wZXJ0aWVzXG5leHBvcnRzLnJhaXNlTGF5ZXIgPSAobGF5ZXIpIC0+XG5cdFxuXHQjIGRlZmluZSB0aGUgYW5pbWF0aW9ucyBcblx0cmFpc2VMYXllckFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25cblx0XHRsYXllcjogbGF5ZXJcblx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0c2NhbGU6IDEuMDFcblx0XHRcdHNoYWRvd0JsdXI6MjBcblx0XHRcdHNoYWRvd1NwcmVhZDo0XG5cdFx0dGltZTogMC4yXG5cdFx0Y3VydmU6IFwiZWFzZS1pbi1vdXRcIlxuXG5cdFxuXHRyYWlzZUxheWVyQW5pbWF0aW9uLnN0YXJ0KClcblxuIyBFeHBhbmQgdGhlIGxheWVyIGhvcml6b250YWxseSB0byB0aGUgYm9yZGVycyBvZiBpdCdzIGNvbnRhaW5lclxuZXhwb3J0cy5leHBhbmRIb3Jpem9udGFsbHkgPSAobGF5ZXIsIGFuaW1hdGlvbkRlbGF5KSAtPlxuXHRcblx0IyBkZWZpbmUgdGhlIGFuaW1hdGlvbnMgXG5cdGV4YW5kSG9yaXpvbnRhbGx5QW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvblxuXHRcdGxheWVyOiBsYXllclxuXHRcdHByb3BlcnRpZXM6XG5cdFx0XHR3aWR0aDogbGF5ZXIuc3VwZXJMYXllci53aWR0aFxuXHRcdFx0eDogbGF5ZXIuc3VwZXJMYXllci54XG5cdFx0ZGVsYXk6IGFuaW1hdGlvbkRlbGF5XG5cdFx0dGltZTogMC4yXG5cdFx0Y3VydmU6IFwiZWFzZS1pbi1vdXRcIlxuXG5cdFxuXHRleGFuZEhvcml6b250YWxseUFuaW1hdGlvbi5zdGFydCgpXG5cbiMgRXhwYW5kIHRoZSBsYXllciB2ZXJ0aWNhbGx5IHRvIHRoZSBib3JkZXJzIG9mIGl0J3MgY29udGFpbmVyXG5leHBvcnRzLmV4cGFuZFZlcnRpY2FsbHkgPSAobGF5ZXIsIGFuaW1hdGlvbkRlbGF5KSAtPlxuXHRcblx0IyBkZWZpbmUgdGhlIGFuaW1hdGlvbnMgXG5cdGV4cGFuZFZlcnRpY2FsbHlBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG5cdFx0bGF5ZXI6IGxheWVyXG5cdFx0cHJvcGVydGllczpcblx0XHRcdGhlaWdodDogbGF5ZXIuc3VwZXJMYXllci5oZWlnaHRcblx0XHRcdHk6IGxheWVyLnN1cGVyTGF5ZXIueVxuXHRcdGRlbGF5OiBhbmltYXRpb25EZWxheVxuXHRcdHRpbWU6IDAuMlxuXHRcdGN1cnZlOiBcImVhc2UtaW4tb3V0XCJcblxuXHRcblx0ZXhwYW5kVmVydGljYWxseUFuaW1hdGlvbi5zdGFydCgpXG5cbiMgUm90YXRlIGxheWVyXG5leHBvcnRzLnJvdGF0ZUxheWVyID0gKGxheWVyLCByb3RhdGlvbkFuZ2xlKSAtPlxuXHRcblx0IyBkZWZpbmUgdGhlIGFuaW1hdGlvbnMgXG5cdHJvdGF0ZUFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25cblx0XHRsYXllcjogbGF5ZXJcblx0XHRwcm9wZXJ0aWVzOlxuXHRcdFx0cm90YXRpb246IHJvdGF0aW9uQW5nbGVcblx0XHR0aW1lOiAwLjJcblx0XHRjdXJ2ZTogXCJlYXNlLWluLW91dFwiXG5cblx0XG5cdHJvdGF0ZUFuaW1hdGlvbi5zdGFydCgpXG5cblxuIyBNb3ZlIGxheWVyXG5leHBvcnRzLm1vdmVMYXllciA9IChsYXllciwgbW92ZUJ5WCwgbW92ZUJ5WSwgbW92ZURlbGF5KSAtPlxuXHRcblx0IyBkZWZpbmUgdGhlIGFuaW1hdGlvbnMgXG5cdG1vdmVBbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uXG5cdFx0bGF5ZXI6IGxheWVyXG5cdFx0cHJvcGVydGllczpcblx0XHRcdHg6IGxheWVyLnggKyBtb3ZlQnlYXG5cdFx0XHR5OiBsYXllci55ICsgbW92ZUJ5WVxuXHRcdGRlbGF5OiBtb3ZlRGVsYXlcblx0XHR0aW1lOiAwLjJcblx0XHRjdXJ2ZTogXCJlYXNlLWluLW91dFwiXHRcblx0XHQjIGN1cnZlOiBcInNwcmluZyg2MDAsNDAsMTAsMClcIlxuXG5cdFxuXHRtb3ZlQW5pbWF0aW9uLnN0YXJ0KClcblxuXG4jIFNpbXVsYXRlIHRoZSBtYXRlcmlhbCBkZXNpZ24gc3VyZmFjZSByaXBwbGUgZWZmZWN0XG5leHBvcnRzLnJpcHBsZUVmZmVjdCA9ICh0b3VjaFgsIHRvdWNoWSwgbGF5ZXIpIC0+XG5cdFxuXHRsYXllci5jbGlwID0gdHJ1ZVxuXG5cdHJpcHBsZSA9IG5ldyBMYXllclxuXHRcdGJvcmRlclJhZGl1czogXCI1MCVcIlxuXHRcdHNjYWxlOiAwXG5cdFx0b3BhY2l0eTogLjVcblx0XHRzdXBlckxheWVyOiBsYXllclxuXHRcdGJhY2tncm91bmRDb2xvcjogbGF5ZXIuYmFja2dyb3VuZENvbG9yXG5cdFx0YnJpZ2h0bmVzczogNzVcblx0XHRtaWRYOiB0b3VjaFhcblx0XHRtaWRZOiB0b3VjaFlcblx0XHRpbmRleDogMFxuXHRcdGZvcmNlMmQ6IHRydWVcdFxuXHRcdFxuXHRyaXBwbGVBbmltYXRpb24gPSByaXBwbGUuYW5pbWF0ZVxuXHRcdHByb3BlcnRpZXM6IFxuXHRcdFx0c2NhbGU6IGxheWVyLndpZHRoIC8gNTBcblx0XHRcdGNsaXA6IHRydWVcblx0XHRcdG9wYWNpdHk6IDBcblx0XHRjdXJ2ZTogXCJlYXNlLW91dFwiXG5cdFx0dGltZTogLjNcblx0XG5cdHJpcHBsZUFuaW1hdGlvbi5vbiBcImVuZFwiLCAtPiBcblx0XHRyaXBwbGUuZGVzdHJveSgpXG4iLCIjIEFkZCB0aGUgZm9sbG93aW5nIGxpbmUgdG8geW91ciBwcm9qZWN0IGluIEZyYW1lciBTdHVkaW8uIFxuIyBteU1vZHVsZSA9IHJlcXVpcmUgXCJteU1vZHVsZVwiXG4jIFJlZmVyZW5jZSB0aGUgY29udGVudHMgYnkgbmFtZSwgbGlrZSBteU1vZHVsZS5teUZ1bmN0aW9uKCkgb3IgbXlNb2R1bGUubXlWYXJcblxuZXhwb3J0cy5teVZhciA9IFwibXlWYXJpYWJsZVwiXG5cbmV4cG9ydHMubXlGdW5jdGlvbiA9IC0+XG5cdHByaW50IFwibXlGdW5jdGlvbiBpcyBydW5uaW5nXCJcblxuZXhwb3J0cy5teUFycmF5ID0gWzEsIDIsIDNdIl19
