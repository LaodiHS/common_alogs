#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <sstream>
#include <map>
#include <chrono>
#include <bits/stdc++.h>
#include <algorithm>

#include <stdlib.h>

#include <cstdlib>


typedef unsigned int uint;

uint popcount_short[0xffff];

void popcount_setup()
{
    popcount_short[0] = 0;
    for (uint mask = 1; mask < 0xffff; ++mask) {
        popcount_short[mask] = (mask&1) + popcount_short[mask>>1];
    }
}

inline uint popcount(uint x)
{
    return popcount_short[x&0xffff] + popcount_short[x>>16&0xffff];
}

int main()
{


		auto start1 = std::chrono::high_resolution_clock::now();

 
        popcount_setup();
		auto stop1 = std::chrono::high_resolution_clock::now();
		auto duration1 = std::chrono::duration_cast<std::chrono::microseconds>(stop1 - start1);
		std::cout << "Time taken by function: " << duration1.count() << " milliseconds" << std::endl;

}