
// buttom up depth first search optimization problem. 
// since we visit all the the elements solution is O(n) space is O(1)
// we start from the furthest left value, if it has no children we assign two zero children of value zero.
// we add the values of both children along with the parent to get the total max of the tree at the current vertex.
// as we travel up the branch we re-evalute the parent vertext as a summation of it's largest child and itself 


// use cases  compute the worst case evaluation cost of a decision tree
//mercle trees. 
//https://www.youtube.com/watch?v=YIc6MNfv5iQ


let a = 
`75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;




function maxPath(a) {
    let stack = []
    for (let b of a.split(/\n/)) stack.push(b.split(' '))
    stack = stack.reverse().map(x => x.map(x => +x))
    return descendants()

    function descendants(row = 1) {
        while (row < stack.length) {
            col = 0
            let co = col
            let ro = row - 1
            while (co < stack[row].length) {
                let left = Math.max(0, stack[ro][co])
                let right = Math.max(0, stack[ro][++co])
                stack[row][co - 1] = (Math.max(left, right) + stack[row][co - 1])
            }
            row++
        }
        return stack.reverse()[0][0]
    }
}





console.log(maxPath(a)) 

         

function maxPathSum(root) {
    
     
    let max = -Infinity
    traverse(root)
    return max
    
  function traverse(node){
  if(!node)return null
  let left = Math.max(0, traverse(node.left))
  let right = Math.max(0, traverse(node.right))
  
    max=Math.max(max,  left + right + node.val)
    return Math.max(left , right) + node.val
            
    }
  }


