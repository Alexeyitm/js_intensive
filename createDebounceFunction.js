function createDebounceFunction(callback, ms) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback is not a function!`);
  } else if (typeof ms !== 'number') {
    throw new Error(`time is not a number!`);
  }

  let time = null;

  return () => {
    clearTimeout(time);

    time = setTimeout(() => {
      callback();
    }, ms)
  }
}

const log100 = () => console.log(100);
const debounceLog100 = createDebounceFunction(log100, 1000);
debounceLog100();
setTimeout(debounceLog100, 200);
setTimeout(debounceLog100, 400);