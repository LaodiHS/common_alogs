#include <string>
#include <iostream>
#include<stdio.h>
#include<limits>
int stoiExcept(const std::string str)
{

    double k = std::double ::max();
    try
    {
        auto val = std::stoi(str);
        return val;
    }

    catch (...){
           // std::cout << err << std::endl;
            return 0;
    };
    return 0;
}

#ifndef RunTests
int main()
{
    std::cout << stoiExcept("100000000000000");
}
#endif