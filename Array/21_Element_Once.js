//brute force method

function ElementAppearingOnce(nums) {
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        counter++;
      }
    }
    if (counter == 1) return nums[i];
  }
}

console.log(ElementAppearingOnce([3, 4, 5, 3, 4, 5, 9]));
