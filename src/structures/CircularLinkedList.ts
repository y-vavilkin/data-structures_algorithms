class NodeItem<T> {
  value: T;
  next: NodeItem<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList<T> {
  private head: NodeItem<T> | null;
  private tail: NodeItem<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Добавление элемента в конец списка
  push(value: T): number {
    const newNode = new NodeItem(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
    return ++this.length;
  }

  // Удаление элемента по значению
  remove(value: T): number {
    if (this.head === null) {
      return this.length;
    }

    let current = this.head;
    let prev = this.tail;

    do {
      if (current.value === value) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else {
          if (current === this.head) {
            this.head = current.next;
            this.tail!.next = this.head;
          } else if (current === this.tail) {
            this.tail = prev;
            this.tail!.next = this.head;
          } else {
            prev!.next = current.next;
          }
        }
        this.length--;
        break;
      }
      prev = current;
      current = current.next!;
    } while (current !== this.head);

    return this.length;
  }

  // Поиск элемента по значению
  find(value: T): NodeItem<T> | null {
    if (this.head === null) {
      return null;
    }

    let current = this.head;

    do {
      if (current.value === value) {
        return current;
      }
      current = current.next!;
    } while (current !== this.head);

    return null;
  }

  // Вывод всех элементов списка
  print(): void {
    const values: T[] = [];
  
    if (this.head === null) {
      console.log(values);
      return;
    }

    let current = this.head;

    do {
      values.push(current.value);
      current = current.next!;
    } while (current !== this.head);

    console.log(values);
  }
}

export default CircularLinkedList;
