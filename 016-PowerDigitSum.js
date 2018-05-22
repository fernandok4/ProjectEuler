function PowAndSumDigits(a, b){
    let array = a.toString().split('');
    let soma = 0
    let tam = 0

    for(let j = 0; j < b-1; j++){
        tam = array.length
        for(let i = 0; i < tam; i++){
            array[i] *= a
        }
        for(let i = 0; i < tam; i++){
            while(array[i]>=10){
                if(array[i+1]!=undefined){
                    array[i+1]+=1
                }else{
                    array[i+1]=1 
                }
                array[i]-=10 
            }
        }
    }
    for(let i = 0; i < array.length; i++){
        soma+=array[i]
    }
    return soma
}

console.log(PowAndSumDigits(2, 1000))