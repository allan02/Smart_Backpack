"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
var fs = require('fs');

var setid; //댓글
var commentList; //댓글

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
  console.log("id: ", next);
  setid = next

  //----------------댓글------------------
  app.post('/create_process2', (req, res) => {
    var post = req.body;
    console.log(post);
    var nickname = post.nickname; //닉네임
    var comment = post.comment; //댓글 내용
    console.log(nickname);
    console.log(comment);

    //글쓰기때랑 동일합니당
    fs.writeFile(`data/${setid}/${comment}.txt`, nickname, 'utf8', function(err){
      res.redirect('data/'+setid);
    })
  })

  //글 이름으로 폴더 만들기 ex)data/test1
  if(!fs.existsSync(`data/${next}`)){
    fs.mkdirSync(`data/${next}`);
  }

  //게시판때 불러왔던 거랑 동일합니당
  fs.readdir(`./data/${next}`,function(error, filelist){
    if(error) console.log(error);
    commentList = template.commentList(filelist, next);
  })
  //---------------------------------------
  
  var sql = 'SELECT contents FROM community WHERE title = ?;';
  db.query(sql,next,function(err,results,fields){
    if(err) console.log(err);
    const data = results.map(item=>item.contents);
    console.log("내용: ",data[0])
    var title = 'Smart Backpack - Data';
    var html = template.DATA(title, data[0], next, commentList);
    response.send(html);
    setid = next;
  })
})


app.get('/board', function(request, response){
  var sql = 'SELECT title, DATE_FORMAT(in_date,"%Y-%m-%d")AS date, count FROM community;';
  db.query(sql, function(err, filelist, fields){  
    var title = 'Smart Backpack - Board';
    if(err) console.log(err);
    const titleArr = filelist.map(item=>item.title);
    const dateArr = filelist.map(item=>item.date);
    const hitArr = filelist.map(item=>item.count);
    var list = template.list(titleArr,dateArr,hitArr);
    var html = template.BOARD(title, list);
    response.send(html);
  });
});

//추가함
app.get('/write', function(request, response){

   var title = 'Smart Backpack - Write';

    var html = template.WRITE(title);
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
    db.query(sql, [name, message], function(err, fields){  
      if(err) console.log(err);
      res.redirect('/board');
    });
});

module.exports = app;

