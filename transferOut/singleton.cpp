// singleton;
#include <iostream> 

class MySingleton
{
     int data;
    MySingleton(int a) : data(a){};
    MySingleton() = default;

public:
  static  MySingleton &instance()
    {
        static MySingleton singleton;
        return singleton;
    }

    int getData()
    {
        return this->data;
    }

    void setData(int data)
    {
        this->data = data;
    }



	
};

int main()
{

 MySingleton s = MySingleton::instance();
   // s.setData(5);
    std::cout << s.getData();
}