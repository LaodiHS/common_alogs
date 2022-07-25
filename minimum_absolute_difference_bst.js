// let root= {"val":1,"right":{"val":48,"right":{"val":49,"right":null,"left":null},"left":{"val":12,"right":null,"left":null}},"left":{"val":0,"right":null,"left":null}}
let root= {"val":1,"right":{"val":48,"right":{"val":49,"right":null,"left":null},"left":{"val":12,"right":null,"left":null}},"left":{"val":0,"right":null,"left":null}}

var minDiffInBST = function(root) {
    return mini(root)
    };
    let pre = -Infinity;
    let res = Infinity;
    function mini(root) {
        if (!root) return res;
        mini(root.left, pre, res)
        res = Math.min(res, root.val - pre)
        pre = root.val
        return mini(root.right)
    }
    mini(root) 
