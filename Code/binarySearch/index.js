//function for Binary Search in a Sorted List

//input = sortedList and item to find

const binarySearch = function(sortedList, item)
{
	let arrayToSearch = sortedList
	let entryToFind = item
	let pivot
	let nComparisons = 1
	
	const searchRec = function(arrayToSearch, entryToFind)
	
	{
		let n = arrayToSearch.length
		if(n % 2 == 1)
			{
				pivot = (n-1)/2
			}
		else
			{
				pivot = n/2
			}
		console.log(pivot)
		if(n == 0)
			{
				console.log("Not Found")
				returnObject = 
					{
						entry: null,
				   		found: false,
				   		numberOfComparisons: nComparisons
					}
			}
		else if(arrayToSearch[pivot] == entryToFind)
			{
				console.log("Item found")
				returnObject = 
					{
						entry: arrayToSearch[pivot],
						found: true,
						numberOfComparisons: nComparisons
					}
				
			}
		else if(arrayToSearch[pivot] > entryToFind)
			{
				arrayToSearch.splice(pivot)
				nComparisons +=1
				searchRec(arrayToSearch, entryToFind)
			}
		else if(arrayToSearch[pivot] < entryToFind)
			{
				arrayToSearch.splice(0, pivot+1)
				nComparisons+=1
				searchRec(arrayToSearch, entryToFind)
			}
		return returnObject
	}
	return searchRec(arrayToSearch, entryToFind)
}

