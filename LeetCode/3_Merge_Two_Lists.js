var mergeTwoLists = function (list1, list2) {
  let low1 = 0;
  let low2 = 0;
  const newArray = [];

  while (low1 < list1.length && low2 < list2.length) {
    if (list1[low1] <= list2[low2]) {
      newArray.push(list1[low1]);
      low1++;
    } else {
      newArray.push(list2[low2]);
      low2++;
    }
  }
  while (low1 < list1.length) {
    newArray.push(list1[low1]);
    low1++;
  }
  while (low2 < list2.length) {
    newArray.push(list2[low2]);
    low2++;
  }
  return newArray;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
