var App = function(){
   console.log('inside App');
}

App.prototype.getallPeople = async function(){

 //consume aqui el servicio https://swapi.co/api/people/ 
 //y regresa un array de todos los nombres de las personas que tengan una altura mayor a 120

 const url = "https://swapi.co/api/people/"
 const response = await fetch(url);
 const people = await response.json();
 console.log(people.results);
 return people.results.filter(p => p.height > 120);
};

const app = new App();
console.log('names')
app.getallPeople().then(data => console.log(data));
