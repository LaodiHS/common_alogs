// address


#include <iostream>
int lengthOfLongestSubstring(char* s)
{ 
    // char man = s;
    // printf("%s\n", man); 
   //  printf("%s\n", s);
	int len = 0;
    char *end = s,*temp;
	char* addressTable[128] = {NULL};
	while(*end){
		temp = addressTable[*end];

		addressTable[*end] = end;
		
		if(temp >= s){ 
		
		// s piont to the beginning of current substring , temp piont to the last repeat char ,if temp < s ignoring;
		len = end - s > len ? end - s : len; // (end -s) length of current substring
	
		s = temp + 1; // piont to new char
	

		}
        end++;


	}

    printf("%s\n", s);
	len = end - s > len ? end - s : len;
	return len;
}


int main(){
std::string str = "abcabcbb";
char* c = new char[str.length() + 1];
std::copy(str.begin(), str.end(), c); 
std::cout << lengthOfLongestSubstring(c);


int *adio[128] = {NULL};




	return 0;
}