//person.js

class Person{
	constructor(){
		this.path = "https://swapi.co/api/people"
	}

	async getPeople(){
		let response = await fetch(this.path);
		let obj = await response.json();
		obj.results.forEach((p, index) => p.id = index)
		return obj.results;
	}

	async getPerson(id){
		let response = await fetch(`${this.path}/${id}`);
		let person = await response.json();
		return person;
	}
}

module.exports = Person;
