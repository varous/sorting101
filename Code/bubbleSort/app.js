/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
    const dessertCost = []
    
		let cal2
    
   
        let i = 0 
		let j = 0
		let sum = 0
        
        let nextEl = function()
        {

			
			while (j < toppingCosts.length)
			{
				sum1 = toppingCosts[j]
				sum2 = 2 * sum1
				dessertCost.push(sum1, sum2)
				console.log(dessertCost)
				j++
				
			}
				
			return dessertCost
		}
        
    
    
    const costDiff = []
    
    for(let el = 0; el < dessertCost.length; el++)
        {
            cal2 = (target - dessertCost[el])
            costDiff.push(cal2)
        }
 
    
  function addDecimalMakePositive(m)
  {
    if (m < 0)
      {
        m = m - .1
      }
    else
      {
        m = m
      }
    m = Math.abs(0 - m)
    return m
  }
    
    for(let i = 0; i < costDiff.length; i++)
      {
        costDiff[i] = addDecimalMakePositive(costDiff[i])
      }
  
    let minDiff = Math.min(...costDiff)
    let minDiffIndex = costDiff.indexOf(minDiff)
    
    
    let toReturn = dessertCost[minDiffIndex]
    return toReturn
   
    
};

console.log(closestCost([2,3],[4,5,100],18))





