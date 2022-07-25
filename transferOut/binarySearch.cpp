#include <iostream>
#include <numeric>
// Binarysearch Binary Search branchless

// template <class T, int Size>
// int binarySearch2(T (&array)[Size], T needle) {
// int *base = array;
// int n = Size;
// while (n > 1) {
//   int middle = n >> 1;
//   int eval = (needle < base[middle]);
//   base += eval ? 0 : middle;
//   n -= middle;
// }
// return needle == *base;
// }

template <class T, int Size>
int binarySearch(T (&array)[Size], T needle) {
  int *base = array;
  int n = Size;

  while (n > 1) {
    int middle = n >> 1;
    int eval = !(needle < base[middle]);
    base += eval * middle;
    n -= middle;
  }
  return needle == *base;
}
int main() {
  int arr[50] = {0};
  std::iota(arr, arr + 50, 0);
  std::cout << "  what is it:   " << binarySearch(arr, 0);
}