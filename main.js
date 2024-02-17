function add(numbers) {
  if (!numbers) {
    return 0;
  }
  const splitNumbers = numbers.split(/[\n,]/);
  //We have to filter out empty strings
  const validInput = splitNumbers.filter((num) => num !== "" && !isNaN(num));
  return validInput.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add("1,\n"));
console.log(add("1,\n2,3"));
