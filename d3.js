var width = 900,
    height = 600;

var color = d3.scale.category10();

var force = d3.layout.force()
.gravity(0.1)
.charge(-120)
    .linkDistance(200)
    .size([width, height]);




const svg = d3.select("#canvas").append("svg")
    .attr("width", width)
    .attr("height", height);

let graph = {
  nodes:[
    [1, 1],
    ["sam", 2],
    ["marry", 3],
    ["marry2", 4]
  ],
  links:[
    {"source":0,"target":1,"value":0},
    {"source":0,"target":1,"value":1},
    {"source":0,"target":0,"value":0},
    {"source":2,"target":3,"value":2}
  
]
}

let arr = [1,2,3];
const g = {nodes:[],links:[]}


function traverse(arr, k = 0){
if(arr.length === k){
return g.nodes.push(arr.slice());
}

for(let i = k; i< arr.length; i++){

   arr[i]=[arr[k],arr[k]=arr[i]][0];
   traverse(arr, k+1);
   arr[i]=[arr[k],arr[k]=arr[i]][0];

}

}
// traverse(arr);

// console.log(g.nodes);

let count = 0;

function traverse2(arr){
let result = []
let queue = [[]];

while(queue.length){
const front = queue.shift();
const idx = front.length;
if(idx===arr.length){
result.push(front);

} else {

let value = arr[idx];
for(let i = 0; i <= idx; i++){

let temp = front.filter(x=>x !== null);



if(temp[i]){



}else{
temp[i] = value;
}
queue.unshift(temp);


}

}

if(count++ >400)break;

}


return result




}

console.log(traverse2([1,2,3]));











svg.append('defs').append('marker')
.attrs({'id':'arrowhead',
    'viewBox':'-0 -5 10 10',
    'refX':13,
    'refY':0,
    'orient':'auto',
    'markerWidth':13,
    'markerHeight':13,
    'xoverflow':'visible'})
.append('svg:path')
.attr('d', 'M 0,-5 L 10 ,0 L 0,5')
.attr('fill', '#999')
.style('stroke','none');






  force.nodes(graph.nodes)
      .links(graph.links)
      .start();

  graph.links.forEach( d => {
    d.group = Math.floor(Math.random() * 6)
  });

  var link = svg.selectAll(".link")
      .data(graph.links)
      .enter().append("line")
      .attr("class", "link")
      .attr('marker-end','url(#arrowhead)')
      .style("stroke-width", function(d) { return Math.sqrt(d.value); })
      .style("stroke", function(d) { return color(d[1]); });

  var node = svg.selectAll(".node")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      .style("fill", function(d) { return color(d[1]); })
      .call(force.drag);

  


   




      node.append("title")
      .text(d=> d[0] );

      var cell = node.append("path")
      .attr("class", "cell");


  



  force.on("tick", function() {
    link.attr("x1", d=>  d.source.x)
        .attr("y1", d=> d.source.y )
        .attr("x2", d=> d.target.x)
        .attr("y2", d=> d.target.y);
        

      

       
   
    node.attr("cx", d=>  d.x)
        .attr("cy", d=> d.y);


  });


