# NODE BASIC DEMO

```
$ cd node-basic-demo
$ npm init -y
```

### Install the dependencies

* Express
* Morgan
* Ejs

```
$ npm i express morgan ejs
```

* Nodemon
```
$ npm i nodemon -D
```

* Edit package.json

```
"scripts":
{
	"dev": "nodemon src/index.js"
}
```

* dotenv
```
$ npm i dotenv
```

### Env file
```
$ vim .env
```

```
APP_NAME = Test App
PORT=5000
```

### Folders and Files
```
$ mkdir src
$ mkdir src/views
$ mkdir src/routes
$ mkdir src/public
$ vim src/index.js
$ vim src/app.js
$ vim src/views/index.ejs
$ vim src/routes/index.routes.js
$ vim src/public/style.css
```

### Run dev server

```
$ npm run dev
```


