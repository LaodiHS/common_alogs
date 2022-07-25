#include "kernels.cuh"
#include <stdio.h>


__global__ void init_primes_kernel(int *prime, unsigned int n)
{
	unsigned int index = threadIdx.x + blockIdx.x*blockDim.x;
	unsigned int stride = gridDim.x*blockDim.x;
	unsigned int offset = 0;

	while(index + offset < n){
		prime[index + offset] = index + offset + 1;

		offset += stride;
	}
}


__global__ void sieve_of_eratosthenes_kernel(int *prime, unsigned int n, unsigned int sqrRootN)
{
	unsigned int index = threadIdx.x + blockIdx.x*blockDim.x + 2;
	unsigned int stride = gridDim.x*blockDim.x;
	unsigned int offset = 0;

	while(index + offset < sqrRootN){
		unsigned int temp = index + offset;
		for(unsigned int i=temp*temp;i<n;i+=temp){
			prime[i-1] = 0;
		}

		offset += stride;
	}

}


// __global__ void sieve_of_eratosthenes_kernel2(int *prime, unsigned int n)
// {
// 	unsigned int index = threadIdx.x + blockIdx.x*blockDim.x;
// 	unsigned int stride = gridDim.x*blockDim.x;
// 	unsigned int offset = 0;

// 	__shared__ int cache[10];

// 	while(index+offset < n){
// 		cache[threadIdx.x] = prime[index+offset];

// 		__syncthreads();

// 		unsigned int temp = threadIdx.x + 2;
// 		unsigned int start = temp*temp;
// 		unsigned int finish = blockIdx.x*blockDim.x + blockDim.x;
// 		for(unsigned int i=start;i<finish;i+=temp){
// 			if(cache[threadIdx.x] % i == 0){
// 				cache[threadIdx.x] = 0;
// 			}
// 		}

// 		// unsigned int temp = threadIdx.x + 2;
// 		// unsigned int start = max(temp*temp, index+offset) % blockDim.x;
// 		// unsigned int finish = blockDim.x;//(blockIdx.x*blockDim.x + blockDim.x) / blockDim.x;

// 		// if(threadIdx.x == 1){
// 		// 	printf("%d  %d\n", start, finish);
// 		// }

// 		// for(unsigned int i=start;i<finish;i+=temp){
// 		// 	cache[i-1] = 0;
// 		// }

// 		prime[index+offset] = cache[threadIdx.x];

// 		offset += stride;
// 	}
// }