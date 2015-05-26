//http://en.wikipedia.org/wiki/Heapsort
//The complete binary tree maps the binary tree structure into 
//the array indices; each array index represents a node; 
//For a zero-based array, the root node is stored at index 0; 
//if i is the index of the current node, then
//iParent     = floor((i-1) / 2)
//iLeftChild  = 2*i + 1
//iRightChild = 2*i + 2

function heapsort(A){
	var count = A.length;
	//Build the heap in array A so that largest value is at the root
	Heapify(A);

	//The following loop maintains the invariants thah A[0:end] is a heap and every element
	//beyond end is greater than everything before it (so A[end:count] is in sorted order)
	var end = count - 1;
	while (end > 0){
		//A[0] is the root and largest value. The swap moves it in front of the sorted elements
		Swap(end, 0, A);
		//the heap size is reduced by one
		end--;
		//the swap ruined the heap property, so restore it
		SiftDown(A, 0, end);
	}
}

//Put elements of 'A' in heap order, in-place
function Heapify(A){
	var count = A.length;
    //start is assigned the index in 'A' of the last parent node
    //the last element in a 0-based array is at index count-1; find the parent of that element	
    var start = Math.floor((count - 2) / 2);

    while(start >= 0){
        //sift down the node at index 'start' to the proper place such that all nodes below
        //the start index are in heap order
        SiftDown(A, start, count - 1);
        //go to the next parent node
        start--;
    }
    //after sifting down the root all nodes/elements are in heap order
}

//Repair the heap whose root element is at index 'start', assuming the heaps rooted at its children are valid
function SiftDown(A, start, end){
	var root = start;
	var	child, swap;

	while((root * 2 + 1) <= end){ //while the root has the least one child
		child = root * 2 + 1; //left child
		swap = root; //keeps track of child to swap with

		if(A[swap] < A[child]){
			swap = child;
		}

		//if there is a right child and the child is greater
		if (child + 1 <= end && A[swap] < A[child + 1]){
			swap = child + 1;
		}

		if(swap === root){
            // The root holds the largest element. Since we assume the heaps rooted at the
            // children are valid, this means that we are done.
            return;
		}
		else{
			Swap(root, swap, A);
			root = swap; //repeat to continue sifting down the child now
		}
	} 
}

function Swap(a, b, arr){
	var temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}