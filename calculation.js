const getSumAndQuotient = () => {
  const firstValue = prompt("Введите первое значение:");
  const secondValue = prompt("Введите второе значение:");

  return Number(firstValue) + Number(secondValue)
    ? console.log(`Ответ: ${Number(firstValue) + Number(secondValue)}, ${firstValue / secondValue}`)
    : console.log("Некорректный ввод!");
}

getSumAndQuotient();