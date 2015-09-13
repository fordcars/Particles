function ParticleContext(outputContext)
{
	var exports = {};
	
	mOutputContext = outputContext;
	mWorld = new World(mOutputContext.width, mOutputContext.height);
	
	update();
	mWorld.addParticle(10, 100, 15);///
	
	function update()
	{
		window.requestAnimationFrame(update);
		mWorld.render(mOutputContext.graphicsContext);
	}
	
	return exports;
}

Math.TAU = Math.PI * 2;

(function() // requestAnimationFrame polyfill by Erik Möller. Fixed by Paul Irish and Tino Zijdel, https://gist.github.com/paulirish/1579671, MIT license
{
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
				|| window[vendors[x]+'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
			timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};

	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
		clearTimeout(id);
	};
}());