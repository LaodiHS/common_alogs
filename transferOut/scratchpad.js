var data = new Uint16Array([13, 22]);
let value = [].reduce.call(data, function (r, a) {
    return (r << 8) + a;
}, 0) & ((1 << 15) - 1);






