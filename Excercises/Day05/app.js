//app.js
const Person = require('./person.js');

class App{
	constructor(){
		this.person = new Person();
		this.person.getPeople().then(people => {
			people.forEach(d => this.populatePeople(d))
		});

		this.currentCharacter
		document.querySelectorAll('.container .content .button')
		.forEach(el => el.addEventListener('click', this.changeSection.bind(this)))
	}

	changeSection(event){
		console.log(event.target.getAttribute('id'))
		this.fillCharacter(event.target.getAttribute('id'))
	}

	Li(character){
		var li = document.createElement('li');
		li.innerText = `${character.name}`
		li.setAttribute('id', character.id);
		li.addEventListener('click', this.click.bind(this));
		return li;
	}

	click(event){
		this.fillCharacter(event.target.getAttribute('id'));
		document.querySelectorAll('.container .content .button')
		.forEach(el => el.setAttribute('id', event.target.getAttribute('id')));
	}

	fillCharacter(id, section){
		//traer post por id de usuario
		this.fillPersonalData(id);
		/*let post = new Post();
		console.log(typeof id)
		post.getPostByUserId(Number(id)).then(posts => {
			document.querySelector('.container .content')
			.innerText = posts.map( post =>
				`
					userId: ${id}
					postId: ${post.id}
					${post.title}

					${post.body}
				`
			).reduce((acc, val) => acc += val)
		})*/
	}

	fillPersonalData(id){
		this.person.getPerson(id).then(person => {
			filldata(`
				name:       ${person.name}
				heigth:     	${person.height}
				mass:       	${person.mass}
				hair color: 	${person.hair_color}
				skin color: 	${person.skin_color}
				eye color:  	${person.eye_color}
				birth year: 	${person.birth_year}
				gender:     	${person.gender}`
			)
		})
	}

	populatePeople(character){
		document.body
		.querySelector('.container .left .user-list')
		.appendChild(this.Li(character));
	}

	fillData(data){
		document.querySelector('.container .content .board').innerText = data;
	}

}


var app = new App();
