#include <math.h>
#include<memory> 
#include <algorithm>
#include <iostream>
#include <numeric>
#include <bits/stdc++.h>
#include <sys/types.h>
template <class T, int Size>
int binarySearch(T (&array)[Size], T needle)
{
  int *base = array;
  int n = Size;

  while (n > 1)
  {
    int middle = n >> 1;
    int eval = !(needle < base[middle]);
    base += eval * middle;
    n -= middle;
  }
  return needle == *base;
}

template <int N>
void branchCenter(int (&arr)[N], int length)
{
  // int mid = length % 2 ? (length / 2) - 1 : length / 2;
  // arr = &arr[mid];
  int *base = arr;
  int *base2 = arr;
  int n = N;

  int *needle = &arr[N - 1];
  while (needle > &arr[0])
  {
    while (n > 0)
    {
      int middle = n >> 1;
      int *mid = &arr[middle];
      int eval = !(*needle < *mid);

      base += eval * middle;
      base2 += !eval * middle;
      int *ptr[3]{base, mid, base2};

      int **i, **k;
      i = ptr;
      k = &ptr[1];
      while (k <= &ptr[2])
      {

        while (**i > **k)
        {
          std::swap(**i, **k);
          i++;
        };
        k++;
      };

      n -= middle;
    };
    needle--;
  };
};

int right_side(int K) { return (2 * K) + 1; }

int left_side(int K) { return (2 * K) + 2; }

int main()
{
  int size_i[51]{1, 3, 4, 5, 7, 8, 6, 10, 9, 2};
  std::unique_ptr<int[]> arr1;
  int N=51;
  arr1 = std::make_unique<int[]>(size_i[N]);
int *arr_1 = arr1.get();
int i =55;

while(i){
  
*arr_1=i;
std::cout<< *arr_1++  << std::endl;

i--;
}


while(i<55){

std::cout << *arr_1-- << std::endl;
i++;

}
 // int arr1[] = {1, 3, 4, 5, 7, 8, 6, 10, 9, 2};
  int arr[] = {4, 5, 1, 7, 3, 8, 6, 10, 9, 2};

  int length = 10;
  int *bottom = arr;
  int *top = arr + length - 1;
  int *middle = arr;
  int branch[3] = {};
  int *b = &arr[0];
  branchCenter(arr, length);

  *arr = 5;
};
// sorted[(2 * middle_right) + 1] = arr[(2 * middle_right) + 1];
// sorted[(2 * right_leaf) + 1] = arr[(2 * right_leaf) + 1];
// if (left(i) >= 6) continue;
// int middle_right = middle + 1;
// sorted[(2 * i) + 0] = arr[(2 * i)];
// sorted[(2 * i) + 1] = arr[(2 * i) + 1];