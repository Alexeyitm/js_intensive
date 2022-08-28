const makeObjectDeepCopy = (arr) => {
  const result = {};
  for (let key in arr) {
      if (typeof arr[key] == "function" || !arr[key].length || typeof arr[key] != "object") {
        result[key] = arr[key];
      } else {
        result[key] = makeObjectDeepCopy(arr[key]);
      }
  }
  return result;
}