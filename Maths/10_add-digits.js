// Given an integer num, repeatedly add all 
// its digits until the result has only one digit, and return it.

var addDigits = function(num) {
    let sum = 0
   while(num > 0 ){
    digit = num%10
    sum = sum + digit
    num = Math.floor(num/10)
   }
   if(sum > 9){
    while(sum > 9){
     let digit = sum%10
     let n = Math.floor(sum/10)
     sum = digit + n
    }
   }
    return sum
};

console.log(addDigits(199))