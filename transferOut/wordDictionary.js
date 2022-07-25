
// more memory and slower 308ms 47mb
var WordDictionary = function () {
    const root = {}
    return { addWord, search }

    function addWord(word) {
        let node = root
        let i = word.length
        word.split('').forEach(c => {
            node = node[c] = node[c] || {}
        })
        node.isEnd = true;
    }
    function search(word) {
        const search = function (current, level) {
            //object does not exists and we have reached a depth equal to the length of the target word and there is no end marker
            // we know that the string does not exists
            if (!current || (level === word.length && !current.isEnd)) {
                return false
            }
            // if we reach a level where the word length matches the depth and there is an end tag we know that the word exists
            if (level === word.length && current.isEnd) {
                return true;
            }
            // if the char at the word level is a "."
            if (word[level] === '.') {
                // we run through the alphabet
                for (let i = 0; i < 26; i++) {
                    let ch = String.fromCharCode('a'.charCodeAt() + i)
                    // checking if any letters match match a length with an end tag
                    if (search(current[ch], level + 1)) {
                        // if found we return true;
                        return true;
                    }
                }
                // else return false 
                return false
            }
            // if no "." char we continue searching the tree
            return search(current[word[level]], level + 1)
        }
        // we begin the tree search
        return search(root, 0)
    }
};



// less memory and faster 188ms
var WordDictionary = function() {
    const root = [];

return {addWord,search}
// build a tree based on lengths and push the word on to each of those lenghts
function addWord(word) {
    const len = word.length;
       root[len] = (root[len] || []);
       root[len].push(word);
};

function search(word) {
 // get the array based on the lengths
    const words = root[word.length];
 // if emtpy no words with such length exist

    if (!words)return false;
//  //initliize the accumulator to false
    return words.reduce((acc, curr) => {
        //if acc is true return it
        if (acc)return acc;
        
        // if the current word is not equal to the word length in our array return false
        if (curr.length !== word.length)return false;
        // if the length exists we traverse using the length of the current word
        for(let i = 0; i < curr.length; ++i) {
            // if a letter is not equal where there is not period than return false
            if (curr[i] !== word[i] && word[i] !== ".")  {
                return false;
            }
        }
        // else there is one or more words which match the critera 
        return true;
    }, false);
};

};



















                let word = new WordDictionary()
              word.addWord('bad')
                word.addWord('dad')
                word.addWord('dadda')
                word.addWord('bad')
                word.addWord('ba')
                word.addWord('a')
             //   word.addWord("badbadsad")
             //  word.search("ad")
                // word.search("ad")
                // word.search(".ad")
                //word.search("bad") /*?*/
                //word.search(".ad") /*?*/
              //  word.search("..d") /*?*/
               // word.search("...badsad") /*?*/
//                 word.search("bad") /*?*/
 //word.search(".a.") /*?*/

//word.search("b.d")/*?*/
//word.search(".ad") /*?*/
//word.search("d.d") /*?*/
//word.search("b.d")/*?*/
//word.search("bad") /*?*/
word.search('...') /*?*/
//word.search("bad") /*?*/


let a= 'a'.charCodeAt()


a ^= (1<<5)


a= String.fromCharCode(a) /*?*/