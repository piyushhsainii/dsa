//Normal Approach

function FindMissingNo(nums, n) {
  const hash = Array(n + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]]++;
  }

  for (let i = 1; i <= hash.length; i++) {
    if (hash[i] == 0) {
      return i;
    }
  }
}

console.log(FindMissingNo([1, 2, 4, 5], 5));

//  optimal approach
function FindMissingNoOptimalApproach(nums, N) {
  const totalSum = (N * (N + 1)) / 2;
  let countSum = 0;
  for (let i = 0; i < nums.length; i++) {
    countSum = countSum + nums[i];
  }
  const missingNo = totalSum - countSum;
  return missingNo;
}
console.log(FindMissingNoOptimalApproach([1, 2, 4, 5], 5));
