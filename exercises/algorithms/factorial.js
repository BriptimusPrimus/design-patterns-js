//Write a factorial function in an iterative and recursive way.
function recursiveFactorial(n){
	if (n < 0)
		throw new Error("input is a negative number");	

	if(n <= 1)
		return 1;

	return n * recursiveFactorial(n - 1);
}

function iterativeFactorial(n){

}

