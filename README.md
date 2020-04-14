# start-two-servers-example

> Example using [start-server-and-test](https://github.com/bahmutov/start-server-and-test) to start two servers before testing

## Run

You can run each service by itself

- start api with `npm run start:api`, runs on port 7600
- start server with `npm run start:server`, runs on port 5000

Then you can test that both have started using `npm t` which just executes two requests, see [src/test.js](src/test.js)

Or you can use `npm run test:all` that starts first service, waits for it to respond. Then it starts the second service, and when it responds, runs the test command
