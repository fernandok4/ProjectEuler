function SmallestDividedBy(a){
    let numbers = [];
    let result = 1;

    for(let i = 1; i <= a; i++){
        numbers.push(i);
    }

    for(let j = 2; sumOfElements(numbers) != numbers.length; j++){
        let verification = false;
        
        for(let i = 0; i < numbers.length; i++){
            
            if(numbers[i] % j == 0){
                
                numbers[i] /= j;
                verification = true;
            }
        }

        if(verification)
        {
            result *= j
            j--
        }
    }

    return result;
}

function sumOfElements(a){
    let soma = 0;
    for(let i = 0; i < a.length; i++){
        soma += a[i];
    }
    return soma
}

console.log(SmallestDividedBy(20))