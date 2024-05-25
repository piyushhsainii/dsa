function fibbonaci(n) {
  if (n == 1) return 1;
  if (n == 0) return 0;

  const last = fibbonaci(n - 1); //
  const Slast = fibbonaci(n - 2); //

  return last + Slast;
}
console.log(fibbonaci(8));
//
//
//
//
//
//
function SumofANumber(n) {
  let sum = 0;
  if (n == 1) return 1;

  for (let i = 0; i <= n; i++) {
    sum = sum + i;
    SumofANumber(n - 1);
  }
  return sum;
}

// console.log(SumofANumber(5))
