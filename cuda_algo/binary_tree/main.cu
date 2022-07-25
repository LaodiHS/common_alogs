#include <iostream>
#include <time.h>
#include <random>
#include "kernels.cuh"

using namespace std;



int main()
{
	unsigned int n = 16;

	int *h_x;
	int *d_x;
	int *h_root;
	int *d_root;
	int *h_child;
	int *d_child;

	// allocate memory
	h_x = new int[n];
	//(int*)malloc(n*sizeof(int))
	h_root = new int();
	//(int*)malloc(sizeof(int));
	h_child = new int[2*(n+1)];
	// malloc(2*(n+1)*sizeof(int));
	cudaMalloc((void**)&d_root, sizeof(int));
	cudaMalloc((void**)&d_x, n*sizeof(int));
	cudaMalloc((void**)&d_child, 2*(n+1)*sizeof(int));
	cudaMemset(d_child, -1, 2*(n+1)*sizeof(int));


	// fill h_temp and h_x arrays
	for(unsigned int i=0;i<n;i++){
		h_x[i] = i+1;
	}

	for(unsigned int i=0;i<n;i++){
		unsigned int j = random() % (n-i);
		int temp = h_x[i];
		h_x[i] = h_x[i+j];
		h_x[i+j] = temp;
	}
	*h_root = h_x[0];

	// for(unsigned int i=0;i<n;i++){
	// 	std::cout<<h_x[i]<<" ";
	// }
	// std::cout<<"" <<std::endl;


	// copy data to device
	cudaMemcpy(d_root, h_root, sizeof(int), cudaMemcpyHostToDevice);
	cudaMemcpy(d_x, h_x, n*sizeof(int), cudaMemcpyHostToDevice);


	// kernel call
	dim3 gridSize = 4;
	dim3 blockSize = 4;
	build_binary_tree <<< gridSize, blockSize>>> (d_x, d_child, d_root, n);


	// copy from device back to host
	cudaMemcpy(h_child, d_child, 2*(n+1)*sizeof(int), cudaMemcpyDeviceToHost);

cout <<  h_child[0] << endl;
	// print tree
	// for( auto i: &h_child){

	// 	std::cout<< i << "\t";
	// };
	std::cout<<"  "<<std::endl;

	// free memory
	delete h_x;
	delete h_root;
	delete h_child;
	cudaFree(d_x);
	cudaFree(d_root);
	cudaFree(d_child);
}