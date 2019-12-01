(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./html.js":2,"./person.js":3}],2:[function(require,module,exports){
class Html{


	constructor(){
	}

  button(character, click){
  	var btn = document.createElement('div');
		btn.innerText = `${character.name}`
		btn.setAttribute('id', character.id);
		btn.classList.add('button');
		btn.addEventListener('click', click);
		return btn;
	}

  tab(attribute, id, click){
		var tab = document.createElement('div');
		tab.innerText = attribute
		tab.setAttribute('id', id)
		tab.classList.add('button')
		tab.addEventListener('click', click)
		return tab;
	}


}

module.exports = Html;

},{}],3:[function(require,module,exports){
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

},{}]},{},[1]);
