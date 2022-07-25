let obj = {
        "val": 1,
        "next": {
            "val": 2,
            "next": {
                "val": 3,
                "next": {
                    "val": 4,
                    "next": {
                        "val": 5,
                        "next": null
                    }
                }
            }
        }
    },
    start = 2,
    end = 4;


function reverseBetween(node, s, e) {
    const before = {
        next: node
    }
    let prev = before;

    while (--s) {
        prev = prev.next
            --e
    }

    let curr = prev.next
    while (--e) {
        let next = curr.next
        curr.next = next.next
        next.next = prev.next
        prev.next = next

    }


}


reverseBetween(obj,start,end)