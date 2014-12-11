

function CommandManager(textbox, initCallback){

	var commandsBox = textbox;
	var selectedDiv = null;
	var clearFunc = initCallback;


	function cmdSelect(id){
		selectedDiv = document.getElementById(id) || null;
		return true;
	}

	function cmdUnselect(){
		selectedDiv = null;
		return true;
	}

	function cmdBorderradious(radious){
        if (selectedDiv == null)
          return false;

		selectedDiv.style.borderRadius = radious + "px";
		return true;
	}

	function cmdBorderthickness(thickness){
        if (selectedDiv == null)
          return false;

        selectedDiv.style.borderStyle = "solid";
        selectedDiv.style.borderWidth = thickness + "px ";
        return true; 
	}

	function cmdBordercolor(color){
        if (selectedDiv == null)
          return false;
        		
		selectedDiv.style.borderColor = color;
		return true;		
	}

	function cmdBackgroundcolor(color){
        if (selectedDiv == null)
          return false;
        		
		selectedDiv.style.backgroundColor = color;
		return true;
	}

	function cmdLocate(idelement, idwrapper){
        // safety rule: avoid locating the element on a non 
        // wrapper element or a wrapper already ocupied
        var wrapper = document.getElementById(idwrapper);
        if (wrapper.className != "wrapper" 
          || wrapper.childNodes.length > 0){
            return false;        
        }
		
		wrapper.appendChild(document.getElementById(idelement));
		return true;
	}
	
	function applyCommand(strCmd){

		var tokens = strCmd.split(" ");

		if(tokens[0] == "select")
			return cmdSelect(tokens[1]);
		
		else if(tokens[0] == "unselect")
			return cmdUnselect();
		
		else if (tokens[0] == "borderrad")
			return cmdBorderradious(tokens[1]);

		else if (tokens[0] == "bordertck")
			return cmdBorderthickness(tokens[1]);

		else if (tokens[0] == "bordercolor")
			return cmdBordercolor(tokens[1]);

		else if (tokens[0] == "backgroundcolor")
			return cmdBackgroundcolor(tokens[1]);

		else if(tokens[0] == "locate")
			return cmdLocate(tokens[1], tokens[2]);

	}

	function evalCmd(args){

		if (args.length < 1)
			return false;

		var command = args[0];

		if(command == "select"){

			if (args.length < 2)
				return false;			
			return command + " " + args[1];

		}else if(command == "unselect"){

			return command;

		}else if(command == "borderrad"){

			if (args.length < 2)
				return false;
			return command + " " + args[1];		
			
		}else if(command == "bordertck"){

			if (args.length < 2)
				return false;
			return command + " " + args[1];					

		}else if(command == "bordercolor"){

			if (args.length < 2)
				return false;
			return command + " " + args[1];

		}else if(command == "backgroundcolor"){

			if (args.length < 2)
				return false;
			return command + " " + args[1];

		}else if(command == "locate"){

			if (args.length < 3)
				return false;			
			return command + " " + args[1] + " " + args[2];

		}else{

			// unknown commmand
			return false;

		}		
	}

	// runs all commands in slow motion
	function runCommands(cmdArr, index){

		index = index || 0;

		// reached the end?
		if(index >= cmdArr.length)
			return;

		var cmd = cmdArr[index].trim();

		// if command valid, apply
		if(cmd !== "" && evalCmd(cmd.split(" "))){
			applyCommand(cmd);
		}

		// run next command
		setTimeout(runCommands, 500, cmdArr, index + 1);
	}

	this.addCommand = function(){

		if (arguments.length < 1)
			return;
		
		var command = evalCmd(arguments);
		if (!command)
			return;
		
		if(applyCommand(command)){
			// register command in commandsBox
			commandsBox.textContent += "\n" + command;		
		}

	}

	this.runMacro = function(){

		// get all commands from commands box
		var text = commandsBox.textContent.trim();
		var cmdArr = text.split("\n");
		runCommands(cmdArr);

	}

	this.undo = function(){		
		
		//clear 
		if(clearFunc){
			clearFunc();
		}

		// get all commands from commands box
		var text = commandsBox.textContent.trim();
		var cmdArr = text.split("\n");	

		// clear commands box
		commandsBox.textContent = "";		

		// run all commands but last one
		for (var i = 0; i < cmdArr.length - 1; i++) {
			var cmd = cmdArr[i].trim();

			// if command valid, apply
			if(cmd !== "" && evalCmd(cmd.split(" "))){
				if(applyCommand(cmd)){
					// register command in commandsBox
					commandsBox.textContent += "\n" + cmd;
				}
			}

		};		

	}

}