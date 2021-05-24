module.exports = {
  BOARD:function(title, list){
    return `
    <!doctype html>
    <html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">
    </script>

    <head>
      <title>${title}</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="js/home/css/home/template.css">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="js/home/css/home/assets/css/main.css" />
         <noscript><link rel="stylesheet" href="js/home/css/home/assets/css/noscript.css"/></noscript>
        <style>
           canvas{
              position: absolute;
           }
        .jb-th-1 {
          width: 5%;
        }
        </style>
    </head>

    <body class="is-preload">
      <!-- Sidebar -->
        <section id="sidebar">
          <div class="inner">
            <nav>
              <ul>
                <li><a href="#three">Community</a></li>
              </ul>
            </nav>
          </div>
        </section>

      <!-- Wrapper -->
        <div id="wrapper">
          <!-- Three -->
          <section id="three" class="wrapper style1 fullscreen fade-up">
            <div class="inner">
              <div style="float: left; width: 90%;">
                <h2>Community</h2>
              </div>
              <div style="float: right; width: 10%;">
                <section>
                  <ul class="contact">
                    <li><a href="/write" class="button">글쓰기</a></li>
                </section>
              </div>
              
              <div>
                <table>
                  <thead>
                    <tr>
                      <th class="jb-th-1" scope="col">No</th>
                      <th scope="col"><center>제목</center></th>
                      <th width="200px"><center>날짜</center></th>
                      <th width="100px"><center>조회수</center></th>
                    </tr>
                  </thead>
                    ${list}
                </table>

                <section>
                  <ul class="contact">
                    <center><li><a href="/front" class="button">메인페이지</a></li></center>
                </section>
              </div>
            </div>
          </section>
      </div>

      <!-- Footer -->
        <footer id="footer" class="wrapper style1-alt">
          <div class="inner">
            <ul class="menu">
              <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>

      <!-- Scripts -->
        <script src="js/home/css/home/assets/js/jquery.min.js"></script>
        <script src="js/home/css/home/assets/js/jquery.scrollex.min.js"></script>
        <script src="js/home/css/home/assets/js/jquery.scrolly.min.js"></script>
        <script src="js/home/css/home/assets/js/browser.min.js"></script>
        <script src="js/home/css/home/assets/js/breakpoints.min.js"></script>
        <script src="js/home/css/home/assets/js/util.js"></script>
        <script src="js/home/css/home/assets/js/main.js"></script>

    </body>
    </html>
    `;
  }, WRITE:function(title){
    return `
    <!doctype html>
    <html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">
    </script>

    <head>
      <title>${title}</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="js/home/css/home/template.css">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="js/home/css/home/assets/css/main.css" />
      <noscript><link rel="stylesheet" href="js/home/css/home/assets/css/noscript.css"/></noscript>
      <style>
        canvas{
          position: absolute;
        }

      </style>
    </head>

    <body class="is-preload">
      <!-- Sidebar -->
        <section id="sidebar">
          <div class="inner">
            <nav>
              <ul>
                <li><a href="#three">Community</a></li>
              </ul>
            </nav>
          </div>
        </section>

      <!-- Wrapper -->
        <div id="wrapper">
          <!-- Three -->
          <section id="three" class="wrapper style1 fullscreen fade-up">
            <div class="inner">
              <h2>글쓰기</h2>
              <div>
                <section>
                  <form action="/create_process" method="post">
                    <div class="fields">
                      <div class="field half">
                        <label for="name">제목</label>
                        <input type="text" name="name" id="name" />
                      </div>
                      <div class="field half">
                        <label for="nickname">닉네임</label>
                        <input type="text" name="nickname" id="nickname" />
                      </div>
                      <div class="field">
                        <label for="message">내용</label>
                        <textarea name="message" id="message" rows="12" placeholder="Contain your study time"></textarea>
                      </div>
                    </div>
                    <ul class="actions">
                      <li><class="button"><input type = "submit"></class></li>
                    </ul>
                  </form>
                </section>
              </div>
            </div>
          </section>
      </div>

      <!-- Footer -->
        <footer id="footer" class="wrapper style1-alt">
          <div class="inner">
            <ul class="menu">
              <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>

      <!-- Scripts -->
        <script src="js/home/css/home/assets/js/jquery.min.js"></script>
        <script src="js/home/css/home/assets/js/jquery.scrollex.min.js"></script>
        <script src="js/home/css/home/assets/js/jquery.scrolly.min.js"></script>
        <script src="js/home/css/home/assets/js/browser.min.js"></script>
        <script src="js/home/css/home/assets/js/breakpoints.min.js"></script>
        <script src="js/home/css/home/assets/js/util.js"></script>
        <script src="js/home/css/home/assets/js/main.js"></script>

    </body>
    </html>
    `;
  }, DATA:function(title, content, date, hit, name){ //수정함 원래는 date없음
    return `
    <!doctype html>
    <html>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js">
    </script>

    <head>
      <title>${title}</title>
      <meta charset="utf-8">
      <link rel="stylesheet" href="/js/home/css/home/template.css">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel='stylesheet' type="text/css" href="/js/home/css/home/assets/css/main.css" />
      <noscript><link rel="stylesheet" href="/js/home/css/home/assets/css/noscript.css"/></noscript>
      <style>
        canvas{
          position: absolute;
        }
        table, th, td {
        }
        .td-color{
          background-color: rgba(255, 255, 255, 0.05);
        }     
        .comment_writer {
          margin-top: 1px;     
          margin-bottom: 1px;
          text-indent: 10pt;
        }
        .comment_content{
          margin-top: 1px;     
          margin-bottom: 1px;
          text-indent: 20pt;
        }
        .comment_date { 
          font-size: small; 
          color: gray;
          margin-top: 4px;
          margin-bottom: 1px;
          text-indent: 10pt;
        }

      </style>
    </head>

    <body class="is-preload">
      <!-- Sidebar -->
        <section id="sidebar">
          <div class="inner">
            <nav>
              <ul>
                <li><a href="#three">Community</a></li>
              </ul>
            </nav>
          </div>
        </section>

      <!-- Wrapper -->
        <div id="wrapper">
          <!-- Three -->
          <section id="three" class="wrapper style1 fullscreen fade-up">
            <div class="inner">
              <table>
                  <thead>
                    <tr>
                      <th width="70px" scope="col">제목</th>
                      <th scope="col">${name}</th>
                      <th width="70px" scope="col">날짜</th>
                      <th width="150px" scope="col">${date}</th>
                      <th width="100px">조회수</th>
                      <th width="50px">${hit}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td height="600px" verticle-align="top">내용</td>
                      <td height="600px" verticle-align="top" colspan="5"><pre>${content}</pre></td>
                    </tr>
                  </tbody>
                </table>
                
                <div>
                  <form action="/create_process2" method="post">
                    <h4>댓글</h4>
                    <div style="float: left; width: 85%;">
                      <input type="text" name="nickname" id="nickname" placeholder="닉네임"/>
                      <textarea name="comment" id="comment" rows="2" placeholder="댓글 작성"></textarea>
                    </div>
                    <div style="float: left; padding-top:40px; padding-left: 15px; width: 13%;">
                      <ul class="contact">
                        <li><class="button"><input type = "submit"></class></li>
                    </div>
                  </form>
                </div>

                <div>
                  <br><br><br><br><hr>
                  <section>
                    <form action="/create_process" method="post">
                      <div class="field">
                        <table>
                          <tr>
                            <td class="td-color" colspan="2">
                              <p class="comment_writer"><b>작성자</b></p>
                              <p class="comment_content">댓글 내용</p>
                              <p class="comment_date">시간</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                  </section>
                </div>
                  

                <section>
                  <ul class="contact">
                    <center><li><a href="/board" class="button">게시판</a></li></center>
                </section>
            </div>
          </section>
      </div>

      <!-- Footer -->
        <footer id="footer" class="wrapper style1-alt">
          <div class="inner">
            <ul class="menu">
              <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </footer>

      <!-- Scripts -->
        <script src="/js/home/css/home/assets/js/jquery.min.js"></script>
        <script src="/js/home/css/home/assets/js/jquery.scrollex.min.js"></script>
        <script src="/js/home/css/home/assets/js/jquery.scrolly.min.js"></script>
        <script src="/js/home/css/home/assets/js/browser.min.js"></script>
        <script src="/js/home/css/home/assets/js/breakpoints.min.js"></script>
        <script src="/js/home/css/home/assets/js/util.js"></script>
        <script src="/js/home/css/home/assets/js/main.js"></script>

    </body>
    </html>
    `;
  }, list:function(filelist,datelist, hitlist){
    var list = '<tbody>';
    var i = 0;
    var j = 0;
    var No = 0;
    // console.log(filelist);

    while(j < filelist.length){
      j = j+1;
    }

    while(i < filelist.length){
      No = j-i
      list = list + `<tr><td><center>${No}</center></td><td><a href="/data/${filelist[i]}">${filelist[i]}</a></td><td><center>${datelist[i]}</center></td><td><center>${hitlist[i]}</center></td></tr>`;
      i = i + 1;
    }
    list = list+'</tbody>';
    return list;
  }, 
}