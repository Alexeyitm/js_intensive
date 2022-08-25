const getNumber = () => {
  const firstValue = prompt("Введите первое значение:");
  const secondValue = prompt("Введите второе значение:");

  return Number(firstValue) + Number(secondValue) && 2 <= secondValue && secondValue <= 36
  ? console.log(Number(firstValue).toString(secondValue))
  : console.log("Некорректный ввод!");
}

getNumber();