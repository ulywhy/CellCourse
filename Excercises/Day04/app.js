const Person = require('./person.js');
const Html = require('./html.js');

class App{
	constructor(){
		this.person = new Person();
		this.html = new Html();

		this.person.getPeople().then(people => {
			people.forEach((d, index) => {
				let btn = this.populatePeople(d)
				if(index === 0) btn.click()
			});
		});
		//initialize person info
}

	tabClick(event){
		this.person.getSection(
			event.target.getAttribute('id'),
			event.target.innerText)
		.then(section => {
			if(section.length){
				this.fillData(section.map(s => this.stringify(s)).reduce((acc, val) => acc += val))
			}
		});
	}

	populatePeople(character){
		return document.body.querySelector('.container .left .user-list')
		.appendChild(this.html.button(character, this.buttonClick.bind(this)))
	}

	populateSections(id){
		this.person.getPerson(id).then(p =>{
			let sections = document.querySelector('.container .content .sections')
			while(sections.firstChild) {
				sections.removeChild(sections.firstChild);
			}

			let keys = Object.keys(p).filter(k => ['homeworld', 'species', 'vehicles', 'starships'].includes(k))
			.filter(k => {if(typeof p[k] === 'object'){
					return p[k].length !== 0;
				}else return true;
			})
			keys.unshift('personal')
			keys.forEach((k, index) => {
				let tab = sections.appendChild(this.html.tab(k, id, this.tabClick.bind(this)))
				if(index === 0) tab.click()
			})
		})
	}

	buttonClick(event){
		this.populateSections(event.target.getAttribute('id'));
		document.querySelectorAll('.container .content .sections .button')
		.forEach(el => el.setAttribute('id', event.target.getAttribute('id')))
	}

	stringify(obj){
		let undessired = ['created', 'url', 'edited', 'homeworld']
		return Object.keys(obj).filter(k => typeof(obj[k]) !== 'object')
		.filter(k => !undessired.includes(k))
		.map(k => `${k.replace('_', ' ')}: ${obj[k]}\n`)
		.reduce((acc, val) => acc += val);
	}

	fillData(data){
		document.querySelector('.container .content .board').innerText = data;
	}

}


var app = new App();
