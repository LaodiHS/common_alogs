class Node{
    constructor(val){
    this.val= val
    this.next=null
    this.pervious= null
        }
    }
    
    
    
    class List{
    constructor(){
    this.root=null
    this.iterator=null
    this.previous=null
    this.location
   
    }
    
    
    
    add(val){
    
    if(!this.root){
    this.root=new Node(val)
    this.iterator= this.root
    this.iterator.previous=null
    this.previous= this.iterator;
    this.location=this.root;
    }else{
        
    this.iterator.next= new Node(val)
    this.iterator = this.iterator.next
    this.iterator.pervious=this.previous
    this.root /*?*/
    }
    }   
     *_f(){ 
          if(this.location){
    while(this.location){
      
           
    yield this.location;
    this.location = this.location.next
}         
            }else{
                yield "start"}
     }

    
    *_b(){
           if(this.location){
    while(this.location){
     
       
    this.location = this.location.pervious;
    yield this.location;
    }
 
        }else{
            yield {value:{val:"end"}}
        }

    }
   next(){

     return  this.forwardBase.next().value.val /*?*/
       
        
    }
    back(){
        return  this.backBase.next() /*?*/
        //.value.val 
    }
    linkList(){
        this.backBase= this._b()[Symbol.iterator]()
       this.forwardBase =   this._f()[Symbol.iterator]()
    }
    }
    

    let linkList= new List()

    let array= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], get = array[Symbol.iterator].bind(array)
    const it= get();
    console.log(it.next(),it.next(),it.next())
    
    
        array.forEach(x=> linkList.add(x))
        linkList.linkList()
        linkList.next()/*?*/
        linkList.next() /*?*/
        linkList.back()/*?*/
        linkList.back()