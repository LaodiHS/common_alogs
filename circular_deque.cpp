// Design your implementation of the circular double-ended queue (deque).

// Your implementation should support following operations:

// MyCircularDeque(k): Constructor, set the size of the deque to be k.
// insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
// insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
// deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
// deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
// getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
// getRear(): Gets the last item from Deque. If the deque is empty, return -1.
// isEmpty(): Checks whether Deque is empty or not. 
// isFull(): Checks whether Deque is full or not.
 

// Example:

// MyCircularDeque circularDeque = new MycircularDeque(3); // set the size to be 3
// circularDeque.insertLast(1);			// return true
// circularDeque.insertLast(2);			// return true
// circularDeque.insertFront(3);			// return true
// circularDeque.insertFront(4);			// return false, the queue is full
// circularDeque.getRear();  			// return 2
// circularDeque.isFull();				// return true
// circularDeque.deleteLast();			// return true
// circularDeque.insertFront(4);			// return true
// circularDeque.getFront();			// return 4
 


class MyCircularDeque {
public:
    /** Initialize your data structure here. Set the size of the deque to be k. */
    MyCircularDeque(int k) {
        size = k;   
    }
    
    /** Adds an item at the front of Deque. Return true if the operation is successful. */
    bool insertFront(int value) {
        if (isFull()) return false;
        data.insert(data.begin(), value);
        return true;
    }
    
    /** Adds an item at the rear of Deque. Return true if the operation is successful. */
    bool insertLast(int value) {
        if (isFull()) return false;
        data.push_back(value);
        return true;
    }
    
    /** Deletes an item from the front of Deque. Return true if the operation is successful. */
    bool deleteFront() {
        if (isEmpty()) return false;
        data.erase(data.begin());
        return true;
    }
    
    /** Deletes an item from the rear of Deque. Return true if the operation is successful. */
    bool deleteLast() {
        if (isEmpty()) return false;
        data.pop_back();
        return true;
    }
    
    /** Get the front item from the deque. */
    int getFront() {
        if (isEmpty()) return -1;
        return data.front();
    }
    
    /** Get the last item from the deque. */
    int getRear() {
        if (isEmpty()) return -1;
        return data.back();
    }
    
    /** Checks whether the circular deque is empty or not. */
    bool isEmpty() {
        return data.empty();
    }
    
    /** Checks whether the circular deque is full or not. */
    bool isFull() {
        return data.size() >= size;
    }

private:
    vector<int> data;
    int size;
};