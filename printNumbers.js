// Question 3
const printNumbers = (from, to) => {
  if (from > to) {
    return;
  }
  console.log(from);
  setTimeout(printNumbers, 1000, from + 1, to);
}
printNumbers(1, 5);