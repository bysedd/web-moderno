const school = 'Cod3r';

console.log(school.charAt(4)); // r
console.log(school.charAt(5)); // vazio
console.log(school.charCodeAt(3)); // 51 (unicode table)
console.log(school.indexOf('d')); // 3

console.log(school.substring(1)); // od3r
console.log(school.substring(0, 3)); // Cod

console.log('Escola '.concat(school).concat('!')); // Escola Cod3r!
console.log('Escola ' + school + '!'); // Escola Cod3r!
console.log(school.replace('3', 'e')); // Coder
console.log(school.replace(/\d/, 'e')); // Coder
console.log(school.replace(/\w/g, 'e')); // eeee

console.log('Ana,Maria,Pedro'.split(',')); // [ 'Ana', 'Maria', 'Pedro' ]