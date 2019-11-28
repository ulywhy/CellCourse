//primeNumbers.js

const prime = (arr) => {
  return arr.filter(a => {
    let i = 2
    while((a % i) !== 0 && i++ < a);
    return i===a
  }).sort((a, b) => a - b );
}

console.log(prime([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]));
