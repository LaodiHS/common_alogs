
function traverse(n, f) {
    if (!n) return;
    let l = n.left,
        r = n.right;
    traverse(l, f);
    f(n);
    traverse(r, f);
};

function treeToList(n) {
    let prev = null,
        head = null;
    traverse(n, cur => {
        cur.left = prev;
        if (prev) prev.right = cur;
        else head = cur;
        prev = cur;
    });
    return head;
};


function toBST(nums) {

    if (!nums.length) return null;

    return ToBST(0, nums.length - 1, {})

    function ToBST(lo, hi, node) {

        if (lo > hi) return null;

        const mid = (lo + ((hi - lo) >> 1));

        node.val = nums[mid];

        node.left = ToBST(lo, mid - 1, {}); // because of offset

        node.right = ToBST(mid + 1, hi, {}); // because of offset

        return node;
    }
}

let val = 50;
const arr = [];
while (val--) arr.push(50 - val);
const binary = toBST(arr);
let head = treeToList(binary);
const array = [];

while (head) array.push(head.val), head = head.right;