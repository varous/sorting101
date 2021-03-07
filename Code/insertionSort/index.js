//function for insertion sort

//input = array called "list"


const insertionSort = function InsertionSort(list)
{
	let arrayToSort = list
	
	let pivot, tmp
	
												//initialize main counter to 2nd element
	let i = 1
	
	
		
	while(i < arrayToSort.length)
		{
			let j = 0							//initialize comparison counter to first element
			pivot = arrayToSort[i]				//pick i-th element as pivot
			

			while(j < i)
				
				{
				if(arrayToSort[j] > pivot)		//compare elements starting with 1st element to pivot
					{

						tmp = arrayToSort[j]	//assign element greater than pivot to temporary variable
						
						arrayToSort[j] = pivot	//assign pivot to lower index
						arrayToSort[i] = tmp	//assign higher element stored in tmp to higher index i
						pivot = arrayToSort[i]	//set pivot to new i-th element
						


					}
				else{
					arrayToSort = arrayToSort
					}
					
					
				j++								//increment comparison index by 1 
					
					//console.log(j)
				}
			
			i++									//increment main counter by 1
					
		}
	return arrayToSort

	}
	

