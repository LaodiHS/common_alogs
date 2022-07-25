// Given a linked list, determine if it has a cycle in it, or a loop

function cycle(head) {
    if (!head || !head.next) return false;
    let slow = head
    let fast = head.next
    return function minCycle(slow, fast, cb) {
        if (cb(slow, fast)) return cb(slow, fast)
        if (!fast || !fast.next || !slow || !slow.next) return false;
        slow = slow.next
        fast = fast.next.next
        return minCycle(slow, fast, cb)
    }(slow, fast, (a, b) => a === b)
}


var hasCycle = function (head) {
    let slow = head;
    let fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            while (head !== fast) {
                head = head.next;
                fast = fast.next;
            }
            return true;
        }
    }
    return false;
};








//generate cycle
function Node(val){
    this.val=val
    this.next=null
}
let trunk= [new Node(0)]
parent= trunk[0] 

count=5,i=1

let circle;
while(count>0){
parent.next=new Node(i)


if(parent.val===2){
    circle=parent 
}
if(parent.val ===4){
    parent.next=circle 
}


parent= parent.next
count--
i++
}
trunk[0].next.next.next /*?*/ 


cycle(trunk[0]) /*?*/
hasCycle(trunk[0]) /*?*/
