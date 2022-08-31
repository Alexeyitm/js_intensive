const makeObjectDeepCopy = (obj) => {
  const result = {};
  for (let key in obj) {
      if (typeof obj[key] == "function" || !obj[key].length || typeof obj[key] != "object") {
        result[key] = obj[key];
      } else {
        result[key] = makeObjectDeepCopy(obj[key]);
      }
  }
  return result;
}