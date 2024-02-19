export function binarySearch(target, arr, start, end) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(target, arr, start, mid - 1);
  }

  if (arr[mid] < target) {
    return binarySearch(target, arr, mid + 1, end);
  }

  return -1;
}
