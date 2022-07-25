//https://thispointer.com/c-11-multithreading-part-1-three-different-ways-to-create-threads/
// need -pthread flag with gcc

// What std::thread accepts in constructor ?
// We can attach a callback with the std::thread object, that will be executed when this new thread starts. These callbacks can be,

// 1.) Function Pointer
// 2.) Function Objects
// 3.) Lambda functions

// Thread objects can be created like this,

// std::thread thObj(<CALLBACK>);
// New Thread will start just after the creation of new object and will execute the passed callback in parallel to thread that has started it.
// Moreover, any thread can wait for another to exit by calling join() function on that thread’s object.

// Lets look at an example where main thread will create a separate thread. After creating this new thread, main thread will print some data on console and then wait for newly created thread to exit.

#include <iostream>
#include <thread>
 
void thread_function()
{
    for(int i = 0; i < 10000; i++);
        std::cout<<"thread function Executing"<<std::endl;
}
 
int main()  
{
    
    std::thread threadObj(thread_function);
    for(int i = 0; i < 10000; i++);
        std::cout<<"Display From MainThread"<<std::endl;
    threadObj.join();    
    std::cout<<"Exit of Main function"<<std::endl;
    return 0;
}


// Lets implement above using three different callback mechanism,

// Creating a thread using Function Pointer
#include <iostream>
#include <thread>
 
void thread_function()
{
    for(int i = 0; i < 10000; i++);
        std::cout<<"thread function Executing"<<std::endl;
}
 
int main()  
{
    
    std::thread threadObj(thread_function);
    for(int i = 0; i < 10000; i++);
        std::cout<<"Display From MainThread"<<std::endl;
    threadObj.join();    
    std::cout<<"Exit of Main function"<<std::endl;
    return 0;
}

#include <iostream>
#include <thread>
 
void thread_function()
{
    for(int i = 0; i < 10000; i++);
        std::cout<<"thread function Executing"<<std::endl;
}
 
int main()  
{
    
    std::thread threadObj(thread_function);
    for(int i = 0; i < 10000; i++);
        std::cout<<"Display From MainThread"<<std::endl;
    threadObj.join();    
    std::cout<<"Exit of Main function"<<std::endl;
    return 0;
}




#include <iostream>
#include <thread>
class DisplayThread
{
public:
    void operator()()     
    {
        for(int i = 0; i < 10000; i++)
            std::cout<<"Display Thread Executing"<<std::endl;
    }
};
 
int main()  
{
    std::thread threadObj( (DisplayThread()) );
    for(int i = 0; i < 10000; i++)
        std::cout<<"Display From Main Thread "<<std::endl;
    std::cout<<"Waiting For Thread to complete"<<std::endl;
    threadObj.join();
    std::cout<<"Exiting from Main Thread"<<std::endl;
    return 0;
}


#include <iostream>
#include <thread>
class DisplayThread
{
public:
    void operator()()     
    {
        for(int i = 0; i < 10000; i++)
            std::cout<<"Display Thread Executing"<<std::endl;
    }
};
 
int main()  
{
    std::thread threadObj( (DisplayThread()) );
    for(int i = 0; i < 10000; i++)
        std::cout<<"Display From Main Thread "<<std::endl;
    std::cout<<"Waiting For Thread to complete"<<std::endl;
    threadObj.join();
    std::cout<<"Exiting from Main Thread"<<std::endl;
    return 0;
}




#include <iostream>
#include <thread>
int main()  
{
    int x = 9;
    std::thread threadObj([]{
            for(int i = 0; i < 10000; i++)
                std::cout<<"Display Thread Executing"<<std::endl;
            });
            
    for(int i = 0; i < 10000; i++)
        std::cout<<"Display From Main Thread"<<std::endl;
        
    threadObj.join();
    std::cout<<"Exiting from Main Thread"<<std::endl;
    return 0;
}


