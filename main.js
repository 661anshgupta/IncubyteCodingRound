function add(numbers) {
  if (!numbers) {
    return 0;
  }
  return numbers.split(",").reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add(""));
console.log(add("2"));
console.log(add("1,5"));
