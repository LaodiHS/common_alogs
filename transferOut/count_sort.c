#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static inline int str_to_int(char* str) {
    int res = 0;
    int i;
    for(i = 5; i >= 0; --i) {
        res = res * (i == 3 || i == 4 ? 10 : 26) + (i == 3 || i == 4 ? ( (int) (str[i]-'0')) : ( (int) (str[i]-'A')));
    }
    return res;
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

int main() {
    char* data = (char*) malloc(7*2000000);
    int* count = (int*) malloc(45697600*sizeof(int));
    int* output = (int*) malloc(2000000*sizeof(int));
    size_t outptr = 0;
    memset(count, 0, 45697600);
    memset(data, 0, 2000000);
    int i,j;
    setup(data);
    
      clock_t begin = clock();
    
    for(i = 0; i < 2000000; ++i) {
        count[str_to_int(data+i*7)] += 1;
    }
  
    for(i = 0; i < 45697600; ++i) {
        for(j = 0; j < count[i]; ++j, ++outptr) {
            output[outptr] = i;
        }
    }
    
    clock_t end = clock();
    double time_spent = (double)(end - begin) / CLOCKS_PER_SEC;
    printf("%.3f\n", time_spent);
    
    free(data);
    free(count);
    free(output);
    return 0;
}