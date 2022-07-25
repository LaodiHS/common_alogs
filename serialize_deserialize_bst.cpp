#include <iostream>
#include <queue>
#include<memory>
#include<string>

using namespace std;


struct TreeNode
{
	int val;
	TreeNode* left;
	TreeNode* right;
	TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};




class Codec
{
public:
	string str;
	queue<string> st;
	//char memory[sizeof(TreeNode)];
	TreeNode* foo(int v) {
		return (TreeNode*)alloca(sizeof(TreeNode(v) ));
	}
	string serialize(TreeNode* root)
	{
		if (!root)
			str += "# ";
		else
		{
			str += to_string(root->val) + " ";
			serialize(root->left);
			serialize(root->right);
		}
		return str;
	}
	TreeNode* deserialize(string s)
	{
		queue<string> st = stackify(s);
		return buildTree();
	}

	TreeNode* buildTree()
	{
		if (!st.size())return NULL;
		string val = st.front();
	
		st.pop();

		TreeNode* node;

		return val == "#" ? NULL : (node = new TreeNode(stoi(val) ), node->left = buildTree(), node->right = buildTree(), node);
	}
	queue<string> stackify(string s)
	{
		string delimiter = " ";
		size_t pos = 0;
		while ((pos = s.find(delimiter)) != string::npos)
		{
			st.push(s.substr(0, pos));
			s.erase(0, pos + delimiter.length());
		}
		return st;
	}
	int walk(TreeNode* &node) {
		if (!node)return 0;
		cout << node->val << "\n";
		walk(node->left);
		walk(node->right);

	}
};
void HelloWorld(int a) {
	std::cout << "hello World" << a << "\n";
}
int main() {

	string s = "1 2 # # 3 4 # # 5 # # ";
	Codec dlg;
	TreeNode* v = dlg.deserialize(s);
	cout << v->val << '\n' << v->left->val << '\n' << v->right->val;


	dlg.walk(v);





}