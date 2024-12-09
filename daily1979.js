/**
 * @param {number[]} nums
 * @return {number}
 */
let a;
let b;
var findGCD = function(nums) {
    a=(Math.min(...nums))
    b=(Math.max(...nums))
    var gcd = function(a, b) {
        if (!b) {
          return a;
        }
        return gcd(b, a % b);
      }
      return gcd(b,a % b);
};

findGCD([2,5,6,9,10])