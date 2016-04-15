'use strict';

var express = require("express");
var moment = require("moment");
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 4000;

var stubInfo = {
  demographic: {
    firstName: "Shane",
    lastName: "Adam",
    email: "shane.adam@aa.com",
    phone: "817-555-1212",
    birthDate : moment().subtract(42, 'years'),
    address: {
      line1: "123 Main St.",
      line2: null,
      city: "Arlington",
      state: "TX",
      zip: "76001"
    },

  },
  travel: {
    programs: {
      aAdvantage: "ABC1234",
      hertz: "XYZ123456"
    }
  },
  payment: {
    businessVisa: {
      number: "4128000000000000",
      expiration: "04/19",
      CID: "023"
    }
  }
}
var backup = JSON.parse(JSON.stringify(stubInfo));

app.use(bodyParser.json({ inflate: true }));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/reset', function(req, res) {
  stubInfo = JSON.parse(JSON.stringify(backup));
  res.send(204);
});

app.get('/notebook', function(req, res) {
  res.send(stubInfo);
});

app.get('/notebook/:id', function(req, res) {

  res.send(stubInfo[req.params.id] || 404);

});

app.post('/notebook/:id', function(req, res) {
  stubInfo[req.params.id] = req.body;
  res.send(204);
});

app.listen(port, function() {
  console.log("CortanaStub is now running on port " + port);
})
