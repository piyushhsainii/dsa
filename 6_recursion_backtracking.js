
function backTrackingPrint(){
    printNo(3,3)        // will print upto n in sorted order
}

function printNo(i,n){
    if(i < 1) return

    printNo(i-1,n)      //calling the function before the console log await the console log 
    console.log(i)
}

backTrackingPrint()