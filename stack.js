class Stack {
  constructor() {
    this.size = 0;
    this.result = [];
  }

  push(data) {
    this.result.push(data);
    this.size++;
    return this.result;
  }

  pop() {
    if (this.size === 0) {
      console.log("Стек пустой!");
      return;
    } else {
      this.result.pop();
      this.size--;
      return this.result;
    }
  }

  getSize() {
    return this.size;
  }

  getStack() {
    return this.result;
  }

  deleteStack() {
    this.result = [];
    this.size = 0;
  }
}