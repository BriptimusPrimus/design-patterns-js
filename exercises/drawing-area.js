function DrawingArea(canvas, controls, factory){

	// set initial variables
	var canvasElement = canvas,
		shapePicker = controls.shapes,
		colorPicker = controls.colorPicker,
		shapesFactory = factory,
		shapesList = [], // observers list
		selected = -1;   // selected shape for moving around

	function clearCanvas(){
		var context = canvasElement.getContext('2d');
		context.clearRect(0,0,canvasElement.width,canvasElement.height)
	}

	function drawArea(){
		clearCanvas();
		for (var i = 0; i < shapesList.length; i++) {
			shapesList[i].draw(canvasElement);
		};	
	}

	function startMoving(index){
		selected = index;
		canvasElement.addEventListener("mouseup", endMoving);
		canvasElement.addEventListener("mousemove", travel);
	}

	function endMoving(e){ 

		canvasElement.removeEventListener("mouseup", endMoving);
		canvasElement.removeEventListener("mousemove", travel);
		
		if (selected < 0){ 
			return;
		}

		// get coordinates of point
		var point = getCursorPosition(canvasElement, e);

		// remove the figure from the list and put it on top
		var figure = shapesList.splice(selected, 1)[0];
		shapesList.push(figure);
		
		// set new position for the figure
		figure.center = point;

		// clear and draw everything
		drawArea();
		selected = -1;
	}	

	function travel(e){
		if (selected < 0){ 
			return;
		}

		// get coordinates of point
		var point = getCursorPosition(canvasElement, e);

		var figure = shapesList[selected];
		
		// set new position for the figure
		figure.center = point;		
		figure.draw(canvasElement, true);
	}

	// add a new shape to the drawing area
	function newShape(point){

		var shapeType = typeOfShapeSelected();
		if(!shapeType){
			// no type of shape was selected
			return false;
		}
			
		var shape = shapesFactory.buildShape(shapeType, point, colorPicker.value);
		if(!shape){
			// factory did not build that type of shape
			return false;
		}		

		// add shape to observers list 
		shapesList.push(shape);

		// draw new shape
		return shape.draw(canvasElement);

	}	

	// The controls should determine what type of 
	// shape is being selected
	function typeOfShapeSelected(){

		for (var i = 0; i < shapePicker.length; i++) {
			if (shapePicker[i].button.checked){
				return shapePicker[i].shapeType;
			}
		};

		// no type of shape was selected
		return false;
	}

	function getCursorPosition(canvas, event) {
	    var rect = canvas.getBoundingClientRect();
	    var x = event.clientX - rect.left;
	    var y = event.clientY - rect.top;
	    return { x: x, y: y };
	}		

	// this function will be invoked when a click
	// event is triggered
	function action(e){

		// get coordinates of point 		
		var point = getCursorPosition(canvasElement, e);

		// check if clicked in any shape
		// traverse array in oposite order
		for (var i = shapesList.length - 1; i >= 0; i--) {
			if (shapesList[i].isInPoint(point)){
				return startMoving(i);
			}
		};

		// if something already selected 
		// let endMoving() take over
		if (selected > 0){
			return false;
		}

		return newShape(point);

	}

	canvasElement.addEventListener("mousedown", action, false);	

	this.setControls = function(controls){
		shapePicker = controls.shapes,
		colorPicker = controls.color;		
	};

	this.setFactory = function(factory){
		shapesFactory = factory;
	};

}