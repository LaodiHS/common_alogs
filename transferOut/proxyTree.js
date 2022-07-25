
function Tree() {
    return new Proxy({}, handler);
  }
  
  var handler = {
    get: function (target, key, receiver) {
      if (!(key in target)) {
        target[key] = Tree();  // auto-create a sub-Tree
      }
      return Reflect.get(target, key, receiver);
    }
  };
  
  var tree = Tree()
  tree
  tree.branch1.branch2.twig = 'green'; 
  tree
