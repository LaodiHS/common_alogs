

function cloneGraph(graph) {
    console.log(JSON.stringify(graph))
    var map = {};
    return traverse(graph);
  
    function traverse(node) {
      if (!node) return node;
      if (!map[node.label]) {
        map[node.label] = new UndirectedGraphNode(node.label);
        map[node.label].neighbors = node.neighbors.map(traverse);
      }
      return map[node.label];
    }
  }

cloneGraph( )


let bar=[]
bar[3]=undefined
bar
!bar[3] /*?*/ 