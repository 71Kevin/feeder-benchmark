const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('./mongoose/connect');
const contactUtil = require('./util/contact-util');
app.use(bodyParser.json()); 


(async function(){
  await mongo.connect();
  app.post('/insertContacts', function (req, res) {
    console.log(req.body);
    res.send('ok')
  });

  app.get('/test', function(req, res){

  });

  app.listen(process.env.PORT, '0.0.0.0');

})();
