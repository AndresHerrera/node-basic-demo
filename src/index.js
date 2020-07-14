require('dotenv').config();

//access to env vars
console.log(`Wellcome to : ${process.env.APP_NAME}`);

const app = require('./app');

const port = app.get('port');

app.listen(port)

console.log('Server on port', port  );