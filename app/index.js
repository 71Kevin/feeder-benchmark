const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

console.log('123');
app.post('/insertContacts', function (req, res) {
    console.log(req.body);
    res.send('ok')
  });

  app.listen(process.env.PORT, '0.0.0.0');