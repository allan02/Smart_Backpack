module.exports = {
    HTML1:function(title, list){
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
          table, th, td {
          }
          .jb-th-1 {
            width: 50px;
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
                <h2>Community</h2>
                  <section>
                    <ul class="contact">
                      <li><a href="/write" class="button">글쓰기</a></li>
                  </section>
                  
                  <table>
                    <thead>
                      <tr>
                        <th class="jb-th-1" scope="col">No</th>
                        <th scope="col">제목</th>
                      </tr>
                    </thead>
                      ${list}
                  </table>

                  <section>
                    <ul class="contact">
                      <li><a href="/front" class="button">메인페이지</a></li>
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
    }, HTML2:function(title){
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
                          <label for="email">닉네임</label>
                          <input type="text" name="email" id="email" />
                        </div>
                        <div class="field">
                          <label for="message">내용</label>
                          <textarea name="message" id="message" rows="5" placeholder="Contain your study time"></textarea>
                        </div>
                      </div>
                      <ul class="actions">
                        <li><class="button"><input type = "submit"></class=></li>
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
    }, HTML3:function(title, content, name){
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
          .jb-th-1 {
            width: 100px;
          }
          .jb-th-2 {
            width: 50px;
          }
          .jb-td-1{
            height: 600px;
            vertical-align: top;
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
                        <th class="jb-th-1" scope="col">제목</th>
                        <th scope="col">${name}</th>
                        <th class="jb-th-1">조회수</th>
                        <th class="jb-th-2">0</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="jb-td-1">내용</td>
                        <td class="jb-td-1" colspan="3"><pre>${content}</pre></td>
                      </tr>
                    </tbody>
                  </table>

                  <section>
                    <ul class="contact">
                      <li><a href="/board" class="button">게시판</a></li>
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
    },list:function(filelist){
      var list = '<tbody>';
      var i = 0;
      var j = 0;
      var No = 0;
      console.log(filelist);

      while(j < filelist.length){
        j = j+1;
      }

      while(i < filelist.length){
        No = j-i
        list = list + `<tr><td>${No}</td><td><a href="/data/${filelist[i]}">${filelist[i]}</a></tr>`;
        i = i + 1;
      }
      list = list+'</tbody>';
      return list;
    }, 
  }