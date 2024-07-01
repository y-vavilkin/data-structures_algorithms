class NodeItem<T> {
  value: T;
  next: NodeItem<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: NodeItem<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Добавление элемента в конец списка
  push(value: T): number {
    const newNode = new NodeItem(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
    return ++this.length;
  }

  // Удаление элемента по значению
  remove(value: T): number {
    if (this.head === null) {
      return this.length;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return --this.length;
    }

    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
      this.length--;
    }

    return this.length;
  }

  // Поиск элемента по значению
  find(value: T): NodeItem<T> | null {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Вывод всех элементов списка
  print(): void {
    let current = this.head;
    const values = [];

    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values);
  }
}

export default LinkedList;
