/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    totalSum = 0
    leftIndex = 0
    nums.forEach((e)=>{
        totalSum += e
    })
    for (i=0; i < nums.length; i++){
        if (totalSum - leftIndex - nums[i] === leftIndex){
        return (i)
        }
        leftIndex += nums[i]
    }
    return -1
};