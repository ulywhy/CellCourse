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
