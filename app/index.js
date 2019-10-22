const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('./mongoose/connect');
const contactUtil = require('./util/contact-util');

app.use(bodyParser.json()); 

(async function(){
  await mongo.connect();
  app.post('/insertContacts', async function (req, res) {
    await contactUtil.insertContacts(req, res);
  });
  
  app.listen(process.env.PORT, '0.0.0.0');
  
})();
