class Calculator {
  constructor(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error("Конструктор класса должен принимать валидные числа!");
    } else if (arguments.length !== 2) {
      throw new Error("Конструктор класса должен принимать два значения!");
    }
    this.x = x;
    this.y = y;
  }

  setX(newValue) {
    if (!Number.isFinite(newValue)) {
      throw new Error("Аргумент должен быть валидным числом!")
    }
    this.x = newValue;
  }

  setY(newValue) {
    if (!Number.isFinite(newValue)) {
      throw new Error("Аргумент должен быть валидным числом!");
    }
    this.y = newValue;
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error("Нельзя разделить на 0!");
    }
    console.log(this.x / this.y);
  }
}