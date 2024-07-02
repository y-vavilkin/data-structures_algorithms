// Неустойчивая

// Time Complexity                          Space Complexity
// Best         Average       Worst         Worst
// O(n*log(n))  O(n*log(n))   O(n^2)        O(log(n))
const quickSort = <T>(arr: T[]): T[] => {
  if (!arr || !arr.length) {
      return []; 
  }

  if (arr.length === 1) {
      return arr;
  }

  const pivot: T = arr[Math.floor(arr.length / 2)];

  const left: T[] = []; 
  const right: T[] = []; 
  const equal: T[] = [];

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else if (arr[i] > pivot) {
          right.push(arr[i]);
      } else {
          equal.push(arr[i]);
      }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

export default quickSort;
