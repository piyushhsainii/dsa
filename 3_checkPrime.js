function checkIsPrime(n){
    if(n<=1) return console.log("0 or 1 are not prime numbers")

    // we have to iterate till the square root of the N
    for(let i=2; i*i<=n; i++){
        if(n%i===0){
            return console.log("false") 
        }
    }
    return console.log("true") 
   
}
checkIsPrime(36)
checkIsPrime(37)