
// testing
// static testing
//  template default arguments

#include <iostream>
#include <numeric>
#include <type_traits>
#include <cstdlib>

template <int max = 100, class T = int>
class Num

{

    static_assert(std::is_same<decltype(max), int>::value, "interval value must be an int");
    static_assert(std::is_same<T, int>::value, "assigned value must be an int");

    constexpr void reduce()
    {
        i %= max;
    }

    T i;

public:
    constexpr Num(T t) noexcept : i(t)
    {
        reduce();
    }

    constexpr Num operator=(T assign)
    {
        this->i = assign;
        reduce();
        return *this;
    }
    constexpr Num operator++() noexcept
    {
        ++i;
        reduce();
        return *this;
    }

    constexpr Num operator++(T) noexcept
    {
        Num temp(*this);
        ++(*this);
        return temp;
    }
    constexpr operator T &() noexcept
    {
        return i;
    }
    constexpr operator const T &() const noexcept
    {
        return i;
    }
};

class CircleBuffer
{
public:
    int Buffer[1000] = {};
    int assign[1000] = {};

    Num<100> start = 0;
    int next = 0;
    int length = 0;
    CircleBuffer()
    {
        int *st = assign;
        while (st != &assign[100])
            *st++ = &assign[100] - st;
    }

    int getCash()
    {
        if (length)
        {
            length--;
            int val = Buffer[start];
            Buffer[start++] = 0;
            return val;
        }

        return assign[next++];
    };

    void removeCash(const int available)
    {

        int p = ((start + length) % 100);
        if (Buffer[p] != 1)
        {
            start++;
            length++;
            Buffer[p] = available;
        }
    };
};

int main()
{
    Num<10> n = 0;
    int arr[100];
    std::iota(arr, arr + 100, 1);
    for (const auto val : arr)
    {
        arr[n] = std::rand() % 100;
        std::cout << arr[n] << "\t";
        ++n;
    };
}