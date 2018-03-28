function SpecialTripletPythagorean(a){
    let sum = 0;
    let a1 = 0, b1 = 0, c1 = 0;

    for(let i = 1; i < a; i++){
        for(let j = 1; j < a; j++){
            sum = (i * i) + (j * j)
            if(Number.isInteger(Math.sqrt(sum))){
                a1 = i
                b1 = j
                c1 = Math.sqrt(sum)
                
                if(a1+b1+c1 == a)
                {
                    return a1*b1*c1
                }
            }
        }
    }
}

console.log(SpecialTripletPythagorean(1000))