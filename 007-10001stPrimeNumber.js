function isPrimeNumber(a){
    for(let i = 2; i<a; i++){
        if(a % i == 0 && a != i){
            return 0;
        }
    }
    return 1;
}

function PrimeNumber(a){
    let result = 2;
    let qntNum = 1;

    for(let i = 3; qntNum < a; i+=2){
        if(isPrimeNumber(i)){
            result = i;
            qntNum++;
        }
    }

    return result
}

console.log(PrimeNumber(10001))