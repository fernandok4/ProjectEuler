function isPrimeNumber(a){
    for(let i = 2; i<=Math.sqrt(a); i++){
        if(a % i == 0 && a != i){
            return 0;
        }
    }
    return 1;
}

function sumOfPrimesBelow(a){
    let sum = 2;
    for(let i = 3;i < a;i+=2){
        if(isPrimeNumber(i))
            sum += i;
    }
    return sum
}

console.log(sumOfPrimesBelow(2000000))