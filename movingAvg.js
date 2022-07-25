var MovingAverage = function(size) {
    this.size=size
    this.window=[]
    this.total=0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
       if(this.window.push(val)<=this.size)this.total+=val;
        else{
          this.total-=this.window.shift();
            this.total+=val;
        }
    return this.total/this.window.length;
}
