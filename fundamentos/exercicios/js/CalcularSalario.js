function calcularSalario(horas, valorHora) {
    return `Salário igual a R$ ${(horas * valorHora).toFixed(2)}`;
}

console.log(calcularSalario(150, 40.5));