//#include <string>
// pointer to value dereference; 
#include <iostream>
#include <vector>
#include <string.h>
using namespace std;


char * longestPalindrome(char * s) {
        char *str = s;
        char *l = NULL, *r = NULL, *h = s;
        int longest = 0;

        while (*str) {
                l = str;
                while (*l == *(++str));
                r = str - 1;

                while (l >= s && *r != '\0' && *l == *r) {
                        l--;
                        r++;
                }

                l++;
                if ((r - l) > longest) {
                        longest = r - l;
                        h = l;
                }
        }

        str = (char*)calloc(longest + 1, sizeof(char));
        strncpy(str, h, longest);
        return str;
}

class Solution
{
public:
        string longestPalindrome(string s)
        {
                string str;
                for (int i = 0; i < s.length(); i++)
                {

                        for (int j = 0; j < 2; j++)
                        {

                                int left = i;
                                int right = j + i;

                                while (left >= 0 && right <= str.length() && s[left] == s[right])
                                {

                                        if (str.length() <= right - left)
                                                str = s.substr(left, right - left + 1);
                                        left--;
                                        right++;
                                }
                        }
                }
                return str;
        }
};

int main(){
char  s[] ="babad";
string str = "cbbd";



char * b = longestPalindrome(s);
cout<< b << "\n"; 
//pal.palndrome(str); 
    return 0; 
}