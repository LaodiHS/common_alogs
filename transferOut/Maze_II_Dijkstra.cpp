// C++ program to demonstrate building 
// and inserting in a Fibonacci heap 
// C++ program to demonstrate Extract min, Deletion() 
// and Decrease key() operations in a fibonacci heap 
#include <cmath> 
#include <cstdlib> 
#include <iostream> 
#include <malloc.h> 
#include <vector>
#include<limits>
#include<map>








using namespace std;
 int no_of_nodes = 0; 
struct node* mini = NULL; 

struct keyValues{ 
	int priority;
    int row;
    int col;
    keyValues(int priority, int row,int col) :  priority(priority),row(row), col(col){}; 
};
// Creating a structure to represent a node in the heap 
struct node {
	 int key; // Value of the node 
	int degree; // Degree of the node 
	char mark; // Black or white mark of the node 
	char c; // Flag for assisting in the Find node function
	node* parent; // Parent pointer 
	node* child; // Child pointer 
	node* left; // Pointer to the node on the left 
	node* right; // Pointer to the node on the right 
    keyValues* values; 
    node(int val,int row=0, int col=0):key(val),degree(0), mark('W'), c('N'), parent(NULL),child(NULL), left(this), right(this), values( new keyValues(val,row,col)) {};
}; 

// Creating min pointer as "mini" 


// Declare an integer for number of nodes in the heap 


// Function to insert a node in heap 
void insertion(int val, int row = 0,int col = 0) 
{ 
 node* new_node = new node(val, row, col); 
	if (mini != NULL) { 
		(mini->left)->right = new_node; 
		new_node->right = mini; 
		new_node->left = mini->left; 
		mini->left = new_node; 
		if (new_node->key < mini->key)mini = new_node; 
	} else mini = new_node; 
	no_of_nodes++; 
} 
// Linking the heap nodes in parent child relationship 
void Fibonnaci_link(struct node* ptr2, struct node* ptr1) 
{ 
	(ptr2->left)->right = ptr2->right; 
	(ptr2->right)->left = ptr2->left; 
	if (ptr1->right == ptr1) 
		mini = ptr1; 
	ptr2->left = ptr2; 
	ptr2->right = ptr2; 
	ptr2->parent = ptr1; 
	if (ptr1->child == NULL) 
		ptr1->child = ptr2; 
	ptr2->right = ptr1->child; 
	ptr2->left = (ptr1->child)->left; 
	((ptr1->child)->left)->right = ptr2; 
	(ptr1->child)->left = ptr2; 
	if (ptr2->key < (ptr1->child)->key) 
		ptr1->child = ptr2; 
	ptr1->degree++; 
} 
// Consolidating the heap 
void Consolidate() 
{ 
	int temp1; 
	float temp2 = (log(no_of_nodes)) / (log(2)); 
	int temp3 = temp2; 
	cout<<temp3<<"----aa---"<< "\n";
	struct node* arr[temp3]; 
	for (int i = 0; i <= temp3; i++) {
	cout<< arr[i] <<"----ii---"<< "\n";
		arr[i] = NULL; 
	}
	node* ptr1 = mini; 
	node* ptr2; 
	node* ptr3; 
	node* ptr4 = ptr1; 
	do { 
		ptr4 = ptr4->right; 
		temp1 = ptr1->degree; 
		while (arr[temp1] != NULL) { 
			ptr2 = arr[temp1]; 
			if (ptr1->key > ptr2->key) { 
				ptr3 = ptr1; 
				ptr1 = ptr2; 
				ptr2 = ptr3; 
			} 
			if (ptr2 == mini) 
				mini = ptr1; 
			Fibonnaci_link(ptr2, ptr1); 
			if (ptr1->right == ptr1) 
				mini = ptr1; 
			arr[temp1] = NULL; 
			temp1++; 
		} 
		arr[temp1] = ptr1; 
		ptr1 = ptr1->right; 
	} while (ptr1 != mini); 
	mini = NULL; 
	for (int j = 0; j <= temp3; j++) { 
		if (arr[j] != NULL) { 
			arr[j]->left = arr[j]; 
			arr[j]->right = arr[j]; 
			if (mini != NULL) { 
				(mini->left)->right = arr[j]; 
				arr[j]->right = mini; 
				arr[j]->left = mini->left; 
				mini->left = arr[j]; 
				if (arr[j]->key < mini->key) 
					mini = arr[j]; 
			} 
			else { 
				mini = arr[j]; 
			} 
			if (mini == NULL) 
				mini = arr[j]; 
			else if (arr[j]->key < mini->key) 
				mini = arr[j]; 
		} 
	} 
} 

