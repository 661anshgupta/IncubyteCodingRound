function add(numbers) {
  if (!numbers) {
    return 0;
  }

  let delimiter = ",";

  //Checking if the number starts with "//""
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    // storing new delimeter
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }
  // Making new regular expresion with the new delimeter if any
  const newRegex = new RegExp(`[${delimiter}\\n]`);
  const splitNumbers = numbers.split(newRegex);
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
  console.log(add("//;\n1;2"));
} catch (error) {
  console.error(error);
}
