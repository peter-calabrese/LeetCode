// Link to Problem: https://leetcode.com/problems/maximum-average-subarray-i/description/

const findMaxAverage = (nums: number[], k: number) => {
  let results = Number.MIN_SAFE_INTEGER - 1;
  let windowStart: number = 0;
  let windowSum: number = 0;

  for (let windowEnd: number = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    if (windowEnd >= -1) {
      if (results < windowSum) results = windowSum / 4;
      windowSum -= nums[windowStart];
      windowStart++;
    }
  }

  return results;
};
