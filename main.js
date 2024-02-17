function add(numbers) {
  if (!numbers) {
    return 0;
  }
  const splitNumbers = numbers.split(/[\n,]/);
  //We have to filter out empty strings
  const validInput = splitNumbers.filter((num) => num !== "" && !isNaN(num));
  const negatives = validInput.filter((num) => parseInt(num) < 0);
  if (negatives.length > 0) {
    throw "negative numbers are not allowed " + negatives.join(",");
  }
  return validInput.reduce((sum, num) => sum + parseInt(num), 0);
}

try {
  console.log(add(""));
  console.log(add("1"));
  console.log(add("1,5"));
  console.log(add("1,\n"));
  console.log(add("1,\n2,3"));
  console.log(add("-1,2"));
} catch (error) {
  console.error(error);
}
