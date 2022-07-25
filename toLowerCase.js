function toLowerCase(str){
str = str.split('')
    for(let i = 0; i< str.length; i++){
        if(str[i].charCodeAt() >= 'A'.charCodeAt() && str[i].charCodeAt() <='Z'.charCodeAt()){
             str[i] = String.fromCharCode(str[i].charCodeAt() + 32)  
        }
    }
return str.join('') 

}



toLowerCase('Hello')/*?*/