
function SelectionSort(sort){
    for(let i =0; i <= sort.length-2; i++){
       let minNo = i                    //assuuming minNo is the first

        for( let j = i; j<=sort.length -1; j++){
            if(sort[j] < sort[minNo] ){         // if assumption fails then we swap the min no
                minNo = j                       // to first index
            }
            let temp = sort[minNo]          // storing the minNo value in a temp var
            sort[minNo] = sort[i]                 //updating the minNo to the latest minNo
            sort[i] = temp              //swapping the old value with the new one.
        }
    }
    return sort
}

const sort =[3,4,5,6,5,7,8,4,3]

console.log(SelectionSort(sort))