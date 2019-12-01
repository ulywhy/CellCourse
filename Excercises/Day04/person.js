//person.js

class Person{
	constructor(){
		this.path = "https://swapi.co/api/people"
	}

	async getPeople(){
		let response = await fetch(this.path);
		let obj = await response.json();
		obj.results.forEach((p, index) => p.id = 1 + index)
		return obj.results;
	}

	async getPerson(id){
		let response = await fetch(`${this.path}/${id}`);
		return await response.json();
	}

	async getSection(id, section){
		let person = await this.getPerson(id);
		if( section == 'personal'){
			return [person]
		}else if(typeof person[section] === 'object'){
			let results = person[section].map(async e => {
				let response = await fetch(e)
				return await response.json()
			});
			return Promise.all(results).then(r =>  r )
		}else{
			let response = await fetch(person[section]);
			return  [await response.json()]
		}
	}
}

module.exports = Person;
