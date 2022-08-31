const selectFromInterval = (arr, firstValue, secondValue) => {

  const result = [];

  if (!Array.isArray(arr)) {
    throw new Error("В функцию передан не массив!");
  } else if (typeof firstValue !== "number" || typeof secondValue !== "number") {
    throw new Error("В функцию переданы невалидные значения интервала!");
  } else {
    arr.forEach(el => {
      if (typeof el !== 'number') {
        throw new Error("В массиве не только числа!");
      } else if (Math.min(firstValue, secondValue) <= el & Math.max(firstValue, secondValue) >= el) {
        result.push(el);
      }
    });
  }
  return result;
}