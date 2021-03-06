"use strict";
/*opencv 부분*/
const cv = require("opencv4nodejs");

const express = require("express");
const app = express();
/*opencv 부분*/

const wCap = new cv.VideoCapture(0);
wCap.set(cv.CAP_PROP_FRAME_WIDTH, 100);
wCap.set(cv.CAP_PROP_FRAME_HEIGHT, 100);
var camFps = 30;
var camInterval = 1000 / camFps;

/*opencv 부분*/
const bodyParser = require("body-parser");
const PORT = 3000;
var fs = require("fs");

const db = require("./src/config/db"); //db
const home = require("./src/routes/home"); // 라우팅

app.set("views", "./src/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get("/front", (req, res) => {
  res.render("home/index.html");
});

var template = require("./src/views/home/template.js");

app.get("/data/:id", (request, response) => {
  var next = request.params.id;
  setid = next;

  //----------------댓글------------------
  app.post("/create_process2", (req, res) => {
    var post = req.body;
    var nickname = post.nickname; //닉네임
    var comment = post.comment; //댓글 내용

    var sql = "INSERT INTO comments(post, name, contents) VALUES(?, ?, ?);";
    db.query(sql, [next, nickname, comment], function (err, fields) {
      if (err) console.log(err);
      res.redirect("data/" + setid);
    });
  });
  var sql =
    'SELECT name, DATE_FORMAT(in_date,"%Y-%m-%d")AS date, contents FROM comments WHERE post = ?;';
  db.query(sql, setid, function (err, filelist, fields) {
    if (err) console.log(err);
    const nameArr = filelist.map((item) => item.name);
    const dateArr = filelist.map((item) => item.date);
    const contentsArr = filelist.map((item) => item.contents);
    commentList = template.commentList(nameArr, dateArr, contentsArr, next);
  });

  var sql =
    'SELECT contents, DATE_FORMAT(in_date,"%Y-%m-%d")AS date, count FROM community WHERE title = ?;';
  db.query(
    "UPDATE community set count = count+1 WHERE title = ?;",
    next,
    function (err, results, fields) {
      if (err) console.log(err);
    }
  );

  db.query(sql, next, function (err, results, fields) {
    if (err) console.log(err);
    const data = results.map((item) => item.contents);
    const date = results.map((item) => item.date);
    const hit = results.map((item) => item.count);

    var title = "Smart Backpack - Data";
    var html = template.DATA(
      title,
      data[0],
      date[0],
      hit[0],
      next,
      commentList
    );
    response.send(html);
    setid = next;
  });
  var data = fs.readFileSync(`data/${next}`, "utf-8");
  console.log(data);
  var title = "Smart Backpack - Data";
  var html = template.HTML3(title, data, next);
  response.send(html);
});

app.get("/board", function (request, response) {
  var sql =
    'SELECT title, DATE_FORMAT(in_date,"%Y-%m-%d")AS date, count FROM community;';
  db.query(sql, function (err, filelist, fields) {
    var title = "Smart Backpack - Board";
    if (err) console.log(err);
    const titleArr = filelist.map((item) => item.title);
    const dateArr = filelist.map((item) => item.date);
    const hitArr = filelist.map((item) => item.count);
    var list = template.list(titleArr, dateArr, hitArr);
    var html = template.BOARD(title, list);
    response.send(html);
  });
});
app.get("/write", function (request, response) {
  var title = "Smart Backpack - Write";

  var html = template.WRITE(title);
  response.send(html);
});

app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들 웨어를 등록 해주는 메서드.

app.post("/create_process", (req, res) => {
  var post = req.body;
  console.log(post);
  var name = post.name;
  var message = post.message;
  var sql = "INSERT INTO community(title, contents) VALUES(?, ?);";
  db.query(sql, [name, message], function (err, fields) {
    if (err) console.log(err);
    res.redirect("/board");
  });
});
/*opencv 부분*/
app.io = require("socket.io")();

app.io.on("connection", function (socket) {
  console.log("a user connected");

  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);
var motionx = 0;
var motiony = 0;
setInterval(function () {
  wCap.readAsync(function (err, frame) {
    if (err) throw err;
    if (!frame) return;
    classifier.detectMultiScale(frame).objects.forEach((faceRect, i) => {
      cv.drawDetection(frame, faceRect, {
        color: new cv.Vec(255, 0, 0),
        segmentFraction: 4,
      });
      console.log("x" + faceRect.x);
      console.log("y" + faceRect.y);
      motionx = faceRect.x;
      motiony = faceRect.y;
    });
    app.io.emit("frame", {
      buffer: cv.imencode(".png", frame),
      motionx,
      motiony,
    });
  });
}, camInterval / 10);
/*opencv 부분*/

module.exports = app;
