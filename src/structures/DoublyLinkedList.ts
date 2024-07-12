class NodeItem<T> {
  value: T;
  next: NodeItem<T> | null;
  prev: NodeItem<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
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
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      const tail = this.head.prev as NodeItem<T>;
      tail.next = newNode;
      newNode.prev = tail;
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    return ++this.length;
  }

  // Удаление элемента по значению
  remove(value: T): number {
    if (this.head === null) {
      return this.length;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        if (current === this.head && current.next === this.head) {
          this.head = null;
        } else {
          if (current === this.head) {
            this.head = current.next;
          }
          current.prev!.next = current.next;
          current.next!.prev = current.prev;
        }
        this.length--;
        break;
      }
      current = current.next!;
      if (current === this.head) {
        break;
      }
    }

    return this.length;
  }

  // Поиск элемента по значению
  find(value: T): { value: T, next: T | null, prev: T | null} | null {
    if (this.head === null) {
      return null;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return {
          value: current.value,
          next: current.next?.value ?? null,
          prev: current.prev?.value ?? null
        };
      }
      current = current.next!;
      if (current === this.head) {
        break;
      }
    }

    return null;
  }

  // Вывод всех элементов списка
  print(): void {
    const values:T[] = [];

    if (this.head === null) {
      console.log(values);
      return;
    }

    let current = this.head;

    while (current !== null) {
      values.push(current.value);
      current = current.next!;
      if (current === this.head) {
        break;
      }
    }

    console.log(values);
  }
}

export default DoublyLinkedList;
