//https://developer.ibm.com/articles/pa-dalign/
// data alignment. 
//https://software.intel.com/en-us/articles/data-alignment-when-migrating-to-64-bit-intel-architecture
//https://software.intel.com/en-us/articles/coding-for-performance-data-alignment-and-structures
//https://www.geeksforgeeks.org/structure-member-alignment-padding-and-data-packing/
//http://www.catb.org/esr/structure-packing/#_padding
//http://www.catb.org/esr/faqs/things-every-hacker-once-knew/
//   alignas(16) std::array<bool, 10> a;
#include <stdint.h>
#include <sys/stat.h>
#include <sys/time.h>
#include <sys/types.h>
#include <iostream>
#include <cassert>
#include <vector>

using namespace std;

class WallClockTimer {
public:
    struct timeval t1, t2;
    WallClockTimer() :
        t1(), t2() {
        gettimeofday(&t1, 0);
        t2 = t1;
    }
    void reset() {
        gettimeofday(&t1, 0);
        t2 = t1;
    }
    int elapsed() {
        return (t2.tv_sec * 1000 + t2.tv_usec / 1000) - (t1.tv_sec * 1000 + t1.tv_usec / 1000);
    }
    int split() {
        gettimeofday(&t2, 0);
        return elapsed();
    }
};





template <class T>
void runtest() {
    size_t N = 10 * 1000 * 1000 ;
    int repeat = 20;
    WallClockTimer timer;
    const bool paranoid = false;
    cout<<" processing word of size "<<sizeof(T)<<endl;
    for(unsigned int offset = 0; offset<sizeof(T);++offset) {
        vector<T> bigarray(N+2);
        cout<<"offset = "<<offset<<endl;
        T * const begin =   reinterpret_cast<T *> (reinterpret_cast<uintptr_t>(&bigarray[0]) + offset);
        assert(offset + reinterpret_cast<uintptr_t>(&bigarray[0])  == reinterpret_cast<uintptr_t>(begin)  );
        T * const end = begin + N;
        if(paranoid) assert(reinterpret_cast<uintptr_t>(end)<reinterpret_cast<uintptr_t>(&bigarray.back()));
        int sumt = 0;
        cout<<" ignore this: ";
        for(int k = 0 ; k < repeat; ++k) {
          timer.reset();
          for(size_t i = 0; i <N;++i) {
               begin[i] = static_cast<T>( i );
          }
          T val = 1;
          for(size_t i = 0; i <N;++i) {
               val += begin[i] * val  + 33;
          }
          int time = timer.split();
          sumt += time;
          cout<<val;
        }
        cout<<endl;
        cout<<" average time for offset "<<(offset%sizeof(T))<<" is "<<sumt * 1.0 /repeat<<endl;
    }

}



int main() {
    runtest<int>();
    cout<<endl;
    runtest<long>();
    cout<<endl;
    runtest<long long>();
    cout<<endl;

    return 0;
}


#include <cassert>
#include <iostream>
#include <stdint.h>
#include <sys/stat.h>
#include <sys/time.h>
#include <sys/types.h>
#include <vector>
 
constexpr int CacheLineSize = 64;
 
using namespace std;
 
class WallClockTimer {
public:
  struct timeval t1, t2;
  WallClockTimer() : t1(), t2() {
    gettimeofday(&t1, 0);
    t2 = t1;
  }
  void reset() {
    gettimeofday(&t1, 0);
    t2 = t1;
  }
  int elapsed() {
    return (t2.tv_sec * 1000 + t2.tv_usec / 1000) -
           (t1.tv_sec * 1000 + t1.tv_usec / 1000);
  }
  int split() {
    gettimeofday(&t2, 0);
    return elapsed();
  }
};
 
template <class T> void locked_add(T *out, T in) {
  asm volatile("lock add %0, %1" : "+r"(in), "+m"(*out) : : "memory", "cc");
}
 
template <class T> void runtest() {
  size_t N = 100 * 1000;
  int repeat = 20;
  WallClockTimer timer;
  const bool paranoid = false;
  cout << " processing word of size " << sizeof(T) << endl;
  for (unsigned int offset = 0; offset < CacheLineSize + sizeof(T); ++offset) {
    char cache[CacheLineSize + sizeof(T)];
    unsigned long long absolute_offset = reinterpret_cast<unsigned long long>(&cache[offset]);
    cout << " absolute offset = " << (absolute_offset % CacheLineSize) << endl;
    if (absolute_offset % CacheLineSize > (absolute_offset + sizeof(T) - 1) % CacheLineSize) {
      cout << " spans cache line" << endl;
    }
    int sumt = 0;
    for (int k = 0; k < repeat; ++k) {
      timer.reset();
      T *val = reinterpret_cast<T *>(&cache[offset]);
      *val = 1;
      for (size_t i = 0; i < N; ++i) {
        locked_add(val, static_cast<T>(i) * (*val) + 33);
      }
      int time = timer.split();
      sumt += time;
    }
    cout << " average time for offset " << (absolute_offset % CacheLineSize) << " is "
         << sumt * 1.0 / repeat << endl;
    cout << endl;
  }
}
 
int main() {
  runtest<int>();
  cout << sizeof(int) << endl;
  runtest<long>();
  cout << sizeof(long) << endl;
  runtest<long long>();
  cout << sizeof(long long) << endl;
 
  return 0;
}