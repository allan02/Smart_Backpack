module.exports = {
    HTML:function(title, data){
      return `
      <!doctype html>
      <html>
      <head>
        <title>Smart Backpack - Board</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/front">오늘의 공부왕은 너 !</a></h1>
        ${data}
      </body>
      </html>
      `;
    }
  }