// Function to extract minimum node in the heap 
void Extract_min() 
{    
//    keyValues* removed = NULL ;
	if (mini == NULL) {
		cout << "The heap is empty" << endl;
        // return removed;  
    }
	else { 
		node* temp = mini; 
        // removed = mini->values;
		node* pntr; 
		pntr = temp; 
		node* x = NULL; 
		if (temp->child != NULL) { 
			x = temp->child; 
			do { 
				pntr = x->right; 
				(mini->left)->right = x; 
				x->right = mini; 
				x->left = mini->left; 
				mini->left = x; 
				if (x->key < mini->key) 
					mini = x; 
				x->parent = NULL; 
				x = pntr; 
			} while (pntr != temp->child); 
		} 
		(temp->left)->right = temp->right; 
		(temp->right)->left = temp->left; 
		mini = temp->right; 
		if (temp == temp->right && temp->child == NULL) 
			mini = NULL; 
		else { 
			mini = temp->right; 
			Consolidate(); 
		} 
		no_of_nodes--; 
	}
    // return removed; 
} 

// Cutting a node in the heap to be placed in the root list 
void Cut(struct node* found, struct node* temp) 
{ 
	if (found == found->right) temp->child = NULL; 

	(found->left)->right = found->right; 
	(found->right)->left = found->left; 
	if (found == temp->child) 
		temp->child = found->right; 

	temp->degree = temp->degree - 1; 
	found->right = found; 
	found->left = found; 
	(mini->left)->right = found; 
	found->right = mini; 
	found->left = mini->left; 
	mini->left = found; 
	found->parent = NULL; 
	found->mark = 'B'; 
} 

// Recursive cascade cutting function 
void Cascase_cut(struct node* temp) 
{ 
	node* ptr5 = temp->parent; 
	if (ptr5 != NULL) { 
		if (temp->mark == 'W') { 
			temp->mark = 'B'; 
		} 
		else { 
			Cut(temp, ptr5); 
			Cascase_cut(ptr5); 
		} 
	} 
} 

// Function to decrease the value of a node in the heap 
void Decrease_key(struct node* found, int val) 
{ 
	if (mini == NULL) 
		//cout << "The Heap is Empty" << endl; 

	if (found == NULL) 
		//cout << "Node not found in the Heap" << endl; 

	found->key = val; 

	struct node* temp = found->parent; 
	if (temp != NULL && found->key < temp->key) { 
		Cut(found, temp); 
		Cascase_cut(temp); 
	} 
	if (found->key < mini->key) 
		mini = found; 
} 

// Function to find the given node 
void Find(struct node* mini, int old_val, int val) 
{ 
	struct node* found = NULL; 
	node* temp5 = mini; 
	temp5->c = 'Y'; 
	node* found_ptr = NULL; 
	if (temp5->key == old_val) { 
		found_ptr = temp5; 
		temp5->c = 'N'; 
		found = found_ptr; 
		Decrease_key(found, val); 
	} 
	if (found_ptr == NULL) { 
		if (temp5->child != NULL) 
			Find(temp5->child, old_val, val); 
		if ((temp5->right)->c != 'Y') 
			Find(temp5->right, old_val, val); 
	} 
	temp5->c = 'N'; 
	found = found_ptr; 
} 

// Deleting a node from the heap 
void Deletion(int val) 
{ 
	if (mini == NULL) {
		//cout << "The heap is empty" << endl;
	} 
	else { 

		// Decreasing the value of the node to 0 
		Find(mini, val, 0); 

		// Calling Extract_min function to 
		// delete minimum value node, which is 0 
		Extract_min(); 
		cout << "Key Deleted" << endl; 
	} 
} 

// Function to display the heap 
bool display() 
{ 
	node* ptr = mini; 
	if (ptr == NULL){ 
		// cout << "The Heap is Empty" << endl; 
    return 0;
    }
	else { 
		// cout << "The root nodes of Heap are: " << endl; 
		do { 
			cout << ptr->key; 
			ptr = ptr->right; 
			if (ptr != mini) { 
				cout << "-->"; 
			} 
		} while (ptr != mini && ptr->right != NULL); 
		cout << endl 
			<< "The heap has " << no_of_nodes << " nodes" << endl 
			<< endl; 
          
	} 
	return 1;  
}

