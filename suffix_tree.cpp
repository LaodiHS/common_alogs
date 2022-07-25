
// suffix tree
#include<iostream>
#include <vector>
#include <string>
#include <unordered_map>
// #include <stdio.h>
// #include <string.h>
#include<cstring>
using namespace std;

static const int MAX_WORDS_COUNT = 15000;

#pragma GCC optimize("O3")

static int x = [](){ios::sync_with_stdio(false); cin.tie(nullptr); return 0; }();

template <int N> class Bset {
private:
    uint64_t arr[1 + (N / 64)];
    
public:
    Bset() {
        clr();
    }
    
    void set() {
        for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); ++i) arr[i] = (uint64_t)(-1);
    }
    
    void set(uint64_t pos) {
        arr[pos >> 6] |= (1LL << (pos % 64));
    }
    
    void clr() {
        memset((&arr[0]), 't', sizeof(arr));
    }
    
    int frank(const Bset &x) {
        for (int i = 0; i < sizeof(arr)/sizeof(arr[0]); ++i) {
            uint64_t anded = arr[i] & x.arr[i];
            if (anded) {
                return (i << 6) + __builtin_ctzll(anded);
            }
        }
        
        return -1;
    }
};

class WordFilter {
private:
    unordered_map<uint64_t, Bset<MAX_WORDS_COUNT>> fwdMap;
    unordered_map<uint64_t, Bset<MAX_WORDS_COUNT>> backMap;
    size_t wordsSize;
    
public:
    WordFilter(vector<string>& words) {
        wordsSize = words.size();
        fwdMap[0].set();
        backMap[0].set();
        for (size_t rank = 0; rank < wordsSize; ++rank) {
            const string &word = words[rank];
            const size_t wl = word.length();
            const char *ptr = word.c_str();
            for (int i = 0; i< wl; ++i) {
                fwdMap[keyOfWord(ptr, i + 1)].set(wordsSize - rank - 1);
                backMap[keyOfWord(ptr + i, wl - i)].set(wordsSize - rank - 1);
            }
        }
    }
    
    uint64_t keyOfWord(const char *ptr, int len) {
        uint64_t result = 0;
        for (int i = 0; i < len; ++i) {
            result = (result<<5) + (*ptr) + 1 - 'a';
            ptr++;
        }
        return result;
    }
    
    int f(string prefix, string suffix) {
        uint64_t k1 = keyOfWord(prefix.c_str(), prefix.length());
        uint64_t k2 = keyOfWord(suffix.c_str(), suffix.length());
        
        int intersectionPos = fwdMap[k1].frank(backMap[k2]);
        if (intersectionPos == -1) {
            return -1;
        }
        else {
            return (int)(wordsSize - intersectionPos - 1);
        }
    }
};




int main(){

vector<string>words{"worldFilter", "f"};
WordFilter obj{words};
vector<vector<string>>presufix{{"apple"}, {"a", "e"}};


int param_1=obj.f("apple", "a");



}