// reverse iterator



let array = [1, 2, 3, 4, 5];
let reversedIterator = {
    next: function () {
        if (!this.index) this.index = this.length;
        this.index--;
        return {
            done: this.index < 0,
            value: this[this.index]
        }
    }
}
const gen = reversedIterator[Symbol.iterator]
const i = reversedIterator.next.bind(arr)
i()
i()
// recursive 
let any = array[Symbol.iterator]()
function* backwards(anyIter) {
    function* back(anyIter) {
        let c = anyIter.next().value
        if (!c) {
            return;
        }
        yield* back(anyIter)
        yield c;
    }
    for (let i of back(anyIter)) {
        yield i
    }
}




console.log(Array.from(backwards(any)))
