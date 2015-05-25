//If you have an array with numbers from 1 to n, but 1 number is missing, how do you find the missing number?
//  What is the operational complexity and memory allocation for your solution?
//  How could it be made better?

//this version only works for lists from 1 to N, where only one number is missing
function findMissingNumber(list){
	//get greater number in the array
	var n = list.length + 1;

	//formula for expected sum of all numbers
	var totalSum = (n * (1 + n)) / 2;

	//add all numbers in the array
	var arrSum = 0;
	for(var i = 0, l = list.length; i < l; i++){
		arrSum += list[i];
	}

	//return difference between expected and actual sum
	return totalSum - arrSum;
}