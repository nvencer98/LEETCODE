/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
let newArray = []
let runningSum = 0

    for(i = 0; i < nums.length; i++){
        runningSum = runningSum + nums[i]
        newArray.push(runningSum)
    }
    return newArray
};
