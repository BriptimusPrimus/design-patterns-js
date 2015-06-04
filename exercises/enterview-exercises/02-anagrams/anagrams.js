var anagramsFinder = (function(){

  //initialize dictionary 
  //contains arrays of strings which are anagrams
  var dictionary = {};

  function addWord(word){
    //compute key, sorted version of word
    var key = word.split("").sort().join("");
    if (dictionary[key]){
      //add word to existing array of the key
      dictionary[key].push(word);
    }
    else {
      //initialize new array
      dictionary[key] = [word];
    }
  }

  function getAnagramsArray(word){
    //compute key, sorted version of word
    var key = word.split("").sort().join("");
    //if key not exists, there are no anagrams for the word, return empty array
    return dictionary[key] || [];
  }

  //input list of words to the dictionary 
  function addListOfWords(list, separator){
    //reset dictionary
    dictionary = {};
    var arr = list.split(separator);
    for (var i = 0, l = arr.length; i < l; i++) {
      addWord(arr[i]);
    };
  }

  return {
    setDictionary : addListOfWords,
    getAnagrams : getAnagramsArray
  }

})();