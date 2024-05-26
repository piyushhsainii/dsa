// better approach
function SecondLargestElement(nums) {
  let largestEl = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > largestEl) {
      largestEl = nums[i];
    }
  }
  let secondLargestEL = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > secondLargestEL && nums[i] < largestEl) {
      secondLargestEL = nums[i];
    }
  }
  return secondLargestEL;
}
// console.log(SecondLargestElement([2, 3, 6]));

// Optimal Approach
function SecondLargestElement2(nums) {
  let largestEl = nums[0];
  let secondLargestEL;

  for (let i = 1; i <= nums.length - 1; i++) {
    if (nums[i] > largestEl) {
      secondLargestEL = largestEl;
      largestEl = nums[i];
    }
  }
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] > secondLargestEL && nums[i] < largestEl) {
      secondLargestEL = nums[i];
    }
  }
  return secondLargestEL;
}

console.log(SecondLargestElement2([2, 3, 6]));
