function sumOfSquare(a){
    let sum = 0;
    for(let i = 1; i <= a; i++){
        sum += (i * i);
    }
    console.log(sum)
    return sum;
}

function squareOfSum(a){
    let squareValue = 1;
    let sum = 0;

    if(a % 2 == 0){
        sum = (a/2)*(1+a);
    }
    else{
        sum = (((a+1)/2)*(1+a))-((a+1)/2);
    }

    return sum * sum;
}

console.log(squareOfSum(100) - sumOfSquare(100))