
function countChars(string,checkChars){
// Increment the indexes in my Hash Array
const hash = Array(26).fill(0)

for(let i= 0; i<string.length; i++ ){
    hash[string[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
}
for(let i=0; i < checkChars.length; i++){
    console.log(hash[checkChars[i].charCodeAt(0) - 'a'.charCodeAt(0)])
}}

countChars("bcdabcdabcd","ad")


