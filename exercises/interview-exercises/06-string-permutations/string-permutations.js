var Permutator = (function(){

    function permutations ( word ) {
        var resultSet = [];
        var used = []; //booleans
        var result = ''; // stringBuilder();
        var input = word;

        (function permute( ) {
            if( result.length === input.length ){
                //console.log( result );
                resultSet.push(result);
                return;
            }
            for( var i = 0; i < input.length; i++ ){
                if( used[i] === true ) {
                    continue;
                }
                result += input.charAt(i);
                used[i] = true;
                permute();
                used[i] = false;
                result = result.slice( 0 , - 1 );
            }
        })();

        return resultSet;
    }

    return { wordPermutations : permutations }

})();