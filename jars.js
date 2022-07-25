// given a number of jars of 


// There are 10 jars each with infinite marbles. 
// All are 11 grams except one jar which has all 2 gram marbles. 
// How would you find which jar by weighing only once?


//Answer 
//Arrange the jars numerically
//Now incrementTotal 1 marble from jar 1, 2 marbles from jar 2 and so on
//Weigh these marbles
//Now subtract from a balanced array to get the index

function balancedJars() {
    let jars = Array(10).fill(Array(10).fill(1))
    let incrementTotal = 1
    incrementTotal = jars.reduce((acc, a) => {
        acc += incrementTotal++ * a[0]
        return acc
    }, 0)
    return incrementTotal
}

function jarIndex(jar) {
    let skewed = 1
    skewed = jar.reduce((aac, a) => {
        aac += skewed++ * a[0]
        return aac
    }, 0)
    return skewed - balancedJars()
}
let jars = Array(9).fill(Array(10).fill(1))
jars.push(Array(10).fill(2))
console.log(jarIndex(jars)) 