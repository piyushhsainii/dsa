// returns YES if the number is armstrong else returns false

function Solution(x){
    const originalNo = x
    let sum = 0
    while(x!=0){
        const lastDigit = x%10
        sum = sum + (lastDigit * lastDigit * lastDigit)
        x = Math.floor(x/10)
    }
    if(originalNo===sum) return console.log("Yes")
    else console.log("No")
}
Solution(371)