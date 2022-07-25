var findItinerary = function(tickets) {
     const targets =[], route= [];
for(let [u,v] of tickets)targets[u]=(targets[u]||[]).concat(v);    
for(let p in targets)targets[p].sort();
targets
   visit('JFK');
   return route;
function visit(from){  
while((targets[from]||{}).length)visit(targets[from].shift());        
     route.unshift(from);  
    }
}
    
   


//findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]) /*?*/
// ["JFK", "MUC", "LHR", "SFO", "SJC"]
findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]) /*?*/ 
//["JFK","ATL","JFK","SFO","ATL","SFO"]


