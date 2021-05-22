var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;

    console.log(pathname)
    //console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }

    if (pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
        body = body += data;
      });
      request.on('end', function(){
        var post = qs.parse(body)
        console.log(post)
      });
    }

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
    //console.log(__dirname + _url)


});
app.listen(3000);
