function traverse(a) {
    if (Array.isArray(a)) {
        a[2] && traverse(a[2]);
        a[0] && document.write(a[0] + '<br>');
        a[1] && traverse(a[1]);			
    }
}

var root = [5, [7, [2, [1]], [4]], [9, [3], [8, [10], [6]]]];
console.log('<pre>' + JSON.stringify(root, 0, 4) + '</pre>');
traverse(root);