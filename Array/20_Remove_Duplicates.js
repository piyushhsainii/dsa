function removeDuplicates(nums) {
  var i = 0;
  for (let j = 1; j <= nums.length - 1; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }
  return nums;
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5, 6, 6]));

// Two pointer approach
