class NodeItem<T> {
  value: T;
  next: NodeItem<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  private limit: number;
  private length: number;
  private current: NodeItem<T> | null;

  constructor(limit = 10) {
    this.limit = limit;
    this.length = 0;
    this.current = null;
  }

  push(value: T): number {
    if (this.length === this.limit) return this.length;

    const node = new NodeItem(value);
    node.next = this.current;
    this.current = node;
    this.length++;

    return this.length;
  }

  pop(): T | undefined {
    if (this.current === null) return;

    const node = this.current;
    this.current = this.current.next;
    this.length--;

    return node.value;
  }

  print() {
    let node = this.current;
    while (node !== null) {
      console.log(node.value)
      node = node.next;
    }
  }
}

export default Stack;
