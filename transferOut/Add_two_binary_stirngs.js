var addBinary1 = function (a, b) {
    let length = Math.max(a.length, b.length)
    let stringA = a.padStart(length, '0')
    let result = ''
    let stringB = b.padStart(length, '0')
    let carry = 0
    for (let i = length - 1; i >= 0; i--) {
      let numberA = ~~(stringA[i])
      let numberB = ~~(stringB[i])
      let currentResult = numberA + numberB + carry
      result = (currentResult % 2) + result
      carry = currentResult >= 2 ? 1 : 0
    }
    
    if (carry === 1) {
      result = '1' + result
    }
    return result
  }

addBinary1("11","1") /*?*/

  var addBinary = function(a, b) {
    var maxlen = Math.max(a.length, b.length);
    a = a.padStart(maxlen, '0');
    b = b.padStart(maxlen, '0');
    
    var carry =  0;
    var sum = 0;
    var res = "";
    for(var i = maxlen - 1; i >= 0; i--) {
        sum = parseInt(a.charAt(i)) + parseInt(b.charAt(i)) + carry;
        carry
        carry = sum >= 2 ? 1 : 0;

        if (sum == 2) res = '0' + res;
        else if (sum == 3) res = '1' + res;
        else res = sum.toString() + res;
    }

    if (carry) res = '1' + res;

    return res;
};


addBinary("1010","1011") /*?*/