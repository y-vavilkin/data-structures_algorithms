// Хеш-таблица
const inittialSize = 30;

interface Bucket<T> {
  key: string;
  value: T
}

class HashTable<T> {
  private size: number;
  private buckets: Bucket<T>[];
  constructor(size = inittialSize) {
    this.size = size;
    // this.buckets = new Array(size).fill().map(() => []);
  }

  // Хеш-функция
  hash(key: string): number {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.buckets.length;
  }

  // Добавление элемента в хеш-таблицу
  set(key: string, value: T) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }

    bucket.push({ key, value });
  }

  // Получение значения по ключу из хеш-таблицы
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket[i].value;
      }
    }

    return undefined;
  }

  // Удаление элемента по ключу из хеш-таблицы
  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket.splice(i, 1);
      }
    }

    return undefined;
  }

  // Вывод всех элементов хеш-таблицы
  display() {
    for (let i = 0; i < this.size; i++) {
      console.log(`Bucket ${i}:`);
      console.log(this.buckets[i]);
    }
  }
}

// Пример использования:
const hashTable = new HashTable();

hashTable.set("apple", 10);
hashTable.set("banana", 20);
hashTable.set("orange", 30);
hashTable.set("grape", 40);

console.log(hashTable.get("apple"));   // Выводит 10
console.log(hashTable.get("orange"));  // Выводит 30

hashTable.remove("banana");
hashTable.display();
