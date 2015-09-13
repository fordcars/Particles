function Particle(x, y, radius)
{
	var exports = {};
	
	mX = x;
	mY = y;
	mRadius = radius;
	
	exports.render = function(graphicsContext)
	{
		graphicsContext.beginPath();
		graphicsContext.arc(mX, mY, radius, 0, Math.TAU, true);
		graphicsContext.fill();
	}
	
	return exports;
}