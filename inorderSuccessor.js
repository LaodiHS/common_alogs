// aller In Binary Tree, Inorder successor of a node is the next node in Inorder traversal of the Binary Tree. Inorder Successor is NULL for the last node in Inoorder traversal.
// In Binary Search Tree, Inorder Successor of an input node can also be defined as the node with the smallest key greater than the key of input node. So, it is sometimes important to find next node in sorted order.  
// first check to see if the input node has a right path
// if it does, we grab it's left most traversal
//if no right path
// we check to candidates
 // cadindates are the largest values greater than the input key. we use a global candidates to store the nearest largets on traversal. untill we reach the node itself
 // if the node is larger than the input we go left storing the largest value as we go, and if we incounter a smaller node we go right.  we if we reach the input node we know the nearest ancestor is the last stored largest values


        //from your input node check for a right path than return farthest left. 
// if no right on input 
//traverse root
// traveling in order store largest !== input, if you encounter a node less than input go right 
// once you hit input, your largest stored is your inOrderSuccessor

// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
    this.root = null;
}
//from your input node check for a right path than return farthest left. 
// if no right on input 
//traverse root
// traveling in order store largest !== input, if you encounter a node less than input go right 
// once you hit input, your largest stored is your inOrderSuccessor
BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
return traverse(this.root)
 function traverse(node){
   if(inputNode.right){
       inputNode.key 
    inputNode= inputNode.right;
     while(inputNode.left){
       inputNode= inputNode.left
     }
  return inputNode;
}
let successor=null 
while(node !== inputNode){

 node.key /*?*/

  if(node.key<inputNode.key){
    node=  node.right
  }else{
      successor=node
      node=node.left
  }
}
 return successor;
}
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {

    var root = this.root;

    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }

    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert it
    var currentNode = root;
    var newNode = new Node(key);

    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your 
// findInOrderSuccessor function on. 
BinarySearchTree.prototype.getNodeByKey = function(key) {
    var currentNode = this.root;

    while(currentNode) {
        if(key === currentNode.key) {
            return currentNode;
        }

        if(key < currentNode.key) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right;
        }
    }

    return null;
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(25);
bst.insert(15);
bst.insert(10);
bst.insert(18);
bst.insert(19);
bst.insert(20);
bst.insert(5);

bst.insert(40);
bst.insert(35);
bst.insert(45);
bst.insert(44);
bst.insert(49);
// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(49);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if(succ) {
    console.log("Inorder successor of " + test.key + " is " + succ.key);
} else {
    console.log("Inorder successor does not exist");
}