var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
    this.length = nums.length;
    
    for (let i = 0; i < k && i < this.length; i++)this.build(i);
    for (let i = k; i < this.length; i++)this.add(this.nums[i]);
    
};

/**
 * @param {number} i
 */
KthLargest.prototype.build = function (index) {
    let half = Math.floor((index - 1) / 2),temp = this.nums[index];
    while (0 <= half && index != 0) {
        if (this.nums[half] < temp) {
            break;
        }
        this.nums[index] = this.nums[half];
        index = half;
        half = Math.floor((index - 1) / 2);
    }
    this.nums[index] = temp;
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let i = 0,j= 2 * i + 1, tmp = val;
    

    if (this.length < this.k) {
        this.nums[this.length] = val;
        this.build(this.length);
        this.length++;
        
        return this.nums[0];
    }
    if (val < this.nums[0]) {
        return this.nums[0];
    }

    while (j < this.k) {

        if (j + 1 < this.k && this.nums[j + 1] < this.nums[j]) j++;
        if (tmp < this.nums[j])break;
        this.nums[i] = this.nums[j];
        i = j;
        j = 2 * i + 1;
    }
    this.nums[i] = tmp;
    return this.nums[0];
};


// let ki =new KthLargest(1,[])

// ki.add(-3) /*?*/
// ki.add(-2) /*?*/
// ki.add(-4) /*?*/
// ki.add(0) /*?*/
// ki.add(4) /*?*/

let k =new KthLargest(2,[0])

k.add(-1) /*?*/
k.add(1) /*?*/
k.add(-2) /*?*/
k.add(-4) /*?*/
k.add(3) /*?*/


// let ki =new KthLargest(3,[1,1])

// ki.add(1) /*?*/
// ki.add(1) /*?*/
// ki.add(3) /*?*/
// ki.add(3) /*?*/
// ki.add(3) /*?*/




