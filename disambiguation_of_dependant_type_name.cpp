#include <iostream>
#include <type_traits>
#include <typeinfo>
 
struct D {

using U = double;

};

struct A {
  using U = int;
};
struct B {
  using U = float;
};

template <class T>
struct C {
 //chokes compiliation
  static_assert(std::is_same_v<T, A> || std::is_same_v<T, B>);
  using V = typename T::U;
};

int main(){
 //chokes compiliation
C<D>k;


    typedef std::conditional<true, int, float>::type Type1;
    typedef std::conditional<false, int, float>::type Type2;
    typedef std::conditional<sizeof(int) >= sizeof(float), int, float>::type Type3;
 
    std::cout << typeid(Type1).name() << '\n';
    std::cout << typeid(Type2).name() << '\n';
    std::cout << typeid(Type3).name() << '\n';
    //chokes compiliation 
    std::cout << typeid(k).name() << '\n';

}