class CustomQueue {
  constructor(value) {
    this.capacity = value;
    this.storage = new Array(value);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  offer(value) {
    if (this.count >= this.storage.length) {
      throw new Error("Queue is full");
    }

    this.storage[this.head++] = value;
    this.count++;
    this.head %= this.capacity;
  }

  poll() {
    if (this.count <= 0) {
      throw new Error("Queue is empty");
    }

    const element = this.storage[this.tail];
    this.storage[this.tail] = 0; // For JavaScript, clearing array element by assigning a value (0 in this case)
    this.tail++;
    this.tail %= this.capacity;
    this.count--;
    return element;
  }

  toString() {
    let res = "";
    let n = this.tail;
    let c = 0;

    while (c !== this.count) {
      res += this.storage[n] + " ";
      n += 1;
      n %= this.capacity;
      c++;
    }

    return res.trim();
  }
}

const cq = new CustomQueue(100);

try {
  for (let i = 0; i < 3; i++) {
    cq.offer(i);
    cq.poll();
  }
  console.log(cq.toString());

  for (let i = 0; i < 3; i++) {
    cq.offer(i);
  }
  console.log(cq.toString());

  cq.poll();
  console.log(cq.toString());
} catch (error) {
  console.error(error.message);
}
