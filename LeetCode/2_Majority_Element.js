// brute force method
var majorityElement = function (nums) {
  for (let i = 0; i <= nums.length - 1; i++) {
    let counter = 0;
    for (let j = 0; j <= nums.length - 1; j++) {
      if (nums[i] == nums[j]) {
        counter++;
      }
    }
    if (counter > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }

  return [];
};

//optimal approach
// Moore-s; voting Algorithm
function MooreVotingAlgorithm(nums) {
  let counter = 0;
  let element = null;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (counter == 0) {
      element = nums[i];
      counter++;
    } else if (nums[i] == element) {
      counter++;
    } else {
      counter--;
    }
  }

  // verify if the element exist more than n/2
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] == element) {
      counter++;
    }
  }
  if (counter > Math.floor(nums.length / 2)) return element;
}

console.log(MooreVotingAlgorithm([4, 5, 4]));
