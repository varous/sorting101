// function for merging lists 

// inputs for merging lists = sorted lists listA and listB
// output = sorted list mergedList



const mergeLists = function MergeList(listA, listB)

{
    let sortedArray1 = listA
    let sortedArray2 = listB
	let mergedList = []

    function merge(sortedArray1, sortedArray2)
    {
		let dimArray1 = sortedArray1
		let dimArray2 = sortedArray2
		
		
        
		while(dimArray1.length > 0 && dimArray2.length > 0)
        {
            if(dimArray1[0] <= dimArray2[0])
            {
                mergedList.push(dimArray1[0])
                dimArray1.splice(0, 1)
                merge(dimArray1, dimArray2)
			}
            else 
            {
                mergedList.push(dimArray2[0])
                dimArray2.splice(0, 1)
                merge(dimArray1, dimArray2)
            }
            
         }
		
		if(dimArray1.length > 0 && dimArray2.length == 0)
        {
			for(let i = 0; i < dimArray1.length; i++)
				{
					mergedList.push(dimArray1[i])
					dimArray1.splice(0,1)
				}        

        }

        else if(dimArray2.length > 0 && dimArray1.length == 0)
        {
			for(let i = 0; i < dimArray2.length; i++)
				{
					mergedList.push(dimArray2[i])
					dimArray2.splice(0,1)	
				}
        }
       
        return mergedList
    }
    
    return (merge(sortedArray1, sortedArray2))
	
}

// function for merge sort

// input = unsorted array list
// output = sorted array sortedList

const mergeSort = function MergeSort(list)
{

    let break1 = list
    let sortedList
	
	let leftBreak, rightBreak

	
	let n = break1.length
	
	if(n == 1)
		{
			
			return break1
		}
	else if (n > 1)
		{

			let pivot = Math.ceil(n/2)
			let z = n - pivot
			let tmp1 = break1.splice(-z)
			let tmp2 = break1

			leftBreak = tmp2
			rightBreak = tmp1


			leftBreak = mergeSort(leftBreak)
			rightBreak = mergeSort(rightBreak)
			
			sortedList = mergeLists(leftBreak, rightBreak)
			
			return sortedList
			
		}

	
}

function test(array)
{
	let sortedOutput = mergeSort(array)
	console.log(sortedOutput)
}

//test()