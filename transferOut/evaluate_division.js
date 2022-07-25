// Equations are given in the format A / B = k, where A and B are variables represented as strings, and k is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return -1.0.

// Example:
// Given a / b = 2.0, b / c = 3.0. 
// queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? . 
// return [6.0, 0.5, -1.0, 1.0, -1.0 ].

// The input is: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries , where equations.size() == values.size(), and the values are positive. This represents the equations. Return vector<double>.

// According to the example above:

// equations = [ ["a", "b"], ["b", "c"] ],
// values = [2.0, 3.0],
// queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
// The input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.


// Although this looks like a math problem, we can easily model it with graph.

// For example:
// Given:
// a/b = 2.0, b/c = 3.0
// We can build a directed graph:
// a -- 2.0 --> b -- 3.0 --> c
// If we were asked to find a/c, we have:
// a/c = a/b * b/c = 2.0 * 3.0
// In the graph, it is the product of costs of edges.

// Do notice that, 2 edges need to added into the graph with one given equation,
// because with a/b we also get result of b/a, which is the reciprocal of a/b.

// so the previous example also gives edges:
// c -- 0.333 --> b -- 0.5 --> a

// Now we know how to model this problem, what we need to do is simply build the
// graph with given equations, and traverse the graph, either DFS or BFS, to find a path
// for a given query, and the result is the product of costs of edges on the path.

// One optimization, which is not implemented in the code, is to "compress" paths for
// past queries, which will make future searches faster. This is the same idea used in
// compressing paths in union find set. So after a query is conducted and a result is found,
// we add two edges for this query if these edges are not already in the graph.

// Given the number of variables N, and number of equations E,
// building the graph takes O(E), each query takes O(N), space for graph takes O(E)

// I think if we start to compress paths, the graph will grow to O(N^2), and we
// can optimize the query to O(1), please correct me if I'm wrong.

// To start we queue up all the 'children' of the expression that we're currently solving, and keep evaluating them until we run out. We do this by first making an adjacency list. For example.

// Knowns: [a, b] = 2, [b, c] = 3. So we also know then that [b, a] = 0.5, and [c, b] = 0.333. (We initilise the adjacency map as we go with these too, hence 1/values).

// The adjacency list then looks like:

// a : [[b, 2]]
// b : [[a, 0.5], [c, 3]]
// c : [[b, 0.333]]

// so when we want to evaluate for example [a, c], all we do is put a's mapping into the queue and keep evaluating until we see c. We multiply the numbers as we go as it's nested division.This looks like:

// queue: [[b, 2]]
// queue: [[a, 1], [c, 6]] // Here we add the 'neighbours' of b, where we're b maps to a and c. a/a=1, and a/c=6, so it makes sense.
// queue: [c, 6]

// solved!


 


let equations = [
    ["a", "b"],
    ["b", "c"]
],values=[2.0, 3.0], queries=[
    ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"]
]

let matrix={}

matrix[equations[0][0]]=1
matrix


var calcEquation = function (equations, values, queries) {
    var graph = {};
    // Initialise the adjacency list!
    //create store for each variabel  in the equations an assign them an array
    for (var q = 0; q < equations.length; q++) {
        graph[equations[q][0]] = [];
        graph[equations[q][1]] = [];
    }
    // for Each equation/letter push the associated value  a:["b",2] b:[[a,1/2],[c,3]] c:[[b,1/3]]
    for (var q = 0; q < equations.length; q++) {
        graph[equations[q][1]].push([equations[q][0], 1 / values[q]]);
        graph[equations[q][0]].push([equations[q][1], values[q]]);
    }
    res = [];
    for (q of queries) {
        res
        q
        res.push(evaluateExpression(q, graph))
    }
    return res;
};


function evaluateExpression(expression, neighboursList) {
    // if the expression is not in the list return -1
    if (!neighboursList[expression[0]] || !neighboursList[expression[0]])return -1;
    // if both expression are equal to each other than we know anything divided by itself is always 1; 
    if (expression[0] === expression[1])return 1;
    // Initialise with the expression we want to get! We start with the numerator's children in the queue.

    var q = neighboursList[expression[0]].slice();
    q

    var checked = [];
    while (q.length > 0) {
      
        var elem = q.shift();

        if (elem[0] === expression[1])return elem[1];
        checked.push(elem[0]);
        // Otherwise add the neighbours to the queue with updated divisors.
        var neighbours = neighboursList[elem[0]];
    
        for (var n = 0; n < neighbours.length; n++) {
            var nextToCheck = neighbours[n];
            if (checked.includes(nextToCheck[0])) {
                continue;
            }
            q.push([nextToCheck[0], nextToCheck[1] * elem[1]])
        }
    }
    return -1;
}

console.log(calcEquation(equations,values,queries))


