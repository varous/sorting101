//Djikstra's Algorithm
//Inputs adjM = m x n matrix = [[]]
//of the form [[a11, a12,..., a1n],[a21, a22, ..., a2n],...[am1, am2,..., amn]]
//and start node adjM[i0]
//and end node adj[if],
//where i0, if < = m
//output = [], array of nodes visited for shortest path
//and shortest distance



//function to find out least non-zero element in an array

function leastElement(array)
  {
    
    let tmpA = array;
    let leastE
    
    
    leastE = Math.min(...tmpA);
    
    
    return leastE
    
  }
console.log(leastElement([12,0,4,5]));
//function to find out index of least Element


function djikstra(adjM, a, b)
{
  let sum = 0;
  let adMat = adjM;
  let visited = [];
  let initNode = a;
  let finalNode = b
  function djikstraRec(adMat, initNode, finalNode)
  {
    if (initNode === finalNode)
      {
        return {
          shortestDistance: sum,
          visitedNodes: visited
        }
        
      }
    else
      {
        visited.push(adMat[initNode])
        console.log(visited)
        let x = leastElement(adMat[initNode]);
        console.log(adMat[initNode])
        let y = adMat[initNode].indexOf(x);
        console.log(x);
        console.log(y);
        
        sum += x;
        console.log(sum);
        
        console.log(adMat);
        
        initNode = adMat[y]
        
        djikstraRec(adMat, initNode, finalNode)
      }
    return {
      shortestDistance: sum,
      visitedNodes: visited
    }
  }
  return djikstraRec(adMat, initNode, finalNode)
};

let tmp = djikstra([[0,2,3,5,7,8],[3,0,7,5,2,9],[14,6,0,5,8,0],[18,4,67,0,1,14],[12,4,7,19,0,1],[2,34,5,13,12,0]], 0, 4);
console.log(tmp);





































