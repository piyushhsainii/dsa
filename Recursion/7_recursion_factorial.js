
function getFactorial(x){
    if(x <= 1) return 1
   return x * getFactorial(x-1)

}

console.log(getFactorial(3))