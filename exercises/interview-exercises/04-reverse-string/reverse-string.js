var stringReverser = (function(){
	
	function reverseStrings(s){
		return s.split("").reverse().join("");
	}

	return{
		reverse : reverseStrings
	}
	
})();