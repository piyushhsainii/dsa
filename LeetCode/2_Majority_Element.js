var majorityElement = function (nums) {
  const hash = Array(200000).fill(0);
  var majorityElement;

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]]++;
  }
  console.log(hash);
  for (let i = 0; i <= nums.length; i++) {
    console.log(hash[4]);
    if (hash[i] > Math.floor(nums.length / 2)) {
      majorityElement = i;
      return majorityElement;
    }
  }

  return majorityElement;
};

console.log(majorityElement([4, 5, 4]));
