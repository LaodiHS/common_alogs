

// #ifndef rotateArray
// #define rotateArray


//You can use static variable inside the function to return its pointer to the caling 
//function. Static variable inside function have a local scope but dont 
//get erased from memory(they are not stored in the stack unlike local variables) 
//once the function returns.
#include <utility>
#include <cassert>
#include <vector>
#include<iostream>
#include<array>


using namespace std;















template <class T>
class matrix2
{
public:
    vector<T> data;
    int cols;
    int rows;

    matrix2(int y, int x) : cols(x), rows(y), data(x * y) {}
    T &operator()(int y, int x)
    {
        assert(x <= cols);
        assert(y <= rows);
        return data[y * cols + x];
    }

    T operator()(int y, int x) const
    {
        assert(x <= cols);
        assert(y <= rows);
        return data[y * cols + x];
    }
};



class rotateArray
{
public:    
template <class T, int N>
void rotateInplace(T  (&arr)[N], int M) {
 
	assert(M < N);
    using std::swap;
	for (int i= 0; i < M >> 1; i++) swap( arr[M - i - 1], arr[i]);
    auto dist = N - M;
	for (int i= 0; i< dist >> 1; i++) swap(arr[M + i], arr[N - i - 1] );
    for (int i= 0; i< N >> 1; i++) swap(arr[i], arr[N - i - 1]);
}
template <class T, int N>
void rotateMod( T (&arr)[N], int M)
{
    int result[N];
      
    for (int i = 0; i < N; i++)result[(i + M) % N] = arr[i];
    for (int i = 0; i < N; i++)arr[i] = result[i];
    }
template <class T, int N>
int * rotateReturn( const T (&arr)[N], int M)
{
   static int result[N];
    int j = 0; 
    for (int i= M; i < N; i++, j++)result[j] = arr[i]; 
    for (int i = 0; i < M; i++, j++)result[j] = arr[i];
    return result; 
}
int fast_mod(const int input, const int ceil) {
    // apply the modulo operator only when needed
    // (i.e. when the input is greater than the ceiling)
    return input >= ceil ? input % ceil : input;
    // NB: the assumption here is that the numbers are positive
}
};
// #endif
int main(){

vector<int>vec(10,0);
int p[7] = {1,2,3,4,5,6,7};
int p2[7] = {1,2,3,4,5,6,7};
int p3[7] = {1,2,3,4,5,6,7};
rotateArray rotate;
rotate.rotateInplace(p,3);
rotate.rotateMod(p2,3);
 int *b = rotate.rotateReturn(p3,3); 

for(int i = 0; i < 7; i++){
    cout << p[i] << "\t";
}

cout  << "\n";

for(int i = 0; i < 7; i++){
    cout << p2[i] << "\t";
}

cout << "\n";

for(int i = 0; i < 7; i++){
    cout << b[i] <<"\t";
}
cout << "\n"; 







    return 0; 
}