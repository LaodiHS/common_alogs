function Node(value) {
    this.value = value;
    this.next = undefined;
}

function setValues(a) {
    var n = new Node(a.shift());
    if (a.length) {
        n.next = setValues(a);
    }
    return n;
}

function deleteNode(list, value) {
    var node = list,
        lastNode;
    while (node.value !== value) {     // find value
        lastNode = node;
        node = node.next;
    }
    if (lastNode) {                    // inside the list
        lastNode.next = node.next;
    } else {                           // at the start
        list.value = node.next.value;
        list.next = node.next.next;
    }
}

var list1 = setValues([1, 2, 3, 4, 5]);

console.log('<pre>' + JSON.stringify(list1, 0, 4) + '</pre>');
deleteNode(list1, 3);
console.log('<pre>' + JSON.stringify(list1, 0, 4) + '</pre>');


function rev(str){
str = str.split(/\s+/g)
str = str.reverse()
return str.join(' ')
}

rev("the sky is blue") /*?*/
