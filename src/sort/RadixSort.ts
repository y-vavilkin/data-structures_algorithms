// Устойчивая

// Time Complexity                          Space Complexity
// Best         Average       Worst         Worst
// O(nk)        O(nk)         O(nk)         O(n+k)
function radixSort(arr: number[]): number[] {
  const maxDigits = Math.max(...arr).toString().length;

  const base = 10;

  for (let i = 0; i < maxDigits; i++) {
    const bins: number[][] = Array.from({ length: base }, () => []);

    arr.forEach((x) => {
      const digit = Math.floor(x / Math.pow(base, i)) % base;
      bins[digit].push(x);
    });

    arr = ([] as number[]).concat(...bins);
  }

  return arr;
}

export default radixSort;
