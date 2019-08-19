const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.APP_PORT || 3001;
const routes = require('./routes');
const LoggerRequest = require('./middlewares').logger;

app.use(bodyParser.json());
app.use(LoggerRequest);

routes(app);

app.listen(port, () => {
  console.log(`Start server in: http://127.0.0.1:${port}`);
});
