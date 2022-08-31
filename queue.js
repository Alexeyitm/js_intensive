class Queue {
  constructor() {
    this.size = 0;
    this.result = [];
  }

  push(data) {
    this.result.push(data);
    this.size++;
    return this.result;
  }

  shift() {
    if (this.size === 0) {
      console.log("Очередь пустая!");
      return;
    } else {
      this.result.shift();
      this.size--;
      return this.result;
    }
  }

  getSize() {
    return this.size;
  }

  getQueue() {
    return this.result;
  }

  deleteQueue() {
    this.result = [];
    this.size = 0;
  }
}