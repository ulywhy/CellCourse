//fibonacci
const fibonacci = function(n, arr = [1, 1] ){
  return (arr.length >= n) ? arr : fibonacci(n - 1, arr.push(arr[-1] + arr[-2]));
}

console.log(fibonacci(8));
