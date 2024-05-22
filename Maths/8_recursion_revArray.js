
function reverseArray(arr, srt ,end){
    if(srt >=end) return 

    [arr[srt], arr[end]] = [arr[end],arr[srt]]
    reverseArray(arr, srt+1, end-1)
}

const arr = [1,2,3,4,5,6]
reverseArray(arr,0,arr.length -1)

console.log(arr)