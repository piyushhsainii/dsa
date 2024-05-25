function merge(arr, low, mid, high) {
  let left = low;
  let right = mid + 1;
  const tempArray = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      tempArray.push(arr[left]);
      left++;
    } else {
      tempArray.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    tempArray.push(arr[left]);
    left++;
  }
  while (right <= high) {
    tempArray.push(arr[right]);
    right++;
  }
  for (let i = 0; i < tempArray.length; i++) {
    arr[low + i] = tempArray[i];
  }
}

function mergeSort(arr, low, high) {
  if (low == high) return;
  const mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid); // arr, low ,  mid
  mergeSort(arr, mid + 1, high); // arr, mid+1, high
  merge(arr, low, mid, high);
  return arr;
}

const arr = [5, 4, 3, 2, 1, 7, 6];

console.log(mergeSort(arr, 0, arr.length - 1));
