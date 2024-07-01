// Неустойчивая

// Time Complexity                          Space Complexity
// Best         Average       Worst         Worst
// O(n*log(n))  O(n*log(n))   O(n^2)        O(log(n))
const quickSort = <T>(arr: T[]): T[] => {
  if (arr.length <= 1) return arr;

  const pivot: T = arr.pop()!;
  const [left, right]: [T[], T[]] = [[],[]];

  for (let i = 0; i < arr.length; i++) {
    (pivot > arr[i])
      ? left.push(arr[i])
      : right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

export default quickSort;
