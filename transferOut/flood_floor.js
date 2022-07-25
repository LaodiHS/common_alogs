var floodFill = function(image, sr, sc, newColor) {
    const old = image[sr][sc]
    if((image[sr]||{})[sc]===newColor)return image;
    function dpf(row, col,color,image){
    let place =  (image[row]||{})[col];
        if(typeof place ==="number" && place!==color && place === old){
            image[row][col]=color
            dpf(row+1,col,color,image)
            dpf(row-1,col,color,image)
            dpf(row,col+1, color,image)
            dpf(row,col-1,color,image)
        }
    }
        dpf(sr,sc,newColor,image)   
         return image
};

