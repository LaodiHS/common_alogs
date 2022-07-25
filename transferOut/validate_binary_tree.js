

function isValidBST(root) {
    return valid(root, -Infinity, Infinity)

    function valid(root, leftMin, rightMax) {
        if (!root) return true;
        if (root.val <= leftMin || root.val >= rightMax) return false;
        return valid(root.left, leftMin, root.val) && valid(root.right, root.val, rightMax)
    }

}

isValidBST({"val":10,"right":{"val":15,"right":{"val":20,"right":null,"left":null},"left":{"val":6,"right":null,"left":null}},"left":{"val":5,"right":null,"left":null}})




// lets think about this. A binary tree is a list of nodes when flatened gives us a successive list of values
// from the lowest to the highest 
//  so to see if our binary tree is an array we make sure every successive value is larger than the pervious
// but this is not an array since the values are stored in non contigous memory so we need to think at a higher level
// where the relationships are defined by values and edges in a graph
// 
// we know every node is always higher in value than it's furthest left child

// and every node is always lower in value than it's furthest right child
// and every root is always lower in value 



// so we can traverse this graph by using recursion
// we can use the frames of our recursion to visit all the bifercated nodes, that take us to the furthest left element

// as we retractivly visit the bifurcated frame we will know the left nodes value when visiting it's adjacent node. 
//so we will know the branches lower bound because we know the left node 
// will know the upper bound because we pass the parent node to our frame on each bifurcation 
// so each node value needs to be more than than it's  left most neighbor and less than it's right most neighbor   




// but that would be naive
// so we can decend into any node knowing that its children will always represent a value between the farthest left child
// and the farthest right
// if we divide the tree at it's root  