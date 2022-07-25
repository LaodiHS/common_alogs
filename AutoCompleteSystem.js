/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.searchHistory = {};
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach(char => {
        this.searchHistory[char] = {};
    });
    this.inputString = '';
    this.MAX_RESULTS = 3;
    for (let i = 0; i < times.length; i++) {
        const sentence = sentences[i];
        this.searchHistory[sentence[0]][sentence] = times[i];
    }
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if (c === '#') {
        const firstChar = this.inputString[0];
        if (!this.searchHistory[firstChar][this.inputString]) {
            this.searchHistory[firstChar][this.inputString] = 0;
        }
        this.searchHistory[firstChar][this.inputString] += 1;
        this.inputString = '';
        return [];
    }
    this.inputString += c;
    const firstChar = this.inputString[0];
    const results = Object.keys(this.searchHistory[firstChar]).filter(sentence => {
        return sentence.startsWith(this.inputString);
    });
    results.sort((a, b) => {
        const aFreq = this.searchHistory[firstChar][a];
        const bFreq = this.searchHistory[firstChar][b];
        return aFreq !== bFreq ? bFreq - aFreq : (a > b ? 1 : -1);
    });
    return results.slice(0, this.MAX_RESULTS);
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = Object.create(AutocompleteSystem).createNew(sentences, times)
 * var param_1 = obj.input(c)
//  */
// Second approach - Augmented Trie

// The Trie used in this solution is modified from my answer in 208 - Implement Trie Prefix Tree to store the count in each last node of the sentence. The code may be long, but it is really quite easy to understand.

// Using a Trie (Prefix tree).
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this._trie = {};
};

/**
 * Inserts a string into the trie a number of times.
 * @param {string} word
 * @param {number} [count=1]
 * @return {void}
 */
Trie.prototype.insert = function(word, count = 1) {
    if (!word.length || count < 1) {
        return;
    }
    let curr = this._trie;
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (!curr.hasOwnProperty(char)) {
            curr[char] = {};
        }
        curr = curr[char];
    }
    if (!curr.hasOwnProperty('#')) {
        curr['#'] = 0;
    }
    curr['#'] += count;
};

/**
 * Returns if there is any string in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {Object}
 */
 // Time: O(n), where n is the number of different strings in the Trie.
 // Space: O(1)
Trie.prototype.stringsStartingWith = function(prefix) {
    if (!prefix.length) {
        return false;
    }
    let curr = this._trie;
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!curr.hasOwnProperty(char)) {
            return false;
        }
        curr = curr[char];
    }
    const results = {};
    function traverse(node, chars) {
        if (!node) {
            return;
        }
        Object.keys(node).forEach(char => {
            if (char === '#') {
                results[chars] = node[char];
                return;
            }
            traverse(node[char], chars + char);
        });
    }
    traverse(curr, prefix);
    return results;
};

/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function(sentences, times) {
    this.trie = new Trie();
    this.inputString = '';
    this.MAX_RESULTS = 3;
    for (let i = 0; i < times.length; i++) {
        const sentence = sentences[i];
        this.trie.insert(sentence, times[i]);
    }
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function(c) {
    if (c === '#') {
        this.trie.insert(this.inputString);
        this.inputString = '';
        return [];
    }
    this.inputString += c;

    const strings = this.trie.stringsStartingWith(this.inputString);
    const results = Object.keys(strings);
    results.sort((a, b) => {
        const aFreq = strings[a];
        const bFreq = strings[b];
        return aFreq !== bFreq ? bFreq - aFreq : (a > b ? 1 : -1);
    });
    return results.slice(0, this.MAX_RESULTS);
};

/** 
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = Object.create(AutocompleteSystem).createNew(sentences, times)
 * var param_1 = obj.input(c)
 */

const a = "a".charCodeAt(0);

class TrieNode {
    constructor() {
        this.children = [];
        this.isEnd = false;
        this.values = [];
    }
};

class Trie {
    constructor(sentences, times) {
        this.root = new TrieNode();
        this.sentenceMap = new Map();
        sentences.forEach((sentence, i) => {
            this.sentenceMap.set(sentence, times[i]);
        });
        this.buildTree();
    }
    
    buildTree() {
        for (let [key, value] of this.sentenceMap) {
            this.add(key);
        }
    }
    
    add(sentence) {
        let node = this.root;
        for (let i = 0; i < sentence.length; i++) {
            let char = sentence[i] === " " ? 26 : sentence.charCodeAt(i) - a;
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node.children[char].values.push(sentence);
            node = node.children[char];
        }
        node.isEnd = true;
    }
    search(node, ch) {
        let char = ch === " " ? 26: (ch.charCodeAt(0) - a);
        if (node.children[char]) return node.children[char];
        return null;
    }
}

function AutocompleteSystem(sentences, times) {
    this.trie = new Trie(sentences, times);
    this.prev = "";
    this.curNode = this.trie.root;
};

AutocompleteSystem.prototype.input = function(c) {
  if (c === "#") {
      let count = this.trie.sentenceMap.get(this.prev);
      if (!count) {
        this.trie.add(this.prev);
        this.trie.sentenceMap.set(this.prev, 1);
      } else {
        this.trie.sentenceMap.set(this.prev, count + 1);
      }
      this.prev = "";
      this.curNode = this.trie.root;
      return [];
  }
  this.prev += c;
  if (this.curNode) {
    this.curNode = this.trie.search(this.curNode, c);
    return (this.curNode && this.curNode.values.sort((a, b) => {
      let countB = this.trie.sentenceMap.get(b);
      let countA = this.trie.sentenceMap.get(a);
      if (countB === countA) {
        return a < b ? -1 : 1;
      } else {
        return countB - countA;
      }
    }) || []).slice(0, 3);
  } else {
    return [];
  }
};