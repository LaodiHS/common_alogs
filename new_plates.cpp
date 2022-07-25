#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <sstream>
#include <map>
#include <chrono>
#include <bits/stdc++.h>
#include <algorithm>
#include <limits>
#include <stdlib.h>
#include <parallel/algorithm>
#include <thrust/host_vector.h>
#include <thrust/device_vector.h>
#include <thrust/generate.h>
#include <thrust/sort.h>
#include <thrust/copy.h>
#include <algorithm>
#include <cstdlib>
// #include <parallel/basic_iterator.h>

// #include<boost>
// #include <boost/sort/spreadsort/string_sort.hpp>
// #include <boost/sort/spreadsort/integer_sort.hpp>
#include <boost/sort/sort.hpp>
// #include <boost/sort/spinsort/integer_sort.hpp>
// #include <boost/sort/spinsort/spinsort.hpp>
using namespace std;
// using namespace __gnu_parallel;

void radix(std::vector<int> &num)
{

	for (int bit = 0; bit < 31; bit++)
		std::stable_partition(num.begin(), num.end(), [bit](int a) {
			return !(a & (1 << bit));
		});
	//	return num;
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

// mixed-base conversion
static inline int str_to_int(char *str)
{
	int res = 0;
	int i;
	for (i = 5; i >= 0; --i)
	{
		res = res * (i == 3 || i == 4 ? 10 : 26) + (i == 3 || i == 4 ? ((int)(str[i] - '0')) : ((int)(str[i] - 'A')));
	}

	return res;
}

template <class iter_t>
void parallel_stable_sort(iter_t first, iter_t last);

template <class iter_t, typename compare>
void parallel_stable_sort(iter_t first, iter_t last, compare comp);

template <class iter_t>
void parallel_stable_sort(iter_t first, iter_t last, uint32_t num_thread);

template <class iter_t, typename compare>
void parallel_stable_sort(iter_t first, iter_t last, compare comp, uint32_t num_thread);



bool getFileContent(std::string fileName, std::vector<std::string> &vecOfStrs)
{

	// Open the File
	std::ifstream in(fileName.c_str());

	// Check if object is valid
	if (!in)
	{
		std::cerr << "Cannot open the File : " << fileName << std::endl;
		return false;
	}

	std::string str;
	// Read the next line from File untill it reaches the end.
	while (std::getline(in, str))
	{
		// Line contains string of length > 0 then save it in vector
		if (str.size() > 0)
		{

			istringstream iss(str);
			string word;
			while (iss >> word)
			{
				vecOfStrs.push_back(word);
			}
		}
	}
	//Close The File
	in.close();
	return true;
}

std::map<std::string, std::string> heapfy(std::vector<std::string> &vecS)
{
	std::map<std::string, std::string> heap;
	for (std::size_t i = 0; i < vecS.size(); i++)
		heap[vecS[i]] = vecS[i];

	return heap;
}

std::map<int, std::string> mymap;
int main()
{
	// Get the contents of file in a vector
	// and put inside vector
	std::vector<std::string> vecOfStr;
	bool result = getFileContent("new_plates.txt", vecOfStr);
	// use map to get order
	std::map<int, std::string> mappings;

	vector<int> vecInts;

	if (result)
	{
int minSize = numeric_limits<int>::max();
int maxSize =  numeric_limits<int>::min();
		for (size_t i = 0; i < vecOfStr.size(); i++)
		{




			string s = vecOfStr[i];

			int n = s.length();

			// declaring character array
			char char_array[n + 1];

			// copying the contents of the
			// string to char array
			strcpy(char_array, s.c_str());

   int val = str_to_int(char_array);

   
			vecInts.push_back(val);
		}








		std::vector<char *> points = convertToPointers(vecOfStr);
		// to number



 thrust::host_vector<int> h_vec(32 << 20);
  std::generate(h_vec.begin(), h_vec.end(), rand);


  thrust::device_vector<int> d_vec = h_vec;



		auto start1 = std::chrono::high_resolution_clock::now();

 // sort data on the device (846M keys per second on GeForce GTX 480)
  thrust::sort(d_vec.begin(), d_vec.end());

  // transfer data back to host
  thrust::copy(d_vec.begin(), d_vec.end(), h_vec.begin());

// __gnu_parallel::sort(vecInts.begin(), vecInts.end());
// parallel_stable_sort(vecInts.begin(), vecInts.end());
// sort(std::parallel::par, vecInts.begin(), vecInts.end());
		//map<std::string,string> heap=  heapfy(vecOfStr);
// thrust::sort(vecInts.begin(), vecInts.end()); 
		// radix(k);
		//cout << vecOfStr.size();
		//radix(vecInts);
		// sort(vecInts.begin(), vecInts.end());
		//boost::sort::spreadsort::spreadsort(vecInts.begin(), vecInts.end());
		//boost::sort::spreadsort::integer_sort(vecInts.begin(), vecInts.end());
		//countSort(vecInts);
		// boost::sort::spreadsort::s (vecInts.begin(), vecInts.end());
		// boost::sort::spreadsort::string_sort(vecOfStr.begin(), vecOfStr.end());
		//sort(vecOfStr.begin(), vecOfStr.end());

		auto stop1 = std::chrono::high_resolution_clock::now();
		auto duration1 = std::chrono::duration_cast<std::chrono::microseconds>(stop1 - start1);
		std::cout << "Time taken by function: " << duration1.count() / 1000 << " milliseconds" << std::endl;
// 		 ofstream myfile;
//   myfile.open ("example.txt");


// 		for (std::map<int, std::string>::iterator it = mymap.begin(); it != mymap.end(); ++it){
// 	  myfile << it->first << " => " << it->second << '\n';
// 		} 
		
		
		
		//  myfile.close();
		// Print the vector contents
		// for(std::string & line : vecOfStr)
		// 	std::cout<<line<<std::endl;
	}
}
