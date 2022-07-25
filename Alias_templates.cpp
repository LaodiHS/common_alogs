#include<set>
#include<iostream>


template <typename T>
struct greater {

constexpr bool operator()(const T &lhs, const T &rhs) const 
    {
    return lhs > rhs;
        }
};



// alias template 
//reversing order of set

//syntax has general form 
// template<parameter_list>  then alias_declaration

//template<parameter_list> 
template<typename Value, typename Alloc = std::allocator<Value> >
// allocator is in the stardard library


// alias declaration: is a using statment 
using GreaterSet = std::set<Value, greater<Value>, Alloc>;
 //A set takes three arguments set<value, comparitor, allocator> 
// std::greater<Value>the default argument for the second parameter as std::greater which is also a default argument is none is specified. 

int main(){
std::set<int> x{1,4,3,2};


GreaterSet<int> y{1,4,3,2};

for(auto i :x){
    std::cout << i << '\n';
}

std::cout << '\n';

for(auto i : y){
    std::cout << i << '\n'; 
}






}


