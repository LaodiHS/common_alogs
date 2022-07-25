   // linked list in C++; 
    #include<stdio.h> 
    #include<stdlib.h> 




    struct node* createNode(int i);
    

    struct node {
     int val;
     struct node *next;
    };
    
    struct node* createNode(int i)
    {        
        struct node* temp;
        temp = (struct node*) malloc(sizeof (struct node));
        temp -> val = i;
        temp -> next = NULL;
        return temp;
    }
    
    int main() {
     
     
     int i;
     struct node *tmp = NULL;
     struct node *root, *traverse;
     //root= head;
     
    for(i = 0; i <= 5; i++){
        tmp =  createNode(i);
        if(i == 0)root = tmp, traverse = tmp;
        else traverse -> next = tmp ,traverse = traverse -> next;
        }    
     
     
     struct node * temp1 = root;

     while(temp1) printf("%d --> ", temp1 -> val), temp1 = temp1 -> next;
     

     return 0;
    }

	// varable single pointer varable and double pointer varable kodakandla@gmail.com



    