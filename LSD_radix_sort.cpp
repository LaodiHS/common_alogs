#include <vector>
#include<iostream>
#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <string>
#include <bitset>
#include <algorithm>
using namespace std;
void radix_sort1(unsigned *begin, unsigned *end)
{
    unsigned *begin1 = new unsigned[end - begin];
    unsigned *end1 = begin1 + (end - begin);
    for (unsigned shift = 0; shift < 32; shift += 8) {
        size_t count[0x100] = {};
        for (unsigned *p = begin; p != end; p++)
            count[(*p >> shift) & 0xFF]++;
        unsigned *bucket[0x100], *q = begin1;
        for (int i = 0; i < 0x100; q += count[i++])
            bucket[i] = q;
        for (unsigned *p = begin; p != end; p++)
            *bucket[(*p >> shift) & 0xFF]++ = *p;
        std::swap(begin, begin1);
        std::swap(end, end1);
    }
    delete[] begin1;
}


void radix2(unsigned *start,unsigned *end)
{

	for (int bit = 0; bit < 31; bit++)
		std::stable_partition(start, end, [bit](int a) {
			return !(a & (1 << bit));
		});
	//	return num;
}



typedef unsigned int uint32_t;

void RadixSort5(uint32_t * a, size_t count)
{
size_t mIndex[4][256] = {0};            // count / index matrix
uint32_t * b = new uint32_t [count];    // allocate temp array
size_t i,j,m,n;
uint32_t u;
    for(i = 0; i < count; i++){         // generate histograms
        u = a[i];
        for(j = 0; j < 4; j++){
            mIndex[j][(size_t)(u & 0xff)]++;
            u >>= 8;
        }       
    }
    for(j = 0; j < 4; j++){             // convert to indices
        m = 0;
        for(i = 0; i < 256; i++){
            n = mIndex[j][i];
            mIndex[j][i] = m;
            m += n;
        }       
    }
    for(j = 0; j < 4; j++){             // radix sort
        for(i = 0; i < count; i++){     //  sort by current lsb
            u = a[i];
            m = (size_t)(u>>(j<<3))&0xff;
            b[mIndex[j][m]++] = u;
        }
        std::swap(a, b);                //  swap ptrs
    }
    delete[] b;
}

//-----------------
// sort a bin by 3 least significant bytes
void RadixSort256_3(uint32_t * a, uint32_t *b, size_t count)
{
size_t mIndex[3][256] = {0};            // count / matrix
size_t i,j,m,n;
uint32_t u;
    if(count == 0)
        return;
    for(i = 0; i < count; i++){         // generate histograms
        u = a[i];
        for(j = 0; j < 3; j++){
            mIndex[j][(size_t)(u & 0xff)]++;
            u >>= 8;
        }       
    }
    for(j = 0; j < 3; j++){             // convert to indices
        m = 0;
        for(i = 0; i < 256; i++){
            n = mIndex[j][i];
            mIndex[j][i] = m;
            m += n;
        }       
    }
    for(j = 0; j < 3; j++){             // radix sort
        for(i = 0; i < count; i++){     //  sort by current lsb
            u = a[i];
            m = (size_t)(u>>(j<<3))&0xff;
            b[mIndex[j][m]++] = u;
        }
        std::swap(a, b);                //  swap ptrs
    }
}

// split array into 256 bins according to most significant byte
void RadixSort256(uint32_t * a, size_t count)
{
size_t aIndex[260] = {0};               // count / array
uint32_t * b = new uint32_t [count];    // allocate temp array
size_t i;
    for(i = 0; i < count; i++)          // generate histogram
        aIndex[1+((size_t)(a[i] >> 24))]++;
    for(i = 2; i < 257; i++)            // convert to indices
        aIndex[i] += aIndex[i-1];
    for(i = 0; i < count; i++)          //  sort by msb
        b[aIndex[a[i]>>24]++] = a[i];
    for(i = 256; i; i--)                // restore aIndex
        aIndex[i] = aIndex[i-1];
    aIndex[0] = 0;
    for(i = 0; i < 256; i++)            // radix sort the 256 bins
        RadixSort256_3(&b[aIndex[i]], &a[aIndex[i]], aIndex[i+1]-aIndex[i]);
    delete[] b;
}









