'use strict'

function getArrayParams(...arr) {

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = parseFloat((sum / arr.length).toFixed(2));

  return { min:min, max:max, avg:avg };

}
