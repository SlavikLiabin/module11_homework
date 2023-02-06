function getEvenAndOddNumbers(arr) {
  let number = [];
  let even = [];
  let odd = [];
  let arrNull = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      number.push(arr[i]);
    }

    if (arr[i] === null) {
      arrNull.push(1);
    }
  }

  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
      even.push(1);
    } else {
      odd.push(1);
    }
  }

  let resultEven = even.reduce((sum, current) => sum + current, 0);
  let resultOdd = odd.reduce((sum, current) => sum + current, 0);
  let resultNull = arrNull.reduce((sum, current) => sum + current, 0);

  console.log(`Количество четных чисел: ${resultEven}`);
  console.log(`Количество нечетных чисел: ${resultOdd}`);
  console.log(`Количество нулевых элементов: ${resultNull}`);
}

getEvenAndOddNumbers([3, 8, 7, 2, $, null]);
