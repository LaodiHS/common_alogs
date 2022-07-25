function reverseBetween(head, m, n) {
    const before = { next: head };
    let prev = before;
  
    while (--m) {
      prev = prev.next;
      --n;
    }
  
    let curr = prev.next;
    while (--n) {
      let next = curr.next;
      curr.next = next.next;
      next.next = prev.next;
      prev.next = next;
    }
  
    return before.next;
  }