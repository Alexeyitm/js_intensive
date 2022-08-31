let myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function() {
    if (this.to < this.from) {
      throw Error("to меньше from!");
    } else if (!isFinite(this.from)) {
      throw Error("from не является числом!");
    } else if (!isFinite(this.to)) {
      throw Error("to не является числом!");
    }
    return {
      current: this.from,
      last: this.to,

      next() {
        
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
};

for (let item of myIterable) {
  console.log(item); 
}