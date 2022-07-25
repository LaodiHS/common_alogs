#include <iostream>
#include <set>

template <typename Value, typename Alloc = std::allocator<Value>>
using GreaterSet = std::set<Value, std::greater<Value>, Alloc>;

// constexpr  int product(int x, int y)
// {
// constexpr size_t sz = 5; /* or any other integral constant expression */
// int arr[5]{y};

// return 5;

// }

int main()
{
    std::set<int, int, int> set;

    //int x[5]{0};
    // int a = 10;
    // int b= 20;
    // int x = product(10, 20);
    // std::cout << x;
    // return 0;

  
}
