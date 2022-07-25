

template <class T>
struct DListNode {
    T val;
    DListNode *prev, *next;
    DListNode(const T& val) : val(val), prev(nullptr), next(nullptr) {}
};

template <class T>
struct DList {
    DList() : front(nullptr), back(nullptr) {}
    
    DListNode<T>* pop(DListNode<T>* node) {
        if (node == front) {
            front = node->next;
        } else {
            node->prev->next = node->next;
        }
        if (node == back) {
            back = node->prev;
        } else {
            node->next->prev = node->prev;
        }
        return node;
    }
    
    void moveToFront(DListNode<T>* node) {
        pop(node);
        pushFront(node);
    }
    
    DListNode<T>* popBack() {
        return pop(back);
    }
    
    void pushFront(DListNode<T>* node) {
        if (front == nullptr) {   // empty
            front = back = node;
        } else {
            node->next = front;
            front->prev = node;
            front = node;
        }
    }

    DListNode<T> *front, *back;
};

class LRUCache {
public:
    LRUCache(int capacity) : _capacity(capacity) {
    }
    
    int get(int key) {
        if (auto search = _dict.find(key); search != _dict.end()) {
            auto node = search->second;
            _dList.moveToFront(node);
            return node->val.value;
        }
        return -1;
    }
    
    void put(int key, int value) {
        if (_capacity <= 0) return;
        if (auto search = _dict.find(key); search != _dict.end()) {
            auto node = search->second;
            node->val.value = value;
            _dList.moveToFront(node);
        } else {
            if (_dict.size() == _capacity) {
                auto oldNode = _dList.popBack();
                _dict.erase(oldNode->val.key);
                delete oldNode;
            }
            auto newNode = new DListNode<KVPair>({key, value});
            _dList.pushFront(newNode);
            _dict[key] = newNode;
        }
    }

private:
    struct KVPair {
        int key, value;
    };
    unordered_map<int, DListNode<KVPair>*> _dict;
    DList<KVPair> _dList;
    int _capacity;
};







class LRUCache {
public:
    LRUCache(int capacity) : capacity(capacity) {
    }
    
    int get(int key) {
        auto search = dict.find(key);
        if (search != dict.end()) {
            auto listIt = search->second;
            // Mark it as the most recently used
            dList.splice(dList.begin(), dList, listIt);
            return listIt->value;
        }
        return -1;
    }

    void put(int key, int value) {
        if (capacity <= 0) return;
        auto search = dict.find(key);
        if (search != dict.end()) {
            auto listIt = search->second;
            listIt->value = value;
            // Mark it as the most recently used
            dList.splice(dList.begin(), dList, listIt);
        } else {
            if (dict.size() >= capacity) {
                dict.erase(dList.back().key);
                dList.pop_back();
            }
            dList.push_front({key, value});
            dict[key] = dList.begin();
        }
    }
private:
    int capacity;
    struct Pair {
        int key, value;
    };
    list<Pair> dList;
    unordered_map<int, list<Pair>::iterator> dict;
};