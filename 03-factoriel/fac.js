// write your func here
function fact(number) {
    let factoriel = 1 ;
    for ( i = 1 ; i <= number ; i++) {
        factoriel = factoriel * i ;
    }
    return factoriel;
}
const num = fact(3);
console.log(num);
