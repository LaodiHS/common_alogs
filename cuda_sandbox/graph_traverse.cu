#include <stdio.h>
#include<iostream>
//https://devblogs.nvidia.com/using-shared-memory-cuda-cc/
__global__ void staticReverse(int *a,int *d, int n)
{
//   __shared__ int s[64];
  int t = threadIdx.x;
  int tr = n-t-1;
//    s[t] = a[t];
  d[t] = a[tr];
  __syncthreads();
 
}

__global__ void dynamicReverse(int *d, int n)
{
  extern __shared__ int s[];
  int t = threadIdx.x;
  int tr = n-t-1;
  s[t] = d[t];
  __syncthreads();
  d[t] = s[tr];
}

int main(void)
{
  const int n = 64;
  int *a, *r, *d;
  
 

  
  
  
  // run version with static shared memory
  cudaMallocManaged(&a, n * sizeof(int));
  cudaMallocManaged(&d, n * sizeof(int));
  cudaMallocManaged(&r, n * sizeof(int));
//   cudaMallocManaged(&d_d, n * sizeof(int));


 for (int i = 0; i < n; i++) {
    a[i] = i;
    r[i] = n-i-1;
    d[i] = 0;
  }


  staticReverse<<<1,n>>>(a,d, n);
  cudaDeviceSynchronize();



  for (int i = 0; i < n; i++) {
std::cout << a[i] << " " << d[i] << std::endl;
  //  if (d[i] != r[i]) printf("Error: d[%d]!=r[%d] (%d, %d)\n", i, i, d[i], r[i]);
 


}
  // run dynamic shared memory version
std::cout << "new" << std::endl;
  dynamicReverse<<<1,n,n*sizeof(int)>>>(d, n);
  cudaDeviceSynchronize();
  
  
  
  for (int i = 0; i < n; i++){ 
std::cout << d[i] << " " << r[i]<< std::endl;

    if (d[i] != r[i]) printf("Error: d[%d]!=r[%d] (%d, %d)\n", i, i, d[i], r[i]);


  }
}