#include <iostream>
#include <stdexcept>
#include <string>
 
using namespace std;
 
int string2int(string numberAsString) {
 
  // 1. At first check if the string is not empty
  if (numberAsString.length() <= 0 ) {
    throw invalid_argument("Empty string");
  }
 
  char numberSign = numberAsString[0];
  bool isPositive = true;
  int number = 0;
  int i = 0;
 
  // 2. Secondly check the sign
  if (numberSign < '0') {
    if (numberSign == '-') {
      isPositive = false;
      i++;
    } else {
      throw invalid_argument("Number sign error");
    }
  }
 
  // 3. The String to int in base 10 conversion (while loop)
  int stringLength = numberAsString.length();
 
  while (i < stringLength ) {
    int digit = numberAsString[i++] - '0';
    if (digit < 0 || digit > 9) {
      string msg;
      msg += "Invalid character '";
      msg += numberAsString[i - 1];
      msg += "' on the position ";
      msg += to_string(i - 1);
      throw invalid_argument(msg);
    }
    number *= 10;
    number += digit;
  }
 
  // 4. Return the result, if the number is negative then change the sign of the number
  if (isPositive) {
    return number;
  } else {
    return -number;
  }
}
 

static inline int str_to_int(char* str) {
    int res = 0;
    int i;
    for(i = 5; i >= 0; --i){
        res = res * (i == 3 || i == 4 ? 10 : 26) + (i == 3 || i == 4 ? ( (int) (str[i]-'0')) : ( (int) (str[i]-'A')));
    }
    return res;
}



// the conversion from string to int in C++ example (dec custom function)
int main() {

    string str="IRG29S";
    // cout << "Enter a number: ";
    // cin >> str;
    // cout << endl;

    

    int result = string2int(str);
    cout <<  str  <<  result << endl;

  return 0;
}