function MaxConsecutiveNo(nums) {
  let maxCount = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      counter++;
      if (maxCount < counter) {
        maxCount = counter;
      }
    } else {
      counter = 0;
    }
  }
  return maxCount;
}

console.log(MaxConsecutiveNo([1, 1, 0, 0, 1, 1, 1, 0, 1]));
