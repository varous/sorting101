// function for min and max heapifying


// input = unsorted list, and max/min heap
// type = 0 for min
// type = 0 for max

// Output = tree as an array where every node is an array of length 1,
// and is a member of its parent array


const heapSort = function HeapSort(list)
{
    const arraytoSort = list
    let treeArray = []
    
    
 const tree = function addNode(array, i)
    {
		
        let currentParent = array
		//console.log(currentParent)
		let nodeL, nodeR, val
        
        while(i < arraytoSort.length)
        {
			val = arraytoSort[i]
            nodeL = [arraytoSort[i+1]]
			nodeR = [arraytoSort[i+2]]	
          	currentParent.push([val],[nodeL, nodeR])
			treeArray.push(currentParent)
			addNode(nodeL, i+3)
			addNode(nodeR, i+4)
			
		}
		
		return currentParent
    }

 tree(treeArray, 0)
			
}
 
        
   

function test(array)
{
    let out = heapSort(array)
    console.log(out)
   
}

test([1,324,23,13,13,12,5,6,7])