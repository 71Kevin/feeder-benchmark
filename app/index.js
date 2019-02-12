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

    // const contact = new Contact({
    //   quantity: req.body.quantity,
    //   mailingId: req.body.mailingId
    // });
    // console.log(req.body);
    // res.send('ok');
    
    // contact.save(function(err, u) {
    //   if (err) return next(err);
    //   return res.json(u);
    // });
    
  });
  
  app.listen(process.env.PORT, '0.0.0.0');
  
})();