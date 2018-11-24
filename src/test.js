const got = require('got')

got('http://localhost:5000')
.then(serverResponse => {
  console.log(serverResponse.body);
})
.catch(error => {
  console.log(error);
  process.exit(1)
})
