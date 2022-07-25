var intToRoman = function(num) {
    let M= ["", "M", "MM", "MMM"],
       C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
       X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
       I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
       
       return M[Math.trunc(num/1000)] + C[Math.trunc((num%1000)/100)] + X[Math.trunc((num%100)/10)] + I[num%10];
       
   }
   var intToRoman = function(num) {
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let romanNum = '';
    
    for(let i = 0 ; i < decimal.length; i++) {
        while (num % decimal[i] < num) {
            romanNum += roman[i];
            num -= decimal[i];
        }
    }
    
    return romanNum
};