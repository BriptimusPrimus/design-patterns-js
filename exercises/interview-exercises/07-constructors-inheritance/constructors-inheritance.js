// Create a constructor of a Person with 2 properties: name and last name.
	// Pass arguments as parameters to fill the persons
	// Create a method on Persons to retrieve their full name
	// Create another constructor of a Medic to inherit from Person
	// Pass name, last name and specialty as parameters


function Person(name, lastName)	{
	this.name = name;
	this.lastName = lastName;
}
Person.prototype.getFullName(){
	return this.name + " " + this.lastName;
}

function Medic(name, lastName, specialty){
	Person.call(this, name, lastName);
	this.specialty = specialty;
}
Medic.prototype = Object.create(Person.prototype);
Medic.prototype.constructor = Medic;