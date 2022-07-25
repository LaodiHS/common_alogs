var addTwoNumbers = function(l1, l2) {
    if(!l1 &&!l2)return []
    if(!l1)return l2
    if(!l2)return l1
    let num1 = []
    let num2 = []
    while (l1) num1.unshift(l1.val), l1 = l1.next;
    while (l2) num2.unshift(l2.val), l2 = l2.next;

    num1 = parseInt(num1.join(''))
    num2 = parseInt(num2.join(''))
    let number = (num1 + num2).toString()
    number = number.split('')
    let root = {}
    let list = root
    number.forEach((val, i) => {
        if (number.length - 1 === i) list.val = val, list.next = null
        else list.val = val, list.next = {}, list = list.next
    })


root

    return root



};

let n1 = 1234567894561230 
let n2 = 4567891234568786
let a = n1 + n2
a


let num2 = "4567891234568786"
let num1 = "1234567894561230"
let l = num1.length > num2.length ? num1.length : num2.length;
