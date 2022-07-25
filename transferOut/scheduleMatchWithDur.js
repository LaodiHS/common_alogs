function meetingPlanner(slotsA, slotsB, dur) {
    [slotsA, slotsB] = slotsA.length < slotsB.length ? [slotsA, slotsB] : [slotsB, slotsA]
    const id = {}
    slotsA = slotsA.filter(x=> !(x[0] + dur >= x[1]) )
    slotsB = slotsB.filter(x=> !(x[0] + dur >= x[1]) )
    for (let [startA, endA] of slotsA) {
        for (let [startB, endB] of slotsB) {
            if (startA + dur <= endB && startA >= startB) {
                return [startA, startA + dur]
            } else if (startB + dur <= endA && startB >= startA) {
                return [startB, startB + dur]
            }
        }
    }
}


    meetingPlanner([[10, 50], [60, 120], [140, 210]],[[0, 15],[60, 70]],8) /*?*/
    meetingPlanner([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]],12) /*?*/



     

// assumeing unsorted; 
function meetingPlanner2(slotsA, slotsB, dur) {
    [slotsA, slotsB] = slotsA.length < slotsB.length ? [slotsA, slotsB] : [slotsB, slotsA]
    let id = {}
    for (let [startA, endA] of slotsA) {
        if (startA + dur > endA) continue;
        for (let [startB, endB] of slotsB) {
            if (startB + dur > endB) continue;
            if (startA + dur <= endB && startA >= startB) {
                union(startA, endB)
            } else if (startB + dur <= endA && startB >= startA) {
                union(startB, endA)
            }
        }
    }
    for (let [startA, endA] of slotsA) {
        for (let [startB, endB] of slotsB) {
            if (isConnected(startA, endB)) {
                return [startA, startA + dur]
            } else if (isConnected(startB, endA)) {
                return [startB, startB + dur]
            }
        }
    }
    return []

    function isConnected(a, b) {
        if (!(a in id) || !(b in id)) return false;
        return find(a) === find(b)
    }

    function find(root) {
        if (!id[root]) id[root] = root
        return id[root] === root ? root : find(id[root])
    }

    function union(a, b) {
        a = find(a)
        b = find(b)
        if (a !== b) {
            id[a] = b
        }
    }

}

//optimal since sorted
function meetingPlanner3(slotsA, slotsB, dur) {
    let ai=0
    let bi=0
    
    while(ai<slotsA.length && bi<slotsB.length ){
          let[starta, enda] = slotsA[ai]
          let[startb, endb] = slotsB[bi]
       let start = Math.max(starta,startb)
       let end = Math.min(enda,endb)
       if(start+dur <= end){
           return [start, start+dur]
       }

       if(enda < endb){
           ai++
       }else bi++

        }

    }


meetingPlanner3([[5,15],[10, 50], [60, 120], [140, 210]],[[15,15],[0, 15],[60, 70]],8) /*?*/



//  meetingPlanner3([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]],12) /*?*/
//  meetingPlanner3( [[6,12]], [[2,11]], 5) /*?*/
//  meetingPlanner3(  [[1,10]], [[2,3],[5,7]], 2) /*?*/
//  meetingPlanner3( [[0,5],[50,70],[120,125]], [[0,50]], 8) /*?*/







      
 





    // meetingPlanner2([[10, 50], [60, 120], [140, 210]],[[0, 15],[60, 70]],8) /*?*/



//  meetingPlanner2([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]],12) /*?*/
 //meetingPlanner2( [[6,12]], [[2,11]], 5) /*?*/
 //meetingPlanner2(  [[1,10]], [[2,3],[5,7]], 2) /*?*/
 meetingPlanner2( [[0,5],[50,70],[120,125]], [[0,50]], 8) /*?*/



    