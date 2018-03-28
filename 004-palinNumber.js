/*
function LargestPalindrome(a, b){
    let largest = 0;

    for(let i = a; i <= b; i++){
        for(let j = a; j <= b; j++){
            if(isPalin(i*j)){
                if((i*j)>largest){
                    largest = i*j;
                }
            }
            console.log(i, j)
        }
    }

    return largest;
}*/

function LargestPalindrome(a, b){
    let largest = 0;

    // 100000A + 10000B + 10000C + 100C + 10B + 1A
    // 100001A + 10010B + 1100C
    // 11(9091A + 910B + 100C) ---> O numero em questão é multiplo de 11
    for(let i = a + (11-(a % 11)); i <= b; i+=11){
        // j = i, para que não haja repetição do tipo 104 * 200 e 200 * 104.
        for(let j = i; j <= b; j++){
            if(isPalin(i*j)){
                if((i*j)>largest){
                    largest = i*j;
                }
            }
            console.log(i, j)
        }
    }

    return largest;
}


function isPalin(a){
    return a == a.toString().split("").reverse().toString().replace(/,/g, "")
}

console.log(LargestPalindrome(100, 999));