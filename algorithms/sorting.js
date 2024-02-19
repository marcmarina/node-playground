export function quicksort(array) {
  const arr = [...array];

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];

  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    const el = arr[i];

    if (el < pivot) {
      left.push(el);
    } else {
      right.push(el);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}
