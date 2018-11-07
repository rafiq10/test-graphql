const Express =require('express');
const GraphHTTP = require('express-graphql')
const config = require('./config')
const log = require('./logger')
const Schema = require('./schema')


const APP_PORT = config.port;

const app = Express();

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));

app.listen(APP_PORT, () => {
  log.info('API Service started', { port: APP_PORT });
})
