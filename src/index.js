function sortedSquaredArray(array) {
  // Write your code here.
  // array must not be empty
  let newArr = [];
  // must be integers in ascending order
  for (let i = 0; i < array.length; i++) {
    let squared = parseInt(array[i]) * parseInt(array[i]);
    newArr.push(squared);
  }
  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
}
