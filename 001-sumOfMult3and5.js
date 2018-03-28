function Sum_MultOf3and5Between(a, b){
    var sum = 0;
    for(let i = a; i < b; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum;
}

function Sum_MultOf3and5Between2(a, b){
    let sum = 0;
    let timesMax = b / 30;
    return sum;
}

console.log(`A soma dos multiplos de 3 e 5 de 0 ate 1000 é ${Sum_MultOf3and5Between(0, 1000)}`)