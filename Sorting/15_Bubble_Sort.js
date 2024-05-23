function BubbleSort(num) {
  for (let i = 0; i <= num.length - 1; i++) {
    //iterating over length of the array
    for (let j = 0; j <= num.length - i; j++) {
      // after the initial sort, we leave
      let temp; // the last element and perform sort again
      if (num[j] > num[j + 1]) {
        // if required, we swap the no
        temp = num[j + 1];
        num[j + 1] = num[j];
        num[j] = temp;
      }
    }
  }
  return num; //return the modified array.
}

const num = [4, 2, 6, 9, 7, 1, 8];

console.log(BubbleSort(num));
