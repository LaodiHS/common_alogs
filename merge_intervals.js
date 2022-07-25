

var merge = function (intervals) {
    let sort = [], result = [];
    for (let { start, end } of intervals)sort[start] = [start, Math.max(((sort[start] || {})[1] || false), end)];
    intervals = sort.filter(x => x).map(x => ({ start: x[0], end: x[1] }));
    let merged = intervals.length ? [intervals[0]] : [];
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i], previous = merged[merged.length - 1];
        previous.end >= current.start ? previous.end = Math.max(current.end, previous.end):merged.push(current);
    }
    return merged;
};

merge([{start:2,end:3},{start:5,end:5},{start:2,end:2},{start:3,end:4},{start:3,end:4}])/*?*/ 

