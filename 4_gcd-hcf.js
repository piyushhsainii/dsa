
function getHCF(x,y){
    for(i=Math.min(x,y); i>=1; i--){
        if((x%i)===0 && (y%i)===0){
            console.log(i + "is the Highest Common factor")
            break;
        }
    }  
}

getHCF(20,30)