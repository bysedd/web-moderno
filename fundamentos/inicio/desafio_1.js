/*
    Exibir no console os números pares e ímpares de 1 a 10
    
    // Bloco 1
    1
    3
    5
    7
    9
    
    // Bloco 2
    2
    4
    6
    8
    10
 */

{
    // Bloco 1
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    console.log();
}

{
    // Bloco 2
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}