int shortestDistance(vector<vector<int>> graph, vector<int> start, vector<int> end)
{
	int m = graph.size();
	int n = graph[0].size();
	int row = start[0];
	int col = start[1];
	map<int, map<int, int>> distance;

	int inf = numeric_limits<int>::max();
	for (int i = 0; i < m; i++)
	{
		distance[i] = map<int, int>();
		for (int j = 0; j < n; j++)
		{
			distance[i][j] = inf;
		}
	};

	int rowSize = graph.size();
	int colSize = graph[0].size();

	vector<vector<int>> dir = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};

	insertion(0, row, col);

	while (no_of_nodes)
	{
		keyValues *queue = mini->values;
		cout << queue->row << "----queue before--->" << queue->col << "\n";
		Extract_min();
		//  if( distance.count(queue->row) && distance[queue->row].count(queue->col) &&  distance[queue->row][queue->col] <= queue->priority)continue;
		distance[queue->row][queue->col] = queue->priority;
		for (int i = 0; i < 4; i++)
		{
			int row = queue->row;
			int col = queue->col;
			int distancePriority = queue->priority;
			while (row >= 0 && row < rowSize && col >= 0 && col < colSize && graph[row][col] == 0)
			{
				row += dir[i][0];
				col += dir[i][1];
				distancePriority++;
			};
			row -= dir[i][0];
			col -= dir[i][1];
			distancePriority--;
			if (queue->priority + distancePriority < distance[row][col])
			{
				insertion(distancePriority, row, col);
				distance[row][col] = queue->priority + distancePriority;
			}
		};
	};

	return distance[end[0]][end[1]] == inf? -1 : distance[end[0]][end[1]];

}

// Driver code 
int main() 
{ 
vector<vector<int>>graph(40, vector<int>());
	graph[0]={1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1};
    graph[1]={0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1};
    graph[2]={0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0};
    graph[3]={0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1};
    graph[4]={0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0};
    graph[5]={1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1};
    graph[6]={0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0};
    graph[8]={0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0};
    graph[9]={0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1};
    graph[10]={1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};
    graph[11]={1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0};
    graph[12]={0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0};
    graph[13]={0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1};
    graph[14]={1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0};
    graph[15]={1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0};
    graph[16]={0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1};
    graph[17]={1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0};
    graph[18]={0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1};
    graph[19]={0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0};
    graph[20]={0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0};
    graph[21]={0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1};
    graph[22]={0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0};
    graph[23]={1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0};
    graph[24]={1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0};
    graph[25]={1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0};
    graph[26]={1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0};
    graph[27]={1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1};
    graph[28]={0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0};
    graph[29]={1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0};
    graph[30]={0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1};
    graph[31]={1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0};
    graph[32]={0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0};
    graph[33]={1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0};
    graph[34]={1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1};
    graph[35]={0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0};
    graph[36]={0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0};
    graph[37]={0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0};
    graph[38]={0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1};
    graph[39]={0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0};
    graph[40]={1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0};
    graph[41]={0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

vector<int>start = {39,9};
vector<int>end = {30,28}; 

int val = shortestDistance(graph,start,end); 
cout  << "shortest distance-------->"  << val<< "\n"; 
	// // We will create a heap and insert 3 nodes into it 
	// cout << "Creating an initial heap" << endl; 
	// insertion(5); 
 
	// insertion(2); 
	// insertion(8); 

	// Now we will display the root list of the heap 
	display(); 

	// // Now we will extract the minimum value node from the heap 
	// cout << "Extracting min" << endl; 
	// Extract_min(); 
	// display(); 

	// // Now we will decrease the value of node '8' to '7' 
	// cout << "Decrease value of 8 to 7" << endl; 
	// Find(mini, 8, 7); 
	// display(); 

	// // Now we will delete the node '7' 
	// cout << "Delete the node 7" << endl; 
	// Deletion(7); 
	// display(); 
// map<int,map<int,int>>m;
// cout << m[3][0] << "yo\n";



	return 0; 
} 

