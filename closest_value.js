var closestValue = function (root, target) {
    let val;
    let min = Infinity;

    function traverse(node) {
        if (!node) return
        let diff = Math.abs(node.val - target)
        if (min > diff) {
            val = node.val
            min = Math.min(min, diff)
        }
        if (target < node.val && diff > 0.5 && node.left) return traverse(node.left)
        if (target > node.val && diff > 0.5 && node.right) return traverse(node.right)
    }
    traverse(root)
    return val
};
// iterative
var closestValue = function (root, target) {
    let val;
    let min = Infinity;
    while (root) {
        let diff = Math.abs(root.val - target)
        if (min > diff) {
            val = root.val
            min = Math.min(min, diff)
        }
        if (target < root.val && diff > 0.5 && root.left) {
            root = root.left
            continue
        } else if (target > root.val && diff > 0.5 && root.right) {
            root = root.right;
            continue
        }
        return val;

    };
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest, closestDiff;
    function traverse(node) {
        let diff = Math.abs(target - node.val);
        if (closestDiff !== undefined) {
            if (diff < closestDiff) {
                closest = node.val;
                closestDiff = diff;
            }
        } else {
            closest = node.val;
            closestDiff = diff;
        }
        if (target < node.val && (diff > 0.5) && node.left) traverse(node.left);
        if (target > node.val && (diff > 0.5) && node.right) traverse(node.right);
    }
    traverse(root);
    return closest;
};





