let a = 5;
let b = 15;
let i = a;
setInterval(
  function (a, b) {
    if (i < +b + 1) {
      console.log(i++);
    }
  },
  1000,
  a,
  b
);
