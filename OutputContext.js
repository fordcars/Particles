function OutputContext(width, height, parent)
{
	var exports = {};
	
	mParent = parent;
	mCanvas = createCanvas(width, height);
	
	exports.width = width;
	exports.height = height;
	exports.graphicsContext = mCanvas.getContext("2d");
	
	function createCanvas(width, height)
	{
		var canvas = document.createElement("canvas");
		canvas.width = width;
		canvas.height = height;
		
		parent.appendChild(canvas);
		return canvas;
	}
	
	return exports;
}