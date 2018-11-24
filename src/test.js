const got = require('got')

// in order for test to pass both API and SERVER endpoints have to respond
const apiEndpoint = 'http://localhost:7600'
const serverEndpoint = 'http://localhost:5000'

Promise.all([
  got(apiEndpoint)
  .then(apiResponse => {
    console.log('API SAYS:', apiResponse.body);
  }),

  got(serverEndpoint)
  .then(serverResponse => {
    console.log('SERVER SAYS:', serverResponse.body);
  })
])
.catch(error => {
  console.log(error);
  process.exit(1)
})
