import LinkedList from './LinkedList';

const defaultHashTableSize: number = 32;

interface HashTableValue<T> {
  key: string;
  value: T;
}

class HashTable<T> {
  buckets: LinkedList<HashTableValue<T>>[];
  keys: { [key: string]: number };

  constructor(hashTableSize: number = defaultHashTableSize) {
    this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList<HashTableValue<T>>());
    this.keys = {};
  }

  hash(key: string): number {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );
    return hash % this.buckets.length;
  }

  set(key: string, value: T): void {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((nodeValue: HashTableValue<T>) => nodeValue.key === key);

    if (node === null) {
      bucketLinkedList.push({ key, value });
    } else {
      node.value = { key, value };
    }
  }

  delete(key: string): T | null {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find((nodeValue) => nodeValue.key === key);

    if (node !== null) {
      bucketLinkedList.remove(node.value);
      return node.value.value;
    }

    return null;
  }

  get(key: string): T | undefined {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find((nodeValue) => nodeValue.key === key);

    return node?.value.value;
  }

  has(key: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.keys, key);
  }

  getKeys(): string[] {
    return Object.keys(this.keys);
  }

  getValues(): T[] {
    return this.buckets.reduce((values: T[], bucket) => {
      const bucketValues = bucket.toArray()
        .map((linkedListNode) => linkedListNode.value.value);
      return values.concat(bucketValues);
    }, []);
  }
}

export default HashTable; 
