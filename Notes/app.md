

# HTML
### app.js

```javascript
//app.js
const User = require('./user.js');
const Post = require('./post.js');

class App{
	constructor(){
		this.user = new User();
		this.user.getUsers().then(data => {
			data.forEach(d => this.populateUser(d))
		});
	}

	Li(user){
		var li = document.createElement('li');
		li.innerText = `${user.name}`
		li.setAttribute('id', user.id);
		li.addEventListener('click', this.click.bind(this));
		return li;
	}

	click(event){
		this.fillUser(event.target.getAttribute('id'));
	}

	fillUser(id){
		//traer post por id de usuario
		let post = new Post();
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
		})
	}

	populateUser(user){
		document.body
		.querySelector('.container .left .user-list')
		.appendChild(this.Li(user));
	}

}


var app = new App();

var p = new Post();

p.getPostByUserId(4).then(data => console.log(data));
```

### index.html
```html
<!doctype html>

<html>
  <head>

    <title>my home page</title>
    <style>
      .container{
        height: 600px;
      }

      .container .left{
        display: inline-block;
        width: 150px;
        background-color: yellow;
      }

      .container .content{
        display: inline-block;
        width: 450px;
        background-color: cyan;
      }

      .user-list li {
        padding: 4px 2px;
        margin: 10px 3px;
      }

    </style>
  </head>
  <body>
    <h1 class="title">My home page</h1>
    <div class="container">
      <div class="left">
        <ul class="user-list">
        </ul>
        
      </div>
      <div class="content">
	<div class="address">
        </div>
      </div>
    </div>
  </body>
    <script src="./app.dist.js"></script>

</html>
```

### User
```javascript
//user.js

class User {
	constructor(){
		this.path = 'https://jsonplaceholder.typicode.com/users';
	}

	async getUsers(){
		const response = await fetch(this.path);
		return await response.json();
	}

	async getUserById(id){
		const response = await fetch(`this.path/${id}`);
		return response.json();
	}

	async getUserByName(name){
		return this.getUsers().then(users => users.find(u => u.name === name))
	}
}

module.exports = User;
```

### Post
```javascript
//post.js
const User = require('./user.js');

class Post {
	constructor(){
	this.path = 'https://jsonplaceholder.typicode.com/posts';
	}

	async getPosts(){
		const response = await fetch(this.path);
		return response.json();
	}

	async getPostById(id){
		const response = await fetch(`${this.path}/${id}`);
		return response.json();
	}

	async getPostByUserId(userId){
		const posts = await this.getPosts();
		return posts.filter(p => p.userId === userId);
	}

	async getPostByUserName(userName){
		const user = await User.getUserByName(UserName);
		const posts = await this.getPosts();
		return posts.filter(p => p.userId === user.id);
	}
}

module.exports = Post;
```

### Comments
```javascript
//comment.js
const Post = require('./post.js');

class Comment {
	constructor(){
	this.path = 'https://jsonplaceholder.typicode.com/comments';
	}

	async getComments(){
		const response = await fetch(this.path);
		return await response.json();
	}

	async getCommentsById(id){
		const response = await fetch(`${this.path}/${id}`);
		return await response.json();
	}

	async getCommentsByPostId(postId){
		const response = await fetch(this.path);
		const comments = await response.json();
		return comments.filter(c => c.postId === postId);
	}

	async getCommentsByUserId(userId){
		let post = new Post();
		await post.getPostByUserId(userId)
		.then( p => {
			console.log(p);
			post = p;
		})

		let comments = [];

		await post.forEach(p => {
			this.getCommentsByPostId(p.id).then(c => comments.push(c));
		})
		return comments;
	}
}

module.exports = Comment;
```
> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbMjA5NzA5MzU5NF19
-->