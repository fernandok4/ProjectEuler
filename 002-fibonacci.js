function Fibonacci(a){
    let sum = 2;
    let [a1, a2, a3] = [2,1,0]

    for(; (a1+a2) < a;)
    {
        a3 = a2;
        a2 = a1;
        a1 = a2+a3;

        if(a1 % 2 == 0){
            sum += a1;
        }

        console.log(a1);
    }
    console.log(sum)
}

Fibonacci(4000000)