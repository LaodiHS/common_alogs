
// Euler's formula: V - E + F = 2
// V: # Vertices
// E: # Edges
// F: # Faces
// https://en.wikipedia.org/wiki/Planar_graph#Euler's_formula

// V: Two ends of all slashes and 4 corners of the square.
// E: All slashes plus 4 sides of the square. Note that the sides of the square might be splitted to multiple egdes by vertices on them.
// F-1 should be what we return if all edges are connected.
// Eg:
var regionsBySlashes = function (grid) {
// edges and vertices are initially zero and the grid is 
  let edge = 0,
  vertices = 0,
  n = grid.length;
  const id = [(n + 1) * (n + 1)]
id
  // all points lie on a (n+1) * (n+1) grid: represented as integer i * (n+1) + j
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      id[i * (n + 1) + j] = i === 0 || i === n || j === 0 || j === n ? 0 : i * (n + 1) + j;
    }
  }
  id
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((grid[i] || '').charAt(j) === ' ') continue;
      let index1, index2;
      if (grid[i].charAt(j) === '\\') {
        index1 = i * (n + 1) + j;
        index2 = (i + 1) * (n + 1) + j + 1;
      }
      if ((grid[i] || '').charAt(j) === '/') {
        index1 = i * (n + 1) + j + 1;
        index2 = (i + 1) * (n + 1) + j
      }
      connect(index1, index2)
      edge++
    }
  }
  return edge - vertices + 1;

  // # of edges happend in UF

  // figure out how many egdes on each side of square
		// for each side of square:  # edges = # vertices - 1
		// for all sides of square: #edges on 4 sides = # vertices on 4 sides (each corner counted twice) - 4
  function connect(i, j) {
    i = find(i), j = find(j);
    if (i !== j) id[i] = j, vertices++;
  }

  function find(i) {
    if (id[i] !== i) return find(id[i]);
    return id[i]
  }
};
// regionsBySlashes(["\\/","/\\"]) /*?*/
//  regionsBySlashes([  "/\\", "\\/"])/*?*/
//  regionsBySlashes(["//","/ "])/*?*/

  regionsBySlashes([" /\\"," \\/","\\  "]) /*?*/



