var copyRandomList = function(head) {
    if (!head) return null;
    const dummy = new RandomListNode();
    const map = new Map();
    
    let src = head;
    let dest = dummy;
    while (src && !map.has(src)) {
        dest.next = new RandomListNode(src.label);
        map.set(src, dest.next);
        src = src.next;
        dest = dest.next;
    }
    
    for (let [src, dest] of map) {
        dest.random = map.get(src.random) || null;
    }
    
    return dummy.next;
};




var copyRandomList = function(nd){
    return copyLinkedListHelper(nd, new Map());
};

var copyLinkedListHelper = function(nd, copiedNodes) {
    var newNd = null;
    if(nd!=null){
        newNd = copiedNodes.get(nd);
        if(!newNd){
            newNd = new RandomListNode(nd.label);
            copiedNodes.set(nd, newNd);
            if(nd.next==nd.random){
                newNd.next = newNd.random = copyLinkedListHelper(nd.next, copiedNodes);
            }else{
                newNd.next = copyLinkedListHelper(nd.next, copiedNodes);
                newNd.random = copyLinkedListHelper(nd.random, copiedNodes);
            }
        }
    }
    return newNd;
};