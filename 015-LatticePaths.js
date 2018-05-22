function LatticePaths(a, b){
    let x = Fatorial(a+b)
    let y = Fatorial((a+b)-b)
    let z = Fatorial(b)
    return x/(y*z)
}

function Fatorial(a){
    if(a!=0){
        return a*Fatorial(a-1)
    }else{
        return 1
    }
}

console.log(LatticePaths(20,20))