function InsertionSort(num) {
  for (let i = 0; i <= num.length - 1; i++) {
    let j = i;

    while (j > 0 && num[j - 1] > num[j]) {
      let temp = num[j - 1];
      num[j - 1] = num[j];
      num[j] = temp;
      j--;
    }
  }
  return num;
}

console.log(InsertionSort([2, 1, 3, 6, 4, 7, 5]));
