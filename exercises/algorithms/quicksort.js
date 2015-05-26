//http://en.wikipedia.org/wiki/Quicksort
//a very commonly used algorithm for sorting. When implemented well, 
//it can be about two or three times faster than its main competitors, 
//merge sort and heapsort.

function quicksort(A, lo, hi){
	if(lo < hi){
		var p = Partition(A, lo, hi);
		quicksort(A, lo, p - 1);
		quicksort(A, p + 1, hi);
	}
}

// lo is the index of the leftmost element of the subarray
// hi is the index of the rightmost element of the subarray (inclusive)
function Partition(A, lo, hi){
	var pivotIndex = ChoosePivot(A, lo, hi);
	var pivotValue = A[pivotIndex];

	//put the chosen pivot at A[hi]
	Swap(pivotIndex, hi, A);
	var storeIndex = lo;

    // Compare remaining array elements against pivotValue = A[hi]
    //for i from lo to hi−1, inclusive	
    for(var i = lo; i < hi; i++){
    	if(A[i] < pivotValue){
    		Swap(i, storeIndex, A);
    		storeIndex = storeIndex + 1;
    	}
    }
    Swap(storeIndex, hi, A); //move pivot to its final place
    return storeIndex;
}

function Swap(a, b, arr){
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function ChoosePivot(A, lo, hi){

    //compute middle of array
    var mi = lo +  Math.floor((hi - lo) / 2);

    //include leftmost, middle and rightmost 
    //elements in new array
    var O = [
        [ A[lo], lo ],
        [ A[mi], mi ],
        [ A[hi], hi ]
    ];	

    //sort new array
    //smaller of two ends
    if (O[0][0] > O[2][0])
    {
        //swap
        Swap(0, 2, O);
    } 
    //smaller of first and middle
    if (O[0][0] > O[1][0])
    {
        //swap
        Swap(0, 1, O);
    }
    //only if not swaped, check middle with last element
    else if (O[1][0] > O[2][0])
    {
        //swap
        Swap(1, 2, O);
    }   
    
    //return element at the middle
    return O[1][1];     
}