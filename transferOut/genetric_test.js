const fs = require('fs')
const os = require('os')
fs.readFile('/Users/dickcata/Desktop/test-B/input.txt', 'utf8', (err, data) => {
    if (err) throw err;

    data = data.split(os.EOL)
    let i = 0;
    let c = data.shift()
    let [a, b] = [c, data.reduce((acc, val, index) => {
        if ((index + 1 % 2) === 0) {
            acc[i].push(val)
            acc[++i] = []
        } else acc[i].push(val)
        return acc
    }, [
        []
    ])]
let parent=[]
    for ([str, ptr] of b) {

        locations(str, ptr)
        function locations(str, ptr) {
            for (let i = 0; i < str.length; i++) {
                let positions=""
                if (str[i] === ptr[0]) {
                    let a = 0,
                        b = 0,
                        temp = str[i]
                    while (str[++a + i] === ptr[++b]) {
                        temp = temp.concat(ptr[a])
                        if (temp === ptr) {
                            positions=positions.concat(i + 1 +" ")
                             positions
                            break;
                        }
                    }

          


                }
              
if(positions.length) parent.push(positions)
            }
           
     parent       
       
       
           



        }
    }

 parent= parent.join("\r\n")

parent

if(true){
fs.writeFile(`/Users/dickcata/Desktop/test-B/output.txt`,parent,function (err){
    if(err){
        console.log(err)
    }
    console.log('saved')
})


}










});