var lowestCommonAncestor = function(root, p, q) {
    let map = new Map();
    let stack = [];
    stack.push(root);

    while (stack.length) {

      let top = stack.pop();


      if (top.right) {
        map.set(top.right, top);
        stack.push(top.right);
      }
      if (top.left) {
        map.set(top.left, top);
        stack.push(top.left);
      }
    }
    
    let set = new Set();
    set.add(p);
    set
    while (p !== root) {
    
      p = map.get(p);
      
      set.add(p);
    }
    
    while (!set.has(q)) {
        set

      q = map.get(q);
    }
    return q;
  };







//   def lowestCommonAncestor(self, root, p, q):
//   """
//   :type root: TreeNode
//   :type p: TreeNode
//   :type q: TreeNode
//   :rtype: TreeNode
//   """

//   # Stack for tree traversal
//   stack = [root]

//   # Dictionary for parent pointers
//   parent = {root: None}

//   # Iterate until we find both the nodes p and q
//   while p not in parent or q not in parent:

//       node = stack.pop()

//       # While traversing the tree, keep saving the parent pointers.
//       if node.left:
//           parent[node.left] = node
//           stack.append(node.left)
//       if node.right:
//           parent[node.right] = node
//           stack.append(node.right)

//   # Ancestors set() for node p.
//   ancestors = set()

//   # Process all ancestors for node p using parent pointers.
//   while p:
//       ancestors.add(p)
//       p = parent[p]

//   # The first ancestor of q which appears in
//   # p's ancestor set() is their lowest common ancestor.
//   while q not in ancestors:
//       q = parent[q]
//   return q











function backtrack(root, p, q) {
    let stack = [root]
    let parent = new Map()
    parent.set(root, null)
    while (!parent.has(p) || !parent.has(q)) {
        node = stack.pop()
        if (node.left) {
            parent.set(node.left, node)
            stack.push(node.left)
        }
        if (node.right) {
            parent.set(node.right, node)
            stack.push(node.right)
        }
    }
    let ancestors = new Set()
    while (p) {
        ancestors.add(p)
        p = parent.get(p)
    }
    while (!ancestors.has(q)) {
        q = parent.get(q)
    }
    return q

}









p1 = {"val":7,"right":null,"left":null}
q1 = {"val":4,"right":null,"left":null}
let root = {"val":3,"right": { "val":1,
"right":{"val":8,"right":null,"left":null},
"left":{"val":0,"right":null,"left":null}},"left":{"val":5,
"right":{"val":2,"right":q1,"left":p1},
"left":{"val":6,"right":null,"left":null}}}
backtrack(root, p1, q1) /*?*/
lowestCommonAncestor(root, p1, q1) /*?*/