const numsAux = {
    0: 0,
    1: 3,
    2: 3,
    3: 5,
    4: 4,
    5: 4,
    6: 3,
    7: 5,
    8: 5,
    9: 4,
    10: 3,
    11: 6,
    12: 6,
    13: 8,
    14: 8,
    15: 7,
    16: 7,
    17: 9,
    18: 8,
    19: 8,
    20: 6,
    30: 6,
    40: 5,
    50: 5,
    60: 5,
    70: 7,
    80: 6,
    90: 6,
    100: 10,
    200: 10,
    300: 12,
    400: 11,
    500: 11,
    600: 10,
    700: 12,
    800: 12,
    900: 11,
    1000: 11
}

function numAtoNumBLetters(a, b) {
    let sum = 0
    let zero = ''
    let num = []
    for (let i = a; i <= b; i++) {
        zero=''
        num = i.toString().split('')
        let j = num.length-1
        
        if((String(num[num.length-2]).concat(num[num.length-1])<=20)){
            sum+=numsAux[String(num[j-1]).concat(num[j])] || numsAux[String(num[j])]
            j-=2
            zero += '00'
        }
        
        //soma as letras
        while(j>=0){
            if(num[j]!=0){
                sum+=numsAux[String(num[j])+String(zero)]        
            }
            zero+='0'
            j--
        }

        //soma os and nos numeros literais
        if(i>100 && i%100!=0){
            sum+=3
        }
    }
    return sum
}

console.log(numAtoNumBLetters(1,1000))