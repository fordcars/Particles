function World(width, height)
{
	var exports = {};
	
	mParticles = [];
	
	exports.addParticle = function(x, y, radius)
	{
		mParticles[mParticles.length] = new Particle(x, y, radius);
	};
	
	exports.render = function(graphicsContext)
	{
		for(var i=0, length=mParticles.length; i<length; i++)
		{
			mParticles[i].render(graphicsContext);
		}
	};
	
	return exports;
}