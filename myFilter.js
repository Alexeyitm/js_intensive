Array.prototype.myFilter = function(callback, obj = {}) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(obj, this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};