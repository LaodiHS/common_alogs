

// bellmon ford 80ms relax edges   O(|V||E|) with min(n^2) and max(n^3) where n is a complete graph.    Dijkstra vs O(VLogV) dijkstra is faster single source directed path
// bellmon ford fails to solve a negative weighted cycle but can do so for a postive weighted cycle. 

// cheapestFlights
// bellmon relax all possable edges n-1
var findCheapestPrice = function(n, flights, src, dst, stops) {
    //set all nodes to Infinity
    let costs = new Array(n + 1).fill(Infinity);
    // set the root node to 0
    costs[0] = 0
    // we check only the number of possable number from our source node
    for(let stop = 0; stop <= stops; stop++){
        // we copy to prevent mutation
         let stopsToMinCost = costs.slice()
        // we go through all the stops from our starting node
      for(var flight = 0; flight < flights.length; flight++){

        let [source, target, cost] = flights[flight]

        // we set the min cost to all target node with the node being represented as the index
        // and the cost being the min between the lost recoded min of said target node and the source cost
        // plus the current cost
        stopsToMinCost[target] = Math.min(stopsToMinCost[target], costs[source] + cost);
      }
      // we copyt to prevent mutation of the values
      costs = stopsToMinCost.slice()    
    }
    return costs[dst] !== Infinity ? costs[dst] : -1
  };
    






findCheapestPrice( 3,[[0,1,100],[1,2,100],[0,2,500]],0,2,0) /*?*/

// with dikestra queueing by price 388ms 3 times slower than bellmon ford 
//dikestra n into n worst is n^2

function Priorityqueue() {
    const size = Symbol()
    const queue = {[size]: 0}
    const isEmpty = () => queue[size]
    return {isEmpty, offer, poll}
   
    function offer(x, y, l) {
        if (queue[x]) queue[x].p.unshift({x: x, y: y, l: l})
        else queue[x] = {x: x, y: y, l: l, p: []}
        queue[size]++
    }

    function poll() {
        for (key in queue) {
            let val = queue[key] 
            if(queue[key].p.length)val = queue[key].p.pop()
            else delete queue[key]  
            queue[size]--
            return val;
        }
    }
}

var findCheapestPriceDij = function (n, flights, src, dst, K) {
    let prices = new Map()
    for (edge of flights) {
        let [source, target, cost] = edge
        if (!prices.has(source)) prices.set(source, new Map())
        prices.get(source).set(target, cost)
    }

    let pq = new Priorityqueue()
    // set up our current itteration with our starting positions
    pq.offer(0, src, K + 1)
    while (pq.isEmpty()) {
        // take out the first value
        let top = pq.poll();
        // get the top value and destructure it
        let {x, y, l} = top;
        // rename for readablity
        let price = x, city = y, stops = l;
        // when our city equals our destination return the price
        if (city === dst) return price;
        // otherwise make sure the number of stops is more than zero
        if (stops > 0) {
            // see if our value already exists in our map and if not make a new one
            let adj = prices.get(city) || new Map();
            // if our map contains properties walk the keys
            for (let a of adj.keys()) {
                // adjust the price buy adding to it the current value
                // add the key as the source, and decrement the number of stops by one for each iteration
                pq.offer(price + adj.get(a), a, stops - 1);
            }
        }
    }
    return -1;
};


findCheapestPriceDij( 3, [[0,1,100], [1,2,100], [0,2,500]], 0, 2, 0) /*?*/

findCheapestPriceDij(8,
    [[3,4,7],[6,2,2],[0,2,7],[0,1,2],[1,7,8],[4,5,2],[0,3,2],[7,0,6],[3,2,7],[1,3,10],[1,5,1],[4,1,6],[4,7,5],[5,7,10]],4 ,3 ,7) /*?*/
