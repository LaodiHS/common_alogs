//Recursive Search Binary Tree 
//For a breadth-first search, an algorithm which is iterating every level of the tree first, 
//you could use this code with the same tree data as above.
var breadthFirst = function (node) {

        function bf(queue) {
            var newQueue = [];
            queue.forEach(function (node) {
                node.left && newQueue.push(node.left);
                node.right && newQueue.push(node.right);
            });
            newQueue.length && bf(newQueue);
        }

        bf([node]);
    },
    treeOne = {
        data: 4,
        left: {
            data: 2,
            left: {
                data: 1,
                left: null,
                right: null
            },
            right: {
                data: 3,
                left: null,
                right: null
            }
        },
        right: {
            data: 6,
            left: {
                data: 5,
                left: null,
                right: null
            },
            right: {
                data: 7,
                left: null,
                right: null
            }
        }
    };

breadthFirst(treeOne);

// For a breadth- first search, an algorithm which is iterating every 
// level of the tree first.

var depthFirth = function (node) {
        if (node) {
            depthFirth(node.left);
            depthFirth(node.right)
        }
    },
    treeTwo = {
        data: 4,
        left: {
            data: 2,
            left: {
                data: 1,
                left: null,
                right: null
            },
            right: {
                data: 3,
                left: null,
                right: null
            }
        },
        right: {
            data: 6,
            left: {
                data: 5,
                left: null,
                right: null
            },
            right: {
                data: 7,
                left: null,
                right: null
            }
        }
    };

depthFirth(treeTwo)