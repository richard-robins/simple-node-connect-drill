var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = process.argv[2] || 3737;
//nodemon server.js port#


// TODO server front end files with static
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({
  secret: 'saturdaaaaaaaaaay',
  resave: true,
  saveUninitialized: true,
  //cookie: {secure: true }
}));


// TODO Initialize Session



app.post("/api/screenname", function(req, res){
  // TODO Save screenname to session req.body this comes from the form on the angular app
  req.session.screenname = req.body.screenname;
  console.log(req.session);
  res.status(201).send('success');
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});
