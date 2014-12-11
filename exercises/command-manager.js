

function CommandManager(textbox){

	var commandsBox = textbox;
	var selectedDiv = null;


	function cmdSelect(id){
		selectedDiv = document.getElementById(id) || null;
	}

	function cmdUnselect(){
		selectedDiv = null;
	}

	function cmdBackgroundcolor(color){
		selectedDiv.style.borderColor = color;
	}

	function cmdLocate(idelement, idwrapper){
        // safety rule: avoid locating the element on a non 
        // wrapper element or a wrapper already ocupied
        if (e.target.className != "wrapper" 
          || e.target.childNodes.length > 0){
            return;        
        }

		var wrapper = document.getElementById(idwrapper);
		wrapper.appendChild(document.getElementById(iddata));
	}
	
	applyCommand(strCmd){

		var tokens = strCmd.split(" ");

		if(tokens[0] == "select")
			cmdSelect(tokens[1]);
		
		else if(tokens[0] == "unselect")
			cmdUnselect();

		else if (tokens[0] == "backgroundcolor")
			cmdBackgroundcolor(tokens[1]);

		else if(tokens[0] == "locate")
			cmdLocate(tokens[1], tokens[2]);

	}

	function evalCmd(args){

		if (args.length < 1)
			return;

		var command = arguments[0];

		if(command == "select"){

			if (args.length < 2)
				return false;			
			return command + " " + args[1];

		}else if(command == "unselect"){

			return command;

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

	this.addCommand(){

		if (arguments.length < 1)
			return;
		
		var command = evalCmd(arguments);
		if (!command)
			return;

		// register command in commandsBox
		commandsBox.textContent += "\n" + command;

		applyCommand(command);

	}



}