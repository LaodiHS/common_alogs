
	// #include<bits/stdc++.h>
	// #include <iostream>
	
	// using namespace std;
	
	// int main() {
	// int N = 4;
	// vector<int> dist(N + 1, INT_MAX);
	// for(int i = 0;i < dist.size()-1;i++){
	//     cout<< dist[i] << endl;
	// }
	// //dist.resize(N);
	// //this should work
	// return 0;
	// }
	//kys


/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */


const networkDelayTime2 = (times, N, K) => {
const nodes ={},queue = [K],costs ={};
for(let i=1;i<N+1;i++)costs[i]=Array(N).fill(-1),nodes[i]=Infinity;
  nodes[K] = 0;
  for (const [source,target,time] of times)costs[source][target] = time;
  for(source of queue) {
    for (let target = 0; target < costs[source].length; target++) {
      const time = costs[source][target];
      if (time < 0) continue;
      if (nodes[target] > nodes[source] + time) {
        nodes[target] = nodes[source] + time;
        queue.push(target);
      }
    }
  }
  let n = Object.values(nodes)
  const maxTime = Math.max(...n);
  return maxTime < Infinity ? maxTime : -1;
};
networkDelayTime2([[1,2,1],[2,1,3]],2,2)/*?*/
networkDelayTime2([[1,2,1]],2,2)/*?*/




