function biggerPrimeFactor(a){
    let divisores = [];
    let num = a;

    for(let i = 2; num != 1; i++){
        if(num % i == 0){
            divisores.push(i);
            num = num / i;
            i--;
        }
    }

    for(let i = divisores.length-1; i >= 0; i--){
        let divisorVerificador = 0;
        for(let j = 1; j <= divisores[i]; j++){
            if(divisores[i] % j == 0){
                divisorVerificador++;
            }
            
            if(divisorVerificador > 2){
                break;
            }

            if(divisorVerificador == 2 && j == divisores[i]){
                return divisores[i];
            }
        }
    }
}


console.log(biggerPrimeFactor(600851475143));