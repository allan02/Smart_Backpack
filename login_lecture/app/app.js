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

const home = require("./src/routes/home"); // 라우팅

app.set("views", "./src/views");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get("/front", (req, res) => {
  res.render("home/index.html");
});

var template = require("./src/views/home/template.js");
var template2 = require("./src/views/home/template2.js");

app.get("/data/:id", (request, response) => {
  var next = request.params.id;
  console.log(next);
  var data = fs.readFileSync(`data/${next}`, "utf-8");
  console.log(data);
  var title = "Smart Backpack";
  var html = template.HTML3(title, data, next);
  response.send(html);
});

app.get("/board", function (request, response) {
  fs.readdir("./data", function (error, filelist) {
    var title = "Smart Backpack";
    //console.log(filelist);

    var list = template.list(filelist);
    var html = template.HTML1(title, list);
    response.send(html);
  });
});
app.get("/write", function (request, response) {
  fs.readdir("./data", function (error, filelist) {
    var title = "Smart Backpack - Write";
    //console.log(filelist);

    var list = template.list(filelist);
    var html = template.HTML2(title);
    response.send(html);
  });
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
  console.log(name);
  console.log(message);
  fs.writeFile(`data/${name}.txt`, message, "utf8", function (err) {
    res.redirect("/front");
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
