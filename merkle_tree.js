const crypto = require('crypto');

function hash(str) {
    return crypto.createHash('sha256').update(str).digest('hex');
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
// var findDuplicateSubtrees = function(root) {
//     const merkleNodes = new Map();
//     merkle(root, merkleNodes);
//     const duplicates = [];
//     for (const [count, node] of merkleNodes.values()) {
//         if (count > 1) {
//             duplicates.push(node);
//         }
//     }
//     return duplicates;
// };

// function merkle(node, merkleNodes) {
//     if (!node)return;
    
    
//     const left = merkle(node.left, merkleNodes);
//     const right = merkle(node.right, merkleNodes);
//     const treeHash = hash(`${left}${node.val}${right}`);
    
//     const previousMerkleNode = merkleNodes.get(treeHash) || [0, node];
//     previousMerkleNode[0] += 1;
//     merkleNodes.set(treeHash, previousMerkleNode);
    
//     return treeHash;
// }






var findDuplicateSubtrees = function(root) {
    const stm = {}
    const result = []
    traverseTree(root, stm, result)
    return result
};




function traverseTree(node, stm, result) {
    if (!node)return "n";
    
    const leftString = traverseTree(node.left, stm, result)
    const rightString = traverseTree(node.right, stm, result)
    const thisString = `${node.val}.${leftString}.${rightString}`
    stm[thisString] = (stm[thisString] || 0) + 1
    if (stm[thisString] === 2) {
        result.push(node)
    }
    return thisString
}

let c = findDuplicateSubtrees({"val":1,"right":{"val":3,"right":{"val":4,"right":null,"left":null},"left":{"val":2,"right":null,"left":{"val":4,"right":null,"left":null}}},"left":{"val":2,"right":null,"left":{"val":4,"right":null,"left":null}}})

c



