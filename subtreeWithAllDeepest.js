var subtreeWithAllDeepest = function(root) {
    return search(root,0)[1]
    function search(node){
        if(!node)return [0,null];
       let [left,right]= [search(node.left),search(node.right)]
        if(left>right) return [left[0]+1,left[1]];
        else if(left[0]<right[0])return [right[0] +1,right[1]];
        else return [left[0]+1,node];
    }   
};































function subtreeWithAllDeepest1(node){
if(!node)return [0,null]
return search(node)[1]
function search(node){
    if(!node)return[0,null]
let left = search(node.left), right = search(node.right)

if(left[0]>right[0])return[left[0]+1,left[1]]
else if(left[0] < right[0])return [right[0]+1,right[1]]
else return [left[0]+1,node]
}

}





subtreeWithAllDeepest1({"val":3,"right":{"val":1,
"right":{"val":8,"right":null,"left":null},
"left":{"val":0,"right":null,"left":null}},
"left":{"val":5,"right":{"val":2,
"right":{"val":4,"right":null,"left":null},
"left":{"val":7,"right":null,"left":null}},
"left":{"val":6,"right":null,"left":null}}}) /*?*/




var subtreeWithAllDeepest = function(root) {
    let stack = [{node: root, parent: null}];
    let l, r;
    while (stack.length > 0) { // bfs
        let size = stack.length;
        [l, r] = [stack[0], stack[size-1]];
        for (let i = 0; i < size; i++) {
            let cur = stack.shift();
            if (cur.node.left) stack.push({node: cur.node.left, parent: cur});
            if (cur.node.right) stack.push({node: cur.node.right, parent: cur});
        }
    }
    while (l != r) [l, r] = [l.parent, r.parent]; // lca
    return l.node;
};


