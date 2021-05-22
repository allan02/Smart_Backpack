"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
var fs = require('fs');

const home = require("./src/routes/home"); // 라우팅

app.set("views", "./src/views");
app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");

app.get("/front", (req, res) => {
        res.render("home/index.html");
})

var template = require('./src/views/home/template.js');


app.get("/data/:id", (request, response) => {
  var next = request.params.id;
  console.log(next);
  var data = fs.readFileSync(`data/${next}`,'utf-8');
  console.log(data);
  var title = 'Smart Backpack - Data';
  var html = template.DATA(title, data, next);
  response.send(html);
})





app.get('/board', function(request, response){
    fs.readdir('./data', function(error, filelist){
      var title = 'Smart Backpack - Board';
      //console.log(filelist);

      var list = template.list(filelist);
      var html = template.BOARD(title, list);
      response.send(html);
    });
  });



//추가함
app.get('/write', function(request, response){
  fs.readdir('./data', function(error, filelist){
    var title = 'Smart Backpack - Write';
    //console.log(filelist);

    var list = template.list(filelist);
    var html = template.WRITE(title);
    response.send(html);
  });
});






app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/" , home); // use -> 미들 웨어를 등록 해주는 메서드.

app.post('/create_process', (req, res) => {
    var post = req.body;
    console.log(post);
    var name = post.name;
    var message = post.message;
    console.log(name);
    console.log(message);
    fs.writeFile(`data/${name}.txt`, message, 'utf8', function(err){
        res.redirect('/board');
    }); 
});

module.exports = app;


