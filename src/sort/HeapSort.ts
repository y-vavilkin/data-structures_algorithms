class MaxHeap<T> {
  private heap: T[];
  constructor() {
    this.heap = [];
  }

  parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  rightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  swap(a: number, b: number) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  insert(item: T) {
    this.heap.push(item);
    let index = this.heap.length - 1;
    let parent = this.parentIndex(index);

    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }

  delete(): T {
    this.heap.unshift(this.heap.pop());

    const item = this.heap.shift();
    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);

    while (
      this.heap[leftChild]  && 
      this.heap[leftChild]  > 
      this.heap[index]      || 
      this.heap[rightChild] > 
      this.heap[index]
    ) {
      let max = leftChild;
      
      if (
        this.heap[rightChild] && 
        this.heap[rightChild] > 
        this.heap[max]
      ) {
        max = rightChild
      }
      this.swap(max, index);
      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }
    return item;
  }
}

const heapSort = <T>(arr: T[]): T[] =>{
  const sorted: T[] = [];
  const heap1 = new MaxHeap();
  
  for(let i=0; i<arr.length; i++){
      heap1.insert(arr[i]);
  }
  
  for(let i=0; i<arr.length; i++){
      sorted.push(heap1.delete());
  }
  return sorted;
}

export default heapSort;
