function AmicableNumbers(num){
    let aux = num
    let divisors = []
    let amicable = []
    for(let i = 2; aux!=1 ;i++){
        if(aux%i==0){
            aux /= i
            divisors.push(i)
            i--
        }
    }

    for(let i = 0; i < divisors.length; i++){
        if(amicable[0]==undefined){
            amicable.push(divisors[i])
        }else{
            let tam = amicable.length
            if(amicable.indexOf(divisors[i])==-1){
                amicable.push(divisors[i])
            }
            for(let j = 0; j < tam; j++){
                amicable.push(divisors[i]*amicable[j])
            }
        }
    }
    amicable.pop()
    amicable.splice(0,0,1)

    return amicable
}

console.log(AmicableNumbers(10).reduce((ac, valor)=>ac+=valor))