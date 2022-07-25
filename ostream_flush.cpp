#include <fstream>      // std::ofstream
#include <iostream>
using namespace std;
// print to file
int main () {

  std::ofstream outfile ("test.txt");

  for (int n=0; n<100; ++n)
  {
    outfile << "hello world" << "\n";
   
     outfile.flush();
  }
  outfile.close();

  return 0;
}