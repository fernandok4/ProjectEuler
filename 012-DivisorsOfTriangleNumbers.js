function DivisorsOfTrianguleNumbers(acimaDe){
    let aux = 0;
    let number = 1;
    let temp = 0;

    while(aux <= acimaDe){
        temp+=number
        aux = NumberOfDivisors(temp)
        number++;
    }
    return temp;
}


function NumberOfDivisors
(number){
    let vector = []
    let resultado = 1;
    let aux = number

    for(let i = 2; i <= Math.ceil(number/2) && aux != 1; i++){
        if(isPrimeNumber(i) && aux%i == 0){
            aux = aux / i
            vector.push(i)
            i--
        }
    }
    let last, quantidade = 0, size = vector.length;
    while(size != -1){
        last = vector.pop();
        size--;
        quantidade++;

        if(last != vector[vector.length-1]){
            resultado *= (quantidade+1)
            quantidade = 0;
        }
    }

    return resultado
}

function isPrimeNumber(a){
    for(let i = 2; i<a; i++){
        if(a % i == 0 && a != i){
            return 0;
        }
    }
    return 1;
}


console.log(DivisorsOfTrianguleNumbers(500))
console.log(NumberOfDivisors2(28))