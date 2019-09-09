class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // O(1)
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    } else {
      this.data[address].push([key, value]);
    }
    return this.data;
  }

  // O(1)
  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    console.log('current', currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        const [bucketKey, bucketValue] = currentBucket[i];
        if (bucketKey === key) return bucketValue;
      }
    }
    return undefined;
  }

  // actually this is black box and this is O(1)
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      const bucket = this.data[i];
      if (bucket) {
        for (let j = 0; j < bucket.length; j++) {
          keysArray.push(bucket[j][0]);
        }
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(10);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.data);
console.log('keys:', myHashTable.keys());
