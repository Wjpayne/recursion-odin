function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  if (left.length === 0) return right;
  if (right.length === 0) return left;

  if (left[0] < right[0]) {
    return [left[0], ...merge(left.slice(1), right)];
  } else {
    return [right[0], ...merge(left, right.slice(1))];
  }
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr));
