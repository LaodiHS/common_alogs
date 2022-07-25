#include <string>
#include <iostream>
#include<bits/stdc++.h>
using namespace std;

static inline int str_to_int(char* str) {
    int res = 0;
    int i;





    for(i = 5; i >= 0; --i) {
        
        res = res * ( i == 3 || i == 4 ? 10 : 26) + ( i == 3 || i == 4 ? ( ( int ) (str[i] - '0') ) : ( (int) ( str[i] - 'A' ) ) ) ;

    }




    return res ;
}



int main(){



char str[] = "NBA00A";



int a  = str_to_int(str);


//  cout <<int('A')<< "\n";
 cout<< a; 



    return 0;

}