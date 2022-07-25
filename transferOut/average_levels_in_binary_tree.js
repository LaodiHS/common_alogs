let root= {"val":3,"right":{"val":20,"right":null,"left":null},"left":{"val":9,"right":{"val":7,"right":null,"left":null},"left":{"val":15,"right":null,"left":null}}}
var averageOfLevels = function (root) {
    let avg = []
    function level(node, lev,avg) {
        if (!node) return true;
            if(!avg[lev])avg[lev]=[],avg[lev].push(node.val);
            else avg[lev].push(node.val);
        return level(node.left, lev + 1,avg) && level(node.right, lev + 1,avg)
    }
    level(root, 0,avg)
    return avg.map(set=> set.reduce((ac,v,i,aa) => {
        ac+=v;
    if(i===aa.length-1){
    return    ac/aa.length 
    }
    return ac
    },0 ));
}
averageOfLevels(root)/*?*/