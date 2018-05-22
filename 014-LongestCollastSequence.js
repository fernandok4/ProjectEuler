let LongestCollastUnder = function(a){
    let numberOfSequence = []
    let sequencia = 0, numero, maiorSequencia = 0, maiorNumero = 0

    for(let i = 1; i <= a; i++){
        sequencia = 1
        numero = i
        while(numero != 1){
            if(numberOfSequence[numero-1]!=undefined){
                sequencia += numberOfSequence[numero-1]-1
                numero = 1
            }else{
                if(numero % 2 == 0){
                    numero /= 2
                    sequencia++
                }else{
                    numero = (numero * 3) + 1
                    sequencia++
                    
                }
            }
        }
        numberOfSequence[i-1] = sequencia

        if(maiorSequencia < sequencia){
            maiorNumero = i
            maiorSequencia = sequencia
        }
    }

    return maiorNumero
}

console.log(LongestCollastUnder(1000000))