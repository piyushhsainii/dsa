var twoSum = function (nums, target) {
  const indexArray = [];
  for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] + nums[j] == target) {
        console.log(i, j);
        indexArray.push(i);
        indexArray.push(j);
        return indexArray;
      }
    }
  }
  return indexArray;
};

console.log(twoSum([3, 2, 4, 1], 6));
