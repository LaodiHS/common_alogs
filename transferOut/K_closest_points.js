//K Closest Points to Origin


const distance = point =>  point[0] * [0] + point[1] * point[1];


function partition(points, lo, hi) {
    
    const mid = distance(points[hi-1]);
    
    let i = lo;
    
    for (let j = lo; j < hi - 1; j++) {
        if (distance(points[j]) <= mid) {
            points[i] = [points[j], points[j] = points[i]][0]
            i+=1;
        }
    }
    
    points[i] = [points[hi-1], points[hi-1] = points[i]][0];

    return i;
}

function quickSelect(points, k, lo, hi) {
    
    while (lo < k && hi > k) {
        
        const i = partition(points, lo, hi);
        if (i < k) {
            lo = i+1;
            continue;
        }
        hi = i;       
    }
    return points.slice(0,k)
}

var kClosest = function(points, K) {

    return quickSelect(points, K, 0, points.length);

};

function sum1toN(n){

    return n*(n+1)/2

}

function sumMultiples(limit, a){

    return sum1toN((limit-1) /a  ) * a 

}

