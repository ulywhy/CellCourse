//day one exercise one

const piramide = function (height = 3){
  let output = '';
  for(let i = 0; i < height; i++){
    let output = output + '#';
    console.log(output);
  }
}

piramide(10);
