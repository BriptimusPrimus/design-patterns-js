//http://en.wikipedia.org/wiki/Binary_search_algorithm
//Binary search algorithm

function recursiveBinarySearch(list, key, min, max){
	//test if array is empty	
	if (max < min || !list || list.length < 1
		|| max >= list.length || min < 0)
		//set is empty, so return value not found
		return -1;

	//calculate midpoint to cut set in half
	var mid = min + Math.floor((max - min) / 2);

	//three way comparison
	if(list[mid] > key)
		//key is lower than subset
		return recursiveBinarySearch(list, key, min, mid -1);
	else if (list[mid] < key)
		//key is upper than subset
		return recursiveBinarySearch(list, key, mid + 1, max);
	else
		//key has been found
		return list[mid];
}

function iterativeBinarySearch(list, key, min, max){
	
	//test if array is empty
	if (max < min || !list || list.length < 1
		|| max >= list.length || min < 0)

	var mid;
	//continue searching while [min, max] is not empty
	while (max >= min){
		//calculate the midpoint for roughly equal partition
		mid = min + Math.floor((max - min) / 2);

		if(list[mid] == key)
			//key found at index mid
			return list[mid];
		else if (list[mid] < key)			
			//change min index to search upper subarray
			min = mid + 1;
		else
			//change mas index to search lower subarray
			max = mid - 1;
	}
	//key was not found
	return -1;
}
