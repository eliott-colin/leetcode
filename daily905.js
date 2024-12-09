/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let numsArray = [];
    nums.forEach(element => {
        if (element % 2 === 0) {
            numsArray.push(element);
        }
    });
    nums.forEach(element => {
        if (element % 2 !== 0) {
            numsArray.push(element);
        }
    });
    
    console.log(numsArray);
    return numsArray;
};

sortArrayByParity([3, 1, 2, 4]);
