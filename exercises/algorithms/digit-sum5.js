//Given the number range from 1 to 200, return all the numbers whose digit sum equals 5.
//Example: 
//99 = 9 + 9 = 18
//32 = 3 + 2 = 5
function numbersWhosDigitsSum5(i, j){
	var result = [];

	for(var n = i; n <= j; n++){
		var number = n,
			acumulator = 0;

		while(number > 0 && acumulator < 5){
			acumulator += number % 10;
			number = Math.floor(number / 10);			
		}

		if (number === 0 && acumulator === 5)
			result.push(n);
	}

	return result;
}

