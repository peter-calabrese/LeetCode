var largestSubarray = function (nums: number[], k: number) {
  let arr: number[] = [];
  let windowStart = 0;
  let prev: number[] = [Number.MIN_SAFE_INTEGER];
  for (let windowEnd: number = 0; windowEnd < nums.length; windowEnd++) {
    arr.push(nums[windowEnd]);
    if (arr.length >= k) {
      if (prev[windowStart] < arr[windowStart]) {
        prev = [...arr];
      }
      arr.shift();
    }
  }

  return prev;
};
