const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let sum = 0;
    numberList.forEach(number => sum += number);
    return sum;
}
console.log(sumNumbers(numbers))