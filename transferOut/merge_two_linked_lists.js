let a= {"val":1,"next":{"val":2,"next":{"val":4,"next":null}}}, b=  {"val":1,"next":{"val":3,"next":{"val":4,"next":null}}}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    if(!l1)return l2;
    if(!l2) return l1;
    if(l1.val < l2.val) {
       
        l1.next = mergeTwoLists(l1.next, l2);
    
       return l1;
       }
    else {

        l2.next = mergeTwoLists(l2.next, l1);
        
        return l2;
    }
};


