// linked list in C++;
#include <stdio.h>
#include <stdlib.h>
#include <iostream>

// struct node* createNode(int i);

struct node
{
    int id;
    node *next;
};

int main()
{
    node *b = new node();
    node *a = b;
    int j = 10;
    while (--j)a -> id = j, a -> next = new node(), a = a -> next;
    while (b) std::cout << b-> id << "\n", b = b -> next;
    return 0;
}

// varable single pointer varable and double pointer varable kodakandla@gmail.com
