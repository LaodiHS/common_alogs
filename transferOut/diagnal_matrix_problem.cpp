#include<iostream>
#include <vector>
class Solution{
    public:
    void transform(std::vector<std::vector<char>> & matrix){
            for(size_t i = 0; i < matrix.size(); i++){
                for(size_t j = i+1; j < matrix.size(); j++){
                    // if(j <= i) continue;
                    std::swap(matrix[i][j], matrix[j][i]);
                }
            }
        }
    };




int main(){

std::vector<std::vector<char>>matrix    {{'a','b','c','d'}, 
                                        {'e','f', 'g', 'h'},
                                        {'i', 'j', 'k', 'l'}, 
                                        {'m', 'n', 'o', 'p'}};
Solution transform{};
transform.transform(matrix);
for(auto row : matrix){
  
    for(auto val: row ){
        std::cout << val << " ";
        } 
         std::cout << " "<<  std::endl;
    }
}

// Friendly easy going conversation with the Principle engineer.  Lost of questions about technology stacks. Language-specific questions and architecture. At the heart of the conversation, It is a deep dive into code quality principles and patterns. What makes a good method and or pattern and what makes a bad method and or pattern.  If you want to get esoteric about it you can score some points by talking about encapsulation vs abstraction and the limits of OOP.






// given a matrix {
// { 'a', ' b', 'c','d' }, 
// { 'e','f', 'g', 'h' },
// { 'i', 'j', 'k', 'l'  }, 
// {'m', 'n', 'o', 'p'}
// };
// You are guaranteed the matrix will be N x N. 
// They wanted you to transform the 2d matrix (they called it a "wrapped array" ) in place, across the diagonal axis. So if the matrix was a paper you fold it across [a, f, k, p]. Leaving [a,f,k,p] unchanged. 
// Key points to remember: in-place transformation, and they wanted the function to be void. 
// In code speak, they wanted this
// This is an O(N) solution since you walk every element in the matrix
// class Solution{
//     public:
//     void transform(std::vector<std::vector<char>> & matrix){
//             for(size_t i = 0; i < matrix.size(); i++){
//                 for(size_t j = 0; j < matrix.size(); j++){
//                     if(j <= i) continue;
//                     std::swap(matrix[i][j], matrix[j][i]);
//                 }
//             }
//         }
//     };
// But you can probably do better than this, since you only need to walk one side of the matrix.
// class Solution{
//     public:
//     void transform(std::vector<std::vector<char>> & matrix){
//             for(size_t i = 0; i < matrix.size(); i++){
//                 for(size_t j = i; j < matrix.size(); j++){
//                     if(j <= i) continue;
//                     std::swap(matrix[i][j], matrix[j][i]);
//                 }
//             }
//         }
//     };
// They asked a million language spacific questions: 
// Javascript: what is a closure, difference between var and let (let bracket scoped and it is binding in for loops), dependency injection, imedieatly invoked functions, and why you would use them.  
 
// They didn't ask, but I also talked about javascript concurrency.
 
// Tests: What can you write tests for, and what can't you write testes for. (broad conversation about the separation of concerns and anti-patterns, and good coding practices. 

// "What makes a good API" (this is another broad question about good coding practices, think more about what makes a good function): naming using verbs, use descriptive and appropriate names, parameters,  errors, avoid side effects by not doing more than what is described. You should talk about pagination and fragmentation and how you can manage states when you need to send long responses.  ( I didn't mention all these things, but you might find it helpful to know about them)

// C++ question (I knew more than the interviewer, and talked at nauseam, so I didn't get too many questions here)  just know the difference between pointer and reference. 

//  Architecture questions: just know basic tools PostgreSQL, Redis, that was really about it. I was hoping they would ask about microservices architecture.   








// I went into a  lot of detail, for all of the questions. I could have probably talked more about "what makes a good API". 

// The code challenge is where you get to see what the culture really like in the company.
// However, for me, this part was a bit of a disappointment. 

// I usually like confirming the logic before writing the code. It gives you the confidence to write quickly and accurately. However, when I tried to confirm they insisted on writing the code first.

//  In my opinion, this is a really bad practice,  because the person writing the code is left second-guessing the logic while writing the code. 

// I ended up making silly mistakes like using "int" was instead of char for the matrix and not including the reference(&) besides the variable. 

// ```void transform(std::vector<std::vector<int>> & matrix)```

// They also seemed to encouraged unnecessary code like.  
  
// ```char val = matrixt[i][j];```

// I don't believe any of this was done on purpose,  competent people know what they are looking for and overlook these types of silly mistakes. However good engineering culture is not a slogan, it's how you approach the problem with others, and that's not something you can fake or have any control over.  However, It was enough for me not to pursue the opportunity. Having said that, it was a good experance overall and I wish them the best.  