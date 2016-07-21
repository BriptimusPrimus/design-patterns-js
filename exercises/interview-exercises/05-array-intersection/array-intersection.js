var ArrayIntersect = (function(){
	
	function arrayIntersectHash(a, b){
	    var result = [], o = {}, i, v;

	    for (i = 0; i < b.length; i++) {
	        o[b[i]] = true;
	    }

	    for (i = 0; i < a.length; i++) {
	        v = a[i];
	        // if (o[v]) {
			if (v in o) {	        	
	            result.push(v);
	        }
	    }
	    return result;
	}

	//array must be sorted
	function arrayIntersectIterative(a, b){
		var result = [];	
		while(a.length > 0 && b.length > 0){
			if(a[0] < b[0]){
				a.shift();
			}
			else if(b[0] < a[0]){
				b.shift();
			}
			// equals
			else{
				result.push(a.shift());
				b.shift();
			}	
		}
		return result;
	}

	return{
		hashIntersect : arrayIntersectHash,
		iterativeIntersect : arrayIntersectIterative
	}
	
})();