//--------------------

void _radix_sort_lsb(unsigned *begin, unsigned *end, unsigned *begin1, unsigned maxshift)
{
    unsigned *end1 = begin1 + (end - begin);
 
    for (unsigned shift = 0; shift <= maxshift; shift += 8)
    {
        size_t count[0x100] = {};
        for (unsigned *p = begin; p != end; p++)
            count[(*p >> shift) & 0xFF]++;
        unsigned *bucket[0x100], *q = begin1;
        for (int i = 0; i < 0x100; q += count[i++])
            bucket[i] = q;
        for (unsigned *p = begin; p != end; p++)
            *bucket[(*p >> shift) & 0xFF]++ = *p;
        std::swap(begin, begin1);
        std::swap(end, end1);
    }
}
 int track= 0; 
void _radix_sort_msb(unsigned *begin, unsigned *end, unsigned *begin1, unsigned shift)
{
     unsigned *end1 = begin1 + (end - begin); 
    size_t count[0x100] = {};
    for (unsigned *p = begin; p != end; p++){
        count[(*p >> shift) & 0xFF]++;
     };
    unsigned *bucket[0x100], *obucket[0x100], *q = begin1;
    for (int i = 0; i < 0x100; q += count[i++]){
        obucket[i] = bucket[i] = q;
    }
    for (unsigned *p = begin; p != end; p++)
        *bucket[(*p >> shift) & 0xFF]++ = *p;
    for (int i = 0; i < 0x100; ++i)
        _radix_sort_lsb(obucket[i], bucket[i], begin + (obucket[i] - begin1), shift - 8);
}
 
void radix_sort(unsigned *begin, unsigned *end)
{
    unsigned *begin1 = new unsigned[end - begin];
    _radix_sort_msb(begin, end, begin1, 24);
    delete[] begin1;
}

void setup(char* dest) {
    char buffer[8];
    int i = 0;
    FILE* fp = fopen("new_plates.txt", "r");
    while(fgets(buffer, 8, fp) && i < 2000000) {
        memcpy(dest+i*7, buffer, 7);
        ++i;
    }
    fclose(fp);
}


static inline int str_to_int(char* str) {
    int res = 0;
    int i;
    for(i = 5; i >= 0; --i) {
        res = res * (i == 3 || i == 4 ? 10 : 26) + (i == 3 || i == 4 ? ( (int) (str[i]-'0')) : ( (int) (str[i]-'A')));
    }
    return res;
}




int main() {
    char* data = (char*) malloc(7*2000000);
//   unsigned  int* count = (unsigned int*) malloc(45697600*sizeof(int));
    int* output = (int*) malloc(2000000*sizeof(int));
    // size_t outptr = 0;
    // memset(count, 0, 45697600);
    memset(data, 0, 2000000);
    int i,j;
    setup(data);
    
     
     unsigned int arr [2000000];
    for(i = 0; i < 2000000; ++i) {
        // cout << str_to_int(data+i*7);
    arr[i]= str_to_int(data+ i *7);
        //count[str_to_int(data+i*7)] += 1;
    }


// unsigned int* start  = count;




//  radix_sort(count, count + 2000000);







  clock_t begin = clock();
  //radix_sort(arr, arr + 2000000); 
    // for(i = 0; i < 45697600; ++i) {
    //     for(j = 0; j < count[i]; ++j, ++outptr) {
    //        // output[outptr] = i;
    //     }
    // }
    //radix_sort(arr, arr + 2000000);
RadixSort256(arr,2000000);
// for(unsigned int i = 0; i< 500; i++){

//     cout << arr[i] << "\n"; 
// }
 

    clock_t end = clock();
    double time_spent = (double)(end - begin) / CLOCKS_PER_SEC;
    printf("%.3f\n", time_spent);
    
    free(data);
    // free(count);
    // free(arr);
    free(output);
    return 0;
}