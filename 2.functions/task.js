function getArrayParams(arr) {

let min = (Math.min(...arr));
  let max = (Math.max(...arr));
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min:min, max:max, avg:avg };

}
