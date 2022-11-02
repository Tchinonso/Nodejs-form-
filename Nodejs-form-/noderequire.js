var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(
      '<form action = "file to upload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="file to upload"><br>');
    res.write('input type="submit">');
    res.write("</form>");
    return res.end();
  })
  .listen(8080);
