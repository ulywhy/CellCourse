
# environment setup 

+ install nvm

```bash
sudo apt-get update
sudo apt-get install build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash 
```

#### important: close terminal and reopen to load *nvm* 

+ install Node.js

```bash
nvm install --lts
```

+ install nodemon
```bash
nvm install -g nodemon
```

+ install Json Server 
more instructions on [day 3](https://towa-e-learning.firebaseapp.com/learning/chapter/kfGAifxsJSgvqs2epynb) 
```bash
nvm install -g json server
```

+ install Browserify
```bash
npm install -g browserify
```

+ install HTTP server
```bash
npm install -g http-server
```
#### run
cd into your _http directory_
```bash
http-server -o
```
