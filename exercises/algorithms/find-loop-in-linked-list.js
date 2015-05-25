//If you have a single linked list, how would do you find out if there is a loop in the list?
//What is the operational complexity and memory allocation of your solution?
//How would it be made better?

function findLoop(node){
	//no head, no loop
	if (!node || !node.next)
		return false;

	//use two pointers to traverse the list
	//one will go twice as fast as the other one
	var slow = node,
		fast = node.next;

	while(fast){
		//if both points to the same node
		//we found the loop
		if (slow === fast)
			return true;
				
		//slow goes to the next node
		slow = slow.next;

		//fast goes two nodes next
		if(!fast.next || !fast.next.next)
			return false;

		fast = fast.next.next;
	}

	//if reached here, there is no loop
	return false;
}