#include<iostream>

#include<thread>
// need -pthread flag with gcc
static bool s_Finished = false;

void DoWork()
{
    
    using namespace std::literals::chrono_literals;
    std::cout << "started thread id = " << std::this_thread::get_id() << "\n";
    while(!s_Finished){
        std::cout << "working ...\n";
        std::this_thread::sleep_for(1s);
    }
}

int main(){
std::thread worker(DoWork);
std::cout << "hello world" << std::endl;
std::cin.get();
s_Finished = true;

worker.join();

std::cin.get();

}