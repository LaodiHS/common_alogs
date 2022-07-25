/**
 * Initialize your data structure here.
 */
function Trie() {
    const root = {};
    return { insert, search, startsWith };
    
    function insert(word) {
        let curr = root;
        word.split('').forEach(ch =>{ 
            curr = curr[ch] = curr[ch] || {} 
        });
        curr.isWord = true;
    }
    
    function traverse(word) {
        let curr = root;
        for (var i = 0; i < word.length; i++) {
            if (!curr) return null;
            curr
            curr = curr[word[i]];
        }

        return curr;
    }
    function search(word) {
        let node = traverse(word);
        return !!node && !!node.isWord;
    }
    
    function startsWith(word) {
        return !!traverse(word);
    }
}



 let prefix= new Trie()



 prefix.insert('hello') 
// prefix.insert('yello')
//prefix.insert('home')
//prefix.insert('heime')
 prefix.startsWith('h') /*?*/
//prefix.search('hello') /*?*/



function numOfPathsToDest(n) {


    let map = {}
    let paths = 0
    traverse(0, 0, '', '')

    function traverse(row, col, direction, path) {
        if (map[path]) return;
        if (row <= n && col <= n && row >= col) {
            path = path.concat(direction)
            if (row === n - 1 && col === n - 1) {
                    map[path] = path
                    paths++
               // return;
            }
            traverse(row + 1, col, 'N', path)
            traverse(row, col + 1, 'E', path)
        };
    };
    return paths
}

numOfPathsToDest(2) /*?*/






let obj={1:1,578:578}


for()