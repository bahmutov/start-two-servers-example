# start-two-servers-example

> Example using `start-server-and-test` to start two servers before testing

## Run

You can run each service by itself

- start api with `npm run start:api`, runs on port 7600
- start server with `npm run start:server`, runs on port 5000

Then you can test that both have started using `npm t` which just executes two requests, see [src/test.js](src/test.js)

Or you can execute `npm run test:all` which uses [start-server-and-test](https://github.com/bahmutov/start-server-and-test) to start each server, then runs the test - and shuts down the servers. The command is `"test:all": "start-test start:server-and-api 5000 test"`, which will execute `start:server-and-api` script until server responds at port 5000 and the test can run. The server command only starts the server when API responds: `"start:server-and-api": "start-test start:api 7600 start:server"`.

Thus first the API starts (and responds), then the server starts (and responds) and then the `npm t` command executes the test script.

