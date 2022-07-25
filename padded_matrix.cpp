#include<iostream>
#include<vector>
using namespace std;


#define debug(x)
#define ll long long 
#define all(x) (x).begin(), (x).end()
#define rall(x) (x).rbegin(), (x).rend()
#define sq(x) ((x) * (x))
#define PRECISION 30



vector<vector<int>>turn(vector<vector<int>> matrix){
vector<vector<int>>padded(matrix.size()+2, vector<int>(matrix[0].size()+2, 0));



for(int i =1; i <= matrix.size();i++){
    for(int j=1; j <= matrix[0].size(); j++){
        padded[i][j] = matrix[i-1][j-1];
    }
}
int count = 0;
for(int i = 1; i <= matrix.size(); i++){
for(int j = 1; j <= matrix.size(); j++){
if(padded[i][j] == 2){
vector<vector<int>>adjacent{{1,0},{-1,0}, {0,1}, {0,-1}};
bool turning = false;
for (auto val: adjacent){
turning=false;
if(padded[i+val[0]][j+val[1]] == 1 )
padded[i+val[0]][j + val[1]] = 55;
turning = true;
}


if(turning)count = count++;

}



}


}





return padded;

}





main(){
vector<vector<int>>matrix{{1,2,0},{0,0,0},{2,1,1}};
for(auto col :turn(matrix)){
for(auto val : col){

    cout << val << "\t";
}
cout << endl;
};

}