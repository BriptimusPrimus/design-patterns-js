// shapes interface
// IShape = {

// 	function draw(canvasElement, shade){}

// 	function isInPoint(point){}

// }

// http://stackoverflow.com/questions/2212604/javascript-check-mouse-clicked-inside-the-circle-or-polygon
// http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
// to calculate if a given point is inside a polygon
function pnpoly( nvert, vertx, verty, testx, testy ) {
    var i, j, c = false;
    for( i = 0, j = nvert-1; i < nvert; j = i++ ) {
        if( ( ( verty[i] > testy ) != ( verty[j] > testy ) ) &&
            ( testx < ( vertx[j] - vertx[i] ) * ( testy - verty[i] ) / ( verty[j] - verty[i] ) + vertx[i] ) ) {
                c = !c;
        }
    }
    return c;
}

// transform a hex number into an rgba format.
function hex2rgba(hex, alpha){
	return hex.replace(/#([0-9,a-f]{2})([0-9,a-f]{2})([0-9,a-f]{2})/gi, 
		function(all, t1, t2, t3){
			var result = "rgba(" + parseInt(t1, 16)
				+ ", " + parseInt(t2, 16) 
				+ ", " + parseInt(t3, 16)
				+ ", " + alpha + ")";
			return result;
		}
	);
}


// shape: Circle
function Circle(point, color){

	var _radius = 30;

	var	_borderColor = "black";

	this.center = point;

	this.color = color;

	function intersects(x, y, cx, cy, r) {
	    var dx = x-cx
	    var dy = y-cy
	    return dx*dx+dy*dy <= r*r
	}

	this.draw = function(canvasElement, shade){

		var context = canvasElement.getContext('2d');

		// set the color
		var brush = this.color;
		if (shade){
			brush = hex2rgba(this.color, 0.3);
		}

		context.beginPath();
		context.arc(this.center.x, this.center.y, _radius, 0, 2 * Math.PI, false);
		context.fillStyle = brush;
		context.fill();		

		return true;

	}

	this.isInPoint = function (point){
		return intersects(point.x, point.y, this.center.x, this.center.y, _radius);
	}	

}

// shape: Triangle
function Triangle(point, color){

	var _side = 50;

	var	_borderColor = "black"; 

	var edges = [];

	this.center = point;

	this.color = color;

	this.calcEdges = function(){

		// empty the array first
		edges.splice(0, edges.length);

		edges.push({
			x : this.center.x - (_side / 2),
			y : this.center.y + (_side / 2)					
		});
		edges.push({
			x : this.center.x,
			y : this.center.y - (_side / 2)					
		});
		edges.push({
			x : this.center.x + (_side / 2),
			y : this.center.y + (_side / 2)					
		});

	}

	this.draw = function(canvasElement, shade){

		var context = canvasElement.getContext('2d');
		this.calcEdges();

		// set the color
		var brush = this.color;
		if (shade){
			brush = hex2rgba(this.color, 0.3);
		}

	    context.beginPath();
	    context.moveTo(edges[0].x, edges[0].y);
	    context.lineTo(edges[1].x, edges[1].y);
	    context.lineTo(edges[2].x, edges[2].y);
	    context.fillStyle = brush;
	    context.fill();

		return true;
	}

	this.isInPoint = function(point){

		return pnpoly(
			3,
			[ edges[0].x, edges[1].x, edges[2].x ],
			[ edges[0].y, edges[1].y, edges[2].y ],
			point.x,
			point.y
		);

	}

}

// shape: Square
function Square(point, color){

	var _side = 50;

	var	_borderColor = "black"; 

	var edges = [];

	this.center = point;

	this.color = color;

	this.calcEdges = function(){

		// empty the array first
		edges.splice(0, edges.length);

		edges.push({
			x : this.center.x - (_side / 2),
			y : this.center.y - (_side / 2)					
		});
		edges.push({
			x : this.center.x + (_side / 2),
			y : this.center.y - (_side / 2)					
		});
		edges.push({
			x : this.center.x + (_side / 2),
			y : this.center.y + (_side / 2)					
		});				
		edges.push({
			x : this.center.x - (_side / 2),
			y : this.center.y + (_side / 2)					
		});		

	}

	this.draw = function(canvasElement, shade){

		var context = canvasElement.getContext('2d');
		this.calcEdges();

		// set the color
		var brush = this.color;
		if (shade){
			brush = hex2rgba(this.color, 0.3);
		}		

		context.beginPath();
		context.rect(edges[0].x, edges[0].y, _side, _side);
		context.fillStyle = brush;
		context.fill();

		return true;

	}

	this.isInPoint = function(point){

		return pnpoly(
			4,
			[ edges[0].x, edges[1].x, edges[2].x, edges[3].x ],
			[ edges[0].y, edges[1].y, edges[2].y, edges[3].y ],
			point.x,
			point.y
		);	

	}
	
}

// Shapes Factory
function ShapesFactory(){

	this.shapeClass = null;

	this.buildShape = function (shapeType, point, color){
		if(shapeType === "circle"){
			this.shapeClass = Circle;
		}else if(shapeType === "triangle"){
			this.shapeClass = Triangle;
		}else if(shapeType === "square"){
			this.shapeClass = Square;
		}else {
			return null;
		}

		return new this.shapeClass(point, color);
	}

}


