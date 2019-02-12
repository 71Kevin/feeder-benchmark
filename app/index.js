const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('./mongoose/connect');
const Contact = require('./mongoose/models/contact.js');

app.use(bodyParser.json()); 

// (async function(){

//   await mongo.connect();
//   app.post("/test", function(request, response, next) {    
//     const contact = new Contact({
//         contact: request.body.contactId,
//         mailingId: request.body.mailingId,

//     });

//     contact.save(function(err, u) {
//         if (err) return next(err);
//         return request.json(u);

//     });
//   });
// })();


(async function(){
  await mongo.connect();
  app.post('/insertContacts', function (req, res) {
    const contact = new Contact({
      quantity: req.body.quantity
    });
    console.log(req.body);
    res.send('ok');
    
    contact.save(function(err, u) {
      if (err) return next(err);
      return res.json(u);
    });
  });
  
  app.listen(process.env.PORT, '0.0.0.0');
  
})();