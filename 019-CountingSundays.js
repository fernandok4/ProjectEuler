function CountSunday(a, b){
    //1900 = first day = monday
    let result = 0;
    let d = 1;

    if(a>=1900){
        for(let i = 1900; i <= b; i++){
            let aux = 0;
            for(let j = 1; j <= 12; j++){
                d = eachMonth(j, d, i)
                if(d==0){
                    if(i >= a){
                        result++  
                    }
                }
            }
        }
    }
    return result
}

function eachMonth(month, d, year){
    if(month == 2){
        if((year%4==0 && year%100!=0) || year%400==0){
            d = (d + (29 % 7)) % 7
        }else{
            d = (d + (28 % 7)) % 7
        }
    }else{
        if(month == 4 || month == 6 || month == 9 || month == 11){
            d = (d + (30 % 7)) % 7
        }else{
            d = (d + (31 % 7)) % 7
        }
    }
    return d;
}

console.log(CountSunday(1901, 2000))