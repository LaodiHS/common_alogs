class Queue {
    constructor() {
        this.collection = [];
    }
    enqueue(element) {
        this.collection.push(element);
    }
    dequeue() {
        return this.collection.shift();
    }
    print() {
        return this.collection;
    }
    front() {
        return this.collection[0];
    }
    size() {
        return this.collection.length;
    }
    isEmpty() {
        return (this.collection.length === 0);
    }
}
class PriorityQueue extends Queue{
    constructor() {
        super()        
    }
    priorityEnqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++){
                if (element[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }
    priorityDequeue() {
        let value = this.collection.shift();
        return value[0]
    }
}

let pq = new PriorityQueue();
pq.priorityEnqueue(['Beau Carnes', 2]); 
pq.priorityEnqueue(['Quincy Larson', 5]);
pq.priorityEnqueue(['Ewa Mitulska-Wójcik', 1]); 
pq.priorityEnqueue(['Briana Swift', 2]);
pq.enqueue('a')
console.log(pq.print());


