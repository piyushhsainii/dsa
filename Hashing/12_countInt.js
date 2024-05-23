
function countInt(N, n){
    const hash = Array(1000000).fill(0)
    const Numbers = N.toString().split('')
    const Search = n.toString().split('')

    for(let i= 0;i<Numbers.length;i++){
        hash[Numbers[i]]++
    }
    for(let i=0;i<Search.length;i++){
        console.log(hash[Search[i]])
    }

}
countInt(122333221, 21)
