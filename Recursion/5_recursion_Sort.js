
function printReverse(i,n){
    console.log(i)
    if(i === 0) return;
    printReverse(i-1,n)
}
function printNumbersInReverse(){
    printReverse(10,10)
}



function printSort(i,n){
    console.log(i)
    if(i >= n) return;
    printSort(i+1,n)
}

function printNumbersSorted(){
    printSort(1,5)
}
printNumbersSorted()


