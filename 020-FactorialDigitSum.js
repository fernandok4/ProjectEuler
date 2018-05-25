function FactorialDigitSum(num){
    let array = [1]

    for(let i = num; i > 0; i--){
        let tam = array.length
        for(let j = 0; j < tam; j++){
            array[j] = array[j] * i
        }
        for(let j = 0; j < array.length; j++){
            while(array[j]>=10){
                if(array[j+1]==undefined){
                    array[j+1]=1
                }else{
                    array[j+1]++
                }
                array[j]-=10
            }
        }
    }
    return array
}

soma = (ac, a) => ac += a

console.log(FactorialDigitSum(100).reduce(soma))