#include <iostream>
#include <thread>
int main()  
{
    int x = 9;
    std::thread threadObj([]{
            for(int i = 0; i < 10000; i++)
                std::cout<<"Display Thread Executing"<<std::endl;
            });
            
    for(int i = 0; i < 10000; i++)
        std::cout<<"Display From Main Thread"<<std::endl;
        
    threadObj.join();
    std::cout<<"Exiting from Main Thread"<<std::endl;
    return 0;
}
// Differentiating between threads
// Each of the std::thread object has an associated ID and we can fetch using,

// Member function, gives id of associated thread object i.e.

// std::thread::get_id()

// std::thread::get_id()
// To get the identifier for the current thread use,

// std::this_thread::get_id()

// std::this_thread::get_id()
// If std::thread object does not have an associated thread then get_id() will return a default constructed std::thread::id object i.e. not any thread.

// std::thread::id is a Object, it can be compared and printed on console too. Let’s look at an example,


#include <iostream>
#include <thread>
void thread_function()
{
    std::cout<<"Inside Thread :: ID  = "<<std::this_thread::get_id()<<std::endl;    
}
int main()  
{
    std::thread threadObj1(thread_function);
    std::thread threadObj2(thread_function);
 
    if(threadObj1.get_id() != threadObj2.get_id())
        std::cout<<"Both Threads have different IDs"<<std::endl;
 
        std::cout<<"From Main Thread :: ID of Thread 1 = "<<threadObj1.get_id()<<std::endl;    
    std::cout<<"From Main Thread :: ID of Thread 2 = "<<threadObj2.get_id()<<std::endl;    
 
    threadObj1.join();    
    threadObj2.join();    
    return 0;
}

#include <iostream>
#include <thread>
void thread_function()
{
    std::cout<<"Inside Thread :: ID  = "<<std::this_thread::get_id()<<std::endl;    
}
int main()  
{
    std::thread threadObj1(thread_function);
    std::thread threadObj2(thread_function);
 
    if(threadObj1.get_id() != threadObj2.get_id())
        std::cout<<"Both Threads have different IDs"<<std::endl;
 
        std::cout<<"From Main Thread :: ID of Thread 1 = "<<threadObj1.get_id()<<std::endl;    
    std::cout<<"From Main Thread :: ID of Thread 2 = "<<threadObj2.get_id()<<std::endl;    
 
    threadObj1.join();    
    threadObj2.join();    
    return 0;
}












// void thread_function()
// {
//     std::cout<<"Inside Thread :: ID  = "<<std::this_thread::get_id()<<std::endl;    
// }
// int main()  
// {
//     std::thread threadObj1(thread_function);
//     std::thread threadObj2(thread_function);
 
//     if(threadObj1.get_id() != threadObj2.get_id())
//         std::cout<<"Both Threads have different IDs"<<std::endl;
 
//         std::cout<<"From Main Thread :: ID of Thread 1 = "<<threadObj1.get_id()<<std::endl;    
//     std::cout<<"From Main Thread :: ID of Thread 2 = "<<threadObj2.get_id()<<std::endl;    
 
//     threadObj1.join();    
//     threadObj2.join();    
//     return 0;
// }





#include <algorithm>
#include<vector>
#include<functional>
class WorkerThread
{
public:
    void operator()()     
    {
        std::cout<<"Worker Thread "<<std::this_thread::get_id()<<" is Executing"<<std::endl;
    }
};
int main()  
{
    std::vector<std::thread> threadList;
    for(int i = 0; i < 10; i++)
    {
        threadList.push_back( std::thread( WorkerThread() ) );
    }
    // Now wait for all the worker thread to finish i.e.
    // Call join() function on each of the std::thread object
    std::cout<<"wait for all the worker thread to finish"<<std::endl;
   //std::for_each(threadList.begin(),threadList.end(), std::mem_fn(&std::thread::join));

    for(auto &val : threadList){
        std::mem_fn(val );
    }

    std::cout<<"Exiting from Main Thread"<<std::endl;
    return 0;
}