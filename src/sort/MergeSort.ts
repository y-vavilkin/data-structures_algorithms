// Устойчивая

// Time Complexity                              Space Complexity
// Best         Average         Worst           Worst
// O(n*log(n))  O(n*log(n))     O(n*log(n))     O(n)
const mergeSort = <T>(arr: T[]): T[] => {
  if (arr.length <= 2) {
    if (arr?.[0] > arr?.[1]) return arr.reverse();
    return arr;
  }

  const left = mergeSort(arr.slice(0, arr.length/2));
  const right = mergeSort(arr.slice(arr.length/2, arr.length));
  return [...merge(left, right)];
}

const merge = <T>(left: T[], right: T[]): T[] => {
  const result = [];
  let [leftIndex, rightIndex] = [0, 0];

  while (leftIndex !== left.length && rightIndex !== right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

export default mergeSort;
