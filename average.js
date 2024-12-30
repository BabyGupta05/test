const average = (arr) => {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, val) => {
    return acc + val;
  }, 0);
  return sum / arr.length;
};
console.log("caluclate average", average([1, 2, 3]));
console.log("caluclate average", average([10, 20, 30]));
