// answer and problem do not make sense.
function root(x,n){
let low=0;
let high=Math.max(1,x);
  
let approxRoot=(low+high)/2
  while( (approxRoot-low)>=0.001 ){



    if(Math.pow(approxRoot,n)>x)high=approxRoot;
    else if(Math.pow(approxRoot,n)<x)low=approxRoot;
    else break
    break
  }
 return  approxRoot=(high +low)/2
 
    
   //return Number.parseFloat(Math.pow( x,0.52) ).toPrecision(4)



  
}

root(27,3) /*?*/