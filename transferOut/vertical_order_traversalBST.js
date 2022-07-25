
var verticalOrder= function(root) { 
    if(!root)return [];
    let min = Infinity, max = -Infinity;
    const q = [[root,0]], map = new Map();

    
    while(q.length){
        let n = q.length;
       // while(n){
            let ele = q.shift();
            let node = ele[0];
            let num = ele[1];
            if(!map.has(num))map.set(num, []);
            map.get(num).push(node.val);
            max = Math.max(max, num);
            min = Math.min(min, num);
            if(node.left)q.push([node.left, num - 1]);
            if(node.right)q.push([node.right, num + 1]);
            n--;
       // }
        
    }
    
  
   
    let res = [];
    for(let i = min; i < max + 1; i++){   
        if(map.has(i)){
            res.push(map.get(i));
        }
    }
    return res;
};





let k = verticalOrder({"val":3,"right":{"val":8,"right":{"val":7,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}},"left":{"val":9,"right":{"val":0,"right":null,"left":null},"left":{"val":4,"right":null,"left":null}}}) /*?*/

k


function verticalOrderTwo(root) {
    if (!root) return [];
    
    let queue = [{node: root,col: 0}];
    
    let p = 0;
    
    let minCol = Infinity;
    
    while (p <= queue.length - 1) {
        minCol = Math.min(minCol, queue[p].col)
        if (queue[p].node.left)queue.push({
                node: queue[p].node.left,
                col: queue[p].col - 1
            }); 
        if (queue[p].node.right)queue.push({
                node: queue[p].node.right,
                col: queue[p].col + 1
            });
        p++;
    }

    let res = []

    for (let i = 0; i < queue.length; i++) {
        let col = queue[i].col - minCol
        res[col] = res[col] || []
        res[col].push(queue[i].node.val)
    }

    return res;

}


let b = verticalOrderTwo({"val":3,"right":{"val":8,"right":{"val":7,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}},"left":{"val":9,"right":{"val":0,"right":null,"left":null},"left":{"val":4,"right":null,"left":null}}}) /*?*/

b 



function verticalOrderThree(root) {

    let height = node => !node ? 0 : 1 + Math.max(height(node.left), height(node.right))
    let result = {}  
    traverse(root, height(root), 0)
    let val = Object.values(result)
    return Object.values(val).map(x => Object.values(x).reduce((acc, c) => acc.concat(c), []))
    function traverse(node, rowCol, col) {
        if (node) {
            traverse(node.left, rowCol - 1, col + 1)
            traverse(node.right, rowCol + 1, col + 1)
            let val = node.val
            result[rowCol] = result[rowCol] || {}
            result[rowCol][col] = result[rowCol][col] || []
            result[rowCol][col].push(val)
        }
    }
}


let d = verticalOrderThree({"val":3,"right":{"val":8,"right":{"val":7,"right":null,"left":null},"left":{"val":1,"right":null,"left":null}},"left":{"val":9,"right":{"val":0,"right":null,"left":null},"left":{"val":4,"right":null,"left":null}}}) /*?*/















