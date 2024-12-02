/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let localWord = "";
    let nindex = 1;
    let result = -1
    for (let index = 0; index < sentence.length+1; index++) {
        const element = sentence[index];
        console.log(localWord,searchWord)
        if (localWord == searchWord) {
            result = nindex;
            localWord = ""
            searchWord = 125
        }else{
            if (element != " "){
                localWord =  localWord + element       
            }else{
                localWord = ""
                nindex += 1 
            }
        }
    };
    return result;
};

isPrefixOfWord("i love eating burger","burg")
isPrefixOfWord("this problem is an easy problem","pro")
isPrefixOfWord("i am tired","you")