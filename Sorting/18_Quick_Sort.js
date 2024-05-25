function QuickSort(arr, low, high) {
  if (low < high) {
    const pivotIndex = Qs(arr, low, high);
    QuickSort(arr, low, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

const arr = [4, 6, 2, 5, 7, 9, 1, 3];

function Qs(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    // loop runs until both pointers cross each other
    while (arr[i] <= pivot && i < high) {
      //pointer will stop when a no bigger than pivot is found
      i++;
    }
    while (arr[j] > pivot && j > low) {
      //pointer will stop when a no. smaller than pivot is found
      j--;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  //    when pointers have finally crossed each other, then we swap the pivot with the J pointer
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j; //returns the index of pivot
}

console.log(QuickSort(arr, 0, arr.length - 1));
