// with path compression. 
var accountsMerge = function (accounts) {
    const id = new Map()
    let hash = new Map();
    for (let [index, account] of Object.entries(accounts)) {
        index = +index;
        for (let set of account) {
            if (!set.includes('@')) continue;
            if (hash.has(set)) union(index, hash.get(set))
            else hash.set(set, index)
        }
    }
    let removeIndexes = [];
    for (let key of id) {
        for (let k of key) {
            if (id.get(k) === k) continue;
            accounts[k].forEach(val => {
                accounts[id.get(k)].push(val)
            });
            removeIndexes.push(k)
        }
    }

    removeIndexes.forEach(index => delete accounts[index])
    return accounts.map(ar => [...new Set(ar)].sort()).filter(x => x)

    function find(n) {
        n = +n
        if (!id.has(n)) id.set(n, n)
        return id.get(n) === n ? n : (id.set(n, find(id.get(n))), id.get(n))
    }

    function union(a, b) {
        a = find(a)
        b = find(b)
        if (a !== b) {
            id.set(a, b)
        }
    }
    return accounts
};

// accountsMerge([
// ["Alex","Alex5@m.co","Alex4@m.co","Alex0@m.co"],
// ["Ethan","Ethan3@m.co","Ethan3@m.co","Ethan0@m.co"],
// ["Kevin","Kevin4@m.co","Kevin2@m.co","Kevin2@m.co"],
// ["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe2@m.co"],
// ["Gabe","Gabe3@m.co","Gabe4@m.co","Gabe2@m.co"]])/*?*/

// accountsMerge([
// ["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],
// ["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],
// ["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],
// ["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],
// ["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]) /*?*/

// accountsMerge([
// ["David","David0@m.co","David4@m.co","David3@m.co"],
// ["David","David5@m.co","David5@m.co","David0@m.co"],
// ["David","David1@m.co","David4@m.co","David0@m.co"],
// ["David","David0@m.co","David1@m.co","David3@m.co"],
// ["David","David4@m.co","David1@m.co","David3@m.co"]])
 /*?*/
//[["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],
//["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],
//["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],
//["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],

//["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]


// [["Alex","Alex0@m.co","Alex4@m.co","Alex5@m.co"],
// ["Ethan","Ethan0@m.co","Ethan3@m.co"],
// ["Gabe","Gabe0@m.co","Gabe2@m.co","Gabe3@m.co","Gabe4@m.co"],
// ["Kevin","Kevin2@m.co","Kevin4@m.co"]]


accountsMerge( [ 
["Hanzo","Hanzo2@m.co","Hanzo3@m.co"],
["Hanzo","Hanzo4@m.co","Hanzo5@m.co"],
["Hanzo","Hanzo0@m.co","Hanzo1@m.co"],
["Hanzo","Hanzo3@m.co","Hanzo4@m.co"],
["Hanzo","Hanzo7@m.co","Hanzo8@m.co"],
["Hanzo","Hanzo1@m.co","Hanzo2@m.co"],
["Hanzo","Hanzo6@m.co","Hanzo7@m.co"],
["Hanzo","Hanzo5@m.co","Hanzo6@m.co"]]) /*?*/



// [["Hanzo","Hanzo0@m.co","Hanzo1@m.co",
// "Hanzo2@m.co","Hanzo3@m.co","Hanzo4@m.co",
// "Hanzo5@m.co","Hanzo6@m.co","Hanzo7@m.co",
// "Hanzo8@m.co"]]




var accountsMerge2 = function (accounts) {
    const id = {}
    const map = new Map()
    let hash = {}
    for (let [index, account] of Object.entries(accounts)) {
    
        for (let set of account) {
            if (!set.includes('@')) continue;
            index
            if (hash[set]) union(index, hash[set])
            else hash[set] = index
        }
    }

let removeIndexes = []
for(let key in id){
if(key===id[key])continue
accounts[key].forEach(val=> accounts[find(id[key])].push(val))
removeIndexes.push(key)
}

removeIndexes
removeIndexes.forEach(index=> delete accounts[index] )
return accounts.map(ar=>[...new Set(ar)].sort()).filter(x=>x)
    function find(n) {
        if (!id[n]) id[n] = n
        return id[n] === n ? n : find(id[n])
    }
    function union(a, b) {
        a
        b
        a = find(a)
        b = find(b)
        a
        b
        if (a !== b) {
            id[a] = b
        }
    }
return accounts
};


accountsMerge2([ 
    ["Hanzo","Hanzo2@m.co","Hanzo3@m.co"],
    ["Hanzo","Hanzo4@m.co","Hanzo5@m.co"],
    ["Hanzo","Hanzo0@m.co","Hanzo1@m.co"],
    ["Hanzo","Hanzo3@m.co","Hanzo4@m.co"],
    ["Hanzo","Hanzo7@m.co","Hanzo8@m.co"],
    ["Hanzo","Hanzo1@m.co","Hanzo2@m.co"],
    ["Hanzo","Hanzo6@m.co","Hanzo7@m.co"],
    ["Hanzo","Hanzo5@m.co","Hanzo6@m.co"]])