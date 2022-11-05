function main(arr) {
  var flag = 0;

  //array for negative and positive values
  var negative = arr.filter((e) => e >= 0);
  var positive = arr.filter((e) => e < 0);

  return arr.map((e) => {
    if (flag == 0) {
      if (negative.length > 0) e = negative.pop();

      flag = 1;
    } else {
      if (positive.length > 0) e = positive.pop();

      flag = 0;
    }
    return e;
  });
}

console.log(main([-3, 1, 2, 4, -6, 8, -8, -1]));
