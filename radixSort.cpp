//https://www.youtube.com/watch?v=XiuSW_mEn7g

// letter to number string to int to string

#include <vector>
#include <algorithm>
#include <iostream>
#include <map>
#include <string>
#include <cstring>
#include <sstream>
#include <cstdint>
#include <chrono>
std::vector<int> radix(std::vector<int> &num)
{
	for (int bit = 0; bit < 31; bit++)
		std::stable_partition(num.begin(), num.end(), [bit](int a) {
			
			return !(a & (1 << bit));
		});
	return num;
}



std::vector<int> radixSort2(std::vector<int>&num){
	int i = 0; 
	while(i<31)
	{
		std::vector<int>oneBucket;
		std::vector<int>zeroBucket;
		int needle = 1 << i;
		for(size_t j = 0; j< num.size();j++){
			if((num[j] & needle) !=0){
				oneBucket.push_back(num[j]);
			}else{
				zeroBucket.push_back(num[j]);
			}
		}
		num.clear();
		num.reserve(oneBucket.size() + zeroBucket.size() );
		num.insert(num.end(), oneBucket.begin(), oneBucket.end());
		num.insert(num.end(), zeroBucket.begin(), zeroBucket.end());
		// oneBucket.clear();
		// zeroBucket.clear();
			i++;
	}
return num;
}
std::map<std::string, std::string> heapfy(std::vector<std::string> &vecS)
{
	std::map<std::string, std::string> heap;
	for (std::size_t i = 0; i < vecS.size(); i++)heap[vecS[i]] = vecS[i];
	return heap;
}

std::vector<char *> convertToPointers(std::vector<std::string> &vecS)
{
	std::vector<char *> points;
	for (std::size_t i = 0; i < vecS.size(); i++)
	{
		char *c = new char[vecS[i].length() + 1];
		std::copy(vecS[i].begin(), vecS[i].end(), c);
		points.push_back(c);
	};
	return points;
};

std::vector<int> toNumbers(std::vector<char *> points)
{
	std::vector<int> k;
	for (std::size_t i = 0; i < points.size(); i++)
	{
		char *m = points[i], *end = m;
		std::string str;
		while (*end)str += std::to_string(static_cast<int>(m[end - m])), end++;
		int value;
		std::istringstream iss(str);
		iss >> value;
		//int num1 = atol(str.c_str());
		k.push_back(value);
		iss.clear();
	};

	// for (int i = 0; i < k.size(); i++){
	// 	std::cout << k[i] << "h"	  << "\n";
	// }
	return k;
}

int main()
{

	std::map<std::string, std::string> mymap;
	std::vector<std::string> vecS{"PIP", "GKK", "CRJ", "LWC", "MUF", "VHK", "XWB", "TPU", "GBY", "UNC"};
	for (std::size_t i = 0; i < vecS.size(); i++)
		mymap[vecS[i]] = vecS[i];

	// to pointers
	std::vector<char *> points = convertToPointers(vecS);
	// to number
	std::vector<int> k = toNumbers(points);
	// to heap
	auto start1 = std::chrono::high_resolution_clock::now(); 


	std::map<std::string, std::string> heap = heapfy(vecS);
	auto stop1 = std::chrono::high_resolution_clock::now(); 
  	auto duration1 = std::chrono::duration_cast<std::chrono::microseconds>(stop1 - start1);
	std::cout << "Time taken by function: " << duration1.count() << " microseconds" << std::endl; 
	// for (std::map<std::string, std::string>::iterator it = heap.begin(); it != heap.end(); ++it)
	// 	std::cout << it->first << " => " << it->second << '\n';

	std::vector<int> dox{77, 445, 5, 6, 7, 8,934444444, 3, 3};
	auto start = std::chrono::high_resolution_clock::now(); 

	std::vector<int> res = radixSort2(k);
	auto stop = std::chrono::high_resolution_clock::now(); 
  	auto duration = std::chrono::duration_cast<std::chrono::microseconds>(stop - start);
	std::cout << "Time taken by function: " << duration.count() << " microseconds" << std::endl; 



	for (int i = 0; i < res.size(); i++){
		std::cout << res[i] << "\n";
	}
	// for(int i=0; i< res.size();i++){
	// std::cout << res[i];
	// }

	return 0;
}