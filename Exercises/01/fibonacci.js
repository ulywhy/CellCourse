//fibonacci
const fibonacci = function(n, a, b){
  if(n > 0){
    if( !a ){
      a = 1;
      console.log(`${a}, `);
     return fibonacci(n-1, a);
    }
    else if( !b ){
      b = a;
      console.log(`${b}, `);
      return fibonacci(n - 1, a, b);
    }else {
      console.log(`${a + b}, `);
      return fibonacci(n-1, b, a + b);
    }
  }else{
    return;
  }
}

fibonacci(8);
