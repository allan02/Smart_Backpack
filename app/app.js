"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
var fs = require('fs');

const db = require("./src/config/db"); //db

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
  var sql = 'SELECT contents FROM community WHERE title = ?;';
  db.query(sql,next,function(err,results,fields){
    if(err) console.log(err);
    const data = results.map(item=>item.contents);
    console.log(data[0])
    var title = 'Smart Backpack - Data';
    var html = template.HTML3(title, data[0], next);
    response.send(html);
  })
})

app.get('/board', function(request, response){
  var sql = 'SELECT title FROM community;';
  db.query(sql, function(err, filelist, fields){  
    var title = 'Smart Backpack - Board';
    if(err) console.log(err);
    const titleArr = filelist.map(item=>item.title);
    var list = template.list(titleArr);

    var html = template.HTML1(title, list);
    response.send(html);
  });
});

//추가함
app.get('/write', function(request, response){

   var title = 'Smart Backpack - Write';

    var html = template.HTML2(title);
    response.send(html);
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
 
    var sql = 'INSERT INTO community(title, contents) VALUES(?, ?);';
    db.query(sql,  [name, message], function(err, fields){  
      if(err) console.log(err);
      res.redirect('/board');
    });
  
});

module.exports = app;


