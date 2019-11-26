//letterCount

const count = function(word = "", skip = ''){
  let n = 0;
  let l = '';

  if(word){
    let arr = word.split("");
    
    arr.filter( q => q !== l );

    while(arr.length > 0){
      [l] = arr;
      n++;
  
      arr.filter( q => q !== l );
    }
  }
  return n;
}


count("banana and kebab", 'b');

//expected output: 5
