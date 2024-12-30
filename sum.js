const sum = (n) => {
  if (!n || n == 0) {
    return;
  }
  const total = (n * (n + 1)) / 2;
  return total;
};

console.log("sum of natural number", sum(5));
console.log("sum of natural number", sum(3));
