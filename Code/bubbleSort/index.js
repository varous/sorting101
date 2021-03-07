//function for bubble sort

//input = array called "list"

const bubbleSort = function BubbleSort(list)
{
	let arrayToSort = list
	let sortedList = []											//empty list to store sorted elements
	
	const sortedArray = function sortRec(arrayToSort)			//function for recursion
	{
		if(arrayToSort.length == 0)								//recursion ends when arrayToSort is empty
			{
				return sortedList
			}
		else
			{
				for(let i = 0; i < arrayToSort.length; i++)
				{
					if(arrayToSort[i] > arrayToSort[i+1])	
						{
							let tmp = arrayToSort[i]
							arrayToSort[i] = arrayToSort[i+1]	//swap elements if out of order
							arrayToSort[i+1] = tmp

						}
					else(arrayToSort = arrayToSort)
				}
				sortedList.unshift(arrayToSort[arrayToSort.length - 1])	//add highest element to sortedList
				arrayToSort.splice(arrayToSort.length - 1, 1)	//remove highest element from arrayToSort
				
				sortRec(arrayToSort)							//call recursive function on updated array
			}
		return sortedList
	
	}
	return sortedArray(list)									//return sorted list
}

console.log(bubbleSort([-12, 34, -10, 34, 9, 179, -198, 2000, 45, -24, 56]))