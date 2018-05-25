const t1 = 
`75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`.split('\n').map((a,b)=>{
    return a.split(' ')
})

const t2 = 
`3
7 4
2 4 6
8 5 9 3`.split('\n').map((a,b)=>{
    return a.split(' ')
})

/*
Para resolver comecei pela base do triangulo, verificando se o primeiro
elemento da base mais o elemento da linha de cima é maior que o segundo elemento 
da base mais o primeiro elemento da linha de cima, se sim elemento da linha de cima
igual a primeira soma, se nao, elemento da linha de cima igual a segunda soma... 
Fazendo isso para todos os elementos da base com seus respectivos elementos de cima. Exemplo:

3
7 4
2 4 6
8 5 9 3

3
7  4
10 13 15

3
20 19

23  -----> Resultado

*/ 


function MaximumPathRoute(route){
    let result = route
    for(let i = route.length-1; i > 0; i--){
        for(let j = 0; j < route[i].length-1; j++){
            result[i-1][j] = Math.max(Number(result[i-1][j])+Number(result[i][j+1]), Number(result[i-1][j])+Number(result[i][j]))
        }
        result.splice(i,1)
    }
    return result[0][0]  
}


console.log(MaximumPathRoute